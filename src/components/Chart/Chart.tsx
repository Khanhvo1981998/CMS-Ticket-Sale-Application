// import React, { Component } from 'react';
// import ReactApexChart from 'react-apexcharts';



// interface Props { }

// interface State {
//   series: {
//     name: string;
//     data: number[];
//   }[];
//   options: {
//     chart: {
//       height: number;
//       type: string;
//       toolbar?: {
//         tools?: {
//           download?: boolean;
//         };
//       };
//       zoom?: {
//         enabled?: boolean;
//         type?: string;
//         autoScaleYaxis?: boolean;
//         zoomedArea?: {
//           fill?: {
//             color?: string;
//             opacity?: number;
//           };
//           stroke?: {
//             color?: string;
//             opacity?: number;
//             width?: number;
//           };
//         };
//       };
//     };
//     dataLabels?: {
//       enabled?: boolean;
//     };
//     stroke?: {
//       curve?: string;
//     };
//     xaxis?: {
//       type?: string;
//       categories?: string[];
//     };
//     yaxis?: {
//       labels?: {
//         formatter: (value: number) => string;
//       };
//       max?: number;
//       min?: number;
//       tickAmount?: number;
//     }[];
//     tooltip?: {
//       enabled?: boolean;
//       x?: {
//         format?: string;
//       };
//     };
//   };
// }

// export default class Chart extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       series: [
//         {
//           name: 'series1',
//           data: [170, 140, 128, 151, 142, 159, 130],
//         },

//       ],
//       options: {
//         chart: {
//           height: 350,
//           type: 'area',
//         },
//         dataLabels: {
//           enabled: false,
//         },
//         stroke: {
//           curve: 'smooth',
//         },
//         xaxis: {
//           type: 'datetime',
//           categories: [
//             '2018-09-19T00:00:00.000Z',
//             '2018-09-19T01:30:00.000Z',
//             '2018-09-19T02:30:00.000Z',
//             '2018-09-19T03:30:00.000Z',
//             '2018-09-19T04:30:00.000Z',
//             '2018-09-19T05:30:00.000Z',
//             '2018-09-19T06:30:00.000Z',
//           ],
//         },
//         tooltip: {
//           x: {
//             format: 'dd/MM/yy HH:mm',
//           },
//         },
//       },
//     };
//   }

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart options={{
//           chart: {
//             height: 350,
//             type: "area",
//             toolbar: {
//               tools: {
//                 download: false
//               }
//             },
//             zoom: {
//               enabled: false,
//               type: 'x',
//               autoScaleYaxis: false,
//               zoomedArea: {
//                 fill: {
//                   color: '#90CAF9',
//                   opacity: 0.4
//                 },
//                 stroke: {
//                   color: '#0D47A1',
//                   opacity: 0.4,
//                   width: 1
//                 }
//               }
//             },


//           },
//           dataLabels: {
//             enabled: false
//           },
//           stroke: {
//             curve: "smooth"
//           },

//           xaxis: {
//             type: "category",
//             categories: ['29/03 - 04/04', '05/04 - 11/04', '12/01 - 18/04', '19/04 - 25/04', '26/04 - 02/05']
//           },
//           yaxis: [
//             {
//               labels: {
//                 formatter: function (value) {
//                   return value + "tr";
//                 },
//               },
//               max: 260,
//               min: 140,
//               tickAmount: 3,
//             },
//           ],
//           tooltip: {
//             enabled: false,
//             x: {
//               format: "dd/MM/yyyy"
//             }
//           }

//         }} options={} series={this.state.series}  type="area" height={350} />
//       </div>
//     );
//   }
// }



// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// type ChartState = {
//   options: {
//     chart: {
//       id: string;
//       toolbar: {
//         show: boolean;
//       };
//     };
//     xaxis: {
//       categories: string[];
//     };
    
//   };
  
//   series: {
//     name: string;
//     data: number[];
//   }[];
// };

import React from 'react';
import ReactApexChart from 'react-apexcharts';

type ChartState = {
  options: {
    chart: {
      background:string;
      foreColor: string;
      id: string;
      toolbar: {
        show: boolean;
      };
    };
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
          foreColor:"#fef2e9",
          background:"#fff",
          id: 'basic-bar',
          toolbar: {
            show: false,
          },
          
        },
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

