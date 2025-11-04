export const MacTerminalHeader = ({ children }) => (
  <div className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-600 rounded-t-xl p-3">
    <div className="flex items-center space-x-2">
      <div className="flex space-x-1.5">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
      <div className="text-gray-400 font-mono text-sm ml-3">
        {children || "Terminal"}
      </div>
    </div>
  </div>
);
