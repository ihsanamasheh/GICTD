<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
<head>
<meta https-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Email Form</title>
</head>

<body>
<?php
  $name=addslashes($_POST['name']);
  $email=addslashes($_POST['email']);
  $comments=addslashes($_POST['comments']);

 // you can specify which email you want your contact form to be emailed to here

  //$toemail = "info@gictd.com";
  $toemail = "info@gictd.com";
  $subject = "from gictd.com";

  $headers = "MIME-Version: 1.0\n"
        ."From: <info@gictd.com>	\n"
        ."Content-type: text/html; charset=iso-8859-1\n";


  $body = "You have received an email from gcitd website\n Name: ".$name."<br>\n"
            ."Email: ".$email."<br>\n"
            ."Comments: ".$comments."<br>\n";


  if (mail($toemail, $subject, $body, $headers))
  {
    //  echo "Message accepted";
	  echo '<script>window.location.href = "thankyou.html";</script>';
  }
  else
  {
   	  echo '<script>window.location.href = "thankyou.html";</script>';
  }



    //mail($toemail, $subject, $body, $headers);
    //echo "Thanks for submitting your comments";
?>
</body>
</html>
