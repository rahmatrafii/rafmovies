"use client";
import { addWatchList, RemoveWatchList } from "@/redux/features/watchListSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { useState } from "react";
import RemoveCircleOutline from "@mui/icons-material/Check";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface ButtonType {
  children: React.ReactNode;
  styles: string;
  id: string;
  onClick?: React.ReactEventHandler;
}

const ButtonWatchList = ({ children, styles, id }: ButtonType) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isAdded, SetIsAdded] = useState(false);
  const watchList = useAppSelector((state) => state.watchList.id);

  const handleAddWatchList = () => {
    dispatch(addWatchList(id));
    SetIsAdded(!isAdded);
  };
  const handleRemoveWatchList = () => {
    dispatch(RemoveWatchList(id));
    SetIsAdded(!isAdded);
  };
  const watchListId = watchList.find((e) => e === Number(id));

  return (
    <div>
      {watchListId !== undefined ? (
        <button
          className={`${styles} whitespace-nowrap md:px-8  md:py-3 py-1 px-3 flex items-center gap-x-3 transition duration-300  border-none rounded-sm shadow-md hover:shadow-md text-[14px]`}
          onClick={handleRemoveWatchList}
        >
          <RemoveCircleOutline />
          {children}
        </button>
      ) : (
        <button
          className={`${styles} whitespace-nowrap md:px-8  md:py-3 py-1 px-3 flex items-center gap-x-3 transition duration-300  border-none rounded-sm shadow-md hover:shadow-md text-[14px]`}
          onClick={handleAddWatchList}
        >
          <AddCircleOutlineIcon />
          {children}
        </button>
      )}
    </div>
  );
};
export default ButtonWatchList;
