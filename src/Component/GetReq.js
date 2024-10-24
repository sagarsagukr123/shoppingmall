import React, { useState, useEffect } from 'react';
import ProductService from '../Service/ProductService';
import { Link } from 'react-router-dom';

function Product() {
    const [products, setPost] = useState([]);
    const [id, setid] = useState("");

    // Delete function for removing products
    const del = (e) => {
        e.preventDefault();
        if (id) {
            ProductService.deleteProducts(id)
                .then(res => {
                    alert("Product with ID: " + id + " Successfully deleted");
                    window.location.reload(true);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            alert("Please select a product to delete");
        }
    };

    // Fetch all products on component mount
    useEffect(() => {
        ProductService.getAllProducts()
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div id="na">
                {/* Form for deleting a product */}
                <form onSubmit={del}>
                    <Link to="/add" className='add btn'>ADD</Link> OR Select to remove
                    <select name="id" value={id} onChange={(e) => setid(e.target.value)}>
                        <option value="">Select product id</option>
                        {
                            products.map(post => (
                                <option key={post.id} value={post.id}>{post.id}</option>
                            ))
                        }
                    </select>
                    <button type="submit" className='rem btn'>Remove</button>
                </form>
            </div>

            {/* Display all products */}
            <main>
                {
                    products.map(post => (
                        <div className="card" key={post.id}>
                            {/* Correct image URL from API */}
                            <img src={post.url} alt={post.description} />
                            <h3>{post.name}</h3>
                            <h4>Rs: {post.price}</h4>
                            <Link to={"/upd/" + post.id} className='upd btn'>Update</Link>
                        </div>
                    ))
                }
            </main>
        </div>
    );
}

export default Product;
