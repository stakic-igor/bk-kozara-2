import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutPosts: []
        }
    }

    componentDidMount() {
        let url = "http://localhost/bk-kozara/wordpress/wordpress/wp-json/wp/v2/posts?categories=3&order=asc";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                aboutPosts: data
            }))
    }

    render() {

        const { aboutPosts } = this.state;
        let post = aboutPosts.map(post =>
                <div key={post.id}>
                    <h3 className="heading">{post.title.rendered}</h3>
                    <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
                </div>
            )

        return (
        <div className="about">{post}</div>
        )
    }
}

export default About;