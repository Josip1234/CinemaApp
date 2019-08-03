window.onload=function getDaysInMonths(){
  var months = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];
  var daysInMonths=[31,28,31,30,31,30,31,31,30,31,30,31];
  var monthsLength=months.length;
  var days=[];
  for(var i=0;i<monthsLength;i++){
    for(var j=0;j<daysInMonths.length;j++){
      if(i==j) {
          days+=months[i]+"="+daysInMonths[j]+"<br>";
          break;

      }else {continue};
    }

  }
  var table=[];
    /*
 for(var i=0;i<monthsLength;i++){
   month+=months[i]+",";
   if(i==3) {break;};

 }
 */
  var reference=document.getElementById("schedule").innerHTML = days;
  return reference;


}
