const packageJson = require("../package.json");
const elmJson = require("../elm.json");

const root = "gh-pages";

const info = {
    title: "Elm Image encoding and decoding",
    description: "Image encoder/decoder in pure Elm, supporting any bit size & interlace for BMP and PNG formats",
    version: elmJson.version,
    license: elmJson.license,
    twitterName: "@justgook",
    image: "favicon.png",
    favicon: "gh-pages/favicon.png",
    url: "https://justgook.github.io/elm-image/"
};
const socialTags_ = ({ facebook, twitter }) =>
    ({
        "meta": [
            // facebook
            { "property": "og:type", "content": facebook.type },
            { "property": "og:url", "content": facebook.url },
            { "property": "og:title", "content": facebook.title },
            { "property": "og:description", "content": facebook.description },
            { "property": "og:image", "content": facebook.image },
            { "property": "og:image:width", "content": facebook.image_width },
            { "property": "og:image:height", "content": facebook.image_height },
            // twitter
            { "name": "twitter:card", "content": twitter.card },
            // { "name": "twitter:domain", "content": twitter.domain },
            { "name": "twitter:title", "content": twitter.title },
            { "name": "twitter:description", "content": twitter.description },
            { "name": "twitter:image", "content": twitter.image },
            { "name": "twitter:url", "content": twitter.url },
            { "name": "twitter:label1", "content": twitter.label1 },
            { "name": "twitter:data1", "content": twitter.data1 },
            // { "name": "twitter:label2", "content": twitter.label2 },
            // { "name": "twitter:data2", "content": twitter.data2 },
            { "name": "twitter:site", "content": twitter.name },
            { "name": "twitter:creator", "content": twitter.name },
        ]
    });

const buildSocialTags = ({url,   image, title, description, version, license, twitterName, facebookId }) => socialTags_({
    facebook: {
        type: "website",
        url: "https://package.elm-lang.org/packages/justgook/elm-image/latest/",
        title,
        description,
        image: url + image,
        image_width: 1200,
        image_height: 675,
        facebookId
    },
    twitter: {
        card: "summary_large_image",
        // domain: "z0.lv",
        title,
        description,
        image: url + image,
        url: "https://package.elm-lang.org/packages/justgook/elm-image/latest/",
        label1: "Version",
        data1: version,
        label2: "License",
        data2: license,
        name: twitterName
    }
});


module.exports = {
    plugins: {
        // "posthtml-content": {
        //     start: (str) => str.replace(/#GAME_URL#/g, `${process.env.GAME}.age.bin`)
        // },
        // "posthtml-style-to-file": {
        //     path: `${root}/app.css`,
        //     removeStyle: "all",
        // },
        "posthtml-head-elements": {
            headElements:
                {
                    "meta": [
                        {
                            "charset": "utf-8"
                        },

                        {
                            "http-equiv": "X-UA-Compatible",
                            "content": "IE=edge"
                        },
                        {
                            "name": "description",
                            "content": info.description
                        },
                        {
                            "name": "viewport",
                            "content": "width=device-width, initial-scale=1"
                        }
                    ].concat(buildSocialTags(info).meta),
                    "title": info.title,

                    // "base": [
                    //     {
                    //         "href": "/"
                    //     }
                    // ],
                    "link": [
                        { "rel": "icon", "href": info.favicon },
                        // { "rel": "stylesheet", href: "app.css" }
                    ],

                    "script": [
                        { "src": `bundle.js` }
                    ]
                }

        },
        "posthtml-favicons": {
            outDir: `${root}`,
            configuration: {
                path: "",                                                   // Path for overriding default icons path. `string`
                appName: info.title,                                        // Your application"s name. `string`
                appShortName: process.env.GAME,                             // Your application"s short_name. `string`. Optional. If not set, appName will be used
                appDescription: info.description,                           // Your application"s description. `string`
                developerName: packageJson.author.name,                     // Your (or your developer"s) name. `string`
                developerURL: packageJson.author.url,                       // Your (or your developer"s) URL. `string`
                dir: "auto",                                                // Primary text direction for name, short_name, and description
                lang: "en-US",                                              // Primary language for name and short_name
                background: "#000",                                         // Background colour for flattened icons. `string`
                theme_color: "#000",                                        // Theme color user for example in Android"s task switcher. `string`
                appleStatusBarStyle: "black-translucent",                   // Style for Apple status bar: "black-translucent", "default", "black". `string`
                display: "fullscreen",                                      // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
                orientation: "any",                                         // Default orientation: "any", "natural", "portrait" or "landscape". `string`
                scope: "",                                                  // set of URLs that the browser considers within your app
                start_url: "",                                              // Start URL when launching the application from a device. `string`
                version: info.version,                                      // Your application"s version string. `string`
                logging: false,                                             // Print logs to console? `boolean`
                pixel_art: false,                                           // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
                loadManifestWithCredentials: false,                         // Browsers don"t send cookies when fetching a manifest, enable this to fix that. `boolean`
                icons: {
                    // Platform Options:
                    // - offset - offset in percentage
                    // - background:
                    //   * false - use default
                    //   * true - force use default, e.g. set background for Android icons
                    //   * color - set background for the specified icons
                    //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
                    //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
                    //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
                    //
                    android: true,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    appleIcon: true,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    appleStartup: true,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    coast: true,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    firefox: true,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    windows: true,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    yandex: true                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                }
            }
        },
        "htmlnano": {}
    }

};
