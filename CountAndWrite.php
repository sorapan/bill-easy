<?php

if(isset($_POST['data'])){

    echo SelectChoi("txt/hdr".$_POST['data'].".txt", "txt/apb".$_POST['data'].".txt");
}

function SelectChoi($location_num, $location_apb){

    if($_POST['refreshlocker'] == "0"){

        return OpenAndIncres($location_num, $location_apb);

    }else if($_POST['refreshlocker'] == "1"){

        return OpenAndDecres($location_num);

    }else{

        return OpenOnly($location_num);

    }

}

function OpenAndIncres($textfile_num, $textfile_apb){

    $f=fopen($textfile_num,"r");
    $data_num=fread($f,filesize($textfile_num));
    fclose($f);

    $g=fopen($textfile_apb,"r");
    $data_apb=fread($g,filesize($textfile_apb));
    fclose($g);


    if($data_num == 9999){

        $data_num = "1";
        $data_apb++;

        $f=fopen($textfile_num,"w");
        fputs($f,$data_num);
        fclose($f);

        $g=fopen($textfile_apb,"w");
        fputs($g,$data_apb);
        fclose($g);


    }else{

        $data_num++;

        $f=fopen($textfile_num,"w");
        fputs($f,$data_num);
        fclose($f);

        $g=fopen($textfile_apb,"w");
        fputs($g,$data_apb);
        fclose($g);

    }

    return sprintf("%s%04d",$data_apb,$data_num);
}



function OpenAndDecres($textfile){

    $f=fopen($textfile,"r");
    $data=fread($f,4);
    fclose($f);
    $data--;
    $f=fopen($textfile,"w");
    fputs($f,$data);
    fclose($f);

    return sprintf("%04d",$data);
}

function OpenOnly($textfile){

    $f=fopen($textfile,"r");
    $data=fread($f,4);
    fclose($f);
    $f=fopen($textfile,"w");
    fputs($f,$data);
    fclose($f);

    return sprintf("%04d",$data);

}
