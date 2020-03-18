// QuerySelect Applicatoin
// #1 .className tagName => set tagName  inside .className
// 모든 DOM 객체들이 로드되면, Javascript 실행
document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector('.js-form'),
    input = document.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

    const User_LS = "currentUser",
    Showing_On = "showing";

    function saveName(text){
        localStorage.setItem(User_LS, text);
        //localStorage.setItem() (사용자의 브라우저에 저장)
    }

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    }

    function askForName(){
        form.classList.add(Showing_On);
        form.addEventListener("submit", handleSubmit);
    }

    function paintGreeting(text){ // text 인자 전달
        form.classList.remove(Showing_On);
        greeting.classList.add(Showing_On);
        greeting.innerText = 'Hello' + text;
    }

    function loadName(){
        const currentUser = localStorage.getItem(User_LS);

        if(currentUser == null){
            // User does not exist
            askForName();
        }

        else{
            // User exist
            paintGreeting(currentUser);
        }
    }

    function init(){
      loadName();
    }
    init();
});
