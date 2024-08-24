import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col" >
      <div className="head_text text-center flex-center flex-col">
        <h1>Discover & Share</h1>
        <h1 className="orange_gradient"> AI-Powered Prompts</h1>
      </div>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
      </p>

      <Feed />

    </section>
  )
}

export default Home
