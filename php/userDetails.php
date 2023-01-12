<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $method = mysqli_real_escape_string($mysqli, trim($request->method));
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $data = $request->data;
    if ($method == 'POST') {

    } else if ($method == 'GET') {
        $sql = "SELECT * FROM registration where user_id='$user_id' and status='1'";
        if ($result = mysqli_query($mysqli, $sql)) {
            http_response_code(201);
            $rows = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            if (sizeof($rows) > 0) {
                $response = [
                    'STATUS' => 'OK',
                    'tocken' => '',
                    'message' => 'User Details Found',
                    'data' => $rows
                ];
                echo json_encode($response);
            } else {
                $response = [
                    'STATUS' => 'FAIL',
                    'tocken' => '',
                    'message' => 'No user Details Found',
                    'data' => $rows
                ];
                echo json_encode($response);
            }
        } else {
            http_response_code(422);
        }
    }
}
