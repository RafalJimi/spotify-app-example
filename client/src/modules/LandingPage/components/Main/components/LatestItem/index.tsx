import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthRX } from "../../../../../../store/user/isAuth/selectors";
import { LandingPageAlbumsProps } from "../../consts";
import { toast } from "react-toastify";
import { LatestItemLayout } from "./layout";

type LatestItemProps = {
  latestItemData: LandingPageAlbumsProps;
};

export const LatestItem = ({ latestItemData }: LatestItemProps) => {
  const history = useHistory();

  const isAuth = useSelector(isAuthRX);

  const handleOnClick = useCallback(
    (e: React.MouseEvent) => {
      if (isAuth === "isAuth") history.push(latestItemData.url);
      else toast.dark("You are not authenticated - please log in.");
    },
    [isAuth]
  );

  return (
    <LatestItemLayout
      latestItemData={latestItemData}
      handleOnClick={handleOnClick}
    />
  );
};
