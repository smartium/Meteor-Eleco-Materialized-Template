import './home.less'
import './home.html'

Template.home.onRendered(()=> {
  $(".slide-show-home").owlCarousel({
    items: 1,
    navigation: true,
    slideSpeed: 1000,
    dots: true,
    paginationSpeed: 400,
    singleItem: true,
    loop: true
  });
});
