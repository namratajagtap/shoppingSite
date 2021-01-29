import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Namrata',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'prajakta',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'regular use formal112',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 10,
            price: 700,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'handbag',
            category: 'shirts',
            image: '/images/p5.jpg',
            countInStock: 0,
            price: 500,
            brand: 'nike',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'party wear long gown1',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 12,
            price: 500,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'party wear long gown2',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 5,
            price: 500,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'party wear long gown1',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 12,
            price: 500,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'party wear long gown2',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 5,
            price: 500,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'party wear long gown3',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 15,
            price: 500,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {

            name: 'party wear long gown4',
            category: 'shirts',
            image: '/images/p1.jpg',
            countInStock: 20,
            price: 500,
            brand: 'femina',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        }
    ]
}
export default data;