import React, { Component } from 'react';
import { fetchContact } from '../../api/contact-api';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactInfo: []
        }
    }

    componentDidMount() {
        fetchContact()
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
            <div className="contact content">
                {info}
            </div>
        )
    }
}

export default Contact;