"use client";
import Image from "next/image";
import love from "@/public/love.svg";
import loved from "@/public/loved.png";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

import { addFavorite, RemoveFavorite } from "@/redux/features/FavoriteSlice";
import { useState } from "react";
interface ButtonType {
  id: string;
}
const ButtonLove = ({ id }: ButtonType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isAdded, SetIsAdded] = useState(false);
  const FavoriteList = useAppSelector((state) => state.FavoriteList.id);

  const handleLove = () => {
    dispatch(addFavorite(id));
    SetIsAdded(!isAdded);
  };
  const handleUnLove = () => {
    dispatch(RemoveFavorite(id));
    SetIsAdded(!isAdded);
  };
  const FavoriteListId = FavoriteList.find((e) => e === Number(id));

  return (
    <div>
      {FavoriteListId !== undefined ? (
        <button type="button">
          <Image
            src={loved}
            alt="love"
            width={45}
            height={45}
            className="md:w-[50px] md:h-[50px] "
            onClick={handleUnLove}
          />
        </button>
      ) : (
        <button type="button">
          <Image
            src={love}
            alt="love"
            width={40}
            height={40}
            className="md:w-[45px] md:h-[45px] "
            onClick={handleLove}
          />
        </button>
      )}
    </div>
  );
};
export default ButtonLove;
