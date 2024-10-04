const countDownElement = document.getElementById("countDown")
const resetValueElement = document.querySelector(".resetValue")
let startCount = 0;
let interId;
const startTimer=()=>{
     interId=setInterval(()=>{
    countDownElement.innerHTML = startCount++;
},100)
}
const resetTimer=()=>{
    startCount = 0;
    countDownElement.innerHTML = startCount;
    clearTimeout(interId)
}
const stopTimer=()=>{
   clearTimeout(interId)
}
const showStopValue=()=>{
    const para = document.createElement("p")
    para.innerText = `The Stop Time is ${startCount - 1}`
    resetValueElement.append(para)

}
const showClearValue=()=>{
resetValueElement.innerText ="";
}





document
.querySelector(".start_btn")
.addEventListener("click",startTimer);
document
.querySelector(".reset_btn")
.addEventListener("click",resetTimer);
document
.querySelector(".stop_btn")
.addEventListener("click",stopTimer);
document
.querySelector(".time_btn")
.addEventListener("click",showStopValue);
document
.querySelector(".clear_btn")
.addEventListener("click",showClearValue);