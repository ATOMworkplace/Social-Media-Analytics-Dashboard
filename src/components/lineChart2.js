import React from "react";
import { Line } from "react-chartjs-2";
import analyticData from "./analytic_data.json";
import Chart from 'chart.js/auto';

const Labels = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
];

function LineChart2({ platform }) {
  const platformData = analyticData.socialMediaAnalytics[platform];
  
  const viewsPerDay = Object.values(platformData.viewsPerDay);
 
  const data = {
    labels: Labels,
    datasets: [
      {
        label:" Monthly Views",
        backgroundColor: "rgb(97, 218, 237)",
        borderColor: "rgb(97, 218, 237)",
        data: viewsPerDay,
      },
    ],
  };

  return (
    <div>
      <center><h2>{platform}</h2></center>
      <Line data={data} />
    </div>
  );
}

export default LineChart2;
