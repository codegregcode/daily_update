import { useState } from 'react';

function Onboard() {
  const [buying, setBuying] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [customerService, setCustomerService] = useState(false);
  const [manager, setManager] = useState(false);
  const [marvel, setMarvel] = useState(false);
  const [dc, setDc] = useState(false);
  const [image, setImage] = useState(false);
  const [darkHorse, setDarkHorse] = useState(false);
  const [boom, setBoom] = useState(false);

  const handleRoleSelection = (role) => {
    setBuying(false);
    setCustomerCare(false);
    setCustomerService(false);
    setManager(false);

    if (role === 'buying') setBuying(true);
    if (role === 'customerCare') setCustomerCare(true);
    if (role === 'customerService') setCustomerService(true);
    if (role === 'manager') setManager(true);
  };

  const handleTeamSelection = (team) => {
    setMarvel(false);
    setDc(false);
    setImage(false);
    setDarkHorse(false);
    setBoom(false);

    if (team === 'marvel') setMarvel(true);
    if (team === 'dc') setDc(true);
    if (team === 'image') setImage(true);
    if (team === 'darkHorse') setDarkHorse(true);
    if (team === 'boom') setBoom(true);
  };

  return (
    <>
      <p>Please fill in the form below:</p>
      <p>Please select your role -</p>
      <form>
        <input
          type="radio"
          id="buying"
          checked={buying}
          name="role"
          onChange={() => handleRoleSelection('buying')}
        />
        <label htmlFor="buying">Buying</label>
        <br />
        <input
          type="radio"
          id="cc"
          checked={customerCare}
          name="role"
          onChange={() => handleRoleSelection('customerCare')}
        />
        <label htmlFor="cc">Customer Care</label>
        <br />
        <input
          type="radio"
          id="customer-service-advisor"
          checked={customerService}
          name="role"
          onChange={() => handleRoleSelection('customerService')}
        />
        <label htmlFor="customer-service-advisor">
          Customer Service Advisor
        </label>
        <br />
        <input
          type="radio"
          id="tl/manager"
          checked={manager}
          name="role"
          onChange={() => handleRoleSelection('manager')}
        />
        <label htmlFor="tl/manager">Team Leader/Manager (Buying, CC, CS)</label>

        {customerService && (
          <>
            <p>Choose your team - </p>
            <p>Customer Service:</p>
            <input
              type="radio"
              id="marvel"
              checked={marvel}
              name="team"
              onChange={() => handleTeamSelection('marvel')}
            />
            <label htmlFor="marvel">Marvel</label>
            <br />
            <input
              type="radio"
              id="dc"
              checked={dc}
              name="team"
              onChange={() => handleTeamSelection('dc')}
            />
            <label htmlFor="dc">DC</label>
            <br />
            <input
              type="radio"
              id="image"
              checked={image}
              name="team"
              onChange={() => handleTeamSelection('image')}
            />
            <label htmlFor="image">Image</label>
          </>
        )}
        {buying && (
          <>
            <p>Buying:</p>
            <input
              type="radio"
              id="dark-horse"
              checked={darkHorse}
              name="team"
              onChange={() => handleTeamSelection('darkHorse')}
            />
            <label htmlFor="dark-horse">Dark Horse</label>
            <br />
            <input
              type="radio"
              id="boom"
              checked={boom}
              name="team"
              onChange={() => handleTeamSelection('boom')}
            />
            <label htmlFor="boom">Boom!</label>
          </>
        )}

        <br />
        <input type="submit"></input>
      </form>
    </>
  );
}

export default Onboard;
