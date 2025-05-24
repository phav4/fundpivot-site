function ContactForm() {
  return (
    <form className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input type="text" placeholder="Name" className="w-full border p-2 mb-2" />
      <input type="email" placeholder="Email" className="w-full border p-2 mb-2" />
      <textarea placeholder="Message" className="w-full border p-2 mb-2"></textarea>
      <button className="bg-blue-600 text-white px-4 py-2">Send</button>
    </form>
  );
}

export default ContactForm;