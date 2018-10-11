/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function($){
    
    $.fn.notif = function(options){
        
        var settings = {
            
            html : '<div class="notification animated flipInX {{cls}}"><div class="left"><i class="{{icon}}"></i></div><div class="right"><span>{{title}}</span><p>{{{content}}}</p></div></div>', icon : 'fas fa-info', timeout : false
            
        };
        // Icon par default (danger, success
        if(options.cls === 'danger'){
            settings.icon = 'fas fa-times';
        };
        if(options.cls === 'success'){
            settings.icon = 'fas fa-check';
        };
        var options = $.extend(settings, options);
        
        return this.each(function(){
            
            var $this = $(this);
            var $notifs = $('> .notifications', $this);
            var $notif = $(Mustache.render(options.html, options));
            if($notifs.length === 0){
                $notifs = $('<div class="notifications animated flipInX">');
                $this.prepend($notifs);
            }
            $notifs.append($notif);
            
            if(options.timeout){
                setTimeout(function(){
                   $notif.trigger('click'); 
                },options.timeout);
            }
            
            $notif.click(function(event){
               event.preventDefault();
               $notif.addClass('fadeOutLeft').delay(500).slideUp(300, function(){
                   if($notif.siblings().length === 0){
                       $notifs.remove();
                       
                   }
                 $notif.remove();  
               });
            });

        });
    };
  
  $('.add').click(function(event){
      event.preventDefault();
      $('body').notif({title:'Mon alert', content: 'Mon contenu', cls:'success', timeout:4000});
  });
    
})(jQuery);
