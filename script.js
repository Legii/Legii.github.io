let names = ["Ola", "Andrzej", "JJ", "Krzysiek", "Nina"]
let round = 0;
const layer_text = document.getElementById("layer")
const round_text = douhment.getElementById("round")

const new_round = function() {
    round++
    alert(round)
    round_text.innerHtml = "Runda " + round



    layer_text.innerHtml = names[Math.floor(Math.random() * names.length)]



}
new_round()
