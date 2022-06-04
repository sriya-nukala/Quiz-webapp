<?php
$servername="127.0.0.1";
$username="root";
$password="";
$dbname="sriya_vit";
if($_SERVER['REQUEST_METHOD']=='POST'){
    $conn=new mysqli($servername,$username,$password,$dbname);
    if($conn){
        echo "Connection is successful"."<br>";
    }
    else{
        die("Connection is not established".mysqli_connect_error());
    }
    $ip=getip();
    $score=$_POST['reload'];
    $sql="INSERT INTO db(ip,score) VALUES ('$ip','$score')";
    $result=mysqli_query($conn,$sql);
    if($result){
    echo "Inserted Succesfully<br>";
    }
    else{
    die("Couldnt insert due to".mysqli_error()."<br>");
}



}


?>
