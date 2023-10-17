document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input fields
  const cse351 = document.getElementById("cse351");
  const cse352 = document.getElementById("cse352");
  const cse355 = document.getElementById("cse355");
  const cse356 = document.getElementById("cse356");
  const cse357 = document.getElementById("cse357");
  const cse358 = document.getElementById("cse358");
  const cse359 = document.getElementById("cse359");
  const cse360 = document.getElementById("cse360");
  const ged115 = document.getElementById("ged115");

  // Define an object to store the values
  const subjectValues = {};

  // Add event listeners to input fields to update the object
  cse351.addEventListener("input", function () {
    subjectValues.cse351 = parseFloat(this.value) * 3;
  });

  cse352.addEventListener("input", function () {
    subjectValues.cse352 = parseFloat(this.value) * 1;
  });

  cse355.addEventListener("input", function () {
    subjectValues.cse355 = parseFloat(this.value) * 3;
  });

  cse356.addEventListener("input", function () {
    subjectValues.cse356 = parseFloat(this.value) * 1.5;
  });

  cse357.addEventListener("input", function () {
    subjectValues.cse357 = parseFloat(this.value) * 3;
  });

  cse358.addEventListener("input", function () {
    subjectValues.cse358 = parseFloat(this.value) * 1.5;
  });

  cse359.addEventListener("input", function () {
    subjectValues.cse359 = parseFloat(this.value) * 3;
  });

  cse360.addEventListener("input", function () {
    subjectValues.cse360 = parseFloat(this.value) * 1;
  });
  ged115.addEventListener("input", function () {
    subjectValues.ged115 = parseFloat(this.value) * 2;
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

      finalResult = finalResult / 18.3;

      cgpaValue.textContent = `Your CGPA is : ${finalResult.toFixed(2)}`;

      cgpaDiv.classList.remove("hidden");
    }
  });
});
