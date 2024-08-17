import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default function SidebarSection({title,children,more}){
    return(
        <section className="rounded-xl mb-4 border border-[#16181c] overflow-hidden">
            <div className="h-12 w-full flex items-center ">
                <h5 className="px-4 py-3 text-[20px] leading-6 font-extrabold">{title}</h5>
            </div>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link to={more}
                className="h-[52px] flex items-center p-4 hover:bg-white/[0.03] text-[#1d9bf0] transition-colors">
                  Daha fazlasını göster
                </Link>
            )}
        </section>
    )
}
SidebarSection.propTypes={
    title:PropTypes.string.isRequried,
    children:PropTypes.node.isRequried,
    more:PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
}
SidebarSection.defaultProps={
    more:false
}