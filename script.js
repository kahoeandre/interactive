
var notas = document.querySelectorAll('.number');
var enviar = document.getElementById("submit");
var inicio = document.querySelector(".primeiro")
var resultado1 = document.querySelector(".esconder")
var youSelec = document.querySelector(".nota")

notas.forEach((not) =>
not.addEventListener('click', (notaselecionada) =>{
    var res = (notaselecionada.currentTarget.textContent);
    youSelec.innerHTML = `You selected ${res} out of 5`
})
);
    enviar.addEventListener('click', ()=>{
    inicio.style.display='none';
    resultado1.style.display='flex';
    });

