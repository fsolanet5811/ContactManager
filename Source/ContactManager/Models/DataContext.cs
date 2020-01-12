using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace ContactManager.Models
{
    public static class DataContext
    {
        public static string ConnectionString { get; set; }

        internal static DataTable ExecuteReader(SqlCommand command)
        {
            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();
                command.Connection = conn;
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    DataTable dt = new DataTable();
                    dt.Load(reader);
                    return dt;
                }
            }
        }

        internal static int ExecuteNonQuery(SqlCommand command)
        {
            using (SqlConnection conn = new SqlConnection(ConnectionString))
            {
                conn.Open();
                command.Connection = conn;
                return command.ExecuteNonQuery();
            }
        }

        internal static SqlParameter CreateSqlParameter(string name, object value)
        {
            // Sql cannot store the default for DateTime, so we store null instead.
            if (value is DateTime dt && dt == default(DateTime))
                value = DBNull.Value;

            return new SqlParameter(name, value ?? DBNull.Value);
        }
    }
}