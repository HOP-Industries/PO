<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Inventory Database Management</title>
        <script src="../lib/jquery-ui/js/jquery-1.10.2.js"></script>
        <script src="../lib/jquery-ui/js/jquery-ui-1.10.4.custom.min.js"></script>
        <script src="js/d2_item.js"></script>
        <link rel=stylesheet href="../lib/jquery-ui/css/cupertino/jquery-ui-1.10.4.custom.min.css"/>
    </head>
    <body>
        <div id="div_tabs">
            <ul>
                <li><a href="#department-2">Department 2</a></li>
            </ul>
            <div id="department-2">
                <select id="sel_d2">
                    <option value="db1">DB1</option>
                </select>
                <br>
                Click on a field to change the value
                <div id="div_d2_item_list"></div>

                <div id="div_test">Testing</div>
            </div>
        </div>
        <script src="js/inventory_database.js"></script>
    </body>
</html>
