import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Calendrier
    let calendar = document.querySelector(".datepicker");
    jsCalendar.new(calendar, "now", {
      language: "fr",
      firstDayOfTheWeek: 1
    });

    this.barChart();

  }

  barChart() {
    let data = {
      labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
      datasets: [{
        label: 'Nombre d\'absences de l\'année',
        data: [2, 10, 3, 0, 5, 1, 0, 0, 0, 15, 5],
        background: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    let options = {
      sclale: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        display: true
      },
      elements: {
        point: {
          radius: 0
        }
      }
    };

    let canvas = document.querySelector('#lineChart');
    if (canvas) {
      // let lineChartCanvas = canvas.get(0).getContext('2d');
      new Chart(canvas, {
        type: 'bar',
        data: data,
        options: options
      });
    }
  }

}
