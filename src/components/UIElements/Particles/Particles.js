import ReactTsparticles from "react-tsparticles";
import React from 'react';
import {
    DARK_THEME_PARTICLES,
    LIGHT_THEME_PARTICLES,
} from './ParticleType';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const Particles = () => {
    const { dark } = useThemeContext();
    const particles = dark ? DARK_THEME_PARTICLES : LIGHT_THEME_PARTICLES;
    return (
        <ReactTsparticles
          params={{
            particles: particles,
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push',
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
    );
};

export default Particles;