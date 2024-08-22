import store from "../../store";
const states=store.getState()
export const mainMenu = [
  {
    path: "/",
    title: "Anasayfa",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/explore",
    title: "Keşfet",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/notification",
    title: "Bildirimler",
    notification:40,
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
          />
        </svg>
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/messages",
    title: "Mesajlar",
    notification:1,
    icons: {
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"
          />
        </svg>
      ),
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
          />
        </svg>
      ),
    },
  },
  {
    path: "/grok",
    title: "Grok",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"
          />
          <path fill="currentColor" d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path>
        </svg> 
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4zm.643 15.8l8.109-11.58h2.515L9.158 17.8H6.643z"
          />
          <path fill="black" d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path>
        </svg>
      ),
    },
  },
  {
    path: "/bookmarks",
    title: "Yer İşaretleri",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"          />
          
        </svg> 
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"
          />
         
        </svg>
      ),
    },
  },
  {
    path: "/topluluklar",
    title: "Topluluklar",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"          />
          
        </svg> 
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-1.608 1.732-2.762 4.389-2.869 8.248l-.03 1.083zM9.616 9.27C10.452 8.63 11 7.632 11 6.5 11 4.57 9.433 3 7.5 3S4 4.57 4 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zm6.884 1.726c-3.264 0-6.816 2.358-7 8.977L9.471 21h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977zm2.116-1.726C19.452 8.63 20 7.632 20 6.5 20 4.57 18.433 3 16.5 3S13 4.57 13 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73z"
          />
         
        </svg>
      ),
    },
  },
  {
    path: "/onaylanmıs",
    title: "Onaylanmış",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"          />
          
        </svg> 
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
          />
         
        </svg>
      ),
    },
  },
  {
    path: "",
    title: "Doğrulanmış Kuru",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"/>
          
        </svg> 
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M18.766 2H7.323l-4.8 12h5.324l-1.261 8.83L22.414 7h-6.648l3-5z" 
          />
         
        </svg>
      ),
    },
  },
  {
    path:`/${states?.auth.currentAccount.username}`,
    title: "Profil",
    icons: {
      active: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"/>
          
        </svg> 
      ),
      passive: (
        <svg viewBox="0 0 24 24" widht={26.25} height={26.25} className="block">
          <path
            fill="currentColor"
            d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z" 
          />
         
        </svg>
      ),
    },
  },
  
];

export const topics=[
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'query',
      value:'Soför'
    },
    postCount:1.151
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'tag',
      value:'kaza'
    },
    postCount:8.832
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'query',
      value:'Askerlik'
    },
    postCount:5.340
  },
  {
    title:"İş ve Finans trend olanlar",
    topic:{
      type:'tag',
      value:'Maymun Çiçeği'
    },
    postCount:"23.3k"
  },
  {
    title:"Spor trend olanlar",
    topic:{
      type:'tag',
      value:'Arda Güler'
    },
    postCount:"29.4k"
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'query',
      value:'Soför'
    },
    postCount:1.151
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'tag',
      value:'kaza'
    },
    postCount:8.832
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'query',
      value:'Askerlik'
    },
    postCount:5.340
  },
  {
    title:"İş ve Finans trend olanlar",
    topic:{
      type:'tag',
      value:'Maymun Çiçeği'
    },
    postCount:"23.3k"
  },
  {
    title:"Spor trend olanlar",
    topic:{
      type:'tag',
      value:'Arda Güler'
    },
    postCount:"29.4k"
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'query',
      value:'Soför'
    },
    postCount:1.151
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'tag',
      value:'kaza'
    },
    postCount:8.832
  },
  {
    title:"Türkiye'de trend olanlar",
    topic:{
      type:'query',
      value:'Askerlik'
    },
    postCount:5.340
  },
  {
    title:"İş ve Finans trend olanlar",
    topic:{
      type:'tag',
      value:'Maymun Çiçeği'
    },
    postCount:"23.3k"
  },
  {
    title:"Spor trend olanlar",
    topic:{
      type:'tag',
      value:'Arda Güler'
    },
    postCount:"29.4k"
  }
]
export const colors = [
	{
		primary: '#1d9bf0',
		secondary: '#8ecdf8'
	},
	{
		primary: '#ffd400',
		secondary: '#ffea80'
	},
	{
		primary: '#f91880',
		secondary: '#fc8cc0'
	},
	{
		primary: '#7856ff',
		secondary: '#bcabff'
	},
	{
		primary: '#ff7a00',
		secondary: '#ffbd80'
	},
	{
		primary: '#00ba7c',
		secondary: '#80ddbe'
	}
]

export const fontSizes = [
	14,
	15,
	16,
	18,
	19
]
