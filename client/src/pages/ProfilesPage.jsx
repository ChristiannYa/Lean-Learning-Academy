import { NavLink, Outlet } from 'react-router-dom';

const ProfilePages = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-x-2">
      <div>
        {profiles.map((profile) => (
          <NavLink
            to={`/profiles/${profile}`}
            key={profile}
            className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
          >
            <div>Profile {profile}</div>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePages;
