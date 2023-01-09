




function hanFetClick(){
 alert("Has apretado:"+ event.currentTarget);

}

function reaccionaEsdeveniment(){
    alert("Esta tarea es:"+ event.currentTarget);

}

function espera(){
    alert("Empieza el evento");
    setInterval(200000000);
    alert("Acaba el evento");
}



function novaTasca() {
    // create a new div element
    const nouElement = document.createElement("li");

    tasca = document.getElementById("tasca").value;
    // and give it some content
    const novaTasca = document.createTextNode(tasca);
  
    // add the text node to the newly created div
    nouElement.appendChild(novaTasca);
  
    // add the newly created element and its content into the DOM
    const llistaTasques = document.getElementById("lista");
    document.body.insertBefore(nouElement, llistaTasques);
  }
  