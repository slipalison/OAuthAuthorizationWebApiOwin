using System;
using AutoMapper;
using OAuthAuthorizationWebApiOwin.Application.ViewModel;
using OAuthAuthorizationWebApiOwin.Domain.User;

namespace OAuthAuthorizationWebApiOwin.Application.Mappers
{
    public class ModelToViewModelProfile : Profile
    {
        public override string ProfileName
        {
            get { return "ModelToViewModelProfile"; }
        }
        protected override void Configure() => Mapper.CreateMap<User,UserViewModel>();

    }
}
