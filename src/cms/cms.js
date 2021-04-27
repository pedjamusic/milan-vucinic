// import CMS from 'netlify-cms-app'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

// CMS.init()
// CMS.registerMediaLibrary(cloudinary)

import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerMediaLibrary(cloudinary);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'pedjamusic/milan-vucinic',
      branch: 'main',
      squash_merges: true, // @NOTE Beta feature
    },
    media_library: {
      name: 'cloudinary',
      config: {
        cloud_name: 'too-dear',
        api_key: '528391217167367',
        default_transformations: [
          [
            {
              width: 800,
              quality: 80,
              crop: 'limit',
            },
          ],
        ],
      },
    },
    media_folder: '/static/uploads',
    public_folder: '/uploads',
    collections: [
    ]
  },
});