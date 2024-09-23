function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.left = 0;
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.left = "-100%";
}
function showProfileList() {
  const profileList = document.querySelector(".profile_list");
  // Toggle visibility
  if (
    profileList.style.display === "none" ||
    profileList.style.display === ""
  ) {
    profileList.style.display = "block";
  } else {
    profileList.style.display = "none";
  }
}
