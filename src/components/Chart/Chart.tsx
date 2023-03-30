import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';



interface Props { }

interface State {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      height: number;
      type: string;
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: string;
    };
    xaxis: {
      type: string;
      categories: string[];
    };
    tooltip: {
      x: {
        format: string;
      };
    };
  };
}

export default class Chart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      series: [
        {
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        // {
        //   name: 'series2',
        //   data: [11, 32, 45, 32, 34, 52, 41],
        // },
      ],
      options: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm',
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={{ 
  chart: { 
    height: 350, 
    type: "area" 
  }, 
  dataLabels: { 
    enabled: false 
  }, 
  stroke: { 
    curve: "smooth" 
  }, 
  xaxis: { 
    type: "category", 
    categories: [/* danh sách các nhãn trục x */] 
  }, 
  tooltip: { 
    x: { 
      format: "dd/MM/yyyy" 
    }  
  } 
}} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}