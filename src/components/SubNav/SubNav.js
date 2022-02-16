import React from "react";

import { Tab } from "@headlessui/react";
import Cart from "../../pages/Cart";
import Shop from "../Shop/Shop";
import Feature from "../../pages/Feature";
import SaleBanner from "../SaleBanner/SaleBanner";
import Footer from "../Footer.js/Footer";

function SubNav({ data }) {
  return (
    <Tab.Group>
      <Tab.List className={"mt-24 hidden md:block  bg-light   pt-4 pb-2"}>
        <div className="container mx-auto pt-2 pb-1   ">
          <Tab
            className={({ selected }) =>
              selected
                ? "border-b-[1px] mr-10 border-solid font-semibold font-base text-sm border-black pb-1 mb-2"
                : " mr-10 border-solid  font-base text-sm border-black pb-1 mb-2"
            }
          >
            All Products
          </Tab>

          <Tab
            className={({ selected }) =>
              selected
                ? "border-b-[1px] mr-10  border-solid font-semibold font-base text-sm border-black pb-1 mb-2"
                : " mr-10 border-solid  font-base text-sm border-black pb-1 mb-2"
            }
          >
            Featured
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "border-b-[1px] mr-10  border-solid font-semibold font-base text-sm border-black pb-1 mb-2"
                : " mr-10 border-solid  font-base text-sm border-black pb-1 mb-2"
            }
          >
            Your bags
          </Tab>
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className={"container mx-auto"}>
            <Shop data={data} />
          </div>
          <SaleBanner />
          <Footer />
        </Tab.Panel>
        <Tab.Panel>
          <Feature />
        </Tab.Panel>
        <Tab.Panel className={""}>
          <Cart isMain />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default SubNav;
