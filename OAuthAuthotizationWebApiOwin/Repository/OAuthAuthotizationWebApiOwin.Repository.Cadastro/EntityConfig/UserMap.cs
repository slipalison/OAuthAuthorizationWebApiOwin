using OAuthAuthotizationWebApiOwin.Domain.User;
using System.Data.Entity.ModelConfiguration;

namespace OAuthAuthotizationWebApiOwin.Repository.Cadastro.EntityConfig
{
    public class UserMap : EntityTypeConfiguration<User>
    {
        public UserMap()
        {
            HasKey(x => x.Id);

            ToTable("User");
            Property(x => x.Email.Endereco).HasColumnName("Email");
            Property(x => x.Active).HasColumnName("Active");
            Property(x => x.Name).HasColumnName("Name");
            Property(x => x.Senha).HasColumnName("Senha");
            Property(x => x.Id).HasColumnName("Id");
            
        }
    }
}
