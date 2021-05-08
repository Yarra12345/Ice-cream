function show_the_menu() {
    let div = document.getElementById("menu") ;
    div.style.visibility="visible"
}

function hidden_the_menu() {
    let div = document.getElementById("menu") ;
    div.style.visibility="hidden"
}

function showOrHideElement(id) {
    let div = document.getElementById(id) ;
    if (div.style.visibility=="visible") {
    div.style.visibility="hidden"
    }
    else {
    div.style.visibility="visible"
    }
}

function shar1() {
    let div = document.getElementById("the_biggest_text") ;
    div.innerHTML="Крем-брюле и пломбир с малиновым джемом";
    document.body.style.backgroundColor="#849d8f";
    let section = document.getElementById("creams_section");
    section.style.background="radial-gradient(#ffffff 0% , #849d8f 70%)";
    // Element.scr="./img/ice one.png"
    // Element.scr="./img/ice two.png"
}

function shar2() {
    let div = document.getElementById("the_biggest_text") ;
    div.innerHTML="Шоколадный пломбир и лимонный сорбет";
    document.body.style.backgroundColor="#8996a6";
    let section = document.getElementById("creams_section");
    section.style.background="radial-gradient(#ffffff 0% , #8996a6 70%)";
    // Element.scr="./img/ice one_secondform.png"
    // Element.scr="./img/ice two_secondform.png"
}

function shar3() {
    let div = document.getElementById("the_biggest_text") ;
    div.innerHTML="Пломбир с помдакой и клубничный щербет";
    document.body.style.backgroundColor="#9d8b84";
    let section = document.getElementById("creams_section");
    section.style.background="radial-gradient(#ffffff 0% , #9d8b84 70%)";
    // Element.scr="./img/ice one_thirdform.png"
    // Element.scr="./img/ice two_thirdform.png"
}
