import React from "react";
import Image from "next/image";
import { StaticImageData } from 'next/image';

interface CardProps {
  color: string;
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({
  color,
  icon,
  title,
  subtitle
}) => {
  return (
    <div className={`flex bg-white md:w-[600px] lg:w-[270px] rounded-t-full rounded-b-full mx-[60px] md:mx-0 my-[20px] lg:my-10 lg:rounded-full shadow justify-center items-center`}>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row lg:flex-col my-5 md:ml-[50px] lg:ml-0">
          <div className={`${color} rounded-full mx-auto w-fit p-5 flex justify-center items-center`}>
            <Image src={icon} alt="" width={120} height={90} />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h1 className="text-[32px] font-bold flex justify-center mt-4 text-[var(--navy)]">{title}</h1>
              <h5 className="text-[20px] text-center leading-7 mx-[40px] lg:mx-10 text-[var(--navy)]">{subtitle}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

