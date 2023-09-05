import cx from "classnames";

export function PaginationControl(props: {
  canGoBack: boolean;
  canGoForward: boolean;
  currentPageNumber: number;
  onNextClick: () => void;
  onPrevClick: () => void;
  totalPageCount: number;
}) {
  const {
    canGoBack,
    canGoForward,
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
        disabled={!canGoForward}
        className={cx({
          "hover:underline": canGoForward,
          "text-gray-300": !canGoForward,
        })}
        onClick={onNextClick}
      >
        Next
      </button>
    </div>
  );
}
