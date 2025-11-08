
let ticketString = JSON.parse(localStorage.getItem('ticket'))
console.log("Hey")
document.body
.innerHTML = ticketString

window.print()