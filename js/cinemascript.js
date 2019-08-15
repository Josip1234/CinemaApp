function createSeats(){

  var table="<h2>Sitting plan</h2>";
  table+="<table class='table'>"
  table+="<tr>";
  table+="<th>Seats</th>";
  table+="<th id='x'>Sector X</th>";
  table+="<th id='y'>Sector Y</th>";
  table+="<th id='u'>Sector U</th>";
  table+="<th id='z'>Sector Z</th>";
  table+="</tr>";
  table+="<tr>";
  table+="<td class='nh' id='a'>"+"Sector A"+"</td>";
  table+="<td class='nh'>";
  for(var num=1;num<16;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=16;num<31;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=31;num<46;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=46;num<61;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="</tr>";
  table+="<tr>";
  table+="<td class='nh' id='b'>"+"Sector B"+"</td>";
  table+="<td class='nh'>";
  for(var num=61;num<76;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=76;num<91;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=91;num<106;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=106;num<121;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="</tr>";
  table+="<tr>";
  table+="<td class='nh' id='c'>"+"Sector C"+"</td>";
  table+="<td class='nh'>";
  for(var num=121;num<136;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=136;num<151;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=151;num<166;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=166;num<181;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="</tr>";
  table+="<tr>";
  table+="<td class='nh' id='d'>"+"Sector D"+"</td>";
  table+="<td class='nh'>";
  for(var num=181;num<196;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="<td class='nh'>";
  for(var num=196;num<211;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";

  table+="<td class='nh'>";
  for(var num=211;num<226;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";

  table+="<td class='nh'>";
  for(var num=226;num<241;num++){
    table+="<p id='"+num+"'>"+num+"</p>";
  }
  table+="</td>";
  table+="</tr>";
  return document.getElementById('seats').innerHTML=table;
}


function countTotal(){

  var getValue=document.getElementById("priceCategory").value;
  var getTicketAmount=document.getElementById("ticketAmount").value;
  var price=document.getElementById("ticketprice").innerHTML;



  if((getValue==''||(getTicketAmount=='' || getTicketAmount==0))||(price==''||price==0)){

  }else{

    var result=document.getElementById('totalprice').innerHTML=(getTicketAmount*price).toFixed(2);
    var ticketcategory=document.getElementById('ticketcategory').value=getValue;
    var ticketamount=document.getElementById('ticketamount').value=getTicketAmount;
    var price=document.getElementById('price').value=price;
    var total=document.getElementById('total').value=result;
  }


}

function chooseTicketOptions(){

  $.get( "datasource/ticket.json", function( ticket ) {
      var getPriceCategory=document.getElementsByClassName('ticket');
      var discount=document.getElementById('discount');
      var getValue=document.getElementById("priceCategory").value;


       for(var num=0;num<getPriceCategory.length;num++){
         getPriceCategory[num].value=ticket.tickets[num].option;
         getPriceCategory[num].innerHTML=ticket.tickets[num].option;


       }

  });
  var table="<h2>Ticket options:</h2>";
  table+="<table class='table'>";
  table+="<tr>";
  table+="<th>Price category:</th>";
  table+="<th>Ticket amount:</th>";
  table+="<th>Price:</th>";
  table+="<th>Total:</th>";
  table+="</tr>";
  table+="<tr>";
  table+="<td class='nh'><div class='form-group'><select class='form-control' id='priceCategory' name='pc'>";
  table+="<option value=''></option>";
  for(var i=0;i<5;i++){
    table+="<option class='ticket'></option>";
  }

  table+="</select></div></td>";
  table+="<td class='nh'><div class='form-group'><input class='form-control' id='ticketAmount' type='number' max='' min='1' onchange='countTotal()'></div></td>";
  table+="<td class='nh'><p id='ticketprice'>"+''+"</p>";
  table+="</td>";

  table+="<td class='nh'><p id='totalprice'>"+''+"</p>";
  table+="</td>";
  table+="</tr>";
  table+="</table>";
  document.getElementById('sittingplan').innerHTML=table;

}


window.onload=function makeTable(){
  createSeats();
  chooseTicketOptions();
  hideSecondSection();

  $.get( "datasource/movies.json", function( data ) {

    var divs = document.getElementsByClassName('tr');
    var divs2 = document.getElementsByClassName('info1');
    var divs3 = document.getElementsByClassName('info2');
    var divs4 = document.getElementsByClassName('info3');
    var divs5 = document.getElementsByClassName('imgs');
    var divs6 = document.getElementsByClassName('day');
    var divs7 = document.getElementsByClassName('info4');
    var divs8=document.getElementsByClassName('time');
    var ticketprice=document.getElementById('ticketprice');

    $.get("datasource/selectedMovie.json",function(selected){
      var tickets=document.getElementById('ticketAmount');





    var index=0;
    while(index<divs6.length){
      divs6[index].setAttribute("id",data.days[index].date);
      divs6[index].innerHTML=data.days[index].date;
      index++;
    }




    for(var i = 0; i<divs.length;i++) {
        divs[i].setAttribute("id",data.movies[i].name);
        divs2[i].innerHTML=data.movies[i].name;
        divs3[i].innerHTML=data.movie[i].type;
        divs4[i].innerHTML=data.dur[i].duration;
        divs5[i].setAttribute("src",data.images[i].img);
        divs5[i].setAttribute("alt",data.alternative[i].alt);
        divs7[i].innerHTML=data.cinem[i].hall;

        if(selected.movie==data.movies[i].name){
          tickets.setAttribute("max",data.movies[i].available);
          ticketprice.innerHTML=data.price[i].fullprice;

        }





    }
    for(var timeOfMovie=0;timeOfMovie<divs8.length;timeOfMovie++){
      divs8[timeOfMovie].setAttribute("id",data.time[timeOfMovie].timeOfShow);
      divs8[timeOfMovie].innerHTML=data.time[timeOfMovie].timeOfShow;
    }



});
  });










var table="<table class='table-hover'>";
table+="<tr>";
table+="<th>Movie:</th>";
for(var p=0;p<7;p++){
  table+="<th class='day' id='' onClick='chosenDays(this.id)'>"+''+"</th>";
}

table+="</tr>";

for(var k=0;k<8;k++){
  table+="<tr class='tr' id='' onClick='showdata(this.id)'><td>"+"<img class='imgs' src='' alt='' />";
  table+="<p id='fnt'><h2 class='info1'>"+''+"</h2></p>";
  table+="<p id='fnt' class='info2'>"+''+"</p>";
  table+="<p id='fnt' class='info3'>"+''+"</p>";
  table+="<p id='fnt' class='info4'>"+''+"</p>";
  table+="</td>";

table+="<td>";
for(var data=0;data<20;data++){
  if(data==3){
    table+="</td><td>";
  }else if(data==6){
      table+="</td><td>";
  }else if(data==9){
    table+="</td><td>";
  }else if(data==12){
    table+="</td><td>";
  }else if(data==14){
    table+="</td><td>";
  }else if(data==17){
    table+="</td><td>";
  }else if(data==20){
    table+="</td><td>";
  }
table+="<p id='"+''+"' class='time' onClick='chosenTime(this.id)'>"+''+"</p>";




}
  table+="</td>";




  table+="</tr>";
}

table+="</table>";
var reference=document.getElementById("schedule").innerHTML=table;
return reference;

}
function markGreen(){
  return document.getElementById('markMovie').style.backgroundColor="green";
}
function showdata(id){
  return document.getElementById('movie').value=id;
}
function chosenDays(day){

  return document.getElementById('days').value=day;
}
function chosenTime(time){
  return document.getElementById('time').value=time;
}
function chosenProjections(movie,day,time){
  alert("You have chosen:"+movie+"on"+day+" "+time);
}
function showSecondSection(){

hideFirstSection();
document.getElementById('section2').style.display="initial";
}
function hideSecondSection(){
  document.getElementById('section2').style.display="none";
}
function hideFirstSection(){
  return document.getElementById('section1').style.display="none";
}
function showFirstSection(){
  hideSecondSection();
  return document.getElementById('section1').style.display="initial";
}
