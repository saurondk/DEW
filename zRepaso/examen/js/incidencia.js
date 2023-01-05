export function Incidencia(fecha,telefono,mail,responsable,
    servicios,prioridad,estado,observaciones =[]) {
    
        this.fecha = fecha;
        this.telefono = telefono;
        this.mail = mail;
        this.responsable = responsable;
        this.servicios = servicios;
        this.prioridad = prioridad;
        this.estado = estado;
        this.observaciones = observaciones;

}