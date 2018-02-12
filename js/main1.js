
/*var dt = new Date();
var day = dt.getDay();

var div=document.createElement('div');
var table1=document.createElement('table');
var mainDay=document.getElementsByClassName('Day');
var parentElem = document.body;

 var i;

      i=day;
      div.innerHTML=mainDay[i].innerHTML;
      parentElem.insertBefore(div,null);

      parentElem.insertBefore(table1,null);
      tabel1.border:"2em";*/

     

  








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