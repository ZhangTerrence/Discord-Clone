import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/GuildSidebar/Sidebar";
import { useAppDispatch } from "../hooks/store";
import { setUser } from "../features/user/userSlice";
import { UserResult, useGetUserQuery } from "../features/user/userApiSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

function Channels() {
  const { data: user, isFetching, isLoading, isSuccess, isError, error } = useGetUserQuery("64ac371db26fd59df276335d");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setUser(user as UserResult));
    };
    fetchData();
  }, [dispatch, isSuccess, user]);

  if (isFetching || isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="channels-page">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Channels;
