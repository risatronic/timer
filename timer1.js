const timer = function(intervals) {
  intervals = process.argv.slice(2);

  if (!intervals) {
    return;
  }

  const beep = () => {
    process.stdout.write('\x07');
  };

  for (let interval of intervals) {
    if (interval < 0 || !interval) {
      break;
    }
    setTimeout(() => beep(), interval * 1000);
  }
};

timer();