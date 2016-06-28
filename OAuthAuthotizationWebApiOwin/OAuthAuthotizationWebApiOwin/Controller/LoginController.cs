using Newtonsoft.Json;
using OAuthAuthorizationWebApiOwin.Application.ViewModel;
using OAuthAuthorizationWebApiOwin.Result;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace OAuthAuthorizationWebApiOwin.Controller
{
    [RoutePrefix("api/v1/autentication")]
    public class LoginController : BaseApiController
    {
        [Route("GetUser"),HttpPost, Authorize]
        public async Task<HttpResponseMessage> Get() 
        {
            UserViewModel user = (UserViewModel)JsonConvert.DeserializeObject(User.Identity.Name, typeof(UserViewModel));

            return await TaskHttpResponseMessage(HttpStatusCode.OK, user );
        }

        [Route("ExternalLogin", Name = "ExternalLogin")]
        public Task<HttpResponseMessage> ExternalLogin(string provider)
        {

            var result = new ChallengeResult(provider, this);
            return TaskHttpResponseMessage(HttpStatusCode.OK, result);
        }
    }
}

