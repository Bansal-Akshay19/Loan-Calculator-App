document.getElementById("loan-form").addEventListener("submit",function(e){
     
    document.getElementById("results").style.display="none";

    document.getElementById("loading").style.display="block";

    setTimeout(calcRes,2000);

    e.preventDefault();
});
// calcRes();
function calcRes(){

    console.log("Calculating....");
    const amt=document.getElementById("amount");
    const interest=document.getElementById("interest");
    const year=document.getElementById("years");
    const monthly_pay=document.getElementById("monthly-payment");
    const total_pay=document.getElementById("total-payment");
    const total_interest=document.getElementById("total-interest");

    const principal=parseFloat(amt.value);
    const calcInterest=parseFloat(interest.value)/100/12;
    const calPay=parseFloat(year.value)*12;
 
    const rate=Math.pow(1+calcInterest,calPay);
    const monthly=(principal*calcInterest*rate)/(rate-1);

    if(isFinite(monthly)){
        monthly_pay.value=monthly.toFixed(2);
        total_pay.value=(monthly*calPay).toFixed(2);
        total_interest.value=((monthly*calPay)-principal).toFixed(2);

        document.getElementById("results").style.display="block";

        document.getElementById("loading").style.display="none";
    }
    else{
        showError('Please Check your numbers');
    }

}

function showError(error){
    const errorDiv=document.createElement('div');

    const card=document.querySelector(".card");
    const heading=document.querySelector(".heading");

    errorDiv.className= 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv,heading);
    
    setTimeout(clearError,3000);
}

function clearError(){
    document.querySelector(".alert").remove();
}