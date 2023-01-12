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
        $quantity = $data[0]->quantity;
        $numberOfDays = $data[0]->numberOfDays;
        $rate = $data[0]->rate;
        global $dataRows;
        $dataRows = getData();
        if (sizeof($dataRows) > 0) {
            $sql = "UPDATE powerrequirementtemporary SET user_id = '$user_id', quantity = '$quantity', numberOfDays = '$numberOfDays', rate = '$rate', status = '1'";
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
                        'message' => 'failed to update the details try again!',
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
            $sql1 = "INSERT INTO powerrequirementtemporary (user_id, quantity, numberOfDays, rate, status) VALUES ('$user_id', '$quantity', '$numberOfDays','$rate', true)";
            if ($result = mysqli_query($mysqli, $sql1)) {
                $lastInsertedId = mysqli_insert_id($mysqli);
                if ($lastInsertedId > 0) {
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
                            'message' => 'No data found in database contact your Administratior...!',
                            'data' => $dataRows
                        ];
                        echo json_encode($response);
                    }
                } else {
                    $response->STATUS = 'FAIL';
                    $response->tocken = '';
                    $response->message = 'failed to update data to database contact your Administrator...!';
                    echo json_encode($response);
                }
            } else {
                $response->STATUS = 'ERROR';
                $response->tocken = '';
                $response->message = "Database query error:  insert record failed";
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
    $sql = "SELECT * FROM powerrequirementtemporary where user_id='$user_id' and status='1'";
    if ($result = mysqli_query($mysqli, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
    } else {
        return [];
    }
}
