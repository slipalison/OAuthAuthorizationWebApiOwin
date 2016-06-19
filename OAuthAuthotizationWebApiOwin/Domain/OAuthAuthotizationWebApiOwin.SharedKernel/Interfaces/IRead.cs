using System.Collections.Generic;

namespace OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces
{
    public interface IRead<T> where T : class
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
    }
}
