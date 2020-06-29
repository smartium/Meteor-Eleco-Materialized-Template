import './video.less'
import './video.html'

Template.video.onRendered(()=> {
  $('.collapsible').collapsible();
});
