import type { GetServerSideProps } from "next";
import { type NextPage } from "next";
import React from "react";
import { useElementMouseRelativeAngle } from "../utils/hooks";
import {
  Auth0LoginButton,
  GoogleLoginButton,
  GitlabLoginButton,
} from "../components/ui/LoginButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../server/auth";
import Navbar from "../components/section/Navbar";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const { angle, ref } = useElementMouseRelativeAngle();

  return (
    
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="flex w-screen grow flex-col items-center justify-center gap-16 p-12 md:flex-row xl:gap-32">
      
        <div
          ref={ref}
          className="bg-colorful drop-shadow-pink h-[450px] w-full rounded-[8px] p-[2px] sm:max-w-[450px]"
          style={
            {
              "--colorful-bg-degree": `${angle - 90}deg`,
            } as React.CSSProperties
          }
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-[6px] bg-white p-8">
            <div className="mb-2 text-sm text-gray-500">
            </div>
            <GoogleLoginButton />
            <GitlabLoginButton />
            <Auth0LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
