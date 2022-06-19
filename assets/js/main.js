async function generate () {
  const num_adv = document.querySelector(".num_adv")
  const text_adv = document.querySelector(".text_advice")

  const result = await fetch("https://api.adviceslip.com/advice")

  const data = await result.json()

  num_adv.textContent = data.slip.id
  text_adv.textContent = data.slip.advice
  text_adv.style.display = "block"
}