import React, { Component } from 'react'
import axios from 'axios'
import GenericTable from '../Profiles/GenericTable'

class UsersList extends Component {
constructor(){
    super()
    this.state = {
        users : [],
        loading: false
    }
}
    async getUsers() {
        try {
            this.setState({loading: true})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            console.log(response.data)
            const retrievedUsers = response.data
            this.setState({
                users : retrievedUsers
            })
            
        } catch (error) {
            // possibilmente non c'e
            console.log(error)
            this.setState({loading: false})
        } finally {
            console.log(this.state.users)
            this.setState({loading: false})

        }

    }

    render() {
        return (
            <GenericTable items={this.state.users} />
        )
    }
    componentDidMount() {
        this.getUsers()


    }
}

export default UsersList
