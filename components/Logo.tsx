type Props = {
  className?: string;
  ariaLabel?: string;
};

export default function Logo({
  className = "",
  ariaLabel = "Мир Ремонта",
}: Props) {
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMask: "url(/logo.svg) no-repeat center / contain",
        mask: "url(/logo.svg) no-repeat center / contain",
        aspectRatio: "790 / 736",
      }}
    />
  );
}
