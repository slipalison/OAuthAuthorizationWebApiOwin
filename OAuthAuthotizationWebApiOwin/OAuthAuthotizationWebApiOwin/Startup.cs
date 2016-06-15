using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using OAuthAuthotizationWebApiOwin.Providers;

[assembly: OwinStartup(typeof(OAuthAuthotizationWebApiOwin.Startup))]

namespace OAuthAuthotizationWebApiOwin
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {



            var config = new HttpConfiguration();
            app.UseCors(CorsOptions.AllowAll);
            ConfigureWebApi(config);
            app.UseWebApi(config);

        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            var OAuthServerOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("api/security/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(2),
                Provider = new AuthorizationServerProvider()
            };
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }

        public void ConfigureWebApi(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(name: "DefaultApi", routeTemplate: "api/{controller}/{id}", defaults: new { id = RouteParameter.Optional });
        }
    }
}
