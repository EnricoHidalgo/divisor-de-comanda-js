document.getElementById("vlc").style.display = "none";

function comCalc (){
    let ttlBill = document.getElementById("ttlAc").value;
    let taxaSer = document.getElementById("txs").value;
    let quantPe = document.getElementById("nump").value;
    
    if(ttlBill === "" || taxaSer === 0 || isNaN(ttlBill) || isNaN(quantPe)){
        alert("Coloque um valor válido.");
        return;
    }

    let ttlTxs = (ttlBill * taxaSer) / quantPe;
    let ttl = ttlTxs + (ttlBill / quantPe);

    ttl = Math.round(ttl * 100) / 100;
    ttl = ttl.toFixed(2);
    
    document.getElementById("vlc").style.display = "block";
    document.getElementById("vlp").innerHTML = ttl;
}

document.getElementById("calc").onclick = function(){
    comCalc();
}

// vlc = Valor conta (section no HTML para armazenar a vlp)
// ttlBill = Total conta (Total Bill)
// ttlAc = Total conta (no HTML)
// taxaSer = Taxa de Serviço
// txs = Taxa de Serviço (no HTML)
// quantPe = Quantidade de pessoas
// nump = Quantidade de pessoas (no HTML)
// ttlTxs = Total da taxa de serviço
// ttl = Total
// vlp = Valor por pessoa (span no HTML para exibir o resultado final)
// comCalc = Calculo da comanda