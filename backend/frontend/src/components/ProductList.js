import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../components/Cart'; // Adjust the path based on your folder structure

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState([]); // State to hold cart items

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products.');
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to the cart!`); // Alert for confirmation
    };

    return (
        <div>
            <h2>Product List</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <div key={product._id} className="product" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer', width: '200px' }}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.name} style={{ width: '100px', height: 'auto' }} />
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <Cart cartItems={cart} /> {/* Render the Cart component and pass cart items */}
        </div>
    );
};

export default ProductList;