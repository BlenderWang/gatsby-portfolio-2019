import React, { Component } from 'react'

export default class Folder extends Component {
    render() {
        const file = this.props.file
        return (
            <img src={file.fileLink} alt={file.description} className="folder__thumb"/>
        )
    }
}
