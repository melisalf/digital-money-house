type BackIconProps = {
  className?: string;
};

export default function BackIcon({ className }: BackIconProps) {
  return (
	<div data-svg-wrapper className="flex items-center justify-center">
    <svg
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
	  className={className}
    >
      <path
        d="M20 13.5C20.8284 13.5 21.5 12.8284 21.5 12C21.5 11.1716 20.8284 10.5 20 10.5L20 13.5ZM0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807613 11.0711 0.807613 10.4853 1.3934L0.93934 10.9393ZM20 12L20 10.5L2 10.5L2 12L2 13.5L20 13.5L20 12Z"
        fill="none"
        className={className}
      />
    </svg>
	</div>
  );
}
