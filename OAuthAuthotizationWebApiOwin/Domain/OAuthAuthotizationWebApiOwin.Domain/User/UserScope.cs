using OAuthAuthotizationWebApiOwin.SharedKernel.ValueObjects;

namespace OAuthAuthotizationWebApiOwin.Domain.User
{
    public static class UserScope
    {
        public static bool DefinirEmailAlunoScopeEhValido(this User user, Email email)
        {
            return AssertionConcern.IsSatisfiedBy
            (
                AssertionConcern.AssertLength(email.Endereco, Email.EnderecoMinLength, Email.EnderecoMaxLength, "E-mail em tamanho incorreto"),
                AssertionConcern.AssertNotNullOrEmpty(email.Endereco, "O e-mail obrigatória"),
                AssertionConcern.AssertTrue(Email.IsValid(email.Endereco), "E-mail em formato inválido")
            );
        }
    }
}
