import cx from "classnames";
import { type TStoryItem } from "./data";
import { formatRelativeTime } from "./helpers/time";

export function NewsItem(props: {
  data: TStoryItem;
  likeCount: number;
  onLikeClick: () => void;
}) {
  const { data, likeCount, onLikeClick } = props;

  const formattedTime = formatRelativeTime(data.time);

  return (
    <div>
      <p>
        <a className="hover:underline" href={data.url}>
          {data.title}
        </a>
      </p>

      <p className="text-sm text-gray-600">
        {data.score} points by {data.by} {formattedTime}
        {" | "}
        <a
          className="hover:underline"
          href={`https://news.ycombinator.com/item?id=${data.id}`}
        >
          {data.descendants} comments
        </a>
        {" | "}
        <button className="hover:underline" onClick={onLikeClick}>
          like ({likeCount})
        </button>
      </p>
    </div>
  );
}

export function PaginationControl(props: {
  canGoBack: boolean;
  canGoNext: boolean;
  currentPageNumber: number;
  onNextClick: () => void;
  onPrevClick: () => void;
  totalPageCount: number;
}) {
  const {
    canGoBack,
    canGoNext,
    currentPageNumber,
    onNextClick,
    onPrevClick,
    totalPageCount,
  } = props;

  return (
    <div className="mt-12">
      <button
        disabled={!canGoBack}
        className={cx({
          "hover:underline": canGoBack,
          "text-gray-300": !canGoBack,
        })}
        onClick={onPrevClick}
      >
        Prev
      </button>

      <span className="mx-8">
        {currentPageNumber + 1} / {totalPageCount}
      </span>

      <button
        disabled={!canGoNext}
        className={cx({
          "hover:underline": canGoNext,
          "text-gray-300": !canGoNext,
        })}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
}
