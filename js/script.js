"use strict";
// Script for Area of Trapezoid

// Elements
// Inputs
const baseInput = document.getElementById('base1Input');
const base2Input = document.getElementById('base2Input');
const heightInput = document.getElementById('heightInput');
// Result Display
const areaResult = document.getElementById('AreaResult');
// Calculate Button
const calculateBtn = document.getElementById('CalculateBtn');

// Code for calculating area
function Calculate() {

  // Get Inputs
  let base1 = Number(base1Input.value);
  let base2 = Number(base2Input.value);
  let height = Number(heightInput.value);

  // Calculate Area of Trapezoid using Formula
  let area = (base1 + base2) * height * 0.5;

  // Round up to 2 decimal places, if needed
  if (area % 1 != 0) {
    area = area.toFixed(2);
  }

  // Display Result
  areaResult.innerHTML = "" + area + " m<sup>2</sup>";
  return;
}

// Connect button click to the Calculate() function, 
calculateBtn.onclick = Calculate;

// Initial Calculate() call
Calculate();