import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li className="list-group-item" key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    // Whatever is returned will show up as props
    // inside of booklist
    return {
        books: state.books
    }
};


// connect produces a container
export default connect(mapStateToProps)(BookList);