using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyStockWebAPI.Models;

namespace MyStockWebAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {

        private readonly Contexto _contexto;

        public ProdutosController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Produto>>> PegarTodosAsync()
        {
            return await _contexto.Produtos.ToListAsync();
        }

        [HttpGet("{produtoId}")]
        public async Task<ActionResult<Produto>> PegarProdutoPeloIdAsync(int produtoId)
        {
            Produto produto = await _contexto.Produtos.FindAsync(produtoId);

            if (produto == null)
                return NotFound();

            return produto;
        }

        [HttpPost]
        public async Task<ActionResult<Produto>> SalvarProdutoAsync(Produto produto)
        {
            await _contexto.Produtos.AddAsync(produto);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarProdutoAsync(Produto produto)
        {
            _contexto.Produtos.Update(produto);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{produtoId}")]
        public async Task<ActionResult> ExcluirProdutoAsync(int produtoId)
        {
            Produto produto = await _contexto.Produtos.FindAsync(produtoId);
            if (produto == null)
                return NotFound();

            _contexto.Remove(produto);
            await _contexto.SaveChangesAsync();
            return Ok();
        }

    }
}