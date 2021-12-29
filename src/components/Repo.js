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
                <p3>Repository</p3>
                <div id="repository">
                    <p4>Check out my development on GitHub</p4>
                    <ItemText2>
                        <br></br>
                        <a href='https://github.com/nguyenkevins/samsung-restful-api'><Button type="button" class="btn btn-dark">https://github.com/nguyenkevins/samsung-restful-api</Button></a>

                    </ItemText2>
                </div>
            </ItemText>      
        </Wrap>

        
    )
}

export default Section
const Wrap = styled.div`
    height: 50vh;
`

const ItemText2 = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 0vw;
`

const ItemText = styled.div`
    padding-top: 10vh;
`
