$(document).ready(function(){
  $('.sidenav').sidenav({
    menuWidth     : 300,
    edge          : 'right',
    closeOnClick  : true,
    draggable     : true
  });
  $('.materialboxed').materialbox();
  $('.parallax').parallax();
  $('.modal').modal();
  $('.tabs').tabs();
  $('.datepicker').datepicker({
    disableWeekends: true
  });
  $('.tooltipped').tooltip();
  $('.scrollspy').scrollSpy();
});
