import React from "react";

interface Props {
  id: string
}

export const HomeSvgSelector = ({ id }: Props) => {

  switch (id) {
    case 'sun':
      return <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9302 22.6436C22.9302 27.2846 19.1684 31.0466 14.5272 31.0466H0.134033V0.909705C0.501562 
    0.875936 0.873535 0.859558 1.24982 0.859558C8.06911 0.859558 13.5969 6.38735 13.5969 13.2066C13.5969 
    13.5753 13.5795 13.9395 13.5478 14.2996C13.8696 14.2625 14.1956 14.2407 14.5272 14.2407C19.1684 14.2407 
    22.9302 18.0036 22.9302 22.6436V22.6436Z" fill="#DAEFEC" />
      </svg>
  }
}