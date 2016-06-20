﻿using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace OAuthAuthorizationWebApiOwin.Controller
{
    [RoutePrefix("api/v1/autentication")]
    public class TestController : BaseApiController
    {
        [Route("GetUser"),HttpPost, Authorize]
        public async Task<HttpResponseMessage> Get()
        {
            return await TaskHttpResponseMessage(HttpStatusCode.OK, new { user = User.Identity.Name });
        }
    }
}

