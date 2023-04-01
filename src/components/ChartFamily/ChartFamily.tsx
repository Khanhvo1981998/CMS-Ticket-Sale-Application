import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts';

type Props = {
   

}
type State = {
  series: number[];
  options: ApexCharts.ApexOptions;
}



export default class ChartFamily extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      series: [13568,56024],
      options: {
        
        chart: {
          type: 'donut',
        },
        colors: ['#ff8a48','#4f75ff'],
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          enabled: false // tắt data labels
        },
        legend: {
          show: false, // Tắt legend-text
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }
   
    
render() {
  const { series, options } = this.state;

    return (
      <div id="chart-family">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
    );
  }

}
