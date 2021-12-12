import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
      .burguer-btn {
        visibility: hidden;
      }
      .mat-toolbar-row {
        justify-content: space-between;
      }
      .mat-tab-nav-bar {
        border-bottom: none;
      }
      a:hover {
        color: white;
      }

      @media screen and (max-width: 834px) {
        .burguer-btn {
          visibility: visible;
        }
        .navbar-desktop {
          display: none;
        }
      }
    `,
  ],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      ruta: '/home',
      nombre: 'Home',
    },
    {
      ruta: '/tecnologias',
      nombre: 'Mis herramientas',
    },
    {
      ruta: '/personal',
      nombre: '¿Quién soy?',
    },
    {
      ruta: '/contacto',
      nombre: 'Contactame',
    },
    {
      ruta: '/entrañas',
      nombre: 'Este sitio',
    },
  ];
}
