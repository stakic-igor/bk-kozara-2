import React, { Component } from 'react';
import { fetchAbout } from "../../api/about-api";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutPosts: []
        }
    }

    componentDidMount() {
        fetchAbout()
        .then(data => this.setState({
                aboutPosts: data
            })
        ).catch((e) => {
            alert('Something went wrong, ', e)
        })
    }

    render() {

        const { aboutPosts } = this.state;

        let post = aboutPosts.map(post =>
            <div key={post.id} className="about-card">
                    <div className="about-card__content">
                        <h3 className="heading">{post.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} className="about-card__content__paragraph"></div>
                    </div>
                    <img
                        src={
                            post.featured_media === 0 ?
                            `${process.env.REACT_APP_BASE_MEDIA_URL}/2020/01/bk-kozara-logo.jpg` :
                            post._embedded['wp:featuredmedia'][0].source_url
                        }
                        className="about-card__img"
                        alt={post.featured_media === 0 ? "featured image" : post._embedded['wp:featuredmedia'][0].alt_text}
                        />
            </div>
            )

        return (
        <div className="about content">{post}</div>
        )
    }
}

export default About;