
var dt = new Date();


var Monday=document.getElementsByClassName('Mon');
var Tuesday=document.getElementsByClassName('Tue');
var Wednesday=document.getElementsByClassName('Wed');
var Thursday=document.getElementsByClassName('Thu');
var Friday=document.getElementsByClassName('Fri');
var Saturday=document.getElementsByClassName('Sat');
var Sunday="Выходной";

var day = dt.getDay();

var tr =document.createElement('tr');
var td1 =document.createElement('td');
var td2 =document.createElement('td');
var table=document.createElement('table');

var div=document.createElement('div');
div.className ="dindiv"

var mainDay=document.getElementsByClassName('Day');
var parentElem = document.body;

var week=[Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday];

table.className = "Now";

//week[0]=Monday;
 var i;
 var NOWDAY;

      i=day;
    // table.setAttribute("display", none);
//.borderColor=3px solid black;
       
      div.innerHTML=mainDay[i-1].innerHTML;
      parentElem.insertBefore(div,null);

document.body.appendChild(table);

table.appendChild(tr);
tr.appendChild(td1);
tr.appendChild(td2);
var td3=td1.cloneNode(true);
var td4=td2.cloneNode(true);
tr.appendChild(td3);
tr.appendChild(td4);

for (var j = 1; j<=6; j++) {
  if(j==i){
    NOWDAY=week[j];

  }
 
}



td1.innerHTML=NOWDAY[0].innerHTML;
td2.innerHTML=NOWDAY[1].innerHTML;
td3.innerHTML=NOWDAY[2].innerHTML;
td4.innerHTML=NOWDAY[3].innerHTML;









function fun1() {

var butt=document.getElementById('Name');
var even=document.getElementsByClassName('Even');
var notEven=document.getElementsByClassName('Not-Even');

var box;

if(butt.value =="Нечетная"){

     

	for(var i=0; i<even.length; i++) {

        box=even[i].innerHTML; 
	    even[i].innerHTML=notEven[i].innerHTML;
        notEven[i].innerHTML=box;
		butt.value='Четная';

	}
}else{

		for(var i=0; i<even.length; i++) {

         box=notEven[i].innerHTML;
		 notEven[i].innerHTML=even[i].innerHTML;
         even[i].innerHTML=box;
		 butt.value='Нечетная';	

      }
    }
}

function fun2() {
  var Butt2=document.getElementById('Name');
var MainTable=document.getElementById('Main');
var Butt3=document.getElementById('NowDay');

if(Butt3.value=="Все расписание"){

MainTable.style.display="table";
Butt2.style.display="inline";
Butt3.value="Назад";

table.style.display="none";
div.style.display="none";
}else{
MainTable.style.display="none";
 Butt3.value="Все расписание"; 
 Butt2.style.display="none";

table.style.display="table";
div.style.display="block";
}


}

















