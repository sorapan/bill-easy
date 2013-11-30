<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Session being Destroy....</title>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
</head>
<body>
<?php
session_destroy();;
sleep(1);
echo "<script>window.close();</script>";
?>
</body>