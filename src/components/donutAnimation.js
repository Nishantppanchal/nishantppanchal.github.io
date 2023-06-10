// Credit: https://www.a1k0n.net/2011/07/20/donut-math.html

class Coord {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class Renderer {
  constructor(screenWidth, screenHeight, k1, k2, r1, r2, thetaSpacing, phiSpacing) {
    this.#screenWidth = screenWidth
    this.#screenHeight = screenHeight
    this.#k1 = k1
    this.#k2 = k2 

    var coords = [];
    for (theta = 0; theta < Math.PI; theta += thetaSpacing) {
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);

      for (phi = 0; phi < Math.PI; phi += phiSpacing) {
        const cosPhi = Math.cos(phi)
        const sinPhi = Math.sin(phi)

        const x = (r2 + r1 * cosTheta) * cosPhi
        const y = r1 * sinTheta
        const z = -(r2 + r1 * cosTheta) * sinPhi
        
        coords.push(new Coord(x, y, z));
      }
    }

    this.#coords = coords
  }

  renderFrame() {
    var image = new Array(this.#screenWidth).fill(new Array(this.#screenHeight).fill(" "))
    for (let c of this.#coords) {
        const xPrime = (this.#k1 * c.x) / (this.#k2 + c.z)
        const yPrime = (this.#k1 * c.y) / (this.#k2 + c.z)

        image[xPrime][yPrime] = "."
    }
  }
}

function donutAnimation(props) {
    const renderSpeed = props.renderSpeed;
    const renderer = new Renderer()
}

export default donutAnimation;
