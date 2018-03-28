 var dt = new Date();
    var evenOrEven = EvenORnotEven1();
//Дни недели для обеих групп, нечетные и четные
    var Monday = document.getElementsByClassName('Not-Even Mon');
    var Tuesday = document.getElementsByClassName('Not-Even Tue');
    var Wednesday = document.getElementsByClassName('Not-Even Wed');
    var Thursday = document.getElementsByClassName('Not-Even Thu');
    var Friday = document.getElementsByClassName('Not-Even Fri');
    var Saturday = document.getElementsByClassName('Not-Even Sat');

    var Monday2 = document.getElementsByClassName('Not-Even mon');
    var Tuesday2 = document.getElementsByClassName('Not-Even tue');
    var Wednesday2 = document.getElementsByClassName('Not-Even wed');
    var Thursday2 = document.getElementsByClassName('Not-Even thu');
    var Friday2 = document.getElementsByClassName('Not-Even fri');
    var Saturday2 = document.getElementsByClassName('Not-Even sat');

    var MondayEV = document.getElementsByClassName('Even Mon');
    var TuesdayEV = document.getElementsByClassName('Even Tue');
    var WednesdayEV = document.getElementsByClassName('Even Wed');
    var ThursdayEV = document.getElementsByClassName('Even Thu');
    var FridayEV = document.getElementsByClassName('Even Fri');
    var SaturdayEV = document.getElementsByClassName('Even Sat');

    var MondayEV2 = document.getElementsByClassName('Even mon');
    var TuesdayEV2 = document.getElementsByClassName('Even tue');
    var WednesdayEV2 = document.getElementsByClassName('Even wed');
    var ThursdayEV2 = document.getElementsByClassName('Even thu');
    var FridayEV2 = document.getElementsByClassName('Even fri');
    var SaturdayEV2 = document.getElementsByClassName('Even sat');

    var Sunday = "Выходной";
    var Sunday2 = "Выходной";
    var SundayEV = "Выходной";
    var SundayEV2 = "Выходной";

    var day = dt.getDay();
     
    var tableGroupFirst = document.createElement('table');
    var tableGroupSecond = document.createElement('table');

    var mainDay = document.getElementsByClassName('Day');

    var week = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
    var week2 = [Sunday2, Monday2, Tuesday2, Wednesday2, Thursday2, Friday2, Saturday2];
    var week1 = [SundayEV, MondayEV, TuesdayEV, WednesdayEV, ThursdayEV, FridayEV, SaturdayEV];
    var week12 = [SundayEV2, MondayEV2, TuesdayEV2, WednesdayEV2, ThursdayEV2, FridayEV2, SaturdayEV2];

     tableGroupFirst.className = "Now";
     tableGroupSecond.className = "Now1";
     //week[0]=Monday;
     var i;
     var nowdayGroupFirst;
     var nowDayGroupSecond;
          i = day;
     
     if(i == 0)//Условия для сборки расписания в день Воскресенья(будет показывать на понедельник и вторник)
      i = 1;


     
    
     


     var tomorrovGroupFirst;
     var tomorrovGroupSecond;
     var tdFirstGroup = document.createElement('td');
     var tdSecondGroup = document.createElement('td');
     tableGroupFirst.appendChild(tdFirstGroup);
     tableGroupSecond.appendChild(tdSecondGroup);
     tdSecondGroup.className = "tomorrow";
     tdSecondGroup.setAttribute("colspan",5);
     tdFirstGroup.className = "tomorrow";
     tdFirstGroup.setAttribute("colspan",5);
     tdFirstGroup.innerHTML = mainDay[i-1].innerHTML;//Ниже заголовки сегодняшнего и завтрешнего дня




    if( (i + 1) == 7 ){
     tdSecondGroup.innerHTML = mainDay[0].innerHTML;
     } else {
    tdSecondGroup.innerHTML = mainDay[i].innerHTML;
    }

    if(evenOrEven == 'Четная'){
     for (var j = 1; j <= 6; j++) {
      if(j == i){
       nowdayGroupFirst = week[j];
       nowDayGroupSecond = week2[j];
       if((i + 1) == 7) {
        tomorrovGroupFirst = week[1];
        tomorrovGroupSecond = week2[1];
     } else {
        tomorrovGroupFirst = week[j + 1];
        tomorrovGroupSecond = week2[j + 1];
         }
      }
    }

     } else {
        for (var j = 1; j <= 6; j++) 
         if(j == i){
          nowdayGroupFirst = week1[j];
          nowDayGroupSecond = week12[j];
           if((i + 1) == 7){
            tomorrovGroupFirst = week1[1];
            tomorrovGroupSecond=week12[1];
         } else {
            tomorrovGroupFirst = week1[j + 1];
            tomorrovGroupSecond = week12[j + 1];
         }
       }
    }

    document.body.appendChild(tableGroupFirst);
    AddStrTable(tableGroupFirst,nowdayGroupFirst,"I"); 
    AddStrTable(tableGroupFirst,nowDayGroupSecond,"II"); 
    document.body.appendChild(tableGroupSecond);
    AddStrTable(tableGroupSecond,tomorrovGroupFirst,"I"); 
    AddStrTable(tableGroupSecond,tomorrovGroupSecond,"II"); 




    function fun1() {
        var butt = document.getElementById('Name');
        var even = document.getElementsByClassName('Even');
        var notEven = document.getElementsByClassName('Not-Even');
        var box;

     if(butt.value == "Нечетная"){
	  for(var i = 0; i < even.length; i++) {
       box = even[i].innerHTML; 
	   even[i].innerHTML = notEven[i].innerHTML;
       notEven[i].innerHTML = box;
	   butt.value = 'Четная';
	}
   } else {
      for(var i = 0; i < even.length; i++) {
       box = notEven[i].innerHTML;
	   notEven[i].innerHTML = even[i].innerHTML;
       even[i].innerHTML = box;
	   butt.value = 'Нечетная';	
    }
  }
}

    function fun2() { //Функция управляющаыя видемостью обьектов при нажатие кнопок.
        var weekNumber = document.getElementById('Week');
        var Butt2 = document.getElementById('Name');
        var mainTable = document.getElementById('Main');
        var Butt3 = document.getElementById('NowDay');



        

     if(Butt3.value == "Все расписание"){
      mainTable.style.display = "table";
      Butt2.style.display = "block";
      Butt3.value = "Назад";
      tableGroupFirst.style.display = "none";
      tableGroupSecond.style.display = "none";
      //weekNumber.style.width = " 458px";
     // Butt3.style.width = " 458px";
     // div.style.display = "none";
      //weekNumber.style.display = "none";
   } else {
      mainTable.style.display = "none";
      Butt3.value = "Все расписание"; 
      Butt2.style.display = "none";
      tableGroupFirst.style.display = "table";
      tableGroupSecond.style.display = "table";
     // weekNumber.style.width = " 530px";
       //Butt3.style.width = " 530px";
     // div.style.display = "block";
      //weekNumber.style.display = "";
   }
}

    function EvenORnotEven1(){//Функция вычисляющая четность недели
        var weekNumber = document.getElementById('Week');
        var dt = new Date();
        var Year = 365;
        var arr = [31, 28, 31, 30, 31, 30, 31, 31, 31, 31, 30, 31]
        var ValDay = 0;
        var res;

     for (var i = 0; i < dt.getMonth(); i++) 
      ValDay += arr[i];
     
    ValDay += dt.getDate();
    ValDay = ValDay / 7;
    //alert(Math.floor(ValDay)-4);
    weekNumber.innerHTML = Math.floor(ValDay)-4;
    weekNumber.innerHTML += ' Неделя';
     if(Math.floor(ValDay) % 2 == 0){
      res = 'Четная';
   } else {
      res = 'Нечетная';
  }
    return res;
 }

    function AddStrTable(T, DataDay, Group) {//Функция создающая динамично таблицу
        var stringLength = 4; 
        var TableTrTd = [];
        var tdDiv = [];
        var td = document.createElement('td');
        var tr = document.createElement('tr');
        var div = document.createElement('div');
    T.appendChild(tr);
    TableTrTd[0] = td.cloneNode(true);
    tr.appendChild(TableTrTd[0]);
    TableTrTd[0].innerHTML = Group;
    //TableTrTd[0].className="Test";     col-xs-12 col-sm-8 col-md-8
TableTrTd[0].className="Test";  
     for(var l = 1; l <= stringLength; l++) {

      TableTrTd[l] = td.cloneNode(true);
      tdDiv[l] = div.cloneNode(true);
      tr.appendChild(TableTrTd[l]);
      TableTrTd[l].appendChild(tdDiv[l]);
      tdDiv[l].innerHTML = DataDay[l - 1].innerHTML;
     //tdDiv[l].className="col-12";
    //TableTrTd[l].innerHTML = DataDay[l - 1].innerHTML;
  }
}
