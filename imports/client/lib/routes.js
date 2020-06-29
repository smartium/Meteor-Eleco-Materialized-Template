FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("App_main", {main: dynTemplate.get()});
    }
});

FlowRouter.route('/video', {
    action: function(params) {
        BlazeLayout.render("App_main", {main: "video"});
    }
});
