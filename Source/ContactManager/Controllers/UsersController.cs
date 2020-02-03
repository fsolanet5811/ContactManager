﻿using System;
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

        [HttpGet]
        [Route("api/users/login/{username}/{password}")]
        public IHttpActionResult LoginUser(string username, string password)
        {
            try
            {
                return Ok(Models.User.Login(username, password));
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