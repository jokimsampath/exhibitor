<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $feedback = mysqli_real_escape_string($mysqli, trim($request->feedback));

    $sql1 = "INSERT INTO feedback (user_id, feedback, status) VALUES ('$user_id', '$feedback', true)";
    if ($result = mysqli_query($mysqli, $sql1)) {
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