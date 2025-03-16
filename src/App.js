import React from "react";
import BandsList from "./components/BandsList";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { Container, Row, Col } from "reactstrap";  // Dodajemo Bootstrap Grid komponente

class App extends React.Component {
    state = {
        bands: [],
        currentBand: {}
    };

    changeCurrentBand = (band) => {
        this.setState({ currentBand: band });
    };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/MiraZeca/mybands/master/bands_with_id.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ bands: data });
            });
    }

    render() {
        return (
            <>
                <Navbar />
                <Container>
                    <Row>
                        <Col xs="12" sm="6" md="4" lg="3" className="my-3">
                            <BandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand} />
                        </Col>
                    </Row>
                </Container>
                <Modal currentBand={this.state.currentBand} />
            </>
        );
    }
}

export default App;
