<?php
// form-handler.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Redirect to another page
    header("Location: landing.html");
    exit(); // Ensure no further code is executed after the redirect
}
?>