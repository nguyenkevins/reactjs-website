import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Section() {
    return (
        <Wrap>
            <ItemText>
                

                    <p12>Website Developer: Kevin Nguyen</p12>
                    <br></br>
                    <p12>Powered by: ReactJS, Redux, Bootstrap, NodeJS, </p12>

            </ItemText>      
        </Wrap>

        
    )
}

export default Section
const Wrap = styled.div`
    height: 25vh;
    background-color: #212529;
`

const ItemText2 = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 0vw;
`

const ItemText = styled.div`
    padding-top: 10vh;
`
