import clsx from 'clsx';
import { cherryBombOne } from './cherryBombOne';

export const ChocomintButton = ({
  onAddString,
}: {
  onAddString(v: string): void;
}) => {
  return (
    <div className="flex justify-center">
      {[...'ちょこみんと'].map((v, i) => {
        return (
          <button
            className={clsx(
              'text-3xl l:text-4xl border-4 mr-1 border-teal-600 l:p-2  text-white w-12 h-12 flex justify-center align-center l:w-16 l:h-16 text-center align-middle',
              i % 2 === 0
                ? 'bg-teal-500 hover:bg-teal-400'
                : 'bg-sky-500 hover:bg-sky-400',
              cherryBombOne.className
            )}
            key={v}
            onClick={() => {
              onAddString(v);
            }}
          >
            {v}
          </button>
        );
      })}
    </div>
  );
};
