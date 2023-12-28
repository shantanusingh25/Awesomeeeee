Shery.imageEffect("#back", {
  style: 3,
  config: {
    uFrequencyX: { value: 42.75, range: [0, 100] },
    uFrequencyY: { value: 23.66, range: [0, 100] },
    uFrequencyZ: { value: 13.74, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 57.75 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.5996667670532796 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4.42, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.199684, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

let counter = 1;
const main = document.getElementById("main");
const btn = document.getElementById("explore-now");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

main.addEventListener("click", function () {
  counter += 1;

  if (counter == 1) {
    one.innerText = "AWESOME ";
    two.innerText = "WEBSITE";
    three.innerText = "PROJECT.";
  }

  if (counter == 2) {
    one.innerText = "MADE BY";
    two.innerText = "SPARSH &";
    three.innerText = "SHANTANU.";
  }

  if (counter == 3) {
    one.innerText = "STYLES FROM";
    two.innerText = "AWESOME LIBRARY";
    three.innerText = "SHERY JS.";
  }

  if (counter == 4) {
    one.innerText = "INSPIRED FROM";
    two.innerText = "THE LEGENDS";
    three.innerText = "SHERIYANS.";
  }

  if (counter == 5) {
    one.innerText = "DAVID CHANG";
    two.innerText = "GIVES ZERO";
    three.innerText = "FUNK.";

    counter = 1;
  }
  console.log(counter);
});
