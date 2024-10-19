let counterElement=document.getElementById("countervalue");
function onDecrement(){
 let previousCounterValue=counterElement.textContent;
 let updatedCounterValue=parseInt(previousCounterValue)-1;
 if(updatedCounterValue<0){
    counterElement.style.color="red";
 }
    else if(updatedCounterValue>0){
       counterElement.style.color="green"
    }
    else{
        counterElement.style.color="black"
    }
    counterElement.textContent=updatedCounterValue;
 }


function onReset(){
    let previousCounterValue=counterElement.textContent;
    let updatedCounterValue=0;
    if(updatedCounterValue<0){
        counterElement.style.color="red";
     }
        else if(updatedCounterValue>0){
           counterElement.style.color="green"
        }
        else{
            counterElement.style.color="black"
        }
    counterElement.textContent=updatedCounterValue;

}
function onIncrement(){
    let previousCounterValue=counterElement.textContent;
    let updatedCounterValue=parseInt(previousCounterValue)+1;
    if(updatedCounterValue<0){
        counterElement.style.color="red";
     }
        else if(updatedCounterValue>0){
           counterElement.style.color="green"
        }
        else{
            counterElement.style.color="black"
        }
    counterElement.textContent=updatedCounterValue;

}