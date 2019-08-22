<?php
use wheel_of_doom\Sacrificio;
use PHPUnit\Framework\TestCase;

final class SacrificioTests extends TestCase 
{
    public function testSiElSacrificadoCambiaDeEstado()
    {
        //Definimos el esceario del test (el estado inicial)
        $sacrificio = new Sacrificio();
        $this->assertFalse($sacrificio->sacrificado);
        //Ejecutamos el escenario 
        $sacrificio->ejecutar();
        //Comprobamos el resultado
        $this->assertTrue($sacrificio->sacrificado);
    }
}


?>