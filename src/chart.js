import React, { useState } from "react";
import Chart from "react-apexcharts";

export function ChartBar() {
  const [statechart, useStateChart] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  const [pieChart, setPieChart] = useState({
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  });

  return (
    <div className="charts-container">
      <div className="lineCharts-container"><Chart
        options={statechart.options}
        series={statechart.series}
        type="bar"
        width="575" />
        <Chart
          options={statechart.options}
          series={statechart.series}
          type="line"
          width="575" /></div>

      <div className="donut">
        <Chart
          options={pieChart.options}
          series={pieChart.series}
          type="donut"
          width="400" />
      </div>
    </div>
  );
}
