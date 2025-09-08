import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import InfoCard from './components/InfoCard';
import Pill from './components/Pill';
import { LightbulbIcon, TargetIcon, ThumbsDownIcon, WrenchIcon } from './components/Icons';

const App: React.FC = () => {
  const persona = {
    name: 'Moh. Alif Fadhilah Patrayasa',
    age: 19,
    location: 'Kediri, Indonesia',
    university: 'Universitas Negeri Surabaya',
    major: 'Graphic Design, 3rd Semester',
    avatarUrl: 'https://picsum.photos/seed/alifpersona/200',
    bio: '"Above the sky, there is still a sky."',
    description: ['Creative', 'Passionate', 'Determined'],
    goals: {
      skill: 'Mastering UI/UX Design',
      career: 'Work at a major creative agency',
    },
    motivations: 'My journey into design began with a simple love for drawing and coloring. It\'s a passion that has grown into a career aspiration.',
    painPoints: [
      'Struggles to translate abstract ideas into concrete designs using software.',
      'Frustrated by tight deadlines and the pressure they create.',
      'Experiences creative blocks, often finding it hard to source unique and high-quality inspiration online.',
    ],
    toolsAndHabits: {
      software: ['Figma', 'Canva', 'Procreate'],
      inspiration: ['Pinterest'],
      learning: ['YouTube tutorials', 'Peer collaboration'],
      social: ['TikTok', 'WhatsApp'],
    },
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6 text-slate-800">
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-yellow-200 rounded-full filter blur-2xl opacity-20 animate-blob animation-delay-1000"></div>


      <div className="grid grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl z-10">
        <div className="col-span-4">
          <ProfileHeader
            name={persona.name}
            age={persona.age}
            location={persona.location}
            university={persona.university}
            major={persona.major}
            avatarUrl={persona.avatarUrl}
          />
        </div>

        <InfoCard title="About Me" className="col-span-4 sm:col-span-2">
          <p className="text-xl md:text-2xl font-semibold text-violet-800 italic mb-4">{persona.bio}</p>
          <div className="flex flex-wrap gap-3">
            {persona.description.map(desc => <Pill key={desc} text={desc} color="purple" />)}
          </div>
        </InfoCard>

        <InfoCard title="Goals & Ambitions" icon={<TargetIcon />} className="col-span-4 sm:col-span-2">
          <div className="space-y-3">
            <p className="font-medium text-slate-700"><strong className="text-violet-700">Skill Focus:</strong> {persona.goals.skill}</p>
            <p className="font-medium text-slate-700"><strong className="text-violet-700">Career Dream:</strong> {persona.goals.career}</p>
          </div>
        </InfoCard>

        <InfoCard title="Motivations" icon={<LightbulbIcon />} className="col-span-4 md:col-span-2">
          <p className="text-slate-600">{persona.motivations}</p>
        </InfoCard>

        <InfoCard title="Frustrations" icon={<ThumbsDownIcon />} className="col-span-4 md:col-span-2">
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {persona.painPoints.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </InfoCard>

        <InfoCard title="Tools & Habits" icon={<WrenchIcon />} className="col-span-4" variant="yellow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-yellow-50/70 p-4 rounded-2xl">
              <h4 className="font-bold text-yellow-900 mb-2">Software</h4>
              <div className="flex flex-wrap gap-2">
                {persona.toolsAndHabits.software.map(tool => <Pill key={tool} text={tool} color="purple" />)}
              </div>
            </div>
            <div className="bg-yellow-50/70 p-4 rounded-2xl">
              <h4 className="font-bold text-yellow-900 mb-2">Learning</h4>
              <div className="flex flex-wrap gap-2">
                {persona.toolsAndHabits.learning.map(habit => <Pill key={habit} text={habit} color="purple" />)}
              </div>
            </div>
            <div className="bg-yellow-50/70 p-4 rounded-2xl">
              <h4 className="font-bold text-yellow-900 mb-2">Inspiration</h4>
              <div className="flex flex-wrap gap-2">
                {persona.toolsAndHabits.inspiration.map(source => <Pill key={source} text={source} color="purple" />)}
              </div>
            </div>
             <div className="bg-yellow-50/70 p-4 rounded-2xl">
              <h4 className="font-bold text-yellow-900 mb-2">Social</h4>
              <div className="flex flex-wrap gap-2">
                {persona.toolsAndHabits.social.map(app => <Pill key={app} text={app} color="purple" />)}
              </div>
            </div>
          </div>
        </InfoCard>
      </div>

       <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

    </main>
  );
};

export default App;