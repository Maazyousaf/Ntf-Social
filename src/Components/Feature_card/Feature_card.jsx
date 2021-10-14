import { Feature } from "../../Assests/Data.js";
export default function Example() {
  return (
    <div>
      {" "}
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Feature.map((feature) => (
          <li className="p-6 h-72 bg_card border-gradient shadow">
            <div className="h-8 w-8 rounded-full relative bg-gray-700">
              <img src={feature.img} alt="" className="h-10 pt-1 ml-3" />
            </div>
            <h2 className="text-base pb-2 pt-3 truncate font-medium text-white">
              {feature.heading}
            </h2>
            <p className="text-xs text-gray-400 leading-5">{feature.pera}</p>
          </li>
        ))}
      </ul> 
    </div>
  );
}
