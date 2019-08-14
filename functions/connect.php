<?php
$con = mysqli_connect("databases.000webhost.com","id10498543_kavan","qwertyh12","id10498543_wheel");
echo $con;
// Check connection

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  $nombreMuerto = isset($_GET["nombre"]);
  if(isset($_GET["nombre"])){

  }
  $sql = "SELECT * FROM `doom_users` WHERE name = $nombreMuerto";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {

        echo "id: " . $row["user_id"]. " - Name: " . $row["name"]. " " . $row["dead"]. "<br>";
    }
} else {
    echo "0 results";
}
$con->close();

    
?>
