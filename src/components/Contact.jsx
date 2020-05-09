import React from 'react';


function ContactText(props) {
  return (
    <span className="contact__data">{props.text}</span>
  )
}

function ContactAvatar(props) {
  return(
    <span className="contact__avatar">
      <img src={props.avatar} alt="Avatar" /> 
    </span>
  )
  
}

class Contact extends React.Component {
  leadingZero(num, places) {
    return String(num).padStart(places, '0');
  }

  formatDate(dateStr) {
    const date = new Date(dateStr);
    if(isNaN(date.getTime())){
      return dateStr;
    }
    return `${this.leadingZero(date.getDate(), 2)}/${this.leadingZero(date.getMonth() + 1, 2)}/${date.getFullYear()}`; 
  }

  render() {
    return (
      <article className="contact" data-testid="contact">
        <ContactAvatar avatar={this.props.data.avatar} />
        <ContactText text={this.props.data.name} />
        <ContactText text={this.props.data.phone} />
        <ContactText text={this.props.data.country} />
        <ContactText text={this.formatDate(this.props.data.admissionDate)} />
        <ContactText text={this.props.data.company} />
        <ContactText text={this.props.data.department} />
			</article>
    );
  }
}

export default Contact;
