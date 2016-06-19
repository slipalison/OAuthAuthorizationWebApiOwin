using OAuthAuthotizationWebApiOwin.Domain.User;
using OAuthAuthotizationWebApiOwin.Domain.User.Interfaces;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Contexto;

namespace OAuthAuthotizationWebApiOwin.Repository.Cadastro.Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(ContextCadastro context) : base(context)
        {
        }
    }
}
