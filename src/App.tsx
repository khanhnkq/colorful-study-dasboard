import React from 'react';
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
  Search,
  Wallet,
  Bell,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Clock,
  Book,
} from 'lucide-react';

const Sidebar = () => (
  <div className="w-24 flex flex-col items-center py-8 border-r border-gray-100 justify-between shrink-0 bg-white">
    <div className="flex flex-col items-center gap-12">
      {/* Logo */}
      <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500 font-bold text-xl">
        O
      </div>
      {/* Nav Icons */}
      <div className="flex flex-col gap-8">
        <button className="text-gray-400 hover:text-gray-800 transition-colors">
          <LayoutDashboard size={24} />
        </button>
        <button className="text-gray-400 hover:text-gray-800 transition-colors">
          <Calendar size={24} />
        </button>
        <button className="bg-[#1A1A2E] text-white p-3 rounded-full shadow-lg shadow-[#1A1A2E]/30">
          <BookOpen size={24} />
        </button>
        <button className="text-gray-400 hover:text-gray-800 transition-colors">
          <MessageSquare size={24} />
        </button>
        <button className="text-gray-400 hover:text-gray-800 transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
    <button className="text-gray-400 hover:text-gray-800 transition-colors">
      <LogOut size={24} />
    </button>
  </div>
);

const MainContent = () => (
  <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-8 bg-white">
    {/* Search Bar */}
    <div className="relative max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search something"
        className="w-full bg-gray-50 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:ring-2 focus:ring-purple-100 transition-all text-sm font-medium text-gray-700 placeholder:text-gray-400"
      />
    </div>

    {/* Hero Banner */}
    <div className="bg-[#D4D0F5] rounded-3xl p-8 flex items-center justify-between relative overflow-hidden h-48">
      <div className="max-w-sm z-10">
        <h2 className="text-[22px] font-semibold text-[#1A1A2E] mb-6 leading-snug">
          Have you seen the new vocabulary course that has come out yet?
        </h2>
        <button className="bg-[#1A1A2E] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Start course
        </button>
      </div>
      {/* Illustration Placeholder */}
      <div className="absolute right-0 bottom-0 w-64 h-full flex items-end justify-end pr-8 opacity-90">
         <img src="https://illustrations.popsy.co/amber/student-going-to-school.svg" alt="Study" className="object-contain h-[120%]" referrerPolicy="no-referrer" />
      </div>
    </div>

    {/* Progress Section */}
    <div>
      <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">Your progress</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-[#B8B2FF] rounded-3xl p-5 flex flex-col justify-between h-[150px]">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1A1A2E] rounded-full"></div>
            </div>
            <button className="text-[#1A1A2E]/50 hover:text-[#1A1A2E]"><MoreHorizontal size={20} /></button>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A1A2E] mb-3 text-sm">Beginner's Language Mastery</h4>
            <div className="flex items-center justify-between text-xs text-[#1A1A2E]/70 mb-2">
              <span>Progress</span>
              <span className="font-semibold text-[#1A1A2E]">86%</span>
            </div>
            <div className="w-full bg-white/40 rounded-full h-1.5">
              <div className="bg-[#1A1A2E] h-1.5 rounded-full" style={{ width: '86%' }}></div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#FFB86C] rounded-3xl p-5 flex flex-col justify-between h-[150px]">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1A1A2E] rounded-full"></div>
            </div>
            <button className="text-[#1A1A2E]/50 hover:text-[#1A1A2E]"><MoreHorizontal size={20} /></button>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A1A2E] mb-3 text-sm">English Essentials Course</h4>
            <div className="flex items-center justify-between text-xs text-[#1A1A2E]/70 mb-2">
              <span>Progress</span>
              <span className="font-semibold text-[#1A1A2E]">32%</span>
            </div>
            <div className="w-full bg-white/40 rounded-full h-1.5">
              <div className="bg-[#1A1A2E] h-1.5 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#FF85C0] rounded-3xl p-5 flex flex-col justify-between h-[150px]">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-white/40 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1A1A2E] rounded-full"></div>
            </div>
            <button className="text-[#1A1A2E]/50 hover:text-[#1A1A2E]"><MoreHorizontal size={20} /></button>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A1A2E] mb-3 text-sm">Novice to Proficient English</h4>
            <div className="flex items-center justify-between text-xs text-[#1A1A2E]/70 mb-2">
              <span>Progress</span>
              <span className="font-semibold text-[#1A1A2E]">5%</span>
            </div>
            <div className="w-full bg-white/40 rounded-full h-1.5">
              <div className="bg-[#1A1A2E] h-1.5 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Articles Section */}
    <div>
      <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">Top articles for you</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Article 1 */}
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col">
          <div className="h-36 bg-[#FFE5F1] flex items-center justify-center relative overflow-hidden">
            <img src="https://illustrations.popsy.co/amber/surreal-hourglass.svg" alt="Article" className="w-32 h-32 object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <h4 className="font-semibold text-[#1A1A2E] mb-3 text-sm leading-snug">Mastering Vocabulary: Proven Strategies for Efficient English Word Learning</h4>
            <div className="flex items-center text-xs text-gray-400 gap-2 font-medium">
              <Book size={14} />
              <span>technique</span>
              <span>•</span>
              <span>5 min</span>
            </div>
          </div>
        </div>
        {/* Article 2 */}
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col">
          <div className="h-36 bg-[#F3E8FF] flex items-center justify-center relative overflow-hidden">
            <img src="https://illustrations.popsy.co/amber/surreal-book.svg" alt="Article" className="w-32 h-32 object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <h4 className="font-semibold text-[#1A1A2E] mb-3 text-sm leading-snug">Embarking on English: A Beginner's Guide to Kickstart Your Language Learning</h4>
            <div className="flex items-center text-xs text-gray-400 gap-2 font-medium">
              <Book size={14} />
              <span>technique</span>
              <span>•</span>
              <span>5 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RightSidebar = () => (
  <div className="w-[360px] p-8 border-l border-gray-100 overflow-y-auto shrink-0 flex flex-col gap-8 bg-white">
    {/* Top Actions */}
    <div className="flex items-center justify-end gap-4">
      <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
        <Wallet size={18} />
      </button>
      <button className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors relative">
        <Bell size={18} />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-gray-50"></span>
      </button>
      <img src="https://i.pravatar.cc/150?img=47" alt="User" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
    </div>

    {/* Calendar Widget */}
    <div>
      <div className="flex items-center justify-between mb-6">
        <button className="w-8 h-8 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
          <ChevronLeft size={16} />
        </button>
        <h3 className="font-semibold text-[#1A1A2E] text-sm">March 2024</h3>
        <button className="w-8 h-8 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-3">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {[23, 24, 25].map(date => (
          <div key={date} className="w-8 h-8 flex items-center justify-center text-sm text-gray-400 mx-auto font-medium">{date}</div>
        ))}
        <div className="w-8 h-8 flex items-center justify-center text-sm text-white bg-[#B8B2FF] rounded-full mx-auto font-medium shadow-sm shadow-[#B8B2FF]/50">26</div>
        {[27, 28, 29].map(date => (
          <div key={date} className="w-8 h-8 flex items-center justify-center text-sm text-[#1A1A2E] font-medium mx-auto">{date}</div>
        ))}
      </div>
    </div>

    {/* Upcoming Courses */}
    <div>
      <h3 className="text-lg font-semibold text-[#1A1A2E] mb-4">Upcoming courses</h3>
      <div className="flex flex-col gap-4">
        {/* Course 1 */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
          <div className="flex gap-2 mb-3">
            <span className="px-2.5 py-1 bg-purple-50 text-purple-600 text-[10px] font-semibold uppercase tracking-wider rounded-full">Beginner</span>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold uppercase tracking-wider rounded-full">Grammar</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-[#1A1A2E] text-sm">English Grammar</h4>
            <span className="font-bold text-[#1A1A2E]">$50<span className="text-xs text-gray-400 font-medium">.99</span></span>
          </div>
          <p className="text-[11px] text-gray-400 mb-4 leading-relaxed line-clamp-2">
            Basic English grammar includes learning verbs, nouns, and simple sentence structure for effective communication.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#1A1A2E] font-medium mb-4">
            <div className="flex items-center gap-1.5"><Clock size={12} className="text-gray-400"/> 3 month</div>
            <div className="flex items-center gap-1.5"><Book size={12} className="text-gray-400"/> 56 lessons</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/150?img=11" alt="Instructor" className="w-7 h-7 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
              <img src="https://i.pravatar.cc/150?img=12" alt="Instructor" className="w-7 h-7 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
              <img src="https://i.pravatar.cc/150?img=13" alt="Instructor" className="w-7 h-7 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
            </div>
            <button className="bg-[#1A1A2E] text-white px-5 py-2 rounded-full text-[11px] font-semibold hover:bg-gray-800 transition-colors">
              Buy course
            </button>
          </div>
        </div>

        {/* Course 2 */}
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
          <div className="flex gap-2 mb-3">
            <span className="px-2.5 py-1 bg-orange-50 text-orange-600 text-[10px] font-semibold uppercase tracking-wider rounded-full">Intermediate</span>
            <span className="px-2.5 py-1 bg-pink-50 text-pink-600 text-[10px] font-semibold uppercase tracking-wider rounded-full">Vocabulary</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-semibold text-[#1A1A2E] text-sm">Idioms about friendship</h4>
            <span className="font-bold text-[#1A1A2E]">$25<span className="text-xs text-gray-400 font-medium">.99</span></span>
          </div>
          <p className="text-[11px] text-gray-400 mb-4 leading-relaxed line-clamp-2">
            Friendship idioms add colorful expressions to language, like 'to be on the same page' or 'to have someone's back', enhancing communication.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-[#1A1A2E] font-medium mb-4">
            <div className="flex items-center gap-1.5"><Clock size={12} className="text-gray-400"/> 2 weeks</div>
            <div className="flex items-center gap-1.5"><Book size={12} className="text-gray-400"/> 10 lessons</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/150?img=32" alt="Instructor" className="w-7 h-7 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
              <img src="https://i.pravatar.cc/150?img=33" alt="Instructor" className="w-7 h-7 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
            </div>
            <button className="bg-gray-50 text-gray-400 px-5 py-2 rounded-full text-[11px] font-semibold cursor-not-allowed">
              Buy course
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="h-screen w-full bg-white flex overflow-hidden font-sans">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
}
