using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactManager.Models
{
    public class AddContactRequest
    {
        public int UserId { get; set; }

        public Contact Contact { get; set; }
    }
}