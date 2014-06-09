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
                <hr>
                <div id="div_d2_edit">
                    <form id="fm_d2_item_edit">
                        <table id="tb_d2_item_edit">
                            <tr>
                                <td>
                                    <label for="input_d2_db1_hic">Item Code:</label>
                                    <input type="text" id="input_d2_db1_hic">
                                </td>
                                <td colspan="2">
                                    <label for="input_d2_db1_packaging">Packaging:</label>
                                    <input type="text" size="50" id="input_d2_db1_packaging">
                                </td>
                                <td>
                                    <label for="input_d2_db1_sg">S.G</label>
                                    <input type="text" id="input_d2_db1_sg">
                                </td>
                                <td>
                                    <label for="input_d2_db1_grade">Grade</label>
                                    <input type="text" id="input_d2_db1_grade">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="input_d2_db1_gaugemm">Gauge mm</label>
                                    <input type="number" id="input_d2_db1_gaugemm">
                                </td>
                                <td>
                                    <label for="input_d2_db1_widthmm">Width mm</label>
                                    <input type="number" id="input_d2_db1_gaugemm">
                                </td>
                                <td>
                                    <label for="input_d2_db1_lengthmm">Length mm</label>
                                    <input type="number" id="input_d2_db1_gaugemm">
                                </td>
                                <td>
                                    <label id="input_d2_db1_pricepound">$/lb</label>
                                    <input type="number" id="input_d2_db1_pricepound">
                                </td>
                                <td>
                                    <label id="input_d2_db1_dscnt">dscnt</label>
                                    <input type="number" id="input_d2_db1_dscnt">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="input_d2_db1_gauge">Gauge Inch</label>
                                    <input type="number" id="input_d2_db1_gauge">
                                </td>
                                <td>
                                    <label for="input_d2_db1_width">Width Inch</label>
                                    <input type="number" id="input_d2_db1_gauge">
                                </td>
                                <td>
                                    <label for="input_d2_db1_length">Length Inch</label>
                                    <input type="number" id="input_d2_db1_gauge">
                                </td>
                                <td>
                                    <label for="input_d2_db1_netpricepound">Net $/lb</label>
                                    <input type="number" id="input_d2_db1_netpricepound">
                                </td>
                                <td>
                                    <label for="input_d2_db1_poundpersheet">lbs/sheets</label>
                                    <input type="number" id="input_d2_db1_poundpersheet">
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div id="div_d2_error_message"></div>
            </div>
        </div>
        <script src="js/inventory_database.js"></script>
    </body>
</html>
