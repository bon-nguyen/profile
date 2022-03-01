import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
//modal
import ProjectCardModal from '../pages/Projects/ProjectCardModal';

// page
const Home = lazy(()=> import('../pages/Home'));
const About = lazy(()=> import('../pages/About'));
const Resume = lazy(()=> import('../pages/Resume'));
const Project = lazy(()=> import('../pages/Projects'));
const Contact = lazy(()=> import('../pages/Contact'));

//routes
export const routes = {
    HOME: '/',
    ABOUT: '/about',
    PROJECTS: '/projects',
    PROJECT: '/project/:id',
    RESUME: '/resume',
    CONTACT: '/contact',
};

const BaseRoutes = () => {

    const location = useLocation();
    const background = location.state?.background;
    
    return (
        <>
            <Switch location={background || location}>
                <Route path={routes.HOME} exact component={Home} />
                <Route path={routes.ABOUT} component={About} />
                <Route path={routes.PROJECTS} component={Project} />
                <Route path={routes.PROJECT} component={ProjectCardModal} />
                <Route path={routes.RESUME} component={Resume} />
                <Route path={routes.CONTACT} component={Contact} />
            </Switch>
            {background && (
                <Route path={routes.PROJECT} component={ProjectCardModal} />
            )}
        </>
    )
}

export default BaseRoutes;