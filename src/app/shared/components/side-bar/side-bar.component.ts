import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface defaultOptions {
  icon: string;
  name: string;
  router: string[];
  query?: {
    hola: string;
  }
}

interface accessLink {
  name: string;
  icon: string;
}

interface mainMenuInterface {
  defaultOptions?: defaultOptions[],
  accessLink?: accessLink[],
}

interface customOptionsInterface {
  name: string;
  router: string[];
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: mainMenuInterface = {};
  customOptions: customOptionsInterface[] | [] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu = {
      defaultOptions: [
        {
          name: 'Home',
          icon: 'uil uil-estate',
          router: ['/', 'auth']
        },
        {
          name: 'Buscar',
          icon: 'uil uil-search',
          router: ['/', 'history']
        },
        {
          name: 'Tu biblioteca',
          icon: 'uil uil-chart',
          router: ['/', 'favorites'],
          query: { hola: 'mundo' }
        }
      ],

      accessLink: [
        {
          name: 'Crear lista',
          icon: 'uil-plus-square'
        },
        {
          name: 'Canciones que te gustan',
          icon: 'uil-heart-medical'
        }
      ]
    }

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
