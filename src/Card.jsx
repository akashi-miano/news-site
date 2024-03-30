const Card = ({ id, title, content, imgSrc }) => {
  return (
    <div className="card flex items-center gap-4 w-full">
      <div className="img-wrapper">
        <img
          src={imgSrc}
          alt="Card Image"
          className="w-full max-w-[200px] md:max-w-[100%]"
        />
      </div>
      <div className="text-wrapper flow-content--s">
        <span className="text-4xl text-gray-300 font-bold">{id}</span>
        <header>
          <h3 className="text-zinc-900 text-lg font-extrabold">
            <a
              className="hover:text-[#e9ab53]  focus:text-[#e9ab53] duration-300"
              href=""
            >
              {title}
            </a>
          </h3>
        </header>
        <p className="text-md text-gray-400">{content}</p>
      </div>
    </div>
  );
};

export default Card;
