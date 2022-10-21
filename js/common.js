$(document).ready(function(){
    // ▼ 버튼 클릭시 내용 없어짐
    $(document).on('click', '.content_hd > button', function(){
        var targetObj = $(this).parents(".content_hd").siblings(".content_sc");
        var underFont = $(this).children("i");

        targetObj.toggleClass('close');  
        
        if(targetObj.hasClass('close')){
            underFont.text("▲");

        } else {
            underFont.text("▼");
        }
    });

    $(document).on('click', '.content_sc', function(){
        var modalContent = $(this).siblings(".modal_1");
        modalContent.show();
        $('body').css("overflow", "hidden");
    });
    $(document).on('click', '.modal_1_cancelbt', function(){
        var modalContent = $(this).parents(".modal_1");
        modalContent.hide();
        $('body').css("overflow", "scroll");
    });
});