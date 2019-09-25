import React, { Component } from 'react'
import Folder from './folder'
import './skills.scss'

export default class FolderPreviews extends Component {
    render() {
        return (
            <div className="folder__preview folder__preview--thumb">
                {this.props.files.map((file, i) => <Folder key={i} file={file} />)}
            </div>
        )
    }
}
