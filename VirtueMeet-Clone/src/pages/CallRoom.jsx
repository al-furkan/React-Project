import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const CallRoom = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const roomcode = params.get('code');

  useEffect(() => {
    const myMeeting = async () => {
      if (!roomcode) {
        alert('Room code is missing!');
        return;
      }

      const appID = 393360726;
      const serverSecret = '1de1b48430a9e293f0b94bd4154b6518';
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomcode,
        Date.now().toString(),
        'Furkan'
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: document.getElementById('meeting-container'),
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONOneCall, // Correct casing
        },
      });
    };

    myMeeting();
  }, [roomcode]);

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div id="meeting-container" className="w-full h-full" />
    </div>
  );
};

export default CallRoom;
