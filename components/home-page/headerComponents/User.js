import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import SigninButton from './SigninButton';

const User = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div
        className="h-12 w-12 rounded-full translate-y-2"
        onClick={() => signOut()}
      >
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          height={36}
          width={36}
          className="object-cover rounded-full cursor-pointer"
        />
      </div>
    );
  }
  return (
    <>
      <SigninButton signIn={signIn} />
    </>
  );
};

export default User;
