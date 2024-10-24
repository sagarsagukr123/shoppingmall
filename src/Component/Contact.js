import './Cont.css';
import React,{useState} from 'react'
import axios from "axios";

function Contact()
{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const obj={
        email:email,
        name:name,
        message:message,
    }
    const handelEve=(e)=>{
        e.preventDefault();
            axios.post('http://localhost:8080/con',obj)
            .then((res)=>{
                console.log(res);
                alert("Thank you for your responce., Contact yoy soon!");   
            })
            .catch(err=>{
                alert("Thank you for your responce., Contact yoy soon!");
            })
        
    }
    return(
        <div class="fun" style={{fontSize: +30}}>
            <div class="container main">
                <h1>Get in Touch</h1>
                <p style={{textAlign:'center'}}>If you have any questions, feel free to reach out to us. We're here to help!</p>
                <div class="contact-form">
                    <form method="post">
                        <input type="text" name="name" placeholder="Your Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" name="email" placeholder="Your Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <textarea name="message" rows="5" placeholder="Your Message" required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button onClick={handelEve} className='btn add' style={{width: '180px'}} type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;