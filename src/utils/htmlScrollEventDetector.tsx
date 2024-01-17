export const isScrollReachBottom = (e: React.UIEvent<HTMLElement>) => {
  const target = e.target as HTMLElement;
  return (
    target.scrollHeight - Math.round(target.scrollTop) === target.clientHeight
  );
};
