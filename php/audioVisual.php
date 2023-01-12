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
        $_008 = mysqli_real_escape_string($mysqli, trim($data[0]->_008));
        $_009 = mysqli_real_escape_string($mysqli, trim($data[0]->_009));
        $_010 = mysqli_real_escape_string($mysqli, trim($data[0]->_010));
        $_011 = mysqli_real_escape_string($mysqli, trim($data[0]->_011));
        $_012 = mysqli_real_escape_string($mysqli, trim($data[0]->_012));
        $_014 = mysqli_real_escape_string($mysqli, trim($data[0]->_013));
        $_013 = mysqli_real_escape_string($mysqli, trim($data[0]->_014));
        $_015 = mysqli_real_escape_string($mysqli, trim($data[0]->_015));
        $_016 = mysqli_real_escape_string($mysqli, trim($data[0]->_016));
        $_017 = mysqli_real_escape_string($mysqli, trim($data[0]->_017));
        $_018 = mysqli_real_escape_string($mysqli, trim($data[0]->_018));
        $_019 = mysqli_real_escape_string($mysqli, trim($data[0]->_019));
        $_020 = mysqli_real_escape_string($mysqli, trim($data[0]->_020));
        $_021 = mysqli_real_escape_string($mysqli, trim($data[0]->_021));
        $_022 = mysqli_real_escape_string($mysqli, trim($data[0]->_022));
        $_023 = mysqli_real_escape_string($mysqli, trim($data[0]->_023));
        $_024 = mysqli_real_escape_string($mysqli, trim($data[0]->_024));
        $_025 = mysqli_real_escape_string($mysqli, trim($data[0]->_025));
        $_026 = mysqli_real_escape_string($mysqli, trim($data[0]->_026));
        $_027 = mysqli_real_escape_string($mysqli, trim($data[0]->_027));
        $_028 = mysqli_real_escape_string($mysqli, trim($data[0]->_028));
        $_029 = mysqli_real_escape_string($mysqli, trim($data[0]->_029));
        $_030 = mysqli_real_escape_string($mysqli, trim($data[0]->_030));
        $_031 = mysqli_real_escape_string($mysqli, trim($data[0]->_031));
        $_032 = mysqli_real_escape_string($mysqli, trim($data[0]->_032));
        $_033 = mysqli_real_escape_string($mysqli, trim($data[0]->_033));
        $_034 = mysqli_real_escape_string($mysqli, trim($data[0]->_034));
        $_035 = mysqli_real_escape_string($mysqli, trim($data[0]->_035));
        $_036 = mysqli_real_escape_string($mysqli, trim($data[0]->_036));
        global $dataRows;
        $dataRows = getData();
        if (sizeof($dataRows) > 0) {
            $sql = "UPDATE audiovisual SET user_id = '$user_id', 
            _001 = '$_001', _002 = '$_002', _003 = '$_003', _004 = '$_004', _005 = '$_005', _006 = '$_006', _007 = '$_007', _008 = '$_008', _009 = '$_009', _010 = '$_010',
            _011 = '$_011', _012 = '$_012', _013 = '$_013', _014 = '$_014', _015 = '$_015', _016 = '$_016', _017 = '$_017', _018 = '$_018', _019 = '$_019', _020 = '$_020',
            _021 = '$_021', _022 = '$_022', _023 = '$_023', _024 = '$_024', _025 = '$_025', _026 = '$_026', _027 = '$_027', _028 = '$_028', _029 = '$_029', _030 = '$_030',
            _031 = '$_031', _032 = '$_032', _033 = '$_033', _034 = '$_034', _035 = '$_035', _036 = '$_036', status = '1'";
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
            $sql = "INSERT INTO audiovisual(user_id, _001, _002, _003, _004, _005, _006, _007, _008, _009, _010, _011, _012, _014, _013, _015, _016, _017, _018, _019, _020, _021, _022, _023, _024, _025, _026, _027, _028, _029, _030, _031, _032, _033, _034, _035, _036, status) 
                VALUES ('$user_id', '$_001', '$_002', '$_003', '$_004', '$_005', '$_006', '$_007', '$_008', '$_009', '$_010', '$_011', '$_012', '$_014', '$_013', '$_015', '$_016', '$_017', '$_018', '$_019', '$_020', '$_021', '$_022', '$_023', '$_024', '$_025', '$_026', '$_027', '$_028', '$_029', '$_030', '$_031', '$_032', '$_033', '$_034', '$_035', '$_036', true)";
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
    $sql = "SELECT * FROM audiovisual where user_id='$user_id' and status='1'";
    if ($result = mysqli_query($mysqli, $sql)) {
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
        return $rows;
    } else {
    }
}
