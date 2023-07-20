import Link from 'next/link';
import clsx from 'clsx';
import { CHOCOMINT_HEIGHT, CHOCOMINT_WIDTH } from './Chi';
import { useState } from 'react';
import { mplusRoundedBold } from './cherryBombOne';

export const Share = ({
  idKey,
  text,
  className,
}: {
  text: string;
  idKey: string;
  className?: string;
}) => {
  const shareUrl = new URL('https://twitter.com/intent/tweet');
  shareUrl.searchParams.set(
    'text',
    `「${text}」を作ったよ！ #ちょこみんとジェネレーター https://chocomint-slice.vercel.app/`
  );
  const [canvasSrc, setCanvasSrc] = useState('/ち.png');
  const [imageGenerated, setImageGenerated] = useState(false);
  return (
    <div className={clsx(className, 'flex flex-col items-center')}>
      <p className="mt-4 mb-1 border-teal-300 border-4 bg-white p-2">
        ダウンロードして下のボタンから共有しよう！
      </p>
      <button
        className={clsx(
          'block text-3xl font-bold rounded-full p-1 mt-3 ',
          mplusRoundedBold.className,
          !!text &&
            'bg-gradient-to-r from-teal-500 via-pink-400 to-sky-400 hover:from-teal-300 hover:via-pink-200 hover:to-sky-200 hover:shadow-white hover:shadow-2xl',
          !text && 'bg-slate-400'
        )}
        onClick={async () => {
          const canvas = document.getElementById(
            `image-dl-${idKey}`
          ) as HTMLCanvasElement | null;
          if (!canvas) {
            alert(
              '申し訳ございません、うまくダウンロードできませんでした🙇　スクリーンショットをお試しください。 エラーコード：ナス'
            );
            return;
          }
          canvas.width = CHOCOMINT_WIDTH;
          const characterMap = new Map<string, keyof typeof CHOCOMINT_HEIGHT>([
            ['ち', 'chi'],
            ['ょ', 'xyo'],
            ['こ', 'ko'],
            ['み', 'mi'],
            ['ん', 'n'],
            ['と', 'to'],
          ]);
          canvas.height = [...text].reduce((prev, v) => {
            const key = characterMap.get(v);
            if (!key) {
              return prev;
            }
            return prev + CHOCOMINT_HEIGHT[key];
          }, 0);
          const context = canvas.getContext('2d');
          if (!context) {
            alert(
              '申し訳ございません、うまくダウンロードできませんでした🙇　スクリーンショットをお試しください。 エラーコード：みかん'
            );
            return;
          }
          context.beginPath();
          context.fillStyle = '#ffffff';
          context.fillRect(0, 0, canvas.width, canvas.height);
          const images = await Promise.all(
            [...'ちょこみんと'].map((v): Promise<HTMLImageElement> => {
              const image = new Image();
              image.src = `/${v}.png`;
              return new Promise((resolve) => {
                image.addEventListener('load', () => {
                  resolve(image);
                });
              });
            })
          );
          const orderMap = new Map([...'ちょこみんと'].map((v, i) => [v, i]));
          [...text].reduce((currentY, v) => {
            const key = orderMap.get(v);
            const heightKey = characterMap.get(v);
            console.log(key);
            console.log(heightKey);
            if (typeof key === 'undefined' || !heightKey) {
              return currentY;
            }
            console.log(v);
            context.drawImage(images[key], 0, currentY + 20);
            return currentY + CHOCOMINT_HEIGHT[heightKey];
          }, 0);
          const link = document.getElementById(
            `download-link-${idKey}`
          ) as HTMLAnchorElement | null;
          if (!link) {
            alert(
              '申し訳ございません、うまくダウンロードできませんでした🙇　スクリーンショットをお試しください。 エラーコード：にんじん'
            );
            return;
          }
          link.href = canvas.toDataURL();
          const imageSmall = document.getElementById(
            `image-small-${idKey}`
          ) as HTMLImageElement | null;
          console.log(imageSmall);
          if (imageSmall) {
            setCanvasSrc(canvas.toDataURL());
          }
          link.click();
          setImageGenerated(true);
        }}
        type="button"
      >
        <span
          className={clsx(
            'block px-4 py-2 rounded-full bg-white ',
            !text && 'bg-slate-200 text-slate-400'
          )}
        >
          画像をダウンロード
        </span>
      </button>
      <Link
        className={clsx(
          'block text-3xl font-bold rounded-full p-1 mt-3 mb-2',
          mplusRoundedBold.className,
          !!text &&
            'bg-gradient-to-r from-teal-500 via-pink-400 to-sky-400 hover:from-teal-300 hover:via-pink-200 hover:to-sky-200 hover:shadow-white hover:shadow-2xl',
          !text && 'bg-slate-400'
        )}
        href={shareUrl}
        target="_blank"
        type="button"
      >
        <span
          className={clsx(
            'block px-4 py-2 rounded-full bg-white ',
            !text && 'bg-slate-200 text-slate-400'
          )}
        >
          Twitterで共有する
        </span>
      </Link>
      <canvas className="hidden" id={`image-dl-${idKey}`} />
      <a
        id={`download-link-${idKey}`}
        href=""
        className="hidden"
        download={`{text}.png`}
      />
      <p className="mb-1 border-teal-300 border-4 bg-white p-2 max-w-xl">
        画像が自動でダウンロードされない場合は、以下の画像を長押し/右クリックで保存するか、スクリーンショットで保存してください。
      </p>
      <img
        id={`image-small-${idKey}`}
        src={canvasSrc}
        alt="生成画像"
        className={clsx(!imageGenerated && 'hidden', 'w-64 h-auto')}
      />
    </div>
  );
};
