<? 

if (isset($_POST['submit'])) {
     $subject = $_POST['subject'];
    $name = $_POST['name'];
     $mailfrom = $_POST['email'];
      $message = $_POST['message'];

      $mailTo = "m.macken@hotmail.nl";
      $header = "From: ".$mailfrom;
      $txt = "You have recieved an Email from ".$name.".\n\n".$message;
      mail($mailTo, $subject, $txt, $header);
      $header("Location: app.php?mailsend");
      
}