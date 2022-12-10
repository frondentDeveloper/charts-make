import React from 'react';
import { Chart } from "react-google-charts";
import ForDashboard from '../forDashboard';
import "./chart.scss";




function FirstComponent(props) {



  const data = [
    ["Element", "Density", { role: "style" }],
    ["Jan", 17.94, "#e5e4e2"],
    ["Feb", 23.49, "e5e4e2"],
    ["Mar", 28.3, "e5e4e2"],
    ["Apr", 38.45, "color: #e5e4e2"],
    ["May", 21.45, "color: #e5e4e2"],
    ["Jun", 30.45, "color: #e5e4e2"],
    ["Jul", 21.45, "color: #e5e4e2"],
    ["Aug", 40.45, "color: blue"],
    ["Sep", 25.45, "color: #e5e4e2"],
    ["Oct", 20.45, "color: #e5e4e2"],
    ["Now", 28.45, "color: #e5e4e2"],
    ["Dec", 30.45, "color: #e5e4e2"],
  ];
  const text = "Yillik statistika"
  return (
      <>
      <ForDashboard/>
        <div className="chart-in-js">
          <div className="in_chart">
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            <img src="image/Customers.png" alt=""/>
          </div>
        </div>
      </>
  );
}

export default FirstComponent;