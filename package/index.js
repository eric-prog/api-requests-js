const fs = require('fs')  
const path = require('path')  
const axios = require('axios')

async function getRequest(url, path_dir="") {
    extensions = ["jpg", "jpeg", "png", "gif", "webp", "mp4", "mp3"]
    checkDownload1 = extensions.includes(url.substring(url.lastIndexOf('.') + 1))
    checkDownload2 = extensions.includes(url.substr(url.length - 3))
    checkDownload3 = url.includes("https://images.unsplash.com")
    if (checkDownload1 || checkDownload2 || checkDownload3) {
        await downloadReq(url, path_dir)
    } else {
        return getReq(url)
    }
}

async function log(res) {
    res.then(data => {
        console.log(data)
    })
}

async function getReq(url) {
    try {
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        console.error(err);
    }
}

async function downloadReq(download_url, path_dir="") {
    extensions = ["jpg", "jpeg", "png", "gif", "webp", "mp4", "mp3"]
    const fileName = path.basename(download_url)
    let fileType = "." + download_url.substr(download_url.length - 3)
    if(extensions.includes(download_url.substring(download_url.lastIndexOf('.') + 1)) === false) {
        fileType = ".png"
    }
    const file = fileName + fileType
    const localFilePath = path.resolve(__dirname, path_dir, file)
    try {
        const response = await axios({
            method: 'GET',
            url: download_url,
            responseType: 'stream',
        });
  
        const stream = response.data.pipe(fs.createWriteStream(localFilePath))
            stream.on('finish', () => {
            console.log('Downloaded.')
        });
    } catch (err) { 
        throw new Error(err)
    }
}

module.exports = {
    getRequest,
    log
}
