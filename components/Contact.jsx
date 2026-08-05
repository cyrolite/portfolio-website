export default function Contact(){

  return(
    <section
      id="contact"
      className="py-20 px-6 max-w-xl mx-auto"
    >

      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <form
        action="mailto:nicholasyapcheeang@u.nus.edu"
        method="POST"
        encType="text/plain"
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          className="
          p-3
          rounded-lg
          bg-neutral-900
          border
          border-neutral-800
          "
        />

        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
          className="
          p-3
          rounded-lg
          bg-neutral-900
          border
          border-neutral-800
          "
        />

        <textarea
          name="Message"
          rows="5"
          placeholder="Your Message"
          required
          className="
          p-3
          rounded-lg
          bg-neutral-900
          border
          border-neutral-800
          "
        />

        <button
          type="submit"
          className="
          bg-indigo-600
          hover:bg-indigo-700
          transition
          p-3
          rounded-lg
          "
        >
          Send Message
        </button>

      </form>

    </section>
  )
}