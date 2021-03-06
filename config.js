// Only Require if you are not using env vars
const fs = require('fs');

module.exports = {
    session: JSON.parse(process.env.SESSION || fs.readFileSync(__dirname + '/session.json', { encoding: 'utf8' })), //if not using config vars create a file and use
    pmpermit_enabled: process.env.PMPERMIT_ENABLED || "true",
    mongodb_url: process.env.MONGODB_URL || "",
    pmpermit_mutetime: process.env.PMPERMIT_MUTETIME || "1800",
    yt_data_api_key: process.env.YT_DATA_API_KEY || "",
    default_tr_lang: process.env.DEFAULT_TR_LANG || "en"
}