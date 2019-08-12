


window.onload=function makeTable(){

  $.get( "datasource/movies.json", function( data ) {

    var divs = document.getElementsByClassName('tr');
    var divs2 = document.getElementsByClassName('info1');
    var divs3 = document.getElementsByClassName('info2');
    var divs4 = document.getElementsByClassName('info3');
    var divs5 = document.getElementsByClassName('imgs');

    for(var i = 0; i<divs.length;i++) {
        divs[i].setAttribute("id",data.movies[i].name);
        divs2[i].innerHTML=data.movies[i].name;
        divs3[i].innerHTML=data.movie[i].type;
        divs4[i].innerHTML=data.dur[i].duration;
        divs5[i].setAttribute("src",data.images[i].img);
        divs5[i].setAttribute("alt",data.alternative[i].alt);
    }




  });








var days=["Monday,5.8.2019","Tuesday, 6.8.2019.","Wednesday, 7.8.2019.","Thursday,8.8.2019.","Friday,9.8.2019.","Saturday,10.8.2019.","Sunday, 11.8.2019."];
var cinema=["A","B","C","D", "E","F","G","H"];
var time=["12:25","16:40","18:50","13:25","17:40","19:50","15:25","18:40","20:50","15:25","16:40","20:50","12:25","16:40","18:50","12:25","16:40","18:50","12:25","16:40","18:50"];

var table="<table class='table-hover'>";
table+="<tr><th>Movie:</th><th id='"+days[0]+"' onClick='chosenDays(this.id)'>"+days[0]+"</th><th id='"+days[1]+"' onClick='chosenDays(this.id)'>"+days[1]+"</th><th id='"+days[2]+"' onClick='chosenDays(this.id)'>"+days[2]+"</th><th id='"+days[3]+"' onClick='chosenDays(this.id)'>"+days[3]+"</th><th id='"+days[4]+"' onClick='chosenDays(this.id)'>"+days[4]+"</th><th id='"+days[5]+"' onClick='chosenDays(this.id)'>"+days[5]+"</th><th id='"+days[6]+"' onClick='chosenDays(this.id)'>"+days[6]+"</th></tr>";


for(var k=0;k<8;k++){
  table+="<tr class='tr' id='' onClick='showdata(this.id)'><td>"+"<img class='imgs' src='' alt='' />";
  table+="<p id='fnt'><h2 class='info1'>"+''+"</h2></p>";
  table+="<p id='fnt' class='info2'>"+''+"</p>";
  table+="<p id='fnt' class='info3'>"+''+"</p>";
  table+="<p id='fnt' class='info'>Cinema:"+cinema[k]+"</p></td>";
  table+="<td><p id='"+time[0]+"' class='info' onClick='chosenTime(this.id)'>"+time[0]+"</p>";
  table+="<p id='"+time[1]+"' class='info' onClick='chosenTime(this.id)'>"+time[1]+"</p>";
  table+="<p id='"+time[2]+"' class='info' onClick='chosenTime(this.id)'>"+time[2]+"</p></td>";


  table+="<td><p id='"+time[3]+"' class='info' onClick='chosenTime(this.id)'>"+time[3]+"</p>";
  table+="<p id='"+time[4]+"' class='info' onClick='chosenTime(this.id)'>"+time[4]+"</p>";
  table+="<p id='"+time[5]+"' class='info' onClick='chosenTime(this.id)'>"+time[5]+"</p></td>";

  table+="<td><p id='"+time[6]+"' class='info' onClick='chosenTime(this.id)'>"+time[6]+"</p>";
  table+="<p id='"+time[7]+"' class='info' onClick='chosenTime(this.id)'>"+time[7]+"</p>";
  table+="<p id='"+time[8]+"' class='info' onClick='chosenTime(this.id)'>"+time[8]+"</p></td>";


  table+="<td><p id='"+time[9]+"' class='info' onClick='chosenTime(this.id)'>"+time[9]+"</p>";
  table+="<p id='"+time[10]+"' class='info' onClick='chosenTime(this.id)'>"+time[10]+"</p>";
  table+="<p id='"+time[11]+"' class='info' onClick='chosenTime(this.id)'>"+time[11]+"</p></td>";

  table+="<td><p id='"+time[12]+"' class='info' onClick='chosenTime(this.id)'>"+time[12]+"</p>";
  table+="<p id='"+time[13]+"' class='info' onClick='chosenTime(this.id)'>"+time[13]+"</p>";
  table+="<p id='"+time[14]+"' class='info' onClick='chosenTime(this.id)'>"+time[14]+"</p></td>";

  table+="<td><p id='"+time[15]+"' class='info' onClick='chosenTime(this.id)'>"+time[15]+"</p>";
  table+="<p id='"+time[16]+"' class='info' onClick='chosenTime(this.id)'>"+time[16]+"</p>";
  table+="<p id='"+time[17]+"' class='info' onClick='chosenTime(this.id)'>"+time[17]+"</p></td>";

  table+="<td><p id='"+time[18]+"' class='info' onClick='chosenTime(this.id)'>"+time[18]+"</p>";
  table+="<p id='"+time[19]+"' class='info' onClick='chosenTime(this.id)'>"+time[19]+"</p>";
  table+="<p id='"+time[20]+"' class='info' onClick='chosenTime(this.id)'>"+time[20]+"</p></td>";


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
