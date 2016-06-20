using OAuthAuthorizationWebApiOwin.Application.Interfaces;
using OAuthAuthorizationWebApiOwin.Application.Services;
using OAuthAuthorizationWebApiOwin.Domain.User.Events;
using OAuthAuthorizationWebApiOwin.Domain.User.Handlers;
using OAuthAuthorizationWebApiOwin.Domain.User.Interfaces;
using OAuthAuthorizationWebApiOwin.E_mail.Infra.Email;
using OAuthAuthorizationWebApiOwin.Repository.Cadastro.Contexto;
using OAuthAuthorizationWebApiOwin.Repository.Cadastro.Interfaces;
using OAuthAuthorizationWebApiOwin.Repository.Cadastro.Repository;
using OAuthAuthorizationWebApiOwin.Repository.Cadastro.UoW;
using OAuthAuthorizationWebApiOwin.SharedKernel.Events;
using OAuthAuthorizationWebApiOwin.SharedKernel.Handlers;
using OAuthAuthorizationWebApiOwin.SharedKernel.Interfaces;
using SimpleInjector;
using SimpleInjector.Integration.Web;
using SimpleInjector.Integration.WebApi;
using System;
using System.Reflection;
using System.Web.Http;

namespace OAuthAuthorizationWebApiOwin.IoC
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
