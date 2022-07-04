const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function changeDate() {
  document.getElementById("copyright-year").innerHTML = currentYear;
}

changeDate();

console.log("Change year script is loaded!");
