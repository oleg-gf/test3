$(document).ready(function(){
    let table = $(".table");
    let tableParams = {
        rows: "3",
        cols: "4"
    }
    let cellsList = [];
    let colorList = [
                        "red",
                        "white",
                        "blue",
                        "green",
                        "grey",
                    ];
    let selectCell = $(".select-cell");
    let selectColor = $(".select-color");
    let btnColor = $(".btn-color");
    let blockNumber = 0;

    start();

    $(".add").click(function () {
        blockNumber++;
        addBlock(".blocks", blockNumber);
        paintEvenBlocks();
        
    });  
    
    $(".inputs .checkbox").click(function () {

        paintEvenBlocks();
    });

    $(document).on('click', '.block', function () {
        let styleProps = $(this).css(["background-color", "color"]);
        let popupBlock = `<div class="popup_block">${$(this).html()}</div>`;
        
        $(".block_container").empty().append(popupBlock);
        $(".popup_block").css(styleProps);
        $(".popup_background").fadeIn(200);
        $(".popup_container").slideToggle(500);
    });

    $(".popup_background").click(function () {
        $(".popup_background").fadeOut(200);
        $(".popup_container").slideToggle(500);
      
    });


    $(".close").click(function () {
        $(".popup_background").fadeOut(200);
        $(".popup_container").slideToggle(500);
      
    });

    btnColor.click(
        function () {
            paintTable(table, selectColor.val());
            paintCell(table, selectCell.val(), "white");
        }
    );    
    
    function start() {
        createTable(table, tableParams.rows, tableParams.cols);
        paintTable(table, "white");

        cssCell(table, 12, "color", "blue");
        cssCell(table, 12, "font-style", "italic");
        paintCell(table, 31, "blue");

        createSelect(selectCell, cellsList);
        createSelect(selectColor, colorList);

        $("option:first-child").attr("selected", "selected");

        while (blockNumber < 4) {
            blockNumber++;
            addBlock(".blocks", blockNumber);
            paintEvenBlocks();
        }
              
    }

    function createTable(table, rows, cols) {
        rows = parseInt(rows);
        cols = parseInt(cols);
        let cellName = "";
        for (let i = 1; i <= rows; i++) {
            table.append(`
                <tr data-row="${i}"></tr>
                    `);
            for (let j = 1; j <= cols; j++) {
                cellName = String(i) + String(j);
                $(`[data-row="${i}"]`).append(`
                    <td data-name="${cellName}">${cellName}</td>
                    `);
                    cellsList.push(cellName);
            }
        }
    };

    function createSelect(select, list) {
        list.forEach(
            function ( currentValue ) {
                select.append(`
                    <option value="${currentValue}">${currentValue}</option>
                `);
              }
        );
    }

    function paintTable(table, color) {
        table.find("td").css(`background-color`, `${color}`);
    };

    function paintCell(table, cell, color) {
        cell = String(cell);
        table.find(`[data-name="${cell}"]`).css(`background-color`, `${color}`);
    };

    function cssCell(table, cell, styleName, styleValue) {
        cell = String(cell);
        table.find(`[data-name="${cell}"]`).css(`${styleName}`, `${styleValue}`);
    };

    function addBlock(div, number) {

        $(div).append(`<div class="block" data-number="${number}"><p>${number}</p></div>`);
        
    };

    function paintEvenBlocks() {
        
        if ($(".inputs .checkbox").prop('checked')) {
            $(".block:odd").css({
                "background-color": "gray",
                "color": "white"
              });
        } else {
            $(".block:odd").css({
                "background-color": "white",
                "color": "black"
              });
        }
    }

    function isEven(someNumber) {
        return (someNumber % 2 == 0) ? true : false;
      };
});

//SELECT col.fullname, col.birth_date, learning.score FROM col INNER JOIN learning ON col.subdivision_name='бухгалтерия' AND col.id=learning.col_id AND learning.course_name='excel' AND learning.score>'80'