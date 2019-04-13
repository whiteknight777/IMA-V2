import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-conge',
  templateUrl: './new-conge.component.html',
  styleUrls: ['./new-conge.component.css']
})
export class NewCongeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    // Launch loader
    this.launchLoader();
    let call = function () {
      document.querySelector('.loader').setAttribute('style', 'display:none');
      document.querySelector('.container-scroller').setAttribute('style', 'display:block');
    }
    setTimeout(call, 3000)
  }

  launchLoader() {
    document.querySelector('.loader').setAttribute('style', 'display:block');
    document.querySelector('.container-scroller').setAttribute('style', 'display:block; opacity:.6');
  }
}
