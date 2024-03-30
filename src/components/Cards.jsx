import Card from "../Card";
import cardData from "../../public/data";

const Cards = () => {
  return (
    <section className="py-16">
      <div className="container flex items-center gap-4 md:flex-row flex-col">
        {cardData.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            id={item.id}
            content={item.content}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
