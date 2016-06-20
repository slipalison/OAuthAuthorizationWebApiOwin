using OAuthAuthorizationWebApiOwin.SharedKernel.Interfaces;
using System;

namespace OAuthAuthorizationWebApiOwin.Domain.User.Events
{
    public class UserCadastradoEvent : IDomainEvent
    {
        public DateTime DateOcorrencia { get; private set; }
        public int Version { get; private set; }
        public User User { get; private set; }
        public string EmailTitle { get; private set; }
        public string EmailBody { get; private set; }
        public UserCadastradoEvent(User user, DateTime dateOccured) 
        {
            Version = 1;
            User = user;
            DateOcorrencia = dateOccured;
            EmailTitle = "Seja bem Vindo " + user.Name;
            EmailTitle = "Obrigado por se cadastrar.";
        }
        public UserCadastradoEvent(User user) : this(user, DateTime.Now) { }

    }
}
