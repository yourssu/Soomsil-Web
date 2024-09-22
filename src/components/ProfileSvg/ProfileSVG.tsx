interface ProfileSvgProps {
  imageUrl: string;
}

export const ProfileSvg = ({ imageUrl }: ProfileSvgProps) => {
  return (
    <svg
      width="6rem"
      height="6rem"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M40 20C40 3.99999 36 -3.11993e-06 20 0C4 -3.11993e-06 0 4 0 20C0 36 4 40 20 40C36 40 40 36 40 20Z"
        fill="url(#pattern0)"
      />
      <path d="M20 0.5C28.0036 0.499998 32.8055 1.51255 35.6464 4.35355C38.4874 7.19454 39.5 11.9964 39.5 20C39.5 28.0036 38.4874 32.8055 35.6464 35.6465C32.8055 38.4874 28.0036 39.5 20 39.5C11.9964 39.5 7.19455 38.4874 4.35355 35.6465C1.51256 32.8055 0.5 28.0036 0.5 20C0.5 11.9964 1.51256 7.19455 4.35355 4.35355C7.19455 1.51256 11.9964 0.499998 20 0.5Z" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <image href={imageUrl} x="0" y="0" width="1" height="1" />
        </pattern>
      </defs>
    </svg>
  );
};
