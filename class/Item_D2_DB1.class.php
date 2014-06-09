<?php
/**
 * Description of Item_D2_DB1
 *
 * @author Cct
 */
class Item_D2_DB1 extends Item_Abstract
{
    private $_hic, $_packaging, $_sg, $_grade, $_gaugeMM, $_widthMM, $_lengthMM, 
            $_lb, $_dscnt, $_netDollarLb, $_guage, $_width, $_length, $_lbPerSheet,
            $_item;
    
    public function __construct()
    {
        parent::__construct();
    }
    
    public function run($function, $item = FALSE)
    {
        $this->_setItem(json_decode($item));
        switch ($function) {
            case "getDb1":
                echo $this->getDb1();
                break;
            
            case "add":
                $this->add();
                break;
            case "update":
                $this->update();
                break;
            case "delete":
                $this->delete();
                break;
            default:
                break;
        }
    }
    
    protected function _setItem($item)
    {
        $this->_hic        = $this->_item[":hic"]        = $item[0];
        $this->_packaging  = $this->_item[":packaging"]  = $item[1];
        $this->_sg         = $this->_item[":sg"]         = $item[2];
        $this->_grade      = $this->_item[":grade"]      = $item[3];
        $this->_gaugeMM    = $this->_item[":gaugeMM"]    = $item[4];
        $this->_widthMM    = $this->_item[":widthMM"]    = $item[5];
        $this->_lengthMM   = $this->_item[":lengthMM"]   = $item[6];
        $this->_guage      = $this->_item[":gauge"]      = $item[7];
        $this->_width      = $this->_item[":width"]      = $item[8];
        $this->_length     = $this->_item[":length"]     = $item[9];
        $this->_lbPerSheet = $this->_item[":lbPerSheet"] = $item[10];
        
         
    }
    
    public function getDb1()
    {

        $query = "SELECT * "
               . "FROM TempTest "
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
    
    public function add()
    {
        if ($this->_hic === '') {
            echo "Item code cannot be empty.<br>";
        } else {
            try {
                $query = "INSERT INTO TempTest ( "
                       . "ItemCode, Spec, SG, Grade, MGauge, Mwidth, Mlength, "
                       . "Gauge, width, length, lbsSheet "
                       . ") VALUES ( "
                       . ":hic, :packaging, :sg, :grade, :gaugeMM, :widthMM, "
                       . ":lengthMM, :gauge, :width, :length, :lbPerSheet);";
                $stmt  = $this->_sqlCon->prepare($query);
                $stmt->execute($this->_item);
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        }
    }
    
    public function update()
    {
        if ($this->_hic === '') {
            echo "Item code cannot be empty.<br>";
        } else {
            try {
                $query = "UPDATE TempTest "
                       . "SET ItemCode=:hic, Spec=:packaging, SG=:sg, "
                       . "Grade=:grade, MGauge=:guageMM, Mwidth=:widthMM, "
                       . "Mlength=:lengthMM, Gauge=:gauge, width=:width, "
                       . "length=:length, lbsSheet=:lbPerSheet "
                       . "WHERE ItemCode=:code;";
                $stmt  = $this->_sqlCon->prepare($query);
                $stmt->bindParam(":hic",        $this->_hic);
                $stmt->bindParam(":packaging",  $this->_packaging);
                $stmt->bindParam(":sg",         $this->_sg);
                $stmt->bindParam(":grade",      $this->_grade);
                $stmt->bindParam(":guageMM",    $this->_gaugeMM);
                $stmt->bindParam(":widthMM",    $this->_widthMM);
                $stmt->bindParam(":lengthMM",   $this->_lengthMM);
                $stmt->bindParam(":gauge",      $this->_guage);
                $stmt->bindParam(":width",      $this->_width);
                $stmt->bindParam(":length",     $this->_length);
                $stmt->bindParam(":lbPerSheet", $this->_lbPerSheet);
                $stmt->bindParam(":code",       $this->_hic);
                $stmt->execute();
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        }
    }
    
    public function delete()
    {
        if ($this->_hic === '') {
            echo "Item code cannot be empty.<br>";
        } else {
            try {
                $query = "DELETE FROM TempTest "
                       . "WHERE ItemCode=:hic;";
                $stmt  = $this->_sqlCon->prepare($query);
                $stmt->bindParam(":hic",        $this->_hic);
                $stmt->execute();
            } catch(PDOException $e) {
                echo $e->getMessage();
            }
        }
    }
    
}
