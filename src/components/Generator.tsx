import { useState } from 'react';
import Image from 'next/image';
const Chi = () => {
  return <Image width="1346" height="302" src="/ち.png" alt="ち" />;
};
const Xyo = () => {
  return <Image width="1346" height="218" src="/ょ.png" alt="ょ" />;
};
const Ko = () => {
  return <Image width="1346" height="420" src="/こ.png" alt="こ" />;
};
const Mi = () => {
  return <Image width="1346" height="416" src="/み.png" alt="み" />;
};
const N = () => {
  return <Image width="1346" height="400" src="/ん.png" alt="ん" />;
};
const To = () => {
  return <Image width="1346" height="292" src="/と.png" alt="と" />;
};
const Generator = () => {
  const [text, changeText] = useState('');
  const characters = [...text];
  return (
    <div>
      <h1 className="font-bold text-4xl pb-3">ちょこみんとジェネレーター</h1>
      <textarea
        className="border-black border-2 pb-3"
        value={text}
        onChange={(v) => changeText(v.currentTarget.value)}
      ></textarea>
      <div className="flex flex-col w-96">
        {characters.map((v) => {
          switch (v) {
            case 'ち':
              return <Chi />;
            case 'ょ':
              return <Xyo />;
            case 'こ':
              return <Ko />;
            case 'み':
              return <Mi />;
            case 'ん':
              return <N />;
            case 'と':
              return <To />;
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
};
export default Generator;
