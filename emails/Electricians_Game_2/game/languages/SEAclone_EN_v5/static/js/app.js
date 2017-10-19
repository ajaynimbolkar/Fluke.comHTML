$(function() {

	/**
	 * Init application
	 */
	$.getJSON('language.json', function(data) {
		data = data[0];

		document.title = data.title;

		// Header
		$('.container.header h2').html(data.title);
		$('.container.header h4').html(data.subtitle);

		// Footer
		$('.container.footer li.title-terms a')
			.html(data['footer.terms'])
			.attr('href', data['footer.url.terms']);

		$('.container.footer li.title-privacy a')
			.html(data['footer.privacy'])
			.attr('href', data['footer.url.privacy']);

		$('.container.footer li.title-disclaimer a')
			.html(data['footer.disclaimer'])
			.attr('href', data['footer.url.disclaimer']);

		$('.container.footer .title-copyright')
			.html(data['footer.copyright']);

		// Overlay
		$('.container.overlay h2').html(data['intro.heading']);
		$('.container.overlay h3').html(data['intro.sub_heading']);
		$('.container.overlay button').html(data['intro.start_button']);

		// Howto
		$('.container.howto-inner h3').html(data['game.how_to']);

		// Game
		$('.row.check-solution button').html(data['game.check_button']);
		$('.row.try-again button').html(data['game.again_button']);
		$('.row.submit-results button').html(data['game.submit_button']);

		//Form
		$('.container.form h3').html(data['form.heading']);
	});

	$(document).bind('touchmove', false);

	$.fx.interval = 10;

	/**
	 * Place question marks relative to their parents
	 */
	$.getJSON('settings.json', function(data) {
		$(data).each(function(i) {
			$($('.game-question-mark')[i]).css(this.questionmark);
			$($('.game-block-title')[i]).html(this.title);
			$($('.game-block-inner')[i]).css({
				background: 'url("' + this.image + '")'
			});
			$($('.game-item-inner')[i]).css({
				background: 'url("' + this.thumb + '")'
			})
		});

		/**
		 * Randomize game elemens
		 */
		$('#items').randomize('.span-2');
		$('#blocks').randomize('.span-4');
	});

	/**
	 * Drag items
	 */
	$('.game-item').draggable({
		revert:         'invalid',
		revertDuration: 100
	});

	/**
	 * Drop items
	 */
	$('.game-block').droppable({
		accept: '.game-item',
		drop: function(event, ui) {
			var item  = $(ui.draggable[0]),
				block = $(event.target);

			// Add dropped class to the block
			block.addClass('dropped');
			block.animate({
				opacity: 0.6
			});

			// Set item position relative to the block position
			$(item).offset({
				top:  block.offset().top + (block.height() - item.height()) / 2,
				left: block.offset().left + (block.width() - item.width()) / 2
			});

			// Add the appropriate class names 
			if (item.attr('data-item') != block.attr('data-item')) {
				block.addClass('invalid');
			} else {
				block.addClass('valid');
			}

			// Remove the droppable functionality completely.
			block.droppable('destroy');
			item.draggable('destroy');

			checkGameState();
		}
	});

	
});

function checkGameState() {
	// Is the game ended?
	if ($('.dropped').length === $('.game-block').length) {
		$('body').trigger('complete-game');
	}
}