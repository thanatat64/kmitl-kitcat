import React from "react";
import Image from "next/image";
import { StaticImageData } from 'next/image';

interface CardMemberProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const CardMember: React.FC<CardMemberProps> = ({
  icon,
  title,
  subtitle
}) => {
  return (
    <div className="flex lg:w-[280px] md:mx-0">
      <div className="flex justify-center">
        <div className="flex flex-col my-5 md:ml-[50px] lg:ml-0">
          <div className="rounded-full mx-auto w-fit p-5 w-[150px] h-[150px] flex justify-center items-center">
            <Image src={icon} alt="memberImg" width={150} height={150} />
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h1 className="text-[20px] font-bold flex justify-center mt-4 text-[var(--navy)]">{title}</h1>
              <h5 className="text-[20px] text-center leading-7 mx-[40px] lg:mx-10 text-[var(--navy)]">{subtitle}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMember;

