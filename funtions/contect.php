<?php
$con = mysqli_connect("localhost","root","","wheel");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $sql = "SELECT user_id, name, dead FROM `doom_users`";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["user_id"]. " - Name: " . $row["name"]. " " . $row["dead"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
