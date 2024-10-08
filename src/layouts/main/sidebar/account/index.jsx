import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "../../../../store/auth/hook";
import AccountMore from "../account/accountMore";
export default function Account() {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[color:var(--background-third)] w-full flex text-left items-center outline-none">
          <img src={account.avatar} alt="" className="rounded-full w-10 h-10" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullname}</h6>
            <div className="text-[color:var(--color-base-secondary)]">@{account.username}</div>
          </div>
          <svg
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-[18.75px]"
            
          >
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </svg>
        </Popover.Button>

        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-full w-[300px] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl overflow-hidden py-3">
            <AccountMore />
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
