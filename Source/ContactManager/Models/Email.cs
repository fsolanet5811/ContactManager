using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace ContactManager.Models
{
    public class Email
    {
        public int Id { get; set; }

        public string Address { get; set; }

        public EmailType EmailType { get; set; }

        public Email() { }

        internal Email(DataRow sqlRow) : this()
        {
            Id = Convert.ToInt32(sqlRow["Id"]);
            Address = sqlRow["Address"].ToString();
            EmailType = (EmailType)Convert.ToInt32(sqlRow["Type"]);
        }

        internal void Add(int contactId)
        {
            using (SqlCommand command = new SqlCommand("Insert into Emails (" +
                "Address, " +
                "Contact_id, " +
                "Type) " +
                "output INSERTED.Id values(" +
                "@Address, " +
                "@Contact_id, " +
                "@Type)"))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Address", Address),
                    DataContext.CreateSqlParameter("@Contact_id", contactId),
                    DataContext.CreateSqlParameter("@Type", EmailType),
                });

                DataTable dt = DataContext.ExecuteReader(command);
                Id = (int)dt.Rows[0][0];
            }
        }
    }
}
