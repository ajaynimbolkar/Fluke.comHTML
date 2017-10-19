/* jshint devel:true */

var	windowHeight, windowWidth,
	desktopTrigger = 768, /* desktopHeightTrigger = 721, */
	headerSite, navSite, navControl, navClose, headerStuck = false,
	contentSection, contentSectionPadding, contentGradient,
	btn,
	stickyFooter, footerStuck = false, currentBottom,
	toolWindow, toolFrame, toolCategories, toolOverlay,
	storyWindow, storyLink, storyOverlay, storyClose,
	videoWindow, videoLink, videoOverlay, videoClose,
	targetUrl,
	stickyPhone, phoneStuck = false,
	panelCount, panelWidth, panelCurrent = 0,
	snapping = false,
	adjust, ie8 = false;

jQuery.noConflict();
(function($) {
	$(function() {
		if ($('body').hasClass('ie8')) {
			ie8 = true;
			$('#stories nav li:nth-child(2)').addClass('child-2');
			$('#stories nav li:nth-child(3)').addClass('child-3');
			$('footer.site .stuck nav li:last-child').addClass('last-child');
		}
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		headerSite = $('header.site');
		navSite = $('header.site nav');
		navControl = headerSite.find('.control');
		navClose = headerSite.find('.close');
		contentSection = $('.content section');
		contentGradient = contentSection.find('.gradient');
		if (contentGradient.length > 0) {
			contentSectionPadding = contentGradient.eq(0).css('padding-top').replace(/px/, '');
		}
		btn = $('.btn');
		stickyFooter = $('footer.site .stuck');
		toolWindow = $('.tool-window');
		toolOverlay = toolWindow.find('.overlay');
		toolFrame = toolWindow.find('.frame');
		toolCategories = $('nav.categories');
		storyLink = $('nav.stories a');
		storyOverlay = $('.story-overlay');
		storyWindow = storyOverlay.find('.story-frame');
		storyClose = $('.story-close');
		videoLink = $('a.video');
		videoOverlay = $('.video-overlay');
		videoWindow = videoOverlay.find('.video-embed');
		videoClose = $('.video-close');
		stickyPhone = $('.sticky-phone');
		
		$('a').each(function() {
			var a = new RegExp('/' + window.location.host + '/');
			if(!a.test(this.href)) {
				$(this).click(function(event) {
					event.preventDefault();
					event.stopPropagation();
					window.open(this.href, '_blank');
				});
			}
		});
		$('body').addClass('js');
		if (windowWidth > desktopTrigger && snapping === false && ie8 === false) {
			$('.front').snapscroll({
				axis:'y',
				botPadding: 0,
				topPadding: 0
			});
			snapping = true;
		}
		
		$.localScroll({
			easing: 'easeInOutQuart',
			offset: {
				top: (windowWidth <= desktopTrigger) ? -60 : 0
			},
			onBefore: function() {
				navClose.click();
			}
		});
		
		toolOverlay.swipe({
			swipe: function(event, direction) {
				if (direction === 'right') {
					$('.next-prev .previous').click();
				}
				if (direction === 'left') {
					$('.next-prev .next').click();
				}
			}
		});

		generateMobileNav();
		adjustSections();
		btnTweaks();
		stickHeader();
		stickStuff();
		generateToolSlider();
		generateStoryNav();
		generateVideoNav();
		toolNextPrevious();
		$(window).resize(function() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();
			generateMobileNav();
			adjustSections();
			checkVideo();
			toolNextPrevious();
			btnTweaks();
			checkPanelWidth();
			if (windowWidth > desktopTrigger && snapping === false && ie8 === false) {
				$('.front').snapscroll({'axis':'y'});
				snapping = true;
			}
		});
		$(window).scroll(function() {
			checkStickPosition();
			checkActiveNav();
		});
	});
	
	function checkStickPosition() {
		if (footerStuck) {
			currentBottom = ($(window).height() +  $(window).scrollTop()) - stickyFooter.height();
			if (currentBottom >= stickyFooter.parent('.stuck-wrapper').offset().top && windowWidth >= desktopTrigger) {
				stickyFooter.removeClass('fixed');
			} else {
				stickyFooter.addClass('fixed');
			}
		}
		if (phoneStuck) {
			currentBottom = (($(window).height() +  $(window).scrollTop()) - stickyPhone.height() - 70);
			if (currentBottom >= stickyPhone.parent('.stuck-wrapper').offset().top && windowWidth >= desktopTrigger) {
				stickyPhone.removeClass('fixed');
			} else {
				stickyPhone.addClass('fixed');
			}
		}
	}
	function checkActiveNav() {
		var whereWeAt = $(window).scrollTop();
		contentSection.each(function(i) {
			var sectionTop = $(this).offset().top - 10,
				anchorSelector = 'header.site a[href*=#' + $(this).attr('name') + ']';
			if (anchorSelector.indexOf('why-fluke-connect') !== -1) {
				anchorSelector = 'header.site a[href*=#why-fluke-connect]';
			}
			if (whereWeAt >= sectionTop) {
				navSite.find('a').removeClass('active');
				$(anchorSelector).addClass('active');
				if (i >= 1) {
					$('.screen-window').css({backgroundPosition:'-'+((i - 1) * 171)+'px 0'});
				}
				var remembered = $(this);
				setTimeout(function() {
					remembered.find('.anim').addClass('active');
				}, 500);
			}
		});
	}
	function checkVideo() {
		if (windowWidth < desktopTrigger) {
			videoOverlay.hide();
		}
	}
	function generateVideoNav() {
		videoLink.click(function(e) {
			if (windowWidth >= desktopTrigger) {
				e.preventDefault();
				videoOverlay.fadeIn('fast', function() {
 
				});
			}
		});
		videoClose.click(function() {
			videoOverlay.fadeOut('fast');
		});
	}
	function generateStoryNav() {
		storyLink.click(function(e) {
			if (windowWidth >= desktopTrigger) {
				e.preventDefault();
				targetUrl = $(this).attr('href');
				storyOverlay.fadeIn('fast', function() {
					$.get(targetUrl).done(function(data) {
						var newStoryContent = $(data).find('section .wrapper').html();
						storyWindow.html(newStoryContent);
						if (windowWidth > 1100 && windowHeight > 600) {
							storyWindow.css({marginTop:(storyWindow.height() / 2) + 'px'});
						} else {
							storyWindow.css({marginTop:'100px'});
						}
					});
				});
			}
		});
		storyClose.click(function() {
			storyOverlay.fadeOut('fast', function() {
				storyWindow.html('');
			});
		});
	}
	function generateToolSlider() {
		toolCategories.addClass('js');
		var categorySlide = toolCategories.find('ul'),
			categoryItem = categorySlide.find('li'),
			categoryLink = categoryItem.find('a'),
			categoryCount = categoryItem.length,
			categoryIndex = 0,
			categoryWidth = categoryItem.width(),
			categoryNext = toolCategories.find('.next'),
			categoryPrev = toolCategories.find('.prev'),
			categoryPara = categoryItem.find('p'),
			categoryParaHeight = 0;
		categoryPara.each(function() {
			if ($(this).height() > categoryParaHeight) {
				categoryParaHeight = $(this).height();
			}
			$(this).height(categoryParaHeight);
		});
		categorySlide.width(categoryCount * categoryWidth);
		categoryNext.click(function(e) {
			e.preventDefault();
			if (!$(this).hasClass('disabled')) {
				categoryIndex++;
				if (categoryIndex < categoryCount) {
					categoryPrev.removeClass('disabled');
					categorySlide.animate({
						marginLeft: '-' + (categoryIndex * categoryWidth) + 'px'
					}, function() {
						var adjust = (windowWidth < 500) ? 2 : 6;
						if (categoryIndex === categoryCount - adjust) {
							categoryNext.addClass('disabled');
						}
					});
				}
			}
		});
		categoryPrev.click(function(e) {
			e.preventDefault();
			if (!$(this).hasClass('disabled')) {
				categoryIndex--;
				if (categoryIndex >= 0) {
					categoryNext.removeClass('disabled');
					categorySlide.animate({
						marginLeft: '-' + (categoryIndex * categoryWidth) + 'px'
					}, function() {
						if (categoryIndex === 0) {
							categoryPrev.addClass('disabled');
						}
					});
				}
			}
		});
		categoryLink.click(function(e) {
			if (windowWidth >= desktopTrigger) {
				e.preventDefault();
				categoryItem.removeClass('active');
				$(this).parent().addClass('active');
				$('.next-prev').show();
				targetUrl = $(this).attr('href');
				toolOverlay.animate({opacity:1}, 'fast', function() {
					$.get(targetUrl).done(function(data) {
						panelCurrent = 0;
						$('.next-prev .previous').addClass('disabled');
						toolFrame.css({marginLeft: 0});
						var newToolContent = $(data).find('section .wrapper').html();
						toolFrame.html(newToolContent);
						adjustToolSlider();
						$('.next-prev').show();
						toolOverlay.animate({opacity:0}, 'fast');
						generateBreadcrumb();
					});
				});
			}
		});
	}
	function generateBreadcrumb() {
		var bcPanel = toolFrame.find('.panel'),
			bcElement = $('.tool-wrapper').find('.breadcrumb');
		bcElement.html('');
		bcPanel.each(function(i) {
			var bcPanelName = $(this).data('name'),
				bcPanelClass = (i === 0) ? 'active' : '';
			bcElement.append('<li class="' + bcPanelClass + '">' + bcPanelName + '</li>');
		});
		$('.tool-wrapper .breadcrumb li').each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				panelCurrent = i;
				toolFrame.css({marginLeft: '-' + (panelCurrent * panelWidth) + 'px'});
				$('.tool-wrapper .breadcrumb li').removeClass('active').eq(i).addClass('active');
				if (panelCurrent === 0) {
					$('.next-prev').find('.previous').addClass('disabled');
				} else {
					$('.next-prev').find('.previous').removeClass('disabled');
				}
				if (panelCurrent === panelCount - 1) {
					$('.next-prev').find('.next').addClass('disabled');
				} else {
					$('.next-prev').find('.next').removeClass('disabled');
				}
			});
		});
	}
	function adjustToolSlider() {
		panelCount = toolFrame.find('.panel').length;
		panelWidth = toolFrame.find('.panel').width();
		if (panelCount <= 1) {
			$('.next-prev span').addClass('disabled');
		} else {
			$('.next-prev .next').removeClass('disabled');
		}
		var frameWidth = panelCount * panelWidth;
		toolFrame.width(frameWidth);
	}
	function toolNextPrevious() {
		panelWidth = toolFrame.find('.panel').width();
		if (windowWidth >= desktopTrigger) {
			var nextPrev = $('.next-prev'),
				nextPanel = nextPrev.find('.next'),
				prevPanel = nextPrev.find('.previous');
			nextPanel.click(function(e) {
				e.preventDefault();
				if (panelCurrent + 1 <= panelCount - 1) {
					panelCurrent++;
					toolFrame.css({marginLeft: '-' + (panelCurrent * panelWidth) + 'px'});
					prevPanel.removeClass('disabled');
					$('.tool-wrapper .breadcrumb li').removeClass('active').eq(panelCurrent).addClass('active');
					if (panelCurrent === panelCount - 1) {
						$(this).addClass('disabled');
					}
				}
			});
			prevPanel.click(function(e) {
				e.preventDefault();
				if (panelCurrent - 1 >= 0) {
					panelCurrent--;
					toolFrame.css({marginLeft: '-' + (panelCurrent * panelWidth) + 'px'});
					nextPanel.removeClass('disabled');
					$('.tool-wrapper .breadcrumb li').removeClass('active').eq(panelCurrent).addClass('active');
					if (panelCurrent === 0) {
						$(this).addClass('disabled');
					}
				}
			});
		}
	}
	function checkPanelWidth() {
		if (toolFrame.width !== (panelCount * panelWidth)) {
			toolFrame.width(panelCount * panelWidth).css({marginLeft:0});
			panelCurrent = 0;
			adjustToolSlider();
		}
	}
	function stickHeader() {
		headerSite.sticky({
			wrapperClassName: 'stuck-header'
		});
		headerStuck = true;
	}
	function stickStuff() {
		stickyFooter.wrap('<div class="stuck-wrapper" style="height:'+stickyFooter.height()+'px;"></div>');
		stickyPhone.wrap('<div class="stuck-wrapper" style="height:'+stickyPhone.height()+'px;"></div>');
		if (windowWidth > desktopTrigger) {
			stickyFooter.addClass('fixed');
			footerStuck = true;
			stickyPhone.addClass('fixed');
			phoneStuck = true;
		} else {
			stickyFooter.removeClass('fixed');
			footerStuck = false;
			stickyPhone.removeClass('fixed');
			phoneStuck = false;
		}
		checkStickPosition();
	}
	function btnTweaks() {
		if (windowWidth < desktopTrigger) {
			btn.parent().addClass('text-center');
		} else {
			btn.parent().removeClass('text-center');
		}
	}
	function generateMobileNav() {
		if (windowWidth < desktopTrigger + 15) {
			navSite.height(windowHeight);
		} else {
			navSite.height('auto');
			navSite.removeClass('active');
		}
		navControl.click(function() {
			navSite.addClass('active');
		});
		navClose.click(function() {
			navSite.removeClass('active');
		});
	}
	function adjustSections() {
		if (windowWidth < 1100) {
			contentGradient.css({minHeight : 'auto'});
		} else {
			adjust = 0;
			if (contentGradient.parent().attr('id') === 'stories') {
				adjust = 55;
			}
			contentGradient.css({minHeight : (windowHeight) + 'px'});
		}
		contentGradient.each(function() {
			if ($(this).parent().attr('id') === 'stories') {
				$(this).css({minHeight : (windowHeight - 120) + 'px'});
			}
		});
	}
})(jQuery);