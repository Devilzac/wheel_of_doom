<?php
  
  if(isset($_POST['getUsersOrUpdate']) && !empty($_POST['getUsersOrUpdate'])) {
    $action = $_POST['getUsersOrUpdate'];
    switch($action) {
      case 'getAllUsers' : getAllUsers();break;
      case 'getAllDeadUsers' : getAllDeadUsers();break;
      case 'reset' : resetDead();break;
        default : updateUser($action);break;
    }
}







function getAllUsers(){
  $con = mysqli_connect("localhost","root","","wheel");  
  // Check connection  
  if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }   
  $sql0 = "SELECT * FROM user";
 // echo $sql0;
  
  $result = $con->query($sql0);
 
  if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        $candidatos[]=$row;
      }
      echo json_encode($candidatos); 
  }  
  $con->close();
}








function getAllDeadUsers(){
  $con = mysqli_connect("localhost","root","","wheel");  
  // Check connection  
  if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }   
  $sql1 = "SELECT * FROM user WHERE dead=0";
//echo $sql1;

  $result = $con->query($sql1);
 
  if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        $candidatos[]=$row;
      }
      echo json_encode($candidatos); 
  }  
  $con->close();
}







function updateUser($name){
  $con = mysqli_connect("localhost","root","","wheel");  
  // Check connection  
  if (mysqli_connect_errno())
    {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }   
  $sql2 = "UPDATE user SET dead=1 WHERE name='$name'";
  echo $sql2;
  if(mysqli_query($con, $sql2)){
    echo "Records were updated successfully.";
} else {
    echo "ERROR: Could not able to execute $sql2. " . mysqli_error($con);
}

}


function resetDead(){
      $con = mysqli_connect("localhost","root","","wheel");  
      // Check connection  
      if (mysqli_connect_errno())
        {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }   
      $sql4 = "UPDATE user SET dead=0";
      echo $sql4;
      if(mysqli_query($con, $sql4)){
        echo "Dead people were reseted successfully.";
    } else {
        echo "ERROR: Could not able to execute $sql4. " . mysqli_error($con);
    }
  
}


    
?>
