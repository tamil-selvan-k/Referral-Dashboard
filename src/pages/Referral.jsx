import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ReferralDetails from "../components/ReferralDetails";

const Referral = (props) => {
  const [referral, setReferral] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchReferral = async () => {
      setLoading(true);

      try {
        const options = {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${Cookies.get("jwt_token")}`,
            "Content-Type": "application/json",
          },
        };
        const resp = await fetch(
          `https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals/${id}`,
          options,
        );
        const d = await resp.json();
        console.log(d);
        setReferral(d.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReferral();
  }, []);

  return (
    <div className="dashboard">
      <Header />
      {loading ? <p>Loading...</p> : <ReferralDetails referral={referral} />}
      <Footer />
    </div>
  );
};

export default Referral;
