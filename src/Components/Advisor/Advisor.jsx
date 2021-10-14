import {Advisor} from '../../Assests/Data'

export default function Example() {
  return (
    <ul
      role="list"
      className="flex flex-wrap justify-center  gap-5"
    >
      {Advisor.map((person) => (
        <li
          key={person.imageUrl}
          className="col-span-1 flex flex-col w-60 card mt-4 text-center bg_card rounded-lg shadow "
        >
          <div className="flex-1 flex flex-col p-6 ">
            <img
              className="w-20 h-20 flex-shrink-0 mx-auto rounded-full"
              src={person.image}
              alt=""
            />
            <h3 className="mt-2 text-white text-base font-medium">
              {person.name}
            </h3>
            <div className="mt-1 flex-grow flex flex-col justify-between">
              <div className="text-gray-500 text-xs">{person.title}</div>
              <div className="mt-6 flex mx-auto items-center">
                <div className="text-white text-sm ">{person.role}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
