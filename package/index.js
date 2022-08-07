const fs = require('fs')  
const path = require('path')  
const axios = require('axios')


async function getRequest(url, path_dir="") {
    extensions = ["jpg", "jpeg", "png", "gif", "webp", "mp4", "mp3"]
    checkDownload1 = extensions.includes(url.substring(url.lastIndexOf('.') + 1))
    checkDownload2 = extensions.includes(url.substr(url.length - 3))
    if (checkDownload1 || checkDownload2) {
        console.log("download")
        await downloadReq(url, path_dir)
    } else {
        console.log("normal")
        await getReq(url)
    }
}


async function getReq(url) {
    axios.get(url).then(function (res) {
        return res
    })
    .catch(function (error) {
        console.log(error);
    })
}


async function downloadReq(download_url, path_dir="") {
    const fileName = path.basename(download_url)
    const fileType = "." + download_url.substr(download_url.length - 3)
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
    getRequest
}