$(function() {

	setTimeout(function() {
		if (window.location.hash == '#restart') {
			$('.event').trigger('start-game');
		} else {
			$('.container.overlay').fadeIn();
		}
	}, 500);

	/**
	 * Start game
	 */
	$('.container.cards, .sequence').hide();
	$('.container.howto-inner, .container.howto-overlay').hide();

	$('.event').click(function() {
		$(this).trigger($(this).attr('data-event'));
	});

	/**
	 * Start game event.
	 */
	$('.event').on('start-game', function() {
		$('.container.overlay').fadeOut(function() {
			$('.container.howto-inner, .container.howto-overlay').fadeIn();
			$('.container.cards').show();

			queueAnimation('#blocks .sequence', 100, function(element) {
				$(element).show(100);
			});

			setTimeout(function() {
				queueAnimation('#items .sequence', 100, function(element) {
					$(element).show(100);
				});
				$('.container.howto-inner, .container.howto-overlay').fadeOut(250);
			}, 3000);
		});
	});

	/**
	 * Complete game
	 */
	$('body').on('complete-game', function() {
		$('.check-solution').show();
	});

	$('.check-solution').click(function() {
		$('.check-solution').hide();
		queueAnimation('#blocks .sequence .game-block', 250, function(element) {
			if ($(element).hasClass('invalid')) {
				$(element).after('<div class="answer-wrong"></div>');
			} else if ($(element).hasClass('valid')) {
				$(element).after('<div class="answer-right"></div>');
			}

			if ($('.answer-right').length == $('.game-block').length) {
				$('.submit-results').fadeIn();
				$('.try-again').hide();
			} else if ($('.answer-wrong, .answer-right').length == $('.game-block').length) {
				$('.submit-results').hide();
				$('.try-again').fadeIn();
			}
		});
	});

	$('.try-again button.btn').click(function() {
		window.location.hash = '#restart';
		window.location.reload();
	});

	$('.row.submit-results .btn').click(function() {
		$(this).fadeOut(100);
		// queueAnimation('#blocks .sequence', 100, function(element) {
		// 	$(element).hide(100);
		// });

		$('#items .sequence, #blocks .sequence').fadeOut(100);

		// queueAnimation('#items .sequence', 100, function(element) {
		// 	$(element).hide(100);
		// });

		setTimeout(function() {
			$('.container.form').fadeIn(function() {
				$('.container.form .span-4').height($('.container.form .span-8').height() - 5);
			});
		}, 500);
	});

	$('#taf').click(function() {
		if ($(this).is(':checked')) {
			$('.container.form .span-4').show();
		} else {
			$('.container.form .span-4').hide();
		}
	});

});

function queueAnimation(element, time, callback) {
	var i        = 0,
		_element = element; 

	element = $($(element)[0]);
	callback(element);

	var timer = setInterval(function() {
		element = $($('body').find(_element)[++i])
		callback(element);

		if ($(_element).length == i) {
			clearInterval(timer);
		}
	}, time);
}