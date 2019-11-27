import React, { Component } from 'react'
import UsersTable from './UsersTable'
import UserForm from './UserForm'
import Loading from '../commons/Loading'

import { connect } from 'react-redux'
import { retrieveUsers, addUser } from '../../redux/actions/users'

class Users extends Component {
    constructor() {
        super()
        this.state = {
            selectedUser: null,
            showUsers: true,
            showModal: false,
            headerText: "Utenti",
            btnText: "Nuovo Utente"
        }
    }

    componentDidMount() {
        this.props.retrieveUsers()
    }

    handleFormSubmission = (payload) => {
        this.props.addUser(payload)
        this.toggleForm()
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
                    {this.props.isLoading && <Loading />}
                    {this.state.showUsers ? (
                        <UsersTable
                            items={this.props.users}
                        />
                    ) : (
                            <UserForm usersNumber={this.props.users.length} handleSubmit={this.handleFormSubmission} />
                        )}
                    {this.props.error && <div>{this.props.error.message} </div>}
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        isLoading: state.users.isLoading,
        users: state.users.users,
        error: state.users.error,
    }
}

const mapDispatchToProps = {
    retrieveUsers,
    addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
