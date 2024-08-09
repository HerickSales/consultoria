function addEvents(){
    $('#btn-about').click(()=>{window.location.href = '../sobremim.html';});

    $('#img-hipertrofia').mouseover(()=>{
        $('#info-hipertrofia').removeClass('d-none').css("z-index","10000");
        $('#img-hipertrofia').css("filter","brightness(0.3)");
    })
    $('#img-hipertrofia').mouseleave(()=>{
        $('#info-hipertrofia').addClass('d-none');
        $('#img-hipertrofia').css("filter","brightness(1)");
    })

    $('#img-emagrecimento').mouseover(()=>{
        $('#info-emagrecimento').removeClass('d-none').css("z-index","10000");
        $('#img-emagrecimento').css("filter","brightness(0.3)");
    })
    $('#img-emagrecimento').mouseleave(()=>{
        $('#info-emagrecimento').addClass('d-none');
        $('#img-emagrecimento').css("filter","brightness(1)");
    })


    $('#img-funcionalidade').mouseover(()=>{
        $('#info-funcionalidade').removeClass('d-none').css("z-index","10000");
        $('#img-funcionalidade').css("filter","brightness(0.3)");
    })
    $('#img-emagrecimento').mouseleave(()=>{
        $('#info-funcionalidade').addClass('d-none');
        $('#img-funcionalidade').css("filter","brightness(1)");
    })

    $(".ask").click(function(){
        $(this).next().slideToggle();
    });

    $('#btn-mensal').click(()=>{
        window.location.href = "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63767&page=63767";
    })

    $('#btn-trimestral').click(()=>{
        window.location.href = "https://pages.mfitpersonal.com.br/index?acao=page&tipo=2&buyPage=63768&page=63767";
    })

    $('.menu').click(()=>{
        $('.navbar-list').css("display") == "none" ? $('.navbar-list').css("display","flex") : $('.navbar-list').css("display","none");
        

    })
}

addEvents();