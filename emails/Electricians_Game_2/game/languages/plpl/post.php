<?php

/**
 * 
 */

if (!empty($_POST)) {

	$url    = 'https://s1182545284.t.eloqua.com/e/f2';
	$fields = http_build_query($_POST);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,            $url);
	curl_setopt($ch, CURLOPT_POST,           count($_POST));
	curl_setopt($ch, CURLOPT_POSTFIELDS,     $fields);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	curl_exec($ch);
	curl_close($ch);

	header('Location: http://www.fluke.com/fluke/plpl/home/default');

}