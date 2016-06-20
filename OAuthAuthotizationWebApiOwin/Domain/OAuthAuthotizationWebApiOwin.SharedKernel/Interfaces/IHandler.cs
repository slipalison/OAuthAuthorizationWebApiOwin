using System;
using System.Collections.Generic;

namespace OAuthAuthorizationWebApiOwin.SharedKernel.Interfaces
{
    public interface IHandler<T> : IDisposable where T : IDomainEvent
    {
        void Handle(T args);
        IEnumerable<T> Notify();
        bool HasNotification();
        List<T> GetValues();
    }
}
