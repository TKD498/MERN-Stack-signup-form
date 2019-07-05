import React from 'react';
import axios from 'axios';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            fname: "",
            lname: "",
            dob: "",
            email: "",
            pwd: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
            fname : this.state.fname,
            lname : this.state.lname,
            dob : this.state.dob,
            email : this.state.email,
            pwd : this.state.pwd
        }
        axios
            .post('/users', newCustomer)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="container">
                <h2>ReactStrap Form React</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" className="form-control" id="fname" placeholder="First Name" name="fname" value={this.state.fname} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" className="form-control" id="lname" placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">DOB:</label>
                        <input type="text" className="form-control" id="dob" placeholder="Date of Birth" name="dob" value={this.state.dob} onChange={this.onChange} />
                        </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={this.state.pwd} onChange={this.onChange} />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="remember" />Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>

        )
    }
}

export default App;