<?php
header("Content-Type: text/plain; charset=utf-8");

  $text = "ничего нет";
  $another_text = "и тут тоже";
  if(isset($_GET['text'])){
    $text = $_GET['text'];
  }
  if(isset($_GET['another_text'])){
    $another_text = $_GET['another_text'];
  }
  echo "$text <br> Идите нахуй пожалуйста <br> $another_text <br> да ты охуел";
?>
