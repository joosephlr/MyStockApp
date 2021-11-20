import { ProdutosService } from '../../produtos.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produto } from 'src/app/Produto';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;
  produtos: Produto[];
  nomeProduto: string;
  produtoId: number;

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false; 
  
  modalRef: BsModalRef;

  constructor(private produtosService: ProdutosService,
    private modalService: BsModalService) {}

  ngOnInit(): void {
    this.produtosService.PegarTodos().subscribe((resultado) => {
      this.produtos = resultado;
    });
  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Novo Produto';
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      quantidade: new FormControl(null),
      valor: new FormControl(null),
    });
  }

  ExibirFormularioAtualizacao(produtoId): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.produtosService.PegarPeloId(produtoId).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar ${resultado.nome}`;

      this.formulario = new FormGroup({
        produtoId: new FormControl(resultado.produtoId),
        nome: new FormControl(resultado.nome),
        quantidade: new FormControl(resultado.quantidade),
        valor: new FormControl(resultado.valor),
      });
    });
  }

  EnviarFormulario(): void {
    const produto: Produto = this.formulario.value;

    if (produto.produtoId > 0) {
      this.produtosService.AtualizarProduto(produto).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Produto atualizado com sucesso!');
        this.produtosService.PegarTodos().subscribe((registros) => {
          this.produtos = registros;
        });
      });
    } else {
      this.produtosService.SalvarProduto(produto).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Produto inserido com sucesso!');
        this.produtosService.PegarTodos().subscribe((registros) => {
          this.produtos = registros;
        });
      });
    }
  }

  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExibirConfirmacaoExclusao(produtoId, nomeProduto, conteudoModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(conteudoModal);
    this.produtoId = produtoId;
    this.nomeProduto = nomeProduto;
  }

  ExcluirProduto(produtoId){
    this.produtosService.ExcluirProduto(produtoId).subscribe(resultado => {
      this.modalRef.hide();
      alert('Produto excluído com sucesso!');
      this.produtosService.PegarTodos().subscribe(registros => {
        this.produtos = registros;
      });
    });
  }
}
