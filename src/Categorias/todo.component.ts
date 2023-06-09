import { Component, Input, OnInit } from "@angular/core";


interface Categoria {
  Nome: string;
  Cor: string;
}


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  @Input() nome: string
  constructor(
  ){
    this.categoria.Nome="Sem categoria";
    this.categoria.Cor="#000000";
    this.listaCategoria.push(this.categoria)
    localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria));

  }

  ngOnInit() {
    const lista1: Categoria[] = JSON.parse(localStorage.getItem('listaCategoria'));
    this.categoria.Nome=this.nome;
    
    this.listaCategoria.push(this.categoria);
    console.log("Foi"+this.categoria);

    if (lista1.length!=null) {
      this.listaCategoria = lista1;
      console.log(lista1);
    }
    

    
  }
  
  categoria: Categoria = {
    Nome: "",
    Cor: "",
  };
  listaCategoria: Categoria[] = [];

  atualizarLocalStorage(): void {
    console.log('entrei');
    localStorage.setItem('listaTarefas', JSON.stringify(this.listaCategoria))
  }

  adcionarCategoria(): void {
    if (this.categoria.Cor === "") {
      this.categoria.Cor = "#000000"
    }
    if (this.categoria.Cor === "#FFFFFF") {
      this.categoria.Cor = "#000000"
    }
    console.log(this.categoria.Cor)
    const NovaCategoria: Categoria = {
      Nome: this.categoria.Nome,
      Cor: this.categoria.Cor
    };
      console.log(NovaCategoria)
      this.listaCategoria.push(NovaCategoria)
      localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria));
      this.categoria.Nome = "";
    




  }


  excluirCategoria(categoria: Categoria): void {
    const index = this.listaCategoria.indexOf(categoria);

    if (index !== -1) {
      this.listaCategoria.splice(index, 1);
    }
    localStorage.setItem('listaCategoria', JSON.stringify(this.listaCategoria))
  }

}