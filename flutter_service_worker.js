'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "6a1d3e2e6e2e6ba861ef64b11aae9ea6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ccb17d482a4c87b7ff7103811be6ff4c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "05369740f926ad47a56045456497726f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ef2f781307ebe603693143818ed89fb",
".git/logs/refs/heads/master": "4ef2f781307ebe603693143818ed89fb",
".git/logs/refs/remotes/origin/master": "4b153bd1d99e0acd51e6903a3617397a",
".git/objects/03/35b356c13857f6e920317d6d7083476523febd": "ba9f8792779280b381efef0da2a4ce74",
".git/objects/04/4cdc338c0b5ca5b737bf184c5ae1b9889ef3be": "3484fefd351930b8ce6cbd7455223a8a",
".git/objects/07/00b60bfe7a0503a46400781b865b9ed33580c8": "9a2a1b46eb7aa8678535cf8315673077",
".git/objects/08/189adc42270705b90501a698ae89d1e650acae": "b1635118ee30670c63cc6dee48f2ad09",
".git/objects/0c/eeb35729dddecb80522475c9f82ee17a0fcee1": "69d32e2c7a66ba89fab934f17ecaae3c",
".git/objects/13/89ab6a117138326b20aa7480ec07c6467d41f4": "ba4c6e05fc47f5de22a4ec1fc6c7308b",
".git/objects/1a/efda01418c188300972046a9ad75b381d6dc08": "88f08eee5fdefcb0cb939be4343c6deb",
".git/objects/1e/f3699a39fb4a0e14f1b43dcbd1e17ee256f102": "173de4d79912f2e64ff6d71be8db4f4f",
".git/objects/21/4897d8fb3e718bc77438e88decffaccbd08ec4": "4e7115c4eeaead3a19781c172f36fc20",
".git/objects/29/83dad0e66b268132162719db7a6104dbad55d3": "307deb1a189cd6f9242363ab4f0dcfc7",
".git/objects/2f/6a27e4584d706a8ab92f13790ceceaeaa66d23": "9316cee0df8e4ca0aef7bb85530368e6",
".git/objects/2f/8e85326240299b37910e99777b02907da25b34": "0f513da01405be4e6b8d0d48e1b2543b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/44/a783a7e1a63efc35c14db6d3f4d4f7ede38789": "e87b5d84efbeff692599a82d6ceff08c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/f2bfb100dffc265797fc809802bf7911964a41": "725454511cdb481350c56bd82c5e5b52",
".git/objects/4d/aac304c75e7cfa3401a45fc3b1a3d1dfe04752": "29c3d448fa489aeff8c864a5816ea471",
".git/objects/56/6c4bfd670666201be922a2ad7a58e7d5b8bc65": "44638f2b856c841cd5e02cef3efd3848",
".git/objects/57/1fd64a2656703a454b0f7f281b1f4849d84fe9": "08310cb753635e430c9b565d78852268",
".git/objects/5d/5b17cf11a1f5accb8979dff3bc00776569c6ce": "9221b32e3fc51ba2dfdf32f69aa42010",
".git/objects/62/1feeb026fdb93c700b77e6d008546a774d1d34": "47b20910f915a92fab8c0cd3c0f41097",
".git/objects/6b/9e2509c890249e68c0791d66bbeb787d07c904": "7ab983d35b2a7d071f7152fe81028de0",
".git/objects/71/c48608c930a3a70f2cb009497c4d1b5a1e37ff": "b2a480274fdf42b4142675f4fe207a84",
".git/objects/72/d787473e3974dd56b8aeecb2735faa2605a749": "66a487452846d7da94ad91292213bcc0",
".git/objects/73/98d51e852b4db6c0362c5923e39d11c3ced15d": "f40fb4176153dafd64fe989c1ea531b1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/c83a268f163140fb462d3b78de12ab1bc0efc5": "b3ccbe089c50e43dd628c4b928428c96",
".git/objects/87/c897b8d350e5f7a402d563b63674c6afe7527c": "1ad4ffef788eb624f75d7bd0ac17a695",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/6abdb7140c1247e045feb9cb5e4cd3fff68e9d": "00418c6fb5fdfb4a97bf1f0bf74242d3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/a7151ff1233a9e0646eb7b974ac54781546647": "12e2cbd119f5a0257380d8801b914553",
".git/objects/c1/ba3924ad207c36162b37d5587a0df7d0b6aef3": "30f53c08a6c9127248aa1f480334c13b",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c6/591598329f359512ff093893b72f521e3ff07b": "438b28364498082be145ad3448203334",
".git/objects/cb/d74ddae056667c158e911e8c767bae6856cb09": "bc034df223c00c26f0ca4d57dfd003e9",
".git/objects/d9/ccf4f231d49a5f25c3c8a3bf26b879940ed633": "8586ea70e69d888347538ad240d4078b",
".git/objects/da/4506b9eb748e3fe0f6f7e92dfa8f5509eda288": "9d3c7864dac608388fab32fefcdcd457",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/5014f1b667fa6991471b156ddd05f5d6154eec": "b7d6309f99ebb569bc8afb51c5c3fe77",
".git/objects/ef/0cb9c6615c735c363c18e16756bc249dafdbeb": "5cd82bbfb77cd122ce31f207bc28c9e5",
".git/objects/f1/c57875a454c2b6f4cf15e87f2731093548bbe4": "29975750c70d9b99c6a14118fded12b3",
".git/objects/fd/e23696d643ca287b766834a0698be6e97c48ed": "7c6c398fc1d5f32ff79e378afc901213",
".git/ORIG_HEAD": "371f13282218068f8838e2f8fbc4e2d8",
".git/refs/heads/master": "371f13282218068f8838e2f8fbc4e2d8",
".git/refs/remotes/origin/master": "371f13282218068f8838e2f8fbc4e2d8",
"assets/AssetManifest.json": "f370b448a48e2f29cfb0e6c6a8be19ec",
"assets/assets/avatar.json": "f1e50baec662ef024c5e876a62fbaa8c",
"assets/assets/background.json": "a9f7a1ea1992d673f902416e4fbcc72b",
"assets/assets/background2.json": "fd3cc9fccefc87b44e8240a312c0fb5c",
"assets/assets/button1.json": "8348335dcd107f685cd66f3ae8e1097d",
"assets/assets/button2.json": "bf06d7d08831c5a4cace6ce79339075c",
"assets/assets/iphone.png": "dbf530a77916cb455ca79ee8b88ad44a",
"assets/assets/logo.png": "776fd9496bfd3b3b011ef196d6e52004",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "49fc79794261e2c98333d38c64ffa2e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo.png": "776fd9496bfd3b3b011ef196d6e52004",
"index.html": "b01d2a422c724afca8387323d48b543f",
"/": "b01d2a422c724afca8387323d48b543f",
"main.dart.js": "2cf4e457284dcde53e81c8529f347624",
"manifest.json": "4ca547007c7f39f3f5956144e4273b11",
"version.json": "d9e8fdb1b45ccb602c69c852ebc3e496",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
