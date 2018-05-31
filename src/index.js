import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import Cta from './Cta'
import styled from 'react-emotion'

const Wrapper = styled('div')(props => ({
  '> *': {
    margin: '30px 0',
  },
  fontFamily: 'Helvetica Neue',
}))

const Content = styled('div')(props => ({
  background: 'tomato',
  color: 'white',
  padding: 20,
  borderRadius: 2,
  fontWeight: 300,
  letterSpacing: 1.2,
}))

const App = () => (
  <Wrapper>
    <Cta
      options={{
        image: faker.image.cats(),
        styles: {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <h2>Some important title</h2>
      <Content>CTA without Gradient</Content>
    </Cta>
    <Cta
      options={{
        image: faker.image.cats(),
        gradient:
          'linear-gradient(rgba(100,100,100, 0.25), rgba(100,100,100, 0.85))',
        styles: {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <h2>Some important title</h2>
      <Content>CTA with Gradient</Content>
    </Cta>
  </Wrapper>
)

render(<App />, document.getElementById('root'))
