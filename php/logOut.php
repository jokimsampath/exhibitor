<?php
session_start();
session_unset();
session_destroy();
$response = [
    'STATUS' => 'OK',
    'message' => 'Successfully Logged out',
    'data' => []
  ];
echo json_encode($response);

?>