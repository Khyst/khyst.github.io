$(document).ready(function(){

  var date_month_9 = [ 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10,
   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
   21, 22, 23, 24, 25, 26, 27 , 28, 29, 30 ];

  var other_month_9=[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  var days = $('.date');
  var Wdays = $('.day');

  //alert('실행 of Javascript');
  var i = 0;
  month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  while(i < month[9-1]){

    days.eq(i).text(date_month_9[i]);
    console.log(date_month_9[i]);
    i++;
  }

  i = 0;
  while (i < 42-month[9-1]) {
    days.eq(i+month[9-1]).text(other_month_9[i]);
    Wdays.eq(i+month[9-1]).addClass('other-month');
    i++;
  }

  //$('.event').click( function(e) => )
  //$('.event-time').addClass('hidden');

  $('.event').on('mouseenter', function() {
    // 내용...
    $(this).find('.event-time').addClass('visiblity');
    //$('.event-time').removeClass('hidden');
    //$('.day').addClass('styleAdd');
  });

  $('.event').on('mouseleave', function() {
    //
    $(this).find('.event-time').removeClass('visiblity');
    //$('.event-time').addClass('hidden');
    //$('.day').removeClass('styleAdd')
  })

//var ele1 = $('.event').append(element1);

  /*var element1 = $("<div/>").appendTo("div");
  element1.text(TitleString);
  element1.appendTo(".event-desc");

  var element2 = $("<div/>").appendTo("div");
  element2.text(TimeString);
  element2.appendTo(".event-time");*/

  //var eleString= "<div class="abcd"></div><div></div>"
  //days.eq(1).after(eleString);

});
