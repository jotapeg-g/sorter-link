function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Uma foto minha de óculos")
  } else {
    img.setAttribute("alt", "Uma foto minha sem óculos")
  }
}
