import cx from "classnames";

export function Button(props: React.ComponentProps<"button">) {
  const { className, ...restProps } = props;

  return (
    <button
      className={cx(
        "rounded-md border px-3 py-1 text-sm font-medium shadow-sm active:scale-95",
        className,
      )}
      {...restProps}
    />
  );
}

export function Link(
  props: React.ComponentProps<"a"> & { shouldOpenInNewTab?: boolean },
) {
  const { className, shouldOpenInNewTab = false, ...restProps } = props;

  return (
    <a
      className={cx("hover:underline", className)}
      {...restProps}
      {...(shouldOpenInNewTab
        ? {
            rel: "noopener",
            target: "_blank",
          }
        : {})}
    />
  );
}
