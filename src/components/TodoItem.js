import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'


export class TodoItem extends Component {
    markComplete = (e) => {

    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <STodoDiv completed={this.props.todo.completed}>
                <p>
                    <SCheckBox type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    { title }
                    <SButton onClick={this.props.delTodo.bind(this, id)}>X</SButton>
                </p>
            </STodoDiv>
        )
    }
}

// Styled components
const STodoDiv = styled.div`
    background: #f4f4f4;
    border-bottom: 1px #ccc dotted;
    padding: 10px;
    text-decoration: ${props => props.completed ? `line-through` : `none`};
`

const SCheckBox = styled.input`
    margin-right: 5px;
`

const SButton = styled.button`
    background: #FF0000;
    color: #fff;
    border: none;
    padding: 5px 8px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
`

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
