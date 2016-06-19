using OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces;
using System;

namespace OAuthAuthotizationWebApiOwin.SharedKernel.ValueObjects
{
    public class Aggregate : IAggregate
    {
        public Aggregate()
        {
            Id = Guid.NewGuid();
        }
        public Aggregate(Guid id)
        {
            Id = id;
        }
        public Guid Id { get; private set; }
    }
}
