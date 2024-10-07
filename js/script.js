function addEvents(){
    $('#btn-about').click(()=>{window.location.href = '../sobremim.html';});
    
    $(".ask").click(function(){
        $(this).next().slideToggle();
        $(this).children().css('transform', $(this).next().css('display') == 'none' ? 'rotate(0deg)' : 'rotate(180deg)');
    });

    $('#btn-mensal').click(()=>{
        window.location.href = "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63767&page=63767";
    })

    $('#btn-trimestral').click(()=>{
        window.location.href = "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63768&page=63767";
    })

    $('.menu').click(()=>{
        $('.navbar-list').css("display") == "none" ? $('.navbar-list').css("display","flex") : $('.navbar-list').css("display","none");
        $('.menu').hide();
    })

    $('.navbar-list').click(()=>{
        if(screen.width < 768){
            $('.navbar-list').css("display","none")
            $('.menu').show();
            $('.navbar-list').css("display","none");
        }        
    })
}

addEvents();