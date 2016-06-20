using OAuthAuthorizationWebApiOwin.Application.Interfaces;
using OAuthAuthorizationWebApiOwin.Domain.User.Interfaces;

namespace OAuthAuthorizationWebApiOwin.Application.Services
{
    public class AuthenticationService : IAuthentication
    {
        private IUserRepository _user;

        public AuthenticationService(IUserRepository user)
        {
            _user = user;
        }

        public bool LoginValid(string email, string senha)
        {
           return _user.LoginValid(email, senha);
        }

        
    }
}
