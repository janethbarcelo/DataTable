import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import {  AgenciasService} from '../services/agencias.service';
import { RespuestaAgencia } from '../interfaces/agencias';


@Component({
  selector: 'app-component-tabla',
  templateUrl: './component-tabla.component.html',
  styleUrls: ['./component-tabla.component.css'],

})
export class ComponentTablaComponent {
  url = environment.usersUrl;
  users: User[] = [];
  agencias:RespuestaAgencia[] =[];


  constructor(private userService: UserService, private agenciaService: AgenciasService) {
    this.getUsers();
    this.getAgencias();
  }


  getUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.map<User>((u) => <User>u)
    });
  }

  getAgencias() {
    this.agenciaService.getAgencia().subscribe((agencias) => {
      console.log(agencias);
      this.agencias= agencias.map<RespuestaAgencia>((a) => <RespuestaAgencia>a)
      console.log(this.agencias)
    });
  }
}
