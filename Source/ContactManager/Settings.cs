using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Configuration;

namespace ContactManager
{
    public static class Settings
    {
        public static string ConnectionString
        {
            get
            {
                return WebConfigurationManager.ConnectionStrings["ContactManagerDatabase"].ConnectionString;
            }
        }
    }
}