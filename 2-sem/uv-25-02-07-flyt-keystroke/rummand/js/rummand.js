// grafiske elementer
const canvas = document.getElementById("scene")
const ctx = canvas.getContext("2d")
const image = document.getElementById("astronaut")

// positioner
let pos_x = 0
let pos_y = 0

// læg billedet ind i canvas
astronaut.addEventListener("load", (e) => {
  ctx.drawImage(image, pos_x, pos_y)
})

// wasd (her virker kun kun w)
window.addEventListener("keydown", (event) => {
  const key = event.key // .key = den tast der er trykket på

  switch (key) {
  	
    // brugeren taster "w"
    case "w":
      pos_x += 40
      pos_y += 40

      // animationsprincip: slet scenen og tegn igen
      ctx.clearRect(0, 0, scene.width, scene.height) // sletter canvas #scene
      ctx.drawImage(image, pos_x, pos_y) // flytter billedet


      if (pos_x > scene.height) {
        pos_x = 0
        pos_y = 0

        // tekst
        ctx.font = "15px Arial"
        ctx.fillStyle = "white";
        ctx.fillText("Can you hear me Major Tom?", 10, 50)
      }
  }
})
