import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

const PRESERVED = import.meta.globEager('/src/pages/(_app|404).jsx');
const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.jsx');

const preserve = Object.keys(PRESERVED).reduce((p, file) => {
  const key = file.replace(/\/src\/pages\/|\.jsx$/g, '');
  return { ...p, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.jsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: ROUTES[route].default };
});

export default function FileRoutes() {
  // eslint-disable-next-line no-underscore-dangle
  const App = preserve?._app || Fragment;
  const NotFound = preserve?.['404'] || Fragment;

  return (
    <App>
      <Routes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  );
}
