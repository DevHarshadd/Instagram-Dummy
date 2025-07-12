import { array } from "./videoArray";

const fetchreelsVideo = async () => {
  const response = await fetch(array);
  const data = await response.json();
  return data;
};
export default fetchreelsVideo;
