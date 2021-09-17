import './index.css';
import Button from '../../components/ui/Button/Button';
import { Comicsheader } from '../../components/Comicsheader';

export default function Comicsinfo() {
  return (
    <>
      <Comicsheader />

      <div className="comicsinfo_wrapper">
        <div className="comicsinfo_image">1</div>
        <div className="comicsinfo_title">
          <div className="comicsinfo_titleinfo">
            <div className="comicsinfo_header">X-Men: Days of Future Past</div>
            <div className="comicsinfo_back">Back to all</div>
          </div>

          <div className="comicsinfo_text">
            Re-live the legendary first journey into the dystopian future of
            2013 - where Sentinels stalk the Earth, and the X-Men are humanity's
            only hope...until they die! Also featuring the first appearance of
            Alpha Flight, the return of the Wendigo, the history of the X-Men
            from Cyclops himself...and a demon for Christmas!?
          </div>
          <div className="comicsinfo_pages">144 pages</div>
          <div className="comicsinfo_lang">Language: en-us</div>
          <div className="comicsinfo_price">9.99$</div>
        </div>

        <Button type="primary" className="but_comics">
          Load More
        </Button>
      </div>
    </>
  );
}
