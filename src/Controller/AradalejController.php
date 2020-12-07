<?php
namespace Drupal\aradalej\Controller;
use Drupal\Core\Controller\ControllerBase;
class AradalejController extends ControllerBase {
    public function content() {
        return array(
            '#type' => 'markup',
            '#markup' => $this->t('<div id="render-ad"></div>'),
        );
    }
    public function test(){
        return array(
            '#type' => 'markup',
            '#markup' => $this->t('Welcome AradaLej Test'),
        );  
      }
}