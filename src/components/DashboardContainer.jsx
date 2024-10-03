import Onboard from './Onboard';
import InProgress from './InProgress';
import useFetchOnboardStatus from '../hooks/useFetchOnboardStatus';

function DashboardContainer() {
  const { onboardStatus, loading, error } = useFetchOnboardStatus();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data.</div>;

  return (
    <>
      <h1>Dashboard</h1>
      {onboardStatus === 'start' && <Onboard />}
      {onboardStatus === 'progress' && <InProgress />}
    </>
  );
}

export default DashboardContainer;
