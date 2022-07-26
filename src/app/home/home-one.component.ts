import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html'
})
export class HomeOneComponent implements AfterViewInit, OnInit {

  canvas: any;
  ctx: any;

  shwComment: boolean = false;
  shwView: boolean = false;
  shwLike: boolean = false;

  constructor() { }

  ngOnInit() {
    this.shwComment  = false;
    this.shwView  = true;
    this.shwLike  = true;
  }

  showComment() {
    this.shwComment  = false;
    this.shwView  = true;
    this.shwLike  = true;
  }

  showView() {
    this.shwComment  = true;
    this.shwView  = false;
    this.shwLike  = true;
  }

  showLike() {
    this.shwComment  = true;
    this.shwView  = true;
    this.shwLike  = false;
  }

  ngAfterViewInit() {

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          responsive: true,
          display:true  
      }
    });



    this.canvas = document.getElementById('myChart2');
    this.ctx = this.canvas.getContext('2d');

    var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          responsive: true,
          display:true  
      }
    });


    this.canvas = document.getElementById('myChart3');
    this.ctx = this.canvas.getContext('2d');

    var myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          responsive: true,
          display:true  
      }
    });

    this.shwComment  = false;
    this.shwView  = true;
    this.shwLike  = true;
  }

}
