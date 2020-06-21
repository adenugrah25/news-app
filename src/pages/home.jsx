import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
// import NavbarReactstrap from '../components/navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import gambar from '../assets/hellothere.jpg'
  
class Home extends React.Component {
    render () {
        const container = {
            width : '100vw',
            height : "95vh",
            paddingBottom: '20%',
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems: 'center',
            margin: 'auto',
            overflowX:'hidden',
            background: `url(${gambar}) no-repeat center`,
            backgroundSize: '100vw 100vh',
        }

        return (
            <div style={container}>
                {/* <NavbarReactstrap/> */}
                <h1 style={{fontWeight:'bold'}}>Welcome to My Home</h1>
                <Link to={{ pathname:'/generate-news'}}>
                <Button className="rounded shadow" color="light">Generate News</Button>
                </Link>
            </div>
        )
    }
}

export default Home