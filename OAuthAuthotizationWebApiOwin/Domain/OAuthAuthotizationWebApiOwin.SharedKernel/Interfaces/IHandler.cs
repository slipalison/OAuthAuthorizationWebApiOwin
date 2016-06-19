using System;
using System.Collections.Generic;

namespace OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces
{
    public interface IHandler<T> : IDisposable where T : IDomainEvent
    {
        void Handle(T args);
        IEnumerable<T> Notify();
        bool HasNotification();
        List<T> GetValues();
    }
}
