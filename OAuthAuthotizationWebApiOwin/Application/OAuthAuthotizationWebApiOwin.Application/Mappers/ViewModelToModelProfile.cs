using System;
using AutoMapper;
using OAuthAuthorizationWebApiOwin.Domain.User;
using OAuthAuthorizationWebApiOwin.Application.ViewModel;

namespace OAuthAuthorizationWebApiOwin.Application.Mappers
{
    public class ViewModelToModelProfile : Profile
    {
        public override string ProfileName
        {
            get { return "ViewModelToModelProfile"; }
        }
        protected override void Configure() => Mapper.CreateMap<UserViewModel, User>();

    }
}
