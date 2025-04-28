//Problem: Even though user does not change, React sees it as a new object on every render, causing unnecessary re-renders accross the pages.
import { memo } from "react";

function ChildComponent({ user }) {
  console.log("Child re-rendered!");
  return <p>User: {user.name}</p>;
}

export default memo(ChildComponent);
