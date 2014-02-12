  var marquee = {
    ele : $(".marquee"),
    config : {
      openMarquee : "open-marquee",
      close : "close",
      marqueeExpanded : "marquee-expanded"
    },
    init : function (){
      this.onEvents();
    },
    onEvents : function(){
      this.ele.on("click", "." + marquee.config.openMarquee, this.expandMarquee);
      this.ele.on("click", "." + marquee.config.close, this.closeMarquee);
    },
    expandMarquee : function(){
      $(this).next("." + marquee.config.marqueeExpanded).slideDown();
    },
    closeMarquee : function(event){
      event.preventDefault();
      $(this).parent().slideUp();
    }
  },
  start = (function(){//Place holder to start object
    marquee.init();
  })();
