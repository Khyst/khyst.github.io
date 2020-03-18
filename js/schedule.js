document.addEventListener("DOMContentLoaded", function(){

	/* -------------------- Event DataBase ------------------ */
	var KuSchedule = { // Schedule Data를 java object 형태로 저장
		rows: [
			{ 
				id: 31,
				title: "신정(공휴일)",
				description: "기간 : 2020-01-01 ~ 2020-01-01",
				month: "01",
				date_num: "01",
				class: "KU-schedule",
			},
			
			{
				id: 32,
				title: "제1학기 정의장학금(면학 및 미래로) 신청",
				description: "기간 : 2020-01-02 ~ 2020-01-31",
				month: "01",
				date_num: "02",
				class: "KU-schedule",
			},

			{
				id: 34,
				title: "설날(공휴일)",
				description: "기간 : 2020-01-24 ~ 2020-01-26",
				month: "01",
				date_num: "24",
				class: "KU-schedule",
			},
			
			{
				id: 35,
				title: "휴·복학 신청",
				description: "기간 : 2020-02-03 ~ 2020-02-25",
				month: "02",
				date_num: "03",
				class: "KU-schedule",
			},
			
			{
				id: 36,
				title: "2020학년도 제1학기 수강희망과목 등록(재입학생 포함)",
				description: "기간 : 2020-02-04 ~ 2020-02-07",
				month: "02",
				date_num: "04",
				class: "KU-schedule",
			},
			
			{
				id: 37,
				title: "2020학년도 제1학기 수강신청(재입학생 포함)",
				description: "기간 : 2020-02-18 ~ 2020-02-21",
				month: "02",
				date_num: "18",
				class: "KU-schedule",
			},
			
			{
				id: 38,
				title: "2020학년도 제1학기 등록",
				description: "기간 : 2020-02-21 ~ 2020-02-27",
				month: "02",
				date_num: "21",
				class: "KU-schedule",
			},
			
			{
				id: 39,
				title: "2019학년도 전기 학위수여식",
				description: "기간 : 2020-02-25 ~ 2020-02-25",
				month: "02",
				date_num: "25",
				class: "KU-schedule",
			},
			
			{
				id: 40,
				title: "신입·편입생(외국인전형) 수강신청",
				description: "기간 : 2020-02-26 ~ 2020-02-27",
				month: "02",
				date_num: "26",
				class: "KU-schedule",
			},
			
			{
				id: 41,
				title: "2020학년도 입학식",
				description: "기간 : 2020-02-28 ~ 2020-02-28",
				month: "02",
				date_num: "28",
				class: "KU-schedule",
			},
			
			{
				id: 42,
				title: "삼일절(공휴일)",
				description: "기간 : 2020-03-01 ~ 2020-03-01",
				month: "03",
				date_num: "01",
				class: "KU-schedule",
			},
			
			{
				id: 43,
				title: "제1학기 개강",
				description: "기간 : 2020-03-02 ~ 2020-03-02",
				month: "03",
				date_num: "02",
				class: "KU-schedule",
			},
			
			{
				id: 44,
				title: "조기졸업/부전공 신청",
				description: "기간 : 2020-03-02 ~ 2020-03-20",
				month: "03",
				date_num: "02",
				class: "KU-schedule",
			},
			
			{
				id: 45,
				title: "수강신청 정정 및 확인(예정)",
				description: "기간 : 2020-03-09 ~ 2020-03-10",
				month: "03",
				date_num: "09",
				class: "KU-schedule",
			},
			
			{
				id: 46,
				title: "복수전공 신청",
				description: "기간 : 2020-03-18 ~ 2020-03-20",
				month: "03",
				date_num: "18",
				class: "KU-schedule",
			},
			
			{
				id: 47,
				title: "학생설계전공 신청",
				description: "기간 : 2020-04-01 ~ 2020-04-29",
				month: "04",
				date_num: "01",
				class: "KU-schedule",
			},
			
			{
				id: 48,
				title: "융합전공 신청",
				description: "기간 : 2020-04-08 ~ 2020-04-10",
				month: "04",
				date_num: "08",
				class: "KU-schedule",
			},
			
			{
				id: 49,
				title: "제21대 국회의원 선거",
				description: "기간 : 2020-04-15 ~ 2020-04-15",
				month: "04",
				date_num: "15",
				class: "KU-schedule",
			},
			
			{
				id: 50,
				title: "제1학기 중간고사",
				description: "기간 : 2020-04-20 ~ 2020-04-24",
				month: "04",
				date_num: "20",
				class: "KU-schedule",
			},
			
			{
				id: 51,
				title: "부처님오신날(공휴일)",
				description: "기간 : 2020-04-30 ~ 2020-04-30",
				month: "04",
				date_num: "30",
				class: "KU-schedule",
			},
			
			{
				id: 52,
				title: "개교기념일, 어린이날(공휴일)",
				description: "기간 : 2020-05-05 ~ 2020-05-05",
				month: "05",
				date_num: "05",
				class: "KU-schedule",
			},
			
			{
				id: 53,
				title: "이중전공 신청",
				description: "기간 : 2020-05-06 ~ 2020-05-08",
				month: "05",
				date_num: "06",
				class: "KU-schedule",
			},
			
			{
				id: 54,
				title: "재입학 신청",
				description: "기간 : 2020-06-02 ~ 2020-06-05",
				month: "06",
				date_num: "02",
				class: "KU-schedule",
			},
			
			{
				id: 55,
				title: "현충일(공휴일)",
				description: "기간 : 2020-06-06 ~ 2020-06-06",
				month: "06",
				date_num: "06",
				class: "KU-schedule",
			},
			
			{
				id: 56,
				title: "제1학기 기말고사",
				description: "기간 : 2020-06-15 ~ 2020-06-19",
				month: "06",
				date_num: "15",
				class: "KU-schedule",
			},
			
			{
				id: 57,
				title: "여름방학 시작, 여름계절수업 개강",
				description: "기간 : 2020-06-22 ~ 2020-06-22",
				month: "06",
				date_num: "22",
				class: "KU-schedule",
			},
			
			{
				id: 58,
				title: "제2학기 정의장학금(면학 및 미래로) 신청",
				description: "기간 : 2020-07-01 ~ 2020-07-31",
				month: "07",
				date_num: "01",
				class: "KU-schedule",
			},
			
			{
				id: 59,
				title: "여름계절수업 종강",
				description: "기간 : 2020-07-17 ~ 2020-07-17",
				month: "07",
				date_num: "17",
				class: "KU-schedule",
			},
			
			{
				id: 60,
				title: "휴·복학 신청",
				description: "기간 : 2020-08-03 ~ 2020-08-25",
				month: "08",
				date_num: "03",
				class: "KU-schedule",
			},
			
			{
				id: 61,
				title: "제2학기 수강희망과목 등록(재입학생 포함)(예정)",
				description: "기간 : 2020-08-04 ~ 2020-08-07",
				month: "08",
				date_num: "04",
				class: "KU-schedule",
			},
			
			{
				id: 62,
				title: "광복절(공휴일)",
				description: "기간 : 2020-08-15 ~ 2020-08-15",
				month: "08",
				date_num: "15",
				class: "KU-schedule",
			},
			
			{
				id: 63,
				title: "제2학기 수강신청(재입학생 포함)(예정)",
				description: "기간 : 2020-08-18 ~ 2020-08-21",
				month: "08",
				date_num: "18",
				class: "KU-schedule",
			},
			
			{
				id: 64,
				title: "제2학기 등록",
				description: "기간 : 2020-08-21 ~ 2020-08-28",
				month: "08",
				date_num: "21",
				class: "KU-schedule",
			},
			
			{
				id: 65,
				title: "신입·편입생(외국인전형) 수강신청(예정)",
				description: "기간 : 2020-08-26 ~ 2020-08-27",
				month: "08",
				date_num: "26",
				class: "KU-schedule",
			},
			
			{
				id: 66,
				title: "제2학기 개강(예정)",
				description: "기간 : 2020-09-01 ~ 2020-09-01",
				month: "09",
				date_num: "01",
				class: "KU-schedule",
			},
			
			{
				id: 67,
				title: "조기졸업/부전공 신청",
				description: "기간 : 2020-09-01 ~ 2020-09-21",
				month: "09",
				date_num: "01",
				class: "KU-schedule",
			},
			
			{
				id: 68,
				title: "수강신청 정정 및 확인(예정)",
				description: "기간 : 2020-09-07 ~ 2020-09-08",
				month: "09",
				date_num: "07",
				class: "KU-schedule",
			},
			
			{
				id: 69,
				title: "복수전공 신청",
				description: "기간 : 2020-09-16 ~ 2020-09-18",
				month: "09",
				date_num: "16",
				class: "KU-schedule",
			},
			
			{
				id: 70,
				title: "정기 고·연전(예정)",
				description: "기간 : 2020-09-25 ~ 2020-09-26",
				month: "09",
				date_num: "25",
				class: "KU-schedule",
			},
			
			{
				id: 71,
				title: "추석(공휴일)",
				description: "기간 : 2020-09-30 ~ 2020-10-02",
				month: "09",
				date_num: "30",
				class: "KU-schedule",
			},
			
			{
				id: 72,
				title: "추석(공휴일)",
				description: "기간 : 2020-09-30 ~ 2020-10-02",
				month: "09",
				date_num: "30",
				class: "KU-schedule",
			},
			
			{
				id: 73,
				title: "개천절(공휴일)",
				description: "기간 : 2020-10-03 ~ 2020-10-03",
				month: "10",
				date_num: "03",
				class: "KU-schedule",
			},
			
			{
				id: 74,
				title: "학생설계전공 신청",
				description: "기간 : 2020-10-05 ~ 2020-10-30",
				month: "10",
				date_num: "05",
				class: "KU-schedule",
			},
			
			{
				id: 75,
				title: "융합전공 신청",
				description: "기간 : 2020-10-05 ~ 2020-10-08",
				month: "10",
				date_num: "05",
				class: "KU-schedule",
			},
			
			{
				id: 76,
				title: "한글날(공휴일)",
				description: "기간 : 2020-10-09 ~ 2020-10-09",
				month: "10",
				date_num: "09",
				class: "KU-schedule",
			},
			
			{
				id: 77,
				title: "제2학기 중간고사(예정)",
				description: "기간 : 2020-10-20 ~ 2020-10-26",
				month: "10",
				date_num: "20",
				class: "KU-schedule",
			},
			
			{
				id: 78,
				title: "이중전공 신청",
				description: "기간 : 2020-11-11 ~ 2020-11-13",
				month: "11",
				date_num: "11",
				class: "KU-schedule",
			},
			
			{
				id: 79,
				title: "재입학신청",
				description: "기간 : 2020-12-02 ~ 2020-12-04",
				month: "12",
				date_num: "02",
				class: "KU-schedule",
			},
			
			{
				id: 80,
				title: "제2학기 기말고사(예정)",
				description: "기간 : 2020-12-15 ~ 2020-12-21",
				month: "12",
				date_num: "15",
				class: "KU-schedule",
			},
			
			{
				id: 81,
				title: "겨울방학 시작, 겨울계절수업 개강",
				description: "기간 : 2020-12-22 ~ 2020-12-22",
				month: "12",
				date_num: "22",
				class: "KU-schedule",
			},
			
			{
				id: 82,
				title: "성탄절(공휴일)",
				description: "기간 : 2020-12-25 ~ 2020-12-25",
				month: "12",
				date_num: "25",
				class: "KU-schedule",
			},			
		]
	}
	const KU_step = KuSchedule.rows.length;
	/* ------------------------------------------------------ */

	/* -------------------- Event DataBase ------------------ */
	var mySchedule ={
		rows : [			
			{
				id: 201,
				title: "izien 성형외과 접수",
				description: "기간 : 2020-01-06",
				month: "01",
				date_num: "06",
				class: "my-schedule",
			},	
			{
				id: 202,
				title: "육군(통신병, 행정병) 1차 합격자 발표",
				description: "기간 : 2020-01-6",
				month: "01",
				date_num: "16",
				class: "my-schedule",
			},	
			{
				id: 203,
				title: "육군(통신병, 행정병) 최종 합격자 발표",
				description: "기간 : 2020-02-27",
				month: "02",
				date_num: "27",
				class: "my-schedule",
			},
			{
				id: 204,
				title: "컴퓨터 활용 능력 (실기)",
				description: "기간 : 2020-01-31",
				month: "01",
				date_num: "31",
				class: "my-schedule",
			},
		]
	}
	const My_step = mySchedule.rows.length;
	/* ------------------------------------------------------ */

	/* -------------------- 기본 Setting -------------------- */
	var days = $('.date');

	month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	//start_day = [3, 6, 6, 2, 4, 7, 2, 5, 1, 3, 6, 1]; //index는 1부터로 통일 (화:3)
	start_day = [4, 7, 1, 4, 6, 2, 4, 7, 3, 5, 1, 3];

	var d = new Date();
	currentYear = d.getYear();
	currentMonth = d.getMonth();
	nowMonth = d.getMonth();
	currentDate = d.getDate();

	var calendarTitle = document.querySelector('.calendarTitle');
	/* ------------------------------------------------------ */
	/* --------------------- 함수 시작부 --------------------- */

	function clearCalendar(){
		var EventDays = document.querySelectorAll('.event');
		var AllDays = document.querySelectorAll('.day');

		console.log(EventDays);

		for(j=0; j<EventDays.length; j++){
			EventDays[j].parentNode.removeChild(EventDays[j]);
		}

		for(j=0; j<42; j++){
			AllDays[j].classList.remove('NowDate', 'other-month');
		}

	}

	function getRandom(){
        const number = Math.floor(Math.random() * IMG_NUMBER);
        return number;
    }

	function paintCalendar(){
		calendarTitle.innerText = "2020 - "  + (currentMonth+1);
		temp = start_day[currentMonth]-1;
		prevMonthLast = month[currentMonth-1]-(temp-1);

		var i=0;
		let month_index=0;
		let other_month_index=0;

		while(i < 42){
			if(temp>0){ //prevMonth
				temp--;
				days.eq(i).text(prevMonthLast++);
				days.eq(i).parent().addClass('other-month');
			}

			//else if(i <= temp+month[currentMonth]+1){ //nowMonth
			else if(month_index <= month[currentMonth]-1){ //nowMonth
				if(i-(start_day[currentMonth]-2) == currentDate){
					if(currentMonth == nowMonth){
						days.eq(i).parent().addClass('NowDate');
					}
				}
				days.eq(i).text(i-(start_day[currentMonth]-2));
				month_index += 1;
			}

			else{ //nextMonth
				other_month_index++;
				days.eq(i).text(other_month_index);
				days.eq(i).parent().addClass('other-month');
			}
			i += 1;
		}


		var step = 0; // Event Attach (KU-SCHEDULE)

		while(step < KU_step){
			if(parseInt(KuSchedule.rows[step].month) == currentMonth+1){
				console.log(parseInt(KuSchedule.rows[step].month), currentMonth+1);
				var elementT = document.createElement('div');
				elementT.className = "event";
				console.log(elementT);

				var element1 = document.createElement('div');
				element1.className = "event-desc";
				element1.innerHTML = KuSchedule.rows[step].title;
				console.log(element1);

				var element2 = document.createElement('div');
				element2.className = "event-time";
				element2.innerHTML = KuSchedule.rows[step].description;
				console.log(element2);

				elementT.append(element1);
				elementT.append(element2);
				console.log("final",elementT);

				var select = document.getElementsByClassName("day");
				console.log(select);

				elementT.classList.add("KU-schedule");

				select[start_day[currentMonth]-1+parseInt(KuSchedule.rows[step].date_num)-1].appendChild(elementT);
			}
			step++;
		}

		step = 0; // Event Attach (MY-SCHEDULE)
		while(step < My_step){
			if(parseInt(mySchedule.rows[step].month)==currentMonth+1){
				console.log(parseInt(mySchedule.rows[step].month), currentMonth+1);
				var elementT = document.createElement('div');
				elementT.className = "event";
				console.log(elementT);

				var element1 = document.createElement('div');
				element1.className = "event-desc";
				element1.innerHTML = mySchedule.rows[step].title;
				console.log(element1);

				var element2 = document.createElement('div');
				element2.className = "event-time";
				element2.innerHTML = mySchedule.rows[step].description;
				console.log(element2);

				elementT.append(element1);
				elementT.append(element2);

				console.log("final",elementT);

				var select = document.getElementsByClassName("day");

				elementT.classList.add("MY-schedule");

				select[start_day[currentMonth]-1+parseInt(mySchedule.rows[step].date_num)-1].appendChild(elementT);
			}
			step++;
		}


		$('.event').on('click', function() {
			console.log('A');
			$(this).find('.event-time').toggleClass( 'visiblity' );
		});
	}

	function adjustMonth(){

		document.querySelector('.prevMonth').addEventListener("click", function(){
			currentMonth--;

			clearCalendar();

			paintCalendar();
		});

		document.querySelector('.nextMonth').addEventListener("click", function(){
			currentMonth++;

			clearCalendar();

			paintCalendar();
		});

	}

	function init(){
		paintCalendar();

		adjustMonth();

	}

	/* ------------------------------------------------------ */

	init();
});
