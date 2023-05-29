import { useSelector } from "react-redux"
import Card from 'react-bootstrap/Card';
// import FormContainer from "../components/FormContainer";
import VImage from '../assets/V.jpeg';
import ProfilePic from '../assets/ProfilePic.jpg';

const ViewProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth)
  return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ userInfo.email === 'vidhisha@gmail.com' ? VImage : ProfilePic } />
        <Card.Body>
        <Card.Title>{userInfo.name}</Card.Title>
        <Card.Text>
            {
                userInfo.email === 'vidhisha@gmail.com' ? 'Vidhisha Neil Mascarenhas':`Email: ${userInfo.email}`
            }
        </Card.Text>
        {/* <Button variant="primary">Go some</Button> */}
        </Card.Body>
        </Card>
        </div>
  )
}

export default ViewProfileScreen