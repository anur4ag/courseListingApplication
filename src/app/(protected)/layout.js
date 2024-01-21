"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { auth } from "@/lib/firebase";
import { loginUser, setLoading } from "../redux/features/userSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("no user");
      }
    });
  }, [dispatch]);
  const user = useSelector((state) => state.data.user);
  console.log(user);

  return <div>{user ? children : redirect("/sign-up")}</div>;
};

export default Layout;
