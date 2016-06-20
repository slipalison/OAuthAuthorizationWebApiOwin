using Microsoft.Owin.Security.OAuth;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using OAuthAuthotizationWebApiOwin.Application.Interfaces;
using OAuthAuthotizationWebApiOwin.Application.Services;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Repository;
using OAuthAuthotizationWebApiOwin.Domain.User.Interfaces;

namespace OAuthAuthotizationWebApiOwin.Providers
{
    public class AuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
      

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            // return base.ValidateClientAuthentication(context);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            // context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            var user = context.UserName;
            var pass = context.Password;

            var t = new Repository.Cadastro.Contexto.ContextCadastro();
            IUserRepository u = new UserRepository(t);
            var _auth = new AuthenticationService(u);

            if(!_auth.LoginValid(user,pass))
            //consulta ao banco e etc.
           // if (user != "slipalison" || pass != "testando")
            {
                context.SetError("invalid_grant", "Usuário ou senha inválidos");
                return;
            }

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

            identity.AddClaim(new Claim(ClaimTypes.Name, user));

            var roles = new List<string>();
            roles.Add("User");

            roles.ForEach(x => identity.AddClaim(new Claim(ClaimTypes.Role, x)));

            GenericPrincipal principal = new GenericPrincipal(identity, roles.ToArray());
            Thread.CurrentPrincipal = principal;

            context.Validated(identity);

            //  return base.GrantResourceOwnerCredentials(context);
        }
    }
}