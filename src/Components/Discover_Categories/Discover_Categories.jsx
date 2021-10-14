import { Discover } from "../../Assests/Data.js";
export default function Example() {
  return (
    <div>
      {" "}
      <ul
        role="list"
        className="grid grid-cols-2 my-8 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {Discover.map((discover) => (
          <li className=" bg-gray-800 rounded-md shadow">
            <img
              src={discover.src}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
