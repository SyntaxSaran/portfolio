import { IconHexagon } from "@tabler/icons-react";
import { slugs } from "../User";
import { IconCloud } from "./magicui/icon-cloud";

export function Loader() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  return (
    <div className="relative flex size-full  items-center justify-center px-20 pb-20 pt-8  animate-[ping-large_1s_ease-in-out_1_3.5s]">
      <IconCloud images={images} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={120} color="#64ffda" stroke={1.2}/>
      <div className="absolute text-5xl -z-10 text-primaryColor font-mono">SM</div>
    </div>
  );
}
