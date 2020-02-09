using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;

namespace ContactManager.Models
{
    public class PhoneNumber
    {
        public int Id { get; set; }

        public string Number { get; set; }

        public string Extension { get; set; }

        public PhoneNumberType PhoneNumberType { get; set; }

        public bool IsNew
        {
            get
            {
                return Id == 0;
            }
        }

        public PhoneNumber() { }

        internal PhoneNumber(DataRow sqlRow) : this()
        {
            Id = Convert.ToInt32(sqlRow["Id"]);
            Number = sqlRow["Number"].ToString();
            Extension = sqlRow["Extension"].ToString();
            PhoneNumberType = (PhoneNumberType)Convert.ToInt32(sqlRow["Type"]);
        }

        internal void Add(int contactId)
        {
            using (SqlCommand command = new SqlCommand("Insert into Phone_Numbers (" +
                "Number, " +
                "Contact_id, " +
                "Type, " +
                "Extension) " +
                "output INSERTED.Id values(" +
                "@Number, " +
                "@Contact_id, " +
                "@Type, " +
                "@Extension) "))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Number", Number),
                    DataContext.CreateSqlParameter("@Contact_id", contactId),
                    DataContext.CreateSqlParameter("@Type", PhoneNumberType),
                    DataContext.CreateSqlParameter("@Extension", Extension)
                });

                DataTable dt = DataContext.ExecuteReader(command);
                Id = (int)dt.Rows[0][0];
            }
        }

        internal void Update()
        {
            using (SqlCommand command = new SqlCommand("Update Phone_Numbers set " +
                "Number = @Number, " +
                "Extension = @Extension," +
                "Type = @Type " +
                "where Id = @Id"))
            {
                command.Parameters.AddRange(new SqlParameter[]
                {
                    DataContext.CreateSqlParameter("@Id", Id),
                    DataContext.CreateSqlParameter("@Number", Number),
                    DataContext.CreateSqlParameter("@Extension", Extension),
                    DataContext.CreateSqlParameter("@Type", PhoneNumberType)
                });

                DataContext.ExecuteNonQuery(command);
            }
        }
    }
}
