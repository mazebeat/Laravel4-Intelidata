<?php

/**
 * PreguntaRespuesta
 *
 * @property integer $id
 * @property integer $id_pregunta
 * @property integer $id_respuesta
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property string $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\ClientePregunta[] $clientePregunta
 * @method static \Illuminate\Database\Query\Builder|\PreguntaRespuesta whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\PreguntaRespuesta whereIdPregunta($value)
 * @method static \Illuminate\Database\Query\Builder|\PreguntaRespuesta whereIdRespuesta($value)
 * @method static \Illuminate\Database\Query\Builder|\PreguntaRespuesta whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\PreguntaRespuesta whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\PreguntaRespuesta whereDeletedAt($value)
 */
class PreguntaRespuesta extends \Eloquent {
	protected $table = 'pregunta_respuesta';
	protected $primaryKey = 'id';

	// public static function getIdPreguntaRespuesta($idPregunta, $idRespuesta)
	// {
	// 	return PreguntaRespuesta::where('id_pregunta','=',$idPregunta)->where('id_respuesta','=',$idRespuesta)->select('id')->get();
	// }

	// public static function getPreguntaConRespuesta($id)
	// {
	// 	return PreguntaRespuesta::where('id','=',$id)->select('id_pregunta','id_respuesta')->get();
	// }

	public function clientePregunta(){
			return $this->hasMany('ClientePregunta','id_pregunta_respuesta');
	}
}