import React, { Component } from 'react'
import API from '../../utils/API'
import UsersTable from './UsersTable'
import UserForm from './UserForm'
import Loading from '../commons/Loading'
import Modal from './Modal'

import {connect} from 'react-redux'
import { startLoading, stopLoading } from '../../redux/actions/'

class UsersList extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            selectedUser: null,
            showUsers: true,
            showModal: false,
            headerText: "Utenti",
            btnText: "Nuovo Utente"
        }
        this.handleFormSubmission = this.handleFormSubmission.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    // async function that retrieves users
    async getUsers() {
        try {
            this.props.startLoading()
            let response = await API.get('/users');
            const retrievedUsers = response.data
            this.setState({
                users: retrievedUsers
            })
        } catch (error) {
            console.log(error)
            this.props.stopLoading()
        } finally {
            this.props.stopLoading()
        }
    }

    editUser(payload) {
        let user = this.state.users.find(user => user.id === payload)
        console.log(user)
        this.setState({ selectedUser: user, showModal: true })

    }

    deleteUser(payload) {

    }

    async handleFormSubmission(payload) {
        try {
            this.props.startLoading()
            // IS IT NECESSARY TO STRINGIFY??
            // let payloadJSON = JSON.stringify(payload)
            let response = await API.post('/users', { payload });
            console.log(response.data.payload)
            response.status === 201 && alert('Utente creato')
        } catch (error) {
            console.log(error)
            this.props.stopLoading()
        } finally {
            this.props.stopLoading()
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
                    {this.props.isLoading ? <Loading /> : ''}
                    {this.state.showUsers ? <UsersTable items={this.state.users} handleEdit={this.editUser} handleRemove={this.removeUser} /> : <UserForm handleSubmit={this.handleFormSubmission} />}
                    {this.state.showModal ? <Modal user={this.state.selectedUser} /> : <div></div>}
                </div>
            </>
        )
    }
    
    componentDidMount() {
        this.getUsers()
    }
    
}
        const mapStateToProps = state => {
            return {
                isLoading: state.isLoading
            }
        }
    
        const mapDispatchToProps = {
            startLoading,
            stopLoading
        }

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
