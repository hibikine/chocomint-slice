import Link from 'next/link';

export const License = () => (
  <small className="bg-white bg-opacity-70 p-2">
    <ul>
      <li>
        キャラクター：ちょこみんと{' '}
        <Link
          className="text-teal-600"
          href="https://twitter.com/Choco_mint0907"
        >
          @Choco_mint0907
        </Link>
      </li>
      <li>
        つくったひと：猫乃にゃん{' '}
        <Link className="text-teal-600" href="https://twitter.com/hikageworks">
          @hikageworks
        </Link>
      </li>
    </ul>
  </small>
);
