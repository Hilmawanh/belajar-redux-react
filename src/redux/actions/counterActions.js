import {MOBIL,MOTOR,RESET} from '../type'

export const BiayaMobil = durasi =>{
    return{
        type:MOBIL,
        payload: durasi
    }
}

export const BiayaMotor= durasi =>{
    return{
        type:MOTOR,
        payload: durasi
    }
}

export const ResetState=()=>{
    return{
        type: RESET
    }
}