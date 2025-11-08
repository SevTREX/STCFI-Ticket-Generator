import { ticket } from "../assets/data/ticketInfo.js"
import { v } from "../assets/data/utilities.js"

let generateBtn = document.querySelector(".generate-btn")
let printBtn = document.querySelector(".print-btn")
let x = document.querySelector(".generator-con")
//v(x)
generateBtn.addEventListener('click', ()=>{
    printBtn.disabled = false
    generateBtn.disabled = true
    generate()
})
printBtn.addEventListener('click', ()=>{
    printBtn.disabled = true;//v(x)
    generateBtn.disabled = false;v(x)
})

function generate(){
    let quantiy = document.getElementById("js-quantity").value
    let index = document.getElementById("js-index").value
    let limit = Number(index) + Number(quantiy)
    let ticketType = JSON.parse(localStorage.getItem('ticketType'))
    let ticketInf = ticket
    let html = ''
    if(ticketType==="EOP"){
        ticketInf = ticket.EOP
    } else if(ticketType==="PRINT"){
        ticketInf = ticket.PRINT
    }
    for(let i = index; i <= limit-1; i++){
            html += `
                <div class="ticket">
                <!-- Left side -->
                    <div class="ticket-left">
                        <div class="title-bar">
                            <img src="assets/images/stc.png" alt="School Logo">
                            <div class="title-text">${ticketInf.title}</div>
                            <img src="assets/images/stc-sg.png" alt="Student Government Logo">
                        </div>
                        <div class="icon-con">
                            <strong><img src="${ticketInf.icon}" alt="logo" class="logo">#${i}</strong>
                        </div>
                        <div class="details">
                            <strong>School Year:</strong> 2025-2026<br>
                            <strong>Ticket Type:</strong> ${ticketInf.ticketType}<br>
                            <strong>Issued By:</strong> STCFI-SG
                            <br>
                            <label class="warning">${ticketInf.message}</label>
                        </div>
                    </div>
    
                    <!-- Tear line -->
                    <div class="tear-line"></div>
    
                    <!-- Right side -->
                    <div class="ticket-right">
                        <img src="${ticketInf.icon}" alt="logo" class="logo">
                        <div class="code" style="margin-top: 20px;">#${i}-2025</div>
                    </div>
                </div>
            `
    }
    localStorage.setItem('ticket', JSON.stringify(html))
}

