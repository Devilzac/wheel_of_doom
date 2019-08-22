<?php
namespace wheel_of_doom;
final class Sacrificio 
{
    public $sacrificado = false;
    public function ejecutar()
    {
        $this ->sacrificado = true;
    }
}