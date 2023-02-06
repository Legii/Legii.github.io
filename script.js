// Hello
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in ayour JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

let names = ["Ola", "Andrzej", "JJ", "Krzysiek", "Nina"]
let count = {}
for (let name of names) {
count[name] = 0
}

let round = 0;
const layer_text = document.getElementById("layer")
const round_text = document.getElementById("round")

const new_round = function() {
    round++
    
    round_text.innerText = "Runda " + round



    let name =names[Math.floor(Math.random() * names.length)]
    layer_text.innerText = "Kłamie: " + name
    count[name]++
    
    if(count[name] == 3) {
    let ind = names.indexOf(name)
    names.splice(ind,1)


}




}
