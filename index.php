<!DOCTYPE html>
<html>
<head>
<title>Index</title>

    <meta charset="UTF-8">
<!--    <meta http-equiv="X-UA-Compatible" content="IE=10" >-->


    <link rel="stylesheet" href="css/style_1.css" type="text/css">

    <script src="jquery/jquery.js" ></script>
    <script src="custom_plugin_1.js"></script>
    <script src="construct_1.js"></script>
    <script src="getdata.js"></script>
    <script src="calculate_1_v2.js"></script>

</head>
<body>



<div id="head_box">
    <h1>สงขลาเจริญการช่าง</h1>
    <p>Easy V.2</p>
</div>

<div id="choose">

<div id="choose_box">

<label for="select_headername">เลือกหัวข้อ : </label>
<select id="select_headername">
    <option>- โปรดเลือกหัวข้อ -</option>
    <option class="case_1">ใบแจ้งหนี้/ไม่ใช่ใบกำกับภาษี</option>
    <option class="case_2">ใบเสนอราคา/รายการซ่อม</option>
    <option class="case_3">ใบกำกับภาษี/ใบเสร็จรับเงิน</option>
</select>

</div>


<div id="radio_box">
    <input type="radio" name="vat" value="Normal" class="vat_1"> คำนวณ VAT ธรรมดา<br>
    <input type="radio" name="vat" value="Reverse" class="vat_2"> คำนวณ VAT แบบกลับค่า<br>
    <input type="radio" name="vat" value="nonVat" class="vat_3"> ไม่คำนวณ VAT

</div>

</div>

<div id="status_box">
    STATUS : <span id="status_1"></span>
</div>


<div id="customer_data">

<!--////////////// select date ///////////////-->

    <label for="date">วันที่</label>

    <select name="day" id="date" class="day">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
    </select>

    <select name="month" id="date" class="month">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
    </select>

    <select name="year" id="date" class="year">
        <option value="2556">2556</option>
        <option value="2557">2557</option>
        <option value="2558">2558</option>
        <option value="2559">2559</option>
        <option value="2560">2560</option>
        <option value="2561">2561</option>
        <option value="2562">2562</option>
    </select><br>

<!--////////////// select date ///////////////-->
    <label for="name_customer"><span>นามผู้ซื้อ </span></label><input type="text" name="name_customer" id="name_customer"><br>
    <label for="address_customer"><span>ที่อยู่ </span><textarea name="address_customer" id="address_customer"></textarea>

</div>


<div id="center_box">

<table border="1" id="table1">
    <tbody id="data_body">
        <tr>
            <th>ลำดับ</th>
            <th>รายการ</th>
            <th>จำนวน</th>
            <th>ราคาต่อหน่วย</th>
            <th>จำนวนเงิน</th>
        </tr>

        <tr>
            <td style="text-align: center">1</td>
            <td><input type="text"  class="0" id="name" style="width:420px"></td>
            <td><input type="text"  class="0" id="unit" ></td>
            <td><input type="text"  class="0" id="ppu"></td>
            <td><input type="text"  class="0" id="price"></td>
        </tr>

    </tbody>

    <tr>
        <td class="empty_white_cell"></td>
        <td class="empty_white_cell"></td>
        <td class="empty_white_cell"></td>
        <td class="attri_1">รวมราคาทั้งหมด</td>
        <td class = "result_td"><input type="text" id="all_price"></td>
    </tr>

    <tr>
        <td class="empty_white_cell"></td>
        <td class="empty_white_cell"></td>
        <td class="empty_white_cell"></td>
        <td class="attri_1">จำนวนภาษีมูลค่าเพิ่ม 7%</td>
        <td class = "result_td"><input type="text" id="vat_price"></td>
    </tr>

    <tr>
        <td class="empty_white_cell"></td>
        <td class="empty_white_cell"></td>
        <td class="empty_white_cell"></td>
        <td class="attri_1">จำนวนเงินรวมทั้งสิ้น</td>
        <td class = "result_td"><input type="text" id="last_price"></td>
    </tr>
</table>

<br>
    </div>
<div id="button_box">
<button id="CreateRowButton">เพิ่มแถว</button>
<button id="DelRowButton">ลบแถว</button>
<button id="reading">ส่งข้อมูล</button>
</div>
<br><br>
<div id="show_result">
<span id="result"></span>
</div>



</body>
</html>
