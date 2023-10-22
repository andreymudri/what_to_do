import { signIn, signOut, useSession } from 'next-auth/react';

export default function HeaderComponent() {
  const { data: sessionData } = useSession();


  return (
    <div className="fixed top-0 w-full   flex flex-col text-center items-center align-middle justify-center  bg-gradient-to-b from-[#2e026d] to-[#15162c] ">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}

      </p>
      <div className="flex items-center justify-center h-full">
      <button
        className="items-center rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
        </div>
    </div>
  );
}
