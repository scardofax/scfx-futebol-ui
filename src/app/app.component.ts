import { Component } from '@angular/core';
import { Avulsodto, ColAvulso, Playerdto } from './playerdto';
import { PlayerserviceService } from './playerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'scfx-futebol-ui';
  
  player: Playerdto[] = [];
  avulso: any[] = [];
  colunas: any[] = [];

  constructor(private playerService: PlayerserviceService) {}

  ngOnInit() {
    this.getMensalistas();
    this.getAvulsos();
  }

  getMensalistas() {
    this.playerService.getMensalistas()
                .subscribe((players: Playerdto[]) => {
                  this.player = players
                  console.log(this.player);
                });                
  }

  getAvulsos() {
    this.playerService.getAvulsos()
    .subscribe((avulsos: any[]) => {    
      this.avulso = avulsos;
      console.log(avulsos);
      var colunas = Object.keys(avulsos);

      console.log(colunas);      
      
    });

  }

}  