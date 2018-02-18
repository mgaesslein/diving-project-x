<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'lib/PHPMailer/src/Exception.php';
require 'lib/PHPMailer/src/PHPMailer.php';
require 'lib/PHPMailer/src/SMTP.php';

if (isset($_POST['email'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "aljaz.gantar94@gmail.com";
    
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['message']; // required
    $subject = $_POST['subject']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $name)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
    }

    if (strlen($message) < 2) {
        $error_message .= 'The message you entered do not appear to be valid.<br />';
    }

    if (strlen($error_message) > 0) {
        die($error_message);
    }

    $email_message = "Form details below.\n\n";


    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "Subject: " . clean_string($subject) . "\n";
    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email_from) . "\n";
    $email_message .= "message: " . clean_string($message) . "\n";


    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        //Server settings
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'gaesslein.net';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'test@gaesslein.net';                 // SMTP username
        $mail->Password = 'abcdefg123';                           // SMTP password
        // $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 25;                                    // TCP port to connect to
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );  

        //Recipients
        $mail->setFrom('test@gaesslein.net', 'Mailer');
        $mail->addAddress($email_to);     // Add a recipient
        $mail->addAddress('mgaesslein@gmail.com');     // Add a recipient
        $mail->addReplyTo($email_from, $name);

        //Content
        $mail->isHTML(false);                                  // Set email format to HTML
        $mail->Subject = 'New Contact Form Email';
        $mail->Body    = $email_message;

        $mail->send();
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        die();
    }

    ?>
     
    <!-- include your own success html here -->
     
    Thank you for contacting us. We will be in touch with you very soon.
     
    <?php
}
?>