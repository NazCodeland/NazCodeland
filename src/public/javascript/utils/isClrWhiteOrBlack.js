// https://mixable.blog/category/photo-and-video/graphic-design/
export default function isClrWhiteOrBlack(rgb) {
  return Math.sqrt(
    rgb[0] ** 2 * 0.241 + rgb[1] ** 2 * 0.691 + rgb[2] ** 2 * 0.068
  );
}
