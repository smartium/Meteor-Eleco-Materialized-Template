import './header.less'
import './header.html'

Template.header.onRendered(()=> {
  $('.sidenav-trigger').sidenav();
});
