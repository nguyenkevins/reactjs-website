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
                
                <p10>Documentation</p10>
                <div id="documentation">
                    <p11>samsung-restful-api</p11>
                    <br></br>
                    <p11>Public API Documentation</p11>
                    <ItemText2>
                        <div class="py-5 row row-cols-1 row-cols-sm-0 row-cols-md-0 g-2">
                            <div class="card-group">
                                <div class="col">
                                    <div class="card border-dark">

                                        <div class="card-body bg-dark">
                                        <br></br>
                                        <p12 class="card-text">The Samsung API is a RESTful API that returns a JSON element for your needs.</p12>
                                        <br></br>
                                        <p12 class="card-text">GET /samsung/ &lt;device&gt;</p12>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-dark">
                                        <div class="card-body bg-dark">
                                        <br></br>
                                        <p12 class="card-text">RESTful API URL : ____________________</p12>
                                        <br></br>
                                        <p12 class="card-text">Sample API URL  : ____________________</p12>
                                        <br></br>
                                        <p12 class="card-text">Python Module   : ____________________</p12>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ItemText2>
                </div>
            </ItemText>      
        </Wrap>

        
    )
}

export default Section
const Wrap = styled.div`
    height: 55vh;
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
