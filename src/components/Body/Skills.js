import React, { Component } from "react";
import Carousel from "../../util/Carousel";
import CarouselItem from "../../util/CarouselItem";

export class Skills extends Component {
  render() {
    let urls = ["/img/car-1.jpg", "/img/car-2.jpg", "/img/car-3.jpg"];
    return (
      <div>
        <Carousel showIndicator={true} showControls={true}>
          {urls.map((url, index) => (
            <CarouselItem key={index}>
              <img src={url} alt={""} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    );
  }
}
