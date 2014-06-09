<?php
/**
 * Description of Item_Abstract
 *
 * @author Cct
 */
abstract class Item_Abstract
{
    protected $_sqlCon;
    
    public function __construct()
    {
        $this->_sqlCon = $this->_initSql();
    }
    
    /**
     * Initialize PDO connection
     * @return \PDO handler
     */
    private function _initSql()
    {
        try {
            $dsn = "sqlsrv:Server=" . DB_SERVER . ",1433;Database=" . DB_PROD;
            $dbh = new PDO($dsn, DB_USER , DB_PASSWORD);
            return $dbh;
        } catch(PDOException $e) {
            echo $e->getMessage();
        }
    }
}

require_once "Item_D2_DB1.class.php";
