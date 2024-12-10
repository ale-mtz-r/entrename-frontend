import { useState } from "react";
import { Modal } from "./Modal";
import { Bagde } from "./Badge";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

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

interface Props {
    ejercicio: Ejercicio;
}

function CardEjercicio(props: Props) {
    const {ejercicio} = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    return (  
            <div 
                key={ejercicio.id} 
                className="w-[16rem] h-[32rem] bg-slate-100 rounded-xl shadow-cardShadow overflow-hidden hover:cursor-pointer"
                onClick={openModal}
            >
                <div className="hover:cursor-pointer overflow-hidden w-full h-[70%]">
                    <img className="relative w-full hover:scale-125 transition duration-500" src={`${ejercicio.miniatura}`} alt=''/>
                </div>
                <div className="flex flex-col justify-between p-2 gap-2">
                    <div>
                        <h2 className="font-semibold text-lg">{ejercicio.nombre}</h2>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-1">
                            <span>Tipo: </span>
                            <span className="font-semibold">{ejercicio.tipo_ejercicio.nombre}</span>
                        </div>
                        
                    
                        <div className="flex flex-row gap-2 overflow-x-auto">
                            {
                                ejercicio.musculos.map(((x: Musculo) => {
                                    return (
                                        // <span key={x.id} className="bg-secondary rounded-xl p-0 px-2 text-white text-sm font-semibold">
                                        //     {x.nombre}
                                        // </span>
                                        <Bagde key={x.id} text={x.nombre} />
                                    )
                                }))
                            }
                        </div>
                    </div>
                    {
                        (isModalOpen) && (
                        
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <h2 className="text-xl font-bold mb-4">{ejercicio.nombre}</h2>
                        <p className="mb-4">Tipo: <span className="font-semibold text-lg">{ejercicio.tipo_ejercicio.nombre}</span></p>
                        <p className="mb-4">Musculos: <div className="flex flex-row gap-2">{ejercicio.musculos.map(m => <Bagde key={m.id} text={m.nombre} />)}</div></p>
                        <p >Ejemplo: <a className="text-lg font-semibold" href="https://youtu.be/hAJFbRq0-OU"> Click para ver video de ejemplo</a> </p>
                        
                        <div className="flex flex-row justify-start items-center gap-3">
                            {
                                (!isEditing) ?
                                <button 
                                    className={`
                                        bg-blue-500 
                                        text-white font-bold py-2 px-4 
                                        rounded hover:bg-blue-700 
                                        flex flex-col justify-center items-center`}
                                    onClick={handleEdit}
                                >
                                    <Icon icon="clarity:edit-solid" width="1.2rem" height="1.2rem"  style={{color: 'white'}} />
                                </button>:
                                
                                <button 
                                    className={`
                                        bg-green-500 
                                        text-white font-bold py-2 px-4 
                                        rounded hover:bg-green-700 
                                        flex flex-col justify-center items-center`}
                                    onClick={handleEdit}
                                >
                                    <Icon icon="material-symbols:save" width="1.2rem" height="1.2rem"  style={{color: 'white'}} />
                                </button>

                            }
                           
                            
                            <button 
                                className="flex flex-col justify-center items-center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
                                onClick={closeModal}
                            >
                                <Icon icon="pajamas:cancel" width="1.2rem" height="1.2rem"  style={{color: 'white'}} />
                            </button>
                        </div>
                    </Modal>)
                    }
                   

                </div>
            </div>
    );
}

export { CardEjercicio };