<?php

require_once 'ConvertToChar.php';

class ConvertNumber extends ConvertToChar{

    public $alert_message = "";
    public $number;
    public $decimal;
    public $hi, $hel;

    public function __construct($num){

            $this->splitIt_1($num);

        return true;
    }

    public function __toString(){

        $hi = implode($this->hi);

        if(count($this->hel) > 0){

            $hel = implode($this->hel);

            return $hi . "บาท" . $hel . "สตางค์";

        }else{

            return $hi . "บาทถ้วน";
        }

    }

    protected function splitIt_1($data){

        $num = explode(".",$data);

        if(strpos($data,".")){

            $this->splitIt_Number($num[0]);
            $this->splitIt_Decimal($num[1]);

        }else{

            $this->splitIt_Number($num[0]);

        }

    }

    protected function splitIt_Number($data){

        $num = str_split($data);

        foreach($num as $key => $val){
            $this->number[$key] = $num[$key];
        }

        $this->hi = parent::ConvertNumber($this->number);

    }

    protected function splitIt_Decimal($data){

        if($data != "0" || $data != "00"){ // Check 0 and 00 Decimal

            $num = str_split($data);

            foreach($num as $key => $val){
                $this->decimal[$key] = $num[$key];
            }

            $this->hel = parent::ConvertNumber($this->decimal);

        }

    }

}