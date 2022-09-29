import { Card } from 'react-bootstrap';

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
                    <div className='my-3'>
                        {rating} from {numReviews} reviews
                    </div>
                </Card.Text>

                <Card.Text as='h3'>
                    ${price}
                </Card.Text>



            </Card.Body>


        </Card>
    );
}

export default ProductCard;