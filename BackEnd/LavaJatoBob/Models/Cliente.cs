using System;
using System.Collections.Generic;

namespace LavaJatoBob.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Veiculos = new HashSet<Veiculo>();
        }

        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Cpf { get; set; }

        public virtual ICollection<Veiculo> Veiculos { get; set; }
    }
}
