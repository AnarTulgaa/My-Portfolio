document.querySelector(".btn-download").addEventListener("click", function () {
  const downloadMessage = document.createElement("div");
  downloadMessage.textContent = "CV is downloading...";
  downloadMessage.style.position = "fixed";
  downloadMessage.style.top = "50%";
  downloadMessage.style.left = "50%";
  downloadMessage.style.transform = "translate(-50%, -50%)";
  downloadMessage.style.backgroundColor = "#4CAF50";
  downloadMessage.style.color = "white";
  downloadMessage.style.padding = "10px 20px";
  downloadMessage.style.borderRadius = "5px";
  downloadMessage.style.fontSize = "1.2rem";
  document.body.appendChild(downloadMessage);

  setTimeout(() => {
    document.body.removeChild(downloadMessage);
    window.location.href = "path-to-your-cv.pdf"; // Replace with actual file path
  }, 3000); // 3 seconds delay
});
document.querySelector(".btn-download").addEventListener("click", function () {
  // Trigger download directly
  const downloadLink = document.createElement("a");
  downloadLink.href = "path-to-your-cv.pdf"; // Replace with actual file path
  downloadLink.download = "Anar_Gantulga_CV.pdf"; // You can specify the desired filename
  downloadLink.click();
});

// Function to detect which section is in view
function updateActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // If the section is in the viewport
    if (
      window.scrollY >= sectionTop - sectionHeight / 3 &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  // Highlight the active link
  navLinks.forEach((link) => {
    if (link.getAttribute("href").slice(1) === currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Call the updateActiveLink function on scroll
window.addEventListener("scroll", updateActiveLink);
