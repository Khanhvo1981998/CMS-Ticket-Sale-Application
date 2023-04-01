
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./Chart.css"

type ChartState = {
  options: {
    chart: {
      // fill:any
      id: string;
      toolbar: {
        show: boolean;
      };
    };
    color:any,
    // theme:any,
    xaxis: {
      categories: string[];
    };
  };
  series: {
    name: string;
    data: number[];
  }[];
};

class Chart extends React.Component<{}, ChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      options: {
        chart: {
          // fill:{
          //   colors: ['#ff9b3e'] 
          // },
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
          
        },
        
        color:['#ff9b3e'] ,
        xaxis: {
          categories: ['Jan',"" ,'Feb', "",'Mar', "",'Apr',"" ,'May'],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [145,170 ,150, 190,221,210 ,250,200,188],
        },
      ],
    };
  }

  render() {
    return (
      <div id="chart">
      <ReactApexChart options={{
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              tools: {
                download: false
              }
            },
            zoom: {
              enabled: false,
              type: 'x',
              autoScaleYaxis: false,
              zoomedArea: {
                fill: {
                  color: '#90CAF9',
                  opacity: 0.4
                },
                stroke: {
                  color: '#0D47A1',
                  opacity: 0.4,
                  width: 1
                }
              }
            },


          },
          
          dataLabels: {
            enabled: false
          },
          // plotOptions: {
          //   treemap: {
          //     enableShades: true,
          //     shadeIntensity: 0.5,
          //     reverseNegativeShade: true,
          //     colorScale: {
          //       ranges: [
          //         {
          //           from: -6,
          //           to: 0,
          //           color: '#CD363A'
          //         },
          //         {
          //           from: 0.001,
          //           to: 6,
          //           color: '#52B12C'
          //         }
          //       ]
          //     }
          //   }
          // },
          stroke: {
            curve: "smooth"
          },

          xaxis: {
            type: "category",
            categories: ['29/03 - 04/04', "",'05/04 - 11/04', "",'12/01 - 18/04',"" ,'19/04 - 25/04', "",'26/04 - 02/05']
          },
          yaxis: [
            {
              labels: {
                formatter: function (value) {
                  return value + "tr";
                },
              },
              max: 260,
              min: 140,
              tickAmount: 3,
            },
          ],
          tooltip: {
            enabled: false,
            x: {
              format: "dd/MM/yyyy"
            }
          }

        }}  series={this.state.series}  type="area" height={350} />
      </div>
    );
  }
}

export default Chart;

