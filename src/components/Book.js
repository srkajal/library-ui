import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Book(props) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {props.books.map((book) =>
                        <tr key={book.book_id}>
                            <td>{book.book_id}</td>
                            <td>{book.title}</td>
                            <td>{book.price}</td>
                            <td>{book.volume}</td>
                        </tr>)}
                </tbody>
            </Table>
        </>
    );
}