function displayAddress() {
    const x = document.getElementById("addr");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function changeColor(){
let newColor = document.querySelectorAll("navbar");
          for (const color of newColor) {
            color.addEventListener("mouseover", () => {
              color.style.backgroundColor = "green";
            });
          }
}