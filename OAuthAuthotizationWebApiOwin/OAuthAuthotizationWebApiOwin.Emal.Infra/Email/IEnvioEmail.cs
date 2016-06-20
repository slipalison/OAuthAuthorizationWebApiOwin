using System.Threading.Tasks;

namespace OAuthAuthotizationWebApiOwin.E_mail.Infra.Email
{
    public interface IEnvioEmail
    {
        Task EnviarAsync(string nome, string email, string assunto, string mensagem);
    }
}
