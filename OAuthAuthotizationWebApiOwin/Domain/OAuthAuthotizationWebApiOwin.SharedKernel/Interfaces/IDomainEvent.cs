using System;

namespace OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces
{
    public interface IDomainEvent
    {
        int Version { get; }
        DateTime DateOcorrencia { get; }

    }
}
