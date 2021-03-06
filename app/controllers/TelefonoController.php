<?php

class TelefonoController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /telefono
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /telefono/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /telefono
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 * GET /telefono/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /telefono/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /telefono/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /telefono/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

	public function telefonoMontosTotales()
	{
		$hasta            = Carbon::now()->startOfMonth();
		$desde            = Carbon::now()->subMonths(12)->startOfMonth();
		$telefonosCliente = Cliente::find(Session::get('ses_user_id'))->telefonos;
		$arregloExcel     = array();
		$arregloNumero    = array();
		$arregloMonto     = array();
		$arregloFecha     = array();
		$fechas           = array();
		$ingreso          = false;
		foreach ($telefonosCliente as $numeros)
		{
			$telefonos = Telefono::find($numeros->id)->montos()->whereBetween('fecha', array($desde, $hasta))->get();
			foreach ($telefonos as $montos)
			{
				$arregloFecha[]    = $montos->fecha;
				$arregloTelefono[] = Telefono::getNumero($montos->id_telefono);
				$arregloMonto[]    = $montos->monto_total;
			}
			if(!$ingreso)
			{
				$fechas = $arregloFecha;
				$ingreso = true;
			}
		}
		array_push($arregloExcel, $arregloFecha, $arregloTelefono, $arregloMonto);

		Excel::create('dataMontosTelefonos', function($excel)use($arregloExcel, $fechas)
		{
			for($y=0; $y < count($fechas); $y++)
			{
				$excel->sheet($fechas[$y], function($sheet)use($arregloExcel, $fechas, $y)
				{
					$sheet->setOrientation('landscape');
					$sheet->row(1, array('FECHA','NUMERO', 'MONTO'));
					$cont = 2;
					for($x = 0; $x < count($arregloExcel[0]); $x++)
					{
						$fecha1 = new Carbon($fechas[$y]);
						$fecha2 = new Carbon($arregloExcel[0][$x]);
						if( ($fecha1->month) == ($fecha2->month) && ($fecha1->year) == ($fecha2->year) )
						{
							$sheet->appendRow($cont, array($arregloExcel[0][$x], $arregloExcel[1][$x], $arregloExcel[2][$x]));
							$cont++;
						}
					}
				});
			}
		})->export('xls');
	}

	public function telefonosMontosDetalles($idCliente, $fecha, $mes)
	{
		$date = new Carbon($fecha);
		$b = array();
		foreach ($telefonos = Cliente::find($idCliente)->numeros as $k => $value)
		{
			$telefono = new stdClass;
			$id     = $value->id;
			$telefono->numero = $value->numero;
			$telefono->total = Telefono::find($value->id)->montos()->where(DB::raw('MONTH(fecha)'),  $date->month)->where(DB::raw('YEAR(fecha)'), $date->year)->first()->monto_total;

			foreach (Telefono::find($id)->servicios()->select('tipo', 'precio_servicio')->where(DB::raw('MONTH(fecha)'), $date->month)->where(DB::raw('YEAR(fecha)'), $date->year)->get() as $value)
			{
				$detalle = $value->tipo;
				$precio  = $value->precio_servicio;
				$telefono->$detalle = $precio;
			}
			array_push($b, $telefono);
		}

		$data = array();
		$data = json_decode(json_encode($b), true); //desde objeto a arreglo

		//******************* GRAFICO *********************
		Excel::create('detalladoPorMes', function($excel)use($data, $mes)
		{
			$excel->sheet('Septiembre', function($sheet)use($data)
			{
				$sheet->fromArray($data);
			});
		})->export('xls');
	}
}