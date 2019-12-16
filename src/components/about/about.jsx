import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutPosts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost/bk-kozara/wordpress/wordpress/wp-json/wp/v2/posts?categories=3&order=asc&_embed";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                aboutPosts: data
            }))
        }
        
        componentDidUpdate() {
            console.log(this.state.aboutPosts)

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
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        className="about-card__img"
                        alt={post._embedded['wp:featuredmedia'][0].slug}
                        />
            </div>
            )

        return (
        <div className="about">{post}</div>
        )
    }
}

export default About;