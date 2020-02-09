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
    public class UsersController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        [Route("api/users/add")]
        public IHttpActionResult AddUser([FromBody] User user)
        {
            if (!(user.UniqueUsername(user.Username)))
            {
                return Content(HttpStatusCode.BadRequest, "Username already exists");
            }
            try
            {
                user.Add();
                return Ok(user);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPost]
        [Route("api/users/login")]
        public IHttpActionResult LoginUser([FromBody] User user)
        {
            if (user.Login() == null)
            {
                return Content(HttpStatusCode.BadRequest, "Invalid Login");
            }
            try
            {
                return Ok(user.Login());
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}