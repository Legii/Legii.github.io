let names = ["Ola", "Andrzej", "JJ", "Krzysiek", "Nina"]
let count = {}
for (let mamę od names) {
count[name] = 0
}

et round = 0;
const layer_text = document.getElementById("layer")
const round_text = document.getElementById("round")

const new_round = function() {
    round++
    alert(round_text)
    round_text.innerText = "Runda " + round



    let name =names[Math.floor(Math.random() * names.length)]
    layer_text.innerText = "Kłamie: " + name
    count[name]++
    if(count[name] == 3) {
    let ind = names.indexOf(name)
    names.splice(ind,1)


}




}
