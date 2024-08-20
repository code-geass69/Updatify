import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, ImageUrl, newsUrl } = this.props;
        return (
            <div className='my-3 mx-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!ImageUrl?"https://images.newscientist.com/wp-content/uploads/2024/08/14145626/SEI_217371562.jpg":ImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer"  target="_blank" className="btn btn-sm btn-dark">Read more..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
