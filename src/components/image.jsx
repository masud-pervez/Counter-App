import React, { Component } from 'react';
import logo from './imageSlider/download'

class ImageSlider extends Component {
  state = {}
  render() {
    return (
      <div id="carouselExampleControlsNoTouching" width={100} height={50} class="carousel slide" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">

          <div class="carousel-item active">
            <img src={logo} class="d-block w-100" alt="Not found" />
          </div>

          <div class="carousel-item">
            <img src={logo} width={100} height={50} class="d-block w-100" alt="..." />
          </div>

          <div class="carousel-item">
            <img src={logo} class="d-block w-100" alt="..." />
          </div>
        </div>

        <button class="carousel-control-prev bg-primary" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next bg-primary" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default ImageSlider;