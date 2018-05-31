import styled from 'react-emotion'

export default styled('div')(({ options: o }) => ({
  background: `${o.gradient}, url(${o.image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  padding: '85px 75px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...o.styles,
}))
