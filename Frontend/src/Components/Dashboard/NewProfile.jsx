import dynamic from "next/dynamic";

const NewProfile = dynamic(() => import("./Profile"), {
  ssr: false,
});

export default NewProfile;
