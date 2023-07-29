import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/Greetings/greetings";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetingDetails);
  console.log(greeting[0]);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <>
      <p>{greeting[0]?.message}</p>
      <p>hello</p>
    </>
  );
};

export default Greeting;
