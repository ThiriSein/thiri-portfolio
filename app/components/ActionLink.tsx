type ActionLinkProps = {
  href: string;
  label: string;
  variant: "primary" | "outline" | "secondary";
  openTab?: boolean;
};

export default function ActionLink({
  href,
  label,
  variant,
  openTab,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      className={`btn ${variant}`}
      target={openTab ? "_blank" : undefined}
      rel={openTab ? "noopener noreferrer" : undefined}
    >
      {label}
      <span aria-hidden="true" style={{ marginInlineStart: "8px" }}>
        {"\u2197\uFE0E"}
      </span>
    </a>
  );
}
