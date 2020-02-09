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

        public bool UniqueUsername(string username)
        {
            int count;
            using (SqlCommand command = new SqlCommand("SELECT COUNT(*) FROM Users WHERE Username = @Username"))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Username", username),
                });
                DataTable dt = DataContext.ExecuteReader(command);
                count = (int) dt.Rows[0][0];
            }
            if (count > 0)
                return false;
            else
                return true;
        }

        public void Add()
        {
            using (SqlCommand command = new SqlCommand("Insert into Users (" +
                "Username, " +
                "Password) " +
                "output INSERTED.Id values(" +
                "@Username, " +
                "@Password)"))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Username", Username),
                    DataContext.CreateSqlParameter("@Password", Password),
                });

                DataTable dt = DataContext.ExecuteReader(command);
                Id = (int)dt.Rows[0][0];
            }
        }

        public User Login()
        {
            DataTable dt;
            using (SqlCommand command = new SqlCommand("SELECT * FROM Users WHERE Username = @Username " +
                "and Password = @Password"))
            {
                command.Parameters.Add(DataContext.CreateSqlParameter("@Username", Username));
                command.Parameters.Add(DataContext.CreateSqlParameter("@Password", Password));
                dt = DataContext.ExecuteReader(command);
            }
            if (dt.Rows.Count == 0)
                return null;

            User user = new User(dt.Rows[0]);

            return user;
        }
    }
}
