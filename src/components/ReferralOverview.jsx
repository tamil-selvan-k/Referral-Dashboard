import {
  Wallet,
  BadgePercent,
  Link,
  Receipt,
  Coins,
  CircleDollarSign,
  Users,
  ArrowLeftRight,
} from "lucide-react";
import React from "react";

const iconMap = {
  balance: Wallet,
  discountPct: BadgePercent,
  totalRef: Link,
  discountAmt: Receipt,
  commissionAmt: Coins,
  totalEarn: CircleDollarSign,
  commissionDisc: Users,
  bankTransfer: ArrowLeftRight,
};

const ReferralOverview = ({ metrics }) => {
  return (
    <div className="dashboard-component" aria-label="Overview metrics" role="region">
      <h1 className='text-[1.2rem] font-bold' style={{marginBottom: '1rem' }}>Overview</h1>
      <ul
        type="none"
        className="overview-metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]"
      >
        {metrics.map((each) => (
          <li className="card" key={each.id}>
            {React.createElement(iconMap[each.id], {
              className: "metrics-icon",
            })}
            <h1 className="text-[1.4rem] font-bold">{each.value}</h1>
            <p className='text-[0.8rem] text-[var(--dark)]'>{each.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferralOverview;
