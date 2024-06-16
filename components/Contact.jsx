export default function Contact() {
    return (
      <section>
        <h2>Contact Us</h2>
        {/* insert map */}
        <h3>To receive a quote or more information about our services.</h3>
        <h4>Fill out the form below and we will contact you</h4>
        <form name="contact" action="/success" method="POST" data-netlify="true">
		<input type="hidden" name="form-name" value="contact" />
		<p>
			<label>Name <input type="text" name="name" /></label>
		</p>
		<p>
			<label>Email <input type="email" name="email" /></label>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
            {/* <ul>
				<li>
					<label for="First and Last Name">First and Last Name</label>
					<input type="text" name="First and Last Name"/>
				</li>
				<li>
					<label for="Email">Email</label>
					<input type="text" name="Email"/>
				</li>
				<li>
					<label for="Phone">Phone Number</label>
					<input type="text" name="Phone"/>
				</li>
				<li>
					<label for="Preferred Method of Contact">Preferred Method of Contact</label>
					<select name="Preferred Method of Contact" id="">
					<option value="" selected disabled hidden>Select type here</option>
					<option value="email">Email</option>
					<option value="phone">Phone</option>
					</select>
				</li>
				<li>
					<label for="Venue">Venue</label>
					<input type="text" name="Venue"/>
				</li>
				<li>
					<label for="Event Date">Event Date</label>
					<input type="text" name="Event Date"/>
				</li>
				<li>
					<label for="Details">Provide us with a few details about your event or any questions you have for us.</label>
					<textarea name="Details" id=""></textarea>
				</li>
				<li>
					<label for="Heard About Us">Let us know how you heard about us</label>
					<input type="text" name="Heard About Us"/>
				</li>
				<li>
					<button type="submit">Submit</button>
				</li>
            </ul> */}
        </form>
        <h4>Contact Us</h4>
      </section>
    )
  }