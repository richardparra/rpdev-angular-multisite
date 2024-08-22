export interface OfertaResponse {
  codoferta:     number;
  codigourl: string;
  nombre:      string;
  nombrecurso:      string;
  descripcion:string;
  horas: string;
  creditos: string;
  modalidad: string;
  fechainicio: string;
  monprepub : number,
  monpreaso : number,
  mostrarbeca: boolean,
  convenio: Convenio;
  secciones: Seccion[];
}

export interface Convenio {
  codconvenio: number,
  nombre: string
}

export interface Seccion {
  nivel: number,
  titsec: string,
  dessec: string,
  informaciones: Informacion[]
}

export interface Informacion {
  codinfo: number,
  titulo: string,
  subtitulo: string,
  descripcion: string,
  contenido: string,
  background: string,
  imagen: string
}

export interface Enrollment {
  id:       number;
  attendAt: Date;
  grade:    null;
  createAt: Date;
  enrolled: Enrolled;
  activity: Activity;
}

export interface Enrolled {
  id:       number;
  lastaccess: Date;
  grade:    null;
  createAt: Date;
  updateAt: Date;
  person:   Person
}

export interface Activity {
  id:       number;
  name:    string;
  code:     string;
  beginAt:  Date;
  finishAt: Date;
  plan:     Plan;
}

export interface Plan {
  id:      number;
  name:    string;
  code:    string;
  hours:   null;
  credits: null;
}

export interface Person {
  id:             number;
  firstName:      string;
  lastName:       string;
  document:       string;
  documentTypeId: number;
  phone:          null;
  email:          string;
  ubigeo:         null;
  typeId:         number;
  rankingId:      number;
  createAt:       Date;
  updateAt:       Date;
}
