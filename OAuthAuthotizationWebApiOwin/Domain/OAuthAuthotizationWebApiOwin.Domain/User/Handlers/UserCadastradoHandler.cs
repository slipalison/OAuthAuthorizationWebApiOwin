using OAuthAuthotizationWebApiOwin.Domain.User.Events;
using OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces;
using System;
using System.Collections.Generic;

namespace OAuthAuthotizationWebApiOwin.Domain.User.Handlers
{
    public class UserCadastradoHandler : IHandler<UserCadastradoEvent>
    {
        private List<UserCadastradoEvent> _notifications;
        //private readonly 

        public void Dispose()
        {
            _notifications = new List<UserCadastradoEvent>();
        }

        public List<UserCadastradoEvent> GetValues()
        {
            return _notifications;
        }

        public void Handle(UserCadastradoEvent args)
        {
            throw new NotImplementedException();
        }

        public bool HasNotification()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<UserCadastradoEvent> Notify()
        {
            throw new NotImplementedException();
        }
    }
}
