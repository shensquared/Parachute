import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle} from "react-icons/fc";
import { SiGitlab } from "react-icons/si";


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
  const getLogo = () => {
    switch (logo) {
      case 'mit':
        return (<svg version="1.1" id="Layer_1" x="0px" y="0px" width="72px" height="38px" viewBox="0 0 72 38" enable-background="new 0 0 72 38" role="img" aria-labelledby="title"><g>
          <rect x="52" fill="#A41F35" width="20" height="8"/>
          <rect x="13" fill="#A41F35" width="8" height="26"/>
          <rect x="26" fill="#A41F35" width="8" height="38"/>
          <rect fill="#A41F35" width="8" height="38"/>
          <rect x="52" y="13" fill="#A41F35" width="8" height="25"/>
          <rect x="39" fill="#A41F35" width="8" height="8"/>
          <rect x="39" y="13" fill="#8B8B8C" width="8" height="25"/>
        </g>
        </svg>);
      case 'gitlab':
        return <SiGitlab className="h-8 w-8"/>;
      case 'google':
        return <FcGoogle className="h-8 w-8"/>;
      default:
        return null;
    }
  };
  return (
    <button
      onClick={onClick}
      className={
        "flex w-full flex-row items-center justify-center gap-5 rounded-lg border-2 p-3 text-left font-semibold"
      }
    >

      {getLogo()}
    <div>{buttonText}</div>
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
      buttonText="Sign in with Kerb"
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

