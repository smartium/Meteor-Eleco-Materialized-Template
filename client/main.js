import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/client/lib/routes';

import '../imports/client/styles/eleco/materialize.min.css';
// import '../imports/client/styles/eleco/loaders.css';
import '../imports/client/styles/eleco/lightbox.css';
import '../imports/client/styles/eleco/line-awesome.css';
import '../imports/client/styles/eleco/line-awesome-font-awesome.css';
import '../imports/client/styles/eleco/owl.carousel.min.css';
import '../imports/client/styles/eleco/owl.theme.default.min.css';
// import '../imports/client/styles/eleco/animsition.css';
import '../imports/client/styles/eleco/style.css';

import '../imports/client/scripts/eleco/materialize.min';
import '../imports/client/scripts/eleco/lightbox';
import '../imports/client/scripts/eleco/owl.carousel.min';
// import '../imports/client/scripts/eleco/animsition.min';
// import '../imports/client/scripts/eleco/animsition-custom';
// import '../imports/client/scripts/eleco/main';

import '../imports/client/partials/header/header';
import '../imports/client/partials/footer/footer';
import '../imports/client/partials/timeline/timeline';
import '../imports/client/templates/home/home';
import '../imports/client/templates/video/video';

import './main.html';

dynTemplate = new ReactiveVar('home');

Template.body.onRendered(()=> {
  $(function(){
    'use strict';

    // preloader
    $(".wrapper-load").fadeOut();

    // walkthrough
    $('.walkthrough-slider').carousel({
      indicators: true,
      duration: 120
    });

    // sidebar
    $(".side-left").sidenav();

    // sidebar search
    $(".side-search").sidenav({
      edge: 'right'
    });

    // sidebar cart
    $('.side-cart').sidenav({
      edge: 'right'
    });

    // slider home
    $(".slide-show-home").owlCarousel({
      items: 1,
      navigation: true,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      singleItem: true,
      loop: true
    });

    // all slider
    $(".slide-show").owlCarousel({
      items: 1,
      navigation: true,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      singleItem: true,
      loop: true,
      autoplay: true
    });

    // carousel
    $(".slide-page").owlCarousel({
      items: 1,
      navigation: true,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      singleItem: true,
      loop: true
    });

    // modal
    $(".modal").modal();

    // tooltip
    $('.myTooltip').tooltip();

    // date
    $('.datepicker').datepicker();

    // testimonial
    $(".testimonial").owlCarousel({
      items: 1,
      navigation: true,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      singleItem: true,
      autoplay: true,
      loop: true
    });

    // product-d-slide
    $(".b-seller-slide").owlCarousel({
      items: 2,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      loop: false,
      margin: 10
    });

    // product-d-slide
    $(".product-d-slide").owlCarousel({
      items: 1,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      loop: false,
      margin: 10
    });

    // slide walkthrough
    $(".wt-slide").owlCarousel({
      items: 1,
      navigation: true,
      slideSpeed: 1000,
      dots: true,
      paginationSpeed: 400,
      singleItem: true,
      loop: false
    });

    // tabs
    $('ul.tabs').tabs();

    // collapse
    $('.collapsible').collapsible();

    // link back
    $('.link-back').on('click', function() {
      window.history.back();
      return false;
    });

    // link to chat detail
    $('.wrap-chat-l .content-text').on('click', function() {
      window.location='chat-detail.html'
    });

    // time picker
    $('.timepicker').timepicker({
      isOpen: true,
    });

    // select
    $('select').formSelect();


  });
});

Template.body.helpers({
});

Template.App_main.helpers({
  dynTemplate() {
    return dynTemplate.get();
  }
});

Template.body.events({
});
