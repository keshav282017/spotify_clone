import React from 'react';

const PlayerControl = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold">Now Playing</h4>
          <p className="text-sm">Fake Music Track - Artist Name</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-800 p-2 rounded hover:bg-gray-700">
            <i className="fas fa-backward"></i>
          </button>
          <button className="bg-gray-800 p-2 rounded hover:bg-gray-700">
            <i className="fas fa-play"></i>
          </button>
          <button className="bg-gray-800 p-2 rounded hover:bg-gray-700">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerControl;
