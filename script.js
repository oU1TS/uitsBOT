function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function () {
  const parentElement = document.getElementById("parent"); // Replace "parent" with the actual ID of the parent element

  // Get all the child elements
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
});
