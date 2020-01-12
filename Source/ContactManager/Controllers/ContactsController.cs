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

        [HttpGet]
        [Route("api/contacts/search/{userId}")]
        public IHttpActionResult GetContacts(int userId, [FromBody] SearchCriteria criteria)
        {
            return Ok(contacts.Where(c => c.MathcesSearchCriteria(criteria)));
        }

        [HttpGet]
        [Route("api/contacts/{userId}")]
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
        [Route("api/contacts/add/{userId}")]
        public IHttpActionResult AddContact(int userId, [FromBody] Contact contact)
        {
            try
            {
                contact.Add(userId);
                return Ok(contact);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpDelete]
        [Route("api/contacts/delete/{id}")]
        public IHttpActionResult DeleteContact(int id)
        {
            Contact.Delete(id);
            return Ok();
        }

        [HttpPost]
        [Route("api/contacts/update/{id}")]
        public IHttpActionResult UpdateContact(int id, [FromBody] Contact contact)
        {
            try
            {
                // By changinf the id of the contact object we recieve to the one that was passed in,
                // the contact with that id will be updated.
                contact.Id = id;
                contact.Update();
                return Ok(contact);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }

    }
}
