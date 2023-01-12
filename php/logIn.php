<?php
require 'database.php';
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $admin = mysqli_real_escape_string($mysqli, trim($request->admin));
    $tocken = '';
    if ($admin) {
        $sql = "SELECT * FROM user where email='$email' and password='$password' and admin='true' and status=1";
    } else {
        $sql = "SELECT * FROM user where email='$email' and password='$password' and admin='false' and status=1";
    }

    if ($result = mysqli_query($mysqli, $sql)) {
        http_response_code(201);
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        if (sizeof($rows) > 0) {
            session_start();
            $id = session_id();
            $tocken = base64_encode($rows[0]['email']);
            $_SESSION['email'] = $rows[0]['email'];
            $_SESSION['admin'] = $rows[0]['admin'];
            $_SESSION['status'] = $rows[0]['status'];
            $_SESSION['tocken'] = $tocken;
            $_SESSION['id'] = $id;
            $response = [
                'STATUS' => 'OK',
                'tocken' => $tocken,
                'message' => '',
                'data' => $rows
              ];
            echo json_encode($response);
        } else {
            $response = [
                'STATUS' => 'Fail',
                'tocken' => $tocken,
                'message' => '',
                'data' => $rows
              ];
            echo json_encode($response);
        }

    } else {
        http_response_code(422);
    }
}

?>