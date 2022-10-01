import { Card } from 'react-bootstrap';
import Rating from '../rating/rating.component';

const ProductCard = (products) => {
    const { _id, name, image, rating, numReviews, price } = products.products;

    return (
        <Card className="my-3 p-3 ">
            <a href={`/product/${_id}`}>
                <Card.Img src={image} variant='top' />
            </a>

            <Card.Body>

                <a href={`/product/${_id}`}>
                    <Card.Title as='div'><strong>{name}</strong></Card.Title>
                </a>

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