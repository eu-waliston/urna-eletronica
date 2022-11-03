const input1 = document.querySelector(".input-voto1");
const input2 = document.querySelector(".input-voto2");

const bnt1 = document.querySelector(".btn-number1");
const bnt2 = document.querySelector(".btn-number3");

const presidentAbout = document.getElementById("lula");

function voto1() {
    const n1 = document.createElement("h1");
    n1.type = "h1"
    n1.value = "1"
    n1.innerText  = "1";
    n1.innerHTML  = "1";

    input1.value = n1.value;
}

function voto2() {
    const n2 = document.createElement("h1");
    n2.type = "h1"
    n2.value = "3"
    n2.innerText  = "3";
    n2.innerHTML  = "3";

    input2.value = n2.value;

    if(input2.value == 3) {

        const nome = document.createElement("h5");
        nome.type = "h5";
        nome.innerHTML = "Nome: Lula";
        nome.className = "item5"

        nome.style.marginLeft  = "25px"
        nome.style.marginTop = "70px"

    
        const partido = document.createElement("h5");
        partido.type = "h5";
        partido.innerHTML = "Partido: PT";
        partido.style.marginLeft  = "25px"
        

        const img = document.createElement("img");
        img.type = "img";
        img.src = "assets/FQ59KUtXIAIQwNt.jpeg"
        img.style.width = "180px"
        img.style.position = "relative"
        img.style.float = "right"
        img.style.top = "-370px"
        img.style.borderRadius = "10px"
        
        
        const br = document.createElement("br");
        br.type = "br"


    
        presidentAbout.append(nome, br, partido, img);

    }

}



bnt1.addEventListener("click", voto1);
bnt2.addEventListener("click", voto2);



