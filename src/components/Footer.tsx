// Dependences
import React, { Fragment } from 'react';

// Media
import GolfFieldImg from '../images/golfField.png';
import GolfBallImg from '../images/seo/favicon/favicon-16x16.png';

const Footer = () => {
  return (
    <Fragment>
      <div className="pt-12">
        <div
          style={{ backgroundImage: `url(${GolfFieldImg})` }}
          className="bg-local bg-left-bottom h-40 sm:h-60 bg-cover"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 sticky top-[100vh]">
            {/* Col 1 */}
            <div></div>

            {/* Col 2 */}
            <div className="flex flex-col justify-end gap-1 sm:gap-2">
              <a
                href="#cursos"
                className="flex items-center gap-2 hover:underline"
              >
                <img className="" src={GolfBallImg} alt="Pelota de Golf" />
                <p className="truncate text-black text-xs sm:text-sm">Cursos</p>
              </a>
              <a
                href="#ejercicios"
                className="flex items-center gap-2 hover:underline"
              >
                <img className="" src={GolfBallImg} alt="Pelota de Golf" />
                <p className="truncate text-black text-xs sm:text-sm">
                  Ejercicios
                </p>
              </a>
              <a
                href="#analisis"
                className="flex items-center gap-2 hover:underline"
              >
                <img className="" src={GolfBallImg} alt="Pelota de Golf" />
                <p className="truncate text-black text-xs sm:text-sm">
                  Análisis
                </p>
              </a>
              <a
                href="#database"
                className="flex items-center gap-2 hover:underline"
              >
                <img className="" src={GolfBallImg} alt="Pelota de Golf" />
                <p className="truncate text-black text-xs sm:text-sm">
                  Base de datos
                </p>
              </a>
            </div>

            {/* Col 3 */}
            <div className="hidden sm:flex flex-col justify-end gap-1 sm:gap-2">
              <div className="flex items-center gap-2 text-right">
                <a
                  href="mailto:juanpablocandela@gmail.com"
                  target="_blank"
                  className="truncate text-black text-xs sm:text-sm"
                >
                  juanpablocandela@gmail.com
                </a>
              </div>
              <p className="truncate text-white font-semibold font-mono text-xs sm:text-sm text-right m-2">
                2022 - © AiManager
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
