using OAuthAuthorizationWebApiOwin.SharedKernel.Interfaces;
using System;

namespace OAuthAuthorizationWebApiOwin.SharedKernel.Events
{
    public class DomainNotification : IDomainEvent
    {
        public string Key { get; private set; }
        public string Value { get; private set; }
        public DateTime DateOcorrencia { get; private set; }
        public int Version { get; private set; }
        public DomainNotification(string key,string value)
        {
            Version = 1;
            Key = key;
            Value = value;
            DateOcorrencia = DateTime.Now;
        }
    }
}
