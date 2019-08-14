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


    $movie=$_POST['movie'];
    $days=$_POST['days'];
    $time=$_POST['time'];
    $array=array('movie'=>$movie,'days'=>$days,'time'=>$time);
    $json_data = json_encode($array);
    file_put_contents('datasource/selectedMovie.json', $json_data);
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
        </seection>
      </div>
    </div>
   </div>
  </body>
</html>
