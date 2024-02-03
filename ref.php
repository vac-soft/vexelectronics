<?php
session_start();

if (isset($_GET['ref']) && !empty($_GET['ref'])) {
    $_SESSION['ref'] = $_GET['ref'];
}
if (empty($_SESSION['ref'])) {
    // If $_SESSION['ref'] is empty, set it to 'vacsoftteck site'
    $_SESSION['ref'] = 'V Ex Electronics site';
}

?>
