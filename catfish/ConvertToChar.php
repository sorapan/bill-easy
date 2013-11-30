<?php

class ConvertToChar {


    private $char_converted = array();
    private $lulk = array("","สิบ","ร้อย","พัน","หมื่น","แสน","ล้าน","สิบ","ร้อย","พัน","หมื่น");
    private $number_result = array();



    protected function ConvertNumber($data){

        //$amt_data = count($data);
        //$count_maj = $amt_data;

        //set to empty array
        $this->number_result = array();
        $this->char_converted = array();

        $this->CheckNumber($data);
        $this->CheckMaj($this->char_converted );

    return  $this->number_result;

    }


    private function CheckNumber($data){

        foreach( $data as $key=>$value){

            if($data[$key] == "9"){
                $this->char_converted[$key] = "เก้า";
            }
            else if($data[$key] == "8"){
                $this->char_converted[$key] = "แปด";
            }
            else if($data[$key] == "7"){
                $this->char_converted[$key] = "เจ็ด";
            }
            else if($data[$key] == "6"){
                $this->char_converted[$key] = "หก";
            }
            else if($data[$key] == "5"){
                $this->char_converted[$key] = "ห้า";
            }
            else if($data[$key] == "4"){
                $this->char_converted[$key] = "สี่";
            }
            else if($data[$key] == "3"){
                $this->char_converted[$key] = "สาม";
            }
            else if($data[$key] == "2"){
                $this->char_converted[$key] = "สอง";
            }
            else if($data[$key] == "1"){
                $this->char_converted[$key] = "หนึ่ง";
            }
            else if($data[$key] == "0"){
                $this->char_converted[$key] = "";
            }

        }

    }

    private function CheckMaj($data){

        //number_data = count($data);
        $data_reverse = array_reverse($data);

        if(count($data_reverse) > 1){

            if($data_reverse[0] == "หนึ่ง" && $data_reverse[1] != ""){
                $data_reverse[0] = "เอ็ด";
            }

            if($data_reverse[1] == "หนึ่ง"){
                $data_reverse[1] = "สิบ";
            }

            if($data_reverse[1] == "สอง"){
                $data_reverse[1] = "ยี่";
            }

        }

            foreach( $data_reverse as $key => $val){

                //$aaa = $data_reverse[$key];
                if($data_reverse[$key] =="" || $data_reverse[$key] =="สิบ"){

                    $aaa = $data_reverse[$key];

                }else{

                    $aaa = sprintf('%s%s', $data_reverse[$key], $this->lulk[$key]);
                }

                $this->number_result[$key] = $aaa;

            }

        $this->number_result = array_reverse($this->number_result);

    }

}