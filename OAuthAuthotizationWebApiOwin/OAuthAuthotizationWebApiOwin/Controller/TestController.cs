using Newtonsoft.Json;
using OAuthAuthorizationWebApiOwin.Application.ViewModel;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace OAuthAuthorizationWebApiOwin.Controller
{
    [RoutePrefix("api/v1/autentication")]
    public class TestController : BaseApiController
    {
        [Route("GetUser"),HttpPost, HttpGet, Authorize]
        public async Task<HttpResponseMessage> Get() 
        {
            UserViewModel user = (UserViewModel)JsonConvert.DeserializeObject(User.Identity.Name, typeof(UserViewModel));

            return await TaskHttpResponseMessage(HttpStatusCode.OK, new { user = User.Identity.Name });
        }
    }
}

