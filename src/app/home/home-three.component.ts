import { Component, OnInit, AfterViewInit, ViewContainerRef } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home-three',
	templateUrl: './home-three.component.html',
})
export class HomeThreeComponent implements OnInit, AfterViewInit {

    canvas: any;
    ctx: any;
    
    shwComment: boolean = false;
    shwView: boolean = false;
    shwLike: boolean = false;

    totalsubs: number;
	totalsignups: number;
	weeksubs: number;
	weeksignups: number;
	lastweeksignups: number;
	lastweeksubs: number;
	subsperc: number;
	signupperc: number;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {

        this.canvas = document.getElementById('myChart31');
        this.ctx = this.canvas.getContext('2d');

        var myChart = new Chart(this.ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Views',
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
                legend: {
                    display: true,
                    position: 'bottom',
                    fullWidth: true,
                    labels: {
                        boxWidth: 12,
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
                display:true  
            }
        });
            

        this.canvas = document.getElementById('myChart32');
        this.ctx = this.canvas.getContext('2d');

        var myChart = new Chart(this.ctx, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Comments',
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
                legend: {
                    display: true,
                    position: 'bottom',
                    fullWidth: true,
                    labels: {
                        boxWidth: 12,
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                cutoutPercentage: 50,
                responsive: true,
                maintainAspectRatio: false,
                display:true  
            }
		});
    }
}
