import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2">
      <Link className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline">
        Hizmet Şartları
      </Link>
      <Link className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline">
        Gizlilik Politikası
      </Link>
      <Link className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline">
        Çerez Politikası
      </Link>
      <Link className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline">Baskı</Link>
      <Link className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline">
        Erişilebilirlik
      </Link>
      <Link className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline">
        Reklam bilgisi
      </Link>
      <Popover className="relative inline-flex leading-4">
        <Popover.Button className="text-[color:var(--color-base-secondary)] text-[13px] hover:underline flex flex-row items-center justify-center">
            Daha
            <svg
              viewBox="0 0 24 24"
              width={18}
              className="px-0.5"
            >
                <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
        </Popover.Button>
        <Popover.Panel className="w-[192px] max-w-[384px] bg-[color:var(--background-primary)] shadow-box absolute bottom-0 right-0 rounded-lg text-left">
            <button className="py-3 px-4 text-[#e7e9ea] font-bold left-5 text-[15px] w-full text-left hover:bg-[color:var(--background-secondary)] transition-colors">Hakkında</button>
            <button className="py-3 px-4 text-[#e7e9ea] font-bold left-5 text-[15px] w-full text-left hover:bg-[color:var(--background-secondary)] transition-colors">X uygulamasını indirin</button>
            <button className="py-3 px-4 text-[#e7e9ea] font-bold left-5 text-[15px] w-full text-left hover:bg-[color:var(--background-secondary)] transition-colors">İşletmeler için X</button>
            <button className="py-3 px-4 text-[#e7e9ea] font-bold left-5 text-[15px] w-full text-left hover:bg-[color:var(--background-secondary)] transition-colors">Geliştiriciler</button>
        </Popover.Panel>
      </Popover>
      <div className="w-full">
        <span className="text-[color:var(--color-base-secondary)] text-[13px]">© 2024 X Şirketi</span>  
      </div>      
    </footer>
  );
}
