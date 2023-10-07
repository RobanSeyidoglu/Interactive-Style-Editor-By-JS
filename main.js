// Select Elements
let span = document.querySelector("span");
let spacing = document.querySelector("#spacing");
let Blur = document.querySelector("#blur");

let base = document.querySelector("#base");
let img = document.querySelector("img");

// Load the stored color from localStorage and apply it on page load

const storedColor = window.localStorage.getItem("color");

if (storedColor) {
  base.value = storedColor;
  span.style.color = storedColor;
  img.style.backgroundColor = storedColor;
}

// Add an event listener for the "change" and "mousemove" events on the color input
["change", "mousemove"].forEach((e) => {
  base.addEventListener(e, () => {
    window.localStorage.setItem("color", base.value);

    span.style.color = base.value;
    img.style.backgroundColor = base.value;
  });
});

// Retrieve the stored spacing value from localStorage
const storedSpacing = window.localStorage.getItem("padding");

if (storedSpacing) {
  spacing.value = storedSpacing;
  img.style.padding = storedSpacing + "px";
}

// Add an event listener for the "change" and "mousemove" events on the spacing input
["change", "mousemove"].forEach((e) => {
  spacing.addEventListener(e, () => {
    window.localStorage.setItem("padding", spacing.value);

    img.style.padding = spacing.value + "px";
  });
});

// Retrieve the stored blur value from localStorage
const storedBlur = window.localStorage.getItem("blur");

if (storedBlur) {
  Blur.value = storedBlur;
  img.style.filter = `blur(${storedBlur}px)`;
}

// Add an event listener for the "change" and "mousemove" events on the blur input
["change", "mousemove"].forEach((e) => {
  Blur.addEventListener(e, () => {
    window.localStorage.setItem("blur", Blur.value);

    img.style.filter = `blur(${Blur.value}px)`;
  });
});
