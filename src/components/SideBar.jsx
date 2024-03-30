const SideBar = () => {
  return (
    <aside className="bg-[#00001a] text-white flow-content--md p-6 justify-self-end w-full md:max-w-[350px] col-span-6 md:col-span-2">
      <header className="mb-6">
        <h2 className="text-[#e9ab53] font-bold text-xl">New</h2>
      </header>
      <div className="wrapper flow-content--l">
        <article className="flow-content--m">
          <a
            href=""
            className="font-bold text-2xl hover:text-[#e9ab53] focus:text-[#e9ab53] duration-300"
          >
            Hydrogen VS Electric Cars
          </a>
          <p className="text-gray-300 text-sm">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </article>
        <article className="flow-content--sm">
          <a
            href=""
            className="font-bold text-xl hover:text-[#e9ab53] focus:text-[#e9ab53] duration-300"
          >
            {" "}
            The Downsides of AI Artistry{" "}
          </a>
          <p className="text-gray-300 text-sm">
            {" "}
            What are the possible adverse effects of on-demand AI image
            generation?{" "}
          </p>
        </article>
        <article className="flow-content--sm">
          <a
            href=""
            className="font-bold text-xl hover:text-[#e9ab53] focus:text-[#e9ab53] duration-300"
          >
            {" "}
            Is VC Funding Drying Up?{" "}
          </a>
          <p className="text-gray-300 text-sm">
            {" "}
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.{" "}
          </p>
        </article>
      </div>
    </aside>
  );
};

export default SideBar;
