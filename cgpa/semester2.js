document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields
  const cse151 = document.getElementById("cse151");
  const cse152 = document.getElementById("cse152");
  const cse153 = document.getElementById("cse153");
  const eee251 = document.getElementById("eee251");
  const eee252 = document.getElementById("eee252");
  const mat165 = document.getElementById("mat165");
  const me102 = document.getElementById("me102");
  const ged117 = document.getElementById("ged117");
  const cse104 = document.getElementById("cse104");

  // Define an object to store the values
  const subjectValues = {};

  // Add event listeners to input fields to update the object
  cse151.addEventListener("input", function () {
    subjectValues.cse151 = parseFloat(this.value) * 3;
  });

  cse152.addEventListener("input", function () {
    subjectValues.cse152 = parseFloat(this.value) * 1.5;
  });

  cse153.addEventListener("input", function () {
    subjectValues.cse153 = parseFloat(this.value) * 3;
  });

  eee251.addEventListener("input", function () {
    subjectValues.eee251 = parseFloat(this.value) * 3;
  });

  eee252.addEventListener("input", function () {
    subjectValues.eee252 = parseFloat(this.value) * 1;
  });

  mat165.addEventListener("input", function () {
    subjectValues.mat165 = parseFloat(this.value) * 3;
  });

  me102.addEventListener("input", function () {
    subjectValues.me102 = parseFloat(this.value) * 1;
  });

  ged117.addEventListener("input", function () {
    subjectValues.ged117 = parseFloat(this.value) * 2;
  });
  cse104.addEventListener("input", function () {
    subjectValues.cse104 = parseFloat(this.value) * 1;
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

      finalResult = finalResult / 18.5;

      cgpaValue.textContent = `Your CGPA is : ${finalResult.toFixed(2)}`;

      cgpaDiv.classList.remove("hidden");
    }
  });
});
