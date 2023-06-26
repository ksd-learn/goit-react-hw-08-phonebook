import { Outlet } from "react-router-dom";
import { Navigation } from './navigation/Navigation';
import css from './Layout.module.css';

export const Loyaut = () => {
    return (
    <>
        <header>
            <Navigation />
        </header>

        <main>
            <Outlet />
        </main>
    </>
       
    )
}