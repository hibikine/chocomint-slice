import { useState } from 'react';
import { License } from './License';
import { ChocomintImageList } from './ChocomintImageList';
import { ChocomintButton } from './ChocomintButton';
import { Share } from './Share';
import clsx from 'clsx';

import { cherryBombOne, mplusRoundedBold } from './cherryBombOne';
const Generator = () => {
  const [text, changeText] = useState('');

  return (
    <div>
      <h1
        className={clsx(
          'font-bold text-4xl pb-3 cherry-bomb-one',
          cherryBombOne.className
        )}
      >
        <span className="text-teal-500 text-outline">ち</span>
        <span className="text-sky-400 text-outline">ょ</span>
        <span className="text-teal-500 text-outline">こ</span>
        <span className="text-sky-400 text-outline">み</span>
        <span className="text-teal-500 text-outline">ん</span>
        <span className="text-sky-400 text-outline">と</span>
        <span className=" text-white text-outline-black-shadow">
          ジェネレーター
        </span>
      </h1>
      <div className="flex flex-col w-full xl:flex-row items-center xl:items-start">
        <div className="w-full xl:w-96 xl:mr-4 flex items-center flex-col justify-center mb-4">
          <div className="flex justify-center items-center mb-1 border-teal-300 border-4 bg-white p-2">
            <p className="grow-0">↓</p>
            <p>下のところに「ちょこみんと」の文字を入れてね🍫🌱</p>
            <p className="grow-0">↓</p>
          </div>
          <textarea
            className={clsx(
              'border-sky-700 border-4 rounded-lg p-2 font-bold text-4xl w-full mb-3 text-teal-500',
              cherryBombOne.className
            )}
            value={text}
            onChange={(v) => changeText(v.currentTarget.value)}
          ></textarea>
          <ChocomintButton
            onAddString={(v) => {
              changeText(text + v);
            }}
          />
          <Share
            text={text}
            className="hidden xl:flex"
            idKey="generator-top-1"
          ></Share>
        </div>
        <ChocomintImageList text={text} />
      </div>
      <Share text={text} className="xl:hidden" idKey="generator-bottom-1" />
      <License />
    </div>
  );
};
export default Generator;
