using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Contexto;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Interfaces;
using System;

namespace OAuthAuthotizationWebApiOwin.Repository.Cadastro.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ContextCadastro _context;
        private bool _disposed;

        public UnitOfWork(ContextCadastro context)
        {
            _context = context;
        }

        public void BeginTransaction()
        {
            _disposed = false;
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
