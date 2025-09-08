import React from 'react';

interface ProfileHeaderProps {
  name: string;
  age: number;
  location: string;
  university: string;
  major: string;
  avatarUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, age, location, university, major, avatarUrl }) => {
  return (
    <div className="w-full h-full bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-8 flex items-center shadow-lg border border-white/20">
      <img src={avatarUrl} alt={name} className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl flex-shrink-0 object-cover" />
      <div className="ml-6 md:ml-8 overflow-hidden">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight truncate">{name}</h1>
        <div className="mt-3 text-base md:text-lg font-medium text-slate-600 flex items-center flex-wrap gap-x-4 gap-y-1">
          <span>{age} years old</span>
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
          <span>{location}</span>
          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
          <span>{university}</span>
        </div>
         <p className="mt-2 text-base md:text-lg font-medium text-violet-700">{major}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;