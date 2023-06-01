$(function(e) {
  var calendar = null; // 캘린더 객체를 저장할 변수

  // 달력 초기화 함수
  function initializeCalendar() {
    if (calendar) {
      // 캘린더 객체가 이미 생성되어 있다면 파괴
      calendar.destroy();
    }

    calendar = $("#calendar").calendarGC({
      dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
      monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
      dayBegin:0,
      prevIcon: '&#x3c;',
      nextIcon: '&#x3e;',
      onPrevMonth: function (e) {
        console.log("prev");
        console.log(e);
      },
      onNextMonth: function (e) {
        console.log("next");
        console.log(e);
      },
      events: getHoliday(),
      onclickDate: function (e, data) {
        console.log(e, data);
      }
    });
  }

  // 달이 바뀌는 이벤트 감지하여 초기화 함수 호출
  $("#calendar").on("changeMonth", function(e, month, year) {
    initializeCalendar();
  });

  // 초기화 함수 호출
  initializeCalendar();

  function getHoliday() {
    var d = new Date();
    var totalDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    var events = [
          // // 5월 개별
    //   {
    //     date:new Date("2023-05-31"),
    //     eventName:"10:00 ~ 18:00",
    //     className: "badge bg-secondary",
    //     onclick(e, data) {
    //       console.log(data);
    //     },
    //     dateColor:"black",
    //   },

      //6월 개별
      {
        date:new Date("2023-06-04"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-04"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-05"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-06"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-06"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-06"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-06"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-11"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-11"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-11"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-11"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-12"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-13"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-13"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-13"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-13"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-18"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-18"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-18"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-18"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-19"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-20"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-20"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-20"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-20"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-25"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-25"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-25"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-25"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-06-26"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-27"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-27"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-27"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-06-27"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      //7월 개별
      {
        date:new Date("2023-07-01"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-01"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-01"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-08"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-08"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-08"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-15"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-15"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-15"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-22"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-22"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-22"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-29"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-29"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-07-29"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
         date:new Date("2023-07-31"),
         eventName:"10:00 ~ 18:00",
         className: "badge bg-secondary",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
       {
         date:new Date("2023-07-31"),
         eventName:"플래티넘 패스",
         className: "badge bg-info",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
       {
         date:new Date("2023-07-31"),
         eventName:"스탠다드 패스",
         className: "badge bg-success",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
       {
         date:new Date("2023-07-31"),
         eventName:"골드 패스",
         className: "badge bg-warning",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
      //8월 개별
      {
        date:new Date("2023-08-01"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-01"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-01"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-01"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-07"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-07"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-08"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-08"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-08"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-08"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-14"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-14"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-15"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-08-15"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-08-15"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-08-15"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-08-21"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-21"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-22"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-22"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-22"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-22"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-28"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-28"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-29"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-29"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-29"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-08-29"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
       {
         date:new Date("2023-08-31"),
         eventName:"10:00 ~ 18:00",
         className: "badge bg-secondary",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
       {
         date:new Date("2023-08-31"),
         eventName:"플래티넘 패스",
         className: "badge bg-info",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
       {
         date:new Date("2023-08-31"),
         eventName:"스탠다드 패스",
         className: "badge bg-success",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
       {
         date:new Date("2023-08-31"),
         eventName:"골드 패스",
         className: "badge bg-warning",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
      //9월 개별
      {
        date:new Date("2023-9-01"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-01"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-01"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-01"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-02"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-9-02"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-02"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-07"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-07"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-07"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-07"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-08"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-08"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-08"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-08"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-09"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-9-09"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-09"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-14"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-14"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-14"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-14"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-15"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-15"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-15"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-15"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-16"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-9-16"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-16"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-21"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-21"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-21"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-21"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-22"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-22"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-22"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-22"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-23"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-9-23"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-09-23"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-9-28"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-9-28"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-09-28"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-09-28"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-9-29"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-9-29"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-09-29"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-9-30"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-9-30"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-09-30"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      //10월 개별
      {
        date:new Date("2023-10-01"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-01"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-02"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-02"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-02"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-03"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-03"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-03"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-03"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-04"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-04"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-04"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-04"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-05"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-05"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
            {
        date:new Date("2023-10-08"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-08"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-09"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-09"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-09"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-09"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-10"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-10"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-10"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-10"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-11"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-11"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-11"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-11"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-12"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-12"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-16"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-15"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-15"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-15"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-15"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-16"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-16"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-16"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-17"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-17"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-17"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-17"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-18"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-18"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-18"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-18"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-19"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-19"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-22"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-22"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-22"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-22"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-23"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-23"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-23"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-23"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-24"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-24"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-24"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-24"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-25"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-25"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-25"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-25"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-26"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-26"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-29"),
        eventName:"10:00 ~ 21:00",
        className: "badge bg-primary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-29"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-29"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-29"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-10-30"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-30"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-30"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-30"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-31"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-31"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-31"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-10-31"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      //11월 개별
      {
        date:new Date("2023-11-01"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-01"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-01"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-01"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-02"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-02"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-02"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-02"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-03"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-03"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-04"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-04"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-05"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-05"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-06"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-06"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-07"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-07"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-07"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-07"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-08"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-08"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-08"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-08"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-09"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-09"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-09"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-09"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-10"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-10"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-11"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-11"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-12"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-12"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-13"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-13"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-14"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-14"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-14"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-14"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-15"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-15"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-15"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-15"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-16"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-16"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-16"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-16"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-17"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-17"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-18"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-18"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-19"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-19"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-20"),
        eventName:"10:00 ~ 17:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-20"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-21"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-22"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-23"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-24"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-24"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-25"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-25"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2023-11-26"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-26"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-11-27"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-27"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-28"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-29"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-11-30"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      //12월 개별
      {
        date:new Date("2023-12-01"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-01"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-04"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-04"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-04"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-04"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-08"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-08"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-08"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-08"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-11"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-11"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-11"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-11"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
          {
        date:new Date("2023-12-15"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-15"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-15"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-15"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-18"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-18"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-18"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-18"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
          {
        date:new Date("2023-12-22"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-22"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-22"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-22"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-25"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-12-25"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-12-25"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2023-12-25"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
          {
        date:new Date("2023-12-29"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-29"),
        eventName:"플래티넘 패스",
        className: "badge bg-info",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-29"),
        eventName:"스탠다드 패스",
        className: "badge bg-success",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2023-12-29"),
        eventName:"골드 패스",
        className: "badge bg-warning",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      // {
      //   date:new Date("2023-12-31"),
      //   eventName:"10:00 ~ 18:00",
      //   className: "badge bg-secondary",
      //   onclick(e, data) {
      //     console.log(data);
      //   },
      //   dateColor:"black",
      // },
      // {
      //   date:new Date("2023-12-31"),
      //   eventName:"플래티넘 패스",
      //   className: "badge bg-info",
      //   onclick(e, data) {
      //     console.log(data);
      //   },
      //   dateColor:"black",
      // },
      // {
      //   date:new Date("2023-12-31"),
      //   eventName:"스탠다드 패스",
      //   className: "badge bg-success",
      //   onclick(e, data) {
      //     console.log(data);
      //   },
      //   dateColor:"black",
      // },
      // {
      //   date:new Date("2023-12-31"),
      //   eventName:"골드 패스",
      //   className: "badge bg-warning",
      //   onclick(e, data) {
      //     console.log(data);
      //   },
      //   dateColor:"black",
      // },
      // 2024년 1월
      {
        date:new Date("2024-01-01"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-01-08"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-01-15"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-01-22"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-01-29"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
         date:new Date("2024-01-31"),
         eventName:"Closed",
         className: "badge bg-dark",
         onclick(e, data) {
           console.log(data);
         },
         dateColor:"black",
       },
      // 2024년 2월
      {
        date:new Date("2024-02-02"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-02-03"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-02-05"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-02-09"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-02-10"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-02-12"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-02-16"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-02-17"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-02-19"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-02-23"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-02-24"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-02-26"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      // 2024년 3월 개별
      {
        date:new Date("2024-03-01"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-03-02"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-03-03"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-03-04"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-05"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-06"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-07"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-08"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-09"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-03-10"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },

      {
        date:new Date("2024-03-11"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-12"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-13"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-14"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-15"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-16"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-03-17"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-03-18"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-19"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-20"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-21"),
        eventName:"Closed",
        className: "badge bg-dark",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-22"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-23"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-03-24"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },
      {
        date:new Date("2024-03-25"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-26"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-27"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-28"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-29"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"black",
      },
      {
        date:new Date("2024-03-30"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"blue",
      },
      {
        date:new Date("2024-03-31"),
        eventName:"10:00 ~ 18:00",
        className: "badge bg-secondary",
        onclick(e, data) {
          console.log(data);
        },
        dateColor:"red",
      },

    ];

        // // 5월
    // for (var i = 1; i <= totalDay; i++) {
    //   var newDate = new Date(d.getFullYear(), d.getMonth(), i);
    //   if (newDate.getDay() == 0) {   //일요일
    //     events.push({
    //       date: newDate,
    //       eventName: "10:00 ~ 21:00",
    //       className: "badge bg-primary",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor: "red",
    //     });
    //   }
    //   if (newDate.getDay() == 0) {   //일요일 플래
    //     events.push({
    //       date: newDate,
    //       eventName: " ",
    //       className: "badge bg-info",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor: "red",
    //     });
    //   }
    //   if (newDate.getDay() == 1) {   //월요일 플래
    //     events.push({
    //       date: newDate,
    //       eventName: " ",
    //       className: "badge bg-info",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor: "black",
    //     });
    //   }
    //   if (newDate.getDay() == 2) {   //화요일
    //     events.push({
    //       date: newDate,
    //       eventName: "10:00 ~ 18:00",
    //       className: "badge bg-secondary",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor:"black"
    //     });
    //   }
    //   if (newDate.getDay() == 2) {   //화요일 플래
    //     events.push({
    //       date: newDate,
    //       eventName: " ",
    //       className: "badge bg-info",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor: "black",
    //     });
    //   }
    //   if (newDate.getDay() == 3) {   //수요일
    //     events.push({
    //       date: newDate,
    //       eventName: "10:00 ~ 18:00",
    //       className: "badge bg-secondary",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor:"black"
    //     });
    //   }
    //   if (newDate.getDay() == 4) {   //목요일
    //     events.push({
    //       date: newDate,
    //       eventName: "10:00 ~ 18:00",
    //       className: "badge bg-secondary",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor:"black"
    //     });
    //   }
    //   if (newDate.getDay() == 5) {   //금요일
    //     events.push({
    //       date: newDate,
    //       eventName: "10:00 ~ 21:00",
    //       className: "badge bg-primary",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor:"black"
    //     });
    //   }
    //   if (newDate.getDay() == 6) {   //토요일
    //     events.push({
    //       date: newDate,
    //       eventName: "10:00 ~ 21:00",
    //       className: "badge bg-primary",
    //       onclick(e, data) {
    //         console.log(data);
    //       },
    //       dateColor:"blue"
    //     });
    //   }
      
    // }
    
    // 6월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth(), i);

      if (newDate.getDay() == 1) {   //월요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 1) {   //월요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 1) {   //월요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 3) {   //수요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 3) {   //수요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 4) {   //목요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 4) {   //목요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 4) {   //목요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 4) {   //목요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 5) {   //금요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 5) {   //금요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 5) {   //금요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 5) {   //금요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 6) {   //토요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"blue"
        });
      }
      if (newDate.getDay() == 6) {   //토요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
          });
      }
      if (newDate.getDay() == 6) {   //목요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
          });
      }
    }

    // 7월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+1, i);
      if (newDate.getDay() == 0) {   //일요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
          });
      }
      if (newDate.getDay() == 0) {   //일요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 1) {   //월요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 1) {   //월요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 2) {   //화요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 2) {   //화요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 2) {   //화요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 2) {   //화요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 3) {   //수요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 4) {   //목요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 4) {   //목요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 4) {   //목요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 4) {   //목요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 5) {   //금요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 5) {   //금요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      // if (newDate.getDay() == 6) {   //토요일
      //   events.push({
      //     date: newDate,
      //     eventName: "10:00 ~ 21:00",
      //     className: "badge bg-primary",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor:"blue"
      //   });
      // }
      // if (newDate.getDay() == 6) {   //토요일 플래
      //   events.push({
      //     date: newDate,
      //     eventName: "플래티넘 패스",
      //     className: "badge bg-info",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor: "blue",
      //     });
      // }
      // if (newDate.getDay() == 6) {   //토요일 골드
      //   events.push({
      //     date: newDate,
      //     eventName: "골드 패스",
      //     className: "badge bg-warning",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor: "blue",
      //   });
      // }
      
    }

    // 8월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+2, i);
      if (newDate.getDay() == 0) {   //일요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
          });
      }
      if (newDate.getDay() == 0) {   //일요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 3) {   //수요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 4) {   //목요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 4) {   //목요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 4) {   //목요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 4) {   //목요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 5) {   //금요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
          });
      }
      if (newDate.getDay() == 5) {   //금요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 6) {   //토요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"blue"
        });
      }
      if (newDate.getDay() == 6) {   //토요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
          });
      }
      if (newDate.getDay() == 6) {   //토요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
    }

    // 9월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+3, i);
      if (newDate.getDay() == 0) {   //일요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 1) {   //월요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 2) {   //화요일 
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 2) {   //화요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 2) {   //화요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 2) {   //화요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 3) {   //수요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }

    }

    // 10월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+4, i);
      if (newDate.getDay() == 4) {   //목요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 4) {   //목요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 5) {   //금요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 6) {   //토요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 21:00",
          className: "badge bg-primary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"blue"
        });
      }
      if (newDate.getDay() == 6) {   //토요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
      if (newDate.getDay() == 6) {   //토요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      
    }
    
    // 11월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+5, i);
      if (newDate.getDay() == 0) {   //일요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 1) {   //월요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 5) {   //금요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 6) {   //토요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
      if (newDate.getDay() == 6) {   //토요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "black",
        });
      }
    }

    // 12월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+6, i);
      if (newDate.getDay() == 0) {   //일요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 플래
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 0) {   //일요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 2) {   //화요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 4) {   //목요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      // if (newDate.getDay() == 5) {   //금요일
      //   events.push({
      //     date: newDate,
      //     eventName: "10:00 ~ 18:00",
      //     className: "badge bg-secondary",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor:"black"
      //   });
      // }
      // if (newDate.getDay() == 5) {   //금요일 플래
      //   events.push({
      //     date: newDate,
      //     eventName: "플래티넘 패스",
      //     className: "badge bg-info",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor: "black",
      //   });
      // }
      // if (newDate.getDay() == 5) {   //금요일 스탠
      //   events.push({
      //     date: newDate,
      //     eventName: "스탠다드 패스",
      //     className: "badge bg-success",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor: "black",
      //   });
      // }
      // if (newDate.getDay() == 5) {   //금요일 골드
      //   events.push({
      //     date: newDate,
      //     eventName: "골드 패스",
      //     className: "badge bg-warning",
      //     onclick(e, data) {
      //       console.log(data);
      //     },
      //     dateColor: "black",
      //   });
      // }
      if (newDate.getDay() == 6) {   //토요일
        events.push({
          date: newDate,
          eventName: "10:00 ~ 18:00",
          className: "badge bg-secondary",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"blue"
        });
      }
      if (newDate.getDay() == 6) {   //토요일
        events.push({
          date: newDate,
          eventName: "플래티넘 패스",
          className: "badge bg-info",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
      if (newDate.getDay() == 6) {   //토요일 스탠
        events.push({
          date: newDate,
          eventName: "스탠다드 패스",
          className: "badge bg-success",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
      if (newDate.getDay() == 6) {   //토요일 골드
        events.push({
          date: newDate,
          eventName: "골드 패스",
          className: "badge bg-warning",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "blue",
        });
      }
      
    }

    // 2024년 1월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+7, i);
      if (newDate.getDay() == 0) {   //일요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 2) {   //화요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 4) {   //목요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 5) {   //금요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 6) {   //토요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"blue"
        });
      }
      
    }

    // 2024년 2월
    for (var i = 1; i <= totalDay; i++) {
      var newDate = new Date(d.getFullYear(), d.getMonth()+8, i);
      if (newDate.getDay() == 0) {   //일요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor: "red",
        });
      }
      if (newDate.getDay() == 2) {   //화요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 3) {   //수요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      if (newDate.getDay() == 4) {   //목요일
        events.push({
          date: newDate,
          eventName: "Closed",
          className: "badge bg-dark",
          onclick(e, data) {
            console.log(data);
          },
          dateColor:"black"
        });
      }
      
    }

    return events;
  }
});
