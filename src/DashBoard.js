import { MainContent } from "./MainContent";
import { SearchBar } from "./SearchBar";

export function DashBoard() {
  return (
    <div className="dashboard">
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="MainContent">
        <MainContent />
      </div>
    </div>
  );
}
