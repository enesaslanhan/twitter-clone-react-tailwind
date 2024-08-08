import { useAccount, useAccounts } from "../../../../../store/auth/hook"
import classNames from "classnames"
export default function AccountMore(){
    const accounts=useAccounts()
    const currrentAccount=useAccount()
    return(
        <div>
            {accounts.map(account=>(
                <button className={classNames("py-3 px-4 flex text-left transition-colors w-full items-center",{
                    "hover:bg-[#eff3f41a]":currrentAccount.id!=account.id
                })}>
                    <img src={account.avatar} alt="" className="rounded-full w-10 h-10"/>
                    <div className="mx-3 flex-1 text-[15px]">
                        <h6 className="font-bold leading-[20px]">{account.fullname}</h6>
                        <div className="text-[#71767b]">
                            @{account.username}
                        </div>
                    </div>
                    {currrentAccount.id === account.id && (
						<svg viewBox="0 0 24 24" className="mr-2 ml-3 h-[1.172rem]" fill="#00ba7c">
							<path
								d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
							/>
						</svg>
					)}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3"/>
                <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[15px] font-bold">
                    Var olan bir hesap ekle
                </button>
                <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[15px] font-bold">
                    Hesapları yönet
                </button>
                <button className="py-3 px-4 text-left transition-colors hover:bg-[#eff3f41a] w-full text-[15px] font-bold">
                    @{currrentAccount.username} hesabından çıkış yap
                </button>
            
        </div>
        
    )
}