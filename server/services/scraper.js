import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime/runtime"; //ini dibiarin aja, jangan dihapus
// import "core-js/stable";

export const scrapePost = async (req, res) => {
    try {
        const response = await axios.get('https://www.instagram.com/porosfilkom/');
        const html = response.data;
        const regex = /window\._sharedData\s?=\s?({.+);\s?<\/script>/
        const data = html.match(regex)[1]
        const json = JSON.parse(data)
        
        // monggo diambil data postnya dari json tsb. datanya ada di key edge_owner_to_timeline_media

        return res.status(200).send({
            message: 'success',
            data: json
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
}

