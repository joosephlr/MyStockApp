using Microsoft.EntityFrameworkCore;

namespace MyStockWebAPI.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes)
        {

        }

    }
}