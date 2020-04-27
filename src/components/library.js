import React from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import BooksModal from './BooksModal';

export default function Library(props) {

    return (
        <>
            <Alert variant='info'>Library List</Alert>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.libraries.map(
                        (library) =>
                            <tr key={library.library_id}>
                                <td>{library.library_id}</td>
                                <td>
                                    <Button variant="link"
                                        onClick={() => getBookByLibraryId(library.library_id, props)}>
                                        {library.name}
                                    </Button>
                                </td>
                                <td>{library.type}</td>
                            </tr>)
                    }
                </tbody>
            </Table>

            <BooksModal data={props.data} handleClose={props.handleClose} />
        </>
    );
}

function getBookByLibraryId(libraryId, props) {
    props.getBookByLibraryId(libraryId);
    props.handleShow();
}