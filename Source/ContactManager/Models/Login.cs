using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

public class Login 
{
    string Username;
    string Password;
    public Login(string username, string password)
    {
        Username = username;
        Password = password;
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

    public static bool CompareHash(string attemptedPassword, string hash, var salt)
    {
        string base64Hash = Convert.ToBase64String(hash);
        string base64AttemptedHash = Convert.ToBase64String(GetHash(attemptedPassword, salt));

        return base64Hash == base64AttemptedHash;
    }
    public void LoginUser()
    {

        using(SqlConnection connection = new SqlConnection("ContactManagerDatabase"))
        {
            connection.Open();
            string query = "SELECT * From dbo.Users";
            using(SqlCommand command = new SqlCommand(query, connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        if (Username == reader.GetString(1));
                        {
                            if (CompareHash(Password, reader.GetString(2), salt))
                                //login
                        }
                    }
                    return InternalServerError(ex);
                }
            }
        }
    }
}