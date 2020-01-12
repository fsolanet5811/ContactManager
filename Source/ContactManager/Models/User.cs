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
            return Contacts.Where(con => con.MathcesSearchCriteria(criteria));
        }

        public void LoadContacts()
        {
            Contacts = LoadUserContacts(Id);
        }
    }
}
