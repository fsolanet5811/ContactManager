using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ContactManager.Models;
using System.Web.Http.Cors;

namespace ContactManager.Controllers
{
    [EnableCors(origins: "http://poosdcontactmanager.azurewebsites.net", headers: "*", methods: "*")]
    public class ContactsController : ApiController
    {
        private static readonly List<Contact> contacts = new List<Contact>();

        [HttpPost]
        [Route("api/contacts/search/{userId}")]
        public IHttpActionResult GetContacts(int userId, [FromBody] SearchCriteria criteria)
        {
            try
            {
                User user = new Models.User() { Id = userId };
                user.LoadContacts();
                return Ok(user.SearchContacts(criteria));
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
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
    public class UsersController : ApiController
    {
        private static readonly List<Contact> users = new List<User>();
        [HttpPost]
        [Route("api/users/register/{userId}")]
        public IHttpActionResult RegisterUser(string username, string password)
        {
           try
            {
                User user = new User(username, password);
                user.RegisterUser(username, password);
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }
        private static readonly List<Contact> users = new List<User>();
        [HttpGet]
        [Route("api/users/login/{userId}")]
        public IHttpActionResult LoginUser(string username, string password)
        {
            try
            {
                Login login = new Login(username, password);
                login.LoginUser();
            }
            catch(Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
