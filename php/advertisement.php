<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
$user_id = '0';
$dataRows = [];
if (isset($postdata) && !empty($postdata)) {
    global $user_id, $mysqli;
    $request = json_decode($postdata);
    $method = mysqli_real_escape_string($mysqli, trim($request->method));
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $data = $request->data;
    if ($method == 'POST') {
        $_001 = mysqli_real_escape_string($mysqli, trim($data[0]->_001));
        $_002 = mysqli_real_escape_string($mysqli, trim($data[0]->_002));
        $_003 = mysqli_real_escape_string($mysqli, trim($data[0]->_003));
        $_004 = mysqli_real_escape_string($mysqli, trim($data[0]->_004));
        $_005 = mysqli_real_escape_string($mysqli, trim($data[0]->_005));
        $_006 = mysqli_real_escape_string($mysqli, trim($data[0]->_006));
        $_007 = mysqli_real_escape_string($mysqli, trim($data[0]->_007));
        global $dataRows;
        $dataRows = getData();
        if (sizeof($dataRows) > 0) {
            $sql = "UPDATE advertisement SET user_id = '$user_id', _001 = '$_001', _002 = '$_002', _003 = '$_003', _004 = '$_004', _005 = '$_005', _006 = '$_006', _007 = '$_007', status = '1'";
            if ($result = mysqli_query($mysqli, $sql)) {
                $dataRows = getData();
                if (sizeof($dataRows) > 0) {
                    $response = [
                        'STATUS' => 'OK',
                        'tocken' => '',
                        'message' => 'Details updated successfully',
                        'data' => $dataRows
                    ];
                    echo json_encode($response);
                } else {
                    $response = [
                        'STATUS' => 'Fail',
                        'tocken' => '',
                        'message' => 'failed to update asdf the details try again!',
                        'data' => $dataRows
                    ];
                    echo json_encode($response);
                }
            } else {
                $http_response_code = http_response_code(404);
                $response->STATUS = 'ERROR';
                $response->tocken = '';
                $response->message = "mysqli_query error $http_response_code";
                echo json_encode($response);
            }
        } else {
            $sql = "INSERT INTO advertisement(user_id, _001, _002, _003, _004, _005, _006, _007, status) 
                VALUES ('$user_id', '$_001', '$_002', '$_003', '$_004', '$_005', '$_006', '$_007', true)";
            if ($result = mysqli_query($mysqli, $sql)) {
                $dataRows = getData();
                if (sizeof($dataRows) > 0) {
                    $response = [
                        'STATUS' => 'OK',
                        'tocken' => '',
                        'message' => 'Details updated successfully',
                        'data' => $dataRows
                    ];
                    echo json_encode($response);
                } else {
                    $response = [
                        'STATUS' => 'Fail',
                        'tocken' => '',
                        'message' => 'failed to update asdf the details try again!',
                        'data' => $dataRows
                    ];
                    echo json_encode($response);
                }
            } else {
                $http_response_code = http_response_code(404);
                $response->STATUS = 'ERROR';
                $response->tocken = '';
                $response->message = "mysqli_query error $http_response_code";
                echo json_encode($response);
            }
        }
    } else if ($method == 'GET') {
        $dataRows = getData();
        if (sizeof($dataRows) > 0) {
            $response = [
                'STATUS' => 'OK',
                'tocken' => '',
                'message' => 'Records found',
                'data' => $dataRows
            ];
            echo json_encode($response);
        } else {
            $response = [
                'STATUS' => 'Fail',
                'tocken' => '',
                'message' => 'No Records found',
                'data' => $dataRows
            ];
            echo json_encode($response);
        }
    }
}

function getData()
{
    global $user_id, $mysqli;
    $rows = [];
    $sql = "SELECT * FROM advertisement where user_id='$user_id' and status='1'";
    if ($result = mysqli_query($mysqli, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
    } else {
        
    }
}
