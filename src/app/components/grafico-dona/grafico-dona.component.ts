import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels') ChartLabels: string[] = [];
  @Input('ChartData') ChartData: number [] = [];
  @Input('ChartType') ChartType: string = '';


  constructor() { }

  ngOnInit() {
  }

}
