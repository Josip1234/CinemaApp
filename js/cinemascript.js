window.onload=function getDaysInMonths(){
 var movies=[" Spider-man far from home "," The lion king "," Aladdin "," Angel has fallen "," The nightingale ",
" Once upon a time in Hollywood "," Fast & Furious: Hobbs & Shaw "," Killerman "];
var movieType=["Science fiction","Family","Science fiction","Action","Mistery","Comedy","Action","Action"];
var images=["img/spidermanfaraway.jpg","img/lionking.jpg","img/alladin.jpg","img/angelhasfallen.jpg",
"img/thenightingale.jpg","img/onceuponatimeinholly.jpg","img/hobbsshaw.jpg","img/killerman.jpg"];
var alt=["spiderman","lionking","alladin","angelhasfallen","nightingale","hollywood","hobbsshaw","killerman"];
var duration=[" 2h 9min","1h 58min","2h 8min", " 2h 8min"," 2h 8min"," 2h 16min"," 2h 41min"," 2h 15min"," 2h 0min"];
var source=[];
for(var i=0;i<images.length;i++){
  source[i]="<img src='"+images[i]+"' alt='"+alt[i]+"'/>";
}
var table="<table>";
table+="<tr>";
table+="<td>";
table+="<strong>Movie:</strong>";
table+="</td>";
table+="</tr>";

for(var k=0;k<movies.length;k++){
  table+="<tr><td>"+source[k];
  table+=movies[k];
  table+=movieType[k];
  table+=duration[k]+"</td>";
  table+="</tr>";

}

table+="</table>";
var reference=document.getElementById("schedule").innerHTML=table;
return reference;

}
