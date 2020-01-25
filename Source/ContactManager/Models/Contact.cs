using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace ContactManager.Models
{
    public class Contact
    {

        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName
        {
            get
            {
                return $"{FirstName} {LastName}";
            }
        }

        public List<PhoneNumber> PhoneNumbers { get; set; }

        public List<Email> Emails { get; set; }

        public string Address { get; set; }

        public DateTime? Birthday { get; set; }

        public string Company { get; set; }

        public string Notes { get; set; }

        public Contact()
        {
            PhoneNumbers = new List<PhoneNumber>();
            Emails = new List<Email>();
        }

        internal Contact(DataRow sqlRow) : this()
        {
            Id = Convert.ToInt32(sqlRow["Id"]);
            FirstName = sqlRow["First_Name"].ToString();
            LastName = sqlRow["Last_Name"].ToString();
            Address = sqlRow["Address"].ToString();
            Birthday = sqlRow["Birthday"] == DBNull.Value ? null : (DateTime?)sqlRow["Birthday"];
            Company = sqlRow["Company"].ToString();
            Notes = sqlRow["Notes"].ToString();
        }

        /// <summary>
        /// Adds this contact as a new contact into the database.
        /// Populates its Id property with the one that the database gave it.
        /// </summary>
        public void Add(int userId)
        {
            // We are returning back the Id that was inserted into the database so that the caller can reference this contact later.
            using (SqlCommand command = new SqlCommand("Insert into Contacts (" +
                "User_id, " +
                "First_Name, " +
                "Last_Name, " +
                "Birthday, " +
                "Address, " +
                "Company, " +
                "Notes) " + 
                "output INSERTED.Id values(" +
                "@User_id, " +
                "@First_Name, " +
                "@Last_Name, " +
                "@Birthday, " +
                "@Address, " +
                "@Company, " +
                "@Notes) "))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@User_id", userId),
                    DataContext.CreateSqlParameter("@First_Name", FirstName),
                    DataContext.CreateSqlParameter("@Last_Name", LastName),
                    DataContext.CreateSqlParameter("@Birthday", Birthday),
                    DataContext.CreateSqlParameter("@Address", Address),
                    DataContext.CreateSqlParameter("@Company", Company),
                    DataContext.CreateSqlParameter("@Notes", Notes)
                });

                DataTable dt = DataContext.ExecuteReader(command);
                Id = (int)dt.Rows[0][0];
            }

            // Insert all of the phone numbers and emails.
            foreach (PhoneNumber number in PhoneNumbers)
                number.Add(Id);

            foreach (Email email in Emails)
                email.Add(Id);
        }

        public void Update()
        {
            using (SqlCommand command = new SqlCommand("Update Contacts set " +
                "First_Name = @First_Name, " +
                "Last_Name = @Last_Name," +
                "Address = @Address, " +
                "Birthday = @Birthday, " +
                "Company = @Company, " +
                "Notes = @Notes " +
                "where Id = @Id"))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Id", Id),
                    DataContext.CreateSqlParameter("@First_Name", FirstName),
                    DataContext.CreateSqlParameter("@Last_Name", LastName),
                    DataContext.CreateSqlParameter("@Birthday", Birthday),
                    DataContext.CreateSqlParameter("@Address", Address),
                    DataContext.CreateSqlParameter("@Company", Company),
                    DataContext.CreateSqlParameter("@Notes", Notes)
                });

                DataContext.ExecuteNonQuery(command);
            }

            foreach (PhoneNumber number in PhoneNumbers)
                number.Update();

            foreach (Email email in Emails)
                email.Update();
        }

        public void Delete()
        {
            Delete(Id);
        }

        public static void Delete(int contactId)
        {
            using (SqlCommand command = new SqlCommand("Delete from Phone_Numbers where Contact_id = @Id; " +
                "Delete from Emails where Contact_id = @Id; " +
                "Delete from contacts where Id = @Id"))
            {
                command.Parameters.Add(DataContext.CreateSqlParameter("@Id", contactId));
                DataContext.ExecuteNonQuery(command);
            }
        }

        public void LoadPhoneNumbers()
        {
            using (SqlCommand command = new SqlCommand("select * from Phone_Numbers where Contact_id = @Contact_id"))
            {
                command.Parameters.Add(DataContext.CreateSqlParameter("@Contact_id", Id));
                DataTable dt = DataContext.ExecuteReader(command);
                foreach (DataRow row in dt.Rows)
                    PhoneNumbers.Add(new PhoneNumber(row));
            }
        }

        public void LoadEmails()
        {
            using (SqlCommand command = new SqlCommand("select * from Emails where Contact_id = @Contact_id"))
            {
                command.Parameters.Add(DataContext.CreateSqlParameter("@Contact_id", Id));
                DataTable dt = DataContext.ExecuteReader(command);
                foreach (DataRow row in dt.Rows)
                    Emails.Add(new Email(row));
            }
        }

        public bool MatchesSearchCriteria(SearchCriteria criteria)
        {
            if (criteria.SearchType == SearchType.Name)
                return FullName.ToLower().Contains(criteria.SearchText.ToLower());

            if (criteria.SearchType == SearchType.PhoneNumber)
            {
                foreach (PhoneNumber number in PhoneNumbers)
                    if (number.Number.Contains(criteria.SearchText))
                        return true;

                return false;
            }

            throw new NotImplementedException($"Cannot determine if contact matches search criteria on unimplemented search type {criteria.SearchType}.");
        }
    }
}
