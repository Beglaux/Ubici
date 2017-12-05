<?php
//Adding database configuration
include "dbConfig.php";
//getting post data
$UserID = $_GET['user'];
//starting MariaDb Connection
$connection = mysqli_connect($dbServer,$dbUsername,$dbPassword,$database)or die("Error: ".mysqli_error());
$querry = "SELECT PicturePath FROM User WHERE UserID = '$UserID'";
$result = mysqli_query($connection,$querry);
if(!$result)
{
	echo "image don't exist";
}
else if(mysqli_num_rows($result) == 1)
{
	$row = mysqli_fetch_array($result);
	$img = $row['PicturePath'];
	readfile($img);
}
else
{
	echo "image don't exist";
}
mysqli_close($connection);
?>