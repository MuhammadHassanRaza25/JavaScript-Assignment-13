//Task 1 
document.write(`<br><h1>Task 1: Display Current Date & Time</h1>`)
var currentD_T = new Date()
document.write(currentD_T)


//Task 2
document.write(`<br><br><h1>Task 2: Display Current Month</h1>`)
var currentMonth = new Date()
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September','October', 'November', 'December']
document.write(`${months[currentMonth.getMonth()]}`)


//Task 3
document.write(`<br><br><h1>Task 3: Display Current Day</h1>`)
var currentDay = new Date()
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
document.write(`${days[currentDay.getDay()]}`)

//Task 4
document.write(`<br><br><h1>Task 4:</h1>`)

