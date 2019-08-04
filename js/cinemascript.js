window.onload=function getDaysInMonths(){
 var movies=[" Spider-man far from home "," The lion king "," Aladdin "," Angel has fallen "," The nightingale ",
" Once upon a time in Hollywood "," Fast & Furious: Hobbs & Shaw "," Killerman "];
var movieType=["Science fiction","Family","Science fiction","Action","Mistery","Comedy","Action","Action"];
var images=["img/spidermanfaraway.jpg","img/lionking.jpg","img/alladin.jpg","img/angelhasfallen.jpg",
"img/thenightingale.jpg","img/onceuponatimeinholly.jpg","img/hobbsshaw.jpg","img/killerman.jpg"];
var alt=["spiderman","lionking","alladin","angelhasfallen","nightingale","hollywood","hobbsshaw","killerman"];
var duration=[" 2h 9min"," 1h 58min"," 2h 8min", " 2h 8min"," 2h 8min"," 2h 16min"," 2h 41min"," 2h 15min"," 2h 0min"];
var source=[];
for(var i=0;i<images.length;i++){
  source[i]="<img src='"+images[i]+"' alt='"+alt[i]+"'/>";
}
var table="<table>";
table+="<tr><th>Movie:</th><th>Monday, 5.8.2019.</th><th>Tuesday, 6.8.2019.</th><th>Wednesday, 7.8.2019.</th><th>Thursday, 8.8.2019.</th><th>Friday, 9.8.2019.</th><th>Saturday, 10.8.2019.</th><th>Sunday, 11.8.2019.</th></tr>";
for(var k=0;k<movies.length;k++){
  table+="<tr><td>"+source[k];
  table+="<p id='fnt' class='info'><h2>"+movies[k]+"</h2></p>";
  table+="<p id='fnt' class='info'>"+movieType[k]+"</p>";
  table+="<p id='fnt' class='info'>"+duration[k]+"</p></td>";
  table+="<td><p class='info'>"+"12:25"+"</p>";
  table+="<p class='info'>"+"16:40"+"</p>";
  table+="<p class='info'>"+"18:50"+"</p></td>";


  table+="<td><p class='info'>"+"13:25"+"</p>";
  table+="<p class='info'>"+"17:40"+"</p>";
  table+="<p class='info'>"+"19:50"+"</p></td>";

  table+="<td><p class='info'>"+"15:25"+"</p>";
  table+="<p class='info'>"+"18:40"+"</p>";
  table+="<p class='info'>"+"20:50"+"</p></td>";


  table+="<td><p class='info'>"+"15:25"+"</p>";
  table+="<p class='info'>"+"16:40"+"</p>";
  table+="<p class='info'>"+"20:50"+"</p></td>";

  table+="<td><p class='info'>"+"12:25"+"</p>";
  table+="<p class='info'>"+"16:40"+"</p>";
  table+="<p class='info'>"+"18:50"+"</p></td>";

  table+="<td><p class='info'>"+"12:25"+"</p>";
  table+="<p class='info'>"+"16:40"+"</p>";
  table+="<p class='info'>"+"18:50"+"</p></td>";

  table+="<td><p class='info'>"+"12:25"+"</p>";
  table+="<p class='info'>"+"16:40"+"</p>";
  table+="<p class='info'>"+"18:50"+"</p></td>";


  table+="</tr>";
}



table+="</table>";
var reference=document.getElementById("schedule").innerHTML=table;
return reference;

}
function markGreen(){
  return document.getElementById('markMovie').style.backgroundColor="green";
}
