// API Key IG POROS (ini masih api key lain, nanti harus ganti)
const accessToken = "IGQVJYWG5pM2RXLTlyWmVJR0JhdFpPeDFyam9OWFVPZAFFuWDdSVUJVZAkRtTlU4SFgzS0pIaDVfRTRLTm9kQlhWV191dWRoTzBiWmc4ZATZA4ZA2pWcF9aU0xucHk1Y2drdmhxUGtHejlIR21Vd2oyenpEYzh0RHN1LTcyQXlZA";



// Mengambil data dari Instagram berupa foto, tipe media(foto, video, album), thumbnail video, dan id postingan.
function getPost() {   
    return fetch('https://graph.instagram.com/me/media?fields=media_url,thumbnail_url,media_type&access_token=' + accessToken)
            .then(response => { 
                return response.json();
            })
            .then(response => { 
                return response.data;
            })
}



// Mengambil data dari Instagram berupa seluruh foto, thumbnail video, dan tipe media pada album menggunakan kode postingan
function getDetail(kode) {   
    return fetch(`https://graph.instagram.com/${kode}?fields=media_url,thumbnail_url,media_type&access_token=` + accessToken)
            .then(response => { 
                return response.json();
            })
            .then(response => { 
                return response;  
            })
}
