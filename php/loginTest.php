<?php
include_once("database.php");
//$postdata = file_get_contents("php://input");
$email = "jokim.lute@gmail.com";
$password = "jokims";
$admin = false;
$request = json_decode($postdata);
$response = new stdClass();
$dataObj = new stdClass();

if (true) {
    $password = mysqli_real_escape_string($mysqli, trim($password));
    $email = mysqli_real_escape_string($mysqli, trim($email));
    $admin = mysqli_real_escape_string($mysqli, trim($admin));
    
    if($admin){
        $sql = "SELECT * FROM user where email='$email' and password='$password' and admin='true' and status='true'";
    } else {
        $sql = "SELECT * FROM user where email='$email' and password='$password' and admin='false' and status='true'";
    }
    
    if ($result = mysqli_query($mysqli, $sql)) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
    if(sizeof($rows) > 0){
            echo 'success';
        /* session_start();
        $id = session_id();
        $tocken = base64_encode($rows[0]['email']);
        $_SESSION['email'] = $rows[0]['email'];
        $_SESSION['admin'] = $rows[0]['admin'];
        $_SESSION['status'] = $rows[0]['status'];
        $_SESSION['tocken'] = $tocken;
        $_SESSION['id'] = $id;
        $response->STATUS = 'OK';
        $response->tocken = $tocken;
        $response->message = '';
        $response->data = $rows;
        echo  json_encode($response); */
    } else {
        /* $response->STATUS = 'FAIL';
        $response->tocken = '';
        $response->message = '';
        $response->data = $rows;
        echo  json_encode($response); */
            echo 'failure';
    }
    
    } else {
        http_response_code(404);
    }
}

?>