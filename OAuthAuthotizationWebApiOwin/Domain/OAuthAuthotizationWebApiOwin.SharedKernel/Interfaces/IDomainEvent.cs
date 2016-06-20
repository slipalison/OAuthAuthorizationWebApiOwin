using System;

namespace OAuthAuthorizationWebApiOwin.SharedKernel.Interfaces
{
    public interface IDomainEvent
    {
        int Version { get; }
        DateTime DateOcorrencia { get; }

    }
}
