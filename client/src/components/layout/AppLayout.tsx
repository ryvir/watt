import {Outlet} from 'react-router-dom';
import {useScreenType} from '../../hooks/useScreenType';

// Components
import BottomNav from './BottomNav';
import Sidebar from './Sidebar';


// The layout for the main schedule app.
export default function AppLayout() {
    const screenType = useScreenType();

    return (
        <div id="app" className="relative h-full flex flex-col md:flex-row">
            {screenType !== 'phone' && (
                <Sidebar />
            )}
            <div id="content" className="flex-grow min-w-0 pb-16 md:pb-0">
                <Outlet />
            </div>
            {screenType === 'phone' && (
                // On phones, display a bottom nav instead of the sidebar
                <BottomNav/>
            )}
        </div>
    );
}
