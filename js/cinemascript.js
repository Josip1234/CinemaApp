


window.onload=function makeTable(){

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
    }
  };
  xmlhttp.open("GET", "datasource/movies.json", true);
  xmlhttp.send();





 var movies=[" Spider-man far from home "," The lion king "," Aladdin "," Angel has fallen "," The nightingale ",
" Once upon a time in Hollywood "," Fast & Furious: Hobbs & Shaw "," Killerman "];

var movieType=["Science fiction","Family","Science fiction","Action","Mistery","Comedy","Action","Action"];
var images=["img/spidermanfaraway.jpg","img/lionking.jpg","img/alladin.jpg","img/angelhasfallen.jpg",
"img/thenightingale.jpg","img/onceuponatimeinholly.jpg","img/hobbsshaw.jpg","img/killerman.jpg"];
var alt=["spiderman","lionking","alladin","angelhasfallen","nightingale","hollywood","hobbsshaw","killerman"];
var duration=[" 2h 9min"," 1h 58min"," 2h 8min", " 2h 8min"," 2h 8min"," 2h 16min"," 2h 41min"," 2h 15min"," 2h 0min"];
var source=[];
var days=["Monday,5.8.2019","Tuesday, 6.8.2019.","Wednesday, 7.8.2019.","Thursday,8.8.2019.","Friday,9.8.2019.","Saturday,10.8.2019.","Sunday, 11.8.2019."];
var cinema=["A","B","C","D", "E","F","G","H"];
var time=["12:25","16:40","18:50","13:25","17:40","19:50","15:25","18:40","20:50","15:25","16:40","20:50","12:25","16:40","18:50","12:25","16:40","18:50","12:25","16:40","18:50"];
for(var i=0;i<images.length;i++){
  source[i]="<img src='"+images[i]+"' alt='"+alt[i]+"'/>";
}
var table="<table class='table-hover'>";
table+="<tr><th>Movie:</th><th id='"+days[0]+"' onClick='chosenDays(this.id)'>"+days[0]+"</th><th id='"+days[1]+"' onClick='chosenDays(this.id)'>"+days[1]+"</th><th id='"+days[2]+"' onClick='chosenDays(this.id)'>"+days[2]+"</th><th id='"+days[3]+"' onClick='chosenDays(this.id)'>"+days[3]+"</th><th id='"+days[4]+"' onClick='chosenDays(this.id)'>"+days[4]+"</th><th id='"+days[5]+"' onClick='chosenDays(this.id)'>"+days[5]+"</th><th id='"+days[6]+"' onClick='chosenDays(this.id)'>"+days[6]+"</th></tr>";


for(var k=0;k<8;k++){
  table+="<tr id='"+movies[k]+"' onClick='showdata(this.id)'><td>"+source[k];
  table+="<p id='fnt'  class='info'><h2>"+movies[k]+"</h2></p>";
  table+="<p id='fnt' class='info'>"+movieType[k]+"</p>";
  table+="<p id='fnt' class='info'>"+duration[k]+"</p>";
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
