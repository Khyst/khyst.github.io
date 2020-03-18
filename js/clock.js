document.addEventListener("DOMContentLoaded", function(){ // 모든 DOM 객체들이 로드되면, Javascript 실행

  const clockContainer = document.querySelector('.cTime'); // .js-clock 클래스를 가져오기
  const clockTitle = document.querySelectorAll('h4'); // 해당하는 Selector들을 노드(배열)로 반환
  //const clockTitle1 = clockTitle[0];
  const clockTitle2 = clockTitle[0];

  function getTime(){
    const date = new Date();

    const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
    //console.log(hours);
    //console.log(minutes);
    //console.log(seconds);
    //#2
    clockTitle2.innerText = ( hours < 10 ? ('0' + hours) : hours) + ':' + ( minutes < 10 ? ('0' + minutes) : minutes) + ':' + ( seconds < 10 ? ('0' + seconds) : seconds);
  }

  function init(){
    setInterval(getTime, 1000);
    //getTime();
  }

  init();

});
