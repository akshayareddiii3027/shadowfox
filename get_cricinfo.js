import https from 'https';

const getHTML = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

async function run() {
  const html = await getHTML('https://www.espncricinfo.com/team/sunrisers-hyderabad-628333/squad');
  const regex = /<img[^>]+alt="([^"]+)"[^>]+src="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    if(match[2].includes('img1.hscicdn.com/image/upload/')) {
        console.log(`${match[1]}: ${match[2]}`);
    }
  }
}
run();
