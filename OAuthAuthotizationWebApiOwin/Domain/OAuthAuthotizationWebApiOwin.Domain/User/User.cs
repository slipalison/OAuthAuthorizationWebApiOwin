using DomainValidation.Validation;
using OAuthAuthorizationWebApiOwin.SharedKernel.ValueObjects;
using System;

namespace OAuthAuthorizationWebApiOwin.Domain.User
{
    public class User
    {
        protected User() { }
        public Guid Id { get; private set; }
        public string Name { get; private set; }
        public Email Email { get; private set; }
        public bool Active { get; private set; }
        public string Senha { get; private set; }
        public ValidationResult ValidationResult { get; set; }

        public const int SenhaMinLength = 6;
        public const int SenhaMaxLength = 30;

        public User(Guid id, string name, string email, string senha)
        {
            Id = id;
            Name = name;
            Active = false;
            DefinirEmail(email);
            Senha = senha;
        }
        public void DefinirEmail(string email)
        {
            var myEmail = new SharedKernel.ValueObjects.Email(email);
            if (this.DefinirEmailAlunoScopeEhValido(myEmail))
                Email = myEmail;
        }
    }
}
