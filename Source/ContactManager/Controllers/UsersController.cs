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

        [HttpPost]
        [Route("api/users/add")]
        public IHttpActionResult AddUser([FromBody] User user)
        {
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
            try
            {
                return Ok(user.Login());
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}