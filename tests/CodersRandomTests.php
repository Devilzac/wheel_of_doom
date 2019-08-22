<?php
use wheel_of_doom\Coders;
use PHPUnit\Framework\TestCase;

final class CodersRandomTests extends TestCase 
{
    private function testSiSeEligeUnCoderRandom()
    {
    //definiimos el estado inicial = Tenemos un array con los nombres de los coders
        $coders = new Coders();
        $this->assertIsArray(null);
    //ejecutamos el escenario 
        $coders->codersRandom();
    //Comprobamos el escenario
        $this->assertCount(0, ['foo']);
    }
  
}