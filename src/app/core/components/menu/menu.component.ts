import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },

      {
        label: 'Ejemplos de señales',
        icon: 'pi pi-wave-pulse',
        items: [
          {
            label: 'Ejemplo 1',
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo1'
          },
          {
            label: 'Ejemplo 2', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo2'
          },
          {
            label: 'Ejemplo 3', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo3'
          },
          {
            label: 'Ejemplo 4', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo4'
          },
          {
            label: 'Ejemplo 5', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo5'
          },
          {
            label: 'Ejemplo 6', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo6'
          },
          {
            label: 'Ejemplo 7', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo7'
          },
          {
            label: 'Ejemplo 8', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo8'
          },
          {
            label: 'Ejemplo 9', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo9'
          },
          {
            label: 'Ejemplo 10', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo10'
          },
          {
            label: 'Ejemplo 11', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo11'
          },
          {
            label: 'Ejemplo 12', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo12'
          },
          {
            label: 'Ejemplo 13', 
            icon: 'pi pi-bolt',
            routerLink: '/ejemplo13'
          }
        ],
      },
    ];
  }
}
