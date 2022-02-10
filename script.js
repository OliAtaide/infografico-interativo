$('.btn-acessibilidade').click(function () {
    $('h2').addClass('titulo-acs');
    $('.close').addClass('close-acs');
    $('p, table, ul').addClass('text-acs');
    $('body').css('background-color', 'black');
    $('.btn-collapse').removeClass('w-75');
    $('.btn-collapse').addClass('btn-acs w-100 py-0 lh-sm');
    $('h3, .card-title, .card-subtitle, h5').addClass('card-title-acs');
    $('.card').addClass('bg-black border-white');
    $('img').not('.access-acs, .logos').addClass('img-invert');
    $('a').addClass('link');
    $('.footer').addClass('footer-acs');

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
    $('img').not('.access, .logos').removeClass('img-invert');
    $('a').removeClass('link');
    $('.btn-collapse').addClass('w-75');
    $('.btn-collapse').removeClass('btn-acs w-100 py-0 lh-sm');
    $('.footer').removeClass('footer-acs');

    $('.btn-acessibilidade').show();
    $('.btn-padrao').hide();
    $('.dica').hide();
})


$('.btn-collapse').click(function () {
    var id = $(this).data('bs-target');
    $('.collapse').not(id).collapse('hide');
})