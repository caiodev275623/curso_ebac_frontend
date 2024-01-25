const form =document.getElementById('form-ebac');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const valorCampoA = Number(document.getElementById("campoA").value);
    const valorCampoB = Number(document.getElementById("campoB").value);

    const vlrCampo_A = document.getElementById("campoA");
    const vlrCampo_B = document.getElementById("campoB");

    const successMessage = `O valor esta correto: <b>${valorCampoB}</b> é maior que <b>${valorCampoA} </b>`;
    const errorMessage = `Resposta incorreta: <b> ${valorCampoB} </b> é menor que <b>${valorCampoA}</b>, "B" deve ser maior que "A"`;

    let calculoForm = false;

    function vlValor(valorCampoA, valorCampoB) {
        return valorCampoA < valorCampoB
    }

    const msgS = document.querySelector(".successMessage");
    const msgErr = document.querySelector(".errorMessage");

    calculoForm = vlValor(valorCampoA, valorCampoB);

    if (calculoForm) {
        msgS.innerHTML = successMessage;
        msgS.style.display = "block"
        msgErr.style.display = "none"

        vlrCampo_A.style.border = "";
        msgErr.innerHTML = errorMessage;

        vlrCampo_A = "";
        vlrCampo_B = "";
    } else {
        vlrCampo_A.style.border = "1px solid red";
        msgErr.innerHTML = errorMessage;
        msgErr.style.display = "block"
        msgS.style.display = "none";
        
        vlrCampo_B.value = "";
    }
})