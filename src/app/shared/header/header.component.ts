import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service.ts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit() {
  }

}
