import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceSummary from "../components/ServiceSummary";
import ReferralOverview from "../components/ReferralOverview";
import Refer from '../components/Refer';
import AllReferrals from '../components/AllReferrals'

import "../App.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
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
          "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals",
          options,
        );
        const d = await resp.json();

        console.log(d);
        setData(d.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("From home", data);
  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-content">
        <h1 className="head text-900 text-[2rem] my-0">Referral Dashboard</h1>
        <p className="subtitle text-600 text-[var(--dark)] text-[1rem] my-0">
          Track your referrals, earnings, and partner activity in one place.
        </p><br />
        <div className="dashboard-components flex flex-col justify-around gap-[2rem] py-[2rem]">
          {loading ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
                <p className="text-[var(--dark)] text-[1rem] my-[5rem]">
                Loading dashboard...
                </p>
            </div>
          ) : (
            <>
              <ReferralOverview metrics={data?.metrics} />
              <ServiceSummary services={data?.serviceSummary} />
              <Refer refer={data?.referral} />
              <AllReferrals referrals={data?.referrals} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
