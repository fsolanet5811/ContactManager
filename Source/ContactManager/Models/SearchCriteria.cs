using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactManager.Models
{
    public class SearchCriteria
    {
        public string SearchText { get; set; }

        public SearchType SearchType { get; set; }
    }
}