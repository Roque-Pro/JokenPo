/**
 * 
 * Entendendo validação de formulario, operadores lógicos, 
 * e encadeamento de estruturas condicionais
 * 
 * @author Roque Rafael
 */

 function jogar(){
    if(document.getElementById('pedra').checked == false && 
    document.getElementById('papel').checked == false && 
    document.getElementById('tesoura').checked == false){
        alert('Selecione uma opção');
    }else{
        //logica principal
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio){
            case 0:
                document.getElementById('pc').src="img/telapedra.png";
                break;
            case 1:
                document.getElementById('pc').src="img/telapapel.png";
                break;
            case 2:
                document.getElementById('pc').src="img/telatesoura.png";
                break;
        }
            if((document.getElementById('pedra').checked ==true && sorteio == 0) ||
            (document.getElementById('papel').checked == true && sorteio == 1) ||
            (document.getElementById('tesoura').checked == true && sorteio == 2)){
                document.getElementById('placar').innerHTML="E M P A T O U ! "
            }else if ((document.getElementById('pedra').checked ==true && sorteio == 2) ||
            (document.getElementById('papel').checked == true && sorteio == 0) ||
            (document.getElementById('tesoura').checked == true && sorteio == 1)){
                document.getElementById('placar').innerHTML="JOGADOR VENCEU ! "

            } else {
                document.getElementById('placar').innerHTML="COMPUTADOR VENCEU !";
            }

    }
 }

 function resetar(){
    document.getElementById('pc').src="img/tela.png";
    document.getElementById('placar').innerHTML="";
 }