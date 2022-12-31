import React, {Component} from 'react'


class Teacher extends Component
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
			
		}
		
	}

    render() {
      return(
          	<div className="card mt-4">
			    <div className="card-header">
			        <h4 className="card-title"> teacher list </h4>
			        
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
                                    
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((user, i) => (
                                <tr key={i}>
                                    <td> {user.id} </td>
                                    <td> {user.username} </td>
                                    <td> {user.mobile_no} </td>
                                    <td> {user.email} </td>
                                    
                                </tr>
                            ))}
                            </tbody>
                        </table>
			        </div>
			    </div>
			    
			</div>
        )
    }
}
export default Teacher