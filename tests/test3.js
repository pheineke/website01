function toggleNav() {
    var sidenav = document.getElementById("sidenav");
    var content = document.getElementById("content");
    sidenav.classList.toggle('active');
    if (sidenav.classList.contains('active')) {
      content.style.marginLeft = "250px";
    } else {
      content.style.marginLeft = "0";
    }
  }
  