using System;
using OAuthAuthorizationWebApiOwin.Application.Interfaces;
using OAuthAuthorizationWebApiOwin.Application.ViewModel;
using OAuthAuthorizationWebApiOwin.Domain.User.Interfaces;
using System.Linq;

namespace OAuthAuthorizationWebApiOwin.Application.Services
{
    public class AuthenticationService : IAuthentication
    {
        private IUserRepository _user;

        public AuthenticationService(IUserRepository user)
        {
            _user = user;
        }

        public UserViewModel GetUser(string email, string senha)
        {
           var user = _user.GetAll().FirstOrDefault(x => x.Email.Endereco == email);
            return new UserViewModel(user);
        }

        public bool LoginValid(string email, string senha)
        {
           return _user.LoginValid(email, senha);
        }

        
    }
}
