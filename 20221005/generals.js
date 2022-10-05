

export function custom_script_root_path() {

    var customScriptsPath = $('script[src*="weebly_bridge.js"]')[0]
        .src
        .replace('/weebly_bridge.js', '');
        // .split('/')[2];
    // customScriptsPath = 'http://' + customScriptsPath;
    // console.log(customScriptsPath);

    return customScriptsPath;
}