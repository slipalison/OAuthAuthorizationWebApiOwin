using OAuthAuthotizationWebApiOwin.Domain.User;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Entity.SqlServer;

namespace OAuthAuthotizationWebApiOwin.Repository.Cadastro.Contexto
{
    public class ContextCadastro : DbContext
    {
        public ContextCadastro() : base("dbConnection")
        {
            Configuration.LazyLoadingEnabled = false;
            var ensureDLLIsCopied = SqlProviderServices.Instance;
        }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();

            base.OnModelCreating(modelBuilder);
        }
    }
}
