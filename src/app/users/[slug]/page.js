const User = ({ params }) => {
  const routeParams = params;
  return (
    <>
      <h1>User {routeParams.slug}</h1>
    </>
  );
};
export default User;
