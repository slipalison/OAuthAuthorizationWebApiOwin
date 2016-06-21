using OAuthAuthorizationWebApiOwin.Domain.User;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace OAuthAuthorizationWebApiOwin.Application.ViewModel
{
    public class UserViewModel
    {
        public UserViewModel()
        {
            Id = Guid.NewGuid();
        }

        public UserViewModel(User user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email.Endereco;
            Active = user.Active;
        }

        [Key]
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Preencha o campo Nome")]
        [MaxLength(150, ErrorMessage = "Máximo 150 caracteres")]
        [MinLength(2, ErrorMessage = "Mínimo 2 caracteres")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Preencha o campo E-mail")]
        [MaxLength(100, ErrorMessage = "Máximo 100 caracteres")]
        [EmailAddress(ErrorMessage = "Preencha um E-mail válido")]
        [DisplayName("E-mail")]
        public string Email { get; set; }

        [ScaffoldColumn(false)]
        public bool Active { get; set; }
    }
}
