import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products/');
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    console.error('Failed to fetch products');
                }
            } catch (error) {
                console.error('Error while fetching products:', error);
            }
        };
        fetchProducts();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            <Container>
                <Row>
                {products.map((product) => (
                    <Container key={product.id} style={ { width: '10rem' }}>
                        <Card key={product.id}>
                            <Card.Img src={product.image} width={150}/>
                            <Card.Subtitle>${product.price}</Card.Subtitle>
                        </Card>
                    </Container>
                ))}
                </Row>
            </Container>
        </div>
    );
}

export default Products;
