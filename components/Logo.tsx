type Props = {
  className?: string;
  ariaLabel?: string;
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Logo({
  className = "",
  ariaLabel = "Мир Ремонта",
}: Props) {
  const url = `${BASE}/logo.svg`;
  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMask: `url(${url}) no-repeat center / contain`,
        mask: `url(${url}) no-repeat center / contain`,
        aspectRatio: "790 / 736",
      }}
    />
  );
}
