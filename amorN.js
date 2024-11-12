document.getElementById("no").addEventListener("mouseover", function() {
    const button = this;
    button.style.position = "absolute";
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + "px";
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + "px";
  });
  