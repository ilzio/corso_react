import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../redux/actions/books'


class Books extends Component {
    
    componentDidMount(){
        this.props.getBooks()
    }
    
    render() {
        console.log(this.props.books)
        return (
            <div>
            Books section     
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    books : state.books,
    users: state.users
})

const mapDispatchToProps = {
    getBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
