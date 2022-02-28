$(document).ready(function(){

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


    function start() {


        while (blockNumber < 4) {
            blockNumber++;
            addBlock(".blocks", blockNumber);
            paintEvenBlocks();
        }
              
    }




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


});

//SELECT col.fullname, col.birth_date, learning.score FROM col INNER JOIN learning ON col.subdivision_name='бухгалтерия' AND col.id=learning.col_id AND learning.course_name='excel' AND learning.score>'80'