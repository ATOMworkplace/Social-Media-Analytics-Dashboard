import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import analyticData from "./analytic_data.json";

const Labels = [
  "Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

function LineChart({ platform }) {
  const platformData = analyticData.socialMediaAnalytics[platform];
  
  const followersGainedPerMonth = Object.values(platformData.followersGainedPerMonth);
  const followersLostPerMonth = Object.values(platformData.followersLostPerMonth);

  const data = {
    labels: Labels,
    datasets: [
      {
        label: "Followers Gained",
        backgroundColor: "rgb(78, 251, 90)",
        borderColor: "rgb(78, 251, 90)",
        data: followersGainedPerMonth,
      },
      {
        label: "Followers Lost",
        backgroundColor: "rgb(238, 53, 53)",
        borderColor: "rgb(238, 53, 53)",
        data: followersLostPerMonth,
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

export default LineChart;
