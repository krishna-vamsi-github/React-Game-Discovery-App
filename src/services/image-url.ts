import noImage from "../assets/Screenshot.jpg";

const getCroppedImageUrl = (url: string, width: string, height: string) => {
  if (!url) return noImage;
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
