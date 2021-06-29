import React, { Component } from 'react';

class PersonBio extends Component {
    constructor(props){
        super(props)
        this.state={
            person:{
                name: "micky",
                description:"She is a lovely girl",
            }

        }
    }
    render() {
        return (
            <div>
                <section style={{margin:"2rem" }}>
                    <div>
                        <h4> name:{this.state.person.name}</h4>
                        <p>{this.state.person.description}</p>
                        <hr />
                    </div>
                </section>
            </div>
        );
    }
}

export default PersonBio;
