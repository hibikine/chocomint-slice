import { Chi, Xyo, Ko, Mi, N, To } from './Chi';

export const ChocomintImageList = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col w-[calc(100vh*0.4)] xl:w-[calc(calc(100vh-60px)*0.5)] min-h-[50vh] max-h-[90vh] items-center">
      {[...text].map((v) => {
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
      <Chi className="invisible h-1" />
    </div>
  );
};
