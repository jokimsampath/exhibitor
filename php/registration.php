<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $exhibitorName = mysqli_real_escape_string($mysqli, trim($request->exhibitorName));
    $address = mysqli_real_escape_string($mysqli, trim($request->address));
    $city = mysqli_real_escape_string($mysqli, trim($request->city));
    $state = mysqli_real_escape_string($mysqli, trim($request->state));
    $country = mysqli_real_escape_string($mysqli, trim($request->country));
    $telephone = mysqli_real_escape_string($mysqli, trim($request->telephone));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $mobile = mysqli_real_escape_string($mysqli, trim($request->mobile));
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $confirmPassword = mysqli_real_escape_string($mysqli, trim($request->confirmPassword));

    $sql1 = "SELECT * FROM user where email='$email'";
    if ($result = mysqli_query($mysqli, $sql1)) {
        $rows = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        if (sizeof($rows) > 0) {
            $response->STATUS = 'FAIL';
            $response->tocken = '';
            $response->message = 'Email id is already registered, please use a different Emai id';
            $response->data = $rows;
            echo json_encode($response);
            return;
        } else {
            $sql2 = "INSERT INTO user(email, password, admin, status) VALUES ('$email', '$password', 'false', true)";
            if ($result = mysqli_query($mysqli, $sql2)) {
                $lastInsertedId = mysqli_insert_id($mysqli);
                if ($lastInsertedId > 0) {
                    $sql3 = "INSERT INTO registration(user_id, exhibitorName, address, city, state, country, telephone, email, mobile, name, password, confirmPassword, status) VALUES ('$lastInsertedId', '$exhibitorName', '$address', '$city', '$state', '$country', '$telephone', '$email', '$mobile', '$name', '$password', '$confirmPassword', true)";
                    if ($result = mysqli_query($mysqli, $sql3)) {
                        $lastInsertedId1 = mysqli_insert_id($mysqli);
                        if ($lastInsertedId1 > 0) {
                            $response->STATUS = 'OK';
                            $response->tocken = '';
                            $response->message = 'Registration successful, please login';
                            $response->data = [];
                            echo json_encode($response);
                        } else {
                            $response->STATUS = 'FAIL';
                            $response->tocken = '';
                            $response->message = 'Registration failed try again';
                            $response->data = $rows;
                            echo json_encode($response);
                        }
                    } else {
                        echo http_response_code(404);
                    }
                }
            } else {
                echo http_response_code(404);
            }
        }
    } else {
        echo http_response_code(404);
    }

}

?>