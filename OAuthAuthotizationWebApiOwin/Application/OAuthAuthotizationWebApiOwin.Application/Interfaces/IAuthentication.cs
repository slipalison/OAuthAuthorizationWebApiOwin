using OAuthAuthorizationWebApiOwin.Application.ViewModel;

namespace OAuthAuthorizationWebApiOwin.Application.Interfaces
{
    public interface IAuthentication
    {
        bool LoginValid(string email, string senha);
        UserViewModel GetUser(string email, string senha);
    }
}
