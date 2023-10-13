import data from "./data.json";
import Card from "../../../cardHome/CardHome";
import icon1 from "../../../../public/image/convenient.png";
import icon2 from "../../../../public/image/bubble-chat.png";
import icon3 from "../../../../public/image/piggy-bank.png";
import icon4 from "../../../../public/image/dependable.png";

const icons = [ icon1, icon2, icon3, icon4 ];

const CardUI = () => {
  return (
    <div className="bg-[var(--cream)] pb-5 flex flex-col">
      <h1 className="lg:text-[40px] font-bold flex justify-center pt-5 pb-1 text-[var(--navy)]">
        สิ่งที่เราแตกต่างจากคนอื่น
      </h1>
      <div className="flex flex-col lg:flex-row mx-auto w-fit lg:w-[1200px] md:justify-between">
        {data.map((item, i) => (
          <Card
            color={item.color}
            icon={icons[i]}
            title={item.title}
            subtitle={item.subtitle}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CardUI;



