namespace OAuthAuthorizationWebApiOwin.Application.Mappers
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            AutoMapper.Mapper.Initialize(x =>
            {
                x.AddProfile<ModelToViewModelProfile>();
                x.AddProfile<ViewModelToModelProfile>();
            });
        }
    }
}
