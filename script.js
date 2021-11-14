/* 

Project: IBM Cloud Full-stack Developer

author: Jubran Akram 

*/
function compute()
{
    let p = document.getElementById("principal").value;
    let int_rate = document.getElementById("rate").value;    
    let num_years = document.getElementById("years").value;
    let st_txt = document.getElementById("calc_text");
    let year =  new Date().getFullYear();

    function calculateInterest(principal, interest_rate, number_years){
        interest = principal * interest_rate * number_years;
        return interest / 100
    }

    if (p.length == 0){
        alert('Enter Principle Amount');
        document.getElementById("principal").focus();
        st_txt.innerHTML = '';
        return
    } else if (parseInt(p) <= 0) {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        st_txt.innerHTML = '';
        return
    } else if (num_years.length == 0){
        alert('Enter no. of years');
        st_txt.innerHTML = '';
        return
    } else {
        st_txt.innerHTML = `If you deposit <span class="h_text">${p}</span>, <br /> 
        at an interest rate of <span class="h_text">${int_rate*10.0/10}%</span>.<br/>
        You will receive an amount of <span class="h_text">${calculateInterest(p, int_rate, num_years)}</span>,<br \>
        in the year <span class="h_text">${year+parseInt(num_years)}</span>.`;
    }
    
}

function setRateValue() {
    let val = document.getElementById('rate').value;
    val = (val * 100.0)/100;
    document.getElementById('rate_value').innerHTML =
    val.toFixed(2) + '%'
}

function fillOptions(){
    let select_elem = document.getElementById('years');
    const num_array = [...Array(26).keys()];

    num_array.forEach((element, index) => {
    let option_elem = document.createElement('option');
    
    option_elem.value = index;
    
    option_elem.textContent = element.toString();
    
    select_elem.appendChild(option_elem);
    });

    select_elem.value = 1;
}

fillOptions();
        
