<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
//Development Env.

    $db_host = 'localhost';
    $db_name = 'stonatest';
    $db_username = 'root';
    $db_password = '';

//Production Env.

/* $db_host = 'exhibitor.stonaindia.co.in';
$db_name = 'stona_exhibitor';
$db_username = 'rkritesh000';
$db_password = 'Rky000_si'; */

$mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
} else {
    //echo 'success';
}
