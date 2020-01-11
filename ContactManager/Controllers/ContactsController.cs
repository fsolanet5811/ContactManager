using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ContactManager.Models;

namespace ContactManager.Controllers
{
    public class ContactsController : ApiController
    {
        private static readonly List<Contact> contacts = new List<Contact>();
        private static int nextId = 1;

        [HttpGet]
        public IHttpActionResult GetContacts([FromBody] SearchCriteria criteria)
        {
            return Ok(contacts.Where(c => c.MathcesSearchCriteria(criteria)));
        }

        [HttpGet]
        public IHttpActionResult GetContacts(int userId)
        {
            try
            {
                return Ok(Models.User.LoadUserContacts(userId));
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        public IHttpActionResult AddContact([FromBody] AddContactRequest request)
        {
            try
            {
                request.Contact.Add(request.UserId);
                return Ok(request.Contact);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpDelete]
        public IHttpActionResult DeleteContact(int id)
        {
            contacts.RemoveAll(con => con.Id == id);
            return Ok();
        }

        [HttpPost]
        public IHttpActionResult UpdateContact(int id, [FromBody] Contact contact)
        {
            Contact toUpdate = contacts.FirstOrDefault(con => con.Id == id);
            if (toUpdate is null)
                return NotFound();

            contact.Id = id;
            contacts.Remove(toUpdate);
            contacts.Add(contact);
            return Ok(contact);
        }

    }
}
