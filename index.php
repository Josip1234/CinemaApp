<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Cinema App</title>
    <script src="js/cinemascript.js"></script>
    <link rel="stylesheet" type="text/css" href="css/cinemastyle.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <p id="test"></p>
   <div class="container-fluid">
     <div class="row">
       <div class="col">
     <nav>
      <ul class="nav">
        <li class="nav-item">
        <a class="nav-link" href="#">Available shows </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Tickets </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Seats </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Billing</a>
        </li>
        </ul>
     </nav>
     </div>
     </div>
     <div class="row">
       <div class="col">
    <section>
    <h2>Choose your show:</h2>

    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
     <section id="schedule">
     </section>
     <input id="movie" type="hidden" name="movie" value="">
      <input id="days" type="hidden" name="days" value="">
      <input id="time" type="hidden" name="time" value="">
     <input  name="submit" type="submit" value="Submit">
   </form>
  <?php
  if($_SERVER['REQUEST_METHOD']=='POST'){


    $movie=$_POST['movie'];
    $days=$_POST['days'];
    $time=$_POST['time'];
    echo $movie."<br>".$days."<br>".$time;
  }
  ?>
    </section>
    </div>
    </div>
   </div>
  </body>
</html>
