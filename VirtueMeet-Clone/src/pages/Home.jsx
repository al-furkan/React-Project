import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');

  const handleNavigate = (e) => {
    e.preventDefault();
    if (roomCode.trim()) {
      navigate(`/call-room?code=${encodeURIComponent(roomCode.trim())}`);
    } else {
      alert('Please enter a room code');
    }
  };

  return (
    <>
      <Helmet>
        <title>VirtueMeet - Home</title>
      </Helmet>

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-[500px] w-full bg-blue-200 rounded-md shadow-md p-5">
          <h1 className="text-xl font-semibold mb-4">Join a Room</h1>
          <form onSubmit={handleNavigate}>
            <label htmlFor="roomCode" className="block mb-2 font-medium">
              Room Code
            </label>
            <input
              id="roomCode"
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-3"
              placeholder="Enter Room Link"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full"
            >
              Join Room
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
