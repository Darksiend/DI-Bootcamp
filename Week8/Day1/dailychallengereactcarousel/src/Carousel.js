import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel>
    <div>
      <img
        alt=""
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
      />
      <p className="legend 1">Hong Kong</p>
    </div>
    <div>
      <img
        alt=""
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
      />
      <p className="legend 2">Macao</p>
    </div>
    <div>
      <img
        alt=""
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
      />
      <p className="legend 3">Japan</p>
    </div>
    <div>
      <img
        alt=""
        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
      />
      <p className="legend 3">Las Vegas</p>
    </div>
  </Carousel>
);
