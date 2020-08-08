// import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/:id': Home,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const main = null || document.getElementById('main');

  // header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  main.innerHTML = await render();
};

export default router;