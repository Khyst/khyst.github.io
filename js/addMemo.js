document.addEventListener("DOMContentLoaded", function(){ // 모든 DOM 객체들이 로드되면, Javascript 실행
    var defaultMemoObj = {

      rows: [
        {
          id:1,
          contents: "컴퓨터 활용 능력 1급 실기",
        },
        {
          id:2,
          contents: "육군 기술행정병 복무",
        },
      ]
    };
    var memoCnt = defaultMemoObj.rows.length;
    var isDefault; // defaultMemo 결정 여부
    var MEMO_LS = 'memo_ls';
    const memoForm = document.querySelector('.memoForm'),
    memoInput = memoForm.querySelector('input'),
    memoList = document.querySelector('.memoList');

    cnt = 1;
    var Memos = [];

    function saveMemos(){
        localStorage.setItem(MEMO_LS, JSON.stringify(Memos));
    }

    function paintMemo(text){
       //alert('PaintMEMO!!');
       const panel = document.createElement('div') ;
       //panel.ClassName = "panel";
       panel.classList.add("panel-default");
       panel.classList.add("panel");

       const panelHeading = document.createElement('div');
       panelHeading.className = "panel-heading";
       panelHeading.innerText = (cnt++) + "번째 메모";

       const panelBody = document.createElement('div');
       panelBody.className = "panel-body";
       panelBody.innerHTML = text;

       panel.appendChild(panelHeading);
       panel.appendChild(panelBody);

       memoList.appendChild(panel);

       const lineSpace = document.createElement('br');

       //memoList.appendChild(lineSpace);

       //alert('PaintMEMO!!');
       if(!isDefault){
         const memoObj = {
             text: text,
             id: Memos.length + 1
         };

         Memos.push(memoObj);

         saveMemos();
       }
    }

    function handleSubmit(event){
        //alert('hadnleSumbmit');
        event.preventDefault();

        const currentValue = memoInput.value;

        paintMemo(currentValue);

        memoInput.value = "";
    }

    function defaultMemo(){
      isDefault = true;

      for(i=0; i<memoCnt; i++){
          paintMemo(defaultMemoObj.rows[i].contents);
      }

      isDefault = false;
    }

    function loadMemo(){

        const loadedMemo = localStorage.getItem(MEMO_LS);

        if(loadedMemo !== null){
            const parsedMemo = JSON.parse(loadedMemo);

            parsedMemo.forEach(function(memo){
                //alert('Foreach함수 실행');

                console.log(memo.text);
                paintMemo(memo.text);
            });
        }
    }

    function init(){

        defaultMemo();

        loadMemo();

        memoForm.addEventListener("submit", handleSubmit);
    }

    init();
});
