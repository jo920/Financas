$(document).ready(function(){
    $(window).scroll(function(){
        // A barra de navegação fica fixa conforme vai rolando 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Botão para de rolagem para levar o usuário para o topo da pagina
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // Estou removendo a rolagem suave no clique do botao deslizante 
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // Aplicando de novo a rolagem suave nos items do menu 
        $('html').css("scrollBehavior", "smooth");
    });

    // Alternação do menu/ navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Texto de animação 
    var typed = new Typed(".typing", {
        strings: ["Onde tudo acontece!" , "Onde seu futuro está garantido"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["um proposito", " uma jornada junto a você"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Script do carrossel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});




