document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields
  const cse211 = document.getElementById("cse211");
  const cse212 = document.getElementById("cse212");
  const cse256 = document.getElementById("cse256");
  const cse215 = document.getElementById("cse215");
  const cse216 = document.getElementById("cse216");
  const chem176 = document.getElementById("chem176");
  const mat261 = document.getElementById("mat261");
  const ged119 = document.getElementById("ged119");
  const chem175 = document.getElementById("chem175");

  // Define an object to store the values
  const subjectValues = {};

  // Add event listeners to input fields to update the object
  cse211.addEventListener("input", function () {
    subjectValues.cse211 = parseFloat(this.value) * 3;
  });

  cse212.addEventListener("input", function () {
    subjectValues.cse212 = parseFloat(this.value) * 1.5;
  });

  cse256.addEventListener("input", function () {
    subjectValues.cse256 = parseFloat(this.value) * 1.5;
  });

  cse215.addEventListener("input", function () {
    subjectValues.cse215 = parseFloat(this.value) * 3;
  });

  cse216.addEventListener("input", function () {
    subjectValues.cse216 = parseFloat(this.value) * 1;
  });

  chem176.addEventListener("input", function () {
    subjectValues.chem176 = parseFloat(this.value) * 0.8;
  });

  mat261.addEventListener("input", function () {
    subjectValues.mat261 = parseFloat(this.value) * 3;
  });

  ged119.addEventListener("input", function () {
    subjectValues.ged119 = parseFloat(this.value) * 2;
  });
  chem175.addEventListener("input", function () {
    subjectValues.chem175 = parseFloat(this.value) * 3;
  });

  const cgpaDiv = document.getElementById("cgpa");
  const cgpaValue = document.getElementById("cgpaValue");
  cgpaDiv.classList.add("hidden");
  // Example: Display the object in console when a button is clicked

  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (Object.keys(subjectValues).length === 9) {
      let finalResult = 0;

      for (const key in subjectValues) {
        finalResult += subjectValues[key];
      }

      finalResult = finalResult / 18.8;

      cgpaValue.textContent = `Your CGPA is : ${finalResult.toFixed(2)}`;

      cgpaDiv.classList.remove("hidden");
    }
  });
});
