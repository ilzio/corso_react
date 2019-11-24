import React, { Component } from 'react'
import API from '../../utils/API'
import UsersTable from './UsersTable'
import UserForm from './UserForm'
import Loading from '../commons/Loading'

class UsersList extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: false,
            showUsers: true,
            headerText: "Utenti",
            btnText:  "Nuovo Utente"
        }
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
    }
    // async function that retrieves users
    async getUsers() {
        try {
            this.setState({ loading: true })
            let response = await API.get('/users');
            const retrievedUsers = response.data
            this.setState({
                users: retrievedUsers
            })
        } catch (error) {
            console.log(error)
            this.setState({ loading: false })
        } finally {
            this.setState({ loading: false })
        }
    }

    async handleFormSubmission(payload) {
        try {
            this.setState({ loading: true })
            // IS IT NECESSARY TO STRINGIFY??
            // let payloadJSON = JSON.stringify(payload)
            let response = await API.post('/users', { payload});
            console.log(response.data.payload)
            response.status === 201 && alert('Utente creato')
        } catch (error) {
            console.log(error)
            this.setState({ loading: false })
        } finally {
            this.setState({ loading: false })
            this.toggleForm()
            this.getUsers()
        }
    }
    toggleForm = () => {
        this.setState(prevState => ({
            showUsers: !prevState.showUsers,
            headerText: (prevState.showUsers ? "Nuovo Utente" : "Utenti"),
            btnText: (prevState.showUsers ? "Utenti" : "Nuovo Utente")
        }))
    }
    render() {
        return (
            <>
                <div className="topContainer">
                    <h3>{this.state.headerText}</h3>
                    <button onClick={this.toggleForm}>{this.state.btnText}</button>
                </div>
                <div className="mainContainer">
                    {this.state.loading ? <Loading /> : ''}
        {this.state.showUsers ? <UsersTable items={this.state.users} /> : <UserForm handleSubmit={this.handleFormSubmission} /> }
                </div>
            </>
        )
    }
    // once component has mounted, retrieve users, update state and render
    componentDidMount() {
        this.getUsers()
    }
}

export default UsersList
