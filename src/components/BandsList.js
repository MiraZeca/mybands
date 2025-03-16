import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

const BandsList = ({ bands, changeCurrentBand }) => {
    return (
        <div className="row">
            {bands.map((band) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={band.id}>
                    <Card>
                        <CardImg top width="100%" src={band.image} alt={band.name} />
                        <CardBody>
                            <CardTitle tag="h5">{band.name}</CardTitle>
                            <Button onClick={() => changeCurrentBand(band)} color="primary">
                                View Details
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default BandsList;
