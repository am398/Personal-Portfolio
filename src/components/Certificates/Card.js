import React from 'react'


const Card = ({ item: { title,icon,link } }) => {
  return (
    <div className="w-full px-5 h-80 py-5 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          {/* <div className="w-10 h-8 flex flex-col justify-between">
      
              <span className="text-5xl text-designColor scale-50 hover:scale-75 ease-in duration-100">{icon}</span>
          </div> */}
          <a href={link}>
            <img src={icon} alt="pic" />
          </a>

          <div className="flex flex-col gap-6">
            <h2 className="text-l md:text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card