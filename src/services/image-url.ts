const getCroppedImageUrl = (url: string, width: string, height: string) => {
  if (!url) return "";
  const target = "media/";
  const slash = "/";
  const index = url.indexOf(target) + target.length;
  return (
    url.slice(0, index) +
    "crop/" +
    width +
    slash +
    height +
    slash +
    url.slice(index)
  );
};

export default getCroppedImageUrl;
