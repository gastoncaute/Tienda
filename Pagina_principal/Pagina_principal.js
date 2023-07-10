import './Pagina_principal.css';

import './Navbar/navbar.css';
import { setupNavbar } from "./Navbar/navbar.js";
setupNavbar();

import './Categorias_menu/categorias_menu.css';
import { setupCategorias } from './Categorias_menu/categorias_menu.js';
setupCategorias();

import './Precios-menu/precios-menu.css';
import { setupPrecios } from './Precios-menu/precios-menu.js';
setupPrecios();

import './user_menu/user_menu.css';
import { setupUser } from "./user_menu/user_menu.js";
setupUser();

import './productos/productos.css'
import { setUpProductos } from "./productos/productos.js";
setUpProductos()

import { setUpCarrito } from "./carrito_de_compra/carrito_de_compras.js";
setUpCarrito()