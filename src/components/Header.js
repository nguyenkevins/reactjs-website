import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <Container>
            {/*<p2>Header</p2>*/}
            <Menu>
                <p2><a href="#features">FEATURES</a></p2>
                <p2><a href="#documentation">DOCS</a></p2>
                <p2><a href="#repository">REPO</a></p2>

            </Menu>


        </Container>

    )
}

export default Header

// Logo
// Menu
// Right Meu



const Container = styled.div`
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    top: 0;
    left: 0;
    right: 0;
    background-color: #212529;
    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    
    p2 {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        
    }
`