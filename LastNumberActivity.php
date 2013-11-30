<?php

if(isset($_POST['data'])){

    echo Kind($_POST['data']);
}

function Kind($data){

    if( $_POST['method'] == "1"){

        if($_POST['kind'] == "1"){

            return OpenTextFile("txt/hdr".$data.".txt");

        }else if($_POST['kind'] == "2"){

            return OpenTextFile("txt/apb".$data.".txt");
        }

    }else if( $_POST['method'] == "2"){

        return EditTextFile($data);

    }

    return false;
}

//function CheckMethod($location){
//    if( $_POST['method'] == "1"){
//        return OpenTextFile($location);
//    }else if( $_POST['method'] == "2"){
//        return EditTextFile($location);
//    }
//    return false;
//}

function OpenTextFile($textfile){

    $f=fopen($textfile,"r");
    $theData = fread($f, filesize($textfile));
    return $theData;

}

function EditTextFile($data){


    $data_num = $_POST['newvalue_num'];
    $data_apb = $_POST['newvalue_apb'];

    // Check if Lower case and if was, Chang it to Upper case.
    if(ctype_lower($data_apb)){
        $data_apb = strtoupper($data_apb);
    }

    $f=fopen("txt/hdr".$data.".txt" ,"w");
    fputs($f, $data_num);
    fclose($f);

    $g=fopen("txt/apb".$data.".txt" ,"w");
    fputs($g, $data_apb);
    fclose($g);

    $show_data = array(
        'last_number' => $data_num,
        'last_alphabet' => $data_apb
    );

    return json_encode($show_data);



////////////////////////////////////////////////////////////////////
    //$data=$_POST['newvalue_num'];

    //$f=fopen($textfile,"w");
    //fputs($f, $data);
    //fclose($f);

    //return $data;


}