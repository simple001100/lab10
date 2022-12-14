let data = JSON.parse(localStorage.getItem('data'));

let vacInMonth = document.getElementById('vac-month');
let quarter = document.getElementById('quarter');

vacInMonth.addEventListener('change', (e) => {
   getEmplVacInMonth(Number(e.path[0].value.split("-")[1]));
});

quarter.addEventListener('change', (e) => {
   getEmplEndVacInQuarter(Number(e.path[0].value));
});

function getEmplVacInNextYear() {
   let nextYear = document.getElementById('next-year');

   let now = new Date().getFullYear();

   let employeeList = data.filter(el => new Date(el.startVacation).getFullYear() === now + 1).map(el => el.surname);

   nextYear.innerHTML = employeeList.join(", ");
}

function getEmplEndVacInQuarter(quarter) {
   let listEndVacQuarter = document.getElementById('list-by-quarter');

   let employeeList = data.filter(el => getQuarter(el.endVacation) === quarter).map(el => el.surname);

   listEndVacQuarter.innerHTML = employeeList.join(", ");
}

function getEmplVacInMonth(month) {
   let listVacMonth = document.getElementById('list-vac-month');

   let employeeList = data.filter(el => new Date(el.startVacation).getMonth() === month - 1).map(el => el.surname);

   listVacMonth.innerHTML = employeeList.join(", ");
}

function getQuarter(date) {
   return Math.floor(new Date(date).getMonth() / 3 + 1);
}

getEmplVacInNextYear();