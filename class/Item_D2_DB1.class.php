<?php
/**
 * Description of Item_D2_DB1
 *
 * @author Cct
 */
class Item_D2_DB1 extends Item_Abstract
{
    private $hic, $packaging, $sg, $grade, $gaugeMM, $widthMM, $lengthMM, $lb,
            $dscnt, $netDollarLb, $guageInches, $widthInches, $lengthInches,
            $lbPerSheet;
    
    public function __construct()
    {
        parent::__construct();
    }
    
    public function run($function, $item = FALSE)
    {
        switch ($function) {
            case "getDb1":
                echo $this->getDb1();
                break;
            
            case "add":
                $this->add($item);
                break;
            case "update":
                $this->update($item);
                break;
            case "delete":
                $this->delete($item);
                break;
            default:
                break;
        }
    }
    
    public function getDb1()
    {

        $query = "SELECT * "
               . "FROM ItemcodeDept2 "
               . "WHERE RIGHT(ItemCode, 1) = 'U'";
$sth = $this->_sqlCon->prepare($query);
$sth->execute();
$result = $sth->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($result);
    }
    
    public function getDb2()
    {
        ;
    }
    
    public function getDb3()
    {
        ;
    }
    
    public function getDb4()
    {
        ;
    }
    
    public function add($item)
    {
        
    }
    
    public function update($item)
    {
        
    }
    
    public function delete($item)
    {
        
    }
    
}
