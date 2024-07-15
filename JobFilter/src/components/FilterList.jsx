/* eslint-disable react/prop-types */
const FilterList = ({ filter, clearFilter, removeSelected }) => {
    return (
      <div className="max-w-[80%] p-4 mt-[-100px] mb-10 bg-white mx-auto">
        {filter.map((item, i) => (
          <div key={i} className="filter-tablets inline-block mr-2 align-middle p-2 mb-2 bg-[--Light-Grayish-Cyan] rounded">
            <span className="inline-block align-middle mr-2">{item}</span>
            <button
              className="bg-[--Dark-Grayish-Cyan] inline-block align-middle p-2"
              onClick={() => removeSelected(item)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                <path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
              </svg>
            </button>
          </div>
        ))}
        <button onClick={clearFilter} className="bg-[--Dark-Grayish-Cyan] text-white p-2 rounded">
          Clear
        </button>
      </div>
    );
  };
  
  export default FilterList;
  