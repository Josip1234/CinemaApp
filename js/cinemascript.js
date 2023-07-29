function hideBilling(){
  document.getElementById('billing').style.display='none';
}
function showBilling(){
  hideFirstSection();
  hideSecondSection();
  document.getElementById('billing').style.display='initial';
}
function checkValue(value){
  var starts=value.startsWith('green');

  if(starts==true){
      var num = value.replace(/\D/g,'');
      document.getElementById('seatNumber').value=num;
      getSeat(num);
  }else if(starts=value.startsWith('red')==true){
    alert("This seat is taken. Please, choose another seat.")
  }



}
 function showSelectedMovieDetails(){
   jQuery.ajaxSetup({ cache: false });


$.get( "datasource/movies.json", function(data) {

  var moviedetail=document.getElementsByClassName('moviedetail');

  $.get( "datasource/selectedMovie.json", function( movie ) {


    for (i in data.movies) {
      var index=0;
      if(movie.movie==data.movies[i].name){
        index=i;
        var table="<table>";
        table+="<tr>";
        table+="<th>"+"Movie"+"</th>";
        table+="<th>"+"Date and day of the movie:"+"</th>";
        table+="<th>"+"Time of the movie:"+"</th>";
        table+="<th>"+"Movie type:"+"</th>";
        table+="<th>"+"Movie duration:"+"</th>";
        table+="<th>"+"Cinema hall:"+"</th>";
        table+="</tr>";
        table+="<tr>";
        table+="<td class='nh'>"+movie.movie+"</td>";
        table+="<td class='nh'>"+movie.days+"</td>";
        table+="<td class='nh'>"+movie.time+"</td>";
        table+="<td class='nh'>"+data.movie[index].type+"</td>";
        table+="<td class='nh'>"+data.dur[index].duration+"</td>";
        table+="<td class='nh'>"+data.cinem[index].hall+"</td>";
        table+="</tr>";
        table+="</table>";
        document.getElementById('showdetails').innerHTML=table;
        break;
      }

    }

  });
});

  $.get( "datasource/ticketDetails.json", function(data ) {
    if(data.discount=="0"){
      count=data.price;
    }else{
      var count=(data.total*data.discount).toFixed(2);

    }
    var makeT="<h2>Ticket details:</h2>";
     makeT+="<table>";
     makeT+="<tr>";
     makeT+="<th>"+"Ticket category:"+"</th>";
     makeT+="<th>"+"Ticket amount:"+"</th>";
     makeT+="<th>"+"Full price:"+"</th>";
     makeT+="<th>"+"Ticket discount:"+"</th>";
     makeT+="<th>"+"Price with discount:"+"</th>";
     makeT+="<th>"+"Seat number:"+"</th>";
     makeT+="<th>"+"Location of seats:"+"</th>";
     makeT+="</tr>";
     makeT+="<tr>";
     makeT+="<td>"+data.ticketcategory+"</td>";
     makeT+="<td>"+data.ticketamount+"</td>";
     makeT+="<td>"+data.price+"</td>";
     makeT+="<td>"+data.discount+"</td>";
     makeT+="<td>"+count+"</td>";
     makeT+="<td>"+data.seatNo+"</td>";
     makeT+="<td>"+data.sector1+" "+data.sector2+"</td>";

     makeT+="</tr>";
     makeT+="</table>";
     document.getElementById('ticketDetails').innerHTML=makeT;


  });
}
function getSeat(number){
  if(number<=5){
    var a=document.getElementById('a').innerHTML;
    var th=document.getElementById('x').innerHTML;
    document.getElementById('sector1').value=a;
    document.getElementById('sector2').value=th;

  }else if(number>5 && number<=10){
    var a=document.getElementById('a').innerHTML;
    var th=document.getElementById('y').innerHTML;
    document.getElementById('sector1').value=a;
    document.getElementById('sector2').value=th;
  }else if(number>10 && number<=15){
    var a=document.getElementById('a').innerHTML;
    var th=document.getElementById('u').innerHTML;
    document.getElementById('sector1').value=a;
    document.getElementById('sector2').value=th;
  }else if(number>15 && number<=20){
    var a=document.getElementById('a').innerHTML;
    var th=document.getElementById('z').innerHTML;
    document.getElementById('sector1').value=a;
    document.getElementById('sector2').value=th;
  }else if(number>20 && number<=25){
    var b=document.getElementById('b').innerHTML;
    var th=document.getElementById('x').innerHTML;
    document.getElementById('sector1').value=b;
    document.getElementById('sector2').value=th;
  }else if(number>25 && number<=30){
    var b=document.getElementById('b').innerHTML;
    var th=document.getElementById('y').innerHTML;
    document.getElementById('sector1').value=b;
    document.getElementById('sector2').value=th;
  }else if(number>30 && number<=35){
    var b=document.getElementById('b').innerHTML;
    var th=document.getElementById('u').innerHTML;
    document.getElementById('sector1').value=b;
    document.getElementById('sector2').value=th;
  }else if(number>35 && number<=40){
    var b=document.getElementById('b').innerHTML;
    var th=document.getElementById('z').innerHTML;
    document.getElementById('sector1').value=b;
    document.getElementById('sector2').value=th;
  }else if(number>40 && number<=45){
    var c=document.getElementById('c').innerHTML;
    var th=document.getElementById('x').innerHTML;
    document.getElementById('sector1').value=c;
    document.getElementById('sector2').value=th;
  }else if(number>45 && number<=50){
    var c=document.getElementById('c').innerHTML;
    var th=document.getElementById('y').innerHTML;
    document.getElementById('sector1').value=c;
    document.getElementById('sector2').value=th;
  }else if(number>50 && number<=55){
    var c=document.getElementById('c').innerHTML;
    var th=document.getElementById('u').innerHTML;
    document.getElementById('sector1').value=c;
    document.getElementById('sector2').value=th;
  }  else if(number>55 && number<=60){
    var c=document.getElementById('c').innerHTML;
    var th=document.getElementById('z').innerHTML;
    document.getElementById('sector1').value=c;
    document.getElementById('sector2').value=th;
  }



}
function takenSeat(red,num){
  return "<p  id='"+num+"'>"+"<img onClick='checkValue(this.id)' id='"+red+num+"'"+"src='img/redchairicon.png' alt='red'>"+"</p>";
}
function freeSeat(green,num){
  return "<p id='"+num+"'>"+"<img onClick='checkValue(this.id)' id='"+green+num+"'"+"src='img/greenchairicon.png' alt='green'>"+"</p>";

}
function createSector(sector){
  var table="<tr>";
  table+="<td class='nh' id='a'>"+"Sector "+sector+"</td>";
  return table;
}
function createTableData(){
  return "<td class='nh'>";
}
function closeTableData(){
  return "</td>";
}
function makeTableRow(){
  return "<tr>";
}
function closeTableRow(){
  return "</tr>";
}
function randInteger(value){
  return Math.floor(Math.random() * value);
}
function generateRandom(value){
  var random=randInteger(2);
  var red="red";
  var green="green";
  if(random==0){
    value=freeSeat(green,value);
  }else{
    value=takenSeat(red,value);
  }
  return value;
}

function createSeats(){

  var table="<h2>Sitting plan</h2>";
  table+="<table class='table'>"
  table+=makeTableRow();
  table+="<th>Seats</th>";
  table+="<th id='x'>Sector X</th>";
  table+="<th id='y'>Sector Y</th>";
  table+="<th id='u'>Sector U</th>";
  table+="<th id='z'>Sector Z</th>";
  table+=closeTableRow();



var limit;




  var green="green";
  var red="red";

  table+=makeTableRow();
  table+=createSector("A");
  table+=createTableData();
  for(var i=1;i<6;i++){
     table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=6;i<11;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=11;i<16;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=16;i<21;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();
  table+=closeTableRow();
  table+=makeTableRow();
  table+=createSector("B");

  table+=createTableData();
  for(var i=21;i<26;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=26;i<31;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=31;i<36;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=36;i<41;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=closeTableRow();
  table+=makeTableRow();
  table+=createSector("C");

  table+=createTableData();
  for(var i=41;i<46;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=46;i<51;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=51;i<56;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();

  table+=createTableData();
  for(var i=56;i<61;i++){
    table+=generateRandom(i);
  }
  table+=closeTableData();
  table+=closeTableRow();
  table+="</table>";


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
  table+="<th>Ticket category:</th>";
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
  hideBilling();
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
    var divs9 = document.getElementsByClassName('info5');
    var ticketprice=document.getElementById('ticketprice');
    var divs10 = document.getElementsByClassName('info6');

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
        divs9[i].innerHTML=data.movies[i].available;
        divs10[i].innerHTML=data.movies[i].sold;
        divs10[i].setAttribute("id",data.movies[i].sold);

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
  table+="<span>Available:<span id='fnt' class='info5'>"+''+"</span></span><br><br>";
  table+="<span>Sold:<span id='sold' class='info6'>"+''+"</span></span>";
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
hideBilling();
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
