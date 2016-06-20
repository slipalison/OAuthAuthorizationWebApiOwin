using OAuthAuthotizationWebApiOwin.Application.Interfaces;
using OAuthAuthotizationWebApiOwin.Application.Services;
using OAuthAuthotizationWebApiOwin.Domain.User.Events;
using OAuthAuthotizationWebApiOwin.Domain.User.Handlers;
using OAuthAuthotizationWebApiOwin.Domain.User.Interfaces;
using OAuthAuthotizationWebApiOwin.E_mail.Infra.Email;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Contexto;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Interfaces;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.Repository;
using OAuthAuthotizationWebApiOwin.Repository.Cadastro.UoW;
using OAuthAuthotizationWebApiOwin.SharedKernel.Events;
using OAuthAuthotizationWebApiOwin.SharedKernel.Handlers;
using OAuthAuthotizationWebApiOwin.SharedKernel.Interfaces;
using SimpleInjector;
using SimpleInjector.Integration.Web;
using SimpleInjector.Integration.WebApi;
using System;
using System.Reflection;
using System.Web.Http;

namespace OAuthAuthotizationWebApiOwin.IoC
{
    public class Bootstrap
    {

        public static void RegisterServices(ImplementationType type, HttpConfiguration config = null)
        {
            var container = new Container();

            if (type == ImplementationType.API)
            {
                if (config == null)
                    throw new ArgumentException("O parametro HttpConfiguration não pode ser null para Web Api");
                container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();
                InitializeContainer(container);
                container.RegisterWebApiControllers(config);
                container.Verify();
                config.DependencyResolver = new SimpleInjectorWebApiDependencyResolver(container);
            }
            else
            {
                container.Options.DefaultScopedLifestyle = new WebRequestLifestyle();
                InitializeContainer(container);
                //container.RegisterMvcControllers(Assembly.GetExecutingAssembly());
                container.Verify();
                //DependencyResolver.SetResolver(new SimpleInjectorDependencyResolver(container));
            }

        }

        private static void InitializeContainer(Container container)
        {
            // Lifestyle.Transient => Uma instancia para cada solicitacao;
            // Lifestyle.Singleton => Uma instancia unica para a classe
            // Lifestyle.Scoped => Uma instancia unica para o request


            #region Application
            container.RegisterPerWebRequest<IUnitOfWork, UnitOfWork>();

            #endregion
            container.RegisterPerWebRequest<IHandler<DomainNotification>, DomainNotificationHandler>();
            container.RegisterPerWebRequest<IHandler<UserCadastradoEvent>, UserCadastradoHandler>();

            container.RegisterPerWebRequest<ContextCadastro>();
            container.RegisterPerWebRequest<IUserRepository, UserRepository>();
            container.RegisterPerWebRequest<IAuthentication, AuthenticationService>();

            container.Register<IEnvioEmail, EnvioEmail>(Lifestyle.Singleton);

        }

    }

    public enum ImplementationType
    {
        MVC = 0,
        API = 1,
        Web = 0
    }
}
