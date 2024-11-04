import Image from "next/image";
import Header from "../components/header";
import SearchBar from "../components/search-bar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <SearchBar />
    </div>
  );
}
