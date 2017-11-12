   $(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud_widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       console.log('Ready...');
     });
     $('button.playtoggle').click(function() {
       widget.toggle();
     });
   });