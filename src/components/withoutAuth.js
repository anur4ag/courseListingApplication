"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function withoutAuth(Component) {
  const Auth = (props) => {
    const user = useSelector((state) => state.data.user.user);
    useEffect(() => {
      if (user) {
        redirect("/courses");
      }
    }, [user]);
    return !user ? <Component {...props} /> : null;
  };
  return Auth;
}
