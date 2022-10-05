import { custom_script_root_path } from "../generals";


export function onLoadChangeSomeStyles() {
    //background
    // es carrega imatge de fons si n'hi ha (splash page template) 
    // si hi ha sections, es tapa el main wrap
    $(".main-wrap").attr('style', 'background: rgba(255,255,255,1) !important;')

    //body
    // si hi ha sections, es tapa el main body
    $("body").attr('style', 'background: rgba(255,255,255,1) !important;')

    // eliminar el footer
    $("#weebly-footer-signup-container-v3").remove()

    // padding container
    $('div.container').css('padding', '0px 0px');


    // set menu colors
    let colorMenuTxt = '#c1ffc1'; //ff6200
    let colorBkGr = '#8f8f8f'; //ffffd9

    // menu colorBkGr
    let strBkGr = 'background: ' + colorBkGr + ' !important;';
    $('.birdseye-header').attr('style', strBkGr)
    $('.wsite-menu-subitem').attr('style', strBkGr)
    $('.wsite-menu-title').attr('style', strBkGr)

    // site  & menu text colors

    let strCol = 'color: ' + colorMenuTxt + ' !important;';
    $('#wsite-title').attr('style', strCol);
    $('a.wsite-menu-item').attr('style', strCol)
    $('li#activete-menu-item').attr('style', strCol)
    $('a.wsite-menu-item').hover(
        function () {
            $(this).attr('style',
                'border: 2px solid ' + colorMenuTxt + ' !important; '
                + strCol)
        }
        ,
        function () {
            $(this).attr('style',
                'border: 2px solid ' + colorBkGr + ' !important; '
                + strCol)
        }
    );
    $('.wsite-menu-title').attr('style', strCol)

    // element actiu menu
    $('li#active').children(":first").attr('style',
        'border: 2px solid ' + colorMenuTxt + ' !important; '
        + strCol)


    // $('.hamburger').attr('style', 'color: ' + colorMenuTxt + ' !important;')
    // $('.hamburger span').attr('style', 'background: ' + colorMenuTxt + ' !important;')

    // logo

    let logo = '<div class="logo" style="width: 2%;"> <span class="wsite-logo"><a href="/"><img style="background-color: ' + colorMenuTxt + '; height: 70px; border: 3px solid ' + colorMenuTxt + ';" src="' + custom_script_root_path() + '/img/CARA-MCL-ALPHA.png" alt="TARRIDA"></a></span></div>'
    // http://127.0.0.1:5500/img/CARA-MCL-ALPHA.png
    // http://127.0.0.1:5500/img/CARA-MCL-ALPHA.png

    $('.nav-wrap').children(":first").prepend(logo);
    // $('.container')/*.children()[0]*/.prepend(logo);

    // formulari

    let formContainer = $('#wsite-form-input');
    formContainer.hide();

    let ta = $('textarea.wsite-form-input')
    ta.val('Si tens cap pregunta, no dubtis a contactar amb mi. (Click aqui)')

    ta.parent().parent().css('max-width', '100%');
    ta.css('max-width', '100%');
    ta.css('height', '50px');
    $('label.wsite-form-label').hide()

    let em = $('input.wsite-form-input')
    em.parent().parent().css('max-width', '100%');
    em.css('max-width', '100%');
    em.val('el teu email (Click aqui)')
    em.hide()
    em.on('click', () => { em.select() })

    let envBtn = $('span.wsite-button-inner:contains("Enviar")')
    envBtn.hide();

    ta.on('click', () => {
        envBtn.css('opacity', '0');
        $('input.wsite-form-input').css('opacity', '0');

        envBtn.show();
        $('input.wsite-form-input').show();

        envBtn.animate({ opacity: 1 }, 200);
        $('input.wsite-form-input').animate({ opacity: 1 }, 200);

        ta.select()

    });

}

