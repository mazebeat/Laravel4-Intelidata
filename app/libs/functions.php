<?php

Class Func {

	public static function printr($a) {
		echo "<pre>" . htmlspecialchars(print_r($a, true)) . "</pre>";
	}

	public static function array_orderby()
	{
		$args = func_get_args();
		$data = array_shift($args);
		foreach ($args as $n => $field) {
			if (is_string($field)) {
				$tmp = array();
				foreach ($data as $key => $row)
					$tmp[$key] = $row[$field];
				$args[$n]  = $tmp;
			}
		}
		$args[] = &$data;
		call_user_func_array('array_multisort', $args);
		return array_pop($args);
	}

	public static function groupArray($array,$groupkey)
	{
		if (count($array)>0) {

			$keys      = array_keys($array[0]);
			$removekey = array_search($groupkey, $keys);
			if ($removekey===false)
				return array("Clave \"$groupkey\" no existe");
			else
				unset($keys[$removekey]);
			$groupcriteria = array();
			$return        = array();
			foreach($array as $value)
			{
				$item=null;
				foreach ($keys as $key)
				{
					$item[$key] = $value[$key];
				}
				$busca = array_search($value[$groupkey], $groupcriteria);
				if ($busca === false)
				{
					$groupcriteria[] = $value[$groupkey];
					$return[]        = array($groupkey=>$value[$groupkey],'items'=>array());
					$busca           = count($return)-1;
				}
				$return[$busca]['items'][]=$item;
			}
			return $return;
		}
		else
			return array();
	}

	// Usage:

	// //Fill an array with random test data
	// define('MAX_ITEMS', 15);
	// define('MAX_VAL', 20);
	// for($i=0; $i < MAX_ITEMS; $i++)
	//   $data[] = array('field1' => rand(1, MAX_VAL), 'field2' => rand(1, MAX_VAL), 'field3' => rand(1, MAX_VAL) );

	// //Set the sort criteria (add as many fields as you want)
	// $sortCriteria =
	//   array('field1' => array(SORT_DESC, SORT_NUMERIC),
	//        'field3' => array(SORT_DESC, SORT_NUMERIC)
	//   );

	// //Call it like this:
	// $sortedData = MultiSort($data, $sortCriteria, true);
	public static function MultiSort($data, $sortCriteria, $caseInSensitive = true)
	{
		if( !is_array($data) || !is_array($sortCriteria))
			return false;
		$args = array();
		$i    = 0;
		foreach($sortCriteria as $sortColumn => $sortAttributes)
		{
			$colList = array();
			foreach ($data as $key => $row)
			{
				$convertToLower              = $caseInSensitive && (in_array(SORT_STRING, $sortAttributes) || in_array(SORT_REGULAR, $sortAttributes));
				$rowData                     = $convertToLower ? strtolower($row[$sortColumn]) : $row[$sortColumn];
				$colLists[$sortColumn][$key] = $rowData;
			}
			$args[] = &$colLists[$sortColumn];

			foreach($sortAttributes as $sortAttribute)
			{
				$tmp[$i] = $sortAttribute;
				$args[]  = &$tmp[$i];
				$i++;
			}
		}
		$args[] = &$data;
		call_user_func_array('array_multisort', $args);
		return end($args);
	}

	public static function postUpload ($input = '') {
		if (Input::hasFile($input)) {
            // Get file input
			$file = Input::file('file');
			$name = time() . '-' . $file->getClientOriginalName();
			// Check out the edit content on bottom of my answer for details on $storage
			$path = storage_path() . '/uploads/CSV';
			// Moves file to folder on server
			$file->move($path, $name);
            // Import the moved file to DB and return OK if there were rows affected
			return ($this->importCSV($path, $name) ? 'OK' : 'No rows affected' );
		}
	}

	private static function importCSV ($path = '', $filename = '', $table = '') {
        // CSV File
		$csv   = $path . $filename;
		// Ofcourse you have to modify that with proper table and field names
		$query = sprintf("LOAD DATA local INFILE '%s' INTO TABLE %s FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' ESCAPED BY '\"' LINES TERMINATED BY '\\n' IGNORE 0 LINES (`filed_one`, `field_two`, `field_three`)", array(addslashes($csv),$table));
		// Insert data into DB
		return DB::connection()->getpdo()->exec($query);
	}

	// DATABASE FUNCTIONS
	public static function convNumberToMonth ($number = 0) {
        // Array with number => month
		$month = array('1' => 'enero', '2' => 'febrero', '3' => 'marzo', '4' => 'abril', '5' => 'mayo', '6' => 'junio', '7' => 'julio', '8' => 'agosto', '9' => 'septiembre', '10' => 'octubre', '11' => 'noviembre', '12' => 'diciembre');
		// Get Month name into array
		$month = array_get($month, $number, '');
		// Convert name to CamelCase
		$month = studly_case($month);
		return $month;
	}

	public static function convMonthToNumber ($month = '') {
        // Array with month => number
		$number = array('enero' => '1', 'febrero' => '2', 'marzo' => '3', 'abril' => '4', 'mayo' => '5', 'junio' => '6', 'julio' => '7', 'agosto' => '8', 'septiembre' => '9', 'octubre' => '10', 'noviembre' => '11', 'diciembre' => '12');
		// Convert name to lower case
		$month  = Str::lower($month);
		// Get number into array
		$number = array_get($number, $month, 0);
		return $number;
	}

	//COLOR FUNCTIONS
	public static function rgb_hex($rgb) {
		return sprintf("%06X", $rgb);
	}

	public static function rnd_color() {
		$arr    = array('A','B','C','D','E','F');
		$cadena = '#';
		for($i=0;$i<=5;$i++) $cadena .= $arr[rand(0,5)];
			return $cadena;
	}

	public static function oscurece_color($color,$cant) {
		//voy a extraer las tres partes del color
		$rojo = substr($color,1,2);
		$verd = substr($color,3,2);
		$azul = substr($color,5,2);

		//voy a convertir a enteros los string, que tengo en hexadecimal
		$introjo = hexdec($rojo);
		$intverd = hexdec($verd);
		$intazul = hexdec($azul);

		//ahora verifico que no quede como negativo y resto
		if($introjo-$cant>=0) $introjo = $introjo-$cant;
		if($intverd-$cant>=0) $intverd = $intverd-$cant;
		if($intazul-$cant>=0) $intazul = $intazul-$cant;

		//voy a convertir a hexadecimal, lo que tengo en enteros
		$rojo = dechex($introjo);
		$verd = dechex($intverd);
		$azul = dechex($intazul);

		//voy a validar que los string hexadecimales tengan dos caracteres
		if(strlen($rojo)<2) $rojo = "0".$rojo;
		if(strlen($verd)<2) $verd = "0".$verd;
		if(strlen($azul)<2) $azul = "0".$azul;

		//voy a construir el color hexadecimal
		$oscuridad = "#".$rojo.$verd.$azul;

		//la función devuelve el valor del color hexadecimal resultante
		return Str::upper($oscuridad);
	}

	public static function rgba (){
		$r = mt_rand(1,255);
		$g = mt_rand(1,255);
		$b = mt_rand(1,255);

		// Generamos el valor RGB para CSS
		$color = array(
		'full' => 'rgba('.$r.','.$g.','.$b.',1)',
		'75'   => 'rgba('.$r.','.$g.','.$b.',0.75)',
		'50'   => 'rgba('.$r.','.$g.','.$b.',0.5)',
		'25'   => 'rgba('.$r.','.$g.','.$b.',0.25)',
		'20'   => 'rgba('.$r.','.$g.','.$b.',0.2)',
		);
		return $color;
	}
}