import cx from "classnames";

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
