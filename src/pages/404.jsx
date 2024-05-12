import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
 const error = useRouteError();
 return (
    <div>
      <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="my-5 text-xl">Sorry, an uxpeccted error has occured</p>
        <p className="text-lg">
            {error.statusText || error.message}</p>
    </div>
    </div>
 );
};

export default ErrorPage