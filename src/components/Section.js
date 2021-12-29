import React from 'react'
import styled from 'styled-components'


function Section() {
    return (
        <Wrap>
            <ItemText>
                <h7>samsung-restful-api</h7>
                <br></br>
                <br></br>
                <p7>Development still in progress</p7>
                
            </ItemText>

            
        </Wrap>
    )
}

export default Section
const Wrap = styled.div`

    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url(img/tiger.png) no-repeat;
    box-shadow: 0px 10px 5px #ccc;
    background-image: url('/images/download.png')
    


    
`

const ItemText = styled.div`
    padding-top: 20vh;

`
