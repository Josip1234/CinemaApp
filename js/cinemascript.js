


window.onload=function makeTable(){

  $.get( "datasource/movies.json", function( data ) {

    var divs = document.getElementsByClassName('tr');
    var divs2 = document.getElementsByClassName('info1');
    var divs3 = document.getElementsByClassName('info2');
    var divs4 = document.getElementsByClassName('info3');
    var divs5 = document.getElementsByClassName('imgs');
    var divs6 = document.getElementsByClassName('day');
    var divs7 = document.getElementsByClassName('info4');
    var divs8=document.getElementsByClassName('time');



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




    }
    for(var timeOfMovie=0;timeOfMovie<divs8.length;timeOfMovie++){
      divs8[timeOfMovie].setAttribute("id",data.time[timeOfMovie].timeOfShow);
      divs8[timeOfMovie].innerHTML=data.time[timeOfMovie].timeOfShow;
    }




  });










var time=["12:25","16:40","18:50","13:25","17:40","19:50","15:25","18:40","20:50","15:25","16:40","20:50","12:25","16:40","18:50","12:25","16:40","18:50","12:25","16:40","18:50"];

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
}
function hideFirstSection(){
  return document.getElementById('section1').style.display="none";
}
function showFirstSection(){
  return document.getElementById('section1').style.display="initial";
}
