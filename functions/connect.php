<?php
$con = mysqli_connect("localhost","root","","wheel");

// Check connection

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  if(isset($_GET["name"])){
    $nombreMuerto = $_GET["name"];
  }
  $sql = "SELECT * FROM `doom_users` WHERE name = $nombreMuerto";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

         $candidatos[]=$row;

    }
    echo json_encode($candidatos);

    
    
}
$con->close();

    
?>
