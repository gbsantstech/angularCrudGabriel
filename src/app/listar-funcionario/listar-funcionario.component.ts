import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario/funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'senac-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  @Input() funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarios = this.listarTodos();
    // this.funcionarios = [
    //   new Funcionario(1, "Fabio"),
    //   new Funcionario(2, "Hugo"),
    // ];
  }

  listarTodos(): Funcionario[]{
    return this.funcionarioService.listarTodos();
  }

  remover($event: any, funcionario: Funcionario): void {
    $event.preventDefault();
    if (confirm(`Deseja remover o funcionário ${funcionario.nome}?`)) {
      this.funcionarioService.remover(funcionario.id);
      this.funcionarios = this.funcionarioService.listarTodos();
    }
  }

}
