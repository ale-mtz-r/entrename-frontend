import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { MouseEventHandler } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode; // Esto permite que el componente Modal pueda recibir cualquier tipo de componente como children
}
function Modal({ isOpen, onClose, children}: Props) {
    if (!isOpen) return null;

    return ( 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 hover:cursor-default" onClick={onClose}>
        <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-1/2 lg:w-1/3" onClick={e => e.stopPropagation()}>
            <button className="flex flex-col justify-center items-center absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
                <Icon icon="line-md:menu-to-close-alt-transition" width="2rem" height="2rem"  style={{color: 'black'}} />
            </button>
            {children}
        </div>
        </div>
     );
}

export { Modal } ;