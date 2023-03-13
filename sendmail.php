<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('info@ctb72.ru', 'Винтовые сваи купить по выгодной цене');

//Кому отправить
$mail->addAddress('info@ctb72.ru');

//Тема письма
$mail->Subject = 'Ура! Новый заказ!';

//Тело письма
$body = '<h1>У нас есть заказ!</h1>';

//if (trim(!empty($_POST['name']))) {
//	$body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
//}

if (trim(!empty($_POST['pipe-diameter']))) {
	$body .= '<p><strong>диаметр трубы:</strong> ' . $_POST['pipe-diameter'] . '</p>';
}
if (trim(!empty($_POST['blade-diameter']))) {
	$body .= '<p><strong>диаметр лопасти:</strong> ' . $_POST['blade-diameter'] . '</p>';
}
if (trim(!empty($_POST['pipe-length']))) {
	$body .= '<p><strong>длина трубы:</strong> ' . $_POST['pipe-length'] . '</p>';
}



if (trim(!empty($_POST['email']))) {
	$body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['phone']))) {
	$body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p>';
}
if (trim(!empty($_POST['policy-yes']))) {
	$body .= '<p><strong>Я согласен(-на) с условиями политики конфиденциальности:</strong> ' . $_POST['policy-yes'] . '</p>';
}
//if (trim(!empty($_POST['pass']))) {
//	$body .= '<p><strong>Пароль:</strong> ' . $_POST['pass'] . '</p>';
//}
//if (trim(!empty($_POST['policy-yes']))) {
//	if (isset($_POST['policy-yes'])) {
//		$news_add = $_POST['policy-yes'];
//		$news_addthis = '';
//		for ($a = 0; $a < count($news_add); $a++) {
//			//записываем все нажатые чекбоксы в строку через ## Например: 1##2##
//			$news_addthis .= $news_add[$a] . '';
//		}
//		$body .= '<p><strong>Я согласен(-на) с условиями политики конфиденциальности:</strong> ' . $news_addthis . '</p>';
//	}
//}
//if (trim(!empty($_POST['select']))) {
//	$body .= '<p><strong>Number:</strong> ' . $_POST['select'] . '</p>';
//}
//if(trim(!empty($_POST['age']))){
//	$body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
//}

//if(trim(!empty($_POST['message']))){
//	$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
//}


$mail->Body = $body;

//Отправляем
if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
