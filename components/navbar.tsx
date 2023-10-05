"use client";

import useScroll from "@/lib/hooks/use-scroll";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Google } from "./icons";
import Scale3 from "./icons/scale3.svg";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src={Scale3}
              alt="Scale3 logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>zkLogin</p>
          </Link>
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="flex gap-2 items-center rounded-full border border-gray-300 p-1.5 px-4 text-sm transition-all bg-gradient-to-tr from-blue-400 via-white to-purple-400 background-animate"
                onClick={() => setShowSignInModal(true)}
              >
                <Google className="h-1 w-1" />
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
