document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields
  const cse251 = document.getElementById("cse251");
  const cse252 = document.getElementById("cse252");
  const cse253 = document.getElementById("cse253");
  const cse213 = document.getElementById("cse213");
  const cse217 = document.getElementById("cse217");
  const mat265 = document.getElementById("mat265");
  const ged113 = document.getElementById("ged113");
  const cse208 = document.getElementById("cse208");

  // Define an object to store the values
  const subjectValues = {};

  // Add event listeners to input fields to update the object
  cse251.addEventListener("input", function () {
    subjectValues.cse251 = parseFloat(this.value) * 3;
  });

  cse252.addEventListener("input", function () {
    subjectValues.cse252 = parseFloat(this.value) * 1.5;
  });
  cse253.addEventListener("input", function () {
    subjectValues.cse253 = parseFloat(this.value) * 3;
  });

  cse213.addEventListener("input", function () {
    subjectValues.cse213 = parseFloat(this.value) * 2;
  });

  cse217.addEventListener("input", function () {
    subjectValues.cse217 = parseFloat(this.value) * 3;
  });

  mat265.addEventListener("input", function () {
    subjectValues.mat265 = parseFloat(this.value) * 3;
  });

  ged113.addEventListener("input", function () {
    subjectValues.ged113 = parseFloat(this.value) * 2;
  });

  cse208.addEventListener("input", function () {
    subjectValues.cse208 = parseFloat(this.value) * 1;
  });

  const cgpaDiv = document.getElementById("cgpa");
  const cgpaValue = document.getElementById("cgpaValue");
  cgpaDiv.classList.add("hidden");
  // Example: Display the object in console when a button is clicked

  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (Object.keys(subjectValues).length === 8) {
      let finalResult = 0;

      for (const key in subjectValues) {
        finalResult += subjectValues[key];
      }

      finalResult = finalResult / 18.5;

      cgpaValue.textContent = `Your CGPA is : ${finalResult.toFixed(2)}`;

      cgpaDiv.classList.remove("hidden");
    }
  });
});
