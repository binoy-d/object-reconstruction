import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const LightScanCarousel = ({ grabNum, camNum, start}) => {
  const [images, setImages] = useState({});

  useEffect(() => {
      let directory = "../img/grab"+grabNum+"/frame_c"+camNum;
      console.log(directory);
      if(grabNum === 1){
          if(camNum === 0){
            setImages(
                importAll(require.context("../img/grab1/frame_c0",false,/\.jpg$/))
              );
          }else{
            setImages(
                importAll(require.context("../img/grab1/frame_c1",false,/\.jpg$/))
              );
          }
      }

    
  }, []);

  return (
    <Carousel>
      {Object.keys(images)
        .slice(start,start+10)
        .map((i, index) => {
          console.log(images[i].default);
          return (
            <div>
              <img src={images[i].default} alt={"Camera "+camNum+", Scan " + index} />
              <p className="legend">{"Camera "+camNum+", Scan " + index}</p>
            </div>
          );
        })}
    </Carousel>
  );
};

export default function InputSection() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="text header-1">Structured Light Scans</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
              <h3 className="text-red">Left Cam  Vertical</h3>
              <LightScanCarousel grabNum={1} camNum={0} start={0} />
          </div>
          <div className="col-6 text-center">
          <h3 className="text-red">Right Cam Vertical</h3>
              <LightScanCarousel grabNum={1} camNum={1} start={0}/>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
              <h3 className="text-red">Left Cam Horizontal</h3>
              <LightScanCarousel grabNum={1} camNum={0} start={20} />
          </div>
          <div className="col-6 text-center">
          <h3 className="text-red">Right Cam Horizontal</h3>
              <LightScanCarousel grabNum={1} camNum={1} start={20}/>
          </div>
        </div>
      </div>
    </section>
  );
}
