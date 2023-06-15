// Credit: https://www.a1k0n.net/2011/07/20/donut-math.html
// Frames were pregenerated

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

class Coord {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class Renderer {
  #screenWidth;
  #screenHeight;
  #k1;
  #k2;
  #r1;
  #r2;
  #thetaSpacing;
  #phiSpacing;
  #chars = '.,-~:;=!*#$@';
  #A = 0;
  #B = 0;
  #aIncrement;
  #bIncrement;

  constructor(screenWidth, screenHeight, r1, r2, k2, thetaSpacing, phiSpacing, aIncrement, bIncrement) {
    this.#screenWidth = screenWidth;
    this.#screenHeight = screenHeight;
    this.#r1 = r1;
    this.#r2 = r2;
    this.#k1 = (screenWidth * k2 * 3) / (8 * (r1 + r2));
    // this.#k1 = 150;
    this.#k2 = k2;
    this.#thetaSpacing = thetaSpacing;
    this.#phiSpacing = phiSpacing;
    this.#aIncrement = aIncrement;
    this.#bIncrement = bIncrement;
  }

  renderFrame() {
    const cosA = Math.cos(this.#A), sinA = Math.sin(this.#A);
    const cosB = Math.cos(this.#B), sinB = Math.sin(this.#B);

    var image = new Array(this.#screenHeight), zBuffer = new Array(this.#screenHeight);
    for (let i = 0; i < this.#screenHeight; i++) {
      image[i] = new Array(this.#screenWidth).fill(' ');
      zBuffer[i] = new Array(this.#screenWidth).fill(0);
    }

    for (let theta = 0; theta < 2 * Math.PI; theta += this.#thetaSpacing) {
      const cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);

      for (let phi = 0; phi < 2 * Math.PI; phi += this.#phiSpacing) {
        const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi);

        const x = (this.#r2 + this.#r1 * cosTheta) * (cosB * cosPhi + sinA * sinB * sinPhi) - this.#r1 * cosA * sinB * sinTheta;
        const y = (this.#r2 + this.#r1 * cosTheta) * (cosPhi * sinB - cosB * sinA * sinPhi) + this.#r1 * cosA * cosB * sinTheta;
        const z = cosA * sinPhi * (this.#r2 + this.#r1 * cosTheta) + this.#r1 * sinA * sinTheta;

        console.log(y)

        const xPrime = (this.#screenWidth / 2 + (this.#k1 * x) / (this.#k2 + z)) << 0;
        const yPrime = (this.#screenHeight / 2 + (this.#k1 * y) / (this.#k2 + z)) << 0;

        const l = cosPhi * cosTheta * sinB - cosA * cosTheta * sinPhi - sinA * sinTheta + cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);
        const lIndex = (l * 8) << 0;
        if (l > 0 && (1 / (this.#k2 + z)) > zBuffer[yPrime][xPrime]) {
          zBuffer[yPrime][xPrime] = 1 / (this.#k2 + z);
          image[yPrime][xPrime] = this.#chars[lIndex]
          // console.log(lIndex + ", " + (1 / (this.#k2 + z)) + ", " + zBuffer[yPrime][xPrime] + ", (" + xPrime +  ", " + yPrime + ")")
        } else {
          // console.log(lIndex + ", " + (1 / (this.#k2 + z)) + ", " + zBuffer[yPrime][xPrime] + ", (" + xPrime +  ", " + yPrime + ")")
        }
      }
    }
    console.log(zBuffer)

    this.#A += this.#aIncrement;
    this.#B += this.#bIncrement;

    return image;
  }
}

function DonutAnimation(props) {
  const ref = useRef();

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [renderer, setRenderer] = useState(null);
  const [image, setImage] = useState(null)

  useEffect(() => {
    setHeight(40);
    // setWidth(ref.current?.offsetWidth / 8);
    setWidth(100);
  }, []);

  useEffect(() => {
    if (height > 0 && width > 0) {
      const r1 = 0.5;
      const r2 = 2;
      const k2 = 5;
      // const k1 = (width * k2 * 3) / (8 * (r1 + r2));
      const k1 = 150;
      // const k1 = 150
      setRenderer(new Renderer(width, height, r1, r2, k2, 0.07, 0.02, 0.07, 0.03));
    }
  }, [width, height, props.renderSpeed]);

  //   console.log(renderer.renderFrame())

  async function updateImage() {
    const image = renderer.renderFrame();
    const imageText = image.map(r => r.join('')).join('\n');
    setImage(imageText);
  }

  useEffect(() => {
    if (renderer != null) {
      updateImage();
      // setInterval(updateImage, props.renderSpeed);
      const i = setInterval(updateImage, 50)
      return () => clearInterval(i);
    }
  }, [renderer]);

  return (
    <pre>
      {image}
    </pre>
  );
}

export default DonutAnimation;
