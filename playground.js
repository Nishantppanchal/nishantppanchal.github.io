function sleep(ms) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + ms) {}
}

const screenHeight = 30;
const screenWidth = 50;
const r1 = 1;
const r2 = 2;
const k2 = 5;
// const k1 = (screenWidth * k2 * 3) / (10 * (r1 + r2));
const k1 = 30;
const chars = '.,-~:;=!*#$@';
const thetaSpacing = 0.01;
const phiSpacing = 0.01;
const aSpacing = Math.PI / 100;
const bSpacing = Math.PI / 100;

var frames = [];

for (
  let A = 0, B = 0;
  A < 2 * Math.PI && B < 2 ** Math.PI;
  A += aSpacing, B += bSpacing
) {
  const cosA = Math.cos(A),
    sinA = Math.sin(A);
  const cosB = Math.cos(B),
    sinB = Math.sin(B);

  var image = new Array(screenHeight),
    zBuffer = new Array(screenHeight);
  for (let i = 0; i < screenHeight; i++) {
    image[i] = new Array(screenWidth).fill(' ');
    zBuffer[i] = new Array(screenWidth).fill(0);
  }

  for (let theta = 0; theta <= 2 * Math.PI; theta += thetaSpacing) {
    const cosTheta = Math.cos(theta),
      sinTheta = Math.sin(theta);

    for (let phi = 0; phi <= 2 * Math.PI; phi += phiSpacing) {
      const cosPhi = Math.cos(phi),
        sinPhi = Math.sin(phi);

      const x =
        (r2 + r1 * cosTheta) * (cosB * cosPhi + sinA * sinB * sinPhi) -
        r1 * cosA * sinB * sinTheta;
      const y =
        (r2 + r1 * cosTheta) * (cosPhi * sinB - cosB * sinA * sinPhi) +
        r1 * cosA * cosB * sinTheta;
      const z = cosA * sinPhi * (r2 + r1 * cosTheta) + r1 * sinA * sinTheta;

      const xPrime = Math.round(screenWidth / 2 + (k1 * x) / (k2 + z));
      const yPrime = Math.round(screenHeight / 2 - ((k1 / 2) * y) / (k2 + z));

      if (0 <= xPrime && xPrime <= 18 && yPrime == 18) {
        let temp = 0;
      }

      if (
        0 <= xPrime &&
        xPrime < screenWidth &&
        0 <= yPrime &&
        yPrime < screenHeight
      ) {
        const l =
          cosPhi * cosTheta * sinB -
          cosA * cosTheta * sinPhi -
          sinA * sinTheta +
          cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);
        const lIndex = Math.round(l * 8);
        if (l > 0 && 1 / (k2 + z) > zBuffer[yPrime][xPrime]) {
          zBuffer[yPrime][xPrime] = 1 / (k2 + z);
          image[yPrime][xPrime] = chars[lIndex];
        } else {
          temp = 0;
        }
      } else {
        // console.log('error');
      }
    }
  }

  const imageText = image.map((r) => r.join('')).join('\n');
  console.log(imageText);
  sleep(50);
  console.clear();

  frames.push(imageText);
}

const jsonData = JSON.stringify(frames);
var fs = require('fs');
fs.writeFile('test.json', jsonData, function (err) {
  if (err) {
    console.log(err);
  }
});
