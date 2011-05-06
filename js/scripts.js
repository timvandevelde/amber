$(document).ready(function() {

var currentPhoto = 1; 
var conceptspeed = ( $("#concept").height()  ) ;
var graphicspeed = ( $("#graphicdesign").height() / 3 ) ;
var campaignspeed = ( $("#campaign").height() * 2 ) ;
var photospeed = ( $("#photography").height() / 2 ) ;
var baseurl = "http://" + location.host ;
var lastPhoto = 74;
var menuStatus = 1;
var conceptHeight = $("#concept").height();
var graphicdesignHeight = $("#graphicdesign").height();
var campaignHeight = $("#campaign").height();
var photographyHeight = $("#photography").height();

	function resize_bg(){
		$(".backgroundimg").css("left","0");
		var doc_width = $(window).width();
		var doc_height = $(window).height();
		var image_width = $(".backgroundimg").width();
		var image_height = $(".backgroundimg").height();
		var image_ratio = image_width/image_height;      
		var new_width = doc_width;
		var new_height = Math.round(new_width/image_ratio);
		if (new_height<doc_height){
				new_height = doc_height;
				new_width = Math.round(new_height*image_ratio);
				var width_offset = Math.round((new_width-doc_width)/2);
				$(".backgroundimg").css("left","-"+width_offset+"px");
		}
		$(".backgroundimg").width(new_width);
		$(".backgroundimg").height(new_height);
	}

	function place_loader(){
		vert_position = "45";
		hor_position = ($(window).width() / 2 );
		$("#loader").css({"top": + vert_position + "%", "left": + hor_position + "px"});
	}
	
	$(function() {
		resize_bg();
		place_loader();
	});

	$(window).resize(function(){
		resize_bg();
		place_loader();
	});
	
	$(".backgroundimg").load(function(){
		resize_bg();
	});

	var imagefader = function(index,elm) {
	    var dataholder = $(this)
		var placeholder = $(elm);
		$('<img src="'+dataholder.data('imagefade')+'" />').load(function() {
			$(this).css({ opacity: 0, width: placeholder.width+'px', height: placeholder.height+'px' }).appendTo(placeholder.parent()).addClass(placeholder.attr('class'));
			resize_bg();
			$(this).animate({ opacity:1 }, function() { placeholder.remove(); });
		});	
	};
	
	// find background containers
	$('#backgrounddiv img[data-imagefade]').each(imagefader);
	

$("#conceptbutton,#concept,#graphicdesign,#graphicdesignbutton,#campaign,#campaignbutton,#photography,#photographybutton").hover(
	function () {
		$("#overlay").css({opacity: '0.8',filter: 'alpha(opacity=80)'});
	}, 
	function () {
		$("#overlay").css({opacity: '0',filter: 'alpha(opacity=0)'});
	}
);

$("#portfoliobutton").click(function () {
	$("#menu").animate({top: '0%'}, 500, function(){
		$("#home").animate({opacity: '0',filter: 'alpha(opacity=0)'}, 250);
		$("#portfolio").animate({opacity: '1',filter: 'alpha(opacity=100)'}, 250, function() {
			$("#portfolio").css({'z-index': '11'});
		});
	});
	hidecontact();
	hideabout();
});

$("#home > li").hover(
	function () {
		currentID = $(this).attr("id");
		hoverbutton = $('<div class="hoverbutton"/></div>');
		$(this).prepend(hoverbutton);
		$("#" + currentID + " > .hoverbutton").animate({"top":"0px"}, 150);
	}, 
	function () {
		$("#" + currentID + " > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}
);

$("#portfolio > li").hover(
	function () {
		currentID = $(this).attr("id");
		hoverbutton = $('<div class="hoverbutton"/></div>');
		$(this).prepend(hoverbutton);
		$("#" + currentID + " > .hoverbutton").animate({"top":"0px"}, 250);
	}, 
	function () {

	}
);

function hideabout(){
	$("#about").animate({"opacity":"0","filter":"alpha(opacity=0)","left":"48%"}, 500, function (){
		$("#about").css({"left":"28%"});
	});
}

function hidecontact(){
	$("#contact").animate({"opacity":"0","filter":"alpha(opacity=0)","left":"275px"}, 500, function(){
		$("#contact").css({"left":"175px"});
	});
}

function hidenav() {
	$("#navl, #navr").css({"display":"none"});
}


function hideTopMenu(){
    $("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, conceptspeed);
	$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
	$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
	$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
	$("#graphicdesignbutton > .hoverbutton, #campaignbutton > .hoverbutton, #photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
		$(this).remove(".hoverbutton");
	});
}


$("#homebutton").hover(
	function () {
		$("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, conceptspeed);
		$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
		$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
		$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
		$("#conceptbutton > .hoverbutton, #graphicdesignbutton > .hoverbutton, #campaignbutton > .hoverbutton, #photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}, 
	function () {
//
	}
);

$("#rollout").hover(
	function (){
	 	$("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, conceptspeed);
		$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
		$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
		$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
		$("#conceptbutton > .hoverbutton, #graphicdesignbutton > .hoverbutton, #campaignbutton > .hoverbutton, #photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}, 
	function () {
	// 
	}
);

$("#conceptbutton").hover(
	function () {
		$("#concept").stop().animate({top: '50px'}, conceptspeed);
		$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
		$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
		$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
		$("#graphicdesignbutton > .hoverbutton, #campaignbutton > .hoverbutton, #photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}, 
	function () {
//
	}
);

$("#concept").hover(
	function () {
//
	}, 
	function () {
		$("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, graphicspeed);
		$("#conceptbutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}
);


$("#graphicdesignbutton").hover(
	function () {
		$("#graphicdesign").stop().animate({top: '50px'}, graphicspeed);
		$("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, conceptspeed);
		$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
		$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
		$("#conceptbutton > .hoverbutton, #campaignbutton > .hoverbutton, #photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}, 
	function () {
		//
	}
);


$("#graphicdesign").hover(
	function () {
//
	}, 
	function () {
		$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
		$("#graphicdesignbutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}
);


$("#campaignbutton").hover(
	function () {
		$("#campaign").stop().animate({top: '50px'}, campaignspeed );
		$("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, conceptspeed);
		$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
		$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
		$("#conceptbutton > .hoverbutton, #graphicdesignbutton > .hoverbutton, #photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}, 
	function () {
//
	}
);

$("#campaign").hover(
	function () {
//
	}, 
	function () {
		$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
		$("#campaignbutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}
);

$("#photographybutton").hover(
	function () {
		$("#photography").stop().animate({top: '50px'}, photospeed);
		$("#concept").stop().animate({"top": "-"+ conceptHeight +"px"}, conceptspeed);
		$("#graphicdesign").stop().animate({"top": "-"+ graphicdesignHeight +"px"}, graphicspeed);
		$("#campaign").stop().animate({"top": "-"+ campaignHeight +"px"}, campaignspeed);
		$("#conceptbutton > .hoverbutton, #graphicdesignbutton > .hoverbutton, #campaignbutton > .hoverbutton ").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}
);

$("#photography").hover(
	function () {
		//
	}, 
	function () {
		$("#photography").stop().animate({"top": "-"+ photographyHeight +"px"}, photospeed);
		$("#photographybutton > .hoverbutton").animate({"top":"-50px"}, 100, function(){
			$(this).remove(".hoverbutton");
		});
	}
);

function imageFade(){
    if( $("#currentimage").is(':animated') ) {
        //
    } else {
		$("#loader").css({"display":"block"}).stop().animate({opacity: '1',filter: 'alpha(opacity=100)'},100);
        $("#currentimage").clone().prependTo("#backgrounddiv").attr("id","newimage");
        $("#newimage").attr({"src":"images/" + menuClass + ".jpg"});
		$('#newimage').load(function() {
			$("#loader").stop().animate({opacity: '0',filter: 'alpha(opacity=0)'},500, function(){
				$(this).css({"display":"none"});
			});
			$("#currentimage").animate({opacity: '0',filter: 'alpha(opacity=0)'},500,	function(){
            	$("#currentimage").remove();
            	$("#newimage").attr("id","currentimage");
        	});
        	$("#overlay").animate({"opacity":"0","filter":"alpha(opacity=0)"},500);
		});	 

    }
}

function imageFadePrev(){
    if( $("#currentimage").is(':animated') ) {
        //
    } else {
		$("#loader").css({"display":"block"}).stop().animate({opacity: '1',filter: 'alpha(opacity=100)'},100);
        $("#currentimage").clone().prependTo("#backgrounddiv").attr("id","newimage");
        $("#newimage").attr({"src":"images/" + previousPhoto + ".jpg"});
		$('#newimage').load(function() {
			$("#loader").stop().animate({opacity: '0',filter: 'alpha(opacity=0)'},500, function(){
				$(this).css({"display":"none"});
			});
			$("#currentimage").animate({opacity: '0',filter: 'alpha(opacity=0)'},500,	function(){
            	$("#currentimage").remove();
            	$("#newimage").attr("id","currentimage");
        	});
        	$("#overlay").animate({"opacity":"0","filter":"alpha(opacity=0)"},500);
		});	 

    }
}

function imageFadeNext(){
    if( $("#currentimage").is(':animated') ) {
        //
    } else {
		$("#loader").css({"display":"block"}).stop().animate({opacity: '1',filter: 'alpha(opacity=100)'},100);
        $("#currentimage").clone().prependTo("#backgrounddiv").attr("id","newimage");
        $("#newimage").attr({"src":"images/" + nextPhoto + ".jpg"});
		$('#newimage').load(function() {
			$("#loader").stop().animate({opacity: '0',filter: 'alpha(opacity=0)'},500, function(){
				$(this).css({"display":"none"});
			});
			$("#currentimage").animate({opacity: '0',filter: 'alpha(opacity=0)'},500,	function(){
            	$("#currentimage").remove();
            	$("#newimage").attr("id","currentimage");
        	});
        	$("#overlay").animate({"opacity":"0","filter":"alpha(opacity=0)"},500);
		});	 

    }
}

$("#content > ul > li > a").click(function () {
    
        imagefader();
        
        //         menuClass = parseInt($(this).attr("class").substr(5, 2)); 
        //         $("#navl").css({"display":"block"});
        //         $("#navr").css({"display":"block"});
        //         imageFade();
        //         hideTopMenu();
        // currentPhoto = menuClass;
        // menuStatus = 2;
		//alert(currentPhoto);
}); 

$("#homebutton").click(function () {
		$("#home").animate({opacity: '1',filter: 'alpha(opacity=100)'}, 250);
		$("#portfolio").animate({opacity: '0',filter: 'alpha(opacity=0)'}, 250, function() {
					$("#portfolio").css({'z-index': '9'});
					$("#menu").animate({top: '45%'}, 500, function(){
						$("#loader").css({"display":"block"}).stop().animate({opacity: '1',filter: 'alpha(opacity=100)'},100);
						$("#currentimage").clone().prependTo("#backgrounddiv").attr("id","newimage");
					    $("#newimage").attr({"src":"images/home.jpg"});
						$("#newimage").load(function() {
							$("#loader").stop().animate({opacity: '0',filter: 'alpha(opacity=0)'},500, function(){
								$(this).css({"display":"none"});
							});
							$("#currentimage").animate({opacity: '0',filter: 'alpha(opacity=0)'},500,	function(){
					           	$("#currentimage").remove();
					          	$("#newimage").delay(10).attr("id","currentimage");
					       	});
					       	$("#overlay").animate({"opacity":"0","filter":"alpha(opacity=0)"},500);
						});
					});
			});
		hidecontact();
		hideabout();
		hidenav()
		menuStatus = 1;
});

$("#aboutbutton").click(function(){
		$("#menu").animate({top: '0%'}, 500, function (){
			$("#about").css({"display":"block"});
			$("#loader").css({"display":"block"}).stop().animate({opacity: '1',filter: 'alpha(opacity=100)'},100);
		    $("#currentimage").clone().prependTo("#backgrounddiv").attr("id","newimage");
		    $("#newimage").attr({"src":"images/aboutme.jpg"});
			$("#newimage").load(function() {
				$("#loader").stop().animate({opacity: '0',filter: 'alpha(opacity=0)'},500, function(){
					$(this).css({"display":"none"});
				});
				$("#currentimage").animate({opacity: '0',filter: 'alpha(opacity=0)'},500,	function(){
		           	$("#currentimage").remove();
		          	$("#newimage").delay(10).attr("id","currentimage");
					$("#about").animate({"opacity":"1","filter":"alpha(opacity=100)","left":"38%"}, 500, function(){
						$(".aboutcontent").animate({"opacity":"1","filter":"alpha(opacity=100)","margin-left":"0px"}, 500);
					});
		       	});
		       	$("#overlay").animate({"opacity":"0","filter":"alpha(opacity=0)"},500);
			});
		});
		hidecontact();
		hidenav()
});

$("#contactbutton").click(function(){
		$("#menu").animate({top: '0%'}, 500, function (){
			$("#contact").css({"display":"block"});
			$("#loader").css({"display":"block"}).stop().animate({opacity: '1',filter: 'alpha(opacity=100)'},100);
		    $("#currentimage").clone().prependTo("#backgrounddiv").attr("id","newimage");
		    $("#newimage").attr({"src":"images/contact.jpg"});
			$("#newimage").load(function() {
				$("#loader").stop().animate({opacity: '0',filter: 'alpha(opacity=0)'},500, function(){
					$(this).css({"display":"none"});
				});
				$("#currentimage").animate({opacity: '0',filter: 'alpha(opacity=0)'},500,	function(){
			       	$("#currentimage").remove();
			       	$("#newimage").delay(10).attr("id","currentimage");
					$("#contact").animate({"opacity":"1","filter":"alpha(opacity=100)","left":"225px"}, 500, function(){
						$(".contactcontent").animate({"opacity":"1","filter":"alpha(opacity=100)","margin-left":"0px"}, 500);
					});
				});
				$("#overlay").animate({"opacity":"0","filter":"alpha(opacity=0)"},500);
			});
		});
		hideabout();
		hidenav()
});

$("#navl").hover(
	function (){
		$("#nav-left").animate({"background-color":"#e81e75","opacity": "1","filter": "alpha(opacity=100)"},100);
			if (menuStatus == 2){
			$("#menu").stop().animate({top: '-50px'}, 500);
			} else  {
			}
	},
	function (){
		$("#nav-left").animate({"background-color":"#000","opacity": "0.6","filter": "alpha(opacity=60)"},200);
	}
);

$("#navr").hover(
	function (){
		$("#nav-right").animate({"background-color":"#e81e75","opacity": "1","filter": "alpha(opacity=100)"},100);
			if (menuStatus == 2){
			$("#menu").stop().animate({top: '-50px'}, 500);
			} else  {
			}
	},
	function (){
		$("#nav-right").animate({"background-color":"#000","opacity": "0.6","filter": "alpha(opacity=60)"},200);
	}
);

$("#navl").click(function(){
		$("#navr").css({"display":"block"});
		$("#nav-left").animate({"background-color":"#000"}, 1, function(){
			$("#nav-left").animate({"background-color":"#e81e75"},500);
		});
		previousPhoto = (currentPhoto - 1);
		//alert(previousPhoto);
		if (previousPhoto == 1) {
			imageFadePrev();
			$("#navl").css({"display":"none"});
			currentPhoto = previousPhoto;
		} else {
			imageFadePrev();
			currentPhoto = previousPhoto;
		}
});

$("#navr").click(function(){
		$("#navl").css({"display":"block"});
		$("#nav-right").animate({"background-color":"#000"}, 1, function(){
			$("#nav-right").animate({"background-color":"#e81e75"},500);
		});
		nextPhoto = (currentPhoto + 1);
		//alert(nextPhoto);
		if (nextPhoto == (lastPhoto)) {
			imageFadeNext();
			$("#navr").css({"display":"none"});
			currentPhoto = nextPhoto;
		} else {
			imageFadeNext();
			currentPhoto = nextPhoto;
		}
});

$("#content > ul > li").hover(
		function () {
			$(".thumb", this).css({opacity: '1',filter: 'alpha(opacity=100)'});
		}, 
		function () {
			$(".thumb", this).css({opacity: '0.6',filter: 'alpha(opacity=60)'});
		}
	);

$("#content > ul > li").hoverIntent(
		function () {
			var schermbreedte = $(window).width()
			if (schermbreedte < 1280) {
					$(".menu-description", this).stop().animate({left: '-215px'}, 250);
				} else {
					$(".menu-description", this).stop().animate({left: '215px'}, 250);
				}

		}, 
		function () {
			$(".menu-description", this).animate({left: '0px'}, 100);
		}
);

$("#overlay").hoverIntent(
		function () {
			if (menuStatus == 2){
				$("#menu").stop().animate({top: '-50px'}, 500);
			} else  {
			}
		}, 
		function () {
//
		}
);

$("#backgroundhover").hover(
		function () {
			if (menuStatus == 2){
				$("#menu").stop().animate({top: '0px'}, 500);
			} else  {
			}
		}, 
		function () {
//
		}
);

$("#graphicdesign").mousemove(function(e){
	var muis = e.pageY -50;
	var paginahoogte = ($(window).height()) -50;
	var hoogte = $(this).height();
	var ruimte = (hoogte - paginahoogte);
	var locatie = Math.round( -( (ruimte / paginahoogte) * muis ) + 50 );
	$(this).css("top", + locatie + "px");
}); 

$("#photography").mousemove(function(e){
	var muis = e.pageY -50;
	var paginahoogte = ($(window).height()) -50;
	var hoogte = $(this).height();
	var ruimte = (hoogte - paginahoogte);
	var locatie = Math.round( -( (ruimte / paginahoogte) * muis ) + 50 );
	if (hoogte > paginahoogte) {
		$(this).css("top", + locatie + "px");
	} else {
		// do nothing
	}
}); 

}); 
