// Header Scroll 
let navbar = document.querySelector('.navbar');
document.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('header-scrolled');
    }
    else {
        navbar.classList.remove('header-scrolled');
    }
}


// Nav Hide
let navlink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');
navlink.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
});


// Calculate Experience Duration 

let monthArr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
let durationByMonth, durationByYear;

let currentDate = new Date();
let endingDate = '' + monthArr[currentDate.getMonth()] + ',' + currentDate.getFullYear();

let startingDate = document.getElementById('currentStart');
let setCurrentDuration = document.getElementById('currentDuration');

let thirdExpStart = document.getElementById('thirdExpStart');
let thirdExpEnd = document.getElementById('thirdExpEnd');
let thirdExpDuration = document.getElementById('thirdExpDuration');

let secondExpStart = document.getElementById('secondExpStart');
let secondExpEnd = document.getElementById('secondExpEnd');
let secondExpDuration = document.getElementById('secondExpDuration');

let firstExpStart = document.getElementById('firstExpStart');
let firstExpEnd = document.getElementById('firstExpEnd');
let firstExpDuration = document.getElementById('firstExpDuration');

document.addEventListener('DOMContentLoaded', function () {
    getDuration(startingDate, endingDate, setCurrentDuration)
    getDuration(thirdExpStart, thirdExpEnd, thirdExpDuration);
    getDuration(secondExpStart, secondExpEnd, secondExpDuration);
    getDuration(firstExpStart, firstExpEnd, firstExpDuration);
});

function getDuration(start, end, appendDuration) {

    let startingDate = start.innerText.split(',');
    let endingDate, setDuration = '';

    if (typeof (end) != 'string') {
        endingDate = end.innerText.split(',');
    }
    else {
        endingDate = end.split(',');
    }

    if (startingDate[1].trim() == endingDate[1].trim()) {

        durationByMonth = monthArr.indexOf(endingDate[0].trim().toLowerCase()) - monthArr.indexOf(startingDate[0].trim().toLowerCase());

        // For same month 1 month will increase 
        durationByMonth += 1;

        setDuration += (durationByMonth > 1) ? durationByMonth + ' Months' : durationByMonth + ' Month';

    }

    else if (startingDate[1].trim() < endingDate[1].trim()) {

        durationByYear = Number.parseInt(endingDate[1].trim()) - Number.parseInt(startingDate[1].trim());

        if (monthArr.indexOf(startingDate[0].trim().toLowerCase()) < monthArr.indexOf(endingDate[0].trim().toLowerCase())) {

            durationByMonth = monthArr.indexOf(endingDate[0].trim().toLowerCase()) - monthArr.indexOf(startingDate[0].trim().toLowerCase()) + 1;

            setDuration += (durationByYear > 1) ? durationByYear + ' Years ' : durationByYear + ' Year ';

            if (durationByMonth > 0) {
                setDuration += (durationByMonth > 1) ? durationByMonth + ' Months' : durationByMonth + ' Month';
            }
        }

        else if (monthArr.indexOf(startingDate[0].trim().toLowerCase()) == monthArr.indexOf(endingDate[0].trim().toLowerCase())) {

            // For same month 1 month will 1
            durationByMonth = 1;

            setDuration += (durationByYear > 1) ? durationByYear + ' Years ' : durationByYear + ' Year ';

            setDuration += durationByMonth + ' Month';
        }

        else if (monthArr.indexOf(startingDate[0].trim().toLowerCase()) > monthArr.indexOf(endingDate[0].trim().toLowerCase())) {

            durationByMonth = 13 - monthArr.indexOf(startingDate[0].trim().toLowerCase()) + monthArr.indexOf(endingDate[0].trim().toLowerCase());

            durationByYear += Math.floor(durationByMonth / 12);
            durationByMonth = durationByMonth % 12;

            if (durationByYear > 1) {
                durationByYear = durationByYear - 1;
                setDuration += (durationByYear > 1) ? durationByYear + ' Years ' : durationByYear + ' Year ';
            }
            if (durationByMonth > 0) {
                setDuration += (durationByMonth > 1) ? durationByMonth + ' Months' : durationByMonth + ' Month';
            }
        }
    }

    else {
        setDuration += '--------';
    }
    appendDuration.innerHTML = setDuration;
}
