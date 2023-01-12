<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    global $user_id, $mysqli;
    $request = json_decode($postdata);
    $method = mysqli_real_escape_string($mysqli, trim($request->method));
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $data = $request->data;
    if ($method == 'POST') {
        $fasciaName = $data[0]->name;
        $sql = "INSERT INTO fascia (user_id, fasciaName, status) VALUES ('$user_id', '$fasciaName', true)";
        if ($result = mysqli_query($mysqli, $sql)) {
            $lastInsertedId = mysqli_insert_id($mysqli);
            if ($lastInsertedId > 0) {
                $response->STATUS = 'OK';
                $response->tocken = '';
                $response->message = 'Details updated success';
                $response->data = $data;
                echo json_encode($response);
            } else {
                $response->STATUS = 'FAIL';
                $response->tocken = '';
                $response->message = 'failed to update the details try again!';
                echo json_encode($response);
            }
        } else {
            $response->STATUS = 'ERROR';
            $response->tocken = '';
            $response->message = "mysqli_query error : $result";
            echo json_encode($response);
        }
    } else if ($method == 'GET') {
        $sql = "SELECT * FROM fascia where user_id='$user_id' and status='1'";
        if ($result = mysqli_query($mysqli, $sql)) {
            $rows = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            if (sizeof($rows) > 0) {
                $response = [
                    'STATUS' => 'OK',
                    'tocken' => '',
                    'message' => 'Fascia Name found',
                    'data' => $rows
                ];
                echo json_encode($response);
            } else {
                $response = [
                    'STATUS' => 'Fail',
                    'tocken' => '',
                    'message' => 'Fascia Name not found',
                    'data' => $rows
                ];
                echo json_encode($response);
            }
        } else {
            $response->STATUS = 'ERROR';
            $response->tocken = '';
            $response->message = "mysqli_query error : $result";
            echo json_encode($response);
        }
    }
}
