// Etiquetas visibles y colores de distintivo de los tipos de noticia.
//
// Los valores del enum `type` de la coleccion `noticias` van sin tilde por
// diseno del esquema (`Participacion`, `Accion local`, `Asociacion`), igual que
// el resto de identificadores del repo. Eso obliga a traducirlos antes de
// pintarlos: en crudo se leen en pantalla sin acentuar, que es justo lo que se
// habia colado en la portada.
//
// Estos dos mapas estaban repartidos en tres copias parciales (portada, listado
// de /actualidad/ y pagina de noticia) y no coincidian: la portada asignaba al
// tipo 'Erasmus+' el color `indigo` y el listado `eu`, asi que la misma noticia
// cambiaba de color al pasar de una pagina a otra. Aqui se declaran una vez.
//
// El azul europeo (`badge-eu`) queda reservado a lo que de verdad procede de un
// programa de la Union; el resto sale de la paleta propia de la asociacion.
//
// Va en src/lib/ y no en src/data/ porque no es un dato publicable de la
// asociacion, sino la tabla de presentacion de un campo del esquema.

export const ETIQUETA_TIPO: Record<string, string> = {
  'Erasmus+': 'Erasmus+',
  DiscoverEU: 'DiscoverEU',
  Participacion: 'Participación',
  'Accion local': 'Acción local',
  Asociacion: 'Asociación',
};

export const COLOR_TIPO: Record<string, string> = {
  'Erasmus+': 'eu',
  DiscoverEU: 'turquesa',
  Participacion: 'terracota',
  'Accion local': 'oro',
  Asociacion: 'indigo',
};

// Los dos accesores devuelven un valor de reserva en vez de undefined: si maniana
// se anade un tipo al enum sin pasar por aqui, la pagina sigue construyendose y
// se ve el valor crudo, en lugar de romper el build o pintar "undefined".
export const etiquetaTipo = (tipo: string): string => ETIQUETA_TIPO[tipo] ?? tipo;

export const colorTipo = (tipo: string): string => COLOR_TIPO[tipo] ?? 'indigo';
