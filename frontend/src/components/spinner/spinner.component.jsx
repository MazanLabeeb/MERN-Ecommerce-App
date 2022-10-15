import Spinner from 'react-bootstrap/Spinner';

const CustomSpinner = () => {
    return (
        <div className="text-center mt-5">
            <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default CustomSpinner;