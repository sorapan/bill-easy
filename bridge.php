<?php

session_start();

if( isset($_POST['json_unit']) &&
    isset($_POST['json_name']) &&
    isset($_POST['json_price']) &&
    isset($_POST['all_price']) &&
    isset($_POST['vat_price']) &&
    isset($_POST['last_price'])&&
    isset($_POST['header_choi']))
{


    $_SESSION['json_unit'] = $_POST['json_unit'];
    $_SESSION['json_name'] = $_POST['json_name'];
    $_SESSION['json_ppu'] = $_POST['json_ppu'];
    $_SESSION['json_price'] = $_POST['json_price'];
    $_SESSION['all_price'] = $_POST['all_price'];
    $_SESSION['vat_price'] = $_POST['vat_price'];
    $_SESSION['last_price'] = $_POST['last_price'];
    $_SESSION['name_customer'] = $_POST['name_customer'];
    $_SESSION['address_customer'] = $_POST['address_customer'];
    $_SESSION['day'] = $_POST['day'];
    $_SESSION['month'] = $_POST['month'];
    $_SESSION['year'] = $_POST['year'];

    $headerAndSaignature = DefineHeaderAndSignature($_POST['header_choi']);
    $_SESSION['header_choi'] = $headerAndSaignature[0];
    $_SESSION['signature_choi'] = $headerAndSaignature[1];
    $_SESSION['number_choi'] = $headerAndSaignature[2];

    $_SESSION['refresh_Locker'] = "0";

    echo "Please Waiting....";

}

function DefineHeaderAndSignature($header){

    if($header == 1){

        $header = "ใบแจ้งหนี้/ไม่ใช่ใบกำกับภาษี";
        $signature = "ผู้ออกใบแจ้งหนี้";
        $number_choi = "1";

        return array($header,$signature,$number_choi);

    }else if($header == 2){

        $header = "ใบเสนอราคา/รายการซ่อม";
        $signature = "ผู้เสนอราคา";
        $number_choi = "2";

        return array($header,$signature,$number_choi);

    }else if($header == 3){

        $header = "ใบกำกับภาษี/ใบเสร็จรับเงิน";
        $signature = "ผู้รับเงิน";
        $number_choi = "3";

        return array($header,$signature,$number_choi);

    }

    return true;

}




