document.addEventListener("DOMContentLoaded", function(){
    var formSchedule = document.querySelector('.formSchedule');
    var inputSchedule = formSchedule.querySelectorAll('input');    
    

    const SCHEDULE_LS = 'schdule'; // 'Schedule의 로컬주소'

    function transmitSchedule(tilte, subscript, period, category){
        
        if(category == "KU"){

            KuSchedule.rows[KU_step].id = KU_step;
            KuSchedule.rows[KU_step].title = title;
            KuSchedule.rows[KU_step].description = subscript;
            KuSchedule.rows[KU_step].period = 

            KU_step++;

        }

        else if(category == "MY"){
            
        }

        else if(categor == "KR"){

        }

        else{

        }

    }

    function handleSubmit(event){
        event.preventDefault();

        const title = inputSchedule[0].value;
        const subscript = inputSchedule[1].value;
        const period = inputSchedule[2].value;
        const category = inputSchedule[3].value;

        transmitSchedule(title, subscript, period, category);

        title.value = "";
        subscript.value = "";
        period.value = "";
        category.value = "";
    }

    function loadSchedule(){
        const loadedSchedule = localStorage.getItem(SCHEDULE_LS);
        if(loadedSchedule !== null){
            const parsedSchedule = JSON.parse(loadedSchedule);

            parsedSchedule.forEach(function(schedule){
                alert('Foreach 함수 실행');
                //console.log(schedule.text);
                transmitSchedule(schedule[0].text, schedule[1].text, schedule[2].text, schedule[3].text);
            })
        }
    }

    function init(){
        loadSchedule();
    }

    init();
});