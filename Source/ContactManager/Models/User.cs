using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace ContactManager.Models
{
    public class User
    {


        public int Id { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public List<Contact> Contacts { get; set; }

        public User()
        {
            Contacts = new List<Contact>();
        }

        public User(string username, string password)
        {
            Username = username;
            Password = password;
        }

        internal User(DataRow sqlRow) : this()
        {
            Id = Convert.ToInt32(sqlRow["Id"]);
            Username = sqlRow["Username"].ToString();
            Password = sqlRow["Password"].ToString();
        }

        public static List<Contact> LoadUserContacts(int userId)
        {
            DataTable dt;
            using (SqlCommand command = new SqlCommand("Select * from Contacts where User_id = @User_id"))
            {
                command.Parameters.Add(DataContext.CreateSqlParameter("@User_id", userId));
                dt = DataContext.ExecuteReader(command);
            }

            List<Contact> contacts = new List<Contact>();
            foreach (DataRow row in dt.Rows)
            {
                Contact contact = new Contact(row);
                contact.LoadPhoneNumbers();
                contact.LoadEmails();
                contacts.Add(contact);
            }

            return contacts;
        }

        public IEnumerable<Contact> SearchContacts(SearchCriteria criteria)
        {
            return Contacts.Where(con => con.MatchesSearchCriteria(criteria));
        }

        public void LoadContacts()
        {
            Contacts = LoadUserContacts(Id);
        }

        private static int saltLengthLimit = 32;

        private static byte[] GetSalt()
        {
            return GetSalt(saltLengthLimit);
        }
        private static byte[] GetSalt(int maximumSaltLength)
        {
            var salt = new byte[maximumSaltLength];
            using (var random = new RNGCryptoServiceProvider())
            {
                random.GetNonZeroBytes(salt);
            }

            return salt;
        }
        public static byte[] GetHash(string password, string salt)
        {
            byte[] unhashedBytes = Encoding.Unicode.GetBytes(String.Concat(salt, password));

            SHA256Managed sha256 = new SHA256Managed();
            byte[] hashedBytes = sha256.ComputeHash(unhashedBytes);

            return hashedBytes;
        }
        public void RegisterUser(string username, string password)
        {
            using (SqlCommand command = new SqlCommand("Insert into Users (" +
                "Username, " +
                "Password" ))
                "output INSERTED.Id values(" +
                "@Username, " +
                "@Password) "))        

                password = GetHash( password, GetSalt()).ToString();
        



            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Username", username),
                    DataContext.CreateSqlParameter("@Password", password),
                });

                DataTable dt = DataContext.ExecuteReader(command);
                Id = (int)dt.Rows[0][0];
            }

        }
    }
}
