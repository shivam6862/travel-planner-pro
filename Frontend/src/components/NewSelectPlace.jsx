import dynamic from "next/dynamic";

const NewSelectPlace = dynamic(() => import("./SelectPlace"), {
  ssr: false,
});

export default NewSelectPlace;
