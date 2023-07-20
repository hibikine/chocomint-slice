import Image from 'next/image';
import clsx from 'clsx';

export type chocomintCharacter = 'ち' | 'ょ' | 'こ' | 'み' | 'ん' | 'と';

export const CHOCOMINT_WIDTH = 1346;
export const CHOCOMINT_HEIGHT = {
  chi: 288,
  xyo: 218,
  ko: 420,
  mi: 416,
  n: 400,
  to: 287,
};

const chocoImageBaseProps: {
  className: string;
  width: `${number}`;
} = {
  className: 'max-w-full shrink min-h-0 w-auto',
  width: `${CHOCOMINT_WIDTH}`,
};
export const Chi = ({
  className,
}: {
  className?: string;
  height?: `${number}`;
}) => {
  return (
    <Image
      {...chocoImageBaseProps}
      className={clsx(className, chocoImageBaseProps.className)}
      height={`${CHOCOMINT_HEIGHT.chi}`}
      src="/ち.png"
      alt="ち"
    />
  );
};
export const Xyo = () => {
  return (
    <Image
      {...chocoImageBaseProps}
      height={`${CHOCOMINT_HEIGHT.xyo}`}
      src="/ょ.png"
      alt="ょ"
    />
  );
};
export const Ko = () => {
  return (
    <Image
      {...chocoImageBaseProps}
      height={`${CHOCOMINT_HEIGHT.ko}`}
      src="/こ.png"
      alt="こ"
    />
  );
};
export const Mi = () => {
  return (
    <Image
      {...chocoImageBaseProps}
      height={`${CHOCOMINT_HEIGHT.mi}`}
      src="/み.png"
      alt="み"
    />
  );
};
export const N = () => {
  return (
    <Image
      {...chocoImageBaseProps}
      height={`${CHOCOMINT_HEIGHT.n}`}
      src="/ん.png"
      alt="ん"
    />
  );
};
export const To = () => {
  return (
    <Image
      {...chocoImageBaseProps}
      height={`${CHOCOMINT_HEIGHT.to}`}
      src="/と.png"
      alt="と"
    />
  );
};
