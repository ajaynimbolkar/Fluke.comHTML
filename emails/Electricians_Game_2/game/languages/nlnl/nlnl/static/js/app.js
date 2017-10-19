$(function() {

	/**
	 * Init application
	 */
	$.getJSON('language.json', function(data) {
		data = data[0];

		document.title = data.title;

		// Header
		$('.container.header h2').html(data.title);
		$('.container.header .select-winners span.title').html(data['heading.winners']);

		$('.container.header .select-locale span.title').html(data['heading.countries'][0]);
		$('.container.header .select-locale span.locale-de').html(data['heading.countries'][2]);
		$('.container.header .select-locale span.locale-at').html(data['heading.countries'][3]);
		$('.container.header .select-locale span.locale-fr').html(data['heading.countries'][5]);
		$('.container.header .select-locale span.locale-nl').html(data['heading.countries'][1]);
		$('.container.header .select-locale span.locale-dk').html(data['heading.countries'][4]);
		$('.container.header .select-locale span.locale-pt').html(data['heading.countries'][7]);
		$('.container.header .select-locale span.locale-pl').html(data['heading.countries'][6]);

		// Footer
		$('.container.footer li.title-terms a').html(data['footer.terms']);
		$('.container.footer li.title-privacy a').html(data['footer.privacy']);
		$('.container.footer li.title-disclaimer a').html(data['footer.disclaimer']);
		$('.container.footer .title-copyright').html(data['footer.copyright']);

		// Overlay
		$('.container.overlay h2').html(data['intro.heading']);
		$('.container.overlay h3').html(data['intro.sub_heading']);
		$('.container.overlay button').html(data['intro.start_button']);

		// Howto
		$('.container.howto-inner h3').html(data['game.how_to']);

		// Game
		$('.row.check-solution button').html(data['game.check_button']);
		$('.row.try-again button').html(data['game.again_button']);
		$('.row.submit-results button').html(data['game.game.submit_button']);

		// Form
		$('.container.form h3').html(data['form.heading']);
		$('.container.form fieldset legend').html(data['form.fieldset.details']);
		$('.container.form span.form-firstname').html(data['form.field.firstname']);
		$('.container.form span.form-lastname').html(data['form.field.lastname']);
		$('.container.form span.form-email').html(data['form.field.email']);
		$('.container.form span.form-country').html(data['form.field.country']);

		var option   = '',
			selected = '';
		$.each(data['countries'], function (k, v) {
			if (k == data['country.default']) {
				selected = ' SELECTED ';
			}

			option = ['<option value="', k, '"', selected ,'>', v, '</option>'];
			$('.form-country-select').append(option.join(''));

			selected = '';
		});

		$('.container.form .digital-fluke-newsletter').html(data['form.newsletter']);
		$('.container.form .form-conditions').html(data['form.conditions']);

		$('.container.form .block-price h3').html(data['form.price.title']);
		$('.container.form .block-price p.p1').html(data['form.price.p1']);
		$('.container.form .block-price p.p2').html(data['form.price.p2']);
	});

	$(document).bind('touchmove', false);

	$.fx.interval = 10;

	/**
	 * Layout fixes
	 */
	$('.container.header .btn-group').each(function() {
		$(this).find('button.btn').width($(this).find('ul.dropdown-menu').width() - 14);
		$(this).find('ul.dropdown-menu').width($(this).find('ul.dropdown-menu').width() + 10);
	});

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
		// snap:           '.game-block',
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

	/**
	 * Form submit
	 */
	$('form').submit(function (e) {
		$('input[name=dcUniqueID]').val($('input[name=emailAddress]').val() + $.now());

		if ($('input[name=iGBulkEmailOptIn]').prop('checked')) {
			$('input[name=iGBulkEmailOptOut]').val('False');
		} else {
			$('input[name=iGBulkEmailOptOut]').val('True');
		}
	});

	$('#agreer').change(function() {
		if ($(this).is(':checked')) {
			$('#form-submitter').removeAttr('disabled');
		} else {
			$('#form-submitter').attr('disabled', true);
		}
	});

});

function checkGameState() {
	// Is the game ended?
	if ($('.dropped').length === $('.game-block').length) {
		$('body').trigger('complete-game');
	}
}