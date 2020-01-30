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

        public void RegisterUser(string username, string password)
        {
            using (SqlCommand command = new SqlCommand("Insert into Users (" +
                "Username, " +
                "Password) " +
                "output INSERTED.Id values(" +
                "@Username, " +
                "@Password) "))      
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
        /*public int Login(string username, string password)
        {
            DataTable dt;
            using(SqlCommand command = new SqlCommand("SELECT * From Users where Username = @Username (" +
                "and password = @Password"))
            {
                command.Parameters.Add(DataContext.CreateSqlParameter("@Username", username));
                command.Parameters.Add(DataContext.CreateSqlParameter("@Password", password));
                dt = DataContext.ExecuteReader(command);
                {
                    
                    return InternalServerError(ex);
                }
            }
            }
        }*/
    }
}
