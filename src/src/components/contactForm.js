import React from "react"

export default class ContactForm {
  render() {
    return (
      <div className="container-fluid">
        <form>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea>Your message</textarea>
          <input
            type="submit"
            className="btn btn-success"
            value="Send Message"
          />
        </form>
      </div>
    )
  }
}
