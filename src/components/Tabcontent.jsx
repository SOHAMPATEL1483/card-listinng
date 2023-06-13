import { data } from "../assets/data";
import Card from "./card";

export default function Tabcontent({ activeTab, query, category }) {
  let items = data.data,
    id = 1;
  if (activeTab === 1) items = items.filter((item) => item.owner_id === id);
  if (query)
    items = items.filter((item) => item.name.toLowerCase().startsWith(query));
  if (category != "All")
    items = items.filter((item) => item.card_type === category);

  if (activeTab == 3) return <h1>Blocked</h1>;
  else
    return (
      <>
        <div className="flex flex-wrap">
          {items.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </>
    );
}
