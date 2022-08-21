import SigninButton from './SigninButton';
import User from './User';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="custom-link">About</p>
        <p className="custom-link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="custom-link">Gmail</p>
        <p className="custom-link">Images</p>
        {/* <User /> */}
        <SigninButton />
      </div>
    </header>
  );
};

export default Header;
