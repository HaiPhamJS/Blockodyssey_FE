import { useEffect, useState } from "react";
import api from "../../services/api";
import User from "../User";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (uri = "") => {
    try {
      setIsLoading(true);
      let users = await api.listUser({}, { method: "GET", uri });
      setUsers(users);
      localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    // search theo API
    // if (input === "") {
    //   fetchData();
    // } else {
    //   fetchData(`?name=${input}`);
    // }

    // search theo Frontend
    if (input != "") {
      let findUser = users.filter((us) => us.name?.includes(input));
      setUsers(findUser);
    } else {
      let us;
      try {
        us = JSON.parse(localStorage.getItem("users"));
      } catch (error) {
        us = {};
      }
      setUsers(us);
    }
  };
  if (isLoading) return <p>Loding ...</p>;
  return (
    <div>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border px-4 h-12 w-96"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="border w-28 ml-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-12 gap-4 w-screen p-4">
        {users.map((us, index) => (
          <div key={index} className="col-span-4 md:col-span-3 xl:col-span-2">
            <User data={us} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUser;
