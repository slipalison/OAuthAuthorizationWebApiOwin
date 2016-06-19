using System;

namespace OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces
{
    public interface IWrite<TEntity> : IDisposable where TEntity : class
    {
        TEntity Create(TEntity obj);
        TEntity Update(TEntity obj);
        void Delete(long id);
        int SaveChanges();
    }
}
