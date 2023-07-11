import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { SiAuth0, SiGitlab } from "react-icons/si";


interface ButtonProps {
  onClick: () => void;
  buttonText: string;
  logo: string;
}

const LoginButton: React.FC<ButtonProps> = ({
  onClick,
  buttonText,
  logo,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "flex w-full flex-row items-center justify-center gap-5 rounded-lg border-2 p-3 text-left font-semibold"
      }
    >
    <div className="w-[150px]">{buttonText}</div>
    </button>
  );
};


export const Auth0LoginButton = () => {
  return (
    <LoginButton
      onClick={() =>
        void signIn("auth0", {
          callbackUrl:
            window.location.pathname === "/"
              ? `${window.location.origin}/dashboard`
              : window.location.href,
        })
      }
      buttonText="Sign in with MIT Kerb"
      logo="mit"
    />
  );
};

export const GitlabLoginButton = () => {
  return (
    <LoginButton
      onClick={() =>
        void signIn("gitlab", {
          callbackUrl:
            window.location.pathname === "/"
              ? `${window.location.origin}/dashboard`
              : window.location.href,
        })
      }
      buttonText="Sign in with Gitlab"
      logo="gitlab"
    />
  );
};
export const GoogleLoginButton = () => {
  return (
    <LoginButton
      onClick={() =>
        void signIn("google", {
          callbackUrl:
            window.location.pathname === "/"
              ? `${window.location.origin}/dashboard`
              : window.location.href,
        })
      }
      buttonText="Sign in with Google"
      logo="google"
    />
  );
};

