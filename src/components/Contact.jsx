const Contact = () => {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <hr />
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Type your message" />
        <button type="button">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
