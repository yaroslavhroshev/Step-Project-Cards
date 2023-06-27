import getElement from "./getElement.js";
import renderPosts from "../Functions/renderPosts.js";

const renderElements = async () => {
  const { data: mewData } = await getElement();
  renderPosts(mewData);
  return mewData;
};
export default renderElements;
