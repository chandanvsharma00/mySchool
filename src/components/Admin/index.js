import React, {Component} from 'react'
import toastr from 'cogo-toast';
import Create from './Create'
import Edit from './Edit'

class Admin extends Component
{
	constructor() {
		super();
		//--- Declare state variable for this component ---//
		this.state = {
			users     : [
				{id : 11, username : "chandan", mobile_no : "12th", email : "gupta ji"},
				{id : 22, username : "sangam", mobile_no : "5th", email : "mishra ji"},
				{id : 33, username : "purna", mobile_no : "7th", email : "govind maru"}
			],
			editUser : {}
		}
		//--- Declare method for this component ---//
		this.handleUpdateState = this.handleUpdateState.bind(this);
	}
	//--- Update state variable while any user insert or update ---//
	handleUpdateState(data, operation) {
		//--- 'operation==1' means update user ---//
		if(operation === 1) {
			this.setState(prevState => ({
				users : prevState.users.filter(user => {
					if(user.id === data.id)
						return Object.assign(user, data);
					else
						return user;
				})
			}))
			return;
		}
		//--- 'operation==0' means insert user ---//
		var new_users = this.state.users.concat(data);
		this.setState({
			users : new_users
		})
	}
	//--- Find editable user and update state variable ---//
	handleEditUser(userId) {
		this.setState({
			editUser : this.state.users.find(x => x.id === userId)
		})
	}
	//--- Delete user and update state ---//
	handleDeleteUser(id) {
		this.setState(prevState => ({
			users : prevState.users.filter((user, i) => {
				return i !== id;
			})
		}))
		toastr.error('User has been deleted successfully!', {position : 'top-right', heading: 'Done'});
	}

    render() {
      return(
          	<div className="card mt-4">
			    <div className="card-header">
			        <h4 className="card-title"> Admin </h4>
			        <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target="#addModal"> Add student </button>
			    </div>
			    <div className="card-body">
			        <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th> id </th>
                                    <th> student Name </th>
                                    <th> class </th>
                                    <th> teacher </th>
                                    <th> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((user, i) => (
                                <tr key={i}>
                                    <td> {user.id} </td>
                                    <td> {user.username} </td>
                                    <td> {user.mobile_no} </td>
                                    <td> {user.email} </td>
                                    <td>
                                        <button className="btn btn-info btn-sm mr-2" onClick={this.handleEditUser.bind(this, user.id)} data-toggle="modal" data-target="#editModal"> Edit </button>
                                        <button className="btn btn-danger btn-sm" onClick={this.handleDeleteUser.bind(this, i)}> Delete </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
			        </div>
			    </div>
			    <Create updateState = {this.handleUpdateState} />
			    <Edit updateState = {this.handleUpdateState} user = {this.state.editUser} />
			</div>
        )
    }
}
export default Admin