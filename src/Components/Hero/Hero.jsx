import {Images} from '../../Assests/Images'
import "./Hero.css"
export default function Example() {
  return (
    <div className="relative overflow-hidden  mt-6">
      <main className=" px-8 sm:px-20  lg:pl-40 py-12 lg:py-20">
        <div className="mx-auto max-w-7xl lg:flex text-center lg:text-left">
          <div className=" lg:w-5/12">
            <h1 className="text-2xl tracking-tight mt-20 font-bold text-gray-50 sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl">
              <span className="block">The <span className="text-blue-800">First</span> NFT Social</span>{" "}
              <span className="block mt-2">
                Gaming Ecosystem
              </span>
            </h1>
            <p className="mt-3 lg:pr-6 text-sm text-gray-300 sm:text-base md:mt-5">
            Lorem is the first social-media platform of its kind, bringing NFTs to the everyday consumer through our cross-platform and cross-chain aggregator marketplace.

            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  
                  className="w-full z-100 flex cursor-pointer items-center justify-center px-8 gradient-color  font-medium rounded-lg text-white py-2 text-xs"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
          <div className=" heroimg relative">
          {/* <img
            className=" inset-0 absolute ml-8 object-cover "
            // src={Images.Hero_img}
            alt=""
            /> */}
          <img src={Images.Hero2_img} className="innerimg object-cover  " alt="" />  
        </div>
        </div>

        
      </main>
    </div>
  );
}
