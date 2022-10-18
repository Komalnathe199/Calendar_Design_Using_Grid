
let selectedMonth
let selectedYear

let currMonth = "August"
let currYear = "2022"

let dateMapping = Array(35).fill(0)
const monthNameAndYear = {
    January: [0, "./images/jan.webp", "New year—new verse, a new chapter, or just the same old story? Ultimately we write it. The choice is ours."],
    February: [1, "./images/feb.webp", "February—the month of love..?!! No wonder the shortest one in the calendar."],
    March: [2, "./images/mar.jpeg", "In March winter is holding back and spring is pulling forward. Something holds and something pulls inside of us too."],
    April: [3, "./images/apr.webp", "April is a promise that May is bound to keep."],
    May: [4, "./images/may.jpeg", "A great difference between ‘May’ and ‘Day’ is the ‘M’ and ‘D!’ Be a good managing director of your life each day in May."],
    June: [5, "./images/jun.webp", "Life is like riding a bicycle. To keep your balance, you must keep moving."],
    July: [6, "./images/jul.webp", "Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind."],
    August: [7, "./images/aug.jpeg", "Let us together work towards making our country the happiest place on earth! Happy Independence Day!"],
    September: [8, "./images/sep.webp", "Keep your face always toward the sunshine, and shadows will fall behind you."],
    October: [9, "./images/oct.webp", "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."],
    November: [10, "./images/nov.webp", "Find out who you are and be that person. That's what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come."],
    December: [11, "./images/dec.jpeg", "As we look to the new year, hold on to what is good. Let go of what is bad. It really is that simple. "],
}

const monthIndex = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function month() {
    selectedMonth = document.querySelector(".selected_month")
    selectedYear = document.querySelector(".selected_year")
    let monthName = selectedMonth.value
    util(selectedMonth.value, selectedYear.value, monthNameAndYear[monthName][0])
}

function getAllDaysInMonth(year, mon) {
    const dates = [];
    const date = new Date(year, mon, 1);
    while (date.getMonth() === mon) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

function mappingOfDate(dates) {
    let index = dates[0].getDay()
    dates.forEach((date) => {
        dateMapping[index % 35] = date.getDate()
        index = index + 1
    })
}
function displayDates() {
    const dateBlocks = document.getElementsByClassName("date_block")
    for (let i = 0; i < 35; i++) {
        if (dateMapping[i] === 0) {
            dateBlocks[i].innerText = ""
        }
        else {
            dateBlocks[i].innerText = dateMapping[i]
        }
        if (i % 7 == 0) {
            dateBlocks[i].classList.add("sunday")
        }
    }
}

function prevMonth() {
    currMonth = selectedMonth ? selectedMonth.value : currMonth
    currYear = selectedYear ? selectedYear.value : currYear
    let monthNumber = monthNameAndYear[currMonth][0] - 1
    if (monthNumber == -1) {
        monthNumber = 11
        currYear = parseInt(currYear) - 1
    }
    util(monthIndex[monthNumber], currYear, monthNumber)
    currMonth = monthIndex[monthNumber]
}

function nextMonth() {

    currMonth = selectedMonth ? selectedMonth.value : currMonth
    currYear = selectedYear ? selectedYear.value : currYear
    let monthNumber = monthNameAndYear[currMonth][0] + 1
    if (monthNumber === 12) {
        monthNumber = 0
        currYear = parseInt(currYear) + 1
    }
    util(monthIndex[monthNumber], currYear, monthNumber)
    currMonth = monthIndex[monthNumber]
}

function util(month, year, monthNumber) {
    dateMapping = Array(35).fill(0)
    const imgTag = document.getElementsByTagName("img")[0]
    imgTag.src = monthNameAndYear[month][1]
    const quote = document.querySelector(".quote")
    quote.innerText = '"' + monthNameAndYear[month][2] + '"'
    document.querySelector(".month_name").innerHTML = monthIndex[monthNumber]
    document.querySelector(".year").innerHTML = year
    document.querySelector(".selected_month").value = monthIndex[monthNumber]
    document.querySelector(".selected_year").value = year
    const dates = getAllDaysInMonth(year, monthNameAndYear[month][0])
    mappingOfDate(dates)
    displayDates()
}
