import melbourne from '../assets/images/melbourne.png';
import konig from '../assets/images/konig.webp';
import crw from '../assets/images/crw.webp';
import iw from '../assets/images/iw.png';
import white911 from '../assets/images/white911.jpeg';
import white911back from '../assets/images/white911back.jpeg';
import white911side from '../assets/images/white911side.jpeg';
import white911up from '../assets/images/white911up.jpeg';
import black911 from '../assets/images/black911.jpeg';
import black911back from '../assets/images/black911back.jpeg';
import black911side from '../assets/images/black911side.jpeg';
import black911up from '../assets/images/black911up.jpeg';
import red911 from '../assets/images/red911.jpeg';
import red911back from '../assets/images/red911back.jpeg';
import red911side from '../assets/images/red911side.jpeg';
import red911up from '../assets/images/red911up.jpeg';
import yellow911 from '../assets/images/yellow911.jpeg';
import yellow911back from '../assets/images/yellow911back.jpeg';
import yellow911side from '../assets/images/yellow911side.jpeg';
import yellow911up from '../assets/images/yellow911up.jpeg';

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
                images: [
                    white911,
                    white911back,
                    white911side,
                    white911up,
                ],
            },
            {
                name: '#000',
                active: false,
                price: 2000,
                images: [
                    black911,
                    black911back,
                    black911side,
                    black911up,
                ],
            },
            {
                name: '#9e1030',
                active: false,
                price: 3000,
                images: [
                    red911,
                    red911back,
                    red911side,
                    red911up,
                ],
            },
            {
                name: '#f2eb8c',
                active: false,
                price: 2500,
                images: [
                    yellow911,
                    yellow911back,
                    yellow911side,
                    yellow911up,
                ],
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
                images: [
                    white911,
                    white911,
                    white911,
                    white911,
                ],
            },
            {
                name: '#000',
                active: false,
                price: 2000,
                images: [
                    black911,
                    black911,
                    black911,
                    black911,
                ],
            },
            {
                name: '#9e1030',
                active: false,
                price: 3000,
                images: [
                    red911,
                    red911,
                    red911,
                    red911,
                ],
            },
            {
                name: '#f2eb8c',
                active: false,
                price: 2500,
                images: [
                    yellow911,
                    yellow911,
                    yellow911,
                    yellow911,
                ],
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
                images: [
                    white911,
                    white911,
                    white911,
                    white911,
                ],
            },
            {
                name: '#000',
                active: false,
                price: 2000,
                images: [
                    black911,
                    black911,
                    black911,
                    black911,
                ],
            },
            {
                name: '#9e1030',
                active: false,
                price: 3000,
                images: [
                    red911,
                    red911,
                    red911,
                    red911,
                ],
            },
            {
                name: '#f2eb8c',
                active: false,
                price: 2500,
                images: [
                    yellow911,
                    yellow911,
                    yellow911,
                    yellow911,
                ],
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