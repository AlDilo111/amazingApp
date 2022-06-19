import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'Al',
			email: 'al@gmail.com',
			password: bcrypt.hashSync('1234'),
			isAdmin: true,
		},
		{
			name: 'Anthony',
			email: 'anthony@gmail.com',
			password: bcrypt.hashSync('5678'),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Nike Slim Shirt",
			slug: "nike-slim-shirt",
			category: "",
			image: "/images/p1.jpeg",
			price: 120,
			countInStock: 10,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality shirt",
		},
		{
			name: "Nike Slim Pants",
			slug: "nike-slim-pants",
			category: "",
			image: "/images/p4.jpeg",
			price: 120,
			countInStock: 0,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality pants",
		},
		{
			name: "Adidas-slim-shrt",
			slug: "adidass-slim shirt",
			category: "",
			image: " /images/p2.jpeg",
			price: 120,
			countInStock: 10,
			brand: "Adidas",
			rating: 4.5,
			numReviews: 10,
			description: "high quality pants",
		},
		{
			name: "Adidas Slim Pants",
			slug: "adidas-slim-pants",
			category: "",
			image: " /images/p3.jpeg",
			price: 120,
			countInStock: 10,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality pants",
		},
	],
};
export default data;