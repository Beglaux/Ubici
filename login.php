<?php
//Adding database configuration
include "dbConfig.php";
//getting post data
$Username = $_POST['User'];
$Password = $_POST['Password'];
//starting MariaDb Connection
$connection = mysqli_connect($dbServer,$dbUsername,$dbPassword,$database)or die("Error: ".mysqli_error());
$querry = "SELECT Username, Password, UserID FROM User WHERE Username = '$Username'";
$result = mysqli_query($connection,$querry);
if(!$result)
{
	echo '{"User":null, "UserID":null, "Login":false}';
}
else if(mysqli_num_rows($result) == 1)
{
	$row = mysqli_fetch_array($result);
	if(password_verify($Password,$row['Password']))
	{
		echo '{"User":'.$row['Username'].', "UserID":'.$row['UserID'].', "Login":true}';
	}
	else
	{
		echo '{"User":null, "UserID":null, "Login":false}';
	}
}
else
{
	echo '{"User":null, "UserID":null, "Login":false}';
}
mysqli_close($connection);
?>