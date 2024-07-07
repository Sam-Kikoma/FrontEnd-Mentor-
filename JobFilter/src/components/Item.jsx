/* eslint-disable react/prop-types */
const Item = ({data}) => {
  return (
    <div className="w-[80%] border border-green-300 h-48 rounded-sm">
        <div>
            <img src={data.logo} alt="" />
        </div>
        <div className="border-b border-black">
            <p>{data.company}</p>
            <span>{data.new}</span>
            <span>{data.featured}</span>
            <p>{data.position}</p>
            <span>{data.postedAt}</span>
            <span>{data.contract}</span>
            <span>{data.location}</span>
        </div>
        <div>
          <span>{data.role}</span>
          <span>{data.level}</span>
            {data.languages.map((lng,i)=>(
              <span key={i}>{lng}</span>
            ))}
        </div>
    </div>
  )
}

export default Item