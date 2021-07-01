import React, { Component } from "react";

class PersonBio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "micky",
                    description: "She is a lovely girl",
                },
                {
                    name: "orlando",
                    description: "he is optimistic and straight forward",
                },
            ],
            name: "",
            email: "",
            password: "",
            description: "",
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        const newPerson={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            description:this.state.description
        }
        this.setState({
            persons: [...this.state.persons,newPerson],
            name:"",
            email:"",
            password:"",
            description:""
        })
    }
    render() {
        return (
            <section style={{ margin: "2rem" }}>
                <div className="container">
                    <h1 style={{textAlign:"center" }}>React-Form</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        <br />
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        <br />

                        <label>Password:</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <br />

                        <label htmlFor="">Description:</label>
                        <textarea
                            name="description"
                            placeholder="enter text here" value={this.state.description}
                            onChange={this.handleChange}>    
                        </textarea>
                        <br />
                     
                        <button className="btn">Submit</button>
                    </form>
                </div>

                {this.state.persons.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4> name:{item.name}</h4>
                            <p>{item.description}</p>
                            <hr />
                        </div>
                    );
                })}
            </section>
        );
    }
}

export default PersonBio;
