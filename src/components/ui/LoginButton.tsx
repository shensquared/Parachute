import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";


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
        return (<svg version="1.1" id="Layer_1" x="0px" y="0px" width="60.6px" height="32px" viewBox="0 0 72 38" role="img" aria-labelledby="title"><g>
          <rect x="52" fill="#A41F35" width="20" height="8" />
          <rect x="13" fill="#A41F35" width="8" height="26" />
          <rect x="26" fill="#A41F35" width="8" height="38" />
          <rect fill="#A41F35" width="8" height="38" />
          <rect x="52" y="13" fill="#A41F35" width="8" height="25" />
          <rect x="39" fill="#A41F35" width="8" height="8" />
          <rect x="39" y="13" fill="#8B8B8C" width="8" height="25" />
        </g>
        </svg>);
      case 'gitlab':
        return (<svg viewBox="0 0 50 48" width="33.33px" height="32px">
          <g>
            <path d="M49.014 19L48.947 18.82L42.163 1.124C41.8776 0.411248 41.1699-0.0405287 40.4033 0.000642862C39.6366 0.0418144 38.9814 0.566786 38.774 1.306L34.195 15.326L15.651 15.326L11.071 1.306C10.8601 0.570392 10.206 0.0493964 9.44182 0.00834698C8.67767-0.0327024 7.97152 0.415222 7.683 1.124L0.903 18.824L0.832 18.999C-1.17397 24.2402 0.529752 30.1764 5.01 33.556L5.036 33.576L5.093 33.62L15.413 41.354L20.533 45.224L23.643 47.575C24.3929 48.1419 25.4281 48.1419 26.178 47.575L29.288 45.223L34.408 41.354L44.802 33.575L44.831 33.553C49.3113 30.1748 51.0166 24.2403 49.013 18.999L49.014 19Z" fill="#e24329" fillRule="nonzero" opacity="1" stroke="none" />
            <path d="M49.014 19L48.947 18.82C45.6416 19.4984 42.5273 20.8996 39.827 22.923L24.931 34.187L34.416 41.354L44.809 33.575L44.839 33.553C49.3168 30.173 51.0191 24.2387 49.014 18.999L49.014 19Z" fill="#fc6d26" fillRule="nonzero" opacity="1" stroke="none" />
            <path d="M15.414 41.354L20.534 45.224L23.644 47.575C24.3939 48.1419 25.4291 48.1419 26.179 47.575L29.289 45.223L34.409 41.354L24.925 34.187L15.415 41.354L15.414 41.354Z" fill="#fca326" fillRule="nonzero" opacity="1" stroke="none" />
            <path d="M10.019 22.923C7.31969 20.9005 4.20626 19.5003 0.902 18.823L0.832 19C-1.17347 24.241 0.530208 30.1765 5.01 33.556L5.036 33.576L5.093 33.62L15.413 41.354L24.904 34.187L10.02 22.923L10.019 22.923Z" fill="#fc6d26" fillRule="nonzero" opacity="1" stroke="none" />
          </g>
        </svg>);
      case 'google':
        return <FcGoogle className="h-8 w-8" />;
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
      buttonText="Sign in with Kerberos"
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
      buttonText="Sign in with self-hosted Gitlab"
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

