<?php
namespace wheel_of_doom;
final class Coders
{
  public $coders = array("Delfina","andres","ericonka");  
  public function codersRandom()
  {
    $sacrificioElegido = array_rand($coders, 1); 
    echo $coders[$sacrificioElegido];  
}

?>