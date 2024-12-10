import { Icon } from '@iconify-icon/react';
import { Outlet, Link } from "react-router-dom";

interface menuOpt {
    name: string;
    icon: string;
    route: string;
}

const menuOpts: menuOpt[] = [
    {
        name: 'Ejercicio',
        icon: 'hugeicons:workout-gymnastics',
        route: '/ejercicios',
    },
    {
        name: 'Usuarios',
        icon: 'ph:users-bold',
        route: '/usuarios',
    },
    {
        name: 'Rutinas',
        icon: 'grommet-icons:plan',
        route: '/rutinas',
    },
]

export const Sidebar = () => {
    return (
    
        <aside className="fixed 2xl:w-sidebarWidth h-full bg-primary p-2 shadow-xl t-0 l-0 box-border z-50"> 
            <div className='flex flex-col justify-start items-center w-full h-full gap-5'>
                <Icon icon="cil:menu" width="2rem" height="2rem"  style={{color: 'black'}} />
                <nav className='h-[50%]'>
                    <ul className='flex flex-col gap-4'>
                        {
                            menuOpts.map((opt, index) => (
                                <li key={index}>
                                    <div className='group bg-secondary rounded-xl p-2 box-border shadow-lg'>
                                        <Link to={opt.route} className='flex items-center gap-2 hover:cursor-pointer'>
                                            <Icon
                                                icon={opt.icon}
                                                width="1.8rem" 
                                                height="1.8rem"
                                                style={{color: '#F4F7FB'}} 
                                            />
                                            <span className={`
                                                absolute 
                                                left-[70px] 
                                                scale-0 
                                                transition-all 
                                                rounded-lg 
                                                bg-secondary p-2 
                                                text-xs text-white 
                                                group-hover:scale-100 
                                                `}>{opt.name}</span>
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <div className='w-full h-[50%] flex flex-col justify-end items-center '>
                    <div className='rounded-xl shadow-md border w-[50px] h-[50px]'>
                        <img className='w-full h-full' src="https://robohash.org/entrename" alt="" />
                    </div>
                </div>
            </div>
        </aside>
         
    )
}