document.addEventListener("DOMContentLoaded", function(){

// 변수 DOM Object
const toDoForm = document.querySelector('.js-toDoForm'),
 toDoInput = toDoForm.querySelector('input');
 toDoList = document.querySelector('.js-toDoList');

 const TODOS_LS = 'toDos'; // 'toDos의 로컬 주소'

 let toDos = [];

 function deleteToDo(event){
    console.log(event.target.dir);
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(
        function(toDo){
            console.log(toDo.id, parseInt(li.id));
            return toDo.id !== parseInt(li.id);
            // 현재 체크된 ITEM을 제외하고, 새로운 ARRAY생성 (BY ID비교)
        }
    ); // TRUE인 ITEM만을 가지고 새로운 ARRAY 생성
    

    toDos = cleanToDos;
    saveToDos();
    console.log(cleanToDos);
 }

 function saveToDos(){
     localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
     //localStorage.setItem(TODOS_LS, toDos);
 }

 function paintToDo(text){
     const li = document.createElement("li");

     const delBtn = document.createElement("button");
     delBtn.innerText = "X"; // Button의 내용 => "x
     delBtn.addEventListener("click", deleteToDo);

     const span = document.createElement("span");
     span.innerText = text; // 내용 => "text"

     const newId = toDos.length + 1;
     li.id = newId;

     li.appendChild(span);
     li.appendChild(delBtn);

     
     toDoList.appendChild(li);

     const toDoObj = {
         text: text,
         id: toDos.length + 1
     };

     toDos.push(toDoObj); // toDos 배열에 toDoObj() PUSH

     saveToDos();

     //console.log(toDos);
}

 function handleSubmit(event){
     
     event.preventDefault();

     const currentValue = toDoInput.value;

     //
     paintToDo(currentValue);

     toDoInput.value = "";
 }

 function loadToDos(){
     
     const loadedtoDos = localStorage.getItem(TODOS_LS);

     if(loadedtoDos !== null){
         const parsedToDos = JSON.parse(loadedtoDos);

         //const parsedToDos = loadtoDos;
         //alert(loadedtoDos);

         parsedToDos.forEach(function(toDo){
             //alert('FOREACH함수 실행');
             console.log(toDo.text);
             paintToDo(toDo.text);
         });
     }

 }

 function init(){
     loadToDos();
     //
     toDoForm.addEventListener("submit", handleSubmit);
 }

 init();
});
