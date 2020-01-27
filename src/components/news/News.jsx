import React, { Component } from 'react';
import { fetchNews } from "../../api/news-api";

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {

		fetchNews()
			
            .then(data => this.setState({
                news: data
            }))
        }
        componentDidUpdate(){
            console.log(this.state.news[0]._embedded['wp:featuredmedia'][0].alt_text)

    }

    render() {

        const { news } = this.state;

        let singleNews = news.map(item =>
            <div className="news-card" key={item.id}>
                <img src={
					item.featured_media === 0 ?
					`${process.env.REACT_APP_BASE_MEDIA_URL}/2020/01/bk-kozara-logo.jpg` :
                    item._embedded['wp:featuredmedia'][0].source_url
                }
                className="news-card__img"
                alt={item.featured_media === 0 ? "featured image" : item._embedded['wp:featuredmedia'][0].alt_text}
                />
                <h4 className="news-card__title">{ item.title.rendered }</h4>
                <p dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} className="news-card__intro"></p>
                <a href="#" className="news-card__read-more">pročitaj više...</a>
            </div>
            )

        return (
            <div className="news content">
                <h3 className="heading">Novosti</h3>
                <div className="news-block">
                    <div className="news-block-wrap">
                        { singleNews }
                    </div>
                    <a href="#" className="btn btn--main news-block-load-more">Prikaži više</a>
                </div>
            </div>
        )
    }
}

export default News;