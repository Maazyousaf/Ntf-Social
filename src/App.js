import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { Images } from "./Assests/Images";
import Community_card from "./Components/Community_card/Community_card";
import Advisor from "./Components/Advisor/Advisor";
import Feature_card from "./Components/Feature_card/Feature_card";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Discover_Categories from "./Components/Discover_Categories/Discover_Categories";
import Team from "./Components/Team/Team";
import Token from "./Components/LFG_token/token";
import Tabs from "./Components/Tabs/Tabs";
import RoadMap from './Components/RoadMap/RoadMap'
import "./App.css";
const App = () => {
  return (
    <div className="main relative">
      <img src={Images.Circle} className="absolute right-0 image_circle" />
      <Navbar />
      <Hero />
      <img
        src={Images.Community_linear}
        className="absolute  circle1 left-0  sm:w-2/6 z-1"
        alt=""
      />  
      <img
        src={Images.Community_bg}
        className="absolute left-0 w-4/6 sm:w-2/6"
        alt=""
      />

      <div className="px-8 sm:px-20 lg:px-40 py-12 lg:py-10">
        <h3 className="text-3xl leading-6 relative z-10 font-semibold text-center py-8 text-white">
          Our Community
        </h3>
        <Community_card />
      </div>

      <div className="px-8 sm:px-20 lg:px-40 py-12 lg:py-10">
        <h3 className="text-3xl leading-6 font-medium text-center py-8 text-white">
          Features
        </h3>
        <Feature_card />
      </div>

      <main className="lg:relative px-8 sm:px-20 lg:px-40 ">
        <div className="grid grid-cols-1 py-12 gap-5 xl:grid-cols-2">
          <div className="">
            <h3 className="text-3xl hover-h leading-6 font-medium pb-10 text-white">
              $LFG Token
            </h3>
            <p className="text-gray-300 text-xs xl:mr-16 xl:pr-2 leading-6 ">
              Lorem is the SwapNFT ERC-20 native token built on the Ethereum
              blockchain. Use ART Coins on the SwapNFT platform and receive ‘no
              fees’ swaps, get rewarded with staking incentives, receive
              exclusive access in our Auction House feature, and unique
              customizations for your avatar. ART Tokens will also be used to
              mint NFTs on the platform and 50% of the $ART minting fee will be
              burned, increasing the scarcity and value of the coin over time.{" "}
            </p>
            <div className="grid grid-cols-1 py-10 gap-5 xl:grid-cols-2">
              <Token text="Governance and Utility" />
              <Token text="Staking Incentives" />
              <Token text="Fee-Free Transactions" />
              <Token text="Self-Promotion" />
              <Token text="Utilities" />
              <Token text="Utilities" />
            </div>
            <div className="rounded-md">
              <a
                className="flex items-center justify-center w-36 gradient-color  font-medium rounded-lg text-white py-3 text-xs"
              >
                Launch App
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-8 xl:mt-0 items-center xl:items-end">
            <img src={Images.Token_img} className="w-80" />
            <div className="text-center xl:w-80">
              <h3 className="text-lg font-medium mt-8 text-white">
                LFG = Looking for Groups
              </h3>
              <h3 className="text-xl font-medium mt-2 text-white">$LFG</h3>
            </div>
          </div>
        </div>
      </main>

      <div className="px-8 sm:px-20 lg:px-40 py-12 lg:py-8">
        <h3 className="text-3xl leading-6 font-medium text-center pt-10 pb-8 text-white">
          Discover Catagories
        </h3>
        <Tabs />
        <Discover_Categories />
      </div>

      <div className="px-8 sm:px-20 lg:px-40 py-12 lg:py-8">
        <h3 className="text-3xl leading-6 font-medium text-center pt-10 text-white">
          Our Team
        </h3>
        <p className="text-xs text-center pt-6 text-white">
          Lorem’s dedicated technical team working effeciently 24/7 to meet the
          customer needs
        </p>
        <Team />
      </div>

      <div className="px-8 sm:px-20 lg:px-40 py-12 lg:py-8 ">
        <h3 className="text-3xl leading-6 font-medium text-center pt-10 pb-2 text-white">
          Our Advisors
        </h3>
        <Advisor />
      </div>

      <div className="px-8 sm:px-20 lg:px-40 py-12 mt-12 md:mt-24 lg:py-8 ">
        <div className=" h-32 sm:h-52 md:h-80 relative w-full gradient-color rounded-3xl">
          <img
            src={Images.Mobile_Mockups}
            alt=""
            className="absolute img -top-24 sm:-top-40 md:-top-52 object-contain w-full "
          />
        </div>
      </div>

      <div className="px-8 sm:px-20 lg:px-40 py-12 lg:py-8">
        <h3 className="text-3xl leading-6 font-medium text-center pt-10 pb-8 text-white">
        Roadmap
        </h3>
        <RoadMap />
        
      </div>

      <div className="px-8 sm:px-20 lg:px-40 py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <div className="mt-8">
            <h3 className="text-2xl hover-h leading-6 font-medium pb-8 text-white">
              Contact Us
            </h3>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <div>
                <h3 className="text-base hover-h leading-6 font-medium text-white">
                  Email Us
                </h3>
                <p className="text-xs text-gray-400">contactlorem@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl hover-h leading-6 font-medium pb-10 text-white">
              Signup for Updates
            </h3>
            <p className="text-xs text-gray-400 truncate">
              For latest news and update please enter your email address
            </p>
            <div className="relative">
              <input
                type="text"
                name="email"
                id="email"
                className="shadow-sm relative focus:ring-indigo-500  p-4 mt-8 focus:border-indigo-500 block w-full sm:text-xs border-gray-300 rounded-md"
                placeholder="Enter Your Email"
              />
              <div className="rounded-md shadow">
                <a
                  
                  className=" flex absolute sm:bottom-1.5 bottom-2.5 right-2 items-center justify-center px-4 gradient-color  font-medium rounded-lg text-white py-2 text-xs"
                >
                  Subscribe
                </a>
              </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3 truncate">
              * We’ll never share your email address with a third-party.
            </p>
          </div>
          <div className=" mt-8 xl:ml-4">
            <h3 className="text-2xl hover-h leading-6 font-medium pb-10 text-white">
              Social Media
            </h3>
            <div className="text-gray-400 flex gap-4">
              <BsTwitter />
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center border-t border-gray-500 text-gray-400 text-xs py-8 truncate">
        2021 © Lorem Ipsum. All rights reserved.
      </p>
    </div>
  );
};

export default App;
