import React from 'react'
import Link from 'gatsby-link'
import profileImg from './dinesh.png'

const IndexPage = () => (
  <div style={{textAlign: 'center' }}>
    <div>
      <img style={{height: 'calc(100vh - 250px)'}} src={profileImg} />
    </div>
    <div>
    <a href="https://github.com/dineshvgp" target="_blank">Github</a>{' '}
    <a href="https://twitter.com/dinesh_vgp" target="_blank">Twitter</a>{' '}
    <a href="https://www.linkedin.com/in/dinesh-ramasamy-922a3a19/" target="_blank">LinkedIn</a>{' '}
    <a href="mailto:dinesh.vgp@gmail.com">Email</a>{' '}
  </div>
  </div>
)

export default IndexPage
