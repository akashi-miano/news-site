import { heroImg } from "../assets";
import SideBar from "./SideBar";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="grid md:grid-cols-6 gap-2 md:gap-8">
          <div className="left-section flow-content--m col-span-4">
            <div className="img-wrapper">
              <img src={heroImg} alt="Hero Image" />
            </div>
            <div className="wrapper grid md:grid-cols-2 gap-4">
              <header>
                <h1 className="text-zinc-950 text-5xl capitalize font-bold">
                  the bright future of web 3.0?
                </h1>
              </header>
              <div className="text-wrapper flow-content--s">
                <p className="text-[#5d5f79]">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <a
                  href=""
                  className="bg-orange-600 text-white hover:bg-black focus:bg-black duration-300 tracking-wider uppercase px-12 py-2 mb-4 md:mb-0"
                >
                  read more
                </a>
              </div>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
