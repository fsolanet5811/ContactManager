using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ContactManager.Models;

namespace ContactManager
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            DataContext.ConnectionString = Settings.ConnectionString;

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Get User Contacts",
                routeTemplate: "api/{controller}/{userId}"
                );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            ); 
        }
    }
}
