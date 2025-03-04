import React from "react";

interface Props {
  className?: string;
}
const Windows = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="63"
      height="72"
      viewBox="0 0 63 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.266602 17.6874V62.2967L31.1208 71.2058V-0.00012207L0.266602 17.6874ZM25.3765 61.2618L2.97819 57.0669V22.1439L25.3765 11.7519V61.2618Z"
        fill="currentColor"
      />
      <path
        d="M18.209 22.4017V55.1956L21.1148 55.5802V26.2754L22.6649 25.6926V20.8514L18.209 22.4017Z"
        fill="currentColor"
      />
      <path
        d="M34.0859 16.72V22.6594L44.6746 19.6897V58.1653L34.0859 56.9362V62.8122L50.2246 65.7819V10.9114L34.0859 16.72Z"
        fill="currentColor"
      />
      <path
        d="M34.0859 25.1772V29.4355L41.8322 27.8218V23.1115L34.0859 25.1772Z"
        fill="currentColor"
      />
      <path
        d="M53.063 20.1416V25.3039L56.9361 24.4674V56.3572L53.063 55.8378V61.2618L62.1651 62.4235V17.6239L53.063 20.1416Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Windows;
