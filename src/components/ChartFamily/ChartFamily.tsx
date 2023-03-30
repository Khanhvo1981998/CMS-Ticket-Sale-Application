import React, { Component } from 'react'
import Paper from "@mui/material/Paper";
import {
    Chart,
    PieSeries,
    Title,
    PieSeriesProps,
} from "@devexpress/dx-react-chart-material-ui";
import "./ChartFamily.css"
import { Animation } from "@devexpress/dx-react-chart";
type Props = {
   

}
// type PieSeriesWithIntrinsicAttributesProps = React.HTMLAttributes<HTMLDivElement> & PieSeriesProps;
type State = {
  data: { ticket: string; val: number }[];
};



export default class ChartFamily extends Component<Props, State> {
  state: State = {
    data: [
      { ticket: "used-ticked", val: 56024 },
      { ticket: "unused-ticket", val: 13568 }
    ]
  };
   
    
render() {
    const { data: chartData } = this.state;

    return (
        <Paper className=" chart-family">
        <Chart data={chartData}>

            <PieSeries
              {...{
                valueField: 'val',
                argumentField: 'ticket',
                innerRadius: 0.6
              }}
            >

            </PieSeries>

            <Animation />
        </Chart>
    </Paper>
    );
  }

}
