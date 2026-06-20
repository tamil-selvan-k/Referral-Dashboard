const ServiceSummary = ({ services }) => {

    const {service, yourReferrals, activeReferrals, totalRefEarnings} = services || {};
    console.log("From service summary", services);
  return (
    <div className="dashboard-component" aria-label="Service summary" role="region">
      <h1 className="text-[1.2rem] font-bold" style={{ marginBottom: "1rem" }}>
        Service summary
      </h1>
      <ul
        type="none"
        className="overview-metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]"
      >
        <li className="card">
          <p className="text-[0.7rem] text-[var(--dark)]">SERVICE</p>
          <h1 className="text-[1.2rem] font-bold text-[var(--accent)]">{service}</h1>
        </li>
        <li className="card">
          <p className="text-[0.7rem] text-[var(--dark)]">YOUR REFERRALS</p>
          <h1 className="text-[1.2rem] font-bold">{yourReferrals}</h1>
        </li>
        <li className="card">
          <p className="text-[0.7rem] text-[var(--dark)]">ACTIVE REFERRALS</p>
          <h1 className="text-[1.2rem] font-bold">{activeReferrals}</h1>
        </li>
        <li className="card">
          <p className="text-[0.7rem] text-[var(--dark)]">TOTAL REF. EARNINGS</p>
          <h1 className="text-[1.2rem] font-bold">{totalRefEarnings}</h1>
        </li>
      </ul>
    </div>
  );
};

export default ServiceSummary;
