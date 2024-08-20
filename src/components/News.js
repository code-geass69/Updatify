import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }



    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=sports&apiKey=afffe7d872654346b370d2bcabdbd440&page=1&pageSize=12";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    HandleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?q=sports&apiKey=afffe7d872654346b370d2bcabdbd440&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }

    HandlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=sports&apiKey=afffe7d872654346b370d2bcabdbd440&page=${this.state.page - 1}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
        console.log("Hello I have been clicked")



        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles

        })

    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center text-decoration-underline' style={{ color: "white" }}>Updatify - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-md" onClick={this.HandlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} type="button" className="btn btn-dark btn-md" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
