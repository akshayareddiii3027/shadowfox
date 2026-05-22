import https from 'https';

https.get('https://sunrisershyderabad.in/players', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const regex = /<img[^>]+src="([^"]+)"/g;
    let match;
    while((match = regex.exec(data)) !== null) {
      if(match[1].includes('player')) {
         console.log(match[1]);
      }
    }
  });
});
