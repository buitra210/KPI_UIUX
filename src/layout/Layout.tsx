import Content from "./content/Content";
import Header from "./header/Header";

export default function Layout() {
  return (
    <div style={{ backgroundColor: "#f4f5f6" }}>
      <Header />
      <Content headerHeight={"63.5px"} />
    </div>
  );
}
