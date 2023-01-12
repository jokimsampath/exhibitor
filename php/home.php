<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $method = mysqli_real_escape_string($mysqli, trim($request->method));
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $admin = mysqli_real_escape_string($mysqli, trim($request->admin));
    if ($method == 'POST') {
    } else if ($method == 'GET') {
        if ($admin) {
            $sql = "SELECT * FROM registration where status=true";
        } else {
            $sql = "SELECT * FROM registration where user_id='$user_id' and status=true";
        }
        if ($result = mysqli_query($mysqli, $sql)) {
            $rows = array();
            while ($row = mysqli_fetch_assoc($result)) {
                $rows[] = $row;
            }
            if (sizeof($rows) > 0) {
                for ($i = 0; $i < count($rows); $i++) {
                    $rows[$i]['password'] = '';
                    $rows[$i]['confirmPassword'] = '';
                }
                $response = [
                    'STATUS' => 'OK',
                    'tocken' => '',
                    'message' => '',
                    'data' => $rows
                ];
                echo json_encode($response);
            } else {
                $response = [
                    'STATUS' => 'FAIL',
                    'tocken' => '',
                    'message' => '',
                    'data' => $rows
                ];
                echo json_encode($response);
            }
        } else {
            $response = [
                'STATUS' => 'ERROR',
                'tocken' => '',
                'message' => '',
                'data' => $rows
            ];
            echo json_encode($response);
        }
    }
}
