export default function Card({ item }) {
  return (
    <>
      <div className="font-poppins block max-w-60 p-6 m-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
        <p className="text-lg font-bold">{item.name}</p>
        <p className=" ">{item.budget_name}</p>
        <p className="text-lg">
          Spent : {item.spent.value} {item.spent.currency}
        </p>
        <p className="text-lg">
          Available : {item.available_to_spend.value}{" "}
          {item.available_to_spend.currency}
        </p>
        <p className="">Type: {item.card_type}</p>
      </div>
    </>
  );
}
