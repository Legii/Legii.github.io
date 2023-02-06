let names = ["Ola", "Andrzej", "JJ", "Krzysiek", "Nina"]
let round = 0;
const layer_text = document.getElementById("layer")
const round_text = document.getElementById("round")

const new_round = function() {
    round++
    alert(round_text
)
    round_text.innerText = "Runda " + round



    layer_text.innerText= names[Math.floor(Math.random() * names.length)]



}
new_round()
