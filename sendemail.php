<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['nom']) && !empty($_POST['nom'])){
  $prenom = $_POST['prenom'];
  $nom = $_POST['nom'];
  $email = $_POST['email'];
  $sujet = $_POST['sujet'];
  $message = $_POST['message'];

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail = new PHPMailer();
    $mail->IsSMTP();      
    $mail->Host = 'smtp.gmail.com';               //Adresse IP ou DNS du serveur SMTP
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'enkishabbol@gmail.com';                     //SMTP username
    $mail->Password   = 'iecjxksylzaltcmw';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email, 'Contact PortFolio');
    $mail->addAddress("Aiden.974@hotmail.com", 'Jonathan');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $sujet;
    $mail->Body    = $prenom . " " .$nom . " a envoyé le message suivant : " . $message . " . Via l'adresse mail " . $email;

    $mail->send();
    header('Location: ./index.html');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>
      