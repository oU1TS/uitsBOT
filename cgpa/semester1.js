document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields
  const cse111 = document.getElementById("cse111");
  const cse112 = document.getElementById("cse112");
  const eee151 = document.getElementById("eee151");
  const eee152 = document.getElementById("eee152");
  const mat163 = document.getElementById("mat163");
  const phy175 = document.getElementById("phy175");
  const phy176 = document.getElementById("phy176");
  const ged101 = document.getElementById("ged101");
  const ged102 = document.getElementById("ged102");

  // Define an object to store the values
  const subjectValues = {};

  // Add event listeners to input fields to update the object
  cse111.addEventListener("input", function () {
    subjectValues.cse111 = parseFloat(this.value) * 3;
  });

  cse112.addEventListener("input", function () {
    subjectValues.cse112 = parseFloat(this.value) * 1.5;
  });

  eee151.addEventListener("input", function () {
    subjectValues.eee151 = parseFloat(this.value) * 3;
  });

  eee152.addEventListener("input", function () {
    subjectValues.eee152 = parseFloat(this.value) * 1;
  });

  mat163.addEventListener("input", function () {
    subjectValues.mat163 = parseFloat(this.value) * 3;
  });

  phy175.addEventListener("input", function () {
    subjectValues.phy175 = parseFloat(this.value) * 3;
  });

  phy176.addEventListener("input", function () {
    subjectValues.phy176 = parseFloat(this.value) * 0.8;
  });

  ged101.addEventListener("input", function () {
    subjectValues.ged101 = parseFloat(this.value) * 2;
  });
  ged102.addEventListener("input", function () {
    subjectValues.ged102 = parseFloat(this.value) * 1;
  });

  // Example: Display the object in console when a button is clicked

  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (Object.keys(subjectValues).length === 9) {
      let finalResult = 0;

      for (const key in subjectValues) {
        finalResult += subjectValues[key];
      }

      finalResult = finalResult / 18.3;
      console.log(finalResult.toFixed(2));
    }
  });
});
