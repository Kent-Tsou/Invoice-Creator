const job1Arr = [["Wash Car",10]];
const job2Arr = [["Mow Lawn",20]];
const job3Arr = [["Pull Weed",30]];
let jobs = [];
const job_1 = document.getElementById("job-1")
const job_2 = document.getElementById("job-2")
const job_3 = document.getElementById("job-3")
const job_Title = document.getElementById("job-title")
const job_Price = document.getElementById("job-price")
const sum_el = document.getElementById("sum-el")
const send_Btn = document.getElementById("send-Btn")
let totalPrice = 0;

// addEventListener to buttons 1, 2, 3, and send button
job_1.addEventListener("click", function() {
    if(!jobs.includes(job1Arr)){
        let titleName = document.createElement('p');
        let priceName = document.createElement('p');
        let priceNumber = document.createElement('span');
        titleName.textContent = job1Arr[0][0];
        priceName.textContent = "$";
        priceNumber.classList.add('price');
        priceNumber.textContent = job1Arr[0][1];
        priceName.append(priceNumber)
        job_Title.appendChild(titleName);
        job_Price.appendChild(priceName);
        jobs.push(job1Arr);
        totalPrice += job1Arr[0][1];
        ammount.textContent = "$" + totalPrice;
    }else{
        alert("Already Added!");
    }
})

job_2.addEventListener("click", function() {
    
})

job_3.addEventListener("click", function() {
    
})
// when we press buttons we want task and total to render 
// (job_Title and job_Price)
// we also want total amount to render the total (sum_el)
