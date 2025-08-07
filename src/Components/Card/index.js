import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import './card.css';


export function SingleCard({ id , image, title, price, description, detailImage }) {
  return (
    <Card className='card'>
<<<<<<< HEAD
      <Card.Img variant="top" src={`http://localhost:5000${image}`} className='card-image' />
=======
      <Card.Img variant="top" src={`https://psdt-backend-production.up.railway.app${image}`} className='card-image' />
>>>>>>> studiopc
      <Card.Body className='card-body'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className="price">Price: {price}</div>
        <Link to={`/detailcardpage/${id}`}>
          <Button variant="primary">Make It Yours</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
