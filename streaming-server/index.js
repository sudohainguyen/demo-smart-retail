const Stream = require('node-rtsp-stream');
// const streamUrl = process.env.FOSCAM_STREAM_URL;
const streamUrl = 'rtsp://admin:haideptrai123@14.161.2.15:60004/cam/realmonitor?channel=1&subtype=00&authbasic=YWRtaW46aGFpZGVwdHJhaTEyMw=='

stream = new Stream({
  name: 'streaming',
  streamUrl: streamUrl,
  wsPort: 9999,
  width: 1280,
  height: 720
});
