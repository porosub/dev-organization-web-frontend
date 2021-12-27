import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime/runtime"; //ini dibiarin aja, jangan dihapus
// import "core-js/stable";

export const scrapePost = async (req, res) => {
    try {
        const response = await axios.get('https://www.instagram.com/porosfilkom/');
        const html = response.data;
        const regex = /window\._sharedData\s?=\s?({.+);\s?<\/script>/
        const rawData = html.match(regex)[1]
        const jsonData = JSON.parse(rawData)
        const timelines = jsonData.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges
        const result = timelines.map(timeline => ({
            display_url: timeline.node.display_url,
            caption: timeline.node.edge_media_to_caption.edges[0].node.text
        }))
        
        // monggo diambil data postnya dari json tsb. datanya ada di key edge_owner_to_timeline_media

        return res.status(200).send({
            message: 'success',
            data: result
        })
    } catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
}

