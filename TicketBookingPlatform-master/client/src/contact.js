
import React,{useState}from "react";
import emailjs from 'emailjs-com'
import './contact.css'


const Contact=()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

  
   
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'ticket';
            const templateId = 'template';
            const userId = 'OeJ6ddKILgg3DbSIB';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            alert('Thank you for sending mail.Please wait for response')
        } else {
            alert('Please fill in all fields.');
        }
    }



return(
    <div className="cont-des">
        <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2 className="contact">CONTACT</h2>
        {/* <div className="links">
          <div className="link">
            <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
          </div>
          <div className="link">
            <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
          </div>
          <div className="link">
            <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
          </div>
          <div className="link">
            <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
          </div>
        </div> */}
    </div>
    <div className="contact-form-wrapper">
      <form>
        <div className="form-item">
          <input className="contact-input" type="text" placeholder="Name:" value={name} onChange={e => setName(e.target.value)} />
          {/* <label>Name:</label> */}
        </div>
        <div className="form-item">
        <input className="contact-input" type="email" placeholder="Email:" value={email} onChange={e => setEmail(e.target.value)} />
          {/* <label>Email:</label> */}
        </div>
        <div className="form-item">
        <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          {/* <label>Message:</label> */}
        </div>
        <button className="submit-btn" onClick={submit}>Send Message</button>
      </form>
    </div>
  </div>
</section>
    </div>
)
}
export default Contact;