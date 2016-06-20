using System;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using OAuthAuthotizationWebApiOwin.Providers;
using Newtonsoft.Json.Serialization;
using System.Linq;
using System.Net.Http.Formatting;
using OAuthAuthotizationWebApiOwin.IoC;
using OAuthAuthotizationWebApiOwin.Application.Interfaces;

[assembly: OwinStartup(typeof(OAuthAuthotizationWebApiOwin.Startup))]

namespace OAuthAuthotizationWebApiOwin
{
    public class Startup
    {
      
        public void Configuration(IAppBuilder app)
        {
            ConfigureOAuth(app);
            var config = new HttpConfiguration();
            ConfigureWebApi(config);
            app.UseWebApi(config);
           
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);
            var OAuthServerOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/security/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(2),
                Provider = new AuthorizationServerProvider()
            };
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }

        public void ConfigureWebApi(HttpConfiguration config)
        {
            config.EnableCors();
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(name: "DefaultApi", routeTemplate: "api/{controller}/{id}", defaults: new { id = RouteParameter.Optional });

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            Bootstrap.RegisterServices(ImplementationType.API, config);
        }
    }
}
