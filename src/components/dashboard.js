import React, { useState } from 'react';
import SCard from './cards';
import Acard from './Acard';
import LineChart from './lineChart.js';
import LineChart2 from './lineChart2.js';
import LineChart3 from './lineChart3.js';
import jsonData from './analytic_data.json';
import PostForm from './PostForm.js';

function Dashboard() {
  const [clickedImage, setClickedImage] = useState(null);

  function handleAnalyticsClick(imgName) {
    setClickedImage(imgName);
  }

  const analyticsData = clickedImage ? jsonData.socialMediaAnalytics[clickedImage] : null;
  const platform = clickedImage ? [clickedImage]: null;

  return (
    <div className="dashboard">
      <h1 className="head1">Social Media Analytics</h1>
      <div className="Socials">
        <SCard imgName={"Twitter"} imgg={"X.jpg"} onClick={handleAnalyticsClick} />
        <SCard imgName={"YouTube"} imgg={"yt.png"} onClick={handleAnalyticsClick} />
        <SCard imgName={"Instagram"} imgg={"ig.jpg"} onClick={handleAnalyticsClick} />
        <SCard imgName={"Facebook"} imgg={"fb.png"} onClick={handleAnalyticsClick} />
      </div>

      <div className="Analytics">
        <div className="Detail">
          {analyticsData && (
            <>
              <Acard type="Likes" Adata={analyticsData.likes} />
              <Acard type="Views" Adata={analyticsData.views} />
              <Acard type="Followers" Adata={analyticsData.followers} />
              <Acard type="Posts" Adata={analyticsData.posts} />
              <Acard type="Shares" Adata={analyticsData.shares} />
            </>
          )}
        </div>
      </div>

      <div className="Graph0">
        <div className="Graph">
        {platform && (
            <>
              <LineChart platform={platform}/>
            </>
          )}
          
        </div>
        <div className="Graph1">
        {platform && (
            <>
              <LineChart2 platform={platform}/>
            </>
          )}
        </div>
        <div className="Graph2">
        {platform && (
            <>
              <LineChart3 platform={platform}/>
            </>
          )}
        </div>
      </div>
      <PostForm />
      <footer className="footer">© Copyright 2024</footer>
    </div>
  );
}

export default Dashboard;
