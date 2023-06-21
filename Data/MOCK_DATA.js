import sombras from '../src/assets/sombras.jpeg'
import labiales from '../src/assets/labiales.jpeg'
import delineadores from '../src/assets/delianeadores.jpeg'
import pesta from '../src/assets/pesta.jpeg'
import tijera from '../src/assets/tijera.jpeg'
import tinte from '../src/assets/tinte.jpeg'
import apliques from '../src/assets/apliques.jpeg'
import pinturas from '../src/assets/pinturas.jpeg'
import carteraRoja from '../src/assets/carteraRoja.jpeg'
import carteraGris from '../src/assets/carteraGris.jpeg'


const MOCK_DATA = [
    
    {
        id: 1,
        nombre: "Sombras",
        precio: 1500,
        img: sombras,
        description: "Paleta de sombras de colores cálidos",
        category: 'Maquillaje',
        stock: 5
      
        
    },

    {
        id: 2,
        nombre: "Labiales",
        precio: 2000,
        img: labiales,
        description: "Labiales larga duración",
        category: "Maquillaje",
        stock: 15,
    },
    
    {
        id: 3,
        nombre: "Delineadores",
        precio: 1500,
        img: delineadores,
        description: "Delineadores de colores",
        category: "Maquillaje",
        stock:7,
    },

    {
        id: 4,
        nombre: "Pestañas",
        precio: 1700,
        img: pesta,
        description: "Pestañas pelo por pelo",
        category: "Pestañas",
        stock: 8,
    },

    {
        id: 5,
        nombre: "Tijera de pestañas",
        precio: 1000,
        img: tijera,
        description: "Tijera de pestañas",
        category: "Pestañas",
        stock: 10,
    },

    {
        id: 6,
        nombre: "Tinte",
        precio: 1500,
        img: tinte,
        description: "Tinte para pestañas",
        category: "Pestañas",
        stock: 12,
    },

    {
        id: 7,
        nombre: "Apliques",
        precio: 700,
        img: apliques,
        description: "Apliques para uñas",
        category: "Uñas",
        stock: 30,
    },

    {
        id: 8,
        nombre: "Pinturas",
        precio: 1000,
        img: pinturas,
        description: "Pinturas de uñas",
        category: "Uñas",
        stock: 20,
    },

    {
        id: 9,
        nombre: "Cartera Roja",
        precio: 2500,
        img: carteraRoja,
        description: "Mini cartera roja porta celular",
        category: "Accesorios",
        stock: 16,
    
    },

    {
        id: 10,
        nombre: "Cartera Gris",
        precio: 2500,
        img: carteraGris,
        description: "Mini cartera gris porta celular",
        category: "Accesorios",
        stock: 4,
    },
]

export default MOCK_DATA