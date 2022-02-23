import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// page
const Home = lazy(()=> import('../pages/Home'));
const About = lazy(()=> import('../pages/About'));
const Resume = lazy(()=> import('../pages/Resume'));

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
        <Switch location={background || location}>
          <Route path={routes.HOME} exact component={Home} />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.RESUME} component={Resume} />
        </Switch>
    )
}

export default BaseRoutes;