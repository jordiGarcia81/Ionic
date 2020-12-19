export interface Iproducto{
    
        "id": number,
        "Nombre": String,
        "Descripcion" : string,
        "Precio": number
      
}

export interface IMotor extends Iproducto{
    "Tipo":string,
    "Km":number,
    "Fecha":Date
}

export interface IInmobiliaria extends Iproducto{
    "M2": number,
    "Banyos":number,
    "Habitaciones": number,
    "Localidad": string
}

export interface ITecnologia extends Iproducto{
    "Estado": string
    
}