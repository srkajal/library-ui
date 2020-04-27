import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Book from './Book';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function BooksModal(props) {
    return (
        <>
            <Modal show={props.data.show} onHide={props.handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title><Alert variant='info'>Book List</Alert></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Book books={props.data.books} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}