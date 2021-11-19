namespace MyStockWebAPI.Models
{
    public class Produto
    {
        public int ProdutoId { get; set; }

        public string Nome { get; set; }

        public int Quantidade { get; set; }

        public decimal Valor { get; set; }
    }
}