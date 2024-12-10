import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardEjercicio } from "../components/CardEjercicio";
import { Modal } from "../components/Modal";

interface TipoEjercicio {
    id: number;
    nombre: string;
  }
  
  interface Musculo {
    id: number;
    nombre: string;
  }
  
  interface Ejercicio {
    id: number;
    nombre: string;
    created_at: string; // Usamos string para la fecha en formato ISO
    updated_at: string;
    tutorial: string;
    miniatura: string;
    tipo_ejercicio: TipoEjercicio;
    musculos: Musculo[];
    deleted: boolean;
}


function Ejercicios() {
    const [ejercicios, setEjercicios] = useState<Ejercicio[]>();

    useEffect(() => {
        axios.get('http://localhost:4000/ejercicios').then((response) => {
            setEjercicios(response.data);
        }).catch
    }, [])

    return ( 
        <main className="flex flex-col gap-5 box-border">
            {/* title */}
            <h1 className="text-3xl font-normal">Ejercicios</h1>
            {/* button add */}
            {/* <button className="bg-secondary font-semibold text-white px-4 py-2 rounded-md w-[20%]" >Agregar</button> */}
            
            <div className="grid lg:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 box-border">

                {/* Card */}
                <div className="flex flex-col justify-center items-center w-[16rem] h-[32rem] bg-slate-100 rounded-xl border-dashed border-4 hover:cursor-pointer">
                    <div className="rounded-full flex flex-col justify-center items-center w-[100px] h-[100px] border-dashed border-4">
                        <Icon icon="cil:plus" width="4rem" height="4rem"  style={{color: 'gray'}} />
                    </div>
                </div>

                {
                    ejercicios?.map((ejercicio: Ejercicio) => (
                        <CardEjercicio ejercicio={ejercicio} />
                    ))
                }

            </div>
        </main>
     );
}

export { Ejercicios };