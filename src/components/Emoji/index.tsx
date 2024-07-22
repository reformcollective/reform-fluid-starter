type Props = {
  className?: string;
  label: string;
  symbol: number;
};
import { memo } from "react";

const Emoji = memo(function EmojiNotMemoized({
  className,
  label,
  symbol,
}: Props) {
  return (
    <span className={className} role="img" aria-label={label}>
      {String.fromCodePoint(symbol)}
    </span>
  );
});

export default Emoji;
