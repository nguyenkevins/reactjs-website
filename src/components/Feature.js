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
                
                <p3>Features</p3>
                <div id="features">
                    <p4>Delivers quality information about</p4>
                    <br></br>
                    <p4>Samsung mobile devices</p4>
                    <ItemText2>
                        <div class="py-5 row row-cols-1 row-cols-sm-0 row-cols-md-0 g-3">
                            <div class="card-group">
                                <div class="col">
                                    <div class="card border-light">
                                        <img class="card-img-top" src="/images/phone.jpg" alt=""></img>
                                        <div class="card-body">
                                        <p4 class="card-title">Phone</p4>
                                        <br></br>
                                        <p8 class="card-text">Provides up-to-date specification about mobile phone</p8>
                                        <br></br>
                                        <p9 class="card-text"><small class="text-muted">(Example: Samsung Galaxy S21 Ultra 5G)</small></p9>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-light">
                                        <img class="card-img-top" src="/images/watch.jpg" alt=""></img>
                                        <div class="card-body">
                                        <p4 class="card-title">Watch</p4>
                                        <br></br>
                                        <p8 class="card-text">Get the information you need about the watches</p8>
                                        <br></br>
                                        <p9 class="card-text"><small class="text-muted">(Example: Galaxy Watch 3)</small></p9>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-light">
                                        <img class="card-img-top" src="/images/tablet.jpg" alt=""></img>
                                        <div class="card-body">
                                        <p4 class="card-title">Tablet</p4>
                                        <br></br>
                                        <p8 class="card-text">Learn more about some of the bigger devices</p8>
                                        <br></br>
                                        <p9 class="card-text"><small class="text-muted">(Example: Galaxy Tab A 8.4 2020)</small></p9>
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
    height: 80vh;
`

const ItemText2 = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 0vw;
`

const ItemText = styled.div`
    padding-top: 10vh;
`
