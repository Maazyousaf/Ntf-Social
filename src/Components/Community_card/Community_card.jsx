import { Comunity } from '../../Assests/Data'
import {Images} from "../../Assests/Images"
export default function Example() {
  console.log(Comunity[0],"comp");
  return (
    <div>

             <ul
          role="list"
          className="grid grid-cols-1 gap-5 relative sm:grid-cols-2 md:grid-cols-3">
          
      {Comunity.map(elm=>{
        return <li className="p-6 bg_card rounded-lg shadow">
          <h2 className="text-lg  font-medium text-white">{elm.heading}</h2>
          <div className="grid  pt-4 gap-6  sm:gap-3 grid-cols-2">
          <img
            src={elm.img1}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
          <img
            src={elm.img2}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
          <img
            src={elm.img3}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
          <img
            src={elm.img4
            }
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
          </div>
          <div className="flex pt-4 justify-between">
          <h2 className="text-sm  truncate font-medium text-white">
          {elm.bottomhd}
          </h2>
          <div className=" flex items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 26 28"
              fill="none"
              className="mr-3 sm:mr-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4499 0H3.68992C2.10792 0 0.819916 1.288 0.819916 2.884V21.812C0.819916 23.408 2.10792 24.696 3.68992 24.696H19.5659L18.8239 22.106L20.6159 23.772L22.3099 25.34L25.3199 28V2.884C25.3199 1.288 24.0319 0 22.4499 0ZM17.0459 18.284C17.0459 18.284 16.5419 17.682 16.1219 17.15C17.9559 16.632 18.6559 15.484 18.6559 15.484C18.0819 15.862 17.5359 16.128 17.0459 16.31C16.3459 16.604 15.6739 16.8 15.0159 16.912C13.6719 17.164 12.4399 17.094 11.3899 16.898C10.5919 16.744 9.90592 16.52 9.33192 16.296C9.00992 16.17 8.65992 16.016 8.30992 15.82C8.26792 15.792 8.22592 15.778 8.18392 15.75C8.15592 15.736 8.14192 15.722 8.12792 15.708C7.87592 15.568 7.73592 15.47 7.73592 15.47C7.73592 15.47 8.40792 16.59 10.1859 17.122C9.76592 17.654 9.24792 18.284 9.24792 18.284C6.15392 18.186 4.97792 16.156 4.97792 16.156C4.97792 11.648 6.99392 7.994 6.99392 7.994C9.00992 6.482 10.9279 6.524 10.9279 6.524L11.0679 6.692C8.54792 7.42 7.38592 8.526 7.38592 8.526C7.38592 8.526 7.69392 8.358 8.21192 8.12C9.70992 7.462 10.8999 7.28 11.3899 7.238C11.4739 7.224 11.5439 7.21 11.6279 7.21C12.4819 7.098 13.4479 7.07 14.4559 7.182C15.7859 7.336 17.2139 7.728 18.6699 8.526C18.6699 8.526 17.5639 7.476 15.1839 6.748L15.3799 6.524C15.3799 6.524 17.2979 6.482 19.3139 7.994C19.3139 7.994 21.3299 11.648 21.3299 16.156C21.3299 16.156 20.1399 18.186 17.0459 18.284Z"
                fill="#7289DA"
              />
              </svg>
              <div className="h-5 w-5 flex justify-center items-center rounded-full bg-blue-400">
            <svg width="10" height="10" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.33722 5.85219C5.4185 4.07404 8.14 2.90178 9.50171 2.3354C13.3897 0.718266 14.1975 0.437353 14.7241 0.428077C14.8399 0.426037 15.0989 0.454739 15.2666 0.590846C15.4082 0.705772 15.4472 0.861021 15.4659 0.969983C15.4845 1.07895 15.5077 1.32716 15.4893 1.52112C15.2786 3.73484 14.3669 9.10698 13.9031 11.5864C13.7069 12.6355 13.3205 12.9873 12.9464 13.0217C12.1334 13.0965 11.516 12.4844 10.7286 11.9683C9.49638 11.1605 8.80027 10.6577 7.60423 9.86957C6.22199 8.95869 7.11803 8.45806 7.90577 7.63989C8.11192 7.42577 11.694 4.16756 11.7634 3.87198C11.772 3.83502 11.7801 3.69723 11.6982 3.62447C11.6164 3.55171 11.4956 3.57659 11.4084 3.59638C11.2848 3.62442 9.31636 4.92548 5.50309 7.49954C4.94436 7.88321 4.43828 8.07015 3.98485 8.06035C3.48497 8.04955 2.52342 7.77771 1.8086 7.54536C0.931853 7.26036 0.235028 7.10968 0.295706 6.62567C0.327311 6.37356 0.674481 6.11574 1.33722 5.85219Z" fill="white"/>
</svg></div>
          </div>
          </div>
          

        </li>
      })}
      </ul>
    </div>
  );
}
