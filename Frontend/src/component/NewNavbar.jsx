import dynamic from "next/dynamic";

const NewNavbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

export default NewNavbar;
