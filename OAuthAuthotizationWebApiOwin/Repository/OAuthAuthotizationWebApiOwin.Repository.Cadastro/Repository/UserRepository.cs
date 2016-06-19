using System.Collections.Generic;
using OAuthAuthotizationWebApiOwin.Domain.User;
using OAuthAuthotizationWebApiOwin.Domain.User.Interfaces;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Contexto;
using System;

namespace OAuthAuthotizationWebApiOwin.Repository.Cadastro.Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {

        private List<User> _users;

        public UserRepository(ContextCadastro context) : base(context)
        {
            _users = new List<User>();
            var user = new User(new Guid("f0549f4e-818e-418e-ada9-9e733318f453"), "Alison de Amorim", "alison@amorim.com", "testando");
            _users.Add(user);
        }

        public override IEnumerable<User> GetAll()
        {
            return _users;//base.GetAll();
        }

        public override User Create(User obj)
        {
            _users.Add(obj);
            return obj;
        }
    }
}
