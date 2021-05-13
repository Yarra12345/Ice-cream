let menustatus="off"

function hidden_the_menu_k() {
    setTimeout(() => {
        if( menustatus==="off") {
        document.getElementById("menu").style.visibility="hidden"
        }
    }, 500);
        menustatus="off"
}

function show_the_menu() {
    menustatus="on"
    let div = document.getElementById("menu") ;
    div.style.visibility="visible"
}
function hidden_the_menu() {
        let div = document.getElementById("menu") ;
        div.style.visibility="hidden"
        menustatus="off"
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
    document.getElementById("creamform").src="./img/ice one.png";
    document.getElementById("creamsform").src="./img/ice two.png";
}

function shar2() {
    let div = document.getElementById("the_biggest_text") ;
    div.innerHTML="Шоколадный пломбир и лимонный сорбет";
    document.body.style.backgroundColor="#8996a6";
    let section = document.getElementById("creams_section");
    section.style.background="radial-gradient(#ffffff 0% , #8996a6 70%)";
    document.getElementById("creamform").src="./img/ice one_secondform.png";
    document.getElementById("creamsform").src="./img/ice two_secondform.png";
}

function shar3() {
    let div = document.getElementById("the_biggest_text") ;
    div.innerHTML="Пломбир с помдакой и клубничный щербет";
    document.body.style.backgroundColor="#9d8b84";
    let section = document.getElementById("creams_section");
    section.style.background="radial-gradient(#ffffff 0% , #9d8b84 70%)";
    document.getElementById("creamform").src="./img/ice one_thirdform.png";
    document.getElementById("creamsform").src="./img/ice two_thirdform.png";
}

function xxx(id) {
    let div = document.getElementById(id)
    div.style.visibility="hidden"
}