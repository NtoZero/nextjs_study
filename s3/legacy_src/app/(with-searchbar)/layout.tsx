import { ReactNode } from "react";
// import SearchBar from "@/app/component/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>
        {/*<SearchBar />*/}
        {children}
      </div>
    </div>
  );
}
