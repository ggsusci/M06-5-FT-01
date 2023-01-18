




function hanFetClick(){
 alert("Has apretado:"+ event.currentTarget);

}

function reaccionaEsdeveniment(){
    alert("Esta tarea es:"+ event.currentTarget);

}





function novaTasca() {
    
    const nouElement = document.createElement("li");

    tasca = document.getElementById("tasca").value;
    
    const novaTasca = document.createTextNode(tasca);
  
    
    nouElement.appendChild(novaTasca);
  
   
    const llistaTasques = document.getElementById("lista");
    document.body.insertBefore(nouElement, llistaTasques);

  }

  function espera(){
    
    setTimeout(numeroSuerte,2000);
    
}

  function numeroSuerte(){
    

    numero = Math.floor(Math.random() * 10);
    alert("Tu número de la suerte es el: "+ numero);
  }
  