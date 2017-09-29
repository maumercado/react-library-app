import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)} >
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
    };
};


// Anything returned from this function will end up as props
// on the BookList container
const mapDispatchToProps = (dispatch) => {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
};

// Promote BookList from a component to a container - it needs to know about
// about this new dispatch method, selectBook. Make it available.
// connect produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);