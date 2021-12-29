import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Feature from './Feature'
import Doc from './Doc'
import Repo from './Repo'
import Footer from './Footer'


function Home() {
    return (
        <Container fluid>
            <Section></Section>
            <Feature></Feature>
            <Doc></Doc>
            <Repo></Repo>
            <Footer></Footer>
        </Container>
        
    )
}

export default Home

const Col = styled.div`
`

const Row = styled.div`
`

const Container = styled.div`
    height: 100vh;

`