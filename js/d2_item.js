function getD2Item(obj)
{
    console.log(obj);
    return obj;
}

function getD2DB1() 
{
    return $.ajax({
        type: "POST",
        url: "inventory_control.php",
        data: { function:   "getDb1",
                department: 2},
        success: function( msg ) {
            var db1 = [];
            var jsonObj = jQuery.parseJSON( msg );
            if (jsonObj === null) {
                alert("No result found");
            } else {
                for (var i = 0; i < jsonObj.length; i++) {
                    db1[i] = new D2DB1(jsonObj[i]);
                }
            }
        }
    });
}

function setD2DB1(idTag)
{
    
}

function D2DB1(obj) 
{
    this.HIC           = obj.ItemCode;
    this.Packing       = obj.Spec;
    this.SG            = obj.SG;
    this.Grade         = obj.Grade;
    this.GaugeM        = obj.Mgauge;
    this.Gauge         = obj.Gauge;
    this.WidthM        = obj.Mwidth;
    this.Width         = obj.Width;
    this.LengthM       = obj.Mlength;
    this.LengthM       = obj.Length;
    this.PricePerPound = 0;
    this.SheetPerPound = obj.LbsSheet;
    this.Dscnt = 0;
}