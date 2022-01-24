import Footer from './footer'
import Navbar from './navbar'
import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}