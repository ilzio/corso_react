import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions/posts'
import { getResources } from 'redux-resource';


class Posts extends Component {
    componentDidMount(){
        this.props.getPosts()
    }
    render() {
        console.log(this.props.posts)
        console.log(JSON.stringify(this.props.posts))
        
        return (
            <div>
                {/* {this.props.posts.map(item => console.log(item))} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // get all resources from a slice
    posts : getResources(state.posts),
    users: state.users
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
