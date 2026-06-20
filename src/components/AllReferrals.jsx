import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AllReferrals = ({ referrals = [] }) => {
  const ITEMS_PER_PAGE = 10;

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [data, setData] = useState(referrals);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    callback();
  }, [search, sortOrder]);

  const callback = async () => {
    setLoading(true);

    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("jwt_token")}`,
        },
      };

      const resp = await fetch(
        `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals?search=${search}&sort=${sortOrder}`,
        options,
      );

      const d = await resp.json();

      console.log(d);

      setData(d.data.referrals || []);
      setCurrentPage(1);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginated = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="dashboard-component">
      <h1
        className="text-[1.2rem] font-bold"
        style={{ marginBottom: "1rem" }}
      >
        All Referrals
      </h1>

      <div className="flex items-center justify-between mb-4">
        <div className="left">
          <label htmlFor="search">Search</label>{" "}
          <input
            type="text"
            placeholder="Name or service..."
            value={search}
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-[5px] px-4 py-3 w-72 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="right">
          <label htmlFor="sort">Sort by date</label>{" "}
          <select
            value={sortOrder}
            id="sort"
            className="border rounded-[5px] px-4 py-3"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest first</option>
            <option value="asc">Oldest first</option>
          </select>
        </div>
      </div>

      <br />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="text-left py-4 px-6 font-medium">NAME</th>
              <th className="text-left py-4 px-6 font-medium">SERVICE</th>
              <th className="text-left py-4 px-6 font-medium">DATE</th>
              <th className="text-left py-4 px-6 font-medium">PROFIT</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-8">
                  Loading...
                </td>
              </tr>
            ) : paginated.length > 0 ? (
              paginated.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => navigate(`/referral/${item.id}`)}
                  className="border-b border-gray-100 hover:bg-gray-50 text-[var(--dark)] cursor-pointer text-[0.9rem]"
                >
                  <td className="px-6 py-5">{item.name}</td>

                  <td className="px-6 py-5">{item.serviceName}</td>

                  <td className="px-6 py-5">{item.date}</td>

                  <td className="px-6 py-5 font-semibold text-indigo-500">
                    ${item.profit}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-8">
                  No referrals found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-5">
        <p className="text-sm text-gray-500">
          {data.length === 0
            ? "Showing 0 of 0 entries"
            : `Showing ${
                (currentPage - 1) * ITEMS_PER_PAGE + 1
              }-${Math.min(
                currentPage * ITEMS_PER_PAGE,
                data.length,
              )} of ${data.length} entries`}
        </p>

        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-4 py-2 rounded-[8px] border ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-[8px] ${
                  currentPage === i + 1
                    ? "bg-indigo-500 text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-4 py-2 rounded-[8px] border ${
                currentPage >= totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReferrals;