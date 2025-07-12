export default function UserProfile() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-2xl text-white shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src="/avatar-1.png"
          alt="Avatar"
          className="w-16 h-16 rounded-full border-4 border-white"
        />
        <div>
          <h2 className="text-xl font-semibold">Fathima Ashba</h2>
          <h3 className="text-xl font-semibold">Software Developer</h3>
          <h4 className="text-xl font-semibold">Level 4+</h4>
          <div className="w-full bg-white rounded-full h-2.5 mt-2">
            <div className="bg-green-400 h-2.5 rounded-full w-3/5" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
