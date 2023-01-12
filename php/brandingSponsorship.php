<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    var_dump($request);
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $_001 = mysqli_real_escape_string($mysqli, trim($request->_001));
    $_002 = mysqli_real_escape_string($mysqli, trim($request->_002));
    $_003 = mysqli_real_escape_string($mysqli, trim($request->_003));
    $_004 = mysqli_real_escape_string($mysqli, trim($request->_004));
    $_005 = mysqli_real_escape_string($mysqli, trim($request->_005));
    $_005a = mysqli_real_escape_string($mysqli, trim($request->_005a));
    $_006 = mysqli_real_escape_string($mysqli, trim($request->_006));
    $_007 = mysqli_real_escape_string($mysqli, trim($request->_007));
    $_008 = mysqli_real_escape_string($mysqli, trim($request->_008));
    $_009 = mysqli_real_escape_string($mysqli, trim($request->_009));
    $_010 = mysqli_real_escape_string($mysqli, trim($request->_010));
    $_011 = mysqli_real_escape_string($mysqli, trim($request->_011));
    $_012 = mysqli_real_escape_string($mysqli, trim($request->_012));
    $_014 = mysqli_real_escape_string($mysqli, trim($request->_013));
    $_013 = mysqli_real_escape_string($mysqli, trim($request->_014));
    $_015 = mysqli_real_escape_string($mysqli, trim($request->_015));
    $_016 = mysqli_real_escape_string($mysqli, trim($request->_016));
    $_017 = mysqli_real_escape_string($mysqli, trim($request->_017));
    $_018 = mysqli_real_escape_string($mysqli, trim($request->_018));
    $_019 = mysqli_real_escape_string($mysqli, trim($request->_019));
    $_020 = mysqli_real_escape_string($mysqli, trim($request->_020));
    $_021 = mysqli_real_escape_string($mysqli, trim($request->_021));
    $_022 = mysqli_real_escape_string($mysqli, trim($request->_022));
    $_023 = mysqli_real_escape_string($mysqli, trim($request->_023));
    $_024 = mysqli_real_escape_string($mysqli, trim($request->_024));
    $_025 = mysqli_real_escape_string($mysqli, trim($request->_025));
    $_026 = mysqli_real_escape_string($mysqli, trim($request->_026));
    $_027 = mysqli_real_escape_string($mysqli, trim($request->_027));
    $_028 = mysqli_real_escape_string($mysqli, trim($request->_028));
    $_029 = mysqli_real_escape_string($mysqli, trim($request->_029));
    $_030 = mysqli_real_escape_string($mysqli, trim($request->_030));

    $sql = "INSERT INTO brandingsponsorship(user_id, _001, _002, _003, _004, _005, _005a, _006, _007, _008, _009, _010, _011, _012, _014, _013, _015, _016, _017, _018, _019, _020, _021, _022, _023, _024, _025, _026, _027, _028, _029, _030, status) 
            VALUES ('$user_id', '$_001', '$_002', '$_003', '$_004', '$_005', '$_005a', '$_006', '$_007', '$_008', '$_009', '$_010', '$_011', '$_012', '$_014', '$_013', '$_015', '$_016', '$_017', '$_018', '$_019', '$_020', '$_021', '$_022', '$_023', '$_024', '$_025', '$_026', '$_027', '$_028', '$_029', '$_030', true)";

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