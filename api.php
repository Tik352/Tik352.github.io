<?php
  $text = "ничего нет";
  if(isset($_GET['text'])){
    $text = $_GET['text'];
  }
  echo "$text <br> Идите нахуй пожалуйста";
?>
