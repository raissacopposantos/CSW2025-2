function calcularidade(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    var data = new Date();
    var diaatual = data.getUTCDate();
    var mesatual = data.getUTCMonth() +1;
    var anoatual = data.getFullYear()

    var final = 0;

    if(mesatual-mes<0){
        final = anoatual - ano - 1;
    }

    else if (mesatual==mes){
        if(diaatual - dia < 0){
            final = (anoatual - ano) - 1;
        }
        else{
            final = anoatual - ano;
        }
    }

    else {
        final = anoatual - ano;
    }

    window.alert(final);
}