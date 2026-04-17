const ErrorPage = ({ errorType }: { errorType: number }) => {
  const status = errorType || 500;

  let message = "Something went wrong.";
  switch (status) {
    case 404:
      message = "Page not found.";
      break;
    case 403:
      message = "Access denied.";
      break;
    case 500:
      message = "Internal server error.";
      break;
    default:
      message = "Unexpected error occurred.";
  }

  return (
    <div className="text-white p-2 text-center">
      <h1>Error {status}</h1>
      <p>{message}</p>
    </div>
  );
};

export { ErrorPage };
