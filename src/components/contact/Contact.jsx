import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactInfo: []
        }
    }

    componentDidMount() {
        const url = "http://localhost/bk-kozara/wordpress/wordpress/wp-json/wp/v2/posts?categories=4";
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({
                contactInfo: data
            }))
    }

    render() {

        const { contactInfo } = this.state;
    const info = contactInfo.map(item => 
        <div key={item.id}>
            <h3 className="heading">{item.title.rendered}</h3>
            <p className="" dangerouslySetInnerHTML={{__html: item.content.rendered}}></p>
            </div>)
        
        return (
            <div>
                {info}
            </div>
        )
    }
}

export default Contact;