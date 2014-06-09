<?php
require_once "config/config.php";
require_once "class/Item_Abstract.class.php";

$function   = filter_input(INPUT_POST, "function");
$department = filter_input(INPUT_POST, "department");

switch ($department) {
    case 1:
        
        break;
    case 2:
        $obj = new Item_D2_DB1();
        break;
    case 3:
        
        break;
}
$obj->run($function);
