$('.btn-acessibilidade').click(function () {
    $('h2').addClass('titulo-acs');
    $('.close').addClass('close-acs');
    $('p, table, ul').addClass('text-acs');
    $('body').css('background-color', 'black');
    $('.btn-collapse').addClass('btn-acs');
    $('h3, .card-title, .card-subtitle, h5').addClass('card-title-acs');
    $('.card').addClass('bg-black border-white');
    $('img').not('.access-acs').addClass('img-invert');

    $('.btn-acessibilidade').hide();
    $('.btn-padrao').show();
    $('.dica').show();
})

$('.btn-padrao').click(function () {
    $('h2').removeClass('titulo-acs');
    $('.close').removeClass('close-acs');
    $('p, table, ul').removeClass('text-acs');
    $('body').css('background-color', 'white');
    $('.btn-collapse').removeClass('btn-acs');
    $('h3, .card-title, .card-subtitle, h5').removeClass('card-title-acs');
    $('.card').removeClass('bg-black border-white');
    $('img').not('.access').removeClass('img-invert');

    $('.btn-acessibilidade').show();
    $('.btn-padrao').hide();
    $('.dica').hide();
})