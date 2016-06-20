using OAuthAuthorizationWebApiOwin.SharedKernel.Interfaces;

namespace OAuthAuthorizationWebApiOwin.Domain.User.Interfaces
{
    public interface IUserRepository:IRead<User>,IWrite<User>
    {
        bool LoginValid(string email, string senha);
    }
}
