<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $_001 = mysqli_real_escape_string($mysqli, trim($request->_001));
    $_002 = mysqli_real_escape_string($mysqli, trim($request->_002));
    $_003 = mysqli_real_escape_string($mysqli, trim($request->_003));
    $_004 = mysqli_real_escape_string($mysqli, trim($request->_004));
    $_005 = mysqli_real_escape_string($mysqli, trim($request->_005));

    $sql = "INSERT INTO seafreight (user_id, _001, _002, _003, _004, _005, status) 
            VALUES ('$user_id', '$_001', '$_002', '$_003', '$_004', '$_005', true)";

    if ($result = mysqli_query($mysqli, $sql)) {
        $lastInsertedId = mysqli_insert_id($mysqli);
        if ($lastInsertedId > 0) {
            $response->STATUS = 'OK';
            $response->tocken = '';
            $response->message = 'Details updated success';
            $response->data = [];
            echo json_encode($response);
        } else {
            $response->STATUS = 'FAIL';
            $response->tocken = '';
            $response->message = 'failed to update the details try again!';
            echo json_encode($response);
        }
    } else {
        echo http_response_code(404);
    }

}

?>