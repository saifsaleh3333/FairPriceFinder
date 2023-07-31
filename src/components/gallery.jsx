import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/ageChart.png", title: "Age Demographics" },
    { thumb: "img/portfolio/ageGraph.png", title: "Age Demographics 2" },
    { thumb: "img/portfolio/agePieChart.png", title: "Age Chart" },
    { thumb: "img/portfolio/foodtimes.png", title: "Food Wait Times" },
    { thumb: "img/portfolio/genderChart.png", title: "Gender Ratio" },
    { thumb: "img/portfolio/tablestimes.png", title: "Table Turnover Times" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Reporting Samples</h2>
          <p>Discover the power of data-driven decision making with our example reports. 
            These demonstrate how we turn raw data into clear, actionable insights that can help streamline your restaurant's operations.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
