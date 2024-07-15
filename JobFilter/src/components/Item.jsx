/* eslint-disable react/prop-types */
const Item = ({data,handleFilter}) => {
  
  const dataSet = [];
  if (data.languages && data.tools) {
    dataSet.push(...data.languages, ...data.tools);
  }
  const handleClick = (e) => {
    handleFilter(e.target.innerText)
  }
  
  return (
    <div className="max-w-[80%] border-l-4 border-l-[--Primary-Dark-Cyan] h-auto rounded-sm m-auto mb-12 p-4 flex-col-center md:flex-row-space shadow-lg bg-white">
        <div className="md:flex md:w-[60%]">
          <div className="mt-[-40px] md:mt-0 w-[88px] h-[88px] md:mr-8">
              <img src={data.logo} alt="" className="max-w-[100%] h-auto " />
          </div>
          <div className="border-b border-[--Dark-Grayish-Cyan] md:border-0">
              <p className="text-[--Primary-Dark-Cyan] font-bold inline mr-4">{data.company}</p>
              {data.new ?  <span className="options boolean-span mr-4">New!</span> : null}
              {data.featured ?  <span className="options featured-span">Featured</span> : null}
              <p className="font-bold">{data.position}</p>
              <span className="mr-4 details">{data.postedAt}</span>
              <span className="mr-4 details">{data.contract}</span>
              <span className="details">{data.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 md:gap-x-4 mt-4">
          <span className="filter-tablets" onClick={handleClick}>{data.role}</span>
          <span className="filter-tablets" onClick={handleClick}>{data.level}</span>
            {dataSet.map((item,i)=>(
              <span key={i} className="filter-tablets" onClick={handleClick}>{item}</span>
            ))}
        </div>
    </div>
  )
}

export default Item