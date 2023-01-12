<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$response = new stdClass();
$dataObj = new stdClass();
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $user_id = mysqli_real_escape_string($mysqli, trim($request->user_id));
    $VisitorsBags = mysqli_real_escape_string($mysqli, trim($request->VisitorsBags));
    $BrandedPens = mysqli_real_escape_string($mysqli, trim($request->BrandedPens));
    $ExhibitorsKits = mysqli_real_escape_string($mysqli, trim($request->ExhibitorsKits));
    $Lanyard = mysqli_real_escape_string($mysqli, trim($request->Lanyard));
    $Signage = mysqli_real_escape_string($mysqli, trim($request->Signage));
    $Seminar = mysqli_real_escape_string($mysqli, trim($request->Seminar));
    $InformationBooths = mysqli_real_escape_string($mysqli, trim($request->InformationBooths));
    $WaterBooths = mysqli_real_escape_string($mysqli, trim($request->WaterBooths));
    $GolfCarts = mysqli_real_escape_string($mysqli, trim($request->GolfCarts));
    $AdvertisementFairGuide = mysqli_real_escape_string($mysqli, trim($request->AdvertisementFairGuide));
    $SponsorshipCdPenDrive = mysqli_real_escape_string($mysqli, trim($request->SponsorshipCdPenDrive));

    $sql = "INSERT INTO sponsorshipopportunities(user_id, VisitorsBags, BrandedPens, ExhibitorsKits, Lanyard, Signage, Seminar, InformationBooths, WaterBooths, GolfCarts, AdvertisementFairGuide, SponsorshipCdPenDrive, status) VALUES ('$user_id', '$VisitorsBags', '$BrandedPens', '$ExhibitorsKits', '$Lanyard', '$Signage', '$Seminar', '$InformationBooths', '$WaterBooths', '$GolfCarts', '$AdvertisementFairGuide', '$SponsorshipCdPenDrive', true)";
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