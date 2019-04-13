import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Addons
import swal from 'sweetalert';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabs = true;
  secondMenu = [
    {
      title: 'Tableau de bord',
      url: '/dashboard',
      icon: 'mdi mdi-view-dashboard',
      active: true
    },
    {
      title: 'Historique activités',
      url: '/',
      icon: 'mdi mdi-format-list-bulleted',
      active: false
    },
    {
      title: 'Historique droits',
      url: '/',
      icon: 'mdi mdi-book-multiple',
      active: false
    },
    {
      title: 'Arrêt de travail',
      url: '/',
      icon: 'mdi mdi-block-helper',
      active: false
    }
  ];
  firstMenu = [
    {
      title: 'Tableau de bord',
      url: '/dashboard',
      icon: 'mdi mdi-view-dashboard',
      active: true
    },
    {
      title: 'Nouveau congé',
      url: '/nouveau-conge',
      icon: 'mdi mdi-airplane',
      active: false
    },
    {
      title: 'Nouvelle permission',
      url: '/',
      icon: 'mdi mdi-comment-text',
      active: false
    }
  ];
  menu;
  currentRoute;

  constructor(
    private router: Router,
  ) {
    this.menu = this.firstMenu
    this.currentRoute = this.router.url
  }



  ngOnInit() {
    console.log(this.router.url)
    this.activateCurrentRoute()
  }

  activateCurrentRoute() {
    this.firstMenu.forEach((el) => {
      if (el.url == this.currentRoute) {
        el.active = true
      } else {
        el.active = false
      }
    })

    this.secondMenu.forEach((el) => {
      if (el.url == this.currentRoute) {
        el.active = true
      } else {
        el.active = false
      }
    })

  }

  menuPrincipal($event) {
    $event.preventDefault();
    this.tabs = true;
    this.menu = this.firstMenu
  }

  menuSecondaire($event) {
    $event.preventDefault();
    this.tabs = false;
    this.menu = this.secondMenu;
  }

  logout() {
    swal({
      text: "Voulez-vous vraiment vous déconnecter?",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: "Annuler",
        confirm: {
          text: "Confirmer",
        },
      },
    }).then((value) => {
      if (value) {
        // Suppression des sessions utilisateurs
        this.launchLoader();
        this.router.navigate(['/login'])
      }
    });
  }

  launchLoader() {
    document.querySelector('.loader').setAttribute('style', 'display:block');
    document.querySelector('.container-scroller').setAttribute('style', 'display:block; opacity:.6');
  }

}
