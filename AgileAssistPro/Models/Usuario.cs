using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgileAssistPro.Models
{
    [Table("Usuario")]
    public class Usuario
    {
        public int Id { get; set; }

        [Required]
        public string Identificacion { get; set; } = string.Empty;

        public string Correo { get; set; } = string.Empty;

        public string Nombre { get; set; } = string.Empty;
    }
}
