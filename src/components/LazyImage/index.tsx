import React from "react";

type Props = { src: string; alt: string };

export const LazyImage = (props: Props) => {
  const { src, alt } = props;

  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="h-12 absolute flex items-center animate-pulse">
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-12 rounded transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
