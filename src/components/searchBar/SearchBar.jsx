import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const searchData = [
    {
      name: "Fashion",
      image: "https://m.media-amazon.com/images/I/61wM07UyIJL._AC_UL320_.jpg",
    },
    {
      name: "Shirt",
      image: "https://m.media-amazon.com/images/I/71UrMl4jTfL._AC_UL320_.jpg",
    },
    {
      name: "Jacket",
      image: "https://m.media-amazon.com/images/I/61UIHcgQUvL._AC_UL320_.jpg",
    },
    {
      name: "Mobile",
      image: "https://m.media-amazon.com/images/I/81CgtwSII3L._AC_UY218_.jpg",
    },
    {
      name: "Laptop",
      image: "https://m.media-amazon.com/images/I/61GEizrmU9L._AC_UY218_.jpg",
    },
  ];
  const [search, setSearch] = useState("");

  // Filter Search Data
  const filterSearchData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search))
    .slice(0, 8);

  const navigate = useNavigate();

  return (
    <div className="">
      {/* search input  */}
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black "
        />
      </div>

      {/* search drop-down  */}
      <div className=" flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-2 px-2 cursor-pointer"
                      onClick={() => navigate(`/productinfo/${item.id}`)}
                    >
                      <div className="flex items-center gap-2">
                        <img className="w-10" src={item.image} alt="" />
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className=" w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
