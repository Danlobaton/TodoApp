import React, { Component } from 'react'
import styled from '@emotion/styled';

export class AddTodo extends Component {
    state = {
        title: ""
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:""})
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value })

    render() {
        return (
            <SForm onSubmit={this.onSubmit}>
                <SInput
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <SInput
                    type="submit"
                    value="Submit"
                    className="btn"
                />
            </SForm>
        )
    }
}

const SForm = styled.form`
    display: flex;
`

const SInput = styled.input`
    flex: ${props => props.type === "text" ? 10 : 1};
    ${props => props.type === "text" ? "padding: 5px" : ""}
`



export default AddTodo
