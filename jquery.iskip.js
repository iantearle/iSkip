/*
 * iSkip - iPhoto Like
 *
 * Copyright (c) 2008 Ian Tearle (iantearle.com)
 * 
 *
 * $Date: 2009-26-06 11:12:02 -0000 (Wed, 06 Feb 2008) 
 *
 *	ChangeLog:
 * 
 */

jQuery.fn.iskip = function(options){
		options = options || {};
		options.images = options.images || [];
		options.method = options.method || "click"
		options.cycle = options.cycle || 1;
		options.resetMargin = options.resetMargin || 0;

    return this.each(function(){
			var imgArr = [];
			var pic = $(this);
		// Preload Images
				$.each(options.images, function(index, record) { var o =$("<img>").attr("src",record);		
				$("body").append(o); o.hide(); });

			for (var x=1; x<=options.cycle; x++)
				for (var y=0; y<options.images.length; y++)
					imgArr.push(options.images[y]);

			// Re-issue the loop
			imgArr.push(options.images[0]);

			if (options.method == "mousemove")
				pic.mousemove(function(e) {
					pic.attr("src",imgArr[Math.floor((e.pageX - pic.offset().left) / (pic.width()/imgArr.length))]);
				});

			if (options.method == "click")
			{			
					var follower
					if (!$.browser.msie)
					{	follower = $("<div>").css({"z-index":0, "width":"15px", "height":"15px", "position":"absolute", "top": pic.offset().top, "left":pic.offset().left});
  					$("body").append(follower);
						disableSelection(follower[0]);
					}
					disableSelection(pic[0]);
					var imgSrc, enabled;
					pic.mousemove(function(e) {
						if (e.pageX<=pic.offset().left+options.resetMargin || e.pageX > pic.offset().left + pic.width()-options.resetMargin || e.pageY<=pic.offset().top+options.resetMargin || e.pageY>=pic.offset().top+pic.height()-options.resetMargin)
						{	enabled=false;
							return false;
						}
						if (follower)
							follower.css({"top": e.pageY-7, "left": e.pageX-7});
						if (enabled==true)
							pic.attr("src",imgArr[Math.floor((e.pageX - pic.offset().left) / (pic.width()/imgArr.length))]);
					})
					pic.add((follower)?follower:null).mouseup(function() {
							enabled=false; 
					}).mousedown(function() { enabled=true; });
			}
	});			

	// Disable text selection
	function disableSelection(element) {
	    element.onselectstart = function() {
	        return false;
	    };
	    element.unselectable = "on";
	    element.style.MozUserSelect = "none";
	    element.style.cursor = "default";
	}


};