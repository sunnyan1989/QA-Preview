<?php
$root = $_SERVER['DOCUMENT_ROOT'];
$target_folder =$_SERVER['DOCUMENT_ROOT']."/preview/model/vtry_for_test";
if($_SERVER['SERVER_ADDR']=="::1"||$_SERVER['SERVER_ADDR']=="127.0.0.1")
{
     $target_folder2 ="http://localhost/preview/model/vtry_for_test";
}else{
	$target_folder2 = "http://vtry.us/preview/model/vtry_for_test";
}
// $target_folder2 ="http://localhost/service/model/vtry_for_test";
$tree = scandir($target_folder);
$list = array_slice($tree,2);
$result = array();
foreach($list as $modelname){
	$model_folder = $target_folder."/".$modelname;
	$model_folder2 = $target_folder2."/".$modelname;
	$file_url = $model_folder."/model-desc.json";
	// $thumburl = $model_folder2."/thumb.jpg";
	if(file_exists($file_url)){
		$temp_json = file_get_contents($file_url);
		$temp_json = json_decode($temp_json,true);
		$temp_json["modelName"] = $modelname;
		$temp_json["frontImgUrl"] = $model_folder2."/front-image.png";
		$temp_json["leftLegImgUrl"] = $model_folder2."/left-image.png";
		$temp_json["rightLegImgUrl"] = $model_folder2."/right-image.png";
		$temp_json["thumbImgUrl"] = $model_folder2."/front-image.png";
	}
	array_push($result,$temp_json);
}
echo json_encode($result);
// echo json_encode($list);

?>