// useRouteError is a hook that gives you routing error
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err; // extract status and statusText from useRouteError hook
  return (
    <div>
      <h1>oops this page does not exist</h1>
      <h1>{status + " : " + statusText}</h1>
    </div>
  );
};

export default Error;
