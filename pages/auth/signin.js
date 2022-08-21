import Header from 'components/headerComponents';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import GoogleLogo from 'public/images/google-logo-1.jpg';

const signin = ({ providers }) => {
  return (
    <>
      <Header />

      <div className="">
        {Object.values(providers).map((provider) => (
          <div href={provider.url} key={provider.name} className="mt-16">
            <div className="w-96 mx-auto space-y-6">
              <Image
                src={GoogleLogo}
                layout="intrinsic"
                alt="Google"
                className="object-cover"
              />
              <div className="flex flex-col items-center space-y-3">
                <p className="text-sm italic text-gray-600">
                  This Website is created for learning purposes
                </p>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className="bg-red-500 text-white rounded-md px-7 py-2 hover:opacity-70 transition-opacity"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
