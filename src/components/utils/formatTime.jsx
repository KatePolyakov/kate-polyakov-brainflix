export const formatTime = (timestamp) => {
  const timeStamp = new Date(timestamp).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return timeStamp;
};
