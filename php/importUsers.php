<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
$failedArray = array();
$passedArray = array();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    //$exhibitorName = mysqli_real_escape_string($mysqli, trim($request->exhibitorName));
    //$address = mysqli_real_escape_string($mysqli, trim($request->address));
    //$city = mysqli_real_escape_string($mysqli, trim($request->city));
    //$state = mysqli_real_escape_string($mysqli, trim($request->state));
    //$country = mysqli_real_escape_string($mysqli, trim($request->country));
    //$telephone = mysqli_real_escape_string($mysqli, trim($request->telephone));
    //$email = mysqli_real_escape_string($mysqli, trim($request->email));
    //$mobile = mysqli_real_escape_string($mysqli, trim($request->mobile));
    //$name = mysqli_real_escape_string($mysqli, trim($request->name));
    //$password = mysqli_real_escape_string($mysqli, trim($request->password));
    //$confirmPassword = mysqli_real_escape_string($mysqli, trim($request->confirmPassword));
    global $failedArray, $passedArray, $dataObj;
    $failedArray = [];
    $passedArray = [];
    foreach ($request as $obj) {
        global $failedArray, $passedArray, $dataObj;
        $sql1 = "SELECT * FROM user where email='$obj->email'";
        if ($result = mysqli_query($mysqli, $sql1)) {
            $rows = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            if (sizeof($rows) > 0) {
                global $failedArray, $passedArray, $dataObj;
                array_push($failedArray, $obj);
            } else {
                $sql2 = "INSERT INTO user(email, password, admin, status) VALUES ('$obj->email', '$obj->password', 'false', '1')";
                if ($result = mysqli_query($mysqli, $sql2)) {
                    $lastInsertedId = mysqli_insert_id($mysqli);
                    if ($lastInsertedId > 0) {
                        $sql3 = "INSERT INTO registration(user_id, exhibitorName, address, city, state, country, telephone, email, mobile, name, password, confirmPassword, status) 
                        VALUES ('$lastInsertedId', '', '$obj->address', '', '', '', '', '$obj->email', '', '$obj->name', '$obj->password', '$obj->confirmPassword', '1')";
                        if ($result = mysqli_query($mysqli, $sql3)) {
                            $lastInsertedId1 = mysqli_insert_id($mysqli);
                            if ($lastInsertedId1 > 0) {
                                global $failedArray, $passedArray, $dataObj;
                                array_push($passedArray, $obj);
                            } else {
                            }
                        } else {
                        }
                    }
                } else {
                    global $failedArray, $passedArray, $dataObj;
                    array_push($failedArray, $obj);
                }
            }
        } else {
        }
    }
    
    $status = '';
    $message = '';
    if(sizeof($passedArray) > 0 && sizeof($failedArray) == 0) {
        $status = 'OK';
        $message = 'Registration Successful...!';
    } else { 
        $status = 'FAIL';
        $message = 'Few User id are not registere, please check the log and Database for more info.';
    }
    $dataObj->failedArray = $failedArray;
    $dataObj->passedArray = $passedArray;
    $response->STATUS = $status;
    $response->tocken = '';
    $response->message = $message;
    $response->data = $dataObj;
    echo json_encode($response);
}
