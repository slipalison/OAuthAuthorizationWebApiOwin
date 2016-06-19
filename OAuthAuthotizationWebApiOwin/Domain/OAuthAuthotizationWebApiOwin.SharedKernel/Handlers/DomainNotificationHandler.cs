using OAuthAuthotizationWebApiOwin.SharedKernel.Events;
using OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces;
using System.Collections.Generic;

namespace OAuthAuthotizationWebApiOwin.SharedKernel.Handlers
{
    public class DomainNotificationHandler : IHandler<DomainNotification>
    {
        private List<DomainNotification> _notifications;

        public DomainNotificationHandler()
        {
            _notifications = new List<DomainNotification>();
        }
        public void Dispose()
        {
            _notifications = new List<DomainNotification>();
        }
        public List<DomainNotification> GetValues() => _notifications;
        public void Handle(DomainNotification args) => _notifications.Add(args);
        public bool HasNotification() => GetValues().Count > 0;
        public IEnumerable<DomainNotification> Notify() => GetValues();

    }
}
