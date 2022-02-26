document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("ASOBAL JS imported successfully!");
  },
  false
);

const myFrame = document.querySelector('#myFrame')

var blob = new Blob(['<div>Hello World</div>'], { type: 'text/html' });

var url = URL.createObjectURL(blob);

iframe.src = url;
