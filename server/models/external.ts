export {};
require('dotenv').config();
const fetch = require('node-fetch');
const { createApi } = require('unsplash-js');

global.fetch = fetch;

module.exports = {
  fetchPhotos: async function(method: any, headers: any, body: any, query: any, params: any) {
    // integrate with unsplash to get random picture
    const unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY
    });

    try {
      const data = await unsplash.photos.getRandom({featured: true, query: 'dogs', count: 8});
      return data;
    } catch(err) {
      console.error(err);
    }
  }
}