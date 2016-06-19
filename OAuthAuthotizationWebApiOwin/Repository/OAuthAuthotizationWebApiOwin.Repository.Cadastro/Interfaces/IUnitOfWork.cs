namespace OAuthAuthotizationWebApiOwin.Repository.Cadastro.Interfaces
{
    public interface IUnitOfWork
    {
        void BeginTransaction();
        void Commit();
    }
}
