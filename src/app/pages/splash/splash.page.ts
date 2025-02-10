import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  //se usa router para navegar entre las paginas
  constructor( private router:Router) { 
  }

  ngOnInit() {
    //se usa setTimeout para que despues de 3 segundos se redireccione a la pagina de login
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 3000);
  }

}
