import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalComponent = ({ currentBand }) => {
    return (
        <Modal isOpen={!!currentBand.id} toggle={() => {}}>
            <ModalHeader toggle={() => {}}>Band Details</ModalHeader>
            <ModalBody>
                <img src={currentBand.image} alt={currentBand.name} className="img-fluid" />
                <h4>{currentBand.name}</h4>
                <p>{currentBand.description}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => {}}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalComponent;
