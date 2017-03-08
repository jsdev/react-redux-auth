import React from 'react'
import Header from '../containers/Header'

export default class App extends React.Component {
    render = () => (
        <div>
        <Header />
        {this.props.children}
        </div>
    );
}
