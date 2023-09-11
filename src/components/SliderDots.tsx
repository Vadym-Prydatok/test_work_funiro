import classNames from "classnames";

type Props = {
  classForList: string,
  classForItem: string,
  setSlide: (dot: number) => void,
  slide: number,
}

export const SliderDots: React.FC<Props> = ({ 
  classForItem, classForList, setSlide, slide }) => {
  return (
    <ul className={classForList}>
    {[0, 1, 2, 3].map((dot) => (
      <li
        key={dot}
        className={classNames( classForItem, {
          isActiveDot: dot === slide,
        })}
      >
        <button onClick={() => setSlide(dot)}></button>
      </li>
    ))}
  </ul>
  );
};
