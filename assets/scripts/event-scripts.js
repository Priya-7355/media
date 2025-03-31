function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");

  // Toggle sidebar visibility
  const isOpen = sidebar.classList.toggle("open");

  // Set button visibility accordingly
  menuBtn.style.display = isOpen ? "none" : "block";
  closeBtn.style.display = isOpen ? "block" : "none";

  // Save sidebar state in local storage (to prevent unwanted behavior on page reload)
  // localStorage.setItem("sidebarOpen", isOpen);
}

