import React, { useContext } from 'react';
import { GAME_ROUTE } from './utils/consts.js';
import { authRoutes, publicRoutes } from '../../routes.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '../../index.js';

const AppRouter = () => {
  const {user} = useContext(Context);

        const isAuth = user.isAuth;
        return  (
          <Routes>
            {isAuth && authRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} exact />
            ))}

            {publicRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} exact />
            ))}
            <Route path="/" element={<Navigate to={GAME_ROUTE} replace />} />
          </Routes>
        );

};

export default AppRouter;