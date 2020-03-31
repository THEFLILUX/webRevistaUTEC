$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop:true,
    margin:0,
    nav:false,
    autoplayTimeout:30000,
    autoplay:true
});
var owl = $('.owl-carousel');
owl.owlCarousel();
$('.nextBtn').click(() => {
    owl.trigger('next.owl.carousel');
})
$('.prevBtn').click(() => {
    owl.trigger('prev.owl.carousel', [300]);
})