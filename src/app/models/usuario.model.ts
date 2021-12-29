

export class UsuarioModel {

    /**
     * Inicializa el usuario con los parametros.
     * @param id number id
     * @param first_name string nombre usuario
     * @param last_name string apellido usuario
     * @param avatar string url de la imagen del usuario
     */
    constructor(
        public id        : string,
        public first_name: string,
        public last_name : string,
        public avatar    : string,
        public email     : string
    ){}

}