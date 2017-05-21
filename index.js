$(document).ready(function() {
  window.setInterval(function(){ setClock(); }, 1000);

  var setClock = function() {
    var currentDate = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var weekday = days[currentDate.getDay()];
    var month = months[currentDate.getMonth()];
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = twoDigitify(currentDate.getMinutes());
    var seconds = twoDigitify(currentDate.getSeconds());
    var meridiem = hours < 12 ? "AM" : "PM";

    $("#clock").html("<p>" + weekday + ", " + month + " " + day + ", " + year + "</p>");
    $("#clock").append("<p>" + (hours % 12) + ":" + minutes + ":" + seconds + " " + meridiem + "</p>");
  };

  var twoDigitify = function(digit) {
    return ("0" + digit).slice(-2);
  };

  setClock();
});
