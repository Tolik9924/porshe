import melbourne from '../assets/images/melbourne.png';
import konig from '../assets/images/konig.webp';
import crw from '../assets/images/crw.webp';
import iw from '../assets/images/iw.png';

export const cars = [
    {
        id: 0,
        name: '911 Carrera',
        energy: 'fuel',
        price: 10000,
        colors: [
            {
                name: '#fff',
                active: true,
                price: 1000,
            },
            {
                name: '#000',
                active: false,
                price: 2000,
            },
            {
                name: '#9e1030',
                active: false,
                price: 3000
            },
            {
                name: '#f2eb8c',
                active: false,
                price: 2500,
            }
        ],
        wheels: [
            {
                name: 'melbourne',
                image: melbourne,
                active: true,
                price: 500
            },
            {
                name: 'konig',
                image: konig,
                active: false,
                price: 300,
            },
            {
                name: 'crw',
                image: crw,
                active: false,
                price: 200,
            },
            {
                name: 'iw',
                image: iw,
                active: false,
                price: 100,
            },
        ],
    },
    {
        id: 1,
        name: '911 Turbo',
        energy: 'electro',
        price: 10000,
        colors: [
            {
                name: '#fff',
                active: true,
                price: 1000,
            },
            {
                name: '#000',
                active: false,
                price: 2000,
            },
            {
                name: '#9e1030',
                active: false,
                price: 3000
            },
            {
                name: '#f2eb8c',
                active: false,
                price: 2500,
            }
        ],
        wheels: [
            {
                name: 'melbourne',
                image: melbourne,
                active: true,
                price: 500
            },
            {
                name: 'konig',
                image: konig,
                active: false,
                price: 300,
            },
            {
                name: 'crw',
                image: crw,
                active: false,
                price: 200,
            },
            {
                name: 'iw',
                image: iw,
                active: false,
                price: 100,
            },
        ],
    },
    {
        id: 2,
        name: '911 GT3',
        energy: 'fuel or electro',
        price: 10000,
        colors: [
            {
                name: '#fff',
                active: true,
                price: 1000,
            },
            {
                name: '#000',
                active: false,
                price: 2000,
            },
            {
                name: '#9e1030',
                active: false,
                price: 3000
            },
            {
                name: '#f2eb8c',
                active: false,
                price: 2500,
            }
        ],
        wheels: [
            {
                name: 'melbourne',
                image: melbourne,
                active: true,
                price: 500
            },
            {
                name: 'konig',
                image: konig,
                active: false,
                price: 300,
            },
            {
                name: 'crw',
                image: crw,
                active: false,
                price: 200,
            },
            {
                name: 'iw',
                image: iw,
                active: false,
                price: 100,
            },
        ],
    },
];