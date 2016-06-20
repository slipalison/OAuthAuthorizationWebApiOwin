using OAuthAuthotizationWebApiOwin.Domain.User.Events;
using OAuthAuthotizationWebApiOwin.E_mail.Infra.Email;
using OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces;
using System.Collections.Generic;

namespace OAuthAuthotizationWebApiOwin.Domain.User.Handlers
{
    public class UserCadastradoHandler : IHandler<UserCadastradoEvent>
    {
        private List<UserCadastradoEvent> _notifications;
        private readonly IEnvioEmail _envioEmail;

        public UserCadastradoHandler(IEnvioEmail envioEmail)
        {
            _envioEmail = envioEmail;
        }

        public void Dispose()
        {
            _notifications = new List<UserCadastradoEvent>();
        }

        public List<UserCadastradoEvent> GetValues() => _notifications;

        public void Handle(UserCadastradoEvent args)
            => _envioEmail.EnviarAsync(
                           args.User.Name, 
                           args.User.Email.Endereco,
                           args.EmailTitle,
                           args.EmailBody);


        public bool HasNotification() => GetValues().Count > 0;

        public IEnumerable<UserCadastradoEvent> Notify() => GetValues();
    }
}
