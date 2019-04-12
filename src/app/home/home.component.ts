import { Component, OnInit } from '@angular/core';
import { BarChart } from '../_services/barChart.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  barChart: BarChart;
  labels: Array<string>;
  chartTitle: string;
  data: Array<number>;

  constructor() {
    // Bar chart data
    this.labels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    this.chartTitle = 'Nombre d\'absences de l\'année';
    this.data = [2, 10, 3, 1, 5, 1, 2, 1, 3, 15, 5, 7];
    this.barChart = new BarChart(this.labels, this.chartTitle, this.data)
  }

  ngOnInit() {
    // Calendrier
    let calendar = document.querySelector(".datepicker");
    jsCalendar.new(calendar, "now", {
      language: "fr",
      firstDayOfTheWeek: 1
    });

    this.newBarChart();

  }

  // Initialize a new chart
  newBarChart() {
    let canvas = document.querySelector("#barChart");
    if (canvas) {
      let data = this.barChart.prepareData();
      new Chart(canvas, {
        type: 'bar',
        data: data,
        options: this.barChart.options
      });
    }
  }




}
