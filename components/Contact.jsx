export default function Contact(){

  return(
    <section
      id="contact"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
      "
    >

      <div className="
        w-full
        max-w-5xl
        bg-black/40
        backdrop-blur-md
        border
        border-green-400/20
        rounded-xl
        p-10
        font-mono
      ">

        <h2 className="
          text-4xl
          font-bold
          text-white
          mb-8
        ">
          Contact
        </h2>


        <p className="
          text-green-400
          mb-6
        ">
          root@nicholas:~$ contact
        </p>


        <div className="
          grid
          md:grid-cols-3
          gap-4
          mb-10
        ">

          <a
            href="https://github.com/cyrolite"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-4
              rounded-lg
              bg-green-500/10
              border
              border-green-400/20
              text-green-300
              hover:bg-green-500/20
              transition
            "
          >
            {">"} GitHub
          </a>


          <a
            href="https://www.linkedin.com/in/nicholas-yap-b6069b20b/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-4
              rounded-lg
              bg-green-500/10
              border
              border-green-400/20
              text-green-300
              hover:bg-green-500/20
              transition
            "
          >
            {">"} LinkedIn
          </a>


          <a
            href="mailto:nicholasyapcheeang@u.nus.edu"
            className="
              p-4
              rounded-lg
              bg-green-500/10
              border
              border-green-400/20
              text-green-300
              hover:bg-green-500/20
              transition
            "
          >
            {">"} Email
          </a>

        </div>


        <p className="
          text-green-400
          mb-6
        ">
          root@nicholas:~$ send_message
        </p>


        <form
          action="mailto:nicholasyapcheeang@u.nus.edu"
          method="POST"
          encType="text/plain"
          className="
            grid
            md:grid-cols-2
            gap-5
          "
        >

          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="
              p-4
              rounded-lg
              bg-black/50
              border
              border-green-400/20
              text-green-200
              outline-none
              focus:border-green-400/60
            "
          />


          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="
              p-4
              rounded-lg
              bg-black/50
              border
              border-green-400/20
              text-green-200
              outline-none
              focus:border-green-400/60
            "
          />


          <textarea
            name="Message"
            rows="6"
            placeholder="Message"
            required
            className="
              md:col-span-2
              p-4
              rounded-lg
              bg-black/50
              border
              border-green-400/20
              text-green-200
              outline-none
              focus:border-green-400/60
            "
          />


          <button
            type="submit"
            className="
              md:col-span-2
              p-4
              rounded-lg
              bg-green-500/20
              border
              border-green-400/30
              text-green-300
              hover:bg-green-500/30
              transition
            "
          >
            ./send_message →
          </button>

        </form>


      </div>

    </section>
  )
}