const Refer = ({ refer }) => {
  const { link, code } = refer || {};
  return (
    <div
      className="dashboard-component"
      aria-label="Service summary"
      role="region"
    >
      <h1 className="text-[1.2rem] font-bold" style={{ marginBottom: "1rem" }}>
        Refer friends and earn more
      </h1>
      <ul
        type="none"
        className="overview-metrics grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[1rem]"
      >
        <li className="card">
          <p className="text-[0.7rem] text-[var(--dark)]">YOUR REFERRAL LINK</p>
          <div className="flex items-center gap-[0.5rem]">
            <input type="text" value={link} readOnly className="referral-link text-[0.8rem] p-[0.5rem] rounded b-0 bg-[var(--bg)] w-full" />
            <button className="copy-btn text-[0.8rem] rounded-[10px] bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] cursor-pointer" onClick={() => navigator.clipboard.writeText(link)}>
              Copy
            </button>
          </div>
        </li>
        <li className="card">
          <p className="text-[0.7rem] text-[var(--dark)]">
            YOUR REFERRAL CODE
          </p>
          <div className="flex items-center gap-[0.5rem]">
            <input type="text" value={code} readOnly className="referral-link text-[0.8rem] p-[0.8rem] rounded b-0 bg-[var(--bg)] w-full" />
            <button className="copy-btn text-[0.8rem] rounded-[10px] bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] cursor-pointer" onClick={() => navigator.clipboard.writeText(code)}>
              Copy
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Refer;
