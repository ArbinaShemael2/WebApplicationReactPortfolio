export default function ContactPage(){
    return (
        <main id="mainStyleC">
        <h1 id="contactTitle">Contact Us</h1>
        <section id="contactSection">
            <div id="contactPanel">
                <form id="contactForm"action='/'>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div id="contactDetails">
                    <h3>Contact Information</h3>
                    <p><strong>Address:</strong> 123 Main Street Colarado 4325</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Email:</strong> contact@arbinaportfolio.com</p>
                </div>
                </div>
                </section>
                </main>

        
            
    )
}


