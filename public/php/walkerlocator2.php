<?php
    include 'config.php';
 
    //connect to db
    $oLink = mysql_pconnect($username, $password) or die("Can't connect to MySQL server!");
    mysql_select_db($database) or die("Can't select database!");
 
    // Get parameters
    $mlat = $_POST["lat"];
    $mlng = $_POST["lng"];
    $radius = $_POST["radius"];
 
    // Search the rows in the markers table
    //change 3959 to 6371 for distance in KM
    $sql = sprintf("SELECT human_address, human_name, lat, lng, ( 3959 * acos( cos( radians('%s') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('%s') ) + sin( radians('%s') ) * sin( radians( lat ) ) ) ) AS distance FROM human HAVING distance < '%s' ORDER BY distance LIMIT 0 , 20",
      mysql_real_escape_string($mlat),
      mysql_real_escape_string($mlng),
      mysql_real_escape_string($mlat),
      mysql_real_escape_string($radius));
 
    $result = mysql_query($sql);
    $rows = array();
    while($r = mysql_fetch_assoc($result)) {
        $rows[] = $r;
    }
    mysql_close($oLink);
 
    echo json_encode($rows);
?>
