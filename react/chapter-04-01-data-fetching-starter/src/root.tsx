import * as React from "react";
import { NewsItem, PaginationControl } from "./components";
import { storyList } from "./data";

const PAGE_SIZE = 10;

export function HackerNews() {
  const data = storyList;

  const [currentPageNumber, setCurrentPageNumber] = React.useState<number>(0);
  const [likeCountMap, setLikeCountMap] = React.useState<Map<number, number>>(
    new Map(),
  );

  const totalItemCount = data.length;
  const totalPageCount = Math.ceil(totalItemCount / PAGE_SIZE);

  const startIndex = currentPageNumber * PAGE_SIZE; // inclusive
  const endIndex = (currentPageNumber + 1) * PAGE_SIZE; // exclusive

  const canGoBack = startIndex > 0;
  const canGoNext = endIndex < totalItemCount;

  const visibleWindow = data.slice(startIndex, endIndex);

  return (
    <div className="p-8">
      <div className="flex flex-col gap-6">
        {visibleWindow.map((item) => {
          return (
            <NewsItem
              key={item.id}
              data={item}
              likeCount={likeCountMap.get(item.id) ?? 0}
              onLikeClick={() => {
                setLikeCountMap((map) => {
                  const copy = new Map(map);
                  const currentLikeCount = copy.get(item.id) ?? 0;

                  copy.set(item.id, currentLikeCount + 1);
                  return copy;
                });
              }}
            />
          );
        })}
      </div>

      <PaginationControl
        canGoBack={canGoBack}
        canGoNext={canGoNext}
        currentPageNumber={currentPageNumber}
        onNextClick={() => {
          setCurrentPageNumber((n) => n + 1);
        }}
        onPrevClick={() => {
          setCurrentPageNumber((n) => n - 1);
        }}
        totalPageCount={totalPageCount}
      />
    </div>
  );
}
