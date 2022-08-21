const SigninButton = ({ signIn }) => {
  return (
    <button
      onClick={() => signIn()}
      className="text-white bg-blue-500 px-6 py-2  rounded-md hover:opacity-70 hover:text-white transition-opacity"
    >
      Sign in
    </button>
  );
};

export default SigninButton;
