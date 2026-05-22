import fs from 'fs';
import path from 'path';
import https from 'https';

const getHTML = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

async function run() {
  console.log("Fetching SRH squad page...");
  try {
    const html = await getHTML('https://www.iplt20.com/teams/sunrisers-hyderabad');
    
    // Find all player image URLs
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = new Set();
    while ((match = regex.exec(html)) !== null) {
      if(match[1].includes('player') || match[1].includes('headshot')) {
        urls.add(match[1]);
      }
    }
    
    console.log(`Found ${urls.size} image URLs.`);
    for (const url of urls) {
      console.log(url);
    }
  } catch(e) {
    console.error(e);
  }
}

run();
