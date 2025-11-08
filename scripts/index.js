let printBtn = document.querySelector(".printpass-btn")
let eopBtn = document.querySelector(".eop-btn")
let ticketType;
printBtn.addEventListener('click', ()=>{
    ticketType = printBtn.dataset.ticketType
    localStorage.setItem('ticketType', JSON.stringify(ticketType))
})
eopBtn.addEventListener('click', ()=>{
    ticketType = eopBtn.dataset.ticketType
    localStorage.setItem('ticketType', JSON.stringify(ticketType))
})