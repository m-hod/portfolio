import React, { Component } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Project extends Component {
    render () {
        return (
            <div className="project">
                <div className='project--info__banner'></div>
                <div className="project--info">
                    <div className="project--info__container">
                        <h3 className="project--info__title">ChatWell</h3>
                        <p className="project--info__content">
                            <em>
                                NodeJs, React, Redux, Express, SQLite3, Socket.io, Styled Components
                            </em>
                            {/* set up truncation script */}
                        </p>
                    </div>
                    <div className="project--info__icons">
                        <ExpandMoreIcon fontSize='large' className='project--info__icon'/>
                        <ExpandMoreIcon fontSize='large' className='project--info__icon'/>
                        <ExpandMoreIcon fontSize='large' className='project--info__icon'/>

                    </div>
                </div>
            </div>
        )
    }
}