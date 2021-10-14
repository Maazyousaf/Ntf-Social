import { RoadMap } from "../../Assests/Data.js";
export default function Example() {
  return (
    <div>
      {" "}
      <ul
        role="list"
        className="grid grid-cols-2 my-8 items-end gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {RoadMap.map((road) => (
            <li>
                <div className=" bg_card  text-gray-500 flex justify-end flex-col leading-5 text-xs p-4 rounded-md shadow">
                <li>{road.text1}</li>
                <li>{road.text2}</li>
                <li>{road.text3}</li>
                </div>
                <div className="text-center  mt-2 text-xs text-white ">{ road.month}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
