<?php
$target_folder =$_SERVER['DOCUMENT_ROOT']."/preview/model/vtry_for_test";

$tree = scandir($target_folder);
$list = array_slice($tree,2);

echo json_encode($list);

?>