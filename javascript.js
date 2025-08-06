let catCount = 0;

function spawnNyanCat() {
  const cat = document.createElement("div");
  cat.className = "jumpingCat";
  cat.style.top = "200px";
  cat.style.left = "-100px";
  cat.style.zIndex = 0;
  const img = document.createElement("img");
  img.src = "img/nyanCat.gif";
  img.alt = "crazy nyanCat spawned";
  cat.appendChild(img);
  document.getElementById("catContainer").appendChild(cat);
}
