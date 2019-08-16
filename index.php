<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cinema App</title>
    <script src="js/cinemascript.js"></script>
    <link rel="stylesheet" type="text/css" href="css/cinemastyle.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>


   <div class="container-fluid">

     <div class="row">
       <div class="col">
    <section id="section1">
    <h2>Choose your show:</h2>

    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
     <section id="schedule">
     </section>
     <input id="movie" type="hidden" name="movie" value="">
      <input id="days" type="hidden" name="days" value="">
      <input id="time" type="hidden" name="time" value="">
      

     <input  name="submit" type="submit" value="Submit">

   </form>
     <button type="button" class="btn btn-primary" onclick="showSecondSection()">Tickets</button>
  <?php
  if($_SERVER['REQUEST_METHOD']=='POST'){


    $movie=$_POST['movie'] ?? '';
    $days=$_POST['days'] ?? '';
    $time=$_POST['time'] ?? '';

    if(($movie=='' || $days=='') || $time==''){

    }else{
      $array=array('movie'=>$movie,'days'=>$days,'time'=>$time);
      $json_data = json_encode($array);
      file_put_contents('datasource/selectedMovie.json', $json_data);
    }


    $ticketcategory=$_POST['ticketcategory']?? '';
    $ticketamount=$_POST['ticketamount']?? '';
    $price=$_POST['price']?? '';
    $seatNumber=$_POST['seatNumber']?? '';
    $sector1=$_POST['sector1'] ?? '';
    $sector2=$_POST['sector2']?? '';

    $discount='';
    if($ticketcategory=="Children 5-10 years"){
         $discount=75/100;
    }else if($ticketcategory=="Children 10-14 years"){
         $discount=65/100;
    }else if($ticketcategory=="Young adult 14-18 years"){
        $discount=56/100;
}else if($ticketcategory=="Regular student 19-25 years"){
       $discount=50/100;
}else if($ticketcategory=="Adult"){
     $discount="0";
}
    $total=$_POST['total'] ?? '';

     if(((($sector2==''||$total=='')||($seatNumber==''|| $sector1=='')))||((($ticketcategory==''|| $ticketamount=='')||($price==''||$discount=='')))){

     }else{
       $array=array('ticketcategory'=>$ticketcategory,'ticketamount'=>$ticketamount,'price'=>$price,'discount'=>$discount,'total'=>$total,'seatNo'=>$seatNumber,'sector1'=>$sector1,'sector2'=>$sector2);
       $json_data = json_encode($array);
       file_put_contents('datasource/ticketDetails.json', $json_data);
     }


  }
  ?>
    </section>
    </div>
    </div>
    <div class="row">
      <div class="col">
        <section id="section2">

           <section id="sittingplan">
           </section>
           <section id="seats">

           </section>
           <section id="form2">
             <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">

              <input id="ticketcategory" type="hidden" name="ticketcategory" value="">
               <input id="ticketamount" type="hidden" name="ticketamount" value="">
               <input id="price" type="hidden" name="price" value="">
              <input id="total" type="hidden" name="total" value="">
              <input id="seatNumber" type="hidden" name="seatNumber" value="">
              <input id="sector1" type="hidden" name="sector1" value="">
              <input id="sector2" type="hidden" name="sector2" value="">

              <input  name="submit" type="submit" value="Submit">

            </form>
             <button type="button" class="btn btn-primary" onclick="showSelectedMovieDetails(),showBilling()">Billing</button>
           </section>

        </section>
      </div>
    </div>
    <div class="row">
      <div class="col">
      <section id="billing">
        <h2>Your bill:</h2>
        <section id="showdetails">

        </section>
        <section id="ticketDetails">
         <h2>Ticket details:</h2>
        </section>
      </section>
    </div>
    </div>
   </div>
  </body>
</html>
