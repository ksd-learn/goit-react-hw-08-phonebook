import { Outlet } from "react-router-dom";
import { Navigation } from './navigation/Navigation';

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