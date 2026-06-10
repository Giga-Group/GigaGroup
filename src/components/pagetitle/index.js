import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    const backgroundStyle = props.backgroundImage ? {
        backgroundImage: `url("${props.backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: props.backgroundPosition || (props.fullHeight ? 'center bottom' : 'center top'),
        backgroundRepeat: 'no-repeat'
    } : {};

    return(
        <section className={`wpo-page-title${props.fullHeight ? ' wpo-page-title-full' : ''}`} style={backgroundStyle}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ol className="wpo-breadcumb-wrap">
                                <li><Link to="/">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;