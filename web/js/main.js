$('#login-button').click(function(){
  $('#login-button').fadeOut("slow",function(){
    $("#containe-form").fadeIn();
    TweenMax.from("#containe-form", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#containe-form", .4, { scale: 1, ease:Sine.easeInOut});
  });
});



var date = new Date();
renderCalendar(date);
function renderCalendar(date){
  var calendarHTML = '<div id="calendarInnerContainer">';
  // some variables, y0
  var today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  var todayUnix = today.getTime();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1),
      lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0), // essentially the -1 day of next month, js handles the incremental of year if the month addition is in excess of the current year's remaining months
      dayOfMonth = 1,
      row = 1,
      col = 1,
      monthNames = Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
      dayAbbr = Array("Su", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam");
  var lastMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  var lastMonthUnix = lastMonth.getTime();
  var nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  var nextMonthUnix = nextMonth.getTime();
  var headerHTML = "<a href='#' class='monthSwitch prevMonth' data-datestring='" + lastMonthUnix + "'>&nbsp;<&nbsp;</a><a href='#' class='monthSwitch nextMonth' data-datestring='" + nextMonthUnix + "'>&nbsp;>&nbsp;</a><br/><span class='month'>" + monthNames[date.getMonth()] + "</span><span class='year'> " + date.getFullYear()+"</span>";
  // build the calendar day headers
  calendarHTML += '<div id="weekRowHeader">';
  for (var i = 1; i <= 7; i++)
      {if (window.CP.shouldStopExecution(1)){break;}calendarHTML += '<span class="day row0 col' + i + ' grid0x' + i + '"><span class="dayInner">' + dayAbbr[i - 1] + '</span></span>';
window.CP.exitedLoop(1);
}
  calendarHTML += '</div>';
  while (dayOfMonth <= lastDay.getDate()) {if (window.CP.shouldStopExecution(2)){break;}
      var dayOfMonthUnix = new Date(date.getFullYear(), date.getMonth(), dayOfMonth);
      dayOfMonthUnix = dayOfMonthUnix.getTime();
      if (col == 1) calendarHTML += '<div class="weekRow weekRow' + row + '">';
      calendarHTML += '<span class="day row' + row + ' col' + col + ' grid' + row + 'x' + col + '"><span class="dayInner';
      if (dayOfMonthUnix == today.getTime()) calendarHTML += ' today"'; // today
      calendarHTML += '">';
      if ((dayOfMonth > 1) || (dayOfMonth == 1 && firstDay.getDay() == (col - 1))) {
          calendarHTML += dayOfMonth;
          dayOfMonth++;
      }
      calendarHTML += '</span></span>';
      if (col == 7) {
          calendarHTML += '</div>';
          col = 1;
          row++;
      } else {
          col++;
      }
  }
window.CP.exitedLoop(2);

  calendarHTML += '</div>';

  $("#calendarTitle").html(headerHTML);
  $("#calendarContainer").html(calendarHTML);
}

$(function(){
  $(document).on('click', '.monthSwitch', function(e){
    e.preventDefault();
    var unixTime = $(this).data("datestring");
    var date = new Date(unixTime);
    renderCalendar(date);
  });
});
//# sourceURL=pen.js
