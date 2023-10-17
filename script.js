function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
  const parentElement = document.getElementById("parent");

  if (parentElement) {
    const children = parentElement.children;

    // Loop through the children and add a class based on their index (0-based)
    for (let i = 0; i < children.length; i++) {
      if (i % 2 === 0) {
        // Add a class to even children
        children[i].classList.add("animate__animated", "animate__fadeInLeft");
      } else {
        // Add a class to odd children
        children[i].classList.add("animate__animated", "animate__fadeInRight");
      }
    }
  }
});

function calculateCGPA(subjectValues, divisor) {
  const cgpaDiv = document.getElementById("cgpa");
  const cgpaValue = document.getElementById("cgpaValue");
  cgpaDiv.classList.add("hidden");

  let finalResult = 0;

  for (const key in subjectValues) {
    finalResult += subjectValues[key];
  }

  finalResult = finalResult / divisor;

  cgpaValue.textContent = `Your CGPA is : ${finalResult.toFixed(2)}`;

  cgpaDiv.classList.remove("hidden");
}
