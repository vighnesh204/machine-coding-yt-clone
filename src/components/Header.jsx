import { useEffect, useState } from "react";
import {
  MENU_ICON_URL,
  LOGO_URL,
  USER_ICON_URL,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  /**
   * serachCache = {
   * 
   *  iphone: ["iphone 17", "iphone 17 pro", "iphone 17 pro max", "iphone 17 ultra", "iphone 17 mini"],
   * }
   * serachQuery = "iphone"
   */

  useEffect(() => {
    // make an API call after each key press
    // but if the difference between the two key presses is less than 200ms, then do not make an API call
    // else decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  /**
   *
   */

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);

      const json = await data.json();

      setSuggestions(json[1]);
      // update the cache
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleOpen());
  };

  return (
    <div className="flex justify-between px-4 py-2 shadow-md items-center bg-white">
      <div className="flex items-center gap-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src={MENU_ICON_URL}
          alt="menu"
        />
        <Link to="/">
          <img className="h-12 cursor-pointer" src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex w-1/2">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-full outline-none focus:border-blue-500"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            {showSuggestions && (
              <div className="absolute top-[110%] left-0 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                <ul>
                  {suggestions.map((s) => (
                    <li
                      key={s}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                    >
                      🔍 {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button className="px-6 py-2 border border-l-0 border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 cursor-pointer flex items-center justify-center">
            🔍
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="h-10 w-10 rounded-full cursor-pointer"
          src={USER_ICON_URL}
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
