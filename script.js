//Map-Chart
let mapChart = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".--",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
};
let resultOutput
const txtvalue = window.document.querySelector("#insert-txt")
const btn_code = window.document.querySelector("#btnCode")
txtvalue.addEventListener("input", () => {
    const txtvalueValue = txtvalue.value
    const resMorse = window.document.querySelector("#morse_res")
    let output = ""

    for (var i = 0; i < txtvalueValue.length; i++) {
        let char = txtvalueValue[i].toLowerCase();
        if (mapChart[char] !== undefined) {
            output += mapChart[char] + " "
        }
    }
    resMorse.innerHTML = output
    resultOutput = output
})

btn_code.addEventListener("click", () => {
    navigator.clipboard.writeText(resultOutput).then(() => {
        alert("Copied")
    })
})

//MorseButtonArea
const modalMorse = window.document.querySelector("#modal_morse")
const btn_Morse = window.document.querySelector("#btnMorse")

const ButtonShow = window.document.querySelector(".btn-morse")
ButtonShow.addEventListener("click", () => {
    //show the wrapper-content

    modalMorse.classList.add("hideContent")
    btn_Morse.classList.add("hide-btn-morse")
})

//terminar de fazer o close-btn !!
const closeModal = window.document.querySelector("#close-btn")
closeModal.addEventListener("click", ()=>{
    modalMorse.classList.remove("hideContent")
    btn_Morse.classList.remove("hide-btn-morse")
})

//toogle navMobile
const listBtn = window.document.querySelector("#list-nav")
listBtn.addEventListener("click",()=>{
    const navMobile = window.document.querySelector("#nav-mobile")
    navMobile.classList.toggle("NavOn")
})