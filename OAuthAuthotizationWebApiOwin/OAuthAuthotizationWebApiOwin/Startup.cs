using System;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using OAuthAuthorizationWebApiOwin.Providers;
using Newtonsoft.Json.Serialization;
using System.Linq;
using System.Net.Http.Formatting;
using OAuthAuthorizationWebApiOwin.IoC;
using OAuthAuthorizationWebApiOwin.Application.Mappers;
using Microsoft.Owin.Security.Facebook;
using System.Threading.Tasks;
using System.Security.Claims;

[assembly: OwinStartup(typeof(OAuthAuthorizationWebApiOwin.Startup))]

namespace OAuthAuthorizationWebApiOwin
{
    public class Startup
    {
        public static FacebookAuthenticationOptions facebookAuthOptions { get; private set; }
        public static OAuthBearerAuthenticationOptions OAuthBearerOptions { get; private set; }

        public void Configuration(IAppBuilder app)
        {
            ConfigureOAuth(app);
            var config = new HttpConfiguration();
            ConfigureWebApi(config);
            app.UseWebApi(config);
            AutoMapperConfig.RegisterMappings();
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);

            //use a cookie to temporarily store information about a user logging in with a third party login provider
            app.UseExternalSignInCookie(Microsoft.AspNet.Identity.DefaultAuthenticationTypes.ExternalCookie);
            OAuthBearerOptions = new OAuthBearerAuthenticationOptions();


           
            var OAuthServerOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/security/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(2),
                Provider = new AuthorizationServerProvider()
            };
            // Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
            app.UseOAuthBearerAuthentication(OAuthBearerOptions);
           // app.UseOAuthAuthorizationServer(OAuthServerOptions);
           // app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());


            //Configure Facebook External Login
            facebookAuthOptions = new FacebookAuthenticationOptions()
            {
                AppId = "1769385673277469",
                AppSecret = "57174a8eb17401c66d64fba8c3ea495a",
                Provider = new FacebookAuthenticationProvider()
                {
                    OnAuthenticated = (context) =>
                    {
                        context.Identity.AddClaim(new Claim("urn:facebook:access_token", context.AccessToken, ClaimValueTypes.String, "Facebook"));

                        return Task.FromResult(0);
                    }
                }
            };
            app.UseFacebookAuthentication(facebookAuthOptions);

        }

        public void ConfigureWebApi(HttpConfiguration config)
        {
            config.EnableCors();
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi", 
                routeTemplate: "api/{controller}/{id}", 
                defaults: new { id = RouteParameter.Optional }
                );

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            Bootstrap.RegisterServices(ImplementationType.API, config);
        }
    }
}
