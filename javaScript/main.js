const doc = document;

//get the form and create a enventLinsener word submiting
document.getElementById("form_id").addEventListener("submit", function(event){
    event.preventDefault();
    var height = document.getElementById('height_id').value;
    var weight = document.getElementById('weight_id').value;
    // console.log(height);
   
    var ibm= calculate_bmi(height, weight);
    var interpret_bmi = function(ibm){
        if(ibm < 18.5){
            return "Underweight";
        } else if (ibm > 18.5 && ibm < 25  ){
            return "Normal weight";
    
        } else if( ibm > 25 && ibm < 30){
            return "Overweight";
    
        }else if(ibm > 30){
            return "Obses";
        }
    };
    var res = interpret_bmi(ibm.toFixed(2));

    
    // newIbm.textContent = `IMB: ${ibm} ${result} `;
    // doc.body.appendChild(newIbm);
    doc.getElementById('result').innerHTML = `IMB: ${ibm.toFixed(2)} ${res} `;

     
    //document.body.append(<h1>IMB: ${ibm} </h1>);

})



function calculate_bmi(he, we){
  
    return we / (he * he)
}
