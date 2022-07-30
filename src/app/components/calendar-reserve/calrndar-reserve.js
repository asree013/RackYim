

// Dark Mode toggle
document.querySelector('.dark-mode-switch').onclick = () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}

// Check leap Year
isleapyear = (year) => {
    return (year % 4 == 0 && year % 100 !== 0 && year % 400 !==0) 
    || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return ( isleapyear(year) ) ? 29 : 28
}

let calendar = document.querySelector('.calendar')

const month_name = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม',
'มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']

let month_picker = document.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

// Generate Calendar

generateCelendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days')
    calendar_days.innerHTML = ''

    let calendar_header_year = document.querySelector('#year')

    let days_of_month = [31, getFebDays(year),31,30,31,30,31,31,30,31,30,31]

    let currDate = new Date()

    month_picker.innerHTML = month_name[month]
    calendar_header_year.innerHTML = year

    let firt_day = new Date(month, year, 1)
    
    for (let i = 0; i <= days_of_month[month] + firt_day.getDate() -1; i++) {
        let day = document.createElement('div')
        if (i >= firt_day.getDate()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - firt_day.getDate() + 1
            day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`
            if (i - firt_day.getDate() + 1 === currDate.getDate() && year ===
            currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }

}

let month_list = calendar.querySelector('.month-list')

month_name.forEach((e, index)=> {
    let month = document.createElement('div')
    month.innerHTML = `<div>${e}</div>`
    month.onclick = () => {
        month_list.classList.remove('show')
    }
    month_list.appendChild(month)
})

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCelendar(curr_month.value, curr_year.value)
