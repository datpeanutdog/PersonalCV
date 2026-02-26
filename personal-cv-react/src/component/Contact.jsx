function Contact() {
    return (
    <section class="card">
              <h2>Contact Me</h2>
              <form class="contact-form">
                  
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" id="name" placeholder="Enter your name"/>
                  </div>
          
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" id="email" placeholder="Enter your email"/>
                  </div>
          
                  <div class="form-group">
                      <label for="message">Message</label>
                      <textarea id="message" placeholder="Write your message"></textarea>
                  </div>
          
                  <button type="submit" id="submitBtn">Send</button>
          
              </form>
              </section>)
}        
export default Contact;