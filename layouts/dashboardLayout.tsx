import { useState } from 'react';
import {HiOutlineMoon} from 'react-icons/hi'


export default function DashboardLayout(props: any) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkTheme = () => setDarkTheme((theme:any) => !theme)
    

    return (
        <div className={`${darkTheme ? "dark" : ""} w-screen h-screen`}>
            <nav className="bg-light dark:bg-element-dark w-full flex justify-between items-center h-14 text-black shadow-sm">
                <h1 className="title font-bold ml-14 text-[17px] dark:text-light">Where in the world?</h1>
                <div className="theme-toggle flex items-center mr-20 cursor-pointer" onClick={toggleDarkTheme}>
                    <HiOutlineMoon color={darkTheme ? '#ffffff':'black'} />
                    <p className='text-hi ml-2 font-semibold dark:text-light'>{darkTheme ? 'Light Mode':'Dark Mode'}</p>
                    </div>
            </nav>
            
            <div className='main px-14 py-10 w-full h-[91vh] dark:bg-background-dark'>
              {props.children}
            </div>
        </div>
    )
}