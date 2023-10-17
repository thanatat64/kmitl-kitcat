import React from "react";
import Image from "next/image";
import { StaticImageData } from 'next/image';

interface CardAboutProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const CardAbout: React.FC<CardAboutProps> = ({
  icon,
  title,
  subtitle
}) => {
  return (
    <div className="flex bg-white w-[230px] h-[350px] md:w-[430px] md:h-[230px] lg:w-[250px] lg:h-[400px] rounded-t-full rounded-b-full mx-[60px] md:mx-0 my-[20px] lg:my-10 lg:rounded-full shadow justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row lg:flex-col my-5 lg:ml-0 justify-center items-center md:gap-3">
          <div className="rounded-full lg:mx-auto lg:w-fit lg:p-5 ">
            <Image src={icon} alt="" width={150} height={150} />
          </div>
          <div className="flex flex-col justify-center items-center pt-1">
            <h1 className="text-[32px]  font-bold flex justify-center sm:mt-3 lg:mt-0 text-[var(--navy)]">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;

