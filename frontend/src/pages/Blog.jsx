import Map from "~/components/Map"
import BlogItem from "./BlogItem"
import Reveal from "~/components/Reveal"

function Blog() {
  return (
    <div className='text-3xl w-full h-full font-bold bg-slate-100 '>
      <div className=" px-8 max-w-[1216px] h-full  mx-auto">
        <div className="h-[170px] w-full th-fl bg-sky-100">
          Our Blogs
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-10">
          <Reveal><BlogItem /></Reveal>
          <Reveal><BlogItem /></Reveal>
          <Reveal><BlogItem /></Reveal>
          <Reveal><BlogItem /></Reveal>
          <Reveal><BlogItem /></Reveal>
          <Reveal><BlogItem /></Reveal>

        </div>
      </div>
    </div>
  )
}

export default Blog