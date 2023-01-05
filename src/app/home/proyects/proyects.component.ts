import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {
  proyects = [
    {
      name: 'idiomizarse',
      year: '2019',
      description: 'Escuela de idiomas online',
      framework: 'Angular',
      img: '',
      links: {
        git: 'https://github.com/PatitaDelta/Idiomizarse',
        url: 'https://idiomizarsebd.firebaseapp.com/inicio'
      }
    },
    {
      name: 'portafolios',
      year: '2022',
      description: 'Quien soy y mis proyectos',
      framework: 'Angular',
      img: '',
      links: {
        git: 'https://github.com/PatitaDelta/Portafolios',
        url: '...'
      }
    }
  ]
}
