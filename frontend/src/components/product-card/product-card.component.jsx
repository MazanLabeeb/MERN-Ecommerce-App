import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../rating/rating.component';

const ProductCard = (products) => {
    const { _id, name, image, rating, numReviews, price } = products.products;

    return (
        <Card className="my-3 p-3 ">
            <Link to={`/product/${_id}`}>
                <Card.Img src={image} variant='top' />
            </Link>

            <Card.Body>

                <Link to={`/product/${_id}`}>
                    <Card.Title as='div'><strong>{name}</strong></Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating rating={rating} numReviews={numReviews} />
                </Card.Text>

                <Card.Text as='h3'>
                    ${price}
                </Card.Text>



            </Card.Body>


        </Card>
    );
}

export default ProductCard;