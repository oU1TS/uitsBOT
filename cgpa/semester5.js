document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields
  const cse311 = document.getElementById("cse311");
  const cse312 = document.getElementById("cse312");
  const cse313 = document.getElementById("cse313");
  const cse314 = document.getElementById("cse314");
  const cse315 = document.getElementById("cse315");
  const cse316 = document.getElementById("cse316");
  const cse318 = document.getElementById("cse318");
  const cse319 = document.getElementById("cse319");
  const cse308 = document.getElementById("cse308");

  // Define an object to store the values
  const subjectValues = {};

  // Add event listeners to input fields to update the object
  cse311.addEventListener("input", function () {
    subjectValues.cse311 = parseFloat(this.value) * 3;
  });

  cse312.addEventListener("input", function () {
    subjectValues.cse312 = parseFloat(this.value) * 1;
  });

  cse313.addEventListener("input", function () {
    subjectValues.cse315 = parseFloat(this.value) * 3;
  });

  cse314.addEventListener("input", function () {
    subjectValues.cse314 = parseFloat(this.value) * 1;
  });

  cse315.addEventListener("input", function () {
    subjectValues.cse315 = parseFloat(this.value) * 3;
  });

  cse316.addEventListener("input", function () {
    subjectValues.cse316 = parseFloat(this.value) * 1.5;
  });

  cse318.addEventListener("input", function () {
    subjectValues.cse318 = parseFloat(this.value) * 2;
  });

  cse319.addEventListener("input", function () {
    subjectValues.cse319 = parseFloat(this.value) * 3;
  });
  cse308.addEventListener("input", function () {
    subjectValues.cse308 = parseFloat(this.value) * 1;
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
