import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <SHeader>
            <h1>TodoList</h1>
            <SLink to='/'>Home</SLink> | <SLink to='/about'>About</SLink> 
        </SHeader>
    )
}

const SLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
`

const SHeader = styled.header`
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
`
