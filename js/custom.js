
    var dp1 = new DPlayer({
        container: document.getElementById('dplayer1'),
        screenshot: true,
        logo: 'images/logo-sstu-long.png',
        video: {
            quality: [{
                name: '标清',
                url: 'dist/2015_zx_ts.mp4',
                type: 'normal'
            },{
                name: '高清',
                url: 'dist/2015_zx_hd.mp4',
                type: 'normal'
            }, {
                name: '超清',
                url: 'dist/2015_zx_hd2.mp4',
                type: 'normal'
            }],
            defaultQuality: 1,
        }
    });
    var dp2 = new DPlayer ({
        container: document.getElementById('dplayer2'),
        screenshot: true,
        logo: 'images/logo-sstu-long.png',
        video: {
            quality: [{
                name: '标清',
                url: 'dist/2016_xw_sd.mp4',
                type: 'normal'
            },{
                name: '高清',
                url: 'dist/2016_xw_hd.mp4',
                type: 'normal'
            }, {
                name: '超清',
                url: 'dist/2016_xw_shd.mp4',
                type: 'normal'
            }],
            defaultQuality: 0,
        }    });
