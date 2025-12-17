import { useSEO } from '../hooks/useSEO';

function Staff() {
  useSEO({
    title: 'Leadership & Key Personnel | MSES',
    description: 'Meet the experienced leadership team at Mid-South Environmental Services. Hands-on expertise in environmental response, operations, and field coordination.',
    canonical: 'https://mses.online/staff'
  });

  return (
    <div className="page">
      <section>
        <h1>Leadership & Key Personnel</h1>
        <p>Mid-South Environmental Services is led by experienced personnel with hands-on knowledge of environmental response, operations, and coordination. The team supports both emergency response and planned work across regulated operating environments, providing direct access and clear communication when it matters most.</p>
      </section>

      <section>
        <ul className="staff-list">
          <li>
            <span className="staff-name">Daniel Barrett</span>
            <span className="staff-title">Vice President of Operations</span>
          </li>
          <li>
            <span className="staff-name">Robin Porter</span>
            <span className="staff-title">Business Development</span>
          </li>
          <li>
            <span className="staff-name">Cory Clements</span>
            <span className="staff-title">Operations Manager</span>
          </li>
          <li>
            <span className="staff-name">Jason James</span>
            <span className="staff-title">Corporate Branch Manager</span>
          </li>
          <li>
            <span className="staff-name">Amber White</span>
            <span className="staff-title">Office Manager</span>
          </li>
          <li>
            <span className="staff-name">Michelle Holley</span>
            <span className="staff-title">Billing & DOT Administration</span>
          </li>
          <li>
            <span className="staff-name">AJ Johnson</span>
            <span className="staff-title">AP Administrator</span>
          </li>
          <li>
            <span className="staff-name">William Weeks</span>
            <span className="staff-title">Senior Chemist / Transportation & Disposal Coordinator</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Staff;
