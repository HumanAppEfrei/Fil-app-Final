<?php

	header("Access-Control-Allow-Origin: *");
	
	$page = file_get_contents("http://www.cancer-mes-droits.fr/questions/aides-et-soutien-pendant-et-apres-mon-cancer#acc-s-au-dispositif-d-affection-de-longue-dur-e-ald-");//recuperation des donnees 
	
	$page = str_replace(array("\r", "\n" ), '', $page);// supprimer les sauts de ligne
	$page = preg_replace('#<!--.*?-->#s', '', $page);// supprimer les commentaires html
	$page=preg_replace('/\s\s+/', ' ', $page); // supprimer les doubles espaces
	
	preg_match_all('/<div class="thematique">(.*)<\/div>/',$page,$out,PREG_PATTERN_ORDER);//recuperer les donnees qu'il nous faut

	$out[0][0] = preg_replace('/<div class="box-references">(.*)<\/div>/',' ', $out[0][0]);// supprimer les balises non voulues

	echo '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>'.$out[0][0];
	
	
?>