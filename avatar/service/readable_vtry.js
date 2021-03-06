"use strict";
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t, e) {
        return window.setTimeout(t, 1e3 / 60)
    }
}(), window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout
}();
var vtryUtil = {},
    cropImg, deferred;
vtryUtil.cropModelSourceImage = function() {
    return deferred = $.Deferred(), cropImg = new Image, $(cropImg).one("load", cropModelSourceImageAfterLoad), cropImg.src = vtryCtrl.curModel.getFaceImgUrl(), deferred.promise()
};
var cropModelSourceImageAfterLoad = function() {
    var t = cropImg,
        e = vtryCtrl.curModel,
        i = (e.getFaceImgUrl(), e.sourceImgWidth),
        r = e.sourceImgHeight,
        o = $(window).width(),
        n = $(window).height(),
        a = document.createElement("canvas");
    a.width = o, a.height = n;
    var s = a.getContext("2d"),
        l = e.getFaceSizeLocation(),
        h = l.center[0],
        c = l.center[1],
        u = l.left[0],
        d = l.top[1],
        T = l.right[0],
        g = l.bottom[1],
        f = T - u,
        p = g - d,
        v = u - .2 * f,
        m = T + .2 * f,
        S = d - .2 * p,
        A = g + .4 * p,
        b = m - v,
        y = g - S;
    b > i && (v = 0, m = i), v = Math.max(v, 0), m = Math.min(m, i), y > r && (S = 0, A = r), S = Math.max(S, 0), A = Math.min(A, r);
    var b = m - v,
        y = A - S,
        P = 1,
        M = 0,
        w = 0,
        G = 0,
        E = 0,
        C = b / y,
        x = o / n;
    if (x > C) {
        P = n / y;
        var b = y * x;
        v = h - b / 2, m = h + b / 2, v = Math.max(v, 0), m = Math.min(m, i), b = m - v, w = 0, E = n, G = b * P, M = (o - G) / 2
    } else {
        P = o / b;
        var y = b / x;
        S = c - y / 2, A = c + y / 2, S = Math.max(S, 0), A = Math.min(A, r), y = A - S, M = 0, G = o, E = y * P, w = (n - E) / 2
    }
    s.fillStyle = "#333333", s.fillRect(0, 0, a.width, a.height), v = Math.round(v), S = Math.round(S), b = Math.round(b), y = Math.round(y), M = Math.round(M), w = Math.round(w), G = Math.round(G), E = Math.round(E), s.drawImage(t, v, S, b, y, M, w, G, E);
    var R = {};
    R.scale = P, R.screenW = o, R.screenH = n, R.xCrop = v, R.yCrop = S, R.xDest = M, R.yDest = w, R.cropImgUrl = a.toDataURL("image/jpeg", .9), vtryCtrl.curModel.setCropInfo(R), deferred.resolve(R)
};
! function(t, e) {
    t(function() {
        function t(t, e) {
            return null != t && null != e && t.toLowerCase() === e.toLowerCase()
        }

        function i(t, e) {
            var i, r, o = t.length;
            if (!o || !e) return !1;
            for (i = e.toLowerCase(), r = 0; o > r; ++r)
                if (i === t[r].toLowerCase()) return !0;
            return !1
        }

        function r(t) {
            for (var e in t) s.call(t, e) && (t[e] = new RegExp(t[e], "i"))
        }

        function o(t, e) {
            this.ua = t || "", this._cache = {}, this.maxPhoneWidth = e || 600
        }
        var n = {};
        n.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo 3DS",
                Amoi: "Amoi",
                INQ: "INQ",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T360|SM-T533",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                LenovoTablet: "Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android.*\\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9",
                JXDTablet: "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                Hudl: "Hudl HT7S3",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                Tizen: "Tizen",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Puffin: "Puffin",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: "Firefox/[VER]",
                Fennec: "Fennec/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                "Opera Mini": "Opera Mini/[VER]",
                "Opera Mobi": "Version/[VER]",
                "UC Browser": "UC Browser[VER]",
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE/[VER]",
                "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        }, n.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var a, s = Object.prototype.hasOwnProperty;
        return n.FALLBACK_PHONE = "UnknownPhone", n.FALLBACK_TABLET = "UnknownTablet", n.FALLBACK_MOBILE = "UnknownMobile", a = "isArray" in Array ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            function() {
                var t, e, i, o, l, h, c = n.mobileDetectRules;
                for (t in c.props)
                    if (s.call(c.props, t)) {
                        for (e = c.props[t], a(e) || (e = [e]), l = e.length, o = 0; l > o; ++o) i = e[o], h = i.indexOf("[VER]"), h >= 0 && (i = i.substring(0, h) + "([\\w._\\+]+)" + i.substring(h + 5)), e[o] = new RegExp(i, "i");
                        c.props[t] = e
                    }
                r(c.oss), r(c.phones), r(c.tablets), r(c.uas), r(c.utils), c.oss0 = {
                    WindowsPhoneOS: c.oss.WindowsPhoneOS,
                    WindowsMobileOS: c.oss.WindowsMobileOS
                }
            }(), n.findMatch = function(t, e) {
                for (var i in t)
                    if (s.call(t, i) && t[i].test(e)) return i;
                return null
            }, n.findMatches = function(t, e) {
                var i = [];
                for (var r in t) s.call(t, r) && t[r].test(e) && i.push(r);
                return i
            }, n.getVersionStr = function(t, e) {
                var i, r, o, a, l = n.mobileDetectRules.props;
                if (s.call(l, t))
                    for (i = l[t], o = i.length, r = 0; o > r; ++r)
                        if (a = i[r].exec(e), null !== a) return a[1];
                return null
            }, n.getVersion = function(t, e) {
                var i = n.getVersionStr(t, e);
                return i ? n.prepareVersionNo(i) : NaN
            }, n.prepareVersionNo = function(t) {
                var e;
                return e = t.split(/[a-z._ \/\-]/i), 1 === e.length && (t = e[0]), e.length > 1 && (t = e[0] + ".", e.shift(), t += e.join("")), Number(t)
            }, n.isMobileFallback = function(t) {
                return n.detectMobileBrowsers.fullPattern.test(t) || n.detectMobileBrowsers.shortPattern.test(t.substr(0, 4))
            }, n.isTabletFallback = function(t) {
                return n.detectMobileBrowsers.tabletPattern.test(t)
            }, n.prepareDetectionCache = function(t, i, r) {
                if (t.mobile === e) {
                    var a, s, l;
                    return (s = n.findMatch(n.mobileDetectRules.tablets, i)) ? (t.mobile = t.tablet = s, void(t.phone = null)) : (a = n.findMatch(n.mobileDetectRules.phones, i)) ? (t.mobile = t.phone = a, void(t.tablet = null)) : void(n.isMobileFallback(i) ? (l = o.isPhoneSized(r), l === e ? (t.mobile = n.FALLBACK_MOBILE, t.tablet = t.phone = null) : l ? (t.mobile = t.phone = n.FALLBACK_PHONE, t.tablet = null) : (t.mobile = t.tablet = n.FALLBACK_TABLET, t.phone = null)) : n.isTabletFallback(i) ? (t.mobile = t.tablet = n.FALLBACK_TABLET, t.phone = null) : t.mobile = t.tablet = t.phone = null)
                }
            }, n.mobileGrade = function(t) {
                var e = null !== t.mobile();
                return t.os("iOS") && t.version("iPad") >= 4.3 || t.os("iOS") && t.version("iPhone") >= 3.1 || t.os("iOS") && t.version("iPod") >= 3.1 || t.version("Android") > 2.1 && t.is("Webkit") || t.version("Windows Phone OS") >= 7 || t.is("BlackBerry") && t.version("BlackBerry") >= 6 || t.match("Playbook.*Tablet") || t.version("webOS") >= 1.4 && t.match("Palm|Pre|Pixi") || t.match("hp.*TouchPad") || t.is("Firefox") && t.version("Firefox") >= 12 || t.is("Chrome") && t.is("AndroidOS") && t.version("Android") >= 4 || t.is("Skyfire") && t.version("Skyfire") >= 4.1 && t.is("AndroidOS") && t.version("Android") >= 2.3 || t.is("Opera") && t.version("Opera Mobi") > 11 && t.is("AndroidOS") || t.is("MeeGoOS") || t.is("Tizen") || t.is("Dolfin") && t.version("Bada") >= 2 || (t.is("UC Browser") || t.is("Dolfin")) && t.version("Android") >= 2.3 || t.match("Kindle Fire") || t.is("Kindle") && t.version("Kindle") >= 3 || t.is("AndroidOS") && t.is("NookTablet") || t.version("Chrome") >= 11 && !e || t.version("Safari") >= 5 && !e || t.version("Firefox") >= 4 && !e || t.version("MSIE") >= 7 && !e || t.version("Opera") >= 10 && !e ? "A" : t.os("iOS") && t.version("iPad") < 4.3 || t.os("iOS") && t.version("iPhone") < 3.1 || t.os("iOS") && t.version("iPod") < 3.1 || t.is("Blackberry") && t.version("BlackBerry") >= 5 && t.version("BlackBerry") < 6 || t.version("Opera Mini") >= 5 && t.version("Opera Mini") <= 6.5 && (t.version("Android") >= 2.3 || t.is("iOS")) || t.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || t.version("Opera Mobi") >= 11 && t.is("SymbianOS") ? "B" : (t.version("BlackBerry") < 5 || t.match("MSIEMobile|Windows CE.*Mobile") || t.version("Windows Mobile") <= 5.2, "C")
            }, n.detectOS = function(t) {
                return n.findMatch(n.mobileDetectRules.oss0, t) || n.findMatch(n.mobileDetectRules.oss, t)
            }, n.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, o.prototype = {
                constructor: o,
                mobile: function() {
                    return n.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return n.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return n.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === e && (this._cache.userAgent = n.findMatch(n.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                userAgents: function() {
                    return this._cache.userAgents === e && (this._cache.userAgents = n.findMatches(n.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                },
                os: function() {
                    return this._cache.os === e && (this._cache.os = n.detectOS(this.ua)), this._cache.os
                },
                version: function(t) {
                    return n.getVersion(t, this.ua)
                },
                versionStr: function(t) {
                    return n.getVersionStr(t, this.ua)
                },
                is: function(e) {
                    return i(this.userAgents(), e) || t(e, this.os()) || t(e, this.phone()) || t(e, this.tablet()) || i(n.findMatches(n.mobileDetectRules.utils, this.ua), e)
                },
                match: function(t) {
                    return t instanceof RegExp || (t = new RegExp(t, "i")), t.test(this.ua)
                },
                isPhoneSized: function(t) {
                    return o.isPhoneSized(t || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === e && (this._cache.grade = n.mobileGrade(this)), this._cache.grade
                }
            }, "undefined" != typeof window && window.screen ? o.isPhoneSized = function(t) {
                return 0 > t ? e : n.getDeviceSmallerSide() <= t
            } : o.isPhoneSized = function() {}, o._impl = n, o
    })
}(function(t) {
    if ("undefined" != typeof module && module.exports) return function(t) {
        module.exports = t()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(t) {
        window.MobileDetect = t()
    };
    throw new Error("unknown environment")
}());
var objectdetect = function() {
    var t = function(t, e) {
            var i = t.length;
            e || (e = new Uint32Array(i >> 2));
            for (var r = 0; i > r; r += 2) e[r >> 2] = 4899 * t[r] + 9617 * t[++r] + 1868 * t[++r] + 8192 >> 14;
            return e
        },
        e = function(t, e, i, r, o) {
            var n = i * e,
                a = ~~(e / r),
                s = ~~(i / r);
            o || (o = new t.constructor(a * i));
            for (var l = 0; a > l; ++l)
                for (var h = l, c = ~~(l * r), u = c + n; u > c; c += e) o[h] = t[c], h += a;
            for (var h = 0, d = 0, T = s * r; T > d; d += r)
                for (var c = ~~d * a, u = c + a; u > c; ++c) o[h] = o[c], ++h;
            return o
        },
        i = function(t, e, i, r) {
            r || (r = new t.constructor(e * i));
            for (var o = 0, n = 0; i > n; ++n) {
                for (var a = e >> 1; a >= 0; --a) {
                    var s = t[o + a];
                    r[o + a] = t[o + e - 1 - a], r[o + e - 1 - a] = s
                }
                o += e
            }
            return r
        },
        r = function(t, e, i, r) {
            var o = e * i;
            r || (r = new t.constructor(o));
            for (var n = r === t ? new t.constructor(o) : r, a = new t.constructor(o), s = 2; e - 2 > s; ++s)
                for (var l = s, h = 0; i > h; ++h) n[l] = .1117 * t[l - 2] + .2365 * t[l - 1] + .3036 * t[l] + .2365 * t[l + 1] + .1117 * t[l + 2], l += e;
            for (var s = 0; e > s; ++s)
                for (var l = s + e, h = 2; i - 2 > h; ++h) l += e, a[l] = .1117 * n[l - e - e] + .2365 * n[l - e] + .3036 * n[l] + .2365 * n[l + e] + .1117 * n[l + e + e];
            for (var c = Math.abs, s = 2; e - 2 > s; ++s)
                for (var l = s + e, h = 2; i - 2 > h; ++h) l += e, r[l] = c(-a[l - 1 - e] + a[l + 1 - e] - 2 * a[l - 1] + 2 * a[l + 1] - a[l - 1 + e] + a[l + 1 + e]) + c(a[l - 1 - e] + 2 * a[l - e] + a[l + 1 - e] - a[l - 1 + e] - 2 * a[l + e] - a[l + 1 + e]);
            return r
        },
        o = function(t, e, i, r) {
            var o = e + 1;
            r || (r = new Uint32Array(e * i + o + i));
            for (var n = i * o; n >= 0; n -= o) r[n] = 0;
            for (var a = 1; e >= a; ++a) {
                var s = 0,
                    l = a;
                r[a] = 0;
                for (var h = 1; i >= h; ++h) s += t[l - h], l += o, r[l] = r[l - 1] + s
            }
            return r
        },
        n = function(t, e, i, r) {
            var o = e + 1;
            r || (r = new Uint32Array(e * i + o + i));
            for (var n = i * o; n >= 0; n -= o) r[n] = 0;
            for (var a = 1; e >= a; ++a) {
                var s = 0,
                    l = a;
                r[a] = 0;
                for (var h = 1; i >= h; ++h) {
                    var c = t[l - h];
                    s += c * c, l += o, r[l] = r[l - 1] + s
                }
            }
            return r
        },
        a = function(t, e, i, r) {
            var o = e + 1,
                n = i * o;
            r || (r = new Uint32Array(e * i + o + i));
            for (var a = n; a >= 0; a -= o) r[a] = 0;
            for (var a = 0; o > a; ++a) r[a] = 0;
            for (var s = 0, l = 0; i > l; ++l) {
                for (var h = 0; e > h; ++h) r[s + o + 1] = t[s - l] + r[s], ++s;
                r[s + o] += r[s], s++
            }
            for (var h = e - 1; h > 0; --h)
                for (var s = h + n, l = i; l > 0; --l) s -= o, r[s + o] += r[s] + r[s + 1];
            return r
        },
        s = function(t, e, i) {
            var r = t.length;
            i || (i = t), e || (e = 5);
            for (var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; r > n; n += e) ++o[t[n]];
            for (var a = 255 * e / r, s = 0, n = 0; 256 > n; ++n) {
                var l = o[n];
                s = l += s, o[n] = l * a
            }
            for (var n = 0; r > n; ++n) i[n] = o[t[n]];
            return i
        },
        l = function(t, e) {
            e || (e = new t.constructor(t));
            for (var i = t[0], r = 1, o = t.length - 1; o > r;) {
                ++r;
                for (var n = 0, a = t[++r]; a > n; ++n) {
                    if (t[++r])
                        for (var s = r + 5 * t[++r]; s > r;) {
                            e[r + 1] = i - t[r + 1];
                            var l = t[r + 3];
                            e[r + 3] = t[r + 4], e[r + 4] = l, r += 5
                        } else
                            for (var s = r + 5 * t[++r]; s > r;) e[r + 1] = i - t[r + 1] - t[r + 3], r += 5;
                    r += 3
                }
            }
            return e
        },
        h = function(t, e, i, r) {
            e += 1, r || (r = new Float32Array(t.length));
            var o = new Uint32Array(r.buffer);
            o[0] = t[0], o[1] = t[1];
            for (var n = 1, a = 1, s = t.length - 1; s > a;) {
                r[++n] = t[++a];
                for (var l = o[++n] = t[++a], h = 0, c = l; c > h; ++h) {
                    var u = r[++n] = t[++a],
                        d = o[++n] = 3 * t[++a];
                    if (u)
                        for (var T = n + d; T > n;) o[++n] = t[++a] + t[++a] * e, o[++n] = t[++a] * (e + 1) + (t[++a] * (e - 1) << 16), r[++n] = t[++a];
                    else
                        for (var T = n + d; T > n;) o[++n] = t[++a] + t[++a] * e, o[++n] = t[++a] + (t[++a] * e << 16), r[++n] = t[++a];
                    for (var g = 1 / t[++a], f = 0; d > f;) r[n - f] *= g, f += 3;
                    0 > g ? (r[n + 2] = t[++a], r[n + 1] = t[++a], n += 2) : (r[++n] = t[++a], r[++n] = t[++a])
                }
            }
            return r.subarray(0, n + 1)
        },
        c = function(t, e, i, r, o, n, a, s) {
            o += 1, n += 1;
            for (var l = new Uint32Array(s.buffer), h = l[0], c = l[1], u = c * o, d = h * c, T = 1 / d, g = o * a, f = [], p = 0; o > p + h; p += a)
                for (var v = p, m = 0; n > m + c; m += a) {
                    var S = v + h,
                        A = v + u,
                        b = A + h,
                        y = !1;
                    if (r) {
                        var P = (r[v] - r[S] - r[A] + r[b]) * T;
                        if (60 > P || P > 200) {
                            y = !0, v += g;
                            continue
                        }
                    }
                    for (var M = t[v] - t[S] - t[A] + t[b], w = (i[v] - i[S] - i[A] + i[b]) * d - M * M, G = w > 1 ? Math.sqrt(w) : 1, E = !0, C = 1, x = s.length - 1; x > C;) {
                        for (var R = s[++C], I = 0, B = 0, D = l[++C]; D > B; ++B) {
                            var H = 0;
                            if (l[++C])
                                for (var F = C + l[++C]; F > C;) {
                                    var L = v + l[++C],
                                        _ = l[++C],
                                        O = L + (65535 & _),
                                        V = L + (_ >> 16 & 65535);
                                    H += s[++C] * (e[L] - e[O] - e[V] + e[O + V - L])
                                } else
                                    for (var F = C + l[++C]; F > C;) {
                                        var L = v + l[++C],
                                            _ = l[++C],
                                            O = L + (65535 & _),
                                            V = L + (_ >> 16 & 65535);
                                        H += s[++C] * (t[L] - t[O] - t[V] + t[O + V - L])
                                    }
                            I += s[C + (H > G ? 2 : 1)], C += 2
                        }
                        if (R > I) {
                            E = !1;
                            break
                        }
                    }
                    E && f.push([p, m, h, c]), v += g
                }
            return f
        },
        u = function(t, e, i) {
            var r = t.length;
            i || (i = .25);
            for (var o = 0, n = new Array(r), a = 0; r > a; ++a) n[a] = 0;
            for (var s = Math.abs, l = Math.min, a = 0; r > a; ++a) {
                for (var h = !1, c = 0; a > c; ++c) {
                    var u = t[a],
                        d = t[c],
                        T = i * (l(u[2], d[2]) + l(u[3], d[3]));
                    if (s(u[0] - d[0]) <= T && s(u[1] - d[1]) <= T && s(u[0] + u[2] - d[0] - d[2]) <= T && s(u[1] + u[3] - d[1] - d[3]) <= T) {
                        n[a] = n[c], h = !0;
                        break
                    }
                }
                h || (n[a] = o++)
            }
            for (var g = new Array(o), a = 0; o > a; ++a) g[a] = [0, 0, 0, 0, 0];
            for (var a = 0; r > a; ++a) {
                var f = t[a],
                    p = g[n[a]];
                p[0] += f[0], p[1] += f[1], p[2] += f[2], p[3] += f[3], ++p[4]
            }
            for (var a = 0; o > a; ++a) {
                var v = g[a][4];
                if (v >= e) {
                    var p = g[a];
                    v = 1 / v, p[0] *= v, p[1] *= v, p[2] *= v, p[3] *= v
                } else g.splice(a, 1)
            }
            for (var m = [], a = 0; o > a; ++a) {
                for (var S = g[a], c = a + 1; o > c; ++c) {
                    var A = g[c],
                        b = A[2] * i,
                        y = A[3] * i;
                    if (S[0] >= A[0] - b && S[1] >= A[1] - y && S[0] + S[2] <= A[0] + A[2] + b && S[1] + S[3] <= A[1] + A[3] + y || A[0] >= S[0] - b && A[1] >= S[1] - y && A[0] + A[2] <= S[0] + S[2] + b && A[1] + A[3] <= S[1] + S[3] + y) break
                }
                c === o && m.push(S)
            }
            return m
        },
        d = function() {
            function t(t, e, i, r) {
                this.canvas = document.createElement("canvas"), this.canvas.width = t, this.canvas.height = e, this.context = this.canvas.getContext("2d"), this.tilted = r.tilted, this.scaleFactor = i, this.numScales = ~~(Math.log(Math.min(t / r[0], e / r[1])) / Math.log(i)), this.scaledGray = new Uint32Array(t * e), this.compiledClassifiers = [];
                for (var o = 1, n = 0; n < this.numScales; ++n) {
                    var a = ~~(t / o);
                    this.compiledClassifiers[n] = objectdetect.compileClassifier(r, a), o *= i
                }
            }
            return t.prototype.detect = function(t, e, i, r, o) {
                void 0 === i && (i = 1), void 0 === e && (e = 1);
                var n = this.canvas.width,
                    a = this.canvas.height;
                r ? this.context.drawImage(t, r[0], r[1], r[2], r[3], 0, 0, n, a) : this.context.drawImage(t, 0, 0, n, a);
                var s = this.context.getImageData(0, 0, n, a).data;
                this.gray = objectdetect.convertRgbaToGrayscale(s, this.gray);
                for (var l = [], h = 1, c = 0; c < this.numScales; ++c) {
                    var u = ~~(n / h),
                        d = ~~(a / h);
                    1 === h ? this.scaledGray.set(this.gray) : this.scaledGray = objectdetect.rescaleImage(this.gray, n, a, h, this.scaledGray), o && (this.canny = objectdetect.computeCanny(this.scaledGray, u, d, this.canny), this.cannySat = objectdetect.computeSat(this.canny, u, d, this.cannySat)), this.sat = objectdetect.computeSat(this.scaledGray, u, d, this.sat), this.ssat = objectdetect.computeSquaredSat(this.scaledGray, u, d, this.ssat), this.tilted && (this.rsat = objectdetect.computeRsat(this.scaledGray, u, d, this.rsat));
                    for (var T = objectdetect.detect(this.sat, this.rsat, this.ssat, this.cannySat, u, d, i, this.compiledClassifiers[c]), g = T.length - 1; g >= 0; --g) {
                        var f = T[g];
                        f[0] *= h, f[1] *= h, f[2] *= h, f[3] *= h
                    }
                    l = l.concat(T), h *= this.scaleFactor
                }
                return (e ? objectdetect.groupRectangles(l, e) : l).sort(function(t, e) {
                    return e[4] - t[4]
                })
            }, t
        }();
    return {
        convertRgbaToGrayscale: t,
        rescaleImage: e,
        mirrorImage: i,
        computeCanny: r,
        equalizeHistogram: s,
        computeSat: o,
        computeRsat: a,
        computeSquaredSat: n,
        mirrorClassifier: l,
        compileClassifier: h,
        detect: c,
        groupRectangles: u,
        detector: d
    }
}();
! function(t) {
    var e = [24, 24, -5.042550086975098, 9, 0, 2, 6, 4, 12, 9, -1, 6, 7, 12, 3, 3, -.031511999666690826, 2.087538003921509, -2.217210054397583, 0, 2, 6, 4, 12, 7, -1, 10, 4, 4, 7, 3, .012396000325679779, -1.863394021987915, 1.327204942703247, 0, 2, 3, 9, 18, 9, -1, 3, 12, 18, 3, 3, .021927999332547188, -1.5105249881744385, 1.062572956085205, 0, 2, 8, 18, 9, 6, -1, 8, 20, 9, 2, 3, .005752999801188707, -.8746389746665955, 1.1760339736938477, 0, 2, 3, 5, 4, 19, -1, 5, 5, 2, 19, 2, .015014000236988068, -.7794569730758667, 1.260841965675354, 0, 2, 6, 5, 12, 16, -1, 6, 13, 12, 8, 2, .09937100112438202, .5575129985809326, -1.8743000030517578, 0, 2, 5, 8, 12, 6, -1, 5, 11, 12, 3, 2, .0027340000960975885, -1.6911929845809937, .44009700417518616, 0, 2, 11, 14, 4, 10, -1, 11, 19, 4, 5, 2, -.018859000876545906, -1.4769539833068848, .44350099563598633, 0, 2, 4, 0, 7, 6, -1, 4, 3, 7, 3, 2, .0059739998541772366, -.8590919971466064, .8525559902191162, -4.9842400550842285, 16, 0, 2, 6, 6, 12, 6, -1, 6, 8, 12, 2, 3, -.02111000008881092, 1.2435649633407593, -1.571300983428955, 0, 2, 6, 4, 12, 7, -1, 10, 4, 4, 7, 3, .02035599946975708, -1.6204780340194702, 1.1817760467529297, 0, 2, 1, 8, 19, 12, -1, 1, 12, 19, 4, 3, .02130899950861931, -1.941593050956726, .7006909847259521, 0, 2, 0, 2, 24, 3, -1, 8, 2, 8, 3, 3, .09166000038385391, -.5567010045051575, 1.7284419536590576, 0, 2, 9, 9, 6, 15, -1, 9, 14, 6, 5, 3, .036288000643253326, .2676379978656769, -2.183181047439575, 0, 2, 5, 6, 14, 10, -1, 5, 11, 14, 5, 2, -.019109999760985374, -2.673021078109741, .45670801401138306, 0, 2, 5, 0, 14, 9, -1, 5, 3, 14, 3, 3, .00825399998575449, -1.0852910280227661, .5356420278549194, 0, 2, 13, 11, 9, 6, -1, 16, 11, 3, 6, 3, .018355000764131546, -.35200199484825134, .9333919882774353, 0, 2, 7, 5, 6, 10, -1, 9, 5, 2, 10, 3, -.0070569999516010284, .9278209805488586, -.6634989976882935, 0, 2, 10, 8, 6, 10, -1, 12, 8, 2, 10, 3, -.009877000004053116, 1.1577470302581787, -.29774799942970276, 0, 2, 2, 5, 4, 9, -1, 4, 5, 2, 9, 2, .015814000740647316, -.4196060001850128, 1.3576040267944336, 0, 2, 18, 0, 6, 11, -1, 20, 0, 2, 11, 3, -.02070000022649765, 1.4590020179748535, -.197393998503685, 0, 2, 0, 6, 24, 13, -1, 8, 6, 8, 13, 3, -.13760800659656525, 1.118675947189331, -.5291550159454346, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .014318999834358692, -.35127198696136475, 1.1440860033035278, 0, 2, 7, 18, 10, 6, -1, 7, 20, 10, 2, 3, .0102530000731349, -.6085060238838196, .7709850072860718, 0, 2, 5, 7, 14, 12, -1, 5, 13, 14, 6, 2, .09150800108909607, .3881779909133911, -1.512294054031372, -4.6551899909973145, 27, 0, 2, 0, 3, 24, 3, -1, 8, 3, 8, 3, 3, .06974700093269348, -1.0130879878997803, 1.4687349796295166, 0, 2, 5, 8, 15, 6, -1, 5, 11, 15, 3, 2, .03150299936532974, -1.6463639736175537, 1.0000629425048828, 0, 2, 9, 6, 5, 14, -1, 9, 13, 5, 7, 2, .014260999858379364, .464803010225296, -1.5959889888763428, 0, 2, 9, 5, 6, 10, -1, 11, 5, 2, 10, 3, .014453000389039516, -.655119001865387, .8302180171012878, 0, 2, 6, 6, 3, 12, -1, 6, 12, 3, 6, 2, -.0030509999487549067, -1.398231029510498, .42550599575042725, 0, 2, 3, 21, 18, 3, -1, 9, 21, 6, 3, 3, .03272299841046333, -.5070260167121887, 1.052610993385315, 0, 2, 5, 6, 13, 6, -1, 5, 8, 13, 2, 3, -.007296000141650438, .3635689914226532, -1.3464889526367188, 0, 2, 18, 1, 6, 15, -1, 18, 1, 3, 15, 2, .05042500048875809, -.30461400747299194, 1.4504129886627197, 0, 2, 1, 1, 6, 15, -1, 4, 1, 3, 15, 2, .04687900096178055, -.402862012386322, 1.2145609855651855, 0, 2, 0, 8, 24, 15, -1, 8, 8, 8, 15, 3, -.06935899704694748, 1.0539360046386719, -.45719701051712036, 0, 3, 5, 6, 14, 12, -1, 5, 6, 7, 6, 2, 12, 12, 7, 6, 2, -.0490339994430542, -1.6253089904785156, .15378999710083008, 0, 2, 2, 12, 21, 12, -1, 2, 16, 21, 4, 3, .08482799679040909, .2840299904346466, -1.5662059783935547, 0, 2, 8, 1, 4, 10, -1, 10, 1, 2, 10, 2, -.0017229999648407102, -1.0147459506988525, .23294800519943237, 0, 2, 2, 13, 20, 10, -1, 2, 13, 10, 10, 2, .11562199890613556, -.16732899844646454, 1.2804069519042969, 0, 2, 0, 1, 6, 13, -1, 2, 1, 2, 13, 3, -.05127999931573868, 1.516239047050476, -.30271100997924805, 0, 2, 20, 2, 4, 13, -1, 20, 2, 2, 13, 2, -.04270699992775917, 1.763192057609558, -.05183200165629387, 0, 2, 0, 5, 22, 19, -1, 11, 5, 11, 19, 2, .37178099155426025, -.3138920068740845, 1.5357979536056519, 0, 2, 18, 4, 6, 9, -1, 20, 4, 2, 9, 3, .019412999972701073, -.10017599910497665, .9365540146827698, 0, 2, 0, 3, 6, 11, -1, 2, 3, 2, 11, 3, .01743900030851364, -.40379899740219116, .9629300236701965, 0, 2, 12, 1, 4, 9, -1, 12, 1, 2, 9, 2, .03963899984955788, .1703909933567047, -2.960299015045166, 0, 2, 0, 6, 19, 3, -1, 0, 7, 19, 1, 3, -.009146999567747116, .8878679871559143, -.43818700313568115, 0, 2, 12, 1, 4, 9, -1, 12, 1, 2, 9, 2, .0017219999572262168, -.37218600511550903, .40018901228904724, 0, 2, 8, 1, 4, 9, -1, 10, 1, 2, 9, 2, .03023100085556507, .06592400372028351, -2.6469180583953857, 0, 3, 5, 5, 14, 14, -1, 12, 5, 7, 7, 2, 5, 12, 7, 7, 2, -.07879599928855896, -1.7491459846496582, .2847529947757721, 0, 2, 1, 10, 18, 2, -1, 1, 11, 18, 1, 2, .002111000008881092, -.9390810132026672, .2320519983768463, 0, 2, 17, 13, 4, 11, -1, 17, 13, 2, 11, 2, .027091000229120255, -.052664000540971756, 1.0756820440292358, 0, 2, 0, 4, 6, 9, -1, 0, 7, 6, 3, 3, -.044964998960494995, -1.8294479846954346, .09956199675798416, -4.453158855438232, 32, 0, 2, 6, 4, 12, 9, -1, 6, 7, 12, 3, 3, -.06570100039243698, 1.1558510065078735, -1.0716359615325928, 0, 2, 6, 5, 12, 6, -1, 10, 5, 4, 6, 3, .01583999954164028, -1.563472032546997, .7687709927558899, 0, 2, 0, 1, 24, 5, -1, 8, 1, 8, 5, 3, .14570899307727814, -.5745009779930115, 1.3808720111846924, 0, 2, 4, 10, 18, 6, -1, 4, 12, 18, 2, 3, .006138999946415424, -1.4570560455322266, .5161030292510986, 0, 3, 2, 17, 12, 6, -1, 2, 17, 6, 3, 2, 8, 20, 6, 3, 2, .006717999931424856, -.8353360295295715, .5852220058441162, 0, 2, 19, 3, 4, 13, -1, 19, 3, 2, 13, 2, .018518000841140747, -.3131209909915924, 1.1696679592132568, 0, 2, 1, 3, 4, 13, -1, 3, 3, 2, 13, 2, .019958000630140305, -.4344260096549988, .9544690251350403, 0, 2, 0, 1, 24, 23, -1, 8, 1, 8, 23, 3, -.27755001187324524, 1.4906179904937744, -.13815900683403015, 0, 2, 1, 7, 8, 12, -1, 1, 11, 8, 4, 3, .009185999631881714, -.9636150002479553, .276654988527298, 0, 2, 14, 7, 3, 14, -1, 14, 14, 3, 7, 2, -.037737999111413956, -2.446410894393921, .23619599640369415, 0, 3, 3, 12, 16, 6, -1, 3, 12, 8, 3, 2, 11, 15, 8, 3, 2, .018463000655174255, .1753920018672943, -1.3423130512237549, 0, 2, 6, 6, 12, 6, -1, 6, 8, 12, 2, 3, -.011114999651908875, .4871079921722412, -.898518979549408, 0, 2, 8, 7, 6, 12, -1, 8, 13, 6, 6, 2, .033927999436855316, .17874200642108917, -1.634227991104126, 0, 2, 15, 15, 9, 6, -1, 15, 17, 9, 2, 3, -.035649001598358154, -1.9607399702072144, .18102499842643738, 0, 2, 1, 17, 18, 3, -1, 1, 18, 18, 1, 3, -.01143800001591444, .990106999874115, -.38103199005126953, 0, 2, 4, 4, 16, 12, -1, 4, 10, 16, 6, 2, -.06523600220680237, -2.579416036605835, .24753600358963013, 0, 2, 0, 1, 4, 20, -1, 2, 1, 2, 20, 2, -.04227200150489807, 1.4411840438842773, -.2950829863548279, 0, 2, 3, 0, 18, 2, -1, 3, 1, 18, 1, 2, .001921999966725707, -.4960860013961792, .6317359805107117, 0, 3, 1, 5, 20, 14, -1, 1, 5, 10, 7, 2, 11, 12, 10, 7, 2, -.1292179971933365, -2.3314270973205566, .05449699983000755, 0, 2, 5, 8, 14, 12, -1, 5, 12, 14, 4, 3, .022931000217795372, -.8444709777832031, .387380987405777, 0, 2, 3, 14, 7, 9, -1, 3, 17, 7, 3, 3, -.03412000089883804, -1.4431500434875488, .09842299669981003, 0, 2, 14, 15, 9, 6, -1, 14, 17, 9, 2, 3, .02622300013899803, .18223099410533905, -1.2586519718170166, 0, 2, 1, 15, 9, 6, -1, 1, 17, 9, 2, 3, .02223699912428856, .0698079988360405, -2.3820950984954834, 0, 3, 11, 6, 8, 10, -1, 15, 6, 4, 5, 2, 11, 11, 4, 5, 2, -.005824000108987093, .39332500100135803, -.27542799711227417, 0, 3, 5, 5, 14, 14, -1, 5, 5, 7, 7, 2, 12, 12, 7, 7, 2, .04365300014615059, .14832699298858643, -1.1368780136108398, 0, 2, 6, 0, 12, 5, -1, 10, 0, 4, 5, 3, .057266999036073685, .2462809979915619, -1.2687400579452515, 0, 2, 9, 0, 6, 9, -1, 9, 3, 6, 3, 3, .002340999897569418, -.754489004611969, .27163800597190857, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .012996000237762928, -.3639490008354187, .7095919847488403, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.026517000049352646, -2.32218599319458, .03574400022625923, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, -.005840000230818987, .4219430088996887, -.04818499833345413, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, -.016568999737501144, 1.1099940538406372, -.3484970033168793, 0, 2, 3, 8, 18, 4, -1, 9, 8, 6, 4, 3, -.06815700232982635, -3.3269989490509033, .21299000084400177, -4.386458873748779, 52, 0, 2, 6, 0, 12, 9, -1, 6, 3, 12, 3, 3, .03997400030493736, -1.2173449993133545, 1.082671046257019, 0, 2, 0, 0, 24, 6, -1, 8, 0, 8, 6, 3, .18819500505924225, -.48289400339126587, 1.4045250415802002, 0, 2, 4, 7, 16, 12, -1, 4, 11, 16, 4, 3, .07802700251340866, -1.0782150030136108, .7404029965400696, 0, 2, 11, 6, 6, 6, -1, 11, 6, 3, 6, 2, .00011899999663000926, -1.201997995376587, .3774920105934143, 0, 2, 0, 20, 24, 3, -1, 8, 20, 8, 3, 3, .08505699783563614, -.43939098715782166, 1.2647340297698975, 0, 2, 11, 6, 4, 9, -1, 11, 6, 2, 9, 2, .00897200033068657, -.18440499901771545, .4572640061378479, 0, 2, 4, 13, 15, 4, -1, 9, 13, 5, 4, 3, .008812000043690205, .3039669990539551, -.9599109888076782, 0, 2, 11, 6, 4, 9, -1, 11, 6, 2, 9, 2, -.023507999256253242, 1.2487529516220093, .04622799903154373, 0, 2, 9, 6, 4, 9, -1, 11, 6, 2, 9, 2, .0070039997808635235, -.5944210290908813, .5396329760551453, 0, 2, 9, 12, 6, 12, -1, 9, 18, 6, 6, 2, .033851999789476395, .2849609851837158, -1.4895249605178833, 0, 2, 1, 22, 18, 2, -1, 1, 23, 18, 1, 2, -.0032530000898987055, .4812079966068268, -.5271239876747131, 0, 2, 10, 7, 4, 10, -1, 10, 12, 4, 5, 2, .029097000136971474, .26743900775909424, -1.6007850170135498, 0, 2, 6, 7, 8, 10, -1, 6, 12, 8, 5, 2, -.008479000069200993, -1.310763955116272, .15243099629878998, 0, 2, 7, 6, 10, 6, -1, 7, 8, 10, 2, 3, -.01079500000923872, .45613598823547363, -.7205089926719666, 0, 2, 0, 14, 10, 4, -1, 0, 16, 10, 2, 2, -.024620000272989273, -1.7320619821548462, .0683630034327507, 0, 2, 6, 18, 18, 2, -1, 6, 19, 18, 1, 2, .0037380000576376915, -.19303299486637115, .6824349761009216, 0, 2, 1, 1, 22, 3, -1, 1, 2, 22, 1, 3, -.012264000251889229, -1.6095290184020996, .07526800036430359, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, -.004867000039666891, .7428650259971619, -.21510200202465057, 0, 2, 2, 4, 6, 15, -1, 5, 4, 3, 15, 2, .07672599703073502, -.2683509886264801, 1.309414029121399, 0, 2, 20, 4, 4, 10, -1, 20, 4, 2, 10, 2, .028578000143170357, -.058793000876903534, 1.2196329832077026, 0, 2, 0, 4, 4, 10, -1, 2, 4, 2, 10, 2, .019694000482559204, -.3514289855957031, .8492699861526489, 0, 3, 2, 16, 20, 6, -1, 12, 16, 10, 3, 2, 2, 19, 10, 3, 2, -.029093999415636063, -1.0507299900054932, .2980630099773407, 0, 2, 0, 12, 8, 9, -1, 4, 12, 4, 9, 2, -.02914400026202202, .8254780173301697, -.32687199115753174, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, .01974100060760975, .20452600717544556, -.8376020193099976, 0, 2, 5, 10, 6, 6, -1, 8, 10, 3, 6, 2, .0043299999088048935, .20577900111675262, -.6682980060577393, 0, 3, 11, 8, 12, 6, -1, 17, 8, 6, 3, 2, 11, 11, 6, 3, 2, -.03550099954009056, -1.2969900369644165, .13897499442100525, 0, 3, 0, 8, 12, 6, -1, 0, 8, 6, 3, 2, 6, 11, 6, 3, 2, -.016172999516129494, -1.3110569715499878, .07575199753046036, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, -.022151000797748566, -1.0524389743804932, .19241100549697876, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, -.022707000374794006, -1.3735309839248657, .06678099930286407, 0, 2, 8, 14, 9, 6, -1, 8, 16, 9, 2, 3, .016607999801635742, -.03713599964976311, .7784640192985535, 0, 2, 0, 16, 9, 6, -1, 0, 18, 9, 2, 3, -.013309000059962273, -.998507022857666, .12248100340366364, 0, 2, 10, 8, 6, 10, -1, 12, 8, 2, 10, 3, -.03373200073838234, 1.4461359977722168, .013151999562978745, 0, 2, 3, 19, 12, 3, -1, 9, 19, 6, 3, 2, .01693500019609928, -.37121298909187317, .5284219980239868, 0, 2, 2, 10, 20, 2, -1, 2, 11, 20, 1, 2, .0033259999472647905, -.5756850242614746, .3926190137863159, 0, 3, 2, 9, 18, 12, -1, 2, 9, 9, 6, 2, 11, 15, 9, 6, 2, .08364400267601013, .016116000711917877, -2.117327928543091, 0, 2, 3, 0, 18, 24, -1, 3, 0, 9, 24, 2, .2578519880771637, -.08160900324583054, .9878249764442444, 0, 3, 5, 6, 14, 10, -1, 5, 6, 7, 5, 2, 12, 11, 7, 5, 2, -.036566998809576035, -1.1512110233306885, .09645900130271912, 0, 3, 9, 5, 10, 12, -1, 14, 5, 5, 6, 2, 9, 11, 5, 6, 2, -.016445999965071678, .37315499782562256, -.14585399627685547, 0, 3, 4, 5, 12, 12, -1, 4, 5, 6, 6, 2, 10, 11, 6, 6, 2, -.003751999931409955, .26179298758506775, -.5815669894218445, 0, 2, 4, 14, 18, 3, -1, 4, 15, 18, 1, 3, -.006366000045090914, .7547739744186401, -.17055200040340424, 0, 2, 6, 13, 8, 8, -1, 6, 17, 8, 4, 2, -.0038499999791383743, .2265399992465973, -.6387640237808228, 0, 2, 3, 16, 18, 6, -1, 3, 19, 18, 3, 2, -.04549400135874748, -1.2640299797058105, .25260698795318604, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.023941000923514366, .870684027671814, -.2710469961166382, 0, 2, 6, 6, 12, 18, -1, 10, 6, 4, 18, 3, -.0775580033659935, -1.3901610374450684, .2361229956150055, 0, 2, 6, 1, 4, 14, -1, 8, 1, 2, 14, 2, .023614000529050827, .06614000350236893, -1.2645419836044312, 0, 2, 3, 2, 19, 2, -1, 3, 3, 19, 1, 2, -.002575000049546361, -.5384169816970825, .30379098653793335, 0, 2, 1, 8, 22, 13, -1, 12, 8, 11, 13, 2, .12010800093412399, -.35343000292778015, .5286620259284973, 0, 2, 8, 9, 11, 4, -1, 8, 11, 11, 2, 2, .0022899999748915434, -.5870199799537659, .2406100034713745, 0, 2, 0, 12, 15, 10, -1, 5, 12, 5, 10, 3, .06971699744462967, -.33348900079727173, .5191630125045776, 0, 2, 12, 16, 12, 6, -1, 16, 16, 4, 6, 3, -.04667000100016594, .697953999042511, -.014895999804139137, 0, 2, 0, 16, 12, 6, -1, 4, 16, 4, 6, 3, -.0501290000975132, .8614619970321655, -.25986000895500183, 0, 2, 19, 1, 5, 12, -1, 19, 5, 5, 4, 3, .03014799952507019, .19332799315452576, -.591310977935791, -4.129930019378662, 53, 0, 2, 0, 2, 24, 4, -1, 8, 2, 8, 4, 3, .09108500182628632, -.8923310041427612, 1.043423056602478, 0, 2, 6, 8, 12, 4, -1, 6, 10, 12, 2, 2, .012818999588489532, -1.2597670555114746, .5531709790229797, 0, 2, 7, 5, 9, 6, -1, 10, 5, 3, 6, 3, .015931999310851097, -.8625440001487732, .6373180150985718, 0, 2, 9, 17, 6, 6, -1, 9, 20, 6, 3, 2, .0022780001163482666, -.746392011642456, .5315560102462769, 0, 2, 0, 7, 22, 15, -1, 0, 12, 22, 5, 3, .03184099867939949, -1.2650489807128906, .36153900623321533, 0, 2, 4, 1, 17, 9, -1, 4, 4, 17, 3, 3, .002696000039577484, -.9829040169715881, .3601300120353699, 0, 2, 7, 5, 6, 10, -1, 9, 5, 2, 10, 3, -.01205500029027462, .6406840085983276, -.5012500286102295, 0, 2, 18, 1, 6, 8, -1, 18, 1, 3, 8, 2, .021324999630451202, -.24034999310970306, .8544800281524658, 0, 2, 0, 1, 6, 7, -1, 3, 1, 3, 7, 2, .030486000701785088, -.34273600578308105, 1.1428849697113037, 0, 2, 18, 0, 6, 22, -1, 18, 0, 3, 22, 2, -.045079998672008514, 1.097694993019104, -.17974600195884705, 0, 2, 0, 0, 6, 22, -1, 3, 0, 3, 22, 2, -.07170099765062332, 1.5735000371932983, -.3143349885940552, 0, 2, 16, 7, 8, 16, -1, 16, 7, 4, 16, 2, .05921800062060356, -.27582401037216187, 1.0448570251464844, 0, 2, 2, 10, 19, 6, -1, 2, 12, 19, 2, 3, .0067010000348091125, -1.0974019765853882, .19801199436187744, 0, 2, 9, 9, 6, 12, -1, 9, 13, 6, 4, 3, .041046999394893646, .30547699332237244, -1.3287999629974365, 0, 2, 2, 15, 17, 6, -1, 2, 17, 17, 2, 3, -.0008549999911338091, .25807100534439087, -.7005289793014526, 0, 2, 14, 7, 3, 14, -1, 14, 14, 3, 7, 2, -.03036000020802021, -1.2306419610977173, .22609399259090424, 0, 3, 5, 6, 8, 10, -1, 5, 6, 4, 5, 2, 9, 11, 4, 5, 2, -.012930000200867653, .407586008310318, -.512345016002655, 0, 2, 15, 8, 9, 11, -1, 18, 8, 3, 11, 3, .03736799955368042, -.09475500136613846, .6176509857177734, 0, 2, 0, 8, 9, 11, -1, 3, 8, 3, 11, 3, .024434000253677368, -.41100600361824036, .4763050079345703, 0, 2, 8, 6, 10, 18, -1, 8, 15, 10, 9, 2, .05700799822807312, .2524929940700531, -.6866980195045471, 0, 2, 7, 7, 3, 14, -1, 7, 14, 3, 7, 2, -.016313999891281128, -.9392840266227722, .11448100209236145, 0, 2, 0, 14, 24, 8, -1, 8, 14, 8, 8, 3, -.176488995552063, 1.245108962059021, -.056519001722335815, 0, 2, 1, 10, 18, 14, -1, 10, 10, 9, 14, 2, .176146000623703, -.3252820074558258, .8279150128364563, 0, 2, 14, 12, 6, 6, -1, 14, 15, 6, 3, 2, -.0073910001665353775, .34783700108528137, -.1792909950017929, 0, 3, 7, 0, 10, 16, -1, 7, 0, 5, 8, 2, 12, 8, 5, 8, 2, .06089099869132042, .055098000913858414, -1.548077940940857, 0, 2, 10, 0, 9, 6, -1, 13, 0, 3, 6, 3, -.02912300080060959, -1.0255639553070068, .2410690039396286, 0, 2, 4, 3, 16, 4, -1, 12, 3, 8, 4, 2, -.04564899951219559, 1.0301599502563477, -.31672099232673645, 0, 2, 10, 0, 9, 6, -1, 13, 0, 3, 6, 3, .03733300045132637, .21620599925518036, -.8258990049362183, 0, 3, 1, 1, 20, 4, -1, 1, 1, 10, 2, 2, 11, 3, 10, 2, 2, -.024411000311374664, -1.59579598903656, .05113900080323219, 0, 2, 10, 0, 9, 6, -1, 13, 0, 3, 6, 3, -.05980699881911278, -1.031229019165039, .13092300295829773, 0, 2, 5, 0, 9, 6, -1, 8, 0, 3, 6, 3, -.03010600060224533, -1.4781630039215088, .03721199929714203, 0, 2, 8, 18, 10, 6, -1, 8, 20, 10, 2, 3, .007420999929308891, -.24024100601673126, .49333998560905457, 0, 2, 6, 3, 6, 9, -1, 8, 3, 2, 9, 3, -.0021909999195486307, .28941500186920166, -.57259601354599, 0, 2, 7, 3, 12, 6, -1, 7, 5, 12, 2, 3, .020860999822616577, -.23148399591445923, .6376590132713318, 0, 2, 0, 10, 18, 3, -1, 0, 11, 18, 1, 3, -.006699000019580126, -1.2107750177383423, .06401800364255905, 0, 2, 1, 10, 22, 3, -1, 1, 11, 22, 1, 3, .018758000805974007, .24461300671100616, -.9978669881820679, 0, 2, 5, 11, 8, 8, -1, 9, 11, 4, 8, 2, -.04432300105690956, -1.369918942451477, .036051999777555466, 0, 2, 12, 11, 6, 6, -1, 12, 11, 3, 6, 2, .022859999909996986, .21288399398326874, -1.039762020111084, 0, 2, 6, 11, 6, 6, -1, 9, 11, 3, 6, 2, -.000986000057309866, .3244360089302063, -.5429180264472961, 0, 2, 7, 10, 11, 6, -1, 7, 12, 11, 2, 3, .017239000648260117, -.2832390069961548, .4446820020675659, 0, 3, 0, 13, 24, 4, -1, 0, 13, 12, 2, 2, 12, 15, 12, 2, 2, -.03453100100159645, -2.310702085494995, -.0031399999279528856, 0, 3, 2, 4, 22, 12, -1, 13, 4, 11, 6, 2, 2, 10, 11, 6, 2, .06700699776411057, .28715699911117554, -.6448100209236145, 0, 2, 2, 0, 20, 17, -1, 12, 0, 10, 17, 2, .2377689927816391, -.27174800634384155, .8021910190582275, 0, 2, 14, 0, 2, 24, -1, 14, 0, 1, 24, 2, -.012903000228106976, -1.5317620038986206, .21423600614070892, 0, 2, 8, 0, 2, 24, -1, 9, 0, 1, 24, 2, .010514999739825726, .0770379975438118, -1.0581140518188477, 0, 2, 14, 1, 2, 22, -1, 14, 1, 1, 22, 2, .016969000920653343, .14306700229644775, -.8582839965820312, 0, 2, 8, 1, 2, 22, -1, 9, 1, 1, 22, 2, -.007246000226587057, -1.1020129919052124, .0649069994688034, 0, 2, 17, 6, 3, 18, -1, 18, 6, 1, 18, 3, .01055699959397316, .013964000158011913, .636014997959137, 0, 2, 6, 14, 9, 6, -1, 6, 16, 9, 2, 3, .006138000171631575, -.3454590141773224, .5629680156707764, 0, 2, 13, 14, 9, 4, -1, 13, 16, 9, 2, 2, .013158000074326992, .1992730051279068, -1.504032015800476, 0, 2, 3, 18, 18, 3, -1, 3, 19, 18, 1, 3, .003131000092253089, -.4090369939804077, .37796398997306824, 0, 3, 9, 4, 8, 18, -1, 13, 4, 4, 9, 2, 9, 13, 4, 9, 2, -.10920699685811996, -2.222707986831665, .12178199738264084, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, .008182000368833542, -.28652000427246094, .6789079904556274, -4.021809101104736, 62, 0, 2, 0, 2, 12, 4, -1, 6, 2, 6, 4, 2, .03134699910879135, -.8888459801673889, .9493680000305176, 0, 2, 6, 8, 14, 6, -1, 6, 11, 14, 3, 2, .0319180004298687, -1.1146880388259888, .48888999223709106, 0, 2, 7, 5, 6, 6, -1, 10, 5, 3, 6, 2, .006593999918550253, -1.0097689628601074, .49723801016807556, 0, 2, 10, 5, 6, 16, -1, 10, 13, 6, 8, 2, .026148000732064247, .25991299748420715, -1.2537480592727661, 0, 2, 1, 4, 9, 16, -1, 4, 4, 3, 16, 3, .012845000252127647, -.5713859796524048, .5965949892997742, 0, 2, 5, 0, 18, 9, -1, 5, 3, 18, 3, 3, .02634499967098236, -.5520319938659668, .30217400193214417, 0, 2, 9, 15, 5, 8, -1, 9, 19, 5, 4, 2, -.01508300006389618, -1.2871240377426147, .2235420048236847, 0, 2, 20, 0, 4, 9, -1, 20, 0, 2, 9, 2, -.03888700157403946, 1.7425049543380737, -.09974700212478638, 0, 2, 2, 0, 18, 3, -1, 2, 1, 18, 1, 3, -.005702999886125326, -1.0523240566253662, .1836259961128235, 0, 2, 5, 22, 19, 2, -1, 5, 23, 19, 1, 2, -.0014860000228509307, .5678420066833496, -.4674200117588043, 0, 2, 0, 0, 4, 9, -1, 2, 0, 2, 9, 2, -.02848600037395954, 1.308290958404541, -.2646090090274811, 0, 2, 5, 6, 19, 18, -1, 5, 12, 19, 6, 3, .06622499972581863, -.46210700273513794, .417495995759964, 0, 2, 0, 1, 6, 9, -1, 2, 1, 2, 9, 3, .008856999687850475, -.41474899649620056, .5920479893684387, 0, 3, 6, 5, 14, 12, -1, 13, 5, 7, 6, 2, 6, 11, 7, 6, 2, .011355999857187271, .3610309958457947, -.45781201124191284, 0, 2, 0, 1, 20, 2, -1, 0, 2, 20, 1, 2, -.002767999889329076, -.8923889994621277, .14199000597000122, 0, 2, 1, 2, 22, 3, -1, 1, 3, 22, 1, 3, .011246999725699425, .2935340106487274, -.9733060002326965, 0, 2, 2, 8, 7, 9, -1, 2, 11, 7, 3, 3, .007197000086307526, -.793349027633667, .18313400447368622, 0, 3, 2, 12, 22, 4, -1, 13, 12, 11, 2, 2, 2, 14, 11, 2, 2, .03176899999380112, .15523099899291992, -1.324563980102539, 0, 3, 0, 12, 22, 4, -1, 0, 12, 11, 2, 2, 11, 14, 11, 2, 2, .02517399936914444, .03421499952673912, -2.094813108444214, 0, 2, 9, 7, 6, 11, -1, 11, 7, 2, 11, 3, .007536000106483698, -.3945060074329376, .5133399963378906, 0, 2, 7, 1, 9, 6, -1, 10, 1, 3, 6, 3, .0328730009496212, .08837299793958664, -1.2814120054244995, 0, 2, 11, 2, 4, 10, -1, 11, 7, 4, 5, 2, -.0027379998937249184, .5528650283813477, -.4638499915599823, 0, 2, 6, 4, 12, 12, -1, 6, 10, 12, 6, 2, -.038075000047683716, -1.8497270345687866, .04594400152564049, 0, 2, 18, 1, 6, 15, -1, 18, 6, 6, 5, 3, -.03898400068283081, -.4822370111942291, .34760600328445435, 0, 2, 3, 15, 18, 3, -1, 3, 16, 18, 1, 3, .0028029999230057, -.4515469968318939, .4280630052089691, 0, 2, 18, 5, 6, 9, -1, 18, 8, 6, 3, 3, -.05414599925279617, -.8452079892158508, .1667490005493164, 0, 3, 1, 5, 16, 6, -1, 1, 5, 8, 3, 2, 9, 8, 8, 3, 2, -.008328000083565712, .3534829914569855, -.4716320037841797, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, .03377800062298775, .18463100492954254, -1.668666958808899, 0, 3, 0, 4, 24, 14, -1, 0, 4, 12, 7, 2, 12, 11, 12, 7, 2, -.1123809963464737, -1.2521569728851318, .03599200025200844, 0, 2, 13, 0, 4, 13, -1, 13, 0, 2, 13, 2, -.010408000089228153, -.8162040114402771, .23428599536418915, 0, 2, 7, 0, 4, 13, -1, 9, 0, 2, 13, 2, -.00494399992749095, -.9258469939231873, .10034800320863724, 0, 2, 11, 6, 6, 9, -1, 13, 6, 2, 9, 3, -.009302999824285507, .5649930238723755, -.1888190060853958, 0, 2, 8, 7, 6, 9, -1, 10, 7, 2, 9, 3, -.011749999597668648, .8030239939689636, -.38277000188827515, 0, 2, 13, 17, 9, 6, -1, 13, 19, 9, 2, 3, -.02321700006723404, -.8492699861526489, .19671200215816498, 0, 3, 2, 18, 14, 6, -1, 2, 18, 7, 3, 2, 9, 21, 7, 3, 2, .01686600036919117, -.40591898560523987, .5069530010223389, 0, 3, 3, 18, 18, 4, -1, 12, 18, 9, 2, 2, 3, 20, 9, 2, 2, -.024031000211834908, -1.5297520160675049, .2334499955177307, 0, 2, 0, 20, 15, 4, -1, 5, 20, 5, 4, 3, -.036945998668670654, .6300770044326782, -.3178040087223053, 0, 2, 9, 15, 15, 9, -1, 14, 15, 5, 9, 3, -.06156399846076965, .5862789750099182, -.012107999995350838, 0, 2, 4, 4, 16, 4, -1, 4, 6, 16, 2, 2, .021661000326275826, -.2562370002269745, 1.0409849882125854, 0, 2, 7, 6, 10, 6, -1, 7, 8, 10, 2, 3, -.003671000013127923, .2917110025882721, -.8328729867935181, 0, 2, 0, 14, 15, 10, -1, 5, 14, 5, 10, 3, .04484900087118149, -.3963319957256317, .4566200077533722, 0, 3, 7, 9, 10, 14, -1, 12, 9, 5, 7, 2, 7, 16, 5, 7, 2, .05719500035047531, .2102389931678772, -1.500480055809021, 0, 2, 7, 6, 6, 9, -1, 9, 6, 2, 9, 3, -.011342000216245651, .44071298837661743, -.38653799891471863, 0, 2, 3, 6, 18, 3, -1, 3, 7, 18, 1, 3, -.012004000134766102, .9395459890365601, -.10589499771595001, 0, 2, 0, 10, 18, 3, -1, 0, 11, 18, 1, 3, .022515999153256416, .009448000229895115, -1.6799509525299072, 0, 3, 3, 16, 18, 4, -1, 12, 16, 9, 2, 2, 3, 18, 9, 2, 2, -.019809000194072723, -1.0133639574050903, .2414660006761551, 0, 3, 4, 6, 14, 6, -1, 4, 6, 7, 3, 2, 11, 9, 7, 3, 2, .015891000628471375, -.3750759959220886, .4661409854888916, 0, 2, 13, 0, 2, 18, -1, 13, 0, 1, 18, 2, -.00914200022816658, -.8048409819602966, .17816999554634094, 0, 2, 9, 0, 2, 18, -1, 10, 0, 1, 18, 2, -.004474000073969364, -1.0562069416046143, .07330500334501266, 0, 2, 5, 7, 15, 10, -1, 10, 7, 5, 10, 3, .12742500007152557, .20165599882602692, -1.546792984008789, 0, 2, 1, 20, 21, 4, -1, 8, 20, 7, 4, 3, .04770300164818764, -.37937799096107483, .3788599967956543, 0, 2, 10, 5, 5, 18, -1, 10, 14, 5, 9, 2, .0536080002784729, .21220499277114868, -1.2399710416793823, 0, 3, 0, 2, 24, 6, -1, 0, 2, 12, 3, 2, 12, 5, 12, 3, 2, -.039680998772382736, -1.0257550477981567, .05128299817442894, 0, 3, 1, 1, 22, 8, -1, 12, 1, 11, 4, 2, 1, 5, 11, 4, 2, -.06732700020074844, -1.0304750204086304, .23005299270153046, 0, 2, 4, 0, 15, 9, -1, 4, 3, 15, 3, 3, .13337600231170654, -.20869000256061554, 1.2272510528564453, 0, 2, 0, 0, 24, 19, -1, 8, 0, 8, 19, 3, -.20919300615787506, .879298985004425, -.04425499960780144, 0, 2, 2, 21, 18, 3, -1, 11, 21, 9, 3, 2, -.06558900326490402, 1.0443429946899414, -.21682099997997284, 0, 2, 9, 7, 10, 4, -1, 9, 7, 5, 4, 2, .061882998794317245, .13798199594020844, -1.900905966758728, 0, 2, 5, 7, 10, 4, -1, 10, 7, 5, 4, 2, -.025578999891877174, -1.6607600450515747, .005843999795615673, 0, 3, 17, 8, 6, 16, -1, 20, 8, 3, 8, 2, 17, 16, 3, 8, 2, -.03482700139284134, .7994040250778198, -.08240699768066406, 0, 3, 1, 15, 20, 4, -1, 1, 15, 10, 2, 2, 11, 17, 10, 2, 2, -.018209999427199364, -.9607399702072144, .06632000207901001, 0, 2, 14, 15, 10, 6, -1, 14, 17, 10, 2, 3, .015070999972522259, .1989939957857132, -.7643300294876099, -3.883208990097046, 72, 0, 2, 3, 0, 16, 9, -1, 3, 3, 16, 3, 3, .04632499814033508, -1.0362670421600342, .8220149874687195, 0, 2, 15, 6, 7, 15, -1, 15, 11, 7, 5, 3, .015406999737024307, -1.2327589988708496, .29647698998451233, 0, 2, 9, 1, 6, 13, -1, 11, 1, 2, 13, 3, .012808999978005886, -.7585229873657227, .5798550248146057, 0, 2, 17, 2, 6, 14, -1, 17, 2, 3, 14, 2, .04915099963545799, -.3898389935493469, .8968030214309692, 0, 3, 3, 14, 12, 10, -1, 3, 14, 6, 5, 2, 9, 19, 6, 5, 2, .012621000409126282, -.7179930210113525, .5044090151786804, 0, 2, 7, 6, 10, 6, -1, 7, 8, 10, 2, 3, -.018768999725580215, .551476001739502, -.7055540084838867, 0, 2, 1, 2, 6, 14, -1, 4, 2, 3, 14, 2, .041965000331401825, -.4478209912776947, .7098550200462341, 0, 2, 10, 4, 5, 12, -1, 10, 8, 5, 4, 3, -.05140199884772301, -1.0932120084762573, .26701900362968445, 0, 2, 0, 17, 24, 5, -1, 8, 17, 8, 5, 3, -.07096099853515625, .836184024810791, -.38318100571632385, 0, 2, 15, 7, 5, 12, -1, 15, 11, 5, 4, 3, .016745999455451965, -.2573310136795044, .25966501235961914, 0, 3, 3, 1, 6, 12, -1, 3, 1, 3, 6, 2, 6, 7, 3, 6, 2, -.006240000016987324, .3163149952888489, -.5879690051078796, 0, 2, 12, 13, 6, 6, -1, 12, 16, 6, 3, 2, -.03939799964427948, -1.0491210222244263, .1682240068912506, 0, 2, 6, 13, 6, 6, -1, 6, 16, 6, 3, 2, 0, .16144199669361115, -.8787689805030823, 0, 2, 14, 6, 3, 16, -1, 14, 14, 3, 8, 2, -.022307999432086945, -.6905350089073181, .23607000708580017, 0, 2, 1, 12, 13, 6, -1, 1, 14, 13, 2, 3, .0018919999711215496, .249891996383667, -.5658329725265503, 0, 2, 13, 1, 4, 9, -1, 13, 1, 2, 9, 2, .0010730000212788582, -.5041580200195312, .383745014667511, 0, 2, 7, 0, 9, 6, -1, 10, 0, 3, 6, 3, .03923099860548973, .0426190011203289, -1.3875889778137207, 0, 2, 12, 2, 6, 9, -1, 12, 2, 3, 9, 2, .062238000333309174, .14119400084018707, -1.0688860416412354, 0, 2, 6, 2, 6, 9, -1, 9, 2, 3, 9, 2, .002139999996870756, -.8962240219116211, .19796399772167206, 0, 2, 6, 18, 12, 6, -1, 6, 20, 12, 2, 3, .0009180000051856041, -.453372985124588, .4353269934654236, 0, 2, 7, 6, 6, 9, -1, 9, 6, 2, 9, 3, -.006916999816894531, .3382279872894287, -.4479300081729889, 0, 2, 7, 7, 12, 3, -1, 7, 7, 6, 3, 2, -.02386699989438057, -.7890859842300415, .2251179963350296, 0, 2, 8, 3, 8, 21, -1, 8, 10, 8, 7, 3, -.10262800008058548, -2.283143997192383, -.005396000109612942, 0, 2, 7, 4, 10, 12, -1, 7, 8, 10, 4, 3, -.009523999877274036, .3934670090675354, -.5224220156669617, 0, 2, 0, 1, 6, 9, -1, 0, 4, 6, 3, 3, .03987700119614601, .03279900178313255, -1.5079489946365356, 0, 2, 15, 2, 2, 20, -1, 15, 2, 1, 20, 2, -.013144999742507935, -1.0839990377426147, .18482400476932526, 0, 2, 0, 3, 6, 9, -1, 0, 6, 6, 3, 3, -.05059099942445755, -1.882228970527649, -.002219999907538295, 0, 2, 15, 3, 2, 21, -1, 15, 3, 1, 21, 2, .0249170009046793, .14593400061130524, -2.219651937484741, 0, 2, 7, 0, 2, 23, -1, 8, 0, 1, 23, 2, -.007637000177055597, -1.016456961631775, .05879700183868408, 0, 2, 15, 8, 9, 4, -1, 15, 10, 9, 2, 2, .04291199892759323, .15443000197410583, -1.1843889951705933, 0, 2, 0, 8, 9, 4, -1, 0, 10, 9, 2, 2, .0002300000051036477, -.7730579972267151, .12189900130033493, 0, 2, 8, 14, 9, 6, -1, 8, 16, 9, 2, 3, .009092999622225761, -.1145009994506836, .7109130024909973, 0, 2, 0, 14, 9, 6, -1, 0, 16, 9, 2, 3, .011145000346004963, .07000099867582321, -1.0534820556640625, 0, 2, 3, 10, 18, 4, -1, 9, 10, 6, 4, 3, -.05245300009846687, -1.759436011314392, .19523799419403076, 0, 2, 0, 0, 24, 19, -1, 8, 0, 8, 19, 3, -.23020699620246887, .9584029912948608, -.2504569888114929, 0, 2, 9, 1, 8, 12, -1, 9, 7, 8, 6, 2, -.01636599935591221, .4673190116882324, -.21108399331569672, 0, 2, 10, 6, 4, 10, -1, 12, 6, 2, 10, 2, -.017208000645041466, .7083569765090942, -.28018298745155334, 0, 3, 7, 9, 10, 12, -1, 12, 9, 5, 6, 2, 7, 15, 5, 6, 2, -.03664800152182579, -1.1013339757919312, .24341100454330444, 0, 2, 5, 0, 3, 19, -1, 6, 0, 1, 19, 3, -.01030499953776598, -1.0933129787445068, .056258998811244965, 0, 2, 14, 0, 6, 10, -1, 16, 0, 2, 10, 3, -.01371300034224987, -.2643809914588928, .1982100009918213, 0, 3, 2, 0, 6, 12, -1, 2, 0, 3, 6, 2, 5, 6, 3, 6, 2, .029308000579476357, -.22142399847507477, 1.0525950193405151, 0, 2, 0, 11, 24, 2, -1, 0, 12, 24, 1, 2, .024077000096440315, .18485699594020844, -1.7203969955444336, 0, 2, 4, 9, 13, 4, -1, 4, 11, 13, 2, 2, .006128000095486641, -.9272149801254272, .05875299870967865, 0, 2, 9, 8, 6, 9, -1, 9, 11, 6, 3, 3, -.022377999499440193, 1.9646559953689575, .027785999700427055, 0, 2, 0, 12, 16, 4, -1, 0, 14, 16, 2, 2, -.007044000085443258, .2142760008573532, -.48407599329948425, 0, 2, 18, 12, 6, 9, -1, 18, 15, 6, 3, 3, -.04060300067067146, -1.175434947013855, .16061200201511383, 0, 2, 0, 12, 6, 9, -1, 0, 15, 6, 3, 3, -.024466000497341156, -1.1239900588989258, .041110001504421234, 0, 2, 8, 7, 10, 4, -1, 8, 7, 5, 4, 2, .0025309999473392963, -.1716970056295395, .3217880129814148, 0, 2, 8, 7, 6, 9, -1, 10, 7, 2, 9, 3, -.019588999450206757, .8272020220756531, -.2637670040130615, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, -.029635999351739883, -1.1524770259857178, .14999300241470337, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.015030000358819962, -1.0491830110549927, .040160998702049255, 0, 2, 12, 3, 6, 15, -1, 14, 3, 2, 15, 3, -.060715001076459885, -1.0903840065002441, .15330800414085388, 0, 2, 6, 3, 6, 15, -1, 8, 3, 2, 15, 3, -.012790000066161156, .42248600721359253, -.42399200797080994, 0, 2, 15, 2, 9, 4, -1, 15, 4, 9, 2, 2, -.02024799957871437, -.9186699986457825, .18485699594020844, 0, 2, 5, 10, 6, 7, -1, 8, 10, 3, 7, 2, -.03068399988114834, -1.5958670377731323, .0025760000571608543, 0, 2, 9, 14, 6, 10, -1, 9, 19, 6, 5, 2, -.020718000829219818, -.6629999876022339, .310371994972229, 0, 2, 7, 13, 5, 8, -1, 7, 17, 5, 4, 2, -.0017290000105276704, .1918340027332306, -.6508499979972839, 0, 2, 14, 5, 3, 16, -1, 14, 13, 3, 8, 2, -.031394001096487045, -.636430025100708, .1540839970111847, 0, 2, 2, 17, 18, 3, -1, 2, 18, 18, 1, 3, .019003000110387802, -.189193993806839, 1.5294510126113892, 0, 2, 5, 18, 19, 3, -1, 5, 19, 19, 1, 3, .006176999770104885, -.10597900301218033, .6485959887504578, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, -.01016599964350462, -1.0802700519561768, .03717600181698799, 0, 2, 12, 4, 3, 18, -1, 13, 4, 1, 18, 3, -.0014169999631121755, .3415749967098236, -.09773799777030945, 0, 2, 9, 4, 3, 18, -1, 10, 4, 1, 18, 3, -.0040799998678267, .4762459993362427, -.3436630070209503, 0, 2, 3, 3, 18, 9, -1, 9, 3, 6, 9, 3, -.04409699887037277, .9763429760932922, -.019173000007867813, 0, 2, 6, 1, 6, 14, -1, 8, 1, 2, 14, 3, -.060669999569654465, -2.1752851009368896, -.028925999999046326, 0, 2, 12, 16, 9, 6, -1, 12, 19, 9, 3, 2, -.03293199837207794, -.6438310146331787, .1649409979581833, 0, 3, 1, 3, 20, 16, -1, 1, 3, 10, 8, 2, 11, 11, 10, 8, 2, -.14722800254821777, -1.4745830297470093, .0025839998852461576, 0, 3, 12, 5, 6, 12, -1, 15, 5, 3, 6, 2, 12, 11, 3, 6, 2, -.01193000003695488, .4244140088558197, -.17712600529193878, 0, 3, 1, 2, 22, 16, -1, 1, 2, 11, 8, 2, 12, 10, 11, 8, 2, .14517900347709656, .02544499933719635, -1.277940034866333, 0, 2, 10, 14, 5, 10, -1, 10, 19, 5, 5, 2, .051447998732328415, .15678399801254272, -1.5188430547714233, 0, 2, 3, 21, 18, 3, -1, 3, 22, 18, 1, 3, .0031479999888688326, -.40424400568008423, .3242970108985901, 0, 2, 10, 14, 6, 10, -1, 12, 14, 2, 10, 3, -.04360000044107437, -1.9932260513305664, .15018600225448608, -3.8424909114837646, 83, 0, 2, 0, 2, 24, 4, -1, 8, 2, 8, 4, 3, .12899599969387054, -.6216199994087219, 1.1116520166397095, 0, 2, 6, 4, 12, 9, -1, 6, 7, 12, 3, 3, -.09126199781894684, 1.0143059492111206, -.6133520007133484, 0, 2, 6, 6, 12, 5, -1, 10, 6, 4, 5, 3, .014271999709308147, -1.0261659622192383, .3977999985218048, 0, 2, 5, 8, 14, 12, -1, 5, 12, 14, 4, 3, .03288999944925308, -1.1386079788208008, .28690800070762634, 0, 3, 4, 14, 8, 10, -1, 4, 14, 4, 5, 2, 8, 19, 4, 5, 2, .012590000405907631, -.5664560198783875, .45172399282455444, 0, 2, 11, 6, 5, 14, -1, 11, 13, 5, 7, 2, .014661000110208988, .3050599992275238, -.6812959909439087, 0, 2, 7, 6, 3, 16, -1, 7, 14, 3, 8, 2, -.033555999398231506, -1.7208939790725708, .06143900007009506, 0, 2, 3, 7, 18, 8, -1, 9, 7, 6, 8, 3, .1425269991159439, .2319220006465912, -1.7297149896621704, 0, 2, 2, 3, 20, 2, -1, 2, 4, 20, 1, 2, -.006207999773323536, -1.2163300514221191, .12160199880599976, 0, 2, 3, 12, 19, 6, -1, 3, 14, 19, 2, 3, .018178999423980713, .3255369961261749, -.8100399971008301, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, .025036999955773354, -.3169879913330078, .6736140251159668, 0, 2, 16, 6, 6, 14, -1, 16, 6, 3, 14, 2, .046560999006032944, -.11089800298213959, .8408250212669373, 0, 2, 7, 9, 6, 12, -1, 9, 9, 2, 12, 3, -.008999999612569809, .39574500918388367, -.4762459993362427, 0, 3, 18, 6, 6, 18, -1, 21, 6, 3, 9, 2, 18, 15, 3, 9, 2, .04080599918961525, -.00018000000272877514, .9457070231437683, 0, 3, 0, 6, 6, 18, -1, 0, 6, 3, 9, 2, 3, 15, 3, 9, 2, -.03422199934720993, .752062976360321, -.31531500816345215, 0, 2, 18, 2, 6, 9, -1, 18, 5, 6, 3, 3, -.039716001600027084, -.8313959836959839, .1774439960718155, 0, 2, 3, 18, 15, 6, -1, 3, 20, 15, 2, 3, .002517000073567033, -.593779981136322, .24657000601291656, 0, 2, 18, 2, 6, 9, -1, 18, 5, 6, 3, 3, .027428999543190002, .15998399257659912, -.42781999707221985, 0, 2, 0, 2, 6, 9, -1, 0, 5, 6, 3, 3, .03498600050806999, .03505599871277809, -1.5988600254058838, 0, 2, 5, 10, 18, 2, -1, 5, 11, 18, 1, 2, .004497000016272068, -.520343005657196, .37828299403190613, 0, 2, 6, 0, 12, 6, -1, 6, 2, 12, 2, 3, .0027699999045580626, -.5318260192871094, .2495100051164627, 0, 2, 10, 0, 6, 9, -1, 12, 0, 2, 9, 3, .03517400100827217, .19983400404453278, -1.444612979888916, 0, 2, 8, 0, 6, 9, -1, 10, 0, 2, 9, 3, .025970999151468277, .04442699998617172, -1.3622980117797852, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, -.015783999115228653, -.9102039933204651, .27190300822257996, 0, 2, 3, 6, 13, 6, -1, 3, 8, 13, 2, 3, -.007588000036776066, .0920649990439415, -.8162890076637268, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, .020754000172019005, .21185700595378876, -.7472900152206421, 0, 2, 2, 5, 6, 15, -1, 5, 5, 3, 15, 2, .059829000383615494, -.2730109989643097, .8092330098152161, 0, 2, 8, 8, 9, 6, -1, 11, 8, 3, 6, 3, .0390390008687973, -.10432299971580505, .8622620105743408, 0, 2, 8, 6, 3, 14, -1, 8, 13, 3, 7, 2, .02166599966585636, .06270900368690491, -.9889429807662964, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, -.027496999129652977, -.9269099831581116, .15586300194263458, 0, 2, 4, 12, 10, 4, -1, 9, 12, 5, 4, 2, .010462000034749508, .13418099284172058, -.7038639783859253, 0, 2, 13, 1, 4, 19, -1, 13, 1, 2, 19, 2, .02487099915742874, .1970670074224472, -.40263301134109497, 0, 2, 7, 1, 4, 19, -1, 9, 1, 2, 19, 2, -.016036000102758408, -1.140982985496521, .07399799674749374, 0, 2, 18, 9, 6, 9, -1, 18, 12, 6, 3, 3, .04862700030207634, .16990399360656738, -.7215219736099243, 0, 2, 1, 21, 18, 3, -1, 1, 22, 18, 1, 3, .0012619999470189214, -.4738979935646057, .2625499963760376, 0, 2, 14, 13, 10, 9, -1, 14, 16, 10, 3, 3, -.08803500235080719, -2.160651922225952, .1455480009317398, 0, 3, 1, 13, 22, 4, -1, 1, 13, 11, 2, 2, 12, 15, 11, 2, 2, .01835699938237667, .04475099965929985, -1.0766370296478271, 0, 3, 4, 6, 16, 6, -1, 12, 6, 8, 3, 2, 4, 9, 8, 3, 2, .03527500107884407, -.03291900083422661, 1.2153890132904053, 0, 3, 1, 0, 18, 22, -1, 1, 0, 9, 11, 2, 10, 11, 9, 11, 2, -.20392900705337524, -1.3187999725341797, .015503999777138233, 0, 3, 10, 7, 8, 14, -1, 14, 7, 4, 7, 2, 10, 14, 4, 7, 2, -.0166190005838871, .3685019910335541, -.15283699333667755, 0, 3, 0, 4, 6, 20, -1, 0, 4, 3, 10, 2, 3, 14, 3, 10, 2, .03773900121450424, -.2572779953479767, .7065529823303223, 0, 2, 15, 0, 6, 9, -1, 17, 0, 2, 9, 3, .0022720000706613064, -.07760299742221832, .3336780071258545, 0, 2, 3, 0, 6, 9, -1, 5, 0, 2, 9, 3, -.014802999794483185, -.7852479815483093, .07693400233983994, 0, 3, 15, 12, 6, 12, -1, 18, 12, 3, 6, 2, 15, 18, 3, 6, 2, -.048319000750780106, 1.702232003211975, .04972200095653534, 0, 3, 3, 12, 6, 12, -1, 3, 12, 3, 6, 2, 6, 18, 3, 6, 2, -.029539000242948532, .7767069935798645, -.24534299969673157, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, -.04616900160908699, -1.492277979850769, .1234000027179718, 0, 2, 0, 12, 9, 6, -1, 0, 14, 9, 2, 3, -.028064999729394913, -2.1345369815826416, -.025797000154852867, 0, 2, 4, 14, 19, 3, -1, 4, 15, 19, 1, 3, -.005733999889343977, .5698260068893433, -.1205660030245781, 0, 2, 2, 13, 19, 3, -1, 2, 14, 19, 1, 3, -.010111000388860703, .6791139841079712, -.2663800120353699, 0, 2, 14, 15, 10, 6, -1, 14, 17, 10, 2, 3, .011359999887645245, .24789799749851227, -.6449300050735474, 0, 3, 6, 0, 10, 12, -1, 6, 0, 5, 6, 2, 11, 6, 5, 6, 2, .051809001713991165, .01471600029617548, -1.2395579814910889, 0, 3, 17, 1, 6, 12, -1, 20, 1, 3, 6, 2, 17, 7, 3, 6, 2, .033291999250650406, -.00825599953532219, 1.016847014427185, 0, 3, 1, 1, 6, 12, -1, 1, 1, 3, 6, 2, 4, 7, 3, 6, 2, -.014494000002741814, .45066800713539124, -.36250999569892883, 0, 2, 16, 14, 6, 9, -1, 16, 17, 6, 3, 3, -.03422199934720993, -.9529250264167786, .20684599876403809, 0, 2, 7, 3, 9, 12, -1, 7, 9, 9, 6, 2, -.08065400272607803, -2.0139501094818115, -.02308499999344349, 0, 2, 12, 1, 4, 12, -1, 12, 7, 4, 6, 2, -.000893999997060746, .3957200050354004, -.2935130000114441, 0, 2, 4, 0, 14, 8, -1, 4, 4, 14, 4, 2, .09716200083494186, -.24980300664901733, 1.0859220027923584, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, .03661400079727173, -.057844001799821854, 1.216215968132019, 0, 2, 2, 10, 18, 3, -1, 8, 10, 6, 3, 3, .05169399827718735, .043062999844551086, -1.0636160373687744, 0, 2, 15, 15, 9, 6, -1, 15, 17, 9, 2, 3, -.024557000026106834, -.4894680082798004, .1718290001153946, 0, 2, 0, 1, 21, 23, -1, 7, 1, 7, 23, 3, .32736799120903015, -.29688599705696106, .5179830193519592, 0, 2, 6, 9, 17, 4, -1, 6, 11, 17, 2, 2, .007695999927818775, -.5980589985847473, .24803200364112854, 0, 2, 1, 0, 11, 18, -1, 1, 6, 11, 6, 3, .16172200441360474, -.029613999649882317, -2.3162529468536377, 0, 2, 6, 15, 13, 6, -1, 6, 17, 13, 2, 3, -.0047889999113976955, .3745790123939514, -.3277919888496399, 0, 2, 0, 15, 9, 6, -1, 0, 17, 9, 2, 3, -.01840299926698208, -.99692702293396, .07294800132513046, 0, 2, 8, 7, 15, 4, -1, 13, 7, 5, 4, 3, .07766500115394592, .14175699651241302, -1.7238730192184448, 0, 2, 9, 12, 6, 9, -1, 9, 15, 6, 3, 3, .018921000882983208, -.2127310037612915, 1.0165189504623413, 0, 2, 6, 8, 18, 3, -1, 12, 8, 6, 3, 3, -.07939799875020981, -1.3164349794387817, .1498199999332428, 0, 2, 0, 14, 24, 4, -1, 8, 14, 8, 4, 3, -.0680370032787323, .49421998858451843, -.290910005569458, 0, 2, 16, 10, 3, 12, -1, 16, 16, 3, 6, 2, -.006101000122725964, .4243049919605255, -.33899301290512085, 0, 2, 0, 3, 24, 3, -1, 0, 4, 24, 1, 3, .03192700073122978, -.031046999618411064, -2.3459999561309814, 0, 2, 14, 17, 10, 6, -1, 14, 19, 10, 2, 3, -.029843999072909355, -.7898960113525391, .1541769951581955, 0, 2, 1, 13, 18, 3, -1, 7, 13, 6, 3, 3, -.08054199814796448, -2.250922918319702, -.030906999483704567, 0, 2, 5, 0, 18, 9, -1, 5, 3, 18, 3, 3, .0038109999150037766, -.25577300786972046, .23785500228405, 0, 2, 4, 3, 16, 9, -1, 4, 6, 16, 3, 3, .033647000789642334, -.2254139930009842, .9230740070343018, 0, 2, 16, 5, 3, 12, -1, 16, 11, 3, 6, 2, .008280999958515167, -.2889620065689087, .31046199798583984, 0, 2, 0, 7, 18, 4, -1, 6, 7, 6, 4, 3, .10104399919509888, -.03486400097608566, -2.7102620601654053, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, -.010009000077843666, .5971540212631226, -.033831000328063965, 0, 2, 9, 8, 6, 10, -1, 11, 8, 2, 10, 3, .007191999815404415, -.47738000750541687, .22686000168323517, 0, 2, 9, 15, 6, 9, -1, 11, 15, 2, 9, 3, .02496900036931038, .22877700626850128, -1.0435529947280884, 0, 2, 3, 1, 18, 21, -1, 12, 1, 9, 21, 2, .27908000349998474, -.25818100571632385, .7678049802780151, 0, 2, 6, 8, 12, 7, -1, 6, 8, 6, 7, 2, -.04421300068497658, -.5979800224304199, .28039899468421936, 0, 2, 8, 5, 6, 9, -1, 10, 5, 2, 9, 3, -.01413699984550476, .7098730206489563, -.2564519941806793, -3.6478610038757324, 91, 0, 2, 0, 2, 24, 4, -1, 8, 2, 8, 4, 3, .1377120018005371, -.5587059855461121, 1.095376968383789, 0, 2, 14, 7, 5, 12, -1, 14, 11, 5, 4, 3, .03446099907159805, -.7117189764976501, .5289959907531738, 0, 2, 5, 7, 5, 12, -1, 5, 11, 5, 4, 3, .01858000084757805, -1.1157519817352295, .4059399962425232, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .02504199929535389, -.40892499685287476, .7412999868392944, 0, 2, 0, 1, 6, 17, -1, 3, 1, 3, 17, 2, .05717900022864342, -.3805429935455322, .7364770174026489, 0, 2, 3, 1, 19, 9, -1, 3, 4, 19, 3, 3, .014932000078260899, -.6994550228118896, .37950998544692993, 0, 3, 3, 18, 12, 6, -1, 3, 18, 6, 3, 2, 9, 21, 6, 3, 2, .0088900001719594, -.5455859899520874, .36332499980926514, 0, 2, 20, 4, 4, 19, -1, 20, 4, 2, 19, 2, .030435999855399132, -.10124599933624268, .7958589792251587, 0, 2, 0, 16, 10, 7, -1, 5, 16, 5, 7, 2, -.04416000097990036, .8441089987754822, -.3297640085220337, 0, 3, 8, 7, 10, 12, -1, 13, 7, 5, 6, 2, 8, 13, 5, 6, 2, .01846100017428398, .263265997171402, -.967365026473999, 0, 3, 6, 7, 10, 12, -1, 6, 7, 5, 6, 2, 11, 13, 5, 6, 2, .010614999569952488, .15251900255680084, -1.058987021446228, 0, 2, 9, 2, 9, 6, -1, 12, 2, 3, 6, 3, -.045974001288414, -1.991834044456482, .1362909972667694, 0, 2, 1, 20, 21, 4, -1, 8, 20, 7, 4, 3, .08290000259876251, -.32037198543548584, .6030420064926147, 0, 2, 9, 12, 9, 6, -1, 9, 14, 9, 2, 3, -.008913000114262104, .5958660244941711, -.2113959938287735, 0, 2, 7, 2, 9, 6, -1, 10, 2, 3, 6, 3, .04281400144100189, .0229250006377697, -1.4679330587387085, 0, 2, 13, 0, 4, 14, -1, 13, 0, 2, 14, 2, -.008713999763131142, -.43989500403404236, .20439699292182922, 0, 2, 7, 0, 4, 14, -1, 9, 0, 2, 14, 2, -.0043390002101659775, -.8906679749488831, .1046999990940094, 0, 2, 14, 15, 9, 6, -1, 14, 17, 9, 2, 3, .008074999786913395, .21164199709892273, -.40231600403785706, 0, 2, 2, 8, 18, 5, -1, 8, 8, 6, 5, 3, .09673900157213211, .013319999910891056, -1.6085360050201416, 0, 2, 18, 3, 6, 11, -1, 20, 3, 2, 11, 3, -.03053699992597103, 1.0063740015029907, -.1341329962015152, 0, 2, 6, 5, 11, 14, -1, 6, 12, 11, 7, 2, -.06085599958896637, -1.4689979553222656, .009424000047147274, 0, 2, 18, 4, 6, 9, -1, 18, 7, 6, 3, 3, -.038162000477313995, -.8163639903068542, .2617120146751404, 0, 2, 7, 6, 9, 6, -1, 7, 8, 9, 2, 3, -.009696000255644321, .11561699956655502, -.7169319987297058, 0, 2, 18, 4, 6, 9, -1, 18, 7, 6, 3, 3, .048902999609708786, .13050499558448792, -1.6448370218276978, 0, 2, 0, 4, 6, 9, -1, 0, 7, 6, 3, 3, -.04161199927330017, -1.17958402633667, .02501700073480606, 0, 2, 9, 4, 9, 4, -1, 9, 6, 9, 2, 2, -.020188000053167343, .6318820118904114, -.10490400344133377, 0, 2, 0, 22, 19, 2, -1, 0, 23, 19, 1, 2, -.0009790000040084124, .1850779950618744, -.5356590151786804, 0, 2, 17, 14, 6, 9, -1, 17, 17, 6, 3, 3, -.033622000366449356, -.9312760233879089, .20071500539779663, 0, 2, 1, 14, 6, 9, -1, 1, 17, 6, 3, 3, .01945599913597107, .03802900016307831, -1.0112210512161255, 0, 2, 14, 11, 4, 9, -1, 14, 11, 2, 9, 2, -.00031800000579096377, .3645769953727722, -.2761090099811554, 0, 2, 6, 11, 4, 9, -1, 8, 11, 2, 9, 2, -.00038899999344721437, .19665899872779846, -.5341050028800964, 0, 2, 3, 9, 18, 7, -1, 9, 9, 6, 7, 3, -.09349600225687027, -1.6772350072860718, .20727099478244781, 0, 2, 9, 12, 6, 10, -1, 9, 17, 6, 5, 2, -.07787799835205078, -3.0760629177093506, -.03580399975180626, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, .016947999596595764, .21447399258613586, -.7137629985809326, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, -.021459000185132027, -1.146806001663208, .015855999663472176, 0, 2, 6, 17, 18, 3, -1, 6, 18, 18, 1, 3, -.012865999713540077, .8381239771842957, -.06594400107860565, 0, 2, 1, 17, 18, 3, -1, 1, 18, 18, 1, 3, .007822000421583652, -.28026801347732544, .7937690019607544, 0, 2, 10, 6, 11, 12, -1, 10, 12, 11, 6, 2, .10294400155544281, .17832300066947937, -.6841220259666443, 0, 3, 5, 6, 14, 6, -1, 5, 6, 7, 3, 2, 12, 9, 7, 3, 2, -.037487998604774475, .961899995803833, -.21735599637031555, 0, 2, 5, 4, 15, 4, -1, 5, 6, 15, 2, 2, .025505999103188515, .010103999637067318, 1.2461110353469849, 0, 2, 0, 0, 22, 2, -1, 0, 1, 22, 1, 2, .0006670000148005784, -.5348820090293884, .14746299386024475, 0, 2, 0, 0, 24, 24, -1, 8, 0, 8, 24, 3, -.28867900371551514, .821727991104126, -.014948000200092793, 0, 2, 1, 15, 18, 4, -1, 10, 15, 9, 4, 2, .09129499644041061, -.19605399668216705, 1.0803170204162598, 0, 2, 6, 8, 12, 9, -1, 6, 11, 12, 3, 3, .1205660030245781, -.0238489992916584, 1.13926100730896, 0, 2, 4, 12, 7, 12, -1, 4, 16, 7, 4, 3, -.07377500087022781, -1.3583840131759644, -.0042039998807013035, 0, 3, 1, 2, 22, 6, -1, 12, 2, 11, 3, 2, 1, 5, 11, 3, 2, -.03312800079584122, -.6448320150375366, .24142199754714966, 0, 2, 5, 20, 14, 3, -1, 12, 20, 7, 3, 2, -.04393700137734413, .8428540229797363, -.20624800026416779, 0, 3, 0, 0, 24, 16, -1, 12, 0, 12, 8, 2, 0, 8, 12, 8, 2, .181101992726326, .1921209990978241, -1.2222139835357666, 0, 3, 3, 13, 18, 4, -1, 3, 13, 9, 2, 2, 12, 15, 9, 2, 2, -.011850999668240547, -.7267739772796631, .05268799886107445, 0, 2, 2, 10, 22, 2, -1, 2, 11, 22, 1, 2, .004592000041157007, -.36305201053619385, .2922379970550537, 0, 2, 6, 3, 11, 8, -1, 6, 7, 11, 4, 2, .007062000222504139, .05811600014567375, -.6716160178184509, 0, 2, 14, 5, 6, 6, -1, 14, 8, 6, 3, 2, -.023715000599622726, .4714210033416748, .01858000084757805, 0, 2, 0, 7, 24, 6, -1, 0, 9, 24, 2, 3, -.06717199832201004, -1.1331889629364014, .023780999705195427, 0, 3, 14, 0, 10, 10, -1, 19, 0, 5, 5, 2, 14, 5, 5, 5, 2, -.06531000137329102, .9825350046157837, .028362000361084938, 0, 3, 0, 0, 10, 10, -1, 0, 0, 5, 5, 2, 5, 5, 5, 5, 2, .022791000083088875, -.282137006521225, .5899339914321899, 0, 3, 0, 1, 24, 4, -1, 12, 1, 12, 2, 2, 0, 3, 12, 2, 2, -.019037999212741852, -.6371150016784668, .2651459872722626, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, -.006868999917060137, .37487301230430603, -.3323209881782532, 0, 3, 5, 15, 16, 6, -1, 13, 15, 8, 3, 2, 5, 18, 8, 3, 2, -.04014600068330765, -1.304872989654541, .15724299848079681, 0, 3, 3, 15, 16, 6, -1, 3, 15, 8, 3, 2, 11, 18, 8, 3, 2, -.04053099825978279, -2.045804977416992, -.02692599967122078, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, -.012253999710083008, .776494026184082, -.04297100007534027, 0, 2, 0, 13, 21, 10, -1, 0, 18, 21, 5, 2, -.027219999581575394, .1742440015077591, -.4460090100765228, 0, 2, 13, 0, 6, 24, -1, 15, 0, 2, 24, 3, -.08836600184440613, -1.503641963005066, .14289900660514832, 0, 2, 7, 4, 6, 11, -1, 9, 4, 2, 11, 3, -.007915999740362167, .28666698932647705, -.37923699617385864, 0, 2, 9, 5, 9, 6, -1, 12, 5, 3, 6, 3, -.04196000099182129, 1.384695053100586, .06502699851989746, 0, 2, 1, 4, 2, 20, -1, 1, 14, 2, 10, 2, .04566299915313721, -.22452299296855927, .7952100038528442, 0, 2, 13, 0, 6, 24, -1, 15, 0, 2, 24, 3, -.14090600609779358, -1.5879319906234741, .11359000205993652, 0, 2, 5, 0, 6, 24, -1, 7, 0, 2, 24, 3, -.05921600013971329, -1.1945960521697998, -.007164000067859888, 0, 3, 16, 7, 6, 14, -1, 19, 7, 3, 7, 2, 16, 14, 3, 7, 2, .0043390002101659775, -.1552869975566864, .4066449999809265, 0, 2, 4, 7, 4, 12, -1, 6, 7, 2, 12, 2, -.00203699991106987, .2592790126800537, -.3836829960346222, 0, 2, 0, 5, 24, 14, -1, 8, 5, 8, 14, 3, .27516499161720276, -.08849799633026123, .7678750157356262, 0, 2, 5, 13, 10, 6, -1, 5, 15, 10, 2, 3, -.02660199999809265, .7502449750900269, -.2262199968099594, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, .04090600088238716, .12158600240945816, -1.456691026687622, 0, 3, 2, 7, 6, 14, -1, 2, 7, 3, 7, 2, 5, 14, 3, 7, 2, .0055320002138614655, -.366115003824234, .2596859931945801, 0, 2, 15, 2, 9, 15, -1, 18, 2, 3, 15, 3, .0318790003657341, -.0750190019607544, .4848479926586151, 0, 2, 0, 2, 6, 9, -1, 2, 2, 2, 9, 3, -.041482001543045044, .7822039723396301, -.2199220061302185, 0, 3, 12, 2, 10, 14, -1, 17, 2, 5, 7, 2, 12, 9, 5, 7, 2, -.09613099694252014, -.8945630192756653, .146807000041008, 0, 2, 11, 6, 2, 18, -1, 12, 6, 1, 18, 2, -.011568999849259853, .8271409869194031, -.20275600254535675, 0, 2, 9, 5, 15, 6, -1, 14, 5, 5, 6, 3, .018312999978661537, .016367999836802483, .27306801080703735, 0, 2, 8, 6, 6, 10, -1, 10, 6, 2, 10, 3, -.03416600078344345, 1.1307320594787598, -.18810899555683136, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, -.024476999416947365, -.5779129862785339, .15812499821186066, 0, 2, 3, 3, 9, 7, -1, 6, 3, 3, 7, 3, .04895700141787529, -.022564999759197235, -1.637328028678894, 0, 2, 6, 7, 14, 3, -1, 6, 7, 7, 3, 2, -.020702999085187912, -.5451210141181946, .24086999893188477, 0, 2, 7, 7, 8, 6, -1, 11, 7, 4, 6, 2, -.023002000525593758, -1.22365403175354, -.007344000041484833, 0, 2, 12, 7, 7, 12, -1, 12, 13, 7, 6, 2, .06458500027656555, .14695599675178528, -.4496749937534332, 0, 3, 10, 6, 4, 18, -1, 10, 6, 2, 9, 2, 12, 15, 2, 9, 2, .012666000053286552, -.27873900532722473, .4387660026550293, 0, 2, 16, 14, 6, 9, -1, 16, 17, 6, 3, 3, -.012002999894320965, -.24289099872112274, .2535009980201721, 0, 2, 4, 0, 6, 13, -1, 6, 0, 2, 13, 3, -.026443999260663986, -.8586480021476746, .02602599933743477, 0, 2, 2, 2, 21, 3, -1, 9, 2, 7, 3, 3, -.025547999888658524, .6928790211677551, -.002116000046953559, 0, 2, 5, 4, 5, 12, -1, 5, 8, 5, 4, 3, .039115000516176224, -.16589100658893585, 1.5209139585494995, 0, 2, 10, 3, 4, 10, -1, 10, 8, 4, 5, 2, -.006033000070601702, .43856900930404663, -.21613700687885284, 0, 2, 8, 4, 5, 8, -1, 8, 8, 5, 4, 2, -.0339369997382164, -.9799839854240417, .022133000195026398, -3.870048999786377, 99, 0, 2, 6, 0, 11, 9, -1, 6, 3, 11, 3, 3, .04067299887537956, -.9047470092773438, .6441059708595276, 0, 2, 6, 6, 12, 5, -1, 10, 6, 4, 5, 3, .025609999895095825, -.792169988155365, .5748999714851379, 0, 2, 0, 0, 24, 5, -1, 8, 0, 8, 5, 3, .19959500432014465, -.30099600553512573, 1.3143850564956665, 0, 2, 1, 10, 23, 6, -1, 1, 12, 23, 2, 3, .012404999695718288, -.898829996585846, .29205799102783203, 0, 2, 3, 21, 18, 3, -1, 9, 21, 6, 3, 3, .03920799866318703, -.4195519983768463, .5346329808235168, 0, 2, 3, 6, 21, 6, -1, 3, 8, 21, 2, 3, -.03084399923682213, .4579339921474457, -.4462909996509552, 0, 2, 0, 5, 6, 12, -1, 2, 5, 2, 12, 3, -.03552300110459328, .9131050109863281, -.2737320065498352, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.061650000512599945, -1.4697799682617188, .20364099740982056, 0, 2, 8, 7, 8, 10, -1, 8, 12, 8, 5, 2, -.011739999987185001, -1.0482879877090454, .06780199706554413, 0, 2, 5, 7, 15, 12, -1, 10, 7, 5, 12, 3, .0669339969754219, .2927449941635132, -.522828996181488, 0, 2, 0, 17, 10, 6, -1, 0, 19, 10, 2, 3, -.02063100039958954, -1.285513997077942, .044550999999046326, 0, 2, 14, 18, 9, 6, -1, 14, 20, 9, 2, 3, -.022357000038027763, -.8575379848480225, .1843400001525879, 0, 2, 9, 6, 6, 16, -1, 9, 14, 6, 8, 2, .0011500000255182385, .1640550047159195, -.6912500262260437, 0, 2, 14, 18, 9, 6, -1, 14, 20, 9, 2, 3, .03587299957871437, .15756499767303467, -.8426259756088257, 0, 2, 1, 18, 9, 6, -1, 1, 20, 9, 2, 3, .030659999698400497, .021637000143527985, -1.3634690046310425, 0, 2, 15, 9, 9, 6, -1, 15, 11, 9, 2, 3, .005555999930948019, -.16737000644207, .2588840126991272, 0, 2, 0, 9, 9, 6, -1, 0, 11, 9, 2, 3, -.0061160000041127205, -.9727180004119873, .06610000133514404, 0, 2, 17, 3, 6, 9, -1, 19, 3, 2, 9, 3, -.030316999182105064, .9847419857978821, -.016448000445961952, 0, 2, 2, 17, 18, 3, -1, 2, 18, 18, 1, 3, -.009720000438392162, .47604700922966003, -.3251670002937317, 0, 2, 3, 15, 21, 6, -1, 3, 17, 21, 2, 3, -.05712699890136719, -.9592069983482361, .1993820071220398, 0, 2, 9, 17, 6, 6, -1, 9, 20, 6, 3, 2, .004005999770015478, -.5261250138282776, .2242870032787323, 0, 2, 18, 3, 6, 9, -1, 18, 6, 6, 3, 3, .033734001219272614, .17070099711418152, -1.0737580060958862, 0, 2, 0, 3, 6, 9, -1, 0, 6, 6, 3, 3, -.03464199975132942, -1.1343129873275757, .03654000163078308, 0, 3, 4, 0, 16, 10, -1, 12, 0, 8, 5, 2, 4, 5, 8, 5, 2, .04692300036549568, .2583230137825012, -.7153580188751221, 0, 3, 2, 0, 10, 16, -1, 2, 0, 5, 8, 2, 7, 8, 5, 8, 2, -.008766000159084797, .19640900194644928, -.5335509777069092, 0, 2, 14, 0, 10, 5, -1, 14, 0, 5, 5, 2, .06562799960374832, -.05119499936699867, .9761070013046265, 0, 2, 0, 0, 10, 5, -1, 5, 0, 5, 5, 2, -.044165000319480896, 1.0631920099258423, -.23462599515914917, 0, 2, 18, 3, 6, 10, -1, 18, 3, 3, 10, 2, .017304999753832817, -.18582899868488312, .45889899134635925, 0, 3, 5, 11, 12, 6, -1, 5, 11, 6, 3, 2, 11, 14, 6, 3, 2, .033135998994112015, -.029381999745965004, -2.665132999420166, 0, 2, 21, 0, 3, 18, -1, 22, 0, 1, 18, 3, -.02102999947965145, .9997990131378174, .02493700012564659, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, .029783999547362328, -.02960599958896637, -2.1695868968963623, 0, 2, 8, 8, 9, 7, -1, 11, 8, 3, 7, 3, .055291999131441116, -.0007559999939985573, .7465199828147888, 0, 3, 7, 12, 8, 10, -1, 7, 12, 4, 5, 2, 11, 17, 4, 5, 2, -.033597998321056366, -1.5274159908294678, .011060000397264957, 0, 2, 21, 0, 3, 18, -1, 22, 0, 1, 18, 3, .019602999091148376, .03357499837875366, .9952620267868042, 0, 2, 10, 6, 4, 9, -1, 12, 6, 2, 9, 2, -.02078700065612793, .7661290168762207, -.2467080056667328, 0, 2, 15, 0, 9, 6, -1, 15, 2, 9, 2, 3, .03253600001335144, .1626340001821518, -.6113430261611938, 0, 2, 0, 2, 24, 3, -1, 0, 3, 24, 1, 3, -.01078800018876791, -.978397011756897, .02896999940276146, 0, 2, 11, 7, 6, 9, -1, 13, 7, 2, 9, 3, -.009956000372767448, .4614579975605011, -.13510499894618988, 0, 2, 7, 6, 6, 10, -1, 9, 6, 2, 10, 3, -.003748999908566475, .2545819878578186, -.5195559859275818, 0, 2, 12, 1, 6, 12, -1, 14, 1, 2, 12, 3, -.04177999868988991, -.8056510090827942, .15208500623703003, 0, 2, 6, 4, 12, 12, -1, 6, 10, 12, 6, 2, -.03422100096940994, -1.3137799501419067, -.0035800000187009573, 0, 2, 14, 3, 2, 21, -1, 14, 3, 1, 21, 2, .010130000300705433, .2017579972743988, -.6133959889411926, 0, 2, 6, 1, 12, 8, -1, 6, 5, 12, 4, 2, -.08984900265932083, .9763280153274536, -.2088479995727539, 0, 2, 3, 0, 18, 8, -1, 3, 4, 18, 4, 2, .02609799988567829, -.18807999789714813, .4770579934120178, 0, 2, 3, 0, 18, 3, -1, 3, 1, 18, 1, 3, -.0037539999466389418, -.6798040270805359, .11288800090551376, 0, 3, 0, 13, 24, 4, -1, 12, 13, 12, 2, 2, 0, 15, 12, 2, 2, .03197300061583519, .18951700627803802, -1.4967479705810547, 0, 2, 10, 5, 4, 9, -1, 12, 5, 2, 9, 2, .019332999363541603, -.2360990047454834, .8132050037384033, 0, 2, 11, 1, 6, 9, -1, 13, 1, 2, 9, 3, .0019490000559017062, .24830399453639984, -.06921199709177017, 0, 2, 6, 2, 6, 22, -1, 8, 2, 2, 22, 3, -.04414699971675873, -1.0418920516967773, .04805300012230873, 0, 3, 16, 10, 8, 14, -1, 20, 10, 4, 7, 2, 16, 17, 4, 7, 2, -.04468199983239174, .513463020324707, -.007379999849945307, 0, 2, 3, 4, 16, 15, -1, 3, 9, 16, 5, 3, -.10757499933242798, 1.6202019453048706, -.1866759955883026, 0, 3, 16, 10, 8, 14, -1, 20, 10, 4, 7, 2, 16, 17, 4, 7, 2, -.12846800684928894, 2.986948013305664, .0954279974102974, 0, 3, 0, 10, 8, 14, -1, 0, 10, 4, 7, 2, 4, 17, 4, 7, 2, -.04475799947977066, .6040530204772949, -.2705869972705841, 0, 2, 10, 14, 11, 6, -1, 10, 17, 11, 3, 2, -.04399099946022034, -.6179050207138062, .15997199714183807, 0, 2, 0, 7, 24, 9, -1, 8, 7, 8, 9, 3, -.12268999963998795, .6632720232009888, -.2363699972629547, 0, 2, 13, 1, 4, 16, -1, 13, 1, 2, 16, 2, -.019982999190688133, -1.1228660345077515, .1961670070886612, 0, 2, 7, 1, 4, 16, -1, 9, 1, 2, 16, 2, -.015527999959886074, -1.0770269632339478, .02069300040602684, 0, 3, 5, 5, 16, 8, -1, 13, 5, 8, 4, 2, 5, 9, 8, 4, 2, -.04897100105881691, .8116829991340637, -.0172520000487566, 0, 2, 0, 9, 6, 9, -1, 0, 12, 6, 3, 3, .05597599968314171, -.02252900041639805, -1.7356760501861572, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, -.009858000092208385, .6788139939308167, -.05818000063300133, 0, 2, 3, 12, 6, 9, -1, 3, 15, 6, 3, 3, .013481000438332558, .0578479990363121, -.772553026676178, 0, 2, 8, 14, 9, 6, -1, 8, 16, 9, 2, 3, .006560999900102615, -.1314689964056015, .670557975769043, 0, 3, 2, 13, 8, 10, -1, 2, 13, 4, 5, 2, 6, 18, 4, 5, 2, .007114999927580357, -.3788059949874878, .3097899854183197, 0, 2, 15, 5, 3, 18, -1, 15, 11, 3, 6, 3, .004815999884158373, -.5847039818763733, .25602099299430847, 0, 2, 3, 5, 18, 3, -1, 3, 6, 18, 1, 3, .009531999938189983, -.3021700084209442, .4125329852104187, 0, 2, 17, 5, 6, 11, -1, 19, 5, 2, 11, 3, -.02747499942779541, .5915470123291016, .01796399988234043, 0, 2, 1, 5, 6, 11, -1, 3, 5, 2, 11, 3, -.03951999917626381, .9691349864006042, -.21020300686359406, 0, 2, 19, 1, 4, 9, -1, 19, 1, 2, 9, 2, -.03065899945795536, .911558985710144, .040550000965595245, 0, 2, 1, 1, 4, 9, -1, 3, 1, 2, 9, 2, -.0014680000022053719, -.6048979759216309, .16960899531841278, 0, 2, 4, 15, 18, 9, -1, 4, 15, 9, 9, 2, .1907760053873062, .043515000492334366, .8189290165901184, 0, 2, 6, 9, 12, 4, -1, 6, 11, 12, 2, 2, .005179000087082386, -.9361730217933655, .02493700012564659, 0, 2, 15, 2, 9, 6, -1, 15, 4, 9, 2, 3, .024126000702381134, .18175500631332397, -.34185901284217834, 0, 2, 0, 2, 9, 6, -1, 0, 4, 9, 2, 3, -.02638399973511696, -1.2912579774856567, -.0034280000254511833, 0, 2, 15, 0, 6, 17, -1, 17, 0, 2, 17, 3, .005413999781012535, -.04629199951887131, .2526960074901581, 0, 2, 3, 0, 6, 17, -1, 5, 0, 2, 17, 3, .05421600118279457, -.012848000042140484, -1.4304540157318115, 0, 2, 8, 17, 9, 4, -1, 8, 19, 9, 2, 2, .00023799999326001853, -.2667669951915741, .3358829915523529, 0, 2, 6, 5, 3, 18, -1, 6, 11, 3, 6, 3, .015216999687254429, -.5136730074882507, .13005100190639496, 0, 2, 5, 2, 14, 12, -1, 5, 8, 14, 6, 2, .017007999122142792, .41575899720191956, -.31241199374198914, 0, 2, 10, 2, 3, 12, -1, 10, 8, 3, 6, 2, .030496999621391296, -.24820999801158905, .7082849740982056, 0, 2, 10, 7, 14, 15, -1, 10, 12, 14, 5, 3, .006543000228703022, -.22637000679969788, .19184599816799164, 0, 2, 0, 7, 14, 15, -1, 0, 12, 14, 5, 3, .14163999259471893, .06522700190544128, -.8880950212478638, 0, 2, 15, 0, 9, 6, -1, 15, 2, 9, 2, 3, .019338000565767288, .18891200423240662, -.27397701144218445, 0, 2, 0, 0, 9, 6, -1, 0, 2, 9, 2, 3, -.017324000597000122, -.9486669898033142, .02419699914753437, 0, 2, 12, 6, 6, 14, -1, 14, 6, 2, 14, 3, -.006206999998539686, .3693839907646179, -.17494900524616241, 0, 2, 9, 7, 6, 9, -1, 11, 7, 2, 9, 3, -.016109000891447067, .9615949988365173, -.20005300641059875, 0, 2, 12, 6, 6, 15, -1, 14, 6, 2, 15, 3, -.10122500360012054, -3.069911003112793, .1136379987001419, 0, 2, 6, 6, 6, 15, -1, 8, 6, 2, 15, 3, -.007550999987870455, .2292100042104721, -.4564509987831116, 0, 2, 15, 3, 8, 9, -1, 15, 3, 4, 9, 2, .04424799978733063, -.00031599999056197703, .39225301146507263, 0, 2, 0, 0, 9, 21, -1, 3, 0, 3, 21, 3, -.11636000126600266, .9523370265960693, -.20201599597930908, 0, 2, 11, 9, 8, 12, -1, 11, 13, 8, 4, 3, .004736000206321478, -.09917700290679932, .20370499789714813, 0, 3, 6, 7, 10, 12, -1, 6, 7, 5, 6, 2, 11, 13, 5, 6, 2, .0224590003490448, .008728000335395336, -1.0217070579528809, 0, 3, 10, 6, 4, 18, -1, 12, 6, 2, 9, 2, 10, 15, 2, 9, 2, -.012109000235795975, .6481260061264038, -.09014900028705597, 0, 2, 0, 0, 6, 9, -1, 0, 3, 6, 3, 3, .056120000779628754, -.03675999864935875, -1.9275590181350708, 0, 2, 3, 14, 18, 3, -1, 3, 15, 18, 1, 3, -.008737999945878983, .6926130056381226, -.06837499886751175, 0, 3, 3, 14, 8, 10, -1, 3, 14, 4, 5, 2, 7, 19, 4, 5, 2, .006639999803155661, -.4056980013847351, .186257004737854, 0, 3, 0, 12, 24, 4, -1, 12, 12, 12, 2, 2, 0, 14, 12, 2, 2, -.018131999298930168, -.6451820135116577, .21976399421691895, 0, 2, 0, 2, 3, 20, -1, 1, 2, 1, 20, 3, -.022718999534845352, .97776198387146, -.18654300272464752, 0, 3, 12, 16, 10, 8, -1, 17, 16, 5, 4, 2, 12, 20, 5, 4, 2, .01270500011742115, -.10546600073575974, .37404099106788635, 0, 3, 2, 16, 10, 8, -1, 2, 16, 5, 4, 2, 7, 20, 5, 4, 2, -.013682999648153782, .6106410026550293, -.2688109874725342, -3.7160909175872803, 115, 0, 2, 7, 0, 10, 9, -1, 7, 3, 10, 3, 3, .03135799989104271, -1.0183910131454468, .5752859711647034, 0, 2, 0, 0, 24, 3, -1, 8, 0, 8, 3, 3, .09305000305175781, -.412975013256073, 1.009119987487793, 0, 2, 3, 8, 15, 4, -1, 3, 10, 15, 2, 2, .025949999690055847, -.5858790278434753, .5660619735717773, 0, 2, 6, 5, 12, 6, -1, 10, 5, 4, 6, 3, .016472000628709793, -.9285749793052673, .3092449903488159, 0, 2, 5, 13, 14, 6, -1, 5, 16, 14, 3, 2, -.0018779999809339643, .11951000243425369, -1.1180130243301392, 0, 2, 11, 14, 4, 10, -1, 11, 19, 4, 5, 2, -.009012999944388866, -.5784950256347656, .33154401183128357, 0, 2, 0, 6, 6, 7, -1, 3, 6, 3, 7, 2, .022547999396920204, -.38325101137161255, .5246220231056213, 0, 2, 18, 0, 6, 6, -1, 18, 0, 3, 6, 2, -.037780001759529114, 1.1790670156478882, -.03416699916124344, 0, 2, 3, 1, 18, 3, -1, 3, 2, 18, 1, 3, -.005379999987781048, -.8626589775085449, .1186790019273758, 0, 2, 9, 6, 14, 18, -1, 9, 12, 14, 6, 3, -.023893000558018684, -.7495059967041016, .2101140022277832, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.026521999388933182, .9212859869003296, -.28252801299095154, 0, 2, 13, 11, 6, 6, -1, 13, 11, 3, 6, 2, .012280000373721123, .2666279971599579, -.7001360058784485, 0, 2, 0, 20, 24, 3, -1, 8, 20, 8, 3, 3, .09659499675035477, -.28453999757766724, .731689989566803, 0, 2, 13, 11, 6, 7, -1, 13, 11, 3, 7, 2, -.027414999902248383, -.6149269938468933, .15576200187206268, 0, 2, 4, 12, 10, 6, -1, 4, 14, 10, 2, 3, -.01576700061559677, .5755119919776917, -.34362199902534485, 0, 2, 13, 11, 6, 6, -1, 13, 11, 3, 6, 2, -.0021100000012665987, .325996994972229, -.13008299469947815, 0, 2, 5, 11, 6, 7, -1, 8, 11, 3, 7, 2, .012006999924778938, .0893229991197586, -.9602559804916382, 0, 2, 7, 4, 11, 12, -1, 7, 8, 11, 4, 3, -.015421999618411064, .3444949984550476, -.4671199917793274, 0, 2, 6, 15, 10, 4, -1, 6, 17, 10, 2, 2, -.004157999996095896, .23696300387382507, -.5256329774856567, 0, 2, 14, 0, 6, 9, -1, 16, 0, 2, 9, 3, -.021185999736189842, -.7426769733428955, .21702000498771667, 0, 2, 4, 0, 6, 9, -1, 6, 0, 2, 9, 3, -.017077000811696053, -.9047179818153381, .06601200252771378, 0, 2, 11, 2, 4, 15, -1, 11, 7, 4, 5, 3, -.04084999859333038, -.3444660007953644, .215037003159523, 0, 2, 0, 0, 20, 3, -1, 0, 1, 20, 1, 3, -.008193000219762325, -.9338859915733337, .050471000373363495, 0, 2, 13, 18, 10, 6, -1, 13, 20, 10, 2, 3, -.019238000735640526, -.5320370197296143, .17240600287914276, 0, 2, 2, 7, 6, 11, -1, 5, 7, 3, 11, 2, -.04419200122356415, .9207500219345093, -.22148500382900238, 0, 2, 10, 14, 10, 9, -1, 10, 17, 10, 3, 3, -.06239200010895729, -.7105380296707153, .18323899805545807, 0, 2, 8, 2, 4, 9, -1, 10, 2, 2, 9, 2, -.0010079999919980764, -.8706309795379639, .055330000817775726, 0, 2, 14, 3, 10, 4, -1, 14, 3, 5, 4, 2, .02387000061571598, -.2285420000553131, .5241559743881226, 0, 3, 6, 6, 12, 6, -1, 6, 6, 6, 3, 2, 12, 9, 6, 3, 2, .021391000598669052, -.3032589852809906, .5586060285568237, 0, 3, 8, 8, 8, 10, -1, 12, 8, 4, 5, 2, 8, 13, 4, 5, 2, .02025499939918518, .26901501417160034, -.7026180028915405, 0, 2, 7, 4, 4, 16, -1, 7, 12, 4, 8, 2, -.02877200022339821, -1.1835030317306519, .046512000262737274, 0, 2, 8, 8, 9, 4, -1, 8, 10, 9, 2, 2, .0034199999645352364, -.546521008014679, .25962498784065247, 0, 2, 5, 2, 14, 9, -1, 5, 5, 14, 3, 3, .05698300153017044, -.26982900500297546, .5817070007324219, 0, 2, 3, 16, 19, 8, -1, 3, 20, 19, 4, 2, -.09389200061559677, -.9104639887809753, .19677700102329254, 0, 2, 0, 0, 10, 8, -1, 5, 0, 5, 8, 2, .01769999973475933, -.4400329887866974, .21349500119686127, 0, 2, 5, 2, 16, 18, -1, 5, 2, 8, 18, 2, .2284419983625412, .023605000227689743, .7717159986495972, 0, 2, 0, 11, 24, 11, -1, 8, 11, 8, 11, 3, -.18287500739097595, .7922859787940979, -.24644799530506134, 0, 2, 3, 3, 18, 5, -1, 3, 3, 9, 5, 2, -.06989199668169022, .8026779890060425, -.03607200086116791, 0, 2, 1, 16, 18, 3, -1, 1, 17, 18, 1, 3, .015297000296413898, -.20072300732135773, 1.103060007095337, 0, 2, 5, 17, 18, 3, -1, 5, 18, 18, 1, 3, .006750000175088644, -.04596799984574318, .7209450006484985, 0, 2, 1, 13, 9, 6, -1, 1, 15, 9, 2, 3, -.01598300039768219, -.9035720229148865, .0449879989027977, 0, 2, 1, 9, 23, 10, -1, 1, 14, 23, 5, 2, .013088000006973743, .35297098755836487, -.3771060109138489, 0, 2, 3, 7, 18, 3, -1, 3, 8, 18, 1, 3, .013061000034213066, -.19583599269390106, 1.119894027709961, 0, 2, 6, 8, 12, 3, -1, 6, 8, 6, 3, 2, -.039907000958919525, -1.3998429775238037, .19145099818706512, 0, 2, 6, 2, 3, 22, -1, 7, 2, 1, 22, 3, .01502699963748455, .002360000042244792, -1.1611249446868896, 0, 2, 14, 17, 10, 6, -1, 14, 19, 10, 2, 3, -.020517999306321144, -.4890809953212738, .16743400692939758, 0, 2, 1, 18, 10, 6, -1, 1, 20, 10, 2, 3, -.022359000518918037, -1.2202980518341064, -.011975999921560287, 0, 2, 11, 3, 6, 12, -1, 13, 3, 2, 12, 3, -.007915000431239605, .3722809851169586, -.08506300300359726, 0, 2, 10, 6, 4, 9, -1, 12, 6, 2, 9, 2, .0152580002322793, -.2941260039806366, .5940639972686768, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, -.031665999442338943, -1.4395569562911987, .1357879936695099, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.03077399916946888, -2.2545371055603027, -.03397100046277046, 0, 2, 12, 10, 9, 6, -1, 15, 10, 3, 6, 3, -.015483000315725803, .37700700759887695, .01584799960255623, 0, 2, 2, 11, 6, 9, -1, 5, 11, 3, 9, 2, .03516700118780136, -.2944610118865967, .53159099817276, 0, 2, 14, 5, 3, 19, -1, 15, 5, 1, 19, 3, -.017906000837683678, -.9978820085525513, .16235999763011932, 0, 2, 6, 6, 9, 6, -1, 6, 8, 9, 2, 3, -.0031799999997019768, .04765700176358223, -.752498984336853, 0, 2, 14, 5, 3, 19, -1, 15, 5, 1, 19, 3, .015720000490546227, .14873799681663513, -.6537539958953857, 0, 2, 0, 3, 6, 9, -1, 0, 6, 6, 3, 3, .029864000156521797, -.014952000230550766, -1.2275190353393555, 0, 2, 5, 21, 18, 3, -1, 5, 22, 18, 1, 3, .0029899999499320984, -.1426369994878769, .43272799253463745, 0, 2, 1, 10, 18, 4, -1, 7, 10, 6, 4, 3, .08474999666213989, -.019280999898910522, -1.1946409940719604, 0, 3, 13, 4, 8, 10, -1, 17, 4, 4, 5, 2, 13, 9, 4, 5, 2, -.05872499942779541, -1.7328219413757324, .1437470018863678, 0, 2, 7, 8, 9, 6, -1, 10, 8, 3, 6, 3, .044755998998880386, -.24140599370002747, .5401999950408936, 0, 2, 12, 9, 9, 8, -1, 15, 9, 3, 8, 3, .040369000285863876, .0057680001482367516, .5657809972763062, 0, 2, 0, 6, 5, 12, -1, 0, 10, 5, 4, 3, .03773599863052368, .03818099945783615, -.7937039732933044, 0, 3, 7, 6, 14, 6, -1, 14, 6, 7, 3, 2, 7, 9, 7, 3, 2, .060752999037504196, .07645300030708313, 1.4813209772109985, 0, 2, 7, 5, 3, 19, -1, 8, 5, 1, 19, 3, -.019832000136375427, -1.6971720457077026, -.027370000258088112, 0, 2, 8, 4, 15, 20, -1, 13, 4, 5, 20, 3, -.165926992893219, .6297600269317627, .031762998551130295, 0, 2, 1, 4, 15, 20, -1, 6, 4, 5, 20, 3, .06901499629020691, -.334632009267807, .3007670044898987, 0, 2, 13, 10, 6, 6, -1, 13, 10, 3, 6, 2, .011358000338077545, .22741499543190002, -.3822470009326935, 0, 2, 5, 10, 6, 6, -1, 8, 10, 3, 6, 2, .0017000000225380063, .1922380030155182, -.5273510217666626, 0, 3, 14, 2, 6, 14, -1, 17, 2, 3, 7, 2, 14, 9, 3, 7, 2, .07976900041103363, .09149199724197388, 2.104904890060425, 0, 3, 4, 2, 6, 14, -1, 4, 2, 3, 7, 2, 7, 9, 3, 7, 2, -.05714400112628937, -1.7452130317687988, -.04091000184416771, 0, 2, 12, 4, 6, 7, -1, 12, 4, 3, 7, 2, .0073830001056194305, -.2421479970216751, .3557780086994171, 0, 2, 9, 4, 6, 9, -1, 11, 4, 2, 9, 3, -.01804099977016449, 1.1779999732971191, -.1767670065164566, 0, 2, 11, 4, 8, 10, -1, 11, 4, 4, 10, 2, .0945030003786087, .13936099410057068, -1.2993700504302979, 0, 2, 5, 4, 8, 10, -1, 9, 4, 4, 10, 2, .005421000067144632, -.5460860133171082, .139164000749588, 0, 2, 8, 18, 10, 6, -1, 8, 20, 10, 2, 3, .007029000204056501, -.21597200632095337, .3925809860229492, 0, 2, 1, 18, 21, 6, -1, 1, 20, 21, 2, 3, .034515999257564545, .06318899989128113, -.721081018447876, 0, 2, 9, 2, 12, 6, -1, 9, 2, 6, 6, 2, -.05192499980330467, .686676025390625, .06327299773693085, 0, 2, 3, 2, 12, 6, -1, 9, 2, 6, 6, 2, -.06916200369596481, 1.7411810159683228, -.16619299352169037, 0, 3, 12, 5, 12, 6, -1, 18, 5, 6, 3, 2, 12, 8, 6, 3, 2, -.0055229999125003815, .3069469928741455, -.16662900149822235, 0, 2, 8, 8, 6, 9, -1, 8, 11, 6, 3, 3, .06859999895095825, -.21405400335788727, .7318500280380249, 0, 2, 2, 7, 20, 6, -1, 2, 9, 20, 2, 3, -.06703899800777435, -.7936059832572937, .20525799691677094, 0, 3, 0, 5, 12, 6, -1, 0, 5, 6, 3, 2, 6, 8, 6, 3, 2, -.021005000919103622, .37344399094581604, -.29618600010871887, 0, 3, 14, 14, 8, 10, -1, 18, 14, 4, 5, 2, 14, 19, 4, 5, 2, .02027899958193302, -.015200000256299973, .40555301308631897, 0, 3, 2, 14, 8, 10, -1, 2, 14, 4, 5, 2, 6, 19, 4, 5, 2, -.0471079982817173, 1.2116849422454834, -.17464299499988556, 0, 2, 2, 11, 20, 13, -1, 2, 11, 10, 13, 2, .18768499791622162, -.022909000515937805, .6964579820632935, 0, 2, 6, 9, 12, 5, -1, 12, 9, 6, 5, 2, -.04322899878025055, -1.0602480173110962, -.0005559999844990671, 0, 3, 5, 6, 16, 6, -1, 13, 6, 8, 3, 2, 5, 9, 8, 3, 2, .020004000514745712, -.03275100141763687, .5380510091781616, 0, 2, 1, 19, 9, 4, -1, 1, 21, 9, 2, 2, .008088000118732452, .0375480018556118, -.7476890087127686, 0, 2, 7, 5, 12, 5, -1, 11, 5, 4, 5, 3, .027101000770926476, -.0817900002002716, .3338710069656372, 0, 3, 3, 5, 14, 12, -1, 3, 5, 7, 6, 2, 10, 11, 7, 6, 2, -.0917460024356842, -1.9213509559631348, -.03895299881696701, 0, 2, 9, 4, 9, 6, -1, 12, 4, 3, 6, 3, -.01245499961078167, .4836060106754303, .018168000504374504, 0, 2, 2, 6, 19, 3, -1, 2, 7, 19, 1, 3, .014649000018835068, -.19906699657440186, .7281540036201477, 0, 2, 18, 10, 6, 9, -1, 18, 13, 6, 3, 3, .02910199947655201, .19871099293231964, -.49216800928115845, 0, 2, 3, 7, 18, 2, -1, 3, 8, 18, 1, 2, .008779999800026417, -.19499599933624268, .773173987865448, 0, 3, 20, 2, 4, 18, -1, 22, 2, 2, 9, 2, 20, 11, 2, 9, 2, -.054740000516176224, 1.8087190389633179, .06832300126552582, 0, 2, 2, 18, 20, 3, -1, 2, 19, 20, 1, 3, -.014798000454902649, .7806490063667297, -.1870959997177124, 0, 2, 1, 9, 22, 3, -1, 1, 10, 22, 1, 3, .025012999773025513, .15285299718379974, -1.6021020412445068, 0, 3, 0, 2, 4, 18, -1, 0, 2, 2, 9, 2, 2, 11, 2, 9, 2, .04654800146818161, -.16738200187683105, 1.1902060508728027, 0, 2, 19, 0, 4, 23, -1, 19, 0, 2, 23, 2, .01762400008738041, -.10285499691963196, .3917590081691742, 0, 2, 0, 3, 6, 19, -1, 3, 3, 3, 19, 2, .16319599747657776, -.035624001175165176, -1.6098170280456543, 0, 2, 18, 2, 6, 9, -1, 20, 2, 2, 9, 3, .013137999922037125, -.056359000504016876, .5415890216827393, 0, 2, 0, 5, 10, 6, -1, 0, 7, 10, 2, 3, -.015665000304579735, .28063100576400757, -.31708601117134094, 0, 3, 7, 0, 12, 12, -1, 13, 0, 6, 6, 2, 7, 6, 6, 6, 2, .08055400103330612, .12640400230884552, -1.0297529697418213, 0, 3, 0, 3, 24, 6, -1, 0, 3, 12, 3, 2, 12, 6, 12, 3, 2, .035363998264074326, .020752999931573868, -.7910559773445129, 0, 2, 10, 14, 4, 10, -1, 10, 19, 4, 5, 2, .032986998558044434, .19057099521160126, -.8383989930152893, 0, 2, 8, 9, 4, 15, -1, 8, 14, 4, 5, 3, .012195000424981117, .0737290009856224, -.6278070211410522, 0, 2, 4, 11, 17, 6, -1, 4, 14, 17, 3, 2, .04306599870324135, .04738499969244003, 1.5712939500808716, 0, 3, 2, 5, 18, 8, -1, 2, 5, 9, 4, 2, 11, 9, 9, 4, 2, .030326999723911285, -.27314600348472595, .38572001457214355, 0, 3, 7, 6, 14, 6, -1, 14, 6, 7, 3, 2, 7, 9, 7, 3, 2, .03549300134181976, .054593998938798904, .5258340239524841, 0, 3, 3, 6, 14, 6, -1, 3, 6, 7, 3, 2, 10, 9, 7, 3, 2, -.014596999622881413, .38152599334716797, -.2833240032196045, 0, 2, 16, 5, 3, 18, -1, 17, 5, 1, 18, 3, .012606999836862087, .15455099940299988, -.3050149977207184, 0, 2, 5, 5, 3, 18, -1, 6, 5, 1, 18, 3, .010172000154852867, .02363700047135353, -.8721789717674255, 0, 2, 10, 10, 14, 4, -1, 10, 12, 14, 2, 2, .028843000531196594, .1609099954366684, -.2027759999036789, 0, 2, 4, 10, 9, 4, -1, 4, 12, 9, 2, 2, .0005510000046342611, -.6154540181159973, .080935999751091, -3.5645289421081543, 127, 0, 2, 2, 0, 18, 9, -1, 2, 3, 18, 3, 3, .048344001173973083, -.849045991897583, .5697439908981323, 0, 2, 6, 3, 12, 8, -1, 10, 3, 4, 8, 3, .03246000036597252, -.8141729831695557, .44781699776649475, 0, 2, 1, 1, 8, 5, -1, 5, 1, 4, 5, 2, .03333999961614609, -.3642379939556122, .6793739795684814, 0, 2, 12, 7, 7, 8, -1, 12, 11, 7, 4, 2, .006401999853551388, -1.1885459423065186, .19238699972629547, 0, 2, 0, 12, 22, 4, -1, 0, 14, 22, 2, 2, -.005688999779522419, .3308529853820801, -.7133409976959229, 0, 2, 15, 6, 4, 15, -1, 15, 11, 4, 5, 3, .01269800029695034, -.5099080204963684, .1137629970908165, 0, 2, 5, 7, 7, 8, -1, 5, 11, 7, 4, 2, .006054999772459269, -1.0470550060272217, .20222599804401398, 0, 2, 8, 18, 9, 4, -1, 8, 20, 9, 2, 2, .0026420000940561295, -.50559401512146, .36441200971603394, 0, 2, 1, 2, 22, 4, -1, 1, 4, 22, 2, 2, -.016925999894738197, -.9954190254211426, .12602199614048004, 0, 2, 17, 3, 6, 17, -1, 19, 3, 2, 17, 3, .02823599986732006, -.0941379964351654, .5778040289878845, 0, 2, 8, 2, 8, 18, -1, 8, 11, 8, 9, 2, .010428999550640583, .2327290028333664, -.5256969928741455, 0, 3, 17, 0, 6, 12, -1, 20, 0, 3, 6, 2, 17, 6, 3, 6, 2, .0098860003054142, -.10316299647092819, .4765760004520416, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, .02601500041782856, -.0010920000495389104, -1.5581729412078857, 0, 2, 15, 5, 9, 12, -1, 15, 11, 9, 6, 2, -.025537999346852303, -.6545140147209167, .1884319931268692, 0, 2, 2, 22, 18, 2, -1, 2, 23, 18, 1, 2, -.0035310001112520695, .2814059853553772, -.4457530081272125, 0, 3, 10, 10, 12, 6, -1, 16, 10, 6, 3, 2, 10, 13, 6, 3, 2, .009244999848306179, .15612000226974487, -.2137099951505661, 0, 2, 0, 1, 4, 11, -1, 2, 1, 2, 11, 2, .021030999720096588, -.2917029857635498, .5223410129547119, 0, 2, 20, 0, 4, 10, -1, 20, 0, 2, 10, 2, -.05106300115585327, 1.3661290407180786, .030465999618172646, 0, 2, 1, 3, 6, 17, -1, 3, 3, 2, 17, 3, -.06233000010251999, 1.220702052116394, -.22434400022029877, 0, 2, 15, 15, 9, 6, -1, 15, 17, 9, 2, 3, -.03296300023794174, -.8201680183410645, .14531899988651276, 0, 2, 0, 13, 8, 9, -1, 0, 16, 8, 3, 3, -.037418000400066376, -1.221809983253479, .01944899931550026, 0, 2, 16, 8, 6, 12, -1, 16, 12, 6, 4, 3, .12402799725532532, .12082300335168839, -.987293004989624, 0, 2, 2, 8, 6, 12, -1, 2, 12, 6, 4, 3, -.00892299972474575, -1.168848991394043, .021105000749230385, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.05987999960780144, -1.0689330101013184, .19860200583934784, 0, 2, 1, 5, 19, 3, -1, 1, 6, 19, 1, 3, .006262000184506178, -.3622959852218628, .3800080120563507, 0, 2, 11, 8, 9, 7, -1, 14, 8, 3, 7, 3, -.017673000693321228, .49094098806381226, -.14606699347496033, 0, 2, 3, 8, 12, 9, -1, 3, 11, 12, 3, 3, .01757900044322014, .5872809886932373, -.27774399518966675, 0, 2, 3, 6, 18, 3, -1, 3, 7, 18, 1, 3, .005156000144779682, -.07519499957561493, .6019309759140015, 0, 2, 10, 0, 4, 12, -1, 10, 6, 4, 6, 2, -.010599999688565731, .2763740122318268, -.3779430091381073, 0, 2, 3, 9, 18, 14, -1, 3, 9, 9, 14, 2, .2088409960269928, -.00535999983549118, 1.0317809581756592, 0, 2, 0, 0, 4, 9, -1, 2, 0, 2, 9, 2, -.026412999257445335, .8233640193939209, -.22480599582195282, 0, 2, 12, 5, 4, 18, -1, 12, 5, 2, 18, 2, .05889200046658516, .13098299503326416, -1.1853699684143066, 0, 2, 8, 5, 4, 18, -1, 10, 5, 2, 18, 2, -.011579000391066074, -.9066780209541321, .044126998633146286, 0, 2, 10, 5, 6, 10, -1, 12, 5, 2, 10, 3, .04598800092935562, .010143999941647053, 1.0740900039672852, 0, 2, 9, 4, 4, 11, -1, 11, 4, 2, 11, 2, -.02283800020813942, 1.7791990041732788, -.17315499484539032, 0, 2, 4, 16, 18, 3, -1, 4, 17, 18, 1, 3, -.008170999586582184, .5738630294799805, -.07410600036382675, 0, 2, 0, 16, 20, 3, -1, 0, 17, 20, 1, 3, .0035359999164938927, -.32072898745536804, .4018250107765198, 0, 2, 9, 9, 6, 12, -1, 9, 13, 6, 4, 3, .04944499954581261, .19288000464439392, -1.216670036315918, 0, 2, 8, 13, 8, 8, -1, 8, 17, 8, 4, 2, .003513999981805682, .06956800073385239, -.7132369875907898, 0, 2, 13, 10, 3, 12, -1, 13, 16, 3, 6, 2, -.03099600039422512, -.388621985912323, .18098799884319305, 0, 3, 5, 9, 14, 14, -1, 5, 9, 7, 7, 2, 12, 16, 7, 7, 2, .08645299822092056, -.02579299919307232, -1.5453219413757324, 0, 3, 0, 0, 24, 10, -1, 12, 0, 12, 5, 2, 0, 5, 12, 5, 2, -.13652600347995758, -1.919942021369934, .16613300144672394, 0, 2, 1, 11, 18, 2, -1, 1, 12, 18, 1, 2, -.005768999923020601, -1.2822589874267578, -.015907999128103256, 0, 2, 19, 5, 5, 12, -1, 19, 9, 5, 4, 3, -.017899999395012856, -.4040989875793457, .23591600358486176, 0, 2, 0, 5, 5, 12, -1, 0, 9, 5, 4, 3, -.01996999979019165, -.7289190292358398, .05623500049114227, 0, 3, 16, 6, 8, 18, -1, 20, 6, 4, 9, 2, 16, 15, 4, 9, 2, -.057493001222610474, .5783079862594604, -.015796000137925148, 0, 3, 0, 6, 8, 18, -1, 0, 6, 4, 9, 2, 4, 15, 4, 9, 2, -.0830560028553009, .915116012096405, -.21121400594711304, 0, 3, 12, 5, 12, 12, -1, 18, 5, 6, 6, 2, 12, 11, 6, 6, 2, -.0537710003554821, -.5193129777908325, .1857600063085556, 0, 2, 7, 6, 6, 9, -1, 9, 6, 2, 9, 3, -.00836700014770031, .24109700322151184, -.3964860141277313, 0, 2, 9, 13, 6, 11, -1, 11, 13, 2, 11, 3, .055406998842954636, .16771200299263, -2.5664970874786377, 0, 3, 0, 5, 12, 12, -1, 0, 5, 6, 6, 2, 6, 11, 6, 6, 2, -.06718099862337112, -1.3658570051193237, -.014232000336050987, 0, 2, 1, 2, 23, 3, -1, 1, 3, 23, 1, 3, -.023900000378489494, -1.7084569931030273, .16507799923419952, 0, 2, 1, 15, 19, 3, -1, 1, 16, 19, 1, 3, .005594999995082617, -.31373998522758484, .3283790051937103, 0, 2, 13, 17, 11, 4, -1, 13, 19, 11, 2, 2, .02129499986767769, .14953400194644928, -.4857980012893677, 0, 2, 0, 13, 8, 5, -1, 4, 13, 4, 5, 2, -.024613000452518463, .7434639930725098, -.2230519950389862, 0, 2, 12, 10, 10, 4, -1, 12, 10, 5, 4, 2, -.01962600089609623, -.40918299555778503, .18893200159072876, 0, 2, 4, 6, 9, 9, -1, 4, 9, 9, 3, 3, -.053266000002622604, .8138160109519958, -.2085369974374771, 0, 2, 15, 14, 9, 6, -1, 15, 16, 9, 2, 3, .007129000034183264, .32996100187301636, -.599373996257782, 0, 2, 1, 12, 9, 6, -1, 1, 14, 9, 2, 3, -.02248699963092804, -1.2551610469818115, -.020413000136613846, 0, 3, 3, 10, 20, 8, -1, 13, 10, 10, 4, 2, 3, 14, 10, 4, 2, -.0823109969496727, 1.3821430206298828, .05930899828672409, 0, 2, 2, 0, 9, 18, -1, 5, 0, 3, 18, 3, .13097000122070312, -.035843998193740845, -1.5396369695663452, 0, 2, 13, 11, 9, 10, -1, 16, 11, 3, 10, 3, .014293000102043152, -.18475200235843658, .3745500147342682, 0, 2, 1, 2, 8, 5, -1, 5, 2, 4, 5, 2, .006347999908030033, -.4490109980106354, .1387699991464615, 0, 2, 3, 4, 21, 6, -1, 10, 4, 7, 6, 3, -.04605500027537346, .6783260107040405, -.017071999609470367, 0, 3, 7, 0, 10, 14, -1, 7, 0, 5, 7, 2, 12, 7, 5, 7, 2, .057693999260663986, -.01195599976927042, -1.2261159420013428, 0, 2, 12, 17, 12, 4, -1, 12, 19, 12, 2, 2, -.006060999818146229, .3395859897136688, .0006280000088736415, 0, 2, 0, 6, 23, 4, -1, 0, 8, 23, 2, 2, -.05216300114989281, -1.062106966972351, -.013779999688267708, 0, 3, 13, 10, 8, 10, -1, 17, 10, 4, 5, 2, 13, 15, 4, 5, 2, .04657299816608429, .14538800716400146, -1.238455057144165, 0, 2, 0, 16, 18, 3, -1, 0, 17, 18, 1, 3, .007530999835580587, -.24467700719833374, .5137709975242615, 0, 2, 15, 16, 9, 4, -1, 15, 18, 9, 2, 2, .021615000441670418, .13072599470615387, -.7099679708480835, 0, 2, 0, 16, 9, 4, -1, 0, 18, 9, 2, 2, -.01786400005221367, -1.0474660396575928, .0004959999932907522, 0, 2, 13, 11, 6, 6, -1, 13, 11, 3, 6, 2, -.03719500079751015, -1.512673020362854, .14801399409770966, 0, 2, 5, 11, 6, 6, -1, 8, 11, 3, 6, 2, -.0003110000106971711, .13971500098705292, -.46867498755455017, 0, 3, 0, 3, 24, 6, -1, 12, 3, 12, 3, 2, 0, 6, 12, 3, 2, .025042999535799026, .2863200008869171, -.417946994304657, 0, 2, 2, 4, 18, 3, -1, 2, 5, 18, 1, 3, .009344999678432941, -.27336201071739197, .4344469904899597, 0, 3, 0, 0, 24, 4, -1, 12, 0, 12, 2, 2, 0, 2, 12, 2, 2, .032363999634981155, .18438899517059326, -.9501929879188538, 0, 2, 1, 16, 18, 3, -1, 1, 17, 18, 1, 3, -.00622999994084239, .3258199989795685, -.30815601348876953, 0, 2, 15, 15, 9, 6, -1, 15, 17, 9, 2, 3, .05148899927735329, .11416000127792358, -1.9795479774475098, 0, 2, 0, 15, 9, 6, -1, 0, 17, 9, 2, 3, -.02644900046288967, -1.1067299842834473, -.008551999926567078, 0, 2, 6, 17, 18, 3, -1, 6, 18, 18, 1, 3, -.015420000068843365, .8013870120048523, -.03203500062227249, 0, 2, 8, 8, 6, 10, -1, 10, 8, 2, 10, 3, .019456999376416206, -.26449498534202576, .38753899931907654, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, .03362099826335907, .0160520002245903, .5884090065956116, 0, 2, 8, 8, 5, 8, -1, 8, 12, 5, 4, 2, .028906000778079033, .015216000378131866, -.9472360014915466, 0, 2, 12, 8, 6, 8, -1, 12, 12, 6, 4, 2, .00020300000323913991, -.3076600134372711, .2123589962720871, 0, 2, 6, 5, 6, 11, -1, 8, 5, 2, 11, 3, -.04914199933409691, -1.605860948562622, -.031094999983906746, 0, 2, 13, 6, 8, 9, -1, 13, 9, 8, 3, 3, .07642599940299988, .07475899904966354, 1.1639410257339478, 0, 2, 1, 7, 21, 6, -1, 1, 9, 21, 2, 3, .02389799989759922, -.006432000081986189, -1.1150749921798706, 0, 2, 15, 5, 3, 12, -1, 15, 11, 3, 6, 2, .003897000104188919, -.24105699360370636, .20858900249004364, 0, 2, 6, 9, 11, 12, -1, 6, 13, 11, 4, 3, -.08944500237703323, 1.9157789945602417, -.15721100568771362, 0, 3, 13, 8, 10, 8, -1, 18, 8, 5, 4, 2, 13, 12, 5, 4, 2, -.015008999966084957, -.2517409920692444, .1817989945411682, 0, 2, 5, 8, 12, 3, -1, 11, 8, 6, 3, 2, -.011145999655127525, -.693494975566864, .04492799937725067, 0, 2, 6, 11, 18, 4, -1, 12, 11, 6, 4, 3, .09457899630069733, .18102100491523743, -.7497860193252563, 0, 2, 0, 0, 22, 22, -1, 0, 11, 22, 11, 2, .5503889918327332, -.030974000692367554, -1.6746139526367188, 0, 2, 11, 2, 6, 8, -1, 11, 6, 6, 4, 2, .041381001472473145, .06391000002622604, .765612006187439, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, .024771999567747116, .011380000039935112, -.8855940103530884, 0, 2, 10, 0, 6, 9, -1, 12, 0, 2, 9, 3, .050999000668525696, .1489029973745346, -2.463421106338501, 0, 3, 8, 3, 6, 14, -1, 8, 3, 3, 7, 2, 11, 10, 3, 7, 2, -.01689399965107441, .38870999217033386, -.2988030016422272, 0, 2, 3, 10, 18, 8, -1, 9, 10, 6, 8, 3, -.12162300199270248, -1.5542800426483154, .16300800442695618, 0, 2, 10, 0, 3, 14, -1, 10, 7, 3, 7, 2, -.003604999976232648, .21842800080776215, -.3731209933757782, 0, 2, 4, 3, 16, 20, -1, 4, 13, 16, 10, 2, .11575400084257126, -.047061000019311905, .5940369963645935, 0, 2, 9, 4, 6, 10, -1, 11, 4, 2, 10, 3, .036903999745845795, -.2550860047340393, .5539730191230774, 0, 2, 5, 0, 16, 4, -1, 5, 2, 16, 2, 2, .011483999900519848, -.1812949925661087, .40682798624038696, 0, 2, 2, 5, 18, 4, -1, 8, 5, 6, 4, 3, -.02023399993777275, .5431119799613953, -.23822399973869324, 0, 2, 13, 0, 6, 9, -1, 15, 0, 2, 9, 3, -.0287650004029274, -.6917229890823364, .1594330072402954, 0, 2, 8, 4, 8, 5, -1, 12, 4, 4, 5, 2, -.00583200016990304, .29447799921035767, -.3400599956512451, 0, 2, 12, 10, 10, 4, -1, 12, 10, 5, 4, 2, -.05546899884939194, .9220079779624939, .09409300237894058, 0, 2, 2, 10, 10, 4, -1, 7, 10, 5, 4, 2, -.014801000244915485, -.7953969836235046, .0315219983458519, 0, 2, 7, 11, 12, 5, -1, 11, 11, 4, 5, 3, -.0070940000005066395, .3309600055217743, -.05088699981570244, 0, 3, 3, 10, 8, 10, -1, 3, 10, 4, 5, 2, 7, 15, 4, 5, 2, -.04512400180101395, -1.3719749450683594, -.02140899933874607, 0, 2, 11, 12, 9, 8, -1, 14, 12, 3, 8, 3, .06437700241804123, .06390199810266495, .9147830009460449, 0, 2, 0, 21, 24, 3, -1, 8, 21, 8, 3, 3, -.014727000147104263, .36050599813461304, -.28614500164985657, 0, 2, 3, 20, 18, 4, -1, 9, 20, 6, 4, 3, .04500700160861015, -.15619699656963348, .5316029787063599, 0, 2, 1, 15, 9, 6, -1, 1, 17, 9, 2, 3, -.001133000012487173, .13422900438308716, -.4435890018939972, 0, 2, 11, 17, 10, 4, -1, 11, 19, 10, 2, 2, .04945100098848343, .10571800172328949, -2.5589139461517334, 0, 2, 9, 12, 4, 12, -1, 9, 18, 4, 6, 2, .029102999716997147, -.010088000446557999, -1.1073939800262451, 0, 2, 9, 6, 9, 6, -1, 12, 6, 3, 6, 3, .03478600084781647, -.0027719999197870493, .5670099854469299, 0, 2, 1, 13, 6, 9, -1, 1, 16, 6, 3, 3, -.006130999885499477, -.46889400482177734, .12636399269104004, 0, 2, 6, 16, 12, 4, -1, 6, 18, 12, 2, 2, .015525000169873238, -.008427999913692474, .8746920228004456, 0, 2, 1, 5, 20, 3, -1, 1, 6, 20, 1, 3, .0029249999206513166, -.34434300661087036, .20851600170135498, 0, 2, 8, 1, 9, 9, -1, 8, 4, 9, 3, 3, -.05357100069522858, 1.4982949495315552, .057328000664711, 0, 2, 2, 19, 9, 4, -1, 2, 21, 9, 2, 2, -.019217999652028084, -.9923409819602966, -.009391999803483486, 0, 2, 11, 1, 4, 18, -1, 11, 7, 4, 6, 3, -.05528299883008003, -.5768229961395264, .1686059981584549, 0, 3, 7, 2, 8, 12, -1, 7, 2, 4, 6, 2, 11, 8, 4, 6, 2, .05633600056171417, -.033775001764297485, -1.3889650106430054, 0, 2, 11, 10, 9, 8, -1, 14, 10, 3, 8, 3, -.023824000731110573, .40182098746299744, .0018360000103712082, 0, 2, 5, 11, 12, 5, -1, 9, 11, 4, 5, 3, .0017810000572353601, .18145999312400818, -.4174340069293976, 0, 2, 11, 9, 9, 6, -1, 14, 9, 3, 6, 3, -.037689000368118286, .5468310117721558, .018219999969005585, 0, 2, 5, 10, 6, 9, -1, 7, 10, 2, 9, 3, -.02414499968290329, .6835209727287292, -.19650200009346008, -3.702599048614502, 135, 0, 2, 4, 7, 5, 12, -1, 4, 11, 5, 4, 3, .027444999665021896, -.8998420238494873, .5187649726867676, 0, 2, 2, 0, 21, 6, -1, 9, 0, 7, 6, 3, .1155410036444664, -.5652440190315247, .7055130004882812, 0, 2, 7, 6, 10, 6, -1, 7, 8, 10, 2, 3, -.022297000512480736, .36079999804496765, -.668645977973938, 0, 2, 9, 0, 6, 15, -1, 11, 0, 2, 15, 3, .013325000181794167, -.5557339787483215, .3578999936580658, 0, 2, 2, 2, 18, 2, -1, 2, 3, 18, 1, 2, -.0038060001097619534, -1.0713000297546387, .18850000202655792, 0, 2, 8, 17, 8, 6, -1, 8, 20, 8, 3, 2, -.002681999932974577, -.7158430218696594, .2634449899196625, 0, 2, 3, 0, 18, 2, -1, 3, 1, 18, 1, 2, .003381999908015132, -.4693079888820648, .26658400893211365, 0, 2, 8, 0, 9, 6, -1, 11, 0, 3, 6, 3, .03764300048351288, .21098700165748596, -1.080433964729309, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, -.013861999846994877, .6691200137138367, -.27942800521850586, 0, 2, 6, 7, 12, 5, -1, 10, 7, 4, 5, 3, -.002735000103712082, -.9533230066299438, .24051299691200256, 0, 2, 0, 3, 6, 9, -1, 2, 3, 2, 9, 3, -.03833699971437454, .8143280148506165, -.24919399619102478, 0, 2, 20, 2, 4, 9, -1, 20, 2, 2, 9, 2, -.0346979983150959, 1.2330100536346436, .00686000008136034, 0, 2, 0, 2, 4, 9, -1, 2, 2, 2, 9, 2, .023360999301075935, -.3079470098018646, .7071449756622314, 0, 3, 0, 1, 24, 4, -1, 12, 1, 12, 2, 2, 0, 3, 12, 2, 2, .035057999193668365, .21205900609493256, -1.4399830102920532, 0, 2, 0, 16, 9, 6, -1, 0, 18, 9, 2, 3, -.013256999664008617, -.9026070237159729, .04861000180244446, 0, 2, 14, 13, 9, 6, -1, 14, 15, 9, 2, 3, .012740000151097775, .22655199468135834, -.4464380145072937, 0, 2, 0, 15, 19, 3, -1, 0, 16, 19, 1, 3, .003640000009909272, -.39817899465560913, .3466539978981018, 0, 3, 1, 5, 22, 12, -1, 12, 5, 11, 6, 2, 1, 11, 11, 6, 2, .10064700245857239, .18383599817752838, -1.3410769701004028, 0, 2, 5, 13, 6, 6, -1, 8, 13, 3, 6, 2, 0, .1553640067577362, -.5158249735832214, 0, 2, 4, 2, 20, 3, -1, 4, 3, 20, 1, 3, .01170899998396635, .2165140062570572, -.7270519733428955, 0, 2, 8, 14, 6, 10, -1, 10, 14, 2, 10, 3, -.035964999347925186, -1.478950023651123, -.024317000061273575, 0, 3, 6, 12, 16, 6, -1, 14, 12, 8, 3, 2, 6, 15, 8, 3, 2, -.021236000582575798, -.16844099760055542, .195265993475914, 0, 2, 2, 13, 8, 9, -1, 2, 16, 8, 3, 3, .01487400010228157, .03733599931001663, -.8755729794502258, 0, 3, 11, 8, 6, 14, -1, 14, 8, 3, 7, 2, 11, 15, 3, 7, 2, -.005140999797731638, .3346650004386902, -.24109700322151184, 0, 3, 2, 12, 16, 6, -1, 2, 12, 8, 3, 2, 10, 15, 8, 3, 2, .02345000021159649, .0055320002138614655, -1.250972032546997, 0, 2, 5, 16, 16, 8, -1, 5, 20, 16, 4, 2, -.02506200037896633, .4521239995956421, -.0844699963927269, 0, 2, 9, 1, 4, 12, -1, 9, 7, 4, 6, 2, -.0007740000146441162, .1524990051984787, -.4848650097846985, 0, 3, 8, 2, 8, 10, -1, 12, 2, 4, 5, 2, 8, 7, 4, 5, 2, -.040483999997377396, -1.3024920225143433, .1798350065946579, 0, 3, 6, 6, 12, 6, -1, 6, 6, 6, 3, 2, 12, 9, 6, 3, 2, .028170999139547348, -.24410900473594666, .6227110028266907, 0, 2, 10, 7, 6, 9, -1, 12, 7, 2, 9, 3, .04569299891591072, .02812200039625168, .9239439964294434, 0, 3, 0, 0, 8, 12, -1, 0, 0, 4, 6, 2, 4, 6, 4, 6, 2, .039707001298666, -.22332799434661865, .7767400145530701, 0, 2, 18, 8, 6, 9, -1, 18, 11, 6, 3, 3, .0505170002579689, .20319999754428864, -1.0895930528640747, 0, 2, 2, 12, 6, 6, -1, 5, 12, 3, 6, 2, -.017266999930143356, .6859840154647827, -.23304499685764313, 0, 2, 3, 21, 21, 3, -1, 10, 21, 7, 3, 3, .08018600195646286, -.010292000137269497, .6188110113143921, 0, 2, 2, 0, 16, 6, -1, 2, 3, 16, 3, 2, .09767600148916245, -.2007029950618744, 1.008834958076477, 0, 2, 13, 6, 7, 6, -1, 13, 9, 7, 3, 2, -.015572000294923782, .4761529862880707, .04562399908900261, 0, 2, 6, 4, 4, 14, -1, 6, 11, 4, 7, 2, -.015305000357329845, -1.1077369451522827, .004523999989032745, 0, 2, 9, 7, 6, 9, -1, 11, 7, 2, 9, 3, -.016485000029206276, 1.0152939558029175, .016327999532222748, 0, 3, 7, 8, 6, 14, -1, 7, 8, 3, 7, 2, 10, 15, 3, 7, 2, -.026141999289393425, .4172329902648926, -.2864550054073334, 0, 2, 18, 8, 4, 16, -1, 18, 16, 4, 8, 2, .008867999538779259, .21404999494552612, -.1677280068397522, 0, 2, 9, 14, 6, 10, -1, 11, 14, 2, 10, 3, -.02688699960708618, -1.1564220190048218, -.010324000380933285, 0, 2, 6, 11, 12, 5, -1, 10, 11, 4, 5, 3, .007778999861329794, .35359498858451843, -.2961130142211914, 0, 2, 0, 12, 23, 3, -1, 0, 13, 23, 1, 3, -.015974000096321106, -1.5374109745025635, -.029958000406622887, 0, 2, 13, 0, 6, 12, -1, 15, 0, 2, 12, 3, .02086699940264225, .20244100689888, -.7127019762992859, 0, 2, 0, 10, 12, 5, -1, 4, 10, 4, 5, 3, .08548200130462646, -.025932999327778816, -1.5156569480895996, 0, 2, 13, 2, 10, 4, -1, 13, 4, 10, 2, 2, .023872999474406242, .16803400218486786, -.3880620002746582, 0, 2, 5, 0, 6, 12, -1, 7, 0, 2, 12, 3, -.03910500183701515, -1.195834994316101, -.020361000671982765, 0, 2, 11, 6, 9, 6, -1, 14, 6, 3, 6, 3, -.07794699817895889, -1.0898950099945068, .14530299603939056, 0, 2, 4, 6, 9, 6, -1, 7, 6, 3, 6, 3, -.01687600091099739, .2804970145225525, -.4133630096912384, 0, 2, 6, 11, 18, 13, -1, 12, 11, 6, 13, 3, .118756003677845, -.043490998446941376, .41263699531555176, 0, 2, 0, 11, 18, 13, -1, 6, 11, 6, 13, 3, .1562419980764389, -.2642959952354431, .5512779951095581, 0, 2, 12, 16, 12, 6, -1, 16, 16, 4, 6, 3, -.04590800032019615, .6018919944763184, .018921000882983208, 0, 2, 0, 6, 21, 3, -1, 0, 7, 21, 1, 3, -.01030999980866909, .3815299868583679, -.29507899284362793, 0, 2, 12, 16, 12, 6, -1, 16, 16, 4, 6, 3, .095769003033638, .13246500492095947, -.4626680016517639, 0, 2, 5, 7, 6, 14, -1, 5, 14, 6, 7, 2, .013686999678611755, .11738699674606323, -.5166410207748413, 0, 2, 5, 10, 19, 2, -1, 5, 11, 19, 1, 2, .0023990001063793898, -.3400759994983673, .20953500270843506, 0, 2, 5, 4, 14, 4, -1, 5, 6, 14, 2, 2, .033264998346567154, -.17052799463272095, 1.4366799592971802, 0, 2, 3, 18, 18, 4, -1, 9, 18, 6, 4, 3, -.03320600092411041, .6129570007324219, -.04154999926686287, 0, 2, 7, 0, 4, 9, -1, 9, 0, 2, 9, 2, .0027979998849332333, -.48554301261901855, .13372699916362762, 0, 2, 13, 3, 11, 4, -1, 13, 5, 11, 2, 2, -.06579200178384781, -4.025766849517822, .10876700282096863, 0, 2, 2, 0, 9, 6, -1, 5, 0, 3, 6, 3, .0021430000197142363, -.3917999863624573, .2242709994316101, 0, 2, 19, 1, 4, 23, -1, 19, 1, 2, 23, 2, .022363999858498573, -.08642999827861786, .3778519928455353, 0, 2, 1, 1, 4, 23, -1, 3, 1, 2, 23, 2, -.05741000175476074, 1.14540696144104, -.19736599922180176, 0, 2, 5, 16, 18, 3, -1, 5, 17, 18, 1, 3, .006655000150203705, -.021105000749230385, .5845339894294739, 0, 2, 0, 3, 11, 4, -1, 0, 5, 11, 2, 2, .012326999567449093, .03781700134277344, -.6698700189590454, 0, 2, 2, 16, 20, 3, -1, 2, 17, 20, 1, 3, -.008186999708414078, .5636600255966187, -.07687799632549286, 0, 2, 5, 3, 13, 4, -1, 5, 5, 13, 2, 2, .036681000143289566, -.17343300580978394, 1.1670149564743042, 0, 2, 1, 9, 22, 15, -1, 1, 9, 11, 15, 2, -.4022040069103241, 1.2640819549560547, .04339899867773056, 0, 2, 3, 4, 14, 3, -1, 10, 4, 7, 3, 2, -.022126000374555588, .6697810292243958, -.21605299413204193, 0, 2, 8, 7, 10, 4, -1, 8, 7, 5, 4, 2, -.013156999833881855, -.41198599338531494, .20215000212192535, 0, 2, 6, 7, 10, 4, -1, 11, 7, 5, 4, 2, -.012860000133514404, -.9158269762992859, .039232999086380005, 0, 2, 10, 4, 6, 9, -1, 12, 4, 2, 9, 3, .0216279998421669, .003871999913826585, .3566820025444031, 0, 2, 1, 12, 9, 6, -1, 4, 12, 3, 6, 3, .011896000243723392, -.37303900718688965, .19235099852085114, 0, 3, 8, 3, 8, 10, -1, 12, 3, 4, 5, 2, 8, 8, 4, 5, 2, -.019548999145627022, -.42374899983406067, .24429599940776825, 0, 3, 3, 6, 16, 6, -1, 3, 6, 8, 3, 2, 11, 9, 8, 3, 2, .06444499641656876, -.16558900475502014, 1.2697030305862427, 0, 2, 5, 6, 14, 6, -1, 5, 9, 14, 3, 2, .10898499935865402, .1489430069923401, -2.1534640789031982, 0, 2, 4, 3, 9, 6, -1, 4, 5, 9, 2, 3, -.034077998250722885, 1.3779460191726685, -.16198499500751495, 0, 2, 6, 3, 18, 2, -1, 6, 4, 18, 1, 2, -.003748999908566475, -.33828601241111755, .21152900159358978, 0, 2, 7, 6, 9, 6, -1, 10, 6, 3, 6, 3, -.01097199972718954, .7651789784431458, -.19692599773406982, 0, 2, 0, 1, 24, 3, -1, 0, 2, 24, 1, 3, -.011485000140964985, -.6927120089530945, .21657100319862366, 0, 2, 0, 17, 10, 6, -1, 0, 19, 10, 2, 3, .02598400041460991, -.011983999982476234, -.9969729781150818, 0, 2, 3, 18, 18, 3, -1, 3, 19, 18, 1, 3, .004215999972075224, -.10205700248479843, .48884400725364685, 0, 3, 2, 5, 6, 16, -1, 2, 5, 3, 8, 2, 5, 13, 3, 8, 2, -.047697000205516815, 1.066601037979126, -.17576299607753754, 0, 2, 7, 6, 11, 6, -1, 7, 8, 11, 2, 3, .0004030000127386302, .185248002409935, -.7479000091552734, 0, 2, 5, 2, 12, 22, -1, 5, 13, 12, 11, 2, .11539600044488907, -.22019700706005096, .5450999736785889, 0, 2, 10, 7, 4, 10, -1, 10, 12, 4, 5, 2, .01602100022137165, .2548750042915344, -.5074009895324707, 0, 2, 9, 0, 4, 18, -1, 9, 6, 4, 6, 3, .05663200095295906, -.011256000027060509, -.95968097448349, 0, 2, 18, 8, 6, 9, -1, 18, 11, 6, 3, 3, -.010726000182330608, -.28544700145721436, .16994799673557281, 0, 2, 4, 7, 15, 10, -1, 9, 7, 5, 10, 3, .1242000013589859, -.03613999858498573, -1.3132710456848145, 0, 2, 10, 5, 6, 9, -1, 12, 5, 2, 9, 3, -.005379999987781048, .3309270143508911, .013307999819517136, 0, 2, 9, 9, 6, 10, -1, 11, 9, 2, 10, 3, .011908000335097313, -.3483029901981354, .24041900038719177, 0, 2, 11, 14, 6, 10, -1, 13, 14, 2, 10, 3, -.043007999658584595, -1.4390469789505005, .15599599480628967, 0, 2, 7, 14, 6, 10, -1, 9, 14, 2, 10, 3, -.033149998635053635, -1.1805850267410278, -.012347999960184097, 0, 2, 4, 8, 16, 9, -1, 4, 11, 16, 3, 3, -.021341999992728233, 2.211944103240967, .06273700296878815, 0, 2, 2, 11, 20, 3, -1, 2, 12, 20, 1, 3, -.012218999676406384, -1.8709750175476074, -.045499999076128006, 0, 2, 13, 0, 4, 13, -1, 13, 0, 2, 13, 2, -.016860999166965485, -.7691270112991333, .15330000221729279, 0, 2, 7, 0, 4, 13, -1, 9, 0, 2, 13, 2, -.0024999999441206455, -.6298739910125732, .051600001752376556, 0, 2, 3, 1, 18, 7, -1, 9, 1, 6, 7, 3, -.045037999749183655, .8542889952659607, .006260000169277191, 0, 2, 1, 11, 6, 9, -1, 1, 14, 6, 3, 3, .03905799984931946, -.03245899826288223, -1.3325669765472412, 0, 2, 8, 18, 9, 6, -1, 8, 20, 9, 2, 3, .0066720000468194485, -.19423599541187286, .37328699231147766, 0, 2, 3, 9, 15, 6, -1, 3, 11, 15, 2, 3, -.016361000016331673, 2.060586929321289, -.15042699873447418, 0, 2, 5, 10, 19, 2, -1, 5, 11, 19, 1, 2, .006171999964863062, -.11610999703407288, .25455400347709656, 0, 2, 8, 6, 7, 16, -1, 8, 14, 7, 8, 2, .04572200030088425, -.016340000554919243, -1.0449140071868896, 0, 2, 9, 14, 9, 6, -1, 9, 16, 9, 2, 3, .004120999947190285, -.0419979989528656, .39680999517440796, 0, 2, 0, 7, 8, 12, -1, 0, 11, 8, 4, 3, -.00017800000205170363, -.6642259955406189, .03344300016760826, 0, 2, 6, 4, 18, 3, -1, 6, 5, 18, 1, 3, .007110999897122383, -.05823199823498726, .3785730004310608, 0, 2, 0, 16, 12, 6, -1, 4, 16, 4, 6, 3, -.04986400157213211, .6101940274238586, -.21005700528621674, 0, 2, 13, 13, 9, 4, -1, 13, 15, 9, 2, 2, -.025011999532580376, -.5710009932518005, .1784839928150177, 0, 3, 5, 8, 14, 14, -1, 5, 8, 7, 7, 2, 12, 15, 7, 7, 2, .030939999967813492, .056363001465797424, -.6473100185394287, 0, 3, 1, 16, 22, 6, -1, 12, 16, 11, 3, 2, 1, 19, 11, 3, 2, .04627100005745888, .17482399940490723, -.9890940189361572, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, -.0031870000530034304, -.6680480241775513, .032267000526189804, 0, 3, 9, 5, 10, 10, -1, 14, 5, 5, 5, 2, 9, 10, 5, 5, 2, -.024351999163627625, .29444900155067444, -.0013599999947473407, 0, 3, 5, 5, 10, 10, -1, 5, 5, 5, 5, 2, 10, 10, 5, 5, 2, .011974000371992588, -.28345099091529846, .47171199321746826, 0, 3, 4, 6, 16, 6, -1, 12, 6, 8, 3, 2, 4, 9, 8, 3, 2, .01307000033557415, -.10834600031375885, .5719329714775085, 0, 2, 0, 7, 6, 9, -1, 0, 10, 6, 3, 3, .05916300043463707, -.05093900114297867, -1.9059720039367676, 0, 3, 16, 10, 8, 14, -1, 20, 10, 4, 7, 2, 16, 17, 4, 7, 2, -.04109499976038933, .4510459899902344, -.009759999811649323, 0, 2, 9, 12, 6, 12, -1, 9, 18, 6, 6, 2, -.08398900181055069, -2.0349199771881104, -.05101900175213814, 0, 3, 8, 10, 8, 12, -1, 12, 10, 4, 6, 2, 8, 16, 4, 6, 2, .04461900144815445, .17041100561618805, -1.2278720140457153, 0, 2, 8, 0, 4, 9, -1, 10, 0, 2, 9, 2, .02441900037229061, -.021796999499201775, -1.0822949409484863, 0, 3, 10, 4, 8, 16, -1, 14, 4, 4, 8, 2, 10, 12, 4, 8, 2, -.004387000110000372, .30466699600219727, -.3706659972667694, 0, 2, 7, 10, 10, 6, -1, 7, 12, 10, 2, 3, .024607999250292778, -.31169500946998596, .2365729957818985, 0, 3, 5, 6, 14, 14, -1, 12, 6, 7, 7, 2, 5, 13, 7, 7, 2, -.08518200367689133, -1.7982350587844849, .15254299342632294, 0, 2, 2, 11, 20, 2, -1, 2, 12, 20, 1, 2, .021844999864697456, -.05188800022006035, -1.9017189741134644, 0, 2, 18, 8, 4, 16, -1, 18, 16, 4, 8, 2, -.016829000785946846, .21025900542736053, .021656999364495277, 0, 3, 1, 11, 12, 10, -1, 1, 11, 6, 5, 2, 7, 16, 6, 5, 2, .032547999173402786, -.20292599499225616, .60944002866745, 0, 2, 6, 9, 12, 4, -1, 6, 11, 12, 2, 2, .0024709999561309814, -.953711986541748, .1856839954853058, 0, 2, 9, 12, 6, 7, -1, 12, 12, 3, 7, 2, .05541599914431572, -.14405299723148346, 2.1506340503692627, 0, 3, 10, 4, 8, 16, -1, 14, 4, 4, 8, 2, 10, 12, 4, 8, 2, -.10635499656200409, -1.0911970138549805, .13228000700473785, 0, 3, 6, 4, 8, 16, -1, 6, 4, 4, 8, 2, 10, 12, 4, 8, 2, -.007988999597728252, .10253400355577469, -.5174490213394165, 0, 2, 8, 9, 9, 6, -1, 11, 9, 3, 6, 3, .07556799799203873, .05896500125527382, 1.2354209423065186, 0, 3, 1, 5, 16, 12, -1, 1, 5, 8, 6, 2, 9, 11, 8, 6, 2, -.09280599653720856, -1.3431650400161743, -.03446299955248833, 0, 2, 9, 9, 6, 8, -1, 9, 9, 3, 8, 2, .049431998282670975, .049601998180150986, 1.6054730415344238, 0, 2, 6, 0, 3, 18, -1, 7, 0, 1, 18, 3, -.011772999539971352, -1.0261050462722778, -.004155999980866909, 0, 2, 17, 9, 5, 14, -1, 17, 16, 5, 7, 2, .08588600158691406, .08464299887418747, .9522079825401306, 0, 2, 2, 9, 5, 14, -1, 2, 16, 5, 7, 2, .08103100210428238, -.14687100052833557, 1.9359990358352661, -3.4265899658203125, 136, 0, 2, 7, 4, 10, 6, -1, 7, 7, 10, 3, 2, -.03384099900722504, .6588950157165527, -.6975529789924622, 0, 2, 1, 3, 23, 18, -1, 1, 9, 23, 6, 3, .015410000458359718, -.9072840213775635, .30478599667549133, 0, 2, 1, 1, 21, 3, -1, 8, 1, 7, 3, 3, .05490599945187569, -.4977479875087738, .5713260173797607, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .021390000358223915, -.42565199732780457, .5809680223464966, 0, 3, 3, 18, 12, 6, -1, 3, 18, 6, 3, 2, 9, 21, 6, 3, 2, .007884999737143517, -.47905999422073364, .43016499280929565, 0, 3, 16, 8, 8, 16, -1, 20, 8, 4, 8, 2, 16, 16, 4, 8, 2, -.03754499927163124, .5086159706115723, -.19985899329185486, 0, 2, 0, 19, 24, 4, -1, 8, 19, 8, 4, 3, .15925799310207367, -.2326360046863556, 1.0993319749832153, 0, 3, 16, 8, 8, 16, -1, 20, 8, 4, 8, 2, 16, 16, 4, 8, 2, -.06893999874591827, .4056900143623352, .05685500055551529, 0, 3, 0, 8, 8, 16, -1, 0, 8, 4, 8, 2, 4, 16, 4, 8, 2, -.033695001155138016, .45132800936698914, -.3333280086517334, 0, 2, 8, 12, 8, 10, -1, 8, 17, 8, 5, 2, -.0633149966597557, -.8501570224761963, .2234169989824295, 0, 2, 5, 7, 5, 8, -1, 5, 11, 5, 4, 2, .007369999773800373, -.9308220148086548, .059216998517513275, 0, 2, 4, 1, 19, 2, -1, 4, 2, 19, 1, 2, -.009596999734640121, -1.2794899940490723, .18447299301624298, 0, 2, 0, 12, 24, 9, -1, 8, 12, 8, 9, 3, -.13067999482154846, .5842689871788025, -.2600719928741455, 0, 2, 6, 0, 13, 8, -1, 6, 4, 13, 4, 2, .057402998208999634, -.05378900095820427, .7117559909820557, 0, 2, 0, 0, 24, 3, -1, 0, 1, 24, 1, 3, -.007234000135213137, -.869621992111206, .07521499693393707, 0, 2, 20, 3, 4, 11, -1, 20, 3, 2, 11, 2, .031098999083042145, -.07500699907541275, .9078159928321838, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, .035854000598192215, -.24795499444007874, .7227209806442261, 0, 3, 6, 11, 12, 8, -1, 12, 11, 6, 4, 2, 6, 15, 6, 4, 2, -.03153499960899353, -1.1238329410552979, .20988300442695618, 0, 3, 0, 8, 12, 6, -1, 0, 8, 6, 3, 2, 6, 11, 6, 3, 2, -.019437000155448914, -1.4499390125274658, -.01510000042617321, 0, 2, 6, 17, 18, 3, -1, 6, 18, 18, 1, 3, -.007242000196129084, .5386490225791931, -.11375399678945541, 0, 2, 0, 14, 9, 6, -1, 0, 16, 9, 2, 3, .008163999766111374, .06688900291919708, -.7687289714813232, 0, 2, 20, 3, 4, 9, -1, 20, 3, 2, 9, 2, -.04365300014615059, 1.1413530111312866, .04021700099110603, 0, 2, 0, 3, 4, 9, -1, 2, 3, 2, 9, 2, .026569999754428864, -.24719099700450897, .5929509997367859, 0, 2, 15, 0, 9, 19, -1, 18, 0, 3, 19, 3, .03221699967980385, -.040024999529123306, .32688000798225403, 0, 2, 0, 0, 9, 19, -1, 3, 0, 3, 19, 3, -.07223600149154663, .5872939825057983, -.2539600133895874, 0, 2, 13, 11, 6, 8, -1, 13, 11, 3, 8, 2, .03142499923706055, .1531510055065155, -.5604209899902344, 0, 2, 5, 11, 6, 8, -1, 8, 11, 3, 8, 2, -.0004769999941345304, .16958899796009064, -.5262669920921326, 0, 2, 5, 11, 19, 3, -1, 5, 12, 19, 1, 3, .002718999981880188, -.14944599568843842, .2965869903564453, 0, 2, 3, 20, 18, 4, -1, 9, 20, 6, 4, 3, .032875001430511475, -.39943501353263855, .25156599283218384, 0, 2, 6, 6, 16, 6, -1, 6, 8, 16, 2, 3, -.014553000219166279, .2797259986400604, -.47203800082206726, 0, 2, 6, 0, 9, 6, -1, 9, 0, 3, 6, 3, .03801799938082695, -.0029200001154094934, -1.130005955696106, 0, 2, 10, 3, 4, 14, -1, 10, 10, 4, 7, 2, .002865999937057495, .4111180007457733, -.2622080147266388, 0, 2, 1, 5, 15, 12, -1, 1, 11, 15, 6, 2, -.041606999933719635, -1.4293819665908813, -.01913299970328808, 0, 2, 11, 12, 8, 5, -1, 11, 12, 4, 5, 2, -.024802999570965767, -.25013598799705505, .15978699922561646, 0, 2, 5, 0, 6, 9, -1, 7, 0, 2, 9, 3, .010098000057041645, .04373899847269058, -.6998609900474548, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, -.02094700001180172, -.9413779973983765, .23204000294208527, 0, 3, 5, 5, 12, 8, -1, 5, 5, 6, 4, 2, 11, 9, 6, 4, 2, .022458000108599663, -.27185800671577454, .45319199562072754, 0, 2, 13, 12, 11, 6, -1, 13, 14, 11, 2, 3, -.03711099922657013, -1.031466007232666, .14421799778938293, 0, 2, 0, 13, 21, 3, -1, 0, 14, 21, 1, 3, -.010648000054061413, .6310700178146362, -.25520798563957214, 0, 3, 8, 1, 8, 12, -1, 12, 1, 4, 6, 2, 8, 7, 4, 6, 2, .05542299896478653, .1620659977197647, -1.772264003753662, 0, 3, 1, 0, 6, 12, -1, 1, 0, 3, 6, 2, 4, 6, 3, 6, 2, .021601999178528786, -.25016099214553833, .5411980152130127, 0, 2, 2, 2, 21, 2, -1, 2, 3, 21, 1, 2, 870000003487803e-19, -.2900890111923218, .33507999777793884, 0, 2, 2, 2, 19, 3, -1, 2, 3, 19, 1, 3, .014406000263988972, -.007884000428020954, -1.1677219867706299, 0, 3, 17, 10, 6, 14, -1, 20, 10, 3, 7, 2, 17, 17, 3, 7, 2, .10777399688959122, .11292000114917755, -2.4940319061279297, 0, 3, 1, 10, 6, 14, -1, 1, 10, 3, 7, 2, 4, 17, 3, 7, 2, .035943999886512756, -.19480599462985992, .9575750231742859, 0, 3, 7, 6, 14, 14, -1, 14, 6, 7, 7, 2, 7, 13, 7, 7, 2, -.003951000049710274, .3092780113220215, -.2553020119667053, 0, 2, 0, 12, 9, 6, -1, 0, 14, 9, 2, 3, .020942000672221184, -.007631999906152487, -1.0086350440979004, 0, 2, 15, 14, 8, 9, -1, 15, 17, 8, 3, 3, -.029877999797463417, -.4602769911289215, .1950719952583313, 0, 3, 1, 1, 22, 4, -1, 1, 1, 11, 2, 2, 12, 3, 11, 2, 2, .025971999391913414, -.012187999673187733, -1.0035500526428223, 0, 2, 9, 11, 9, 6, -1, 9, 13, 9, 2, 3, .010603000409901142, -.07596900314092636, .41669899225234985, 0, 2, 0, 15, 18, 3, -1, 0, 16, 18, 1, 3, .008581999689340591, -.2664859890937805, .3911150097846985, 0, 2, 16, 14, 7, 9, -1, 16, 17, 7, 3, 3, .021270999684929848, .1827390044927597, -.360522985458374, 0, 2, 4, 3, 16, 4, -1, 12, 3, 8, 4, 2, .07451800256967545, -.18938399851322174, .926580011844635, 0, 2, 7, 6, 12, 5, -1, 7, 6, 6, 5, 2, .004656999837607145, -.14506199955940247, .3329460024833679, 0, 2, 9, 6, 4, 9, -1, 11, 6, 2, 9, 2, .001711999997496605, -.5246400237083435, .08987999707460403, 0, 2, 12, 1, 4, 10, -1, 12, 1, 2, 10, 2, .0009850000496953726, -.3838199973106384, .24392999708652496, 0, 2, 8, 1, 4, 10, -1, 10, 1, 2, 10, 2, .028233999386429787, -.005787999834865332, -1.261713981628418, 0, 2, 15, 15, 6, 9, -1, 15, 18, 6, 3, 3, -.03267800062894821, -.5795329809188843, .1695529967546463, 0, 2, 3, 15, 6, 9, -1, 3, 18, 6, 3, 3, .02253600023686886, .022281000390648842, -.8786960244178772, 0, 2, 15, 1, 3, 19, -1, 16, 1, 1, 19, 3, -.021657999604940414, -.6510850191116333, .12966899573802948, 0, 2, 1, 3, 6, 9, -1, 3, 3, 2, 9, 3, .007679999805986881, -.33965200185775757, .2201330065727234, 0, 2, 15, 0, 3, 19, -1, 16, 0, 1, 19, 3, .014592000283300877, .15077300369739532, -.5045239925384521, 0, 2, 6, 3, 12, 4, -1, 12, 3, 6, 4, 2, .0278680007904768, -.25045299530029297, .4574199914932251, 0, 2, 10, 5, 4, 9, -1, 10, 5, 2, 9, 2, .0056940000504255295, -.10948500037193298, .5575780272483826, 0, 2, 6, 0, 3, 19, -1, 7, 0, 1, 19, 3, -.010002999566495419, -.9736629724502563, .01846799999475479, 0, 2, 11, 1, 3, 12, -1, 11, 7, 3, 6, 2, -.004071999806910753, .3822219967842102, -.1692110002040863, 0, 2, 6, 7, 10, 5, -1, 11, 7, 5, 5, 2, -.022593999281525612, -1.0391089916229248, .005183999892324209, 0, 2, 11, 3, 3, 18, -1, 12, 3, 1, 18, 3, -.03957999870181084, -5.510922908782959, .11163999885320663, 0, 2, 9, 3, 6, 12, -1, 11, 3, 2, 12, 3, -.017537999898195267, .9548580050468445, -.1858450025320053, 0, 2, 3, 7, 19, 3, -1, 3, 8, 19, 1, 3, .009030000306665897, .010436000302433968, .8211479783058167, 0, 2, 2, 7, 18, 3, -1, 2, 8, 18, 1, 3, -.007953999564051628, .2263289988040924, -.3456819951534271, 0, 3, 3, 13, 18, 4, -1, 12, 13, 9, 2, 2, 3, 15, 9, 2, 2, .027091000229120255, .16430099308490753, -1.3926379680633545, 0, 2, 3, 5, 6, 9, -1, 5, 5, 2, 9, 3, -.020625999197363853, -.863660991191864, .0023880000226199627, 0, 3, 4, 1, 20, 4, -1, 14, 1, 10, 2, 2, 4, 3, 10, 2, 2, -.0719899982213974, -2.819262981414795, .11570499837398529, 0, 3, 0, 1, 20, 4, -1, 0, 1, 10, 2, 2, 10, 3, 10, 2, 2, -.026964999735355377, -1.294613003730774, -.024661000818014145, 0, 2, 10, 15, 6, 6, -1, 10, 15, 3, 6, 2, -.04737799987196922, -.8130639791488647, .1183139979839325, 0, 2, 0, 2, 24, 8, -1, 8, 2, 8, 8, 3, -.1089560016989708, .6593790054321289, -.20843900740146637, 0, 2, 5, 5, 18, 3, -1, 5, 6, 18, 1, 3, .01357400044798851, .007424000184983015, .5315219759941101, 0, 2, 8, 15, 6, 6, -1, 11, 15, 3, 6, 2, -.006692000199109316, .3065580129623413, -.31084299087524414, 0, 2, 11, 12, 8, 5, -1, 11, 12, 4, 5, 2, -.003907000180333853, .25576499104499817, -.052932001650333405, 0, 2, 5, 12, 8, 5, -1, 9, 12, 4, 5, 2, -.037613000720739365, -1.4350049495697021, -.015448000282049179, 0, 2, 5, 0, 14, 6, -1, 5, 2, 14, 2, 3, .00863299984484911, -.16884399950504303, .42124900221824646, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.03209700062870979, -.6497939825057983, .041110001504421234, 0, 2, 10, 7, 5, 12, -1, 10, 11, 5, 4, 3, .05849599838256836, -.052963998168706894, .6336830258369446, 0, 3, 7, 9, 8, 14, -1, 7, 9, 4, 7, 2, 11, 16, 4, 7, 2, -.04090199992060661, -.9210109710693359, .009064000099897385, 0, 3, 1, 5, 22, 6, -1, 12, 5, 11, 3, 2, 1, 8, 11, 3, 2, -.01992500014603138, .5375999808311462, -.0629969984292984, 0, 2, 0, 5, 6, 6, -1, 0, 8, 6, 3, 2, -.004602000117301941, -.5433350205421448, .0841049998998642, 0, 2, 12, 17, 9, 4, -1, 12, 19, 9, 2, 2, .016824999824166298, .1556369960308075, -.40171200037002563, 0, 2, 2, 18, 19, 3, -1, 2, 19, 19, 1, 3, .009479000233113766, -.24245299398899078, .5150949954986572, 0, 2, 12, 17, 9, 4, -1, 12, 19, 9, 2, 2, -.019534999504685402, -.5111839771270752, .13831999897956848, 0, 2, 1, 17, 18, 3, -1, 1, 18, 18, 1, 3, .010746000334620476, -.21854999661445618, .6282870173454285, 0, 2, 12, 17, 9, 4, -1, 12, 19, 9, 2, 2, .03792700171470642, .1164029985666275, -2.730195999145508, 0, 2, 0, 0, 24, 3, -1, 0, 1, 24, 1, 3, .016390999779105186, -.01463599968701601, -1.0797250270843506, 0, 2, 5, 0, 14, 4, -1, 5, 2, 14, 2, 2, -.019785000011324883, 1.2166420221328735, .033275000751018524, 0, 2, 6, 14, 9, 6, -1, 6, 16, 9, 2, 3, .011067000217735767, -.2538830041885376, .44038599729537964, 0, 2, 14, 13, 6, 9, -1, 14, 16, 6, 3, 3, .005247999913990498, .22496800124645233, -.2421649992465973, 0, 2, 5, 20, 13, 4, -1, 5, 22, 13, 2, 2, -.011141999624669552, .2501809895038605, -.30811500549316406, 0, 2, 9, 9, 6, 12, -1, 9, 13, 6, 4, 3, -.010666999965906143, -.32729101181030273, .26168298721313477, 0, 2, 1, 10, 21, 3, -1, 8, 10, 7, 3, 3, .1054529994726181, -.05575000122189522, -1.9605729579925537, 0, 2, 8, 8, 9, 6, -1, 11, 8, 3, 6, 3, .05482799932360649, -.0019519999623298645, .738660991191864, 0, 2, 3, 10, 9, 7, -1, 6, 10, 3, 7, 3, .017760999500751495, -.3064720034599304, .26346999406814575, 0, 3, 12, 10, 10, 8, -1, 17, 10, 5, 4, 2, 12, 14, 5, 4, 2, -.031185999512672424, -.2460090070962906, .17082199454307556, 0, 2, 0, 15, 24, 3, -1, 8, 15, 8, 3, 3, -.05729600042104721, .4703350067138672, -.2604829967021942, 0, 2, 8, 5, 9, 6, -1, 8, 7, 9, 2, 3, -.011312000453472137, .38628900051116943, -.2881700098514557, 0, 2, 4, 13, 6, 9, -1, 4, 16, 6, 3, 3, .030592000111937523, -.04882600158452988, -1.7638969421386719, 0, 2, 12, 17, 9, 4, -1, 12, 19, 9, 2, 2, .0018489999929443002, .210998997092247, -.025940999388694763, 0, 2, 9, 12, 6, 6, -1, 9, 15, 6, 3, 2, .01141900010406971, -.1682959944009781, 1.027866005897522, 0, 3, 9, 9, 14, 10, -1, 16, 9, 7, 5, 2, 9, 14, 7, 5, 2, .08140300214290619, .11531999707221985, -1.2482399940490723, 0, 3, 1, 9, 14, 10, -1, 1, 9, 7, 5, 2, 8, 14, 7, 5, 2, .05349599942564964, -.04630399867892265, -1.7165969610214233, 0, 2, 8, 7, 9, 17, -1, 11, 7, 3, 17, 3, -.023948000743985176, -.4024659991264343, .20562100410461426, 0, 3, 3, 4, 6, 20, -1, 3, 4, 3, 10, 2, 6, 14, 3, 10, 2, .006769000086933374, -.33152300119400024, .20683400332927704, 0, 2, 7, 8, 10, 4, -1, 7, 8, 5, 4, 2, -.03234399855136871, -.7263280153274536, .20073500275611877, 0, 2, 10, 7, 4, 9, -1, 12, 7, 2, 9, 2, .037863001227378845, -.15631000697612762, 1.6697460412979126, 0, 2, 10, 15, 6, 9, -1, 12, 15, 2, 9, 3, .015440000221133232, .19487400352954865, -.35384199023246765, 0, 3, 3, 8, 6, 16, -1, 3, 8, 3, 8, 2, 6, 16, 3, 8, 2, -.04437600076198578, .8209360241889954, -.18193599581718445, 0, 2, 12, 17, 9, 4, -1, 12, 19, 9, 2, 2, -.02310200035572052, -.4304409921169281, .12375400215387344, 0, 2, 3, 17, 9, 4, -1, 3, 19, 9, 2, 2, .01940000057220459, -.029726000502705574, -1.1597590446472168, 0, 2, 10, 1, 9, 6, -1, 13, 1, 3, 6, 3, .10385700315237045, .11149899661540985, -4.6835222244262695, 0, 2, 5, 7, 4, 10, -1, 5, 12, 4, 5, 2, -.018964000046253204, 2.177381992340088, -.14544400572776794, 0, 2, 7, 5, 12, 6, -1, 11, 5, 4, 6, 3, .03875099867582321, -.04944600164890289, .34018298983573914, 0, 2, 6, 4, 9, 8, -1, 9, 4, 3, 8, 3, .022766999900341034, -.328029990196228, .30531400442123413, 0, 3, 12, 16, 10, 8, -1, 17, 16, 5, 4, 2, 12, 20, 5, 4, 2, -.03135700151324272, 1.1520819664001465, .027305999770760536, 0, 3, 2, 16, 10, 8, -1, 2, 16, 5, 4, 2, 7, 20, 5, 4, 2, .009690999984741211, -.38799500465393066, .21512599289417267, 0, 3, 0, 0, 24, 4, -1, 12, 0, 12, 2, 2, 0, 2, 12, 2, 2, -.04928499832749367, -1.6774909496307373, .1577419936656952, 0, 2, 0, 6, 9, 6, -1, 0, 8, 9, 2, 3, -.039510998874902725, -.9764789938926697, -.010552000254392624, 0, 3, 0, 4, 24, 6, -1, 12, 4, 12, 3, 2, 0, 7, 12, 3, 2, .04799799993634224, .20843900740146637, -.6899279952049255, 0, 2, 5, 0, 11, 4, -1, 5, 2, 11, 2, 2, .05142299830913544, -.16665300726890564, 1.2149239778518677, 0, 3, 1, 1, 22, 4, -1, 12, 1, 11, 2, 2, 1, 3, 11, 2, 2, .014279999770224094, .2362769991159439, -.4139679968357086, 0, 2, 9, 6, 6, 18, -1, 9, 15, 6, 9, 2, -.09161199629306793, -.9283090233802795, -.018345000222325325, 0, 2, 2, 9, 20, 4, -1, 2, 11, 20, 2, 2, .006508000195026398, -.7364720106124878, .1949709951877594, 0, 2, 5, 2, 14, 14, -1, 5, 9, 14, 7, 2, .0357230007648468, .14197799563407898, -.42089301347732544, 0, 2, 4, 2, 16, 6, -1, 4, 5, 16, 3, 2, .050638001412153244, .011644000187516212, .7848659753799438, 0, 2, 2, 3, 19, 3, -1, 2, 4, 19, 1, 3, -.014613999985158443, -1.1909500360488892, -.03512800112366676, 0, 2, 7, 1, 10, 4, -1, 7, 3, 10, 2, 2, -.038662999868392944, 2.4314730167388916, .06564799696207047, 0, 2, 0, 9, 4, 15, -1, 0, 14, 4, 5, 3, -.04034699872136116, .7175530195236206, -.19108299911022186, 0, 2, 2, 10, 21, 3, -1, 2, 11, 21, 1, 3, .02390200085937977, .15646199882030487, -.7929480075836182, -3.5125269889831543, 137, 0, 2, 3, 0, 6, 6, -1, 6, 0, 3, 6, 2, .008564000017940998, -.814507007598877, .5887529850006104, 0, 2, 6, 4, 14, 9, -1, 6, 7, 14, 3, 3, -.13292600214481354, .9321339726448059, -.29367300868034363, 0, 2, 9, 1, 6, 9, -1, 11, 1, 2, 9, 3, .009840000420808792, -.5646290183067322, .4164769947528839, 0, 2, 15, 8, 9, 9, -1, 15, 11, 9, 3, 3, .00508899986743927, -.7923280000686646, .16975000500679016, 0, 2, 8, 0, 4, 21, -1, 8, 7, 4, 7, 3, -.06103900074958801, -1.4169000387191772, .02502099983394146, 0, 2, 3, 22, 19, 2, -1, 3, 23, 19, 1, 2, -.0004659999976865947, .37982499599456787, -.4156709909439087, 0, 2, 2, 15, 20, 3, -1, 2, 16, 20, 1, 3, .0033889999613165855, -.4076859951019287, .3554849922657013, 0, 2, 19, 0, 4, 13, -1, 19, 0, 2, 13, 2, .021006999537348747, -.24080100655555725, .8611270189285278, 0, 2, 1, 7, 8, 8, -1, 1, 11, 8, 4, 2, .007555999793112278, -.874671995639801, .09857200086116791, 0, 2, 14, 14, 6, 9, -1, 14, 17, 6, 3, 3, .024779999628663063, .15566200017929077, -.6922979950904846, 0, 2, 4, 14, 6, 9, -1, 4, 17, 6, 3, 3, -.03562000021338463, -1.1472270488739014, .0363599993288517, 0, 2, 14, 5, 4, 10, -1, 14, 5, 2, 10, 2, .01981000043451786, .1551620066165924, -.6952009797096252, 0, 2, 6, 5, 4, 10, -1, 8, 5, 2, 10, 2, .01501999981701374, .0419900007545948, -.9662280082702637, 0, 2, 14, 5, 6, 6, -1, 14, 8, 6, 3, 2, -.023137999698519707, .43396899104118347, .0024160000029951334, 0, 2, 4, 5, 6, 6, -1, 4, 8, 6, 3, 2, -.01874300092458725, .434810996055603, -.32522499561309814, 0, 2, 0, 2, 24, 21, -1, 8, 2, 8, 21, 3, .45080000162124634, -.09457399696111679, .7242130041122437, 0, 2, 1, 2, 6, 13, -1, 3, 2, 2, 13, 3, .01185499969869852, -.3813309967517853, .3009839951992035, 0, 2, 20, 0, 4, 21, -1, 20, 0, 2, 21, 2, -.02483000047504902, .8930060267448425, -.10295899957418442, 0, 2, 0, 4, 4, 20, -1, 2, 4, 2, 20, 2, -.04474300146102905, .8628029823303223, -.2171649932861328, 0, 2, 8, 16, 9, 6, -1, 8, 18, 9, 2, 3, -.014600000344216824, .6006940007209778, -.15906299650669098, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.02452700026333332, -1.5872869491577148, -.021817000582814217, 0, 2, 16, 12, 7, 9, -1, 16, 15, 7, 3, 3, .023024000227451324, .16853399574756622, -.38106900453567505, 0, 2, 5, 21, 14, 3, -1, 12, 21, 7, 3, 2, -.0249170009046793, .5081089735031128, -.27279898524284363, 0, 2, 11, 5, 6, 9, -1, 11, 5, 3, 9, 2, .0010130000300705433, -.4313879907131195, .2643809914588928, 0, 2, 10, 5, 4, 10, -1, 12, 5, 2, 10, 2, .015603000298142433, -.3162420094013214, .5571590065956116, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, -.02668599970638752, 1.0553920269012451, .02907400019466877, 0, 2, 7, 5, 6, 9, -1, 10, 5, 3, 9, 2, .0013940000208094716, -.7187380194664001, .06539099663496017, 0, 2, 14, 14, 10, 4, -1, 14, 16, 10, 2, 2, -.0006479999865405262, .2488439977169037, -.20978200435638428, 0, 3, 5, 5, 14, 14, -1, 5, 5, 7, 7, 2, 12, 12, 7, 7, 2, -.031888000667095184, -.688444972038269, .06358999758958817, 0, 3, 12, 8, 12, 6, -1, 18, 8, 6, 3, 2, 12, 11, 6, 3, 2, -.004929000046104193, -.5915250182151794, .27943599224090576, 0, 3, 6, 6, 12, 12, -1, 6, 6, 6, 6, 2, 12, 12, 6, 6, 2, .031168000772595406, .04522399976849556, -.8863919973373413, 0, 2, 11, 13, 6, 10, -1, 13, 13, 2, 10, 3, -.03366300091147423, -.6159020066261292, .157492995262146, 0, 3, 1, 10, 20, 8, -1, 1, 10, 10, 4, 2, 11, 14, 10, 4, 2, .011966999620199203, -.30606698989868164, .42293301224708557, 0, 2, 15, 13, 9, 6, -1, 15, 15, 9, 2, 3, -.03468000143766403, -1.373494029045105, .15908700227737427, 0, 2, 9, 0, 6, 9, -1, 9, 3, 6, 3, 3, .009929000400006771, -.558601975440979, .12119200080633163, 0, 2, 10, 1, 5, 14, -1, 10, 8, 5, 7, 2, .059574998915195465, .004972000140696764, .8205540180206299, 0, 2, 3, 4, 16, 6, -1, 3, 6, 16, 2, 3, -.0654280036687851, 1.5651429891586304, -.16817499697208405, 0, 2, 16, 3, 8, 9, -1, 16, 6, 8, 3, 3, -.0928959995508194, -1.5794529914855957, .14661799371242523, 0, 2, 7, 13, 6, 10, -1, 9, 13, 2, 10, 3, -.04118400067090988, -1.5518720149993896, -.029969999566674232, 0, 2, 15, 13, 9, 6, -1, 15, 15, 9, 2, 3, .02144799940288067, .17196300625801086, -.6934319734573364, 0, 2, 0, 13, 9, 6, -1, 0, 15, 9, 2, 3, -.02556999959051609, -1.3061310052871704, -.024336999282240868, 0, 2, 13, 16, 9, 6, -1, 13, 18, 9, 2, 3, -.04120099917054176, -1.3821059465408325, .1480180025100708, 0, 2, 2, 16, 9, 6, -1, 2, 18, 9, 2, 3, -.01766899973154068, -.708899974822998, .03652400150895119, 0, 2, 5, 16, 18, 3, -1, 5, 17, 18, 1, 3, .009006000123918056, -.04091399908065796, .8037310242652893, 0, 2, 1, 16, 18, 3, -1, 1, 17, 18, 1, 3, -.011652999557554722, .5754680037498474, -.24991700053215027, 0, 2, 5, 0, 18, 3, -1, 5, 1, 18, 1, 3, -.00747800013050437, -.492808997631073, .1981090009212494, 0, 2, 1, 1, 19, 2, -1, 1, 2, 19, 1, 2, .0008549999911338091, -.48858100175857544, .1356309950351715, 0, 2, 14, 2, 6, 11, -1, 16, 2, 2, 11, 3, -.030538000166416168, -.6027839779853821, .18522000312805176, 0, 2, 4, 15, 15, 6, -1, 9, 15, 5, 6, 3, -.01884699985384941, .2356559932231903, -.35136300325393677, 0, 2, 14, 2, 6, 11, -1, 16, 2, 2, 11, 3, -.008112999610602856, -.08130499720573425, .2106959968805313, 0, 2, 4, 2, 6, 11, -1, 6, 2, 2, 11, 3, -.0348300002515316, -1.2065670490264893, -.01425199955701828, 0, 2, 18, 2, 6, 9, -1, 18, 5, 6, 3, 3, .01902100071310997, .23349900543689728, -.4566490054130554, 0, 3, 1, 2, 22, 4, -1, 1, 2, 11, 2, 2, 12, 4, 11, 2, 2, -.01900400035083294, -.8107579946517944, .013140000402927399, 0, 2, 2, 0, 21, 12, -1, 9, 0, 7, 12, 3, -.08905799686908722, .6154239773750305, .032983001321554184, 0, 2, 0, 12, 18, 3, -1, 0, 13, 18, 1, 3, .006862000096589327, -.29583099484443665, .2700369954109192, 0, 2, 12, 2, 6, 9, -1, 14, 2, 2, 9, 3, -.028240999206900597, -.6110270023345947, .1735749989748001, 0, 2, 3, 10, 18, 3, -1, 3, 11, 18, 1, 3, -.0003209999995306134, -.5332289934158325, .06853900104761124, 0, 2, 16, 3, 8, 9, -1, 16, 6, 8, 3, 3, -.10829100012779236, -1.2879559993743896, .11801700294017792, 0, 2, 3, 7, 18, 3, -1, 3, 8, 18, 1, 3, .01587899960577488, -.1707260012626648, 1.1103910207748413, 0, 2, 9, 11, 6, 9, -1, 11, 11, 2, 9, 3, .008685999549925327, -.10995099693536758, .4601050019264221, 0, 2, 9, 8, 6, 9, -1, 11, 8, 2, 9, 3, -.025234999135136604, 1.0220669507980347, -.18694299459457397, 0, 2, 15, 0, 2, 18, -1, 15, 0, 1, 18, 2, -.013508999720215797, -.7831659913063049, .14202600717544556, 0, 2, 7, 0, 2, 18, -1, 8, 0, 1, 18, 2, -.0077149998396635056, -.880607008934021, .011060000397264957, 0, 2, 17, 3, 7, 9, -1, 17, 6, 7, 3, 3, .07158000022172928, .11369399726390839, -1.1032789945602417, 0, 2, 3, 18, 9, 6, -1, 3, 20, 9, 2, 3, -.013554000295698643, -.8109650015830994, .0034080001059919596, 0, 2, 3, 18, 21, 3, -1, 3, 19, 21, 1, 3, .002945000072941184, -.07287999987602234, .34998100996017456, 0, 2, 0, 3, 7, 9, -1, 0, 6, 7, 3, 3, -.05083300173282623, -1.2868590354919434, -.028842000290751457, 0, 2, 2, 7, 22, 3, -1, 2, 8, 22, 1, 3, -.008798999711871147, .4761359989643097, -.14690400660037994, 0, 3, 0, 3, 24, 16, -1, 0, 3, 12, 8, 2, 12, 11, 12, 8, 2, .21424399316310883, -.05970200151205063, -2.4802260398864746, 0, 2, 13, 17, 9, 4, -1, 13, 19, 9, 2, 2, .013962999917566776, .17420299351215363, -.43911001086235046, 0, 3, 5, 5, 12, 8, -1, 5, 5, 6, 4, 2, 11, 9, 6, 4, 2, .04250200092792511, -.1996529996395111, .7065479755401611, 0, 3, 5, 6, 14, 6, -1, 12, 6, 7, 3, 2, 5, 9, 7, 3, 2, .01982799917459488, -.06913600116968155, .6164339780807495, 0, 3, 5, 16, 14, 6, -1, 5, 16, 7, 3, 2, 12, 19, 7, 3, 2, -.033560000360012054, -1.2740780115127563, -.025673000141978264, 0, 2, 18, 2, 6, 9, -1, 18, 5, 6, 3, 3, .06354299932718277, .12403500080108643, -1.0776289701461792, 0, 2, 0, 2, 6, 9, -1, 0, 5, 6, 3, 3, .021933000534772873, .014952000230550766, -.7102349996566772, 0, 3, 3, 4, 20, 10, -1, 13, 4, 10, 5, 2, 3, 9, 10, 5, 2, -.07842499762773514, .6203399896621704, .033610999584198, 0, 2, 2, 13, 9, 8, -1, 5, 13, 3, 8, 3, .014390000142157078, -.36324599385261536, .17308300733566284, 0, 2, 2, 1, 21, 15, -1, 9, 1, 7, 15, 3, -.06730999797582626, .5237410068511963, .012799999676644802, 0, 2, 5, 12, 14, 8, -1, 12, 12, 7, 8, 2, .1304749995470047, -.17122499644756317, 1.123520016670227, 0, 2, 6, 7, 12, 4, -1, 6, 7, 6, 4, 2, -.0462459996342659, -1.1908329725265503, .17425599694252014, 0, 2, 6, 5, 9, 6, -1, 9, 5, 3, 6, 3, -.02984200045466423, .8393059968948364, -.1806419938802719, 0, 2, 13, 11, 6, 6, -1, 13, 11, 3, 6, 2, -.0003809999907389283, .3553279936313629, -.23842300474643707, 0, 2, 5, 11, 6, 6, -1, 8, 11, 3, 6, 2, -.02237899973988533, -.8794389963150024, -.000783999974373728, 0, 2, 6, 4, 18, 2, -1, 6, 5, 18, 1, 2, -.0015569999814033508, -.14253300428390503, .258762001991272, 0, 2, 0, 2, 6, 11, -1, 2, 2, 2, 11, 3, .012013000436127186, -.29015499353408813, .26051101088523865, 0, 2, 18, 0, 6, 15, -1, 20, 0, 2, 15, 3, .02438499964773655, -.03143899887800217, .5869590044021606, 0, 2, 0, 0, 6, 13, -1, 2, 0, 2, 13, 3, -.04718099907040596, .6943010091781616, -.21816100180149078, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, -.024893999099731445, -.6459929943084717, .15611599385738373, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, .02194499969482422, -.02774200029671192, -1.1346880197525024, 0, 2, 0, 2, 24, 4, -1, 8, 2, 8, 4, 3, .1880989968776703, -.010076000355184078, 1.2429029941558838, 0, 2, 3, 13, 18, 4, -1, 12, 13, 9, 4, 2, -.07787200063467026, .8500800132751465, -.1901549994945526, 0, 2, 9, 7, 10, 4, -1, 9, 7, 5, 4, 2, -.04876900091767311, -2.076308012008667, .12179400026798248, 0, 2, 5, 8, 12, 3, -1, 11, 8, 6, 3, 2, -.017115000635385513, -.8568729758262634, .007876000367105007, 0, 2, 4, 14, 19, 3, -1, 4, 15, 19, 1, 3, -.002749999985098839, .3864549994468689, -.11391499638557434, 0, 2, 10, 0, 4, 20, -1, 10, 10, 4, 10, 2, -.09879399836063385, -1.723389983177185, -.05606300011277199, 0, 2, 8, 15, 9, 6, -1, 8, 17, 9, 2, 3, -.021936999633908272, .5474939942359924, -.04248199984431267, 0, 2, 2, 9, 15, 4, -1, 7, 9, 5, 4, 3, .061096999794244766, -.03894500061869621, -1.080788016319275, 0, 2, 8, 4, 12, 7, -1, 12, 4, 4, 7, 3, -.024563999846577644, .5831109881401062, -.0009759999811649323, 0, 2, 0, 10, 6, 9, -1, 0, 13, 6, 3, 3, .03375200182199478, -.013795999810099602, -.8473029732704163, 0, 2, 18, 5, 6, 9, -1, 18, 8, 6, 3, 3, .03819900006055832, .15114299952983856, -.794734001159668, 0, 3, 0, 18, 16, 6, -1, 0, 18, 8, 3, 2, 8, 21, 8, 3, 2, -.020117999985814095, .5157909989356995, -.21445399522781372, 0, 3, 9, 18, 14, 6, -1, 16, 18, 7, 3, 2, 9, 21, 7, 3, 2, .024734999984502792, -.022105000913143158, .4291769862174988, 0, 3, 1, 20, 20, 4, -1, 1, 20, 10, 2, 2, 11, 22, 10, 2, 2, -.02435700036585331, -.8620129823684692, -.00367600005120039, 0, 3, 2, 8, 20, 6, -1, 12, 8, 10, 3, 2, 2, 11, 10, 3, 2, -.02644200064241886, -.45397499203681946, .2246280014514923, 0, 2, 7, 8, 6, 9, -1, 9, 8, 2, 9, 3, -.00344299990683794, .13073000311851501, -.386227011680603, 0, 2, 8, 5, 12, 8, -1, 12, 5, 4, 8, 3, .10701700299978256, .1315860003232956, -.7930690050125122, 0, 2, 4, 5, 12, 8, -1, 8, 5, 4, 8, 3, .045152999460697174, -.2529680132865906, .4067240059375763, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, .044349998235702515, .022613000124692917, .7961810231208801, 0, 2, 2, 0, 6, 16, -1, 4, 0, 2, 16, 3, .0010839999886229634, -.39158400893211365, .11639100313186646, 0, 2, 15, 4, 6, 12, -1, 15, 8, 6, 4, 3, .07143300026655197, .08246699720621109, 1.2530590295791626, 0, 2, 3, 4, 6, 12, -1, 3, 8, 6, 4, 3, .03583800047636032, -.1820330023765564, .7707870006561279, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, -.02083900012075901, -.6174439787864685, .1589139997959137, 0, 2, 4, 0, 15, 22, -1, 4, 11, 15, 11, 2, .42525801062583923, -.04897800087928772, -1.8422030210494995, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, .011408000253140926, .1791819930076599, -.1538349986076355, 0, 2, 0, 12, 9, 6, -1, 0, 14, 9, 2, 3, -.015364999882876873, -.8401650190353394, -.001028000027872622, 0, 2, 15, 15, 9, 6, -1, 15, 17, 9, 2, 3, -.015212000347673893, -.18995699286460876, .17130999267101288, 0, 2, 0, 15, 9, 6, -1, 0, 17, 9, 2, 3, -.01897200010716915, -.7954199910163879, .006680000107735395, 0, 3, 10, 0, 8, 10, -1, 14, 0, 4, 5, 2, 10, 5, 4, 5, 2, -.003333000000566244, -.23530800640583038, .24730099737644196, 0, 2, 1, 0, 4, 16, -1, 3, 0, 2, 16, 2, .09324800223112106, -.05475800111889839, -1.8324300050735474, 0, 2, 7, 6, 10, 6, -1, 7, 8, 10, 2, 3, -.012555000372231007, .26385200023651123, -.38526400923728943, 0, 2, 10, 12, 4, 10, -1, 10, 17, 4, 5, 2, -.027070000767707825, -.669297993183136, .020340999588370323, 0, 2, 8, 4, 10, 6, -1, 8, 6, 10, 2, 3, -.023677000775933266, .6726530194282532, -.01434400025755167, 0, 2, 3, 22, 18, 2, -1, 12, 22, 9, 2, 2, -.014275000430643559, .30186399817466736, -.28514400124549866, 0, 2, 7, 7, 11, 6, -1, 7, 9, 11, 2, 3, .0280969999730587, .1476600021123886, -1.407852053642273, 0, 3, 0, 0, 12, 10, -1, 0, 0, 6, 5, 2, 6, 5, 6, 5, 2, .05084000155329704, -.18613600730895996, .799530029296875, 0, 3, 10, 1, 12, 6, -1, 16, 1, 6, 3, 2, 10, 4, 6, 3, 2, .011505999602377415, .19118399918079376, -.08503500372171402, 0, 2, 7, 16, 9, 4, -1, 7, 18, 9, 2, 2, -.014661000110208988, .4523929953575134, -.22205199301242828, 0, 2, 5, 7, 15, 16, -1, 10, 7, 5, 16, 3, .22842499613761902, .13488399982452393, -1.2894610166549683, 0, 2, 5, 10, 12, 13, -1, 11, 10, 6, 13, 2, .11106900125741959, -.20753799378871918, .5456159710884094, 0, 3, 6, 2, 12, 6, -1, 12, 2, 6, 3, 2, 6, 5, 6, 3, 2, .0032450000289827585, .3205370008945465, -.16403500735759735, 0, 2, 3, 9, 12, 9, -1, 3, 12, 12, 3, 3, .08530999720096588, -.20210500061511993, .5329679846763611, 0, 2, 16, 2, 8, 6, -1, 16, 5, 8, 3, 2, .022048000246286392, .15698599815368652, -.17014099657535553, 0, 2, 0, 2, 8, 6, -1, 0, 5, 8, 3, 2, -.01567699946463108, -.6286349892616272, .040761999785900116, 0, 2, 0, 3, 24, 11, -1, 0, 3, 12, 11, 2, .3311290144920349, .16609300673007965, -1.0326379537582397, 0, 3, 0, 13, 8, 10, -1, 0, 13, 4, 5, 2, 4, 18, 4, 5, 2, .008847000077366829, -.2507619857788086, .31660598516464233, 0, 2, 10, 14, 4, 10, -1, 10, 19, 4, 5, 2, .04608000069856644, .15352100133895874, -1.6333500146865845, 0, 2, 10, 2, 4, 21, -1, 10, 9, 4, 7, 3, -.037703000009059906, .5687379837036133, -.20102599263191223, -3.593964099884033, 159, 0, 2, 4, 4, 15, 9, -1, 4, 7, 15, 3, 3, -.08180899918079376, .5712479948997498, -.6743879914283752, 0, 2, 0, 1, 24, 6, -1, 8, 1, 8, 6, 3, .21761199831962585, -.38610199093818665, .903439998626709, 0, 2, 9, 6, 5, 16, -1, 9, 14, 5, 8, 2, .014878000132739544, .2224159985780716, -1.2779350280761719, 0, 2, 3, 21, 18, 3, -1, 9, 21, 6, 3, 3, .052434999495744705, -.2869040071964264, .7574229836463928, 0, 2, 6, 5, 3, 12, -1, 6, 11, 3, 6, 2, .009142999537289143, -.6488040089607239, .2226880043745041, 0, 2, 11, 6, 4, 9, -1, 11, 6, 2, 9, 2, .007916999980807304, -.2925359904766083, .3103019893169403, 0, 2, 5, 6, 9, 8, -1, 8, 6, 3, 8, 3, -.02608400024473667, .45532700419425964, -.38500601053237915, 0, 2, 4, 3, 20, 2, -1, 4, 4, 20, 1, 2, -.002940000034868717, -.5126439929008484, .2743229866027832, 0, 2, 2, 10, 18, 3, -1, 8, 10, 6, 3, 3, .05713000148534775, .0157880000770092, -1.2133100032806396, 0, 2, 7, 15, 10, 6, -1, 7, 17, 10, 2, 3, -.006130999885499477, .39174601435661316, -.30866798758506775, 0, 3, 1, 4, 4, 18, -1, 1, 4, 2, 9, 2, 3, 13, 2, 9, 2, -.04040500149130821, 1.1901949644088745, -.20347100496292114, 0, 2, 13, 0, 6, 9, -1, 15, 0, 2, 9, 3, -.02029700018465519, -.6823949813842773, .20458699762821198, 0, 2, 5, 0, 6, 9, -1, 7, 0, 2, 9, 3, -.01718899980187416, -.8493989706039429, .038433000445365906, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, -.024215999990701675, -1.1039420366287231, .15975099802017212, 0, 2, 6, 7, 9, 6, -1, 9, 7, 3, 6, 3, .05686900019645691, -.19595299661159515, 1.180685043334961, 0, 2, 3, 0, 18, 2, -1, 3, 1, 18, 1, 2, .00036199999158270657, -.4084779918193817, .32938599586486816, 0, 3, 0, 10, 20, 4, -1, 0, 10, 10, 2, 2, 10, 12, 10, 2, 2, .009979000315070152, -.29673001170158386, .41547900438308716, 0, 2, 10, 2, 4, 12, -1, 10, 8, 4, 6, 2, -.05262500047683716, -1.3069299459457397, .17862600088119507, 0, 3, 6, 5, 6, 12, -1, 6, 5, 3, 6, 2, 9, 11, 3, 6, 2, -.013748999685049057, .2366580069065094, -.4453659951686859, 0, 3, 6, 0, 18, 22, -1, 15, 0, 9, 11, 2, 6, 11, 9, 11, 2, -.03051700070500374, .29018300771713257, -.1121010035276413, 0, 3, 0, 0, 18, 22, -1, 0, 0, 9, 11, 2, 9, 11, 9, 11, 2, -.3003750145435333, -2.4237680435180664, -.042830999940633774, 0, 2, 18, 2, 6, 11, -1, 20, 2, 2, 11, 3, -.03599099814891815, .8820649981498718, -.04701299965381622, 0, 2, 0, 2, 6, 11, -1, 2, 2, 2, 11, 3, -.055112000554800034, .8011900186538696, -.20490999519824982, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, .03376200050115585, .14617599546909332, -1.134948968887329, 0, 2, 0, 0, 20, 3, -1, 0, 1, 20, 1, 3, -.00827100034803152, -.8160489797592163, .018988000229001045, 0, 2, 2, 2, 20, 2, -1, 2, 3, 20, 1, 2, -.005439999978989363, -.7098090052604675, .22343699634075165, 0, 2, 1, 10, 18, 2, -1, 1, 11, 18, 1, 2, .0031059999018907547, -.728085994720459, .04022499918937683, 0, 2, 18, 7, 6, 9, -1, 18, 10, 6, 3, 3, .053651999682188034, .17170900106430054, -1.1163710355758667, 0, 2, 0, 0, 22, 9, -1, 0, 3, 22, 3, 3, -.12541399896144867, 2.7680370807647705, -.1461150050163269, 0, 2, 17, 3, 6, 9, -1, 17, 6, 6, 3, 3, .09254200011491776, .11609800159931183, -3.963552951812744, 0, 2, 0, 7, 6, 9, -1, 0, 10, 6, 3, 3, .03851399943232536, -.007639999967068434, -.9878090023994446, 0, 2, 0, 6, 24, 6, -1, 0, 8, 24, 2, 3, -.0020200000144541264, .2305999994277954, -.7497029900550842, 0, 2, 0, 2, 6, 10, -1, 2, 2, 2, 10, 3, .009759999811649323, -.311379998922348, .3028779923915863, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, .024095000699162483, -.04952999949455261, .5269010066986084, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.0179820004850626, -1.1610640287399292, -.00570000009611249, 0, 2, 15, 0, 6, 9, -1, 17, 0, 2, 9, 3, -.01055500004440546, -.2718909978866577, .23597699403762817, 0, 2, 3, 0, 6, 9, -1, 5, 0, 2, 9, 3, -.007288999855518341, -.5421910285949707, .08191400021314621, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, .023939000442624092, .1797579973936081, -.6704949736595154, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, -.018365999683737755, .6266430020332336, -.20970100164413452, 0, 2, 15, 14, 9, 6, -1, 15, 16, 9, 2, 3, .01571599952876568, .24193699657917023, -1.0444309711456299, 0, 2, 0, 15, 23, 6, -1, 0, 17, 23, 2, 3, -.04880400002002716, -.9406059980392456, -.003751999931409955, 0, 2, 5, 15, 18, 3, -1, 5, 16, 18, 1, 3, .006713000126183033, -.07543200254440308, .6157529950141907, 0, 2, 0, 14, 9, 6, -1, 0, 16, 9, 2, 3, .009777000173926353, .039285000413656235, -.8481029868125916, 0, 3, 9, 8, 8, 10, -1, 13, 8, 4, 5, 2, 9, 13, 4, 5, 2, .014744999818503857, .16968999803066254, -.5090640187263489, 0, 2, 3, 7, 15, 6, -1, 8, 7, 5, 6, 3, .09707900136709213, -.03310300037264824, -1.2706379890441895, 0, 3, 9, 8, 8, 10, -1, 13, 8, 4, 5, 2, 9, 13, 4, 5, 2, .04828599840402603, .09432999789714813, 2.7203190326690674, 0, 2, 5, 0, 6, 12, -1, 8, 0, 3, 12, 2, .009781000204384327, -.39533400535583496, .15363800525665283, 0, 3, 9, 8, 8, 10, -1, 13, 8, 4, 5, 2, 9, 13, 4, 5, 2, -.03989399969577789, -.22767400741577148, .13913999497890472, 0, 2, 8, 5, 6, 9, -1, 10, 5, 2, 9, 3, .02284800074994564, -.2739199995994568, .3419950008392334, 0, 3, 10, 6, 4, 18, -1, 12, 6, 2, 9, 2, 10, 15, 2, 9, 2, .006717999931424856, -.10874299705028534, .4812540113925934, 0, 2, 5, 7, 12, 4, -1, 11, 7, 6, 4, 2, .05959999933838844, -.049522001296281815, -2.011708974838257, 0, 3, 9, 8, 8, 10, -1, 13, 8, 4, 5, 2, 9, 13, 4, 5, 2, .006934000179171562, .15037499368190765, -.11271899938583374, 0, 3, 7, 8, 8, 10, -1, 7, 8, 4, 5, 2, 11, 13, 4, 5, 2, .01575700007379055, -.020885000005364418, -1.1651979684829712, 0, 3, 11, 10, 6, 14, -1, 14, 10, 3, 7, 2, 11, 17, 3, 7, 2, -.04969000071287155, -.8021349906921387, .1437229961156845, 0, 2, 9, 5, 6, 19, -1, 12, 5, 3, 19, 2, .05234700068831444, -.2083670049905777, .6167759895324707, 0, 3, 6, 12, 12, 6, -1, 12, 12, 6, 3, 2, 6, 15, 6, 3, 2, .02243099920451641, .20305900275707245, -.7532619833946228, 0, 3, 1, 9, 18, 6, -1, 1, 9, 9, 3, 2, 10, 12, 9, 3, 2, .04114200174808502, -.18118199706077576, 1.003335952758789, 0, 3, 16, 14, 8, 10, -1, 20, 14, 4, 5, 2, 16, 19, 4, 5, 2, -.02163200080394745, .49998998641967773, -.03466299921274185, 0, 3, 0, 9, 22, 8, -1, 0, 9, 11, 4, 2, 11, 13, 11, 4, 2, -.0828080028295517, 1.1711900234222412, -.18433600664138794, 0, 3, 8, 18, 12, 6, -1, 14, 18, 6, 3, 2, 8, 21, 6, 3, 2, .00850600004196167, -.06322500109672546, .2902489900588989, 0, 3, 0, 6, 20, 18, -1, 0, 6, 10, 9, 2, 10, 15, 10, 9, 2, .07890500128269196, -.2327450066804886, .5969579815864563, 0, 3, 3, 6, 20, 12, -1, 13, 6, 10, 6, 2, 3, 12, 10, 6, 2, -.09020700305700302, -.8221189975738525, .1777220070362091, 0, 3, 0, 16, 10, 8, -1, 0, 16, 5, 4, 2, 5, 20, 5, 4, 2, -.02926900051534176, .6086069941520691, -.2146890014410019, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, .006949999835342169, -.0426659993827343, .6051210165023804, 0, 2, 0, 11, 19, 3, -1, 0, 12, 19, 1, 3, -.008062999695539474, -1.1508270502090454, -.027286000549793243, 0, 2, 14, 6, 6, 9, -1, 14, 9, 6, 3, 3, .019595999270677567, -.009188000112771988, .5685780048370361, 0, 3, 1, 7, 22, 4, -1, 1, 7, 11, 2, 2, 12, 9, 11, 2, 2, -.014884999953210354, .37658798694610596, -.2714950144290924, 0, 2, 13, 6, 7, 12, -1, 13, 10, 7, 4, 3, .025217000395059586, -.09999100118875504, .24664700031280518, 0, 2, 4, 7, 11, 9, -1, 4, 10, 11, 3, 3, -.015855999663472176, .668267011642456, -.2061470001935959, 0, 3, 12, 10, 10, 8, -1, 17, 10, 5, 4, 2, 12, 14, 5, 4, 2, .029441000893712044, .15832200646400452, -.760608971118927, 0, 2, 2, 12, 9, 7, -1, 5, 12, 3, 7, 3, -.008527999743819237, .3821229934692383, -.2540780007839203, 0, 2, 16, 14, 6, 9, -1, 16, 17, 6, 3, 3, .024421999230980873, .15105099976062775, -.28752899169921875, 0, 2, 3, 12, 6, 12, -1, 3, 16, 6, 4, 3, -.033886998891830444, -.6800280213356018, .03432700037956238, 0, 2, 14, 13, 6, 6, -1, 14, 16, 6, 3, 2, -.0020810000132769346, .2541390061378479, -.2685909867286682, 0, 2, 8, 0, 6, 9, -1, 10, 0, 2, 9, 3, .030358999967575073, -.030842000618577003, -1.1476809978485107, 0, 2, 9, 1, 6, 23, -1, 11, 1, 2, 23, 3, .004021000117063522, -.35253798961639404, .29868099093437195, 0, 2, 0, 16, 9, 6, -1, 0, 18, 9, 2, 3, .027681000530719757, -.03814899921417236, -1.3262039422988892, 0, 2, 4, 17, 18, 3, -1, 4, 18, 18, 1, 3, .007903999648988247, -.023737000301480293, .7050300240516663, 0, 2, 5, 2, 13, 14, -1, 5, 9, 13, 7, 2, .04403100162744522, .10674899816513062, -.4526120126247406, 0, 3, 15, 0, 8, 12, -1, 19, 0, 4, 6, 2, 15, 6, 4, 6, 2, -.032370999455451965, .46674901247024536, -.06154699996113777, 0, 3, 0, 0, 8, 12, -1, 0, 0, 4, 6, 2, 4, 6, 4, 6, 2, .0209330003708601, -.2844789922237396, .4384559988975525, 0, 2, 8, 2, 8, 7, -1, 8, 2, 4, 7, 2, .025227999314665794, -.022537000477313995, .7038909792900085, 0, 2, 1, 1, 6, 9, -1, 3, 1, 2, 9, 3, .006552000064402819, -.32554900646209717, .24023699760437012, 0, 3, 14, 8, 6, 12, -1, 17, 8, 3, 6, 2, 14, 14, 3, 6, 2, -.05855799838900566, -1.2227720022201538, .11668799817562103, 0, 3, 4, 8, 6, 12, -1, 4, 8, 3, 6, 2, 7, 14, 3, 6, 2, .03189999982714653, -.019305000081658363, -1.0973169803619385, 0, 2, 16, 5, 5, 15, -1, 16, 10, 5, 5, 3, -.030445000156760216, .6558250188827515, .07509099692106247, 0, 2, 3, 5, 5, 15, -1, 3, 10, 5, 5, 3, .014933000318706036, -.5215579867362976, .1152309998869896, 0, 2, 18, 4, 6, 9, -1, 18, 7, 6, 3, 3, -.049008000642061234, -.7830399870872498, .16657200455665588, 0, 2, 1, 7, 6, 15, -1, 1, 12, 6, 5, 3, .08315899968147278, -.002687999978661537, -.85282301902771, 0, 3, 11, 15, 12, 8, -1, 17, 15, 6, 4, 2, 11, 19, 6, 4, 2, .023902999237179756, -.05101099982857704, .41999098658561707, 0, 3, 0, 2, 24, 4, -1, 0, 2, 12, 2, 2, 12, 4, 12, 2, 2, .016428999602794647, .01923299953341484, -.6504909992218018, 0, 2, 15, 1, 2, 19, -1, 15, 1, 1, 19, 2, -.011838000267744064, -.624098002910614, .15411199629306793, 0, 2, 7, 1, 2, 19, -1, 8, 1, 1, 19, 2, -.00016799999866634607, .17589199542999268, -.34338700771331787, 0, 2, 22, 1, 2, 20, -1, 22, 1, 1, 20, 2, .019193999469280243, .043418999761343, .7906919717788696, 0, 2, 0, 1, 2, 20, -1, 1, 1, 1, 20, 2, -.01003200002014637, .4564889967441559, -.2249480038881302, 0, 2, 18, 11, 6, 12, -1, 20, 11, 2, 12, 3, -.014004000462591648, .33570998907089233, -.004879999905824661, 0, 2, 0, 11, 6, 12, -1, 2, 11, 2, 12, 3, -.10319899767637253, -2.3378000259399414, -.05893300101161003, 0, 2, 3, 6, 18, 14, -1, 3, 13, 18, 7, 2, -.09569700062274933, -.6615390181541443, .20098599791526794, 0, 2, 6, 10, 7, 8, -1, 6, 14, 7, 4, 2, -.04148099943995476, .4593920111656189, -.22314099967479706, 0, 2, 7, 9, 12, 12, -1, 7, 13, 12, 4, 3, .002409999957308173, -.2689859867095947, .24922999739646912, 0, 2, 2, 18, 18, 5, -1, 11, 18, 9, 5, 2, .10724999755620956, -.18640199303627014, .727698028087616, 0, 2, 4, 21, 20, 3, -1, 4, 22, 20, 1, 3, .0031870000530034304, -.024608999490737915, .2864390015602112, 0, 3, 9, 12, 6, 12, -1, 9, 12, 3, 6, 2, 12, 18, 3, 6, 2, .029167000204324722, -.034683000296354294, -1.1162580251693726, 0, 2, 4, 6, 18, 3, -1, 4, 7, 18, 1, 3, .01128700003027916, .0063760001212358475, .6663209795951843, 0, 2, 3, 6, 18, 3, -1, 3, 7, 18, 1, 3, -.012001000344753265, .42420101165771484, -.262798011302948, 0, 2, 18, 4, 6, 9, -1, 18, 7, 6, 3, 3, -.012695999816060066, -.021957000717520714, .18936799466609955, 0, 2, 2, 12, 9, 6, -1, 2, 14, 9, 2, 3, .02459700033068657, -.034963998943567276, -1.0989320278167725, 0, 3, 4, 14, 18, 4, -1, 13, 14, 9, 2, 2, 4, 16, 9, 2, 2, .04595300182700157, .11109799891710281, -2.930604934692383, 0, 3, 7, 7, 6, 14, -1, 7, 7, 3, 7, 2, 10, 14, 3, 7, 2, -.027241000905632973, .29101699590682983, -.27407899498939514, 0, 3, 7, 13, 12, 6, -1, 13, 13, 6, 3, 2, 7, 16, 6, 3, 2, .040063999593257904, .1187790036201477, -.6280180215835571, 0, 2, 6, 7, 12, 9, -1, 10, 7, 4, 9, 3, .023055000230669975, .14813800156116486, -.370074987411499, 0, 2, 12, 12, 6, 6, -1, 12, 12, 3, 6, 2, -.023737000301480293, -.5372480154037476, .19358199834823608, 0, 2, 0, 2, 4, 10, -1, 0, 7, 4, 5, 2, .07752200216054916, -.060194000601768494, -1.9489669799804688, 0, 2, 8, 0, 9, 6, -1, 11, 0, 3, 6, 3, -.013345000334084034, -.4522959887981415, .1874150037765503, 0, 2, 2, 9, 12, 6, -1, 2, 12, 12, 3, 2, -.021719999611377716, 1.214424967765808, -.15365800261497498, 0, 2, 13, 10, 6, 9, -1, 13, 13, 6, 3, 3, -.07147499918937683, -2.304713010787964, .10999900102615356, 0, 2, 5, 10, 6, 9, -1, 5, 13, 6, 3, 3, -.005499999970197678, -.7185519933700562, .020100999623537064, 0, 2, 9, 15, 9, 6, -1, 9, 17, 9, 2, 3, .02674099989235401, .07354500144720078, .9878600239753723, 0, 2, 5, 16, 12, 6, -1, 5, 19, 12, 3, 2, -.03940799832344055, -1.2227380275726318, -.04350699856877327, 0, 2, 3, 2, 20, 3, -1, 3, 3, 20, 1, 3, .025888999924063683, .1340930014848709, -1.1770780086517334, 0, 2, 2, 5, 12, 6, -1, 6, 5, 4, 6, 3, .0489250011742115, -.030810000374913216, -.9347950220108032, 0, 2, 11, 0, 3, 24, -1, 12, 0, 1, 24, 3, .03689299896359444, .13333700597286224, -1.4998290538787842, 0, 2, 3, 16, 15, 4, -1, 8, 16, 5, 4, 3, .07892999798059464, -.14538800716400146, 1.5631790161132812, 0, 2, 9, 12, 6, 12, -1, 9, 18, 6, 6, 2, .029006000608205795, .1938370019197464, -.6764280200004578, 0, 3, 1, 15, 12, 8, -1, 1, 15, 6, 4, 2, 7, 19, 6, 4, 2, .006308999843895435, -.37465399503707886, .1085750013589859, 0, 3, 15, 10, 8, 14, -1, 19, 10, 4, 7, 2, 15, 17, 4, 7, 2, -.06583099812269211, .8105940222740173, .030201999470591545, 0, 3, 1, 9, 8, 14, -1, 1, 9, 4, 7, 2, 5, 16, 4, 7, 2, -.06896500289440155, .8377259969711304, -.1714099943637848, 0, 2, 9, 11, 9, 10, -1, 9, 16, 9, 5, 2, -.11669100075960159, -.9464719891548157, .13123199343681335, 0, 2, 6, 7, 12, 6, -1, 6, 9, 12, 2, 3, -.001306000049225986, .046007998287677765, -.5201159715652466, 0, 2, 10, 15, 6, 9, -1, 12, 15, 2, 9, 3, -.04455899819731712, -1.9423669576644897, .13200700283050537, 0, 2, 7, 8, 9, 7, -1, 10, 8, 3, 7, 3, .05103300139307976, -.21480999886989594, .48673900961875916, 0, 3, 10, 4, 8, 10, -1, 14, 4, 4, 5, 2, 10, 9, 4, 5, 2, -.031578000634908676, .5998979806900024, .007915999740362167, 0, 2, 4, 6, 6, 9, -1, 4, 9, 6, 3, 3, .02102000080049038, -.22069500386714935, .5404620170593262, 0, 2, 0, 6, 24, 12, -1, 8, 6, 8, 12, 3, -.13824200630187988, .6295750141143799, -.021712999790906906, 0, 2, 3, 7, 6, 14, -1, 6, 7, 3, 14, 2, .05222899839282036, -.23360900580883026, .4976080060005188, 0, 2, 19, 8, 5, 8, -1, 19, 12, 5, 4, 2, .025884000584483147, .18041999638080597, -.22039200365543365, 0, 2, 0, 8, 5, 8, -1, 0, 12, 5, 4, 2, -.012138999998569489, -.697318971157074, .01571200042963028, 0, 2, 17, 3, 6, 6, -1, 17, 6, 6, 3, 2, -.024237999692559242, .3459329903125763, .0714699998497963, 0, 2, 1, 3, 6, 6, -1, 1, 6, 6, 3, 2, -.025272000581026077, -.8758329749107361, -.009824000298976898, 0, 2, 18, 2, 6, 9, -1, 18, 5, 6, 3, 3, .01259700022637844, .23649999499320984, -.28731200098991394, 0, 2, 0, 2, 6, 9, -1, 0, 5, 6, 3, 3, .05733099952340126, -.06153099983930588, -2.2326040267944336, 0, 2, 3, 3, 18, 6, -1, 3, 5, 18, 2, 3, .01667100004851818, -.19850100576877594, .4081070125102997, 0, 2, 2, 3, 9, 6, -1, 2, 5, 9, 2, 3, -.022818999364972115, .9648759961128235, -.202456995844841, 0, 3, 9, 3, 10, 8, -1, 14, 3, 5, 4, 2, 9, 7, 5, 4, 2, 37000001611886546e-21, -.05890899896621704, .2705540060997009, 0, 3, 5, 3, 10, 8, -1, 5, 3, 5, 4, 2, 10, 7, 5, 4, 2, -.007670000195503235, -.4531710147857666, .08962800353765488, 0, 2, 10, 11, 6, 12, -1, 10, 11, 3, 12, 2, .09408599883317947, .1160459965467453, -1.0951169729232788, 0, 2, 8, 11, 6, 11, -1, 11, 11, 3, 11, 2, -.0622670017182827, 1.8096530437469482, -.14773200452327728, 0, 2, 7, 8, 10, 4, -1, 7, 8, 5, 4, 2, .017416000366210938, .23068200051784515, -.42417600750923157, 0, 2, 9, 6, 6, 7, -1, 12, 6, 3, 7, 2, -.02206600084900856, .49270299077033997, -.2063090056180954, 0, 2, 5, 18, 18, 3, -1, 5, 19, 18, 1, 3, -.01040400005877018, .6092429757118225, .028130000457167625, 0, 2, 8, 4, 6, 9, -1, 10, 4, 2, 9, 3, -.009367000311613083, .40171200037002563, -.2168170064687729, 0, 2, 8, 1, 9, 7, -1, 11, 1, 3, 7, 3, -.029039999470114708, -.8487650156021118, .14246800541877747, 0, 2, 6, 11, 6, 6, -1, 9, 11, 3, 6, 2, -.02106199972331524, -.7919830083847046, -.012595999985933304, 0, 2, 14, 12, 4, 11, -1, 14, 12, 2, 11, 2, -.037000998854637146, -.6748890280723572, .12830400466918945, 0, 2, 6, 12, 4, 11, -1, 8, 12, 2, 11, 2, .010735999792814255, .03677999973297119, -.6339300274848938, 0, 2, 8, 0, 12, 18, -1, 12, 0, 4, 18, 3, .16367599368095398, .1380389928817749, -.47189000248908997, 0, 2, 2, 12, 10, 5, -1, 7, 12, 5, 5, 2, .09491799771785736, -.13855700194835663, 1.9492419958114624, 0, 2, 2, 20, 22, 3, -1, 2, 21, 22, 1, 3, .03526199981570244, .13721899688243866, -2.1186530590057373, 0, 2, 0, 4, 2, 20, -1, 1, 4, 1, 20, 2, .01281100045889616, -.200081005692482, .4950779974460602, -3.3933560848236084, 155, 0, 2, 0, 2, 24, 4, -1, 8, 2, 8, 4, 3, .13904400169849396, -.46581199765205383, .7643160223960876, 0, 2, 7, 8, 10, 4, -1, 7, 10, 10, 2, 2, .011916999705135822, -.9439899921417236, .3972629904747009, 0, 3, 6, 7, 8, 10, -1, 6, 7, 4, 5, 2, 10, 12, 4, 5, 2, -.010006999596953392, .32718798518180847, -.6336740255355835, 0, 3, 14, 0, 6, 14, -1, 17, 0, 3, 7, 2, 14, 7, 3, 7, 2, -.006047999951988459, .27427899837493896, -.5744699835777283, 0, 2, 4, 11, 5, 8, -1, 4, 15, 5, 4, 2, -.0012489999644458294, .2362930029630661, -.6859350204467773, 0, 2, 2, 0, 20, 9, -1, 2, 3, 20, 3, 3, .03238200023770332, -.5763019919395447, .2749269902706146, 0, 3, 6, 7, 12, 8, -1, 6, 7, 6, 4, 2, 12, 11, 6, 4, 2, -.013957999646663666, -.6106150150299072, .24541600048542023, 0, 2, 9, 17, 6, 6, -1, 9, 20, 6, 3, 2, .0011159999994561076, -.5653910040855408, .271793007850647, 0, 2, 7, 10, 10, 4, -1, 7, 12, 10, 2, 2, 2700000004551839e-20, -.8023599982261658, .1150910034775734, 0, 2, 6, 5, 12, 9, -1, 10, 5, 4, 9, 3, -.0002570000069681555, -.8120589852333069, .23844699561595917, 0, 2, 5, 11, 6, 8, -1, 8, 11, 3, 8, 2, .004046000074595213, .13909600675106049, -.6616320013999939, 0, 2, 18, 4, 4, 17, -1, 18, 4, 2, 17, 2, .01435600034892559, -.16485199332237244, .4190169870853424, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.05537499859929085, 1.4425870180130005, -.18820199370384216, 0, 2, 18, 4, 4, 17, -1, 18, 4, 2, 17, 2, .0935949981212616, .1354829967021942, -.9163609743118286, 0, 2, 2, 4, 4, 17, -1, 4, 4, 2, 17, 2, .026624999940395355, -.3374829888343811, .39233601093292236, 0, 2, 5, 18, 19, 3, -1, 5, 19, 19, 1, 3, .003746999893337488, -.11615400016307831, .4439930021762848, 0, 2, 11, 0, 2, 18, -1, 11, 9, 2, 9, 2, -.03188600018620491, -.9949830174446106, .0016120000509545207, 0, 2, 15, 4, 2, 18, -1, 15, 13, 2, 9, 2, -.022600000724196434, -.48067399859428406, .170073002576828, 0, 2, 7, 4, 2, 18, -1, 7, 13, 2, 9, 2, .02520200051367283, .03558000177145004, -.802154004573822, 0, 3, 7, 11, 10, 8, -1, 12, 11, 5, 4, 2, 7, 15, 5, 4, 2, -.031036999076604843, -1.089534044265747, .18081900477409363, 0, 2, 10, 6, 4, 9, -1, 12, 6, 2, 9, 2, -.026475999504327774, .956712007522583, -.2104939967393875, 0, 2, 10, 0, 6, 9, -1, 12, 0, 2, 9, 3, -.01385399978607893, -1.0370320081710815, .22166700661182404, 0, 3, 2, 9, 16, 8, -1, 2, 9, 8, 4, 2, 10, 13, 8, 4, 2, -.06292500346899033, .901993989944458, -.19085299968719482, 0, 2, 14, 15, 6, 9, -1, 14, 18, 6, 3, 3, -.04475099965929985, -1.0119110345840454, .14691199362277985, 0, 2, 8, 7, 6, 9, -1, 10, 7, 2, 9, 3, -.020428000018000603, .6162449717521667, -.23552699387073517, 0, 2, 14, 15, 6, 9, -1, 14, 18, 6, 3, 3, -.00803299993276596, -.08327999711036682, .21728700399398804, 0, 2, 3, 12, 12, 6, -1, 3, 14, 12, 2, 3, .008728000335395336, .0654589980840683, -.6031870245933533, 0, 2, 14, 12, 9, 6, -1, 14, 14, 9, 2, 3, -.027202000841498375, -.934473991394043, .1527000069618225, 0, 2, 1, 12, 9, 6, -1, 1, 14, 9, 2, 3, -.016471000388264656, -.8417710065841675, .013332000002264977, 0, 2, 3, 7, 18, 3, -1, 3, 8, 18, 1, 3, -.013744000345468521, .6056720018386841, -.09202100336551666, 0, 2, 1, 7, 22, 6, -1, 1, 9, 22, 2, 3, .029164999723434448, -.02811400033533573, -1.4014569520950317, 0, 2, 18, 4, 6, 6, -1, 18, 7, 6, 3, 2, .037457000464200974, .13080599904060364, -.4938249886035919, 0, 2, 0, 4, 6, 6, -1, 0, 7, 6, 3, 2, -.02507000043988228, -1.1289390325546265, -.014600000344216824, 0, 2, 5, 11, 16, 6, -1, 5, 14, 16, 3, 2, -.0638120025396347, .7587159872055054, -.001820000004954636, 0, 2, 6, 16, 9, 4, -1, 6, 18, 9, 2, 2, -.009390000253915787, .29936400055885315, -.2948780059814453, 0, 2, 14, 15, 6, 9, -1, 14, 18, 6, 3, 3, -.0007600000244565308, .019725000485777855, .19993899762630463, 0, 2, 4, 15, 6, 9, -1, 4, 18, 6, 3, 3, -.021740999072790146, -.8524789810180664, .04916999861598015, 0, 2, 15, 1, 6, 23, -1, 17, 1, 2, 23, 3, -.017869999632239342, -.05998599901795387, .15222500264644623, 0, 2, 0, 21, 24, 3, -1, 8, 21, 8, 3, 3, -.024831000715494156, .3560340106487274, -.26259899139404297, 0, 2, 0, 20, 24, 4, -1, 8, 20, 8, 4, 3, .15715500712394714, .000155999994603917, 1.0428730249404907, 0, 2, 3, 1, 6, 23, -1, 5, 1, 2, 23, 3, .06902699917554855, -.033006999641656876, -1.1796669960021973, 0, 2, 3, 17, 18, 3, -1, 3, 18, 18, 1, 3, -.011021999642252922, .5898770093917847, -.05764799937605858, 0, 2, 0, 16, 18, 3, -1, 0, 17, 18, 1, 3, -.0138349998742342, .5950279831886292, -.24418599903583527, 0, 3, 1, 16, 22, 4, -1, 12, 16, 11, 2, 2, 1, 18, 11, 2, 2, -.03094100020825863, -1.172379970550537, .16907000541687012, 0, 2, 0, 16, 9, 6, -1, 0, 18, 9, 2, 3, .021258000284433365, -.018900999799370766, -1.0684759616851807, 0, 2, 2, 10, 21, 3, -1, 9, 10, 7, 3, 3, .09307999908924103, .16305600106716156, -1.3375270366668701, 0, 3, 2, 18, 12, 6, -1, 2, 18, 6, 3, 2, 8, 21, 6, 3, 2, .029635999351739883, -.22524799406528473, .4540010094642639, 0, 2, 0, 5, 24, 4, -1, 0, 7, 24, 2, 2, -.00012199999764561653, .2740910053253174, -.37371399998664856, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.04209800064563751, -.7582880258560181, .01713700033724308, 0, 2, 10, 7, 6, 12, -1, 10, 13, 6, 6, 2, -.022505000233650208, -.22759300470352173, .23698699474334717, 0, 2, 6, 6, 6, 9, -1, 8, 6, 2, 9, 3, -.01286299992352724, .1925240010023117, -.32127100229263306, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, .027860000729560852, .16723699867725372, -1.0209059715270996, 0, 2, 9, 7, 6, 9, -1, 11, 7, 2, 9, 3, -.027807999402284622, 1.2824759483337402, -.17225299775600433, 0, 2, 2, 1, 20, 3, -1, 2, 2, 20, 1, 3, -.006163000129163265, -.5407289862632751, .23885700106620789, 0, 3, 1, 18, 12, 6, -1, 1, 18, 6, 3, 2, 7, 21, 6, 3, 2, -.02043600007891655, .6335539817810059, -.2109059989452362, 0, 2, 13, 2, 4, 13, -1, 13, 2, 2, 13, 2, -.012307999655604362, -.49778199195861816, .1740259975194931, 0, 2, 6, 7, 12, 4, -1, 12, 7, 6, 4, 2, -.04049399867653847, -1.1848740577697754, -.03389099985361099, 0, 2, 10, 1, 4, 13, -1, 10, 1, 2, 13, 2, .029657000675797462, .021740999072790146, 1.006991982460022, 0, 2, 6, 0, 3, 18, -1, 7, 0, 1, 18, 3, .006837999913841486, .029217999428510666, -.599062979221344, 0, 2, 14, 3, 10, 5, -1, 14, 3, 5, 5, 2, .016164999455213547, -.21000799536705017, .3763729929924011, 0, 2, 6, 15, 12, 8, -1, 10, 15, 4, 8, 3, .050193000584840775, .0025319999549537897, -.7166820168495178, 0, 2, 9, 10, 6, 9, -1, 11, 10, 2, 9, 3, .0019680000841617584, -.21921400725841522, .32298699021339417, 0, 2, 8, 3, 4, 9, -1, 10, 3, 2, 9, 2, .024979999288916588, -.009684000164270401, -.7757290005683899, 0, 3, 17, 0, 6, 14, -1, 20, 0, 3, 7, 2, 17, 7, 3, 7, 2, -.015809999778866768, .4463750123977661, -.06176000088453293, 0, 3, 1, 0, 6, 14, -1, 1, 0, 3, 7, 2, 4, 7, 3, 7, 2, .03720699995756149, -.20495399832725525, .5772219896316528, 0, 3, 14, 0, 6, 16, -1, 17, 0, 3, 8, 2, 14, 8, 3, 8, 2, -.07926499843597412, -.7674540281295776, .1255040019750595, 0, 2, 7, 4, 4, 10, -1, 9, 4, 2, 10, 2, -.017152000218629837, -1.4121830463409424, -.05170400068163872, 0, 3, 3, 17, 18, 6, -1, 12, 17, 9, 3, 2, 3, 20, 9, 3, 2, .03274000063538551, .193340003490448, -.6363369822502136, 0, 2, 1, 20, 22, 4, -1, 12, 20, 11, 4, 2, -.11756999790668488, .843254029750824, -.18018600344657898, 0, 2, 14, 3, 10, 5, -1, 14, 3, 5, 5, 2, .12057200074195862, .12530000507831573, -2.1213600635528564, 0, 2, 0, 3, 10, 5, -1, 5, 3, 5, 5, 2, .0042779999785125256, -.46604400873184204, .08964399993419647, 0, 2, 12, 6, 12, 16, -1, 16, 6, 4, 16, 3, -.07254499942064285, .5182650089263916, .01682399958372116, 0, 2, 0, 6, 12, 16, -1, 4, 6, 4, 16, 3, .17710599303245544, -.030910000205039978, -1.1046639680862427, 0, 2, 10, 9, 5, 15, -1, 10, 14, 5, 5, 3, .008422999642789364, .24445800483226776, -.3861309885978699, 0, 2, 1, 18, 21, 2, -1, 1, 19, 21, 1, 2, -.013035000301897526, .9800440073013306, -.17016500234603882, 0, 2, 15, 0, 9, 6, -1, 15, 2, 9, 2, 3, .018912000581622124, .20248499512672424, -.3854590058326721, 0, 2, 6, 1, 12, 4, -1, 12, 1, 6, 4, 2, .02144799940288067, -.25717198848724365, .3518120050430298, 0, 3, 6, 0, 12, 12, -1, 12, 0, 6, 6, 2, 6, 6, 6, 6, 2, .06335700303316116, .16994799673557281, -.9138380289077759, 0, 3, 8, 10, 8, 12, -1, 8, 10, 4, 6, 2, 12, 16, 4, 6, 2, -.03243599832057953, -.8568159937858582, -.02168099954724312, 0, 3, 14, 16, 10, 8, -1, 19, 16, 5, 4, 2, 14, 20, 5, 4, 2, -.023564999923110008, .5611559748649597, -.00022400000307243317, 0, 3, 0, 16, 10, 8, -1, 0, 16, 5, 4, 2, 5, 20, 5, 4, 2, .018789000809192657, -.2545979917049408, .34512901306152344, 0, 2, 10, 12, 12, 5, -1, 14, 12, 4, 5, 3, .031042000278830528, .007571999914944172, .34800198674201965, 0, 3, 6, 16, 10, 8, -1, 6, 16, 5, 4, 2, 11, 20, 5, 4, 2, -.011226999573409557, -.6021980047225952, .04281499981880188, 0, 3, 7, 6, 12, 6, -1, 13, 6, 6, 3, 2, 7, 9, 6, 3, 2, -.01284599956125021, .4202040135860443, -.053801000118255615, 0, 3, 9, 6, 4, 18, -1, 9, 6, 2, 9, 2, 11, 15, 2, 9, 2, -.012791999615728855, .2272450029850006, -.3239800035953522, 0, 3, 10, 9, 6, 14, -1, 13, 9, 3, 7, 2, 10, 16, 3, 7, 2, .06865199655294418, .0935320034623146, 10, 0, 3, 8, 9, 6, 14, -1, 8, 9, 3, 7, 2, 11, 16, 3, 7, 2, .005278999917209148, -.26926299929618835, .3330320119857788, 0, 2, 7, 4, 11, 12, -1, 7, 10, 11, 6, 2, -.03877900168299675, -.7236530184745789, .1780650019645691, 0, 3, 4, 8, 6, 16, -1, 4, 8, 3, 8, 2, 7, 16, 3, 8, 2, .006182000041007996, -.35119399428367615, .1658630073070526, 0, 2, 17, 3, 4, 21, -1, 17, 10, 4, 7, 3, .1751520037651062, .11623100191354752, -1.541929006576538, 0, 2, 3, 3, 4, 21, -1, 3, 10, 4, 7, 3, .11627999693155289, -.009147999808192253, -.9984260201454163, 0, 3, 10, 1, 8, 18, -1, 14, 1, 4, 9, 2, 10, 10, 4, 9, 2, -.022964000701904297, .20565399527549744, .015432000160217285, 0, 3, 2, 5, 16, 8, -1, 2, 5, 8, 4, 2, 10, 9, 8, 4, 2, -.0514100007712841, .5807240009307861, -.2011840045452118, 0, 2, 3, 6, 18, 12, -1, 3, 10, 18, 4, 3, .22474199533462524, .01872899942100048, 1.0829299688339233, 0, 2, 4, 10, 16, 12, -1, 4, 14, 16, 4, 3, .009486000053584576, -.3317129909992218, .19902999699115753, 0, 3, 15, 4, 8, 20, -1, 19, 4, 4, 10, 2, 15, 14, 4, 10, 2, -.11846300214529037, 1.3711010217666626, .06892699748277664, 0, 2, 7, 2, 9, 6, -1, 10, 2, 3, 6, 3, .037810999900102615, -.0009360000258311629, -.8399699926376343, 0, 3, 15, 4, 8, 20, -1, 19, 4, 4, 10, 2, 15, 14, 4, 10, 2, .02220200002193451, -.011963999830186367, .36673998832702637, 0, 3, 1, 4, 8, 20, -1, 1, 4, 4, 10, 2, 5, 14, 4, 10, 2, -.03636600077152252, .3786650002002716, -.2771480083465576, 0, 3, 11, 8, 8, 14, -1, 15, 8, 4, 7, 2, 11, 15, 4, 7, 2, -.13184699416160583, -2.7481179237365723, .10666900128126144, 0, 3, 5, 8, 8, 14, -1, 5, 8, 4, 7, 2, 9, 15, 4, 7, 2, -.041655998677015305, .4752430021762848, -.23249800503253937, 0, 2, 10, 13, 5, 8, -1, 10, 17, 5, 4, 2, -.03315199911594391, -.5792940258979797, .174344003200531, 0, 2, 4, 13, 7, 9, -1, 4, 16, 7, 3, 3, .015769999474287033, -.011284000240266323, -.8370140194892883, 0, 2, 0, 13, 24, 10, -1, 0, 18, 24, 5, 2, -.03936300054192543, .3482159972190857, -.1745540052652359, 0, 2, 4, 2, 8, 11, -1, 8, 2, 4, 11, 2, -.06784900277853012, 1.422569990158081, -.14765599370002747, 0, 3, 10, 2, 8, 16, -1, 14, 2, 4, 8, 2, 10, 10, 4, 8, 2, -.026775000616908073, .2394700050354004, .013271999545395374, 0, 3, 0, 2, 24, 6, -1, 0, 2, 12, 3, 2, 12, 5, 12, 3, 2, .03991900011897087, -.008999999612569809, -.7593889832496643, 0, 2, 6, 0, 12, 9, -1, 6, 3, 12, 3, 3, .10065600275993347, -.018685000017285347, .762453019618988, 0, 3, 1, 2, 12, 12, -1, 1, 2, 6, 6, 2, 7, 8, 6, 6, 2, -.0810220018029213, -.9043909907341003, -.008588000200688839, 0, 2, 18, 5, 6, 9, -1, 18, 8, 6, 3, 3, -.021258000284433365, -.21319599449634552, .21919700503349304, 0, 3, 4, 3, 8, 10, -1, 4, 3, 4, 5, 2, 8, 8, 4, 5, 2, -.010630999691784382, .1959809958934784, -.357681006193161, 0, 2, 6, 21, 18, 3, -1, 6, 22, 18, 1, 3, .000813000020571053, -.0927949994802475, .26145899295806885, 0, 2, 1, 10, 18, 2, -1, 1, 11, 18, 1, 2, .0034650000743567944, -.5533609986305237, .027386000379920006, 0, 2, 1, 10, 22, 3, -1, 1, 11, 22, 1, 3, .018835999071598053, .18446099758148193, -.6693429946899414, 0, 2, 2, 8, 12, 9, -1, 2, 11, 12, 3, 3, -.025631999596953392, 1.9382879734039307, -.14708900451660156, 0, 3, 12, 8, 12, 6, -1, 18, 8, 6, 3, 2, 12, 11, 6, 3, 2, -.004093999974429607, -.2645159959793091, .20733200013637543, 0, 3, 0, 8, 12, 6, -1, 0, 8, 6, 3, 2, 6, 11, 6, 3, 2, -.0008919999818317592, -.5503159761428833, .05037499964237213, 0, 2, 10, 15, 6, 9, -1, 12, 15, 2, 9, 3, -.049518000334501266, -2.5615389347076416, .13141700625419617, 0, 2, 7, 13, 9, 6, -1, 7, 15, 9, 2, 3, .011680999770760536, -.248198002576828, .3998270034790039, 0, 2, 9, 8, 7, 12, -1, 9, 14, 7, 6, 2, .034563999623060226, .1617880016565323, -.7141889929771423, 0, 2, 4, 13, 9, 6, -1, 7, 13, 3, 6, 3, -.008290999568998814, .2218009978532791, -.2918170094490051, 0, 2, 6, 15, 18, 4, -1, 12, 15, 6, 4, 3, -.0223580002784729, .3104409873485565, -.0027280000504106283, 0, 2, 5, 4, 4, 16, -1, 7, 4, 2, 16, 2, -.03080100007355213, -.9567270278930664, -.008340000174939632, 0, 2, 10, 15, 6, 9, -1, 12, 15, 2, 9, 3, .043779000639915466, .12556900084018707, -1.175961971282959, 0, 2, 8, 15, 6, 9, -1, 10, 15, 2, 9, 3, .043046001344919205, -.05887699872255325, -1.8568470478057861, 0, 3, 9, 11, 12, 10, -1, 15, 11, 6, 5, 2, 9, 16, 6, 5, 2, .027188999578356743, .042858000844717026, .3903670012950897, 0, 2, 3, 6, 14, 6, -1, 3, 8, 14, 2, 3, .00941499974578619, -.043567001819610596, -1.1094470024108887, 0, 2, 4, 2, 17, 8, -1, 4, 6, 17, 4, 2, .09431199729442596, .04025699943304062, .9844229817390442, 0, 2, 6, 2, 12, 21, -1, 6, 9, 12, 7, 3, .1702509969472885, .029510000720620155, -.6950929760932922, 0, 2, 8, 1, 9, 9, -1, 8, 4, 9, 3, 3, -.047148000448942184, 1.033856987953186, .0676020011305809, 0, 2, 0, 7, 24, 3, -1, 12, 7, 12, 3, 2, .11186300218105316, -.06868299841880798, -2.4985830783843994, 0, 2, 11, 6, 9, 10, -1, 11, 11, 9, 5, 2, -.014353999868035316, -.5948190093040466, .15001699328422546, 0, 2, 2, 11, 18, 3, -1, 2, 12, 18, 1, 3, .03402400016784668, -.06482300162315369, -2.1382639408111572, 0, 2, 8, 16, 9, 4, -1, 8, 18, 9, 2, 2, .021601999178528786, .055309999734163284, .782929003238678, 0, 2, 0, 0, 9, 6, -1, 0, 2, 9, 2, 3, .021771999076008797, -.007127999793738127, -.7214810252189636, 0, 2, 0, 11, 24, 6, -1, 0, 13, 24, 2, 3, .08241699635982513, .14609499275684357, -1.3636670112609863, 0, 2, 2, 9, 20, 6, -1, 2, 12, 20, 3, 2, .0846719965338707, -.1778469979763031, .7285770177841187, 0, 3, 4, 5, 16, 12, -1, 12, 5, 8, 6, 2, 4, 11, 8, 6, 2, -.05512800067663193, -.5940240025520325, .19357800483703613, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.06482300162315369, -1.0783840417861938, -.040734000504016876, 0, 2, 7, 3, 10, 4, -1, 7, 5, 10, 2, 2, -.022769000381231308, .7790020108222961, .003496000077575445, 0, 2, 9, 15, 6, 8, -1, 9, 19, 6, 4, 2, .05475600063800812, -.0656839981675148, -1.8188409805297852, 0, 2, 17, 0, 7, 10, -1, 17, 5, 7, 5, 2, -8900000102585182e-20, -.01789199933409691, .2076829969882965, 0, 2, 0, 0, 7, 10, -1, 0, 5, 7, 5, 2, .09836199879646301, -.05594699829816818, -1.4153920412063599, 0, 3, 16, 1, 6, 12, -1, 19, 1, 3, 6, 2, 16, 7, 3, 6, 2, -.00709300022572279, .34135299921035767, -.12089899927377701, 0, 2, 1, 0, 19, 8, -1, 1, 4, 19, 4, 2, .05027800053358078, -.2628670036792755, .25797298550605774, 0, 2, 12, 2, 9, 4, -1, 12, 4, 9, 2, 2, -.005787000060081482, -.13178600370883942, .17350199818611145, 0, 2, 3, 2, 9, 4, -1, 3, 4, 9, 2, 2, .01397399976849556, .02851800061762333, -.6115220189094543, 0, 2, 12, 2, 10, 6, -1, 12, 4, 10, 2, 3, .021449999883770943, .02618199959397316, .3030659854412079, 0, 2, 3, 4, 18, 2, -1, 12, 4, 9, 2, 2, -.029214000329375267, .4494059979915619, -.2280309945344925, 0, 2, 12, 1, 4, 9, -1, 12, 1, 2, 9, 2, .00048099999548867345, -.1987999975681305, .20744499564170837, 0, 2, 8, 1, 4, 9, -1, 10, 1, 2, 9, 2, .0017109999898821115, -.5403720140457153, .0678659975528717, 0, 3, 10, 5, 8, 10, -1, 14, 5, 4, 5, 2, 10, 10, 4, 5, 2, .008666000328958035, -.013128000311553478, .5229790210723877, 0, 2, 6, 4, 12, 13, -1, 10, 4, 4, 13, 3, .06365799903869629, .06829900294542313, -.4923509955406189, 0, 2, 13, 5, 6, 6, -1, 13, 5, 3, 6, 2, -.02796800062060356, .6818389892578125, .07878100126981735, 0, 2, 1, 5, 12, 3, -1, 7, 5, 6, 3, 2, .04895399883389473, -.2062239944934845, .5038809776306152, -3.2396929264068604, 169, 0, 2, 7, 5, 10, 6, -1, 7, 7, 10, 2, 3, -.029312999919056892, .7128469944000244, -.582306981086731, 0, 2, 2, 0, 21, 5, -1, 9, 0, 7, 5, 3, .12415099889039993, -.36863499879837036, .6006720066070557, 0, 2, 0, 8, 9, 9, -1, 0, 11, 9, 3, 3, .007934999652206898, -.8600829839706421, .21724699437618256, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .030365999788045883, -.2718699872493744, .6124789714813232, 0, 2, 0, 3, 6, 7, -1, 3, 3, 3, 7, 2, .025218000635504723, -.3474830090999603, .5042769908905029, 0, 3, 9, 18, 12, 6, -1, 15, 18, 6, 3, 2, 9, 21, 6, 3, 2, .010014000348746777, -.31898999214172363, .4137679934501648, 0, 3, 2, 8, 20, 6, -1, 2, 8, 10, 3, 2, 12, 11, 10, 3, 2, -.01677500084042549, -.6904810070991516, .09483099728822708, 0, 2, 13, 2, 10, 4, -1, 13, 4, 10, 2, 2, -.0026950000319629908, -.208297997713089, .2373719960451126, 0, 2, 4, 5, 5, 18, -1, 4, 11, 5, 6, 3, .04225799813866615, -.49366700649261475, .1817059963941574, 0, 2, 20, 4, 4, 9, -1, 20, 4, 2, 9, 2, -.04850500077009201, 1.3429640531539917, .0397690013051033, 0, 2, 8, 6, 8, 14, -1, 8, 13, 8, 7, 2, .028992999345064163, .04649600014090538, -.8164349794387817, 0, 3, 0, 1, 24, 6, -1, 12, 1, 12, 3, 2, 0, 4, 12, 3, 2, -.04008900001645088, -.711978018283844, .22553899884223938, 0, 2, 0, 4, 4, 9, -1, 2, 4, 2, 9, 2, -.04102199897170067, 1.0057929754257202, -.19690200686454773, 0, 2, 3, 6, 18, 3, -1, 3, 7, 18, 1, 3, .011838000267744064, -.012600000016391277, .8076710104942322, 0, 2, 3, 17, 16, 6, -1, 3, 19, 16, 2, 3, -.021328000351786613, -.8202390074729919, .020524999126791954, 0, 2, 13, 6, 6, 9, -1, 13, 9, 6, 3, 3, -.02390499971807003, .5421050190925598, -.07476700097322464, 0, 3, 5, 6, 14, 6, -1, 5, 6, 7, 3, 2, 12, 9, 7, 3, 2, .018008999526500702, -.33827701210975647, .42358601093292236, 0, 3, 13, 5, 8, 10, -1, 17, 5, 4, 5, 2, 13, 10, 4, 5, 2, -.04361400008201599, -1.1983489990234375, .15566200017929077, 0, 2, 2, 2, 20, 3, -1, 2, 3, 20, 1, 3, -.009244999848306179, -.8902999758720398, .011003999970853329, 0, 2, 9, 2, 9, 6, -1, 12, 2, 3, 6, 3, .047485001385211945, .1666409969329834, -.9076449871063232, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, -.014233999885618687, .6269519925117493, -.2579120099544525, 0, 2, 12, 3, 4, 11, -1, 12, 3, 2, 11, 2, .0038010000716894865, -.2822999954223633, .2662459909915924, 0, 2, 8, 3, 4, 11, -1, 10, 3, 2, 11, 2, .00343300006352365, -.637719988822937, .09842299669981003, 0, 3, 8, 3, 8, 10, -1, 12, 3, 4, 5, 2, 8, 8, 4, 5, 2, -.029221000149846077, -.7676990032196045, .2263450026512146, 0, 2, 11, 1, 2, 18, -1, 12, 1, 1, 18, 2, -.00649499986320734, .45600101351737976, -.2652890086174011, 0, 2, 9, 2, 9, 6, -1, 12, 2, 3, 6, 3, -.030034000054001808, -.7655109763145447, .14009299874305725, 0, 2, 0, 2, 19, 3, -1, 0, 3, 19, 1, 3, .007836000062525272, .04675599932670593, -.7235620021820068, 0, 2, 9, 14, 9, 6, -1, 9, 16, 9, 2, 3, .008855000138282776, -.04914199933409691, .514726996421814, 0, 2, 1, 8, 18, 5, -1, 7, 8, 6, 5, 3, .09597399830818176, -.020068999379873276, -1.0850950479507446, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, -.03287699818611145, -.9587529897689819, .14543600380420685, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, -.013384000398218632, -.7001360058784485, .02915799990296364, 0, 2, 13, 6, 4, 15, -1, 13, 11, 4, 5, 3, .01523599959909916, -.28235700726509094, .2536799907684326, 0, 2, 1, 5, 18, 3, -1, 1, 6, 18, 1, 3, .012054000049829483, -.25303399562835693, .46526700258255005, 0, 2, 9, 7, 14, 6, -1, 9, 9, 14, 2, 3, -.07629500329494476, -.6991580128669739, .13217200338840485, 0, 2, 2, 16, 18, 3, -1, 2, 17, 18, 1, 3, -.012040000408887863, .45894598960876465, -.23856499791145325, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, .021916000172495842, .1826860010623932, -.6162970066070557, 0, 3, 0, 8, 12, 6, -1, 0, 8, 6, 3, 2, 6, 11, 6, 3, 2, -.002733000088483095, -.6325790286064148, .03421900048851967, 0, 2, 9, 13, 7, 8, -1, 9, 17, 7, 4, 2, -.04865200072526932, -1.0297729969024658, .17386500537395477, 0, 2, 2, 17, 20, 3, -1, 2, 18, 20, 1, 3, -.010463999584317207, .34757301211357117, -.2746410071849823, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, -.006655000150203705, -.28980299830436707, .24037900567054749, 0, 2, 4, 0, 15, 4, -1, 4, 2, 15, 2, 2, .008546999655663967, -.44340500235557556, .14267399907112122, 0, 2, 17, 2, 6, 6, -1, 17, 5, 6, 3, 2, .01991399936378002, .1774040013551712, -.24096299707889557, 0, 2, 0, 3, 6, 9, -1, 0, 6, 6, 3, 3, .022012999281287193, -.010812000371515751, -.9469079971313477, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, -.0521790012717247, 1.6547499895095825, .09648700058460236, 0, 2, 0, 17, 9, 6, -1, 0, 19, 9, 2, 3, .01969899982213974, -.006756000220775604, -.8631150126457214, 0, 3, 9, 18, 12, 6, -1, 15, 18, 6, 3, 2, 9, 21, 6, 3, 2, .02304000034928322, -.002351999981328845, .3853130042552948, 0, 2, 3, 15, 6, 9, -1, 3, 18, 6, 3, 3, -.015038000419735909, -.6190569996833801, .031077999621629715, 0, 3, 16, 13, 8, 10, -1, 20, 13, 4, 5, 2, 16, 18, 4, 5, 2, -.049956001341342926, .7065749764442444, .047880999743938446, 0, 2, 0, 14, 24, 4, -1, 8, 14, 8, 4, 3, -.06926999986171722, .39212900400161743, -.23848000168800354, 0, 2, 13, 18, 6, 6, -1, 13, 18, 3, 6, 2, .004739999771118164, -.024309000000357628, .25386300683021545, 0, 3, 0, 13, 8, 10, -1, 0, 13, 4, 5, 2, 4, 18, 4, 5, 2, -.03392399847507477, .46930399537086487, -.2332189977169037, 0, 2, 0, 14, 24, 6, -1, 0, 17, 24, 3, 2, -.016231000423431396, .3231920003890991, -.20545600354671478, 0, 3, 5, 2, 12, 8, -1, 5, 2, 6, 4, 2, 11, 6, 6, 4, 2, -.050193000584840775, -1.2277870178222656, -.04079800099134445, 0, 2, 8, 9, 9, 6, -1, 11, 9, 3, 6, 3, .05694400146603584, .045184001326560974, .6019750237464905, 0, 2, 4, 3, 16, 4, -1, 4, 5, 16, 2, 2, .04093699902296066, -.1677280068397522, .8981930017471313, 0, 2, 10, 2, 4, 10, -1, 10, 7, 4, 5, 2, -.003083999967202544, .33716198801994324, -.27240800857543945, 0, 2, 8, 4, 5, 8, -1, 8, 8, 5, 4, 2, -.032600000500679016, -.8544650077819824, .019664999097585678, 0, 2, 11, 5, 9, 12, -1, 11, 9, 9, 4, 3, .09848099946975708, .0547420009970665, .6382730007171631, 0, 2, 4, 5, 9, 12, -1, 4, 9, 9, 4, 3, -.0381850004196167, .5227469801902771, -.23384800553321838, 0, 2, 14, 6, 6, 9, -1, 14, 9, 6, 3, 3, -.045917000621557236, .6282920241355896, .03285900130867958, 0, 2, 2, 4, 20, 12, -1, 2, 8, 20, 4, 3, -.11955499649047852, -.6157270073890686, .03468000143766403, 0, 2, 4, 4, 17, 16, -1, 4, 12, 17, 8, 2, -.12044399976730347, -.8438000082969666, .16530700027942657, 0, 2, 8, 7, 7, 6, -1, 8, 10, 7, 3, 2, .07061900198459625, -.0632610023021698, -1.9863929748535156, 0, 2, 1, 9, 23, 2, -1, 1, 10, 23, 1, 2, .008488999679684639, -.17663399875164032, .3801119923591614, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, .022710999473929405, -.027605999261140823, -.9192140102386475, 0, 2, 13, 3, 4, 9, -1, 13, 3, 2, 9, 2, .0004970000009052455, -.2429320067167282, .22878900170326233, 0, 2, 8, 1, 6, 13, -1, 10, 1, 2, 13, 3, .034651998430490494, -.23705999553203583, .5401099920272827, 0, 2, 4, 22, 18, 2, -1, 4, 23, 18, 1, 2, -.004470000043511391, .3907899856567383, -.12693800032138824, 0, 2, 3, 10, 9, 6, -1, 6, 10, 3, 6, 3, .023643000051379204, -.26663699746131897, .3231259882450104, 0, 2, 14, 0, 2, 24, -1, 14, 0, 1, 24, 2, .01281300000846386, .1754080057144165, -.6078799962997437, 0, 2, 8, 0, 2, 24, -1, 9, 0, 1, 24, 2, -.011250999756157398, -1.085258960723877, -.028046000748872757, 0, 2, 3, 2, 18, 10, -1, 9, 2, 6, 10, 3, -.04153500124812126, .7188739776611328, .02798200026154518, 0, 2, 4, 13, 15, 6, -1, 9, 13, 5, 6, 3, -.093470998108387, -1.1906319856643677, -.04481099918484688, 0, 2, 3, 21, 18, 3, -1, 9, 21, 6, 3, 3, -.027249999344348907, .6294249892234802, .009503999724984169, 0, 2, 9, 1, 4, 11, -1, 11, 1, 2, 11, 2, -.02175999991595745, 1.3233649730682373, -.1502700001001358, 0, 2, 9, 7, 10, 4, -1, 9, 7, 5, 4, 2, -.009689000435173512, -.3394710123538971, .1708579957485199, 0, 2, 7, 0, 10, 18, -1, 12, 0, 5, 18, 2, .0693959966301918, -.2565779983997345, .47652098536491394, 0, 2, 12, 1, 6, 16, -1, 14, 1, 2, 16, 3, .031208999454975128, .14154000580310822, -.3494200110435486, 0, 2, 6, 1, 6, 16, -1, 8, 1, 2, 16, 3, -.049727000296115875, -1.1675560474395752, -.04075799882411957, 0, 2, 18, 2, 6, 6, -1, 18, 5, 6, 3, 2, -.020301999524235725, -.3948639929294586, .15814900398254395, 0, 2, 3, 5, 18, 2, -1, 3, 6, 18, 1, 2, -.015367000363767147, .49300000071525574, -.20092099905014038, 0, 2, 18, 2, 6, 6, -1, 18, 5, 6, 3, 2, -.050735000520944595, 1.8736059665679932, .0867300033569336, 0, 2, 0, 2, 6, 6, -1, 0, 5, 6, 3, 2, -.020726000890135765, -.8893839716911316, -.007319999858736992, 0, 2, 13, 11, 11, 6, -1, 13, 13, 11, 2, 3, -.030993999913334846, -1.1664899587631226, .1427460014820099, 0, 2, 5, 7, 10, 4, -1, 10, 7, 5, 4, 2, -.004426999948918819, -.6681510210037231, .0044120000675320625, 0, 2, 11, 9, 10, 7, -1, 11, 9, 5, 7, 2, -.045743998140096664, -.4795520007610321, .15121999382972717, 0, 2, 3, 9, 10, 7, -1, 8, 9, 5, 7, 2, .01669899933040142, .12048599869012833, -.45235899090766907, 0, 2, 16, 4, 6, 6, -1, 16, 4, 3, 6, 2, .0032210000790655613, -.07761500030755997, .27846598625183105, 0, 3, 5, 6, 10, 8, -1, 5, 6, 5, 4, 2, 10, 10, 5, 4, 2, .024434000253677368, -.1998710036277771, .6725370287895203, 0, 2, 7, 21, 16, 3, -1, 7, 21, 8, 3, 2, -.0796779990196228, .9222239851951599, .09255799651145935, 0, 2, 1, 21, 16, 3, -1, 9, 21, 8, 3, 2, .044530000537633896, -.2669050097465515, .3332050144672394, 0, 3, 2, 5, 22, 14, -1, 13, 5, 11, 7, 2, 2, 12, 11, 7, 2, -.12528300285339355, -.5425310134887695, .1397629976272583, 0, 3, 3, 10, 8, 10, -1, 3, 10, 4, 5, 2, 7, 15, 4, 5, 2, .017971999943256378, .018219999969005585, -.6804850101470947, 0, 3, 17, 0, 6, 12, -1, 20, 0, 3, 6, 2, 17, 6, 3, 6, 2, .01918400079011917, -.012583999894559383, .5412669777870178, 0, 2, 5, 2, 6, 18, -1, 7, 2, 2, 18, 3, .04002400115132332, -.1763879954814911, .7881039977073669, 0, 2, 13, 0, 6, 9, -1, 15, 0, 2, 9, 3, .013558999635279179, .20737600326538086, -.47744300961494446, 0, 2, 0, 12, 7, 9, -1, 0, 15, 7, 3, 3, .016220999881625175, .023076999932527542, -.6118209958076477, 0, 3, 15, 13, 8, 10, -1, 19, 13, 4, 5, 2, 15, 18, 4, 5, 2, .011229000054299831, -.01772800087928772, .4176419973373413, 0, 3, 1, 0, 6, 12, -1, 1, 0, 3, 6, 2, 4, 6, 3, 6, 2, .03919300064444542, -.18948499858379364, .7401930093765259, 0, 2, 12, 1, 3, 12, -1, 12, 7, 3, 6, 2, -.00955399964004755, .4094710052013397, -.1350889950990677, 0, 3, 1, 13, 8, 10, -1, 1, 13, 4, 5, 2, 5, 18, 4, 5, 2, .027878999710083008, -.20350700616836548, .6162539720535278, 0, 2, 3, 21, 19, 2, -1, 3, 22, 19, 1, 2, -.023600999265909195, -1.6967060565948486, .1463319957256317, 0, 2, 6, 3, 4, 13, -1, 8, 3, 2, 13, 2, .026930000633001328, -.03040199913084507, -1.0909470319747925, 0, 2, 5, 10, 18, 3, -1, 5, 11, 18, 1, 3, .0002899999963119626, -.20076000690460205, .22314099967479706, 0, 2, 9, 3, 5, 12, -1, 9, 7, 5, 4, 3, -.04112499952316284, -.45242199301719666, .057392001152038574, 0, 2, 11, 2, 4, 15, -1, 11, 7, 4, 5, 3, .006678999867290258, .2382490038871765, -.21262100338935852, 0, 2, 4, 1, 16, 4, -1, 4, 3, 16, 2, 2, .04786499962210655, -.1819480061531067, .6191840171813965, 0, 2, 6, 0, 18, 3, -1, 6, 1, 18, 1, 3, -.0031679999083280563, -.27393200993537903, .25017300248146057, 0, 3, 5, 1, 10, 8, -1, 5, 1, 5, 4, 2, 10, 5, 5, 4, 2, -.008623000234365463, -.4628030061721802, .04239799827337265, 0, 3, 11, 18, 12, 6, -1, 17, 18, 6, 3, 2, 11, 21, 6, 3, 2, -.0074350000359117985, .4179680049419403, -.0017079999670386314, 0, 2, 5, 15, 12, 3, -1, 11, 15, 6, 3, 2, -.0018769999733194709, .1460230052471161, -.337211012840271, 0, 2, 1, 10, 22, 4, -1, 1, 10, 11, 4, 2, -.08622600138187408, .7514340281486511, .010711999610066414, 0, 2, 7, 9, 9, 6, -1, 10, 9, 3, 6, 3, .04683399945497513, -.1911959946155548, .4841490089893341, 0, 2, 6, 11, 12, 5, -1, 10, 11, 4, 5, 3, -9200000204145908e-20, .35220399498939514, -.17333300411701202, 0, 2, 6, 7, 10, 7, -1, 11, 7, 5, 7, 2, -.01634399965405464, -.6439769864082336, .009068000130355358, 0, 2, 11, 2, 8, 10, -1, 11, 2, 4, 10, 2, .04570399969816208, .018216000869870186, .319707989692688, 0, 2, 5, 2, 8, 10, -1, 9, 2, 4, 10, 2, -.027382999658584595, 1.056404948234558, -.17276400327682495, 0, 3, 6, 4, 18, 6, -1, 15, 4, 9, 3, 2, 6, 7, 9, 3, 2, -.027602000162005424, .2971549928188324, -.009460000321269035, 0, 2, 0, 5, 10, 9, -1, 0, 8, 10, 3, 3, .0076939999125897884, -.21660299599170685, .4738520085811615, 0, 2, 2, 7, 21, 6, -1, 2, 9, 21, 2, 3, -.0007050000131130219, .2404879927635193, -.2677600085735321, 0, 3, 0, 4, 22, 16, -1, 0, 4, 11, 8, 2, 11, 12, 11, 8, 2, .11054199934005737, -.033539000898599625, -1.0233880281448364, 0, 2, 9, 0, 6, 22, -1, 9, 11, 6, 11, 2, .06876599788665771, -.004323999863117933, .5715339779853821, 0, 2, 9, 1, 3, 12, -1, 9, 7, 3, 6, 2, .0017999999690800905, .07757499814033508, -.4209269881248474, 0, 3, 12, 0, 12, 18, -1, 18, 0, 6, 9, 2, 12, 9, 6, 9, 2, .19232000410556793, .08202199637889862, 2.881016969680786, 0, 3, 0, 0, 12, 18, -1, 0, 0, 6, 9, 2, 6, 9, 6, 9, 2, .15742099285125732, -.13708199560642242, 2.089005947113037, 0, 3, 1, 1, 22, 4, -1, 12, 1, 11, 2, 2, 1, 3, 11, 2, 2, -.04938700050115585, -1.8610910177230835, .1433209925889969, 0, 2, 3, 0, 18, 4, -1, 3, 2, 18, 2, 2, .05192900076508522, -.18737000226974487, .5423160195350647, 0, 2, 2, 5, 22, 6, -1, 2, 7, 22, 2, 3, .04996500164270401, .14175300300121307, -1.5625779628753662, 0, 2, 5, 0, 6, 9, -1, 5, 3, 6, 3, 3, -.04263300076127052, 1.6059479713439941, -.14712899923324585, 0, 2, 10, 14, 6, 9, -1, 12, 14, 2, 9, 3, -.037553999572992325, -.8097490072250366, .13256999850273132, 0, 2, 8, 14, 6, 9, -1, 10, 14, 2, 9, 3, -.037174999713897705, -1.39450204372406, -.057055000215768814, 0, 2, 5, 18, 18, 3, -1, 5, 19, 18, 1, 3, .013945999555289745, .03342700004577637, .5747479796409607, 0, 2, 6, 0, 6, 13, -1, 9, 0, 3, 13, 2, -.00044800000614486635, -.5532749891281128, .021952999755740166, 0, 2, 7, 4, 12, 4, -1, 7, 4, 6, 4, 2, .03199300169944763, .020340999588370323, .37459200620651245, 0, 2, 5, 2, 12, 6, -1, 9, 2, 4, 6, 3, -.004279999993741512, .4442870020866394, -.22999699413776398, 0, 2, 4, 1, 18, 3, -1, 4, 2, 18, 1, 3, .009855000302195549, .1831579953432083, -.4096499979496002, 0, 2, 0, 8, 6, 12, -1, 0, 12, 6, 4, 3, .09335699677467346, -.06366100162267685, -1.6929290294647217, 0, 2, 9, 15, 6, 9, -1, 11, 15, 2, 9, 3, .01720999926328659, .20153899490833282, -.4606109857559204, 0, 2, 9, 10, 6, 13, -1, 11, 10, 2, 13, 3, .008431999944150448, -.3200399875640869, .15312199294567108, 0, 2, 6, 17, 18, 2, -1, 6, 18, 18, 1, 2, -.014054999686777592, .8688240051269531, .03257500007748604, 0, 2, 9, 4, 6, 9, -1, 11, 4, 2, 9, 3, -.007718000095337629, .6368669867515564, -.18425500392913818, 0, 2, 10, 0, 6, 9, -1, 12, 0, 2, 9, 3, .028005000203847885, .1735749989748001, -.4788359999656677, 0, 3, 5, 6, 10, 8, -1, 5, 6, 5, 4, 2, 10, 10, 5, 4, 2, -.018884999677538872, .24101600050926208, -.2654759883880615, 0, 2, 14, 9, 5, 8, -1, 14, 13, 5, 4, 2, -.018585000187158585, .5423250198364258, .05363300070166588, 0, 2, 5, 9, 5, 8, -1, 5, 13, 5, 4, 2, -.03643700107932091, 2.390889883041382, -.1363469958305359, 0, 2, 14, 11, 9, 6, -1, 14, 13, 9, 2, 3, .03245500102639198, .1591069996356964, -.6758149862289429, 0, 2, 0, 2, 23, 15, -1, 0, 7, 23, 5, 3, .0597819983959198, -.0023479999508708715, -.7305369973182678, 0, 2, 16, 0, 8, 12, -1, 16, 6, 8, 6, 2, .009820999577641487, -.11444099992513657, .3057030141353607, 0, 2, 4, 15, 6, 9, -1, 4, 18, 6, 3, 3, -.0351639986038208, -1.0511469841003418, -.03310300037264824, 0, 2, 8, 18, 9, 4, -1, 8, 20, 9, 2, 2, .002742999931797385, -.2013539969921112, .3275409936904907, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, .008105999790132046, -.2138350009918213, .43362098932266235, 0, 2, 13, 11, 11, 6, -1, 13, 13, 11, 2, 3, .0889429971575737, .10940899699926376, -4.760933876037598, 0, 2, 0, 11, 11, 6, -1, 0, 13, 11, 2, 3, -.030054999515414238, -1.7169300317764282, -.06091900169849396, 0, 3, 0, 9, 24, 6, -1, 12, 9, 12, 3, 2, 0, 12, 12, 3, 2, -.021734999492764473, .6477890014648438, -.03283099830150604, 0, 2, 6, 16, 8, 8, -1, 6, 20, 8, 4, 2, .0376489982008934, -.010060000233352184, -.7656909823417664, 0, 2, 10, 16, 14, 6, -1, 10, 18, 14, 2, 3, .002718999981880188, .19888900220394135, -.08247900009155273, 0, 2, 1, 1, 21, 3, -1, 1, 2, 21, 1, 3, -.01054800022393465, -.8661360144615173, -.025986000895500183, 0, 2, 0, 2, 24, 3, -1, 0, 2, 12, 3, 2, .12966300547122955, .13911999762058258, -2.2271950244903564, 0, 2, 2, 15, 8, 5, -1, 6, 15, 4, 5, 2, -.017676999792456627, .33967700600624084, -.2398959994316101, 0, 2, 2, 11, 21, 3, -1, 9, 11, 7, 3, 3, -.07705199718475342, -2.5017969608306885, .12841999530792236, 0, 3, 1, 18, 12, 6, -1, 1, 18, 6, 3, 2, 7, 21, 6, 3, 2, -.01923000067472458, .5064120292663574, -.19751599431037903, 0, 2, 10, 14, 4, 10, -1, 10, 19, 4, 5, 2, -.05122299864888191, -2.9333369731903076, .13858500123023987, 0, 2, 7, 7, 4, 10, -1, 7, 12, 4, 5, 2, .0020830000285059214, -.6004359722137451, .029718000441789627, 0, 2, 9, 8, 6, 12, -1, 9, 12, 6, 4, 3, .025418000295758247, .33915799856185913, -.14392000436782837, 0, 2, 7, 1, 9, 6, -1, 10, 1, 3, 6, 3, -.023905999958515167, -1.1082680225372314, -.047377001494169235, 0, 2, 3, 14, 19, 2, -1, 3, 15, 19, 1, 2, -.006374000106006861, .4453369975090027, -.06705299764871597, 0, 3, 7, 7, 10, 10, -1, 7, 7, 5, 5, 2, 12, 12, 5, 5, 2, -.03769899904727936, -1.0406579971313477, -.04179000109434128, 0, 2, 3, 12, 18, 12, -1, 3, 12, 9, 12, 2, .2165510058403015, .03386300057172775, .8201730251312256, 0, 2, 8, 0, 6, 12, -1, 10, 0, 2, 12, 3, -.013400999829173088, .5290349721908569, -.19133000075817108, -3.2103500366210938, 196, 0, 2, 3, 0, 17, 9, -1, 3, 3, 17, 3, 3, .07126899808645248, -.5363119840621948, .6071529984474182, 0, 2, 6, 0, 12, 11, -1, 10, 0, 4, 11, 3, .05611100047826767, -.501416027545929, .4397610127925873, 0, 2, 1, 0, 6, 13, -1, 4, 0, 3, 13, 2, .040463998913764954, -.3292219936847687, .548346996307373, 0, 2, 5, 8, 16, 6, -1, 5, 11, 16, 3, 2, .06315500289201736, -.31701698899269104, .46152999997138977, 0, 2, 8, 8, 5, 12, -1, 8, 14, 5, 6, 2, .010320999659597874, .10694999992847443, -.9824389815330505, 0, 2, 3, 21, 18, 3, -1, 9, 21, 6, 3, 3, .06260699778795242, -.1432970017194748, .7109500169754028, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.03941600024700165, .943801999092102, -.215720996260643, 0, 2, 2, 0, 20, 3, -1, 2, 1, 20, 1, 3, -.005396000109612942, -.5461199879646301, .2530379891395569, 0, 2, 4, 6, 15, 10, -1, 9, 6, 5, 10, 3, .10773199796676636, .012496000155806541, -1.0809199810028076, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .016982000321149826, -.3153640031814575, .5123999714851379, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, .031216999515891075, -.004519999958574772, -1.2443480491638184, 0, 2, 14, 0, 6, 9, -1, 16, 0, 2, 9, 3, -.023106999695301056, -.7649289965629578, .20640599727630615, 0, 2, 7, 16, 9, 6, -1, 7, 18, 9, 2, 3, -.011203999631106853, .24092699587345123, -.3514209985733032, 0, 2, 14, 0, 6, 9, -1, 16, 0, 2, 9, 3, -.004747999832034111, -.09700799733400345, .20638099312782288, 0, 2, 4, 0, 6, 9, -1, 6, 0, 2, 9, 3, -.017358999699354172, -.7902029752731323, .021852999925613403, 0, 2, 17, 1, 6, 16, -1, 19, 1, 2, 16, 3, .018851999193429947, -.10394600033760071, .548442006111145, 0, 2, 1, 1, 6, 16, -1, 3, 1, 2, 16, 3, .007224999833852053, -.40409401059150696, .2676379978656769, 0, 2, 14, 13, 6, 9, -1, 14, 16, 6, 3, 3, .018915999680757523, .20508000254631042, -1.0206340551376343, 0, 2, 0, 0, 6, 9, -1, 0, 3, 6, 3, 3, .031156999990344048, .0012400000123307109, -.8729349970817566, 0, 2, 9, 5, 6, 6, -1, 9, 5, 3, 6, 2, .020951999351382256, -.005555999930948019, .8035619854927063, 0, 2, 3, 10, 9, 6, -1, 6, 10, 3, 6, 3, .011291000060737133, -.36478400230407715, .22767899930477142, 0, 2, 14, 7, 3, 16, -1, 14, 15, 3, 8, 2, -.05701100081205368, -1.429561972618103, .14322000741958618, 0, 3, 4, 10, 14, 12, -1, 4, 10, 7, 6, 2, 11, 16, 7, 6, 2, .07219400256872177, -.041850000619888306, -1.9111829996109009, 0, 2, 7, 6, 12, 6, -1, 7, 8, 12, 2, 3, -.019874000921845436, .26425498723983765, -.3261770009994507, 0, 2, 7, 2, 4, 20, -1, 9, 2, 2, 20, 2, -.016692999750375748, -.8390780091285706, .0004079999926034361, 0, 2, 14, 13, 6, 9, -1, 14, 16, 6, 3, 3, -.03983499854803085, -.4885849952697754, .16436100006103516, 0, 2, 10, 6, 4, 9, -1, 12, 6, 2, 9, 2, .027009999379515648, -.18862499296665192, .834194004535675, 0, 2, 14, 13, 6, 9, -1, 14, 16, 6, 3, 3, -.003942000214010477, .23231500387191772, -.07236000150442123, 0, 2, 5, 20, 14, 4, -1, 5, 22, 14, 2, 2, .022833000868558884, -.03588400036096573, -1.1549400091171265, 0, 2, 4, 4, 16, 12, -1, 4, 10, 16, 6, 2, -.06888800114393234, -1.7837309837341309, .1515900045633316, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .04309700056910515, -.21608099341392517, .5062410235404968, 0, 2, 3, 0, 21, 4, -1, 3, 2, 21, 2, 2, .008623999543488026, -.1779559999704361, .28957900404930115, 0, 2, 4, 13, 6, 9, -1, 4, 16, 6, 3, 3, .014561000280082226, -.011408000253140926, -.8940200209617615, 0, 2, 16, 16, 5, 8, -1, 16, 20, 5, 4, 2, -.011501000262796879, .30171999335289, -.04365900158882141, 0, 3, 4, 0, 16, 16, -1, 4, 0, 8, 8, 2, 12, 8, 8, 8, 2, -.10971499979496002, -.9514709711074829, -.01997300051152706, 0, 3, 6, 6, 14, 6, -1, 13, 6, 7, 3, 2, 6, 9, 7, 3, 2, .04522800073027611, .03311099857091904, .9661980271339417, 0, 2, 10, 5, 4, 15, -1, 10, 10, 4, 5, 3, -.02704799920320511, .979636013507843, -.17261900007724762, 0, 3, 9, 15, 12, 8, -1, 15, 15, 6, 4, 2, 9, 19, 6, 4, 2, .01803099922835827, -.02080100029706955, .2738589942455292, 0, 2, 6, 7, 12, 4, -1, 12, 7, 6, 4, 2, .0505249984562397, -.05680299922823906, -1.7775089740753174, 0, 3, 5, 6, 14, 6, -1, 12, 6, 7, 3, 2, 5, 9, 7, 3, 2, -.029923999682068825, .6532920002937317, -.02353700064122677, 0, 3, 3, 6, 18, 10, -1, 3, 6, 9, 5, 2, 12, 11, 9, 5, 2, .038058001548051834, .02631700038909912, -.7066569924354553, 0, 2, 6, 0, 18, 21, -1, 12, 0, 6, 21, 3, .18563899397850037, -.0056039998307824135, .3287369906902313, 0, 2, 0, 0, 24, 21, -1, 8, 0, 8, 21, 3, -.00406700000166893, .3420479893684387, -.30171599984169006, 0, 2, 6, 18, 18, 3, -1, 6, 19, 18, 1, 3, .010108999907970428, -.007360000163316727, .5798159837722778, 0, 2, 0, 15, 9, 6, -1, 0, 17, 9, 2, 3, -.011567000299692154, -.5272219777107239, .0464479997754097, 0, 2, 4, 3, 19, 2, -1, 4, 4, 19, 1, 2, -.006564999930560589, -.5852910280227661, .1910189986228943, 0, 2, 0, 3, 24, 2, -1, 0, 4, 24, 1, 2, .010582000017166138, .021073000505566597, -.6889259815216064, 0, 2, 15, 14, 9, 4, -1, 15, 16, 9, 2, 2, -.020304000005126, -.36400699615478516, .15338799357414246, 0, 2, 0, 14, 9, 4, -1, 0, 16, 9, 2, 2, .0023529999889433384, .03616400063037872, -.5982509851455688, 0, 2, 6, 15, 18, 2, -1, 6, 16, 18, 1, 2, -.0014690000098198652, -.14707699418067932, .3750799894332886, 0, 2, 3, 17, 18, 3, -1, 3, 18, 18, 1, 3, .00864499993622303, -.21708500385284424, .5193679928779602, 0, 2, 12, 0, 3, 23, -1, 13, 0, 1, 23, 3, -.02432600036263466, -1.08467698097229, .14084799587726593, 0, 2, 6, 0, 8, 6, -1, 6, 3, 8, 3, 2, .07441899925470352, -.15513800084590912, 1.182276964187622, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, .01707799918949604, .044231001287698746, .9156110286712646, 0, 2, 9, 0, 3, 23, -1, 10, 0, 1, 23, 3, -.024577999487519264, -1.5504100322723389, -.05474599823355675, 0, 2, 10, 7, 4, 10, -1, 10, 12, 4, 5, 2, .030205000191926956, .16662800312042236, -1.0001239776611328, 0, 2, 7, 8, 10, 12, -1, 7, 12, 10, 4, 3, .012136000208556652, -.7707909941673279, -.004863999783992767, 0, 3, 14, 9, 6, 14, -1, 17, 9, 3, 7, 2, 14, 16, 3, 7, 2, .08671700209379196, .11061699688434601, -1.6857999563217163, 0, 2, 2, 0, 10, 9, -1, 2, 3, 10, 3, 3, -.042309001088142395, 1.107593059539795, -.1543859988451004, 0, 2, 11, 1, 5, 12, -1, 11, 7, 5, 6, 2, -.0026420000940561295, .2745189964771271, -.18456199765205383, 0, 3, 1, 4, 12, 10, -1, 1, 4, 6, 5, 2, 7, 9, 6, 5, 2, -.056662000715732574, -.8062559962272644, -.01692800037562847, 0, 2, 15, 1, 9, 4, -1, 15, 3, 9, 2, 2, .023475000634789467, .14187699556350708, -.2550089955329895, 0, 3, 1, 2, 8, 10, -1, 1, 2, 4, 5, 2, 5, 7, 4, 5, 2, -.020803000777959824, .1982630044221878, -.31171199679374695, 0, 2, 10, 1, 5, 12, -1, 10, 5, 5, 4, 3, .007259999867528677, -.05059099942445755, .41923800110816956, 0, 2, 4, 0, 14, 24, -1, 11, 0, 7, 24, 2, .3416000008583069, -.1667490005493164, .927486002445221, 0, 2, 7, 17, 10, 4, -1, 7, 19, 10, 2, 2, .006202999968081713, -.1262589991092682, .40445300936698914, 0, 2, 10, 14, 4, 10, -1, 10, 19, 4, 5, 2, .03269200026988983, -.032634999603033066, -.9893980026245117, 0, 2, 13, 15, 6, 9, -1, 15, 15, 2, 9, 3, .00021100000594742596, -.06453400105237961, .254736989736557, 0, 2, 3, 21, 18, 3, -1, 3, 22, 18, 1, 3, .0007210000185295939, -.3661859929561615, .11973100155591965, 0, 2, 13, 15, 6, 9, -1, 15, 15, 2, 9, 3, .05449099838733673, .12073499709367752, -1.0291390419006348, 0, 2, 5, 15, 6, 9, -1, 7, 15, 2, 9, 3, -.010141000151634216, -.521772027015686, .0337349995970726, 0, 3, 10, 6, 4, 18, -1, 12, 6, 2, 9, 2, 10, 15, 2, 9, 2, -.01881599985063076, .6518179774284363, .001339999958872795, 0, 2, 7, 3, 6, 11, -1, 9, 3, 2, 11, 3, -.005348000209778547, .1737069934606552, -.3413200080394745, 0, 2, 15, 1, 9, 4, -1, 15, 3, 9, 2, 2, -.010847000405192375, -.19699899852275848, .15045499801635742, 0, 2, 5, 4, 14, 8, -1, 5, 8, 14, 4, 2, -.04992600157856941, -.5088850259780884, .030762000009417534, 0, 2, 8, 1, 15, 9, -1, 8, 4, 15, 3, 3, .012160000391304493, -.06925199925899506, .18745499849319458, 0, 3, 7, 2, 8, 10, -1, 7, 2, 4, 5, 2, 11, 7, 4, 5, 2, -.0022189998999238014, -.40849098563194275, .07995499670505524, 0, 2, 12, 2, 6, 12, -1, 12, 2, 3, 12, 2, .0031580000650137663, -.21124599874019623, .22366400063037872, 0, 2, 6, 2, 6, 12, -1, 9, 2, 3, 12, 2, .004143999889492989, -.49900299310684204, .06291700154542923, 0, 2, 7, 7, 12, 4, -1, 7, 7, 6, 4, 2, -.007373000029474497, -.2055329978466034, .22096699476242065, 0, 2, 6, 3, 12, 10, -1, 10, 3, 4, 10, 3, .05181200057268143, .1809680014848709, -.43495801091194153, 0, 3, 5, 6, 16, 6, -1, 13, 6, 8, 3, 2, 5, 9, 8, 3, 2, .01834000088274479, .015200000256299973, .3799169957637787, 0, 2, 3, 1, 18, 9, -1, 9, 1, 6, 9, 3, .17490799725055695, -.20920799672603607, .4001300036907196, 0, 2, 3, 8, 18, 5, -1, 9, 8, 6, 5, 3, .05399399995803833, .24751600623130798, -.26712900400161743, 0, 3, 0, 0, 24, 22, -1, 0, 0, 12, 11, 2, 12, 11, 12, 11, 2, -.32033199071884155, -1.9094380140304565, -.06696099787950516, 0, 2, 14, 16, 9, 6, -1, 14, 18, 9, 2, 3, -.027060000225901604, -.7137129902839661, .1590459942817688, 0, 2, 0, 16, 24, 8, -1, 0, 20, 24, 4, 2, .07746399939060211, -.16970199346542358, .7755299806594849, 0, 3, 1, 19, 22, 4, -1, 12, 19, 11, 2, 2, 1, 21, 11, 2, 2, .023771999403834343, .1902189999818802, -.6016209721565247, 0, 2, 1, 16, 9, 6, -1, 1, 18, 9, 2, 3, .011501000262796879, .007703999988734722, -.6173030138015747, 0, 2, 7, 8, 10, 4, -1, 7, 8, 5, 4, 2, .03261600062251091, .17159199714660645, -.7097820043563843, 0, 2, 9, 15, 6, 9, -1, 11, 15, 2, 9, 3, -.04438300058245659, -2.260622978210449, -.07327699661254883, 0, 3, 10, 18, 12, 6, -1, 16, 18, 6, 3, 2, 10, 21, 6, 3, 2, -.058476001024246216, 2.4087750911712646, .08309199661016464, 0, 3, 2, 18, 12, 6, -1, 2, 18, 6, 3, 2, 8, 21, 6, 3, 2, .019303999841213226, -.27082300186157227, .2736999988555908, 0, 2, 8, 3, 16, 9, -1, 8, 6, 16, 3, 3, -.04470599815249443, .3135559856891632, -.0624920018017292, 0, 2, 0, 5, 10, 6, -1, 0, 7, 10, 2, 3, -.06033499911427498, -1.4515119791030884, -.058761000633239746, 0, 2, 5, 5, 18, 3, -1, 5, 6, 18, 1, 3, .011667000129818916, -.018084999173879623, .5047969818115234, 0, 2, 2, 6, 9, 6, -1, 2, 9, 9, 3, 2, .02800999954342842, -.23302899301052094, .3070870041847229, 0, 2, 14, 2, 10, 9, -1, 14, 5, 10, 3, 3, .0653970018029213, .14135900139808655, -.5001090168952942, 0, 2, 3, 6, 18, 3, -1, 3, 7, 18, 1, 3, .009623999707400799, -.22054600715637207, .3919120132923126, 0, 2, 9, 2, 15, 6, -1, 9, 4, 15, 2, 3, .0025510000996291637, -.11381500214338303, .20032300055027008, 0, 2, 4, 8, 15, 6, -1, 4, 10, 15, 2, 3, .03184700012207031, .025476999580860138, -.5332639813423157, 0, 3, 0, 5, 24, 4, -1, 12, 5, 12, 2, 2, 0, 7, 12, 2, 2, .03305500000715256, .17807699739933014, -.627938985824585, 0, 2, 7, 8, 6, 12, -1, 9, 8, 2, 12, 3, .04760099947452545, -.14747899770736694, 1.4204180240631104, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, -.019571999087929726, -.5269349813461304, .1583860069513321, 0, 3, 0, 12, 6, 12, -1, 0, 12, 3, 6, 2, 3, 18, 3, 6, 2, -.05473000183701515, .882315993309021, -.16627800464630127, 0, 2, 14, 12, 10, 6, -1, 14, 14, 10, 2, 3, -.022686000913381577, -.4838689863681793, .15000100433826447, 0, 2, 2, 7, 18, 9, -1, 2, 10, 18, 3, 3, .10713200271129608, -.21336199343204498, .42333900928497314, 0, 2, 11, 14, 10, 9, -1, 11, 17, 10, 3, 3, -.03638000041246414, -.07419800013303757, .14589400589466095, 0, 3, 7, 6, 10, 8, -1, 7, 6, 5, 4, 2, 12, 10, 5, 4, 2, .013935999944806099, -.24911600351333618, .2677119970321655, 0, 3, 6, 6, 14, 6, -1, 13, 6, 7, 3, 2, 6, 9, 7, 3, 2, .02099199965596199, .00879599992185831, .430649995803833, 0, 2, 4, 13, 9, 7, -1, 7, 13, 3, 7, 3, .049118999391794205, -.17591999471187592, .6928290128707886, 0, 3, 14, 10, 6, 12, -1, 17, 10, 3, 6, 2, 14, 16, 3, 6, 2, .036315999925136566, .1314529925584793, -.33597299456596375, 0, 3, 4, 10, 6, 12, -1, 4, 10, 3, 6, 2, 7, 16, 3, 6, 2, .041228000074625015, -.04569200053811073, -1.351593017578125, 0, 2, 13, 9, 8, 6, -1, 13, 9, 4, 6, 2, .015672000125050545, .17544099688529968, -.06055000051856041, 0, 2, 8, 3, 4, 14, -1, 10, 3, 2, 14, 2, -.016286000609397888, -1.1308189630508423, -.03953300043940544, 0, 2, 17, 0, 3, 18, -1, 18, 0, 1, 18, 3, -.003022999968379736, -.2245430052280426, .23628099262714386, 0, 2, 4, 12, 16, 12, -1, 12, 12, 8, 12, 2, -.13786299526691437, .4537689983844757, -.21098700165748596, 0, 2, 15, 0, 6, 14, -1, 17, 0, 2, 14, 3, -.009676000103354454, -.15105099976062775, .20781700313091278, 0, 2, 3, 0, 6, 14, -1, 5, 0, 2, 14, 3, -.02483999915421009, -.6835029721260071, -.008004000410437584, 0, 2, 12, 2, 12, 20, -1, 16, 2, 4, 20, 3, -.13964399695396423, .6501129865646362, .04654400050640106, 0, 2, 0, 2, 12, 20, -1, 4, 2, 4, 20, 3, -.08215399831533432, .44887199997901917, -.2359199970960617, 0, 2, 16, 0, 6, 17, -1, 18, 0, 2, 17, 3, .0038449999410659075, -.08817300200462341, .2734679877758026, 0, 2, 2, 0, 6, 17, -1, 4, 0, 2, 17, 3, -.006657999940216541, -.4686659872531891, .07700199633836746, 0, 2, 15, 6, 9, 6, -1, 15, 8, 9, 2, 3, -.015898000448942184, .29268398880958557, -.02194100059568882, 0, 2, 0, 6, 9, 6, -1, 0, 8, 9, 2, 3, -.05094600096344948, -1.209378957748413, -.04210999980568886, 0, 2, 18, 1, 6, 13, -1, 20, 1, 2, 13, 3, .01683799922466278, -.04559599980711937, .5018069744110107, 0, 2, 0, 1, 6, 13, -1, 2, 1, 2, 13, 3, .015918999910354614, -.2690429985523224, .26516300439834595, 0, 2, 16, 0, 4, 9, -1, 16, 0, 2, 9, 2, .003630999941378832, -.13046100735664368, .31807100772857666, 0, 2, 5, 10, 12, 7, -1, 9, 10, 4, 7, 3, -.08614499866962433, 1.9443659782409668, -.13978299498558044, 0, 2, 12, 9, 12, 6, -1, 12, 11, 12, 2, 3, .03314099833369255, .15266799926757812, -.030866000801324844, 0, 2, 0, 9, 12, 6, -1, 0, 11, 12, 2, 3, -.003967999946326017, -.7120230197906494, -.013844000175595284, 0, 2, 5, 7, 14, 9, -1, 5, 10, 14, 3, 3, -.024008000269532204, .9200779795646667, .046723999083042145, 0, 2, 0, 15, 20, 3, -1, 0, 16, 20, 1, 3, .00873200036585331, -.22567300498485565, .3193179965019226, 0, 3, 8, 10, 8, 10, -1, 12, 10, 4, 5, 2, 8, 15, 4, 5, 2, -.027786999940872192, -.7233710289001465, .17018599808216095, 0, 2, 5, 4, 13, 9, -1, 5, 7, 13, 3, 3, -.19455300271511078, 1.2461860179901123, -.14736199378967285, 0, 2, 10, 2, 6, 18, -1, 10, 8, 6, 6, 3, -.10869699716567993, -1.4465179443359375, .12145300209522247, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, -.019494999200105667, -.7815309762954712, -.023732999339699745, 0, 2, 6, 9, 12, 4, -1, 6, 11, 12, 2, 2, .003065000055357814, -.8547139763832092, .16686999797821045, 0, 2, 3, 2, 15, 12, -1, 3, 6, 15, 4, 3, .05919399857521057, -.14853699505329132, 1.1273469924926758, 0, 2, 12, 0, 12, 5, -1, 16, 0, 4, 5, 3, -.054207999259233475, .5472699999809265, .035523999482393265, 0, 2, 0, 15, 18, 3, -1, 6, 15, 6, 3, 3, -.03932499885559082, .3664259910583496, -.2054399996995926, 0, 2, 0, 14, 24, 5, -1, 8, 14, 8, 5, 3, .08227899670600891, -.03500799834728241, .5399420261383057, 0, 2, 5, 1, 3, 18, -1, 6, 1, 1, 18, 3, -.007447999902069569, -.6153749823570251, -.003531999886035919, 0, 2, 10, 0, 4, 14, -1, 10, 0, 2, 14, 2, .00737700005993247, -.065591000020504, .4196139872074127, 0, 2, 9, 3, 4, 9, -1, 11, 3, 2, 9, 2, .0070779998786747456, -.3412950038909912, .12536799907684326, 0, 3, 8, 2, 12, 6, -1, 14, 2, 6, 3, 2, 8, 5, 6, 3, 2, -.015581999905407429, -.30240398645401, .21511000394821167, 0, 2, 0, 4, 17, 4, -1, 0, 6, 17, 2, 2, -.002739999908953905, .07655300199985504, -.4106050133705139, 0, 2, 16, 16, 5, 8, -1, 16, 20, 5, 4, 2, -.0706000030040741, -.9735620021820068, .11241800338029861, 0, 2, 3, 16, 5, 8, -1, 3, 20, 5, 4, 2, -.011706000193953514, .18560700118541718, -.2975519895553589, 0, 2, 6, 18, 18, 2, -1, 6, 19, 18, 1, 2, .0007149999728426337, -.0596500001847744, .24824699759483337, 0, 2, 0, 0, 12, 5, -1, 4, 0, 4, 5, 3, -.03686600178480148, .32751700282096863, -.23059600591659546, 0, 3, 14, 3, 6, 12, -1, 17, 3, 3, 6, 2, 14, 9, 3, 6, 2, -.032526999711990356, -.2932029962539673, .1542769968509674, 0, 2, 0, 12, 6, 12, -1, 2, 12, 2, 12, 3, -.07481399923563004, -1.2143570184707642, -.052244000136852264, 0, 2, 2, 3, 21, 3, -1, 2, 4, 21, 1, 3, .0414699986577034, .13062499463558197, -2.327436923980713, 0, 3, 4, 3, 6, 12, -1, 4, 3, 3, 6, 2, 7, 9, 3, 6, 2, -.028880000114440918, -.6607459783554077, -.009096000343561172, 0, 3, 12, 8, 12, 6, -1, 18, 8, 6, 3, 2, 12, 11, 6, 3, 2, .04638199880719185, .16630199551582336, -.6694949865341187, 0, 2, 0, 15, 16, 9, -1, 8, 15, 8, 9, 2, .2542499899864197, -.054641999304294586, -1.2676080465316772, 0, 2, 6, 13, 18, 5, -1, 6, 13, 9, 5, 2, .002400000113993883, .2027679979801178, .014667999930679798, 0, 2, 1, 6, 15, 6, -1, 6, 6, 5, 6, 3, -.08280599862337112, -.7871360182762146, -.024468999356031418, 0, 2, 11, 9, 9, 6, -1, 14, 9, 3, 6, 3, -.01143800001591444, .2862339913845062, -.030894000083208084, 0, 2, 3, 0, 15, 11, -1, 8, 0, 5, 11, 3, -.12913399934768677, 1.7292929887771606, -.1429390013217926, 0, 2, 15, 3, 3, 18, -1, 15, 9, 3, 6, 3, .03855299949645996, .01923299953341484, .37732601165771484, 0, 2, 6, 3, 3, 18, -1, 6, 9, 3, 6, 3, .10191400349140167, -.07453399896621704, -3.386889934539795, 0, 3, 9, 5, 10, 8, -1, 14, 5, 5, 4, 2, 9, 9, 5, 4, 2, -.019068000838160515, .31814101338386536, .01926100067794323, 0, 3, 4, 4, 16, 8, -1, 4, 4, 8, 4, 2, 12, 8, 8, 4, 2, -.06077500060200691, .7693629860877991, -.17644000053405762, 0, 2, 7, 7, 12, 3, -1, 7, 7, 6, 3, 2, .0246799997985363, .18396499752998352, -.3086880147457123, 0, 2, 5, 0, 9, 13, -1, 8, 0, 3, 13, 3, .02675900049507618, -.23454900085926056, .3305659890174866, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, .01496999990195036, .17213599383831024, -.18248899281024933, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, .026142999529838562, -.04646399989724159, -1.1318379640579224, 0, 2, 8, 1, 10, 9, -1, 8, 4, 10, 3, 3, -.037512000650167465, .8040400147438049, .0696600005030632, 0, 2, 0, 2, 18, 2, -1, 0, 3, 18, 1, 2, -.005322999786585569, -.8188440203666687, -.01822499930858612, 0, 3, 10, 13, 14, 6, -1, 17, 13, 7, 3, 2, 10, 16, 7, 3, 2, .017813000828027725, .1495780050754547, -.18667200207710266, 0, 3, 0, 13, 14, 6, -1, 0, 13, 7, 3, 2, 7, 16, 7, 3, 2, -.03401000052690506, -.7285230159759521, -.01661599986255169, 0, 2, 20, 2, 3, 21, -1, 21, 2, 1, 21, 3, -.015953000634908676, .5694400072097778, .013832000084221363, 0, 2, 0, 9, 5, 12, -1, 0, 13, 5, 4, 3, .01974399946630001, .04052500054240227, -.4177339971065521, 0, 2, 12, 6, 12, 6, -1, 12, 8, 12, 2, 3, -.10374800115823746, -1.9825149774551392, .11960200220346451, 0, 2, 1, 8, 20, 3, -1, 1, 9, 20, 1, 3, -.01928500086069107, .5023059844970703, -.19745899736881256, 0, 2, 5, 7, 19, 3, -1, 5, 8, 19, 1, 3, -.01278000045567751, .40195000171661377, -.026957999914884567, 0, 2, 1, 12, 9, 6, -1, 1, 14, 9, 2, 3, -.016352999955415726, -.7660880088806152, -.024209000170230865, 0, 2, 6, 10, 14, 12, -1, 6, 14, 14, 4, 3, -.12763699889183044, .8657850027084351, .06420599669218063, 0, 2, 5, 6, 14, 18, -1, 5, 12, 14, 6, 3, .019068999215960503, -.5592979788780212, -.0016880000475794077, 0, 2, 11, 12, 9, 7, -1, 14, 12, 3, 7, 3, .03248099982738495, .04072200134396553, .4892509877681732, 0, 2, 1, 15, 18, 4, -1, 1, 17, 18, 2, 2, .009484999813139439, -.19231900572776794, .5113970041275024, 0, 2, 11, 14, 6, 9, -1, 11, 17, 6, 3, 3, .005047000013291836, .18706800043582916, -.16113600134849548, 0, 3, 0, 8, 18, 4, -1, 0, 8, 9, 2, 2, 9, 10, 9, 2, 2, .0412679985165596, -.04881799966096878, -1.1326299905776978, 0, 3, 3, 10, 20, 6, -1, 13, 10, 10, 3, 2, 3, 13, 10, 3, 2, -.07635899633169174, 1.4169390201568604, .0873199999332428, 0, 3, 1, 10, 20, 6, -1, 1, 10, 10, 3, 2, 11, 13, 10, 3, 2, -.07283499836921692, 1.3189860582351685, -.14819100499153137, 0, 2, 0, 9, 24, 2, -1, 0, 9, 12, 2, 2, .05957699939608574, .04837699979543686, .8561180233955383, 0, 3, 1, 12, 20, 8, -1, 1, 12, 10, 4, 2, 11, 16, 10, 4, 2, .020263999700546265, -.210440993309021, .33858999609947205, 0, 2, 11, 12, 9, 7, -1, 14, 12, 3, 7, 3, -.08030100166797638, -1.246440052986145, .11857099831104279, 0, 2, 4, 12, 9, 7, -1, 7, 12, 3, 7, 3, -.017835000529885292, .25782299041748047, -.24564799666404724, 0, 2, 12, 12, 8, 5, -1, 12, 12, 4, 5, 2, .01143100019544363, .2294979989528656, -.29497599601745605, 0, 2, 4, 12, 8, 5, -1, 8, 12, 4, 5, 2, -.025541000068187714, -.862529993057251, -.0007040000054985285, 0, 2, 13, 10, 4, 10, -1, 13, 10, 2, 10, 2, -.0007689999765716493, .31511399149894714, -.1434900015592575, 0, 2, 1, 15, 20, 2, -1, 11, 15, 10, 2, 2, -.014453999698162079, .2514849901199341, -.2823289930820465, 0, 2, 9, 10, 6, 6, -1, 9, 10, 3, 6, 2, .008673000149428844, .2660140097141266, -.2819080054759979, -3.2772979736328125, 197, 0, 2, 0, 1, 21, 3, -1, 7, 1, 7, 3, 3, .054708998650312424, -.5414429903030396, .6104300022125244, 0, 2, 6, 4, 13, 9, -1, 6, 7, 13, 3, 3, -.10838799923658371, .717399001121521, -.41196098923683167, 0, 2, 6, 5, 12, 5, -1, 10, 5, 4, 5, 3, .022996999323368073, -.5826979875564575, .2964560091495514, 0, 2, 10, 10, 10, 6, -1, 10, 12, 10, 2, 3, .0027540000155568123, -.7424389719963074, .14183300733566284, 0, 2, 6, 12, 5, 8, -1, 6, 16, 5, 4, 2, -.0021520000882446766, .17879900336265564, -.6854860186576843, 0, 2, 13, 0, 6, 9, -1, 15, 0, 2, 9, 3, -.022559000179171562, -1.0775549411773682, .1238899976015091, 0, 2, 2, 10, 18, 6, -1, 8, 10, 6, 6, 3, .0830250009894371, .024500999599695206, -1.0251879692077637, 0, 2, 11, 2, 9, 4, -1, 11, 4, 9, 2, 2, -.006674000062048435, -.4528310000896454, .21230199933052063, 0, 2, 1, 20, 21, 3, -1, 8, 20, 7, 3, 3, .07648500055074692, -.2697269916534424, .4858019948005676, 0, 2, 1, 10, 22, 2, -1, 1, 11, 22, 1, 2, .005491000134497881, -.48871201276779175, .3161639869213104, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, -.010414999909698963, .41512900590896606, -.3004480004310608, 0, 2, 13, 0, 6, 9, -1, 15, 0, 2, 9, 3, .027607999742031097, .16203799843788147, -.9986850023269653, 0, 2, 5, 0, 6, 9, -1, 7, 0, 2, 9, 3, -.02327200025320053, -1.1024399995803833, .021124999970197678, 0, 2, 18, 2, 6, 20, -1, 20, 2, 2, 20, 3, -.05561999976634979, .6503310203552246, -.027938000857830048, 0, 2, 0, 2, 6, 20, -1, 2, 2, 2, 20, 3, -.04063199833035469, .42117300629615784, -.2676379978656769, 0, 3, 11, 7, 6, 14, -1, 14, 7, 3, 7, 2, 11, 14, 3, 7, 2, -.007356000132858753, .35277798771858215, -.3785400092601776, 0, 2, 0, 1, 4, 9, -1, 2, 1, 2, 9, 2, .017007000744342804, -.2918950021266937, .410537987947464, 0, 2, 12, 14, 9, 4, -1, 12, 16, 9, 2, 2, -.03703400120139122, -1.3216309547424316, .12966500222682953, 0, 2, 1, 13, 9, 4, -1, 1, 15, 9, 2, 2, -.01963300071656704, -.8770229816436768, .00107999995816499, 0, 2, 7, 6, 15, 6, -1, 7, 8, 15, 2, 3, -.02354699932038784, .26106101274490356, -.21481400728225708, 0, 2, 8, 2, 3, 18, -1, 8, 8, 3, 6, 3, -.04335299879312515, -.990896999835968, -.009956000372767448, 0, 3, 6, 6, 12, 6, -1, 12, 6, 6, 3, 2, 6, 9, 6, 3, 2, -.02218399941921234, .6345440149307251, -.056547001004219055, 0, 3, 2, 19, 20, 4, -1, 2, 19, 10, 2, 2, 12, 21, 10, 2, 2, .016530999913811684, .024664999917149544, -.7332680225372314, 0, 2, 14, 15, 6, 9, -1, 14, 18, 6, 3, 3, -.03274400159716606, -.5629720091819763, .16640299558639526, 0, 3, 3, 5, 18, 14, -1, 3, 5, 9, 7, 2, 12, 12, 9, 7, 2, .07141599804162979, -.0003000000142492354, -.9328640103340149, 0, 3, 15, 6, 4, 18, -1, 17, 6, 2, 9, 2, 15, 15, 2, 9, 2, .0008099999977275729, -.09538000077009201, .2518469989299774, 0, 3, 5, 6, 4, 18, -1, 5, 6, 2, 9, 2, 7, 15, 2, 9, 2, -.008409000001847744, -.6549680233001709, .06730099767446518, 0, 2, 11, 0, 6, 9, -1, 13, 0, 2, 9, 3, -.017254000529646873, -.46492999792099, .16070899367332458, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.018641000613570213, -1.059401035308838, -.019617000594735146, 0, 2, 11, 5, 6, 9, -1, 13, 5, 2, 9, 3, -.009197999723255634, .5071619749069214, -.1533920019865036, 0, 2, 9, 5, 6, 6, -1, 12, 5, 3, 6, 2, .01853800006210804, -.3049820065498352, .7350620031356812, 0, 3, 4, 1, 16, 6, -1, 12, 1, 8, 3, 2, 4, 4, 8, 3, 2, -.050335001200437546, -1.1140480041503906, .18000100553035736, 0, 2, 9, 13, 6, 11, -1, 11, 13, 2, 11, 3, -.02352900058031082, -.8690789937973022, -.01245999988168478, 0, 3, 17, 1, 6, 12, -1, 20, 1, 3, 6, 2, 17, 7, 3, 6, 2, -.02710000053048134, .6594290137290955, -.03532399982213974, 0, 2, 1, 17, 18, 3, -1, 1, 18, 18, 1, 3, .006587999872863293, -.22953400015830994, .424250990152359, 0, 2, 7, 13, 10, 8, -1, 7, 17, 10, 4, 2, .023360000923275948, .1835619956254959, -.9858729839324951, 0, 2, 6, 18, 10, 6, -1, 6, 20, 10, 2, 3, .01294699963182211, -.3314740061759949, .21323199570178986, 0, 2, 9, 14, 9, 4, -1, 9, 16, 9, 2, 2, -.0066559999249875546, -.11951400339603424, .2975279986858368, 0, 3, 1, 1, 6, 12, -1, 1, 1, 3, 6, 2, 4, 7, 3, 6, 2, -.022570999339222908, .3849940001964569, -.24434499442577362, 0, 2, 19, 4, 5, 12, -1, 19, 8, 5, 4, 3, -.06381399929523468, -.8938350081443787, .14217500388622284, 0, 2, 0, 0, 8, 8, -1, 4, 0, 4, 8, 2, -.04994500055909157, .538644015789032, -.20485299825668335, 0, 2, 3, 5, 19, 3, -1, 3, 6, 19, 1, 3, .006831999868154526, -.056678999215364456, .3997099995613098, 0, 3, 1, 5, 12, 6, -1, 1, 5, 6, 3, 2, 7, 8, 6, 3, 2, -.05583599954843521, -1.52394700050354, -.05118300020694733, 0, 2, 2, 1, 21, 8, -1, 9, 1, 7, 8, 3, .31957000494003296, .07457400113344193, 1.2447799444198608, 0, 2, 4, 1, 16, 8, -1, 4, 5, 16, 4, 2, .08095599710941315, -.1966550052165985, .5988969802856445, 0, 2, 6, 0, 18, 3, -1, 6, 1, 18, 1, 3, -.014911999925971031, -.640205979347229, .15807600319385529, 0, 2, 4, 4, 10, 14, -1, 4, 11, 10, 7, 2, .04670900106430054, .0852390006184578, -.4548720121383667, 0, 2, 15, 6, 4, 10, -1, 15, 11, 4, 5, 2, .006053999997675419, -.4318400025367737, .22452600300312042, 0, 2, 3, 18, 18, 3, -1, 9, 18, 6, 3, 3, -.03437599912285805, .4020250141620636, -.23903599381446838, 0, 2, 8, 18, 12, 6, -1, 12, 18, 4, 6, 3, -.03492400050163269, .5287010073661804, .039709001779556274, 0, 2, 3, 15, 6, 9, -1, 6, 15, 3, 9, 2, .003003000048920512, -.3875429928302765, .14192600548267365, 0, 2, 15, 7, 6, 8, -1, 15, 11, 6, 4, 2, -.014132999815046787, .8752840161323547, .08550799638032913, 0, 2, 3, 7, 6, 8, -1, 3, 11, 6, 4, 2, -.006794000044465065, -1.1649219989776611, -.03394300118088722, 0, 3, 5, 9, 18, 6, -1, 14, 9, 9, 3, 2, 5, 12, 9, 3, 2, -.052886001765728, 1.09306800365448, .051187001168727875, 0, 2, 1, 13, 12, 6, -1, 1, 15, 12, 2, 3, -.002107999986037612, .13696199655532837, -.3384999930858612, 0, 2, 14, 15, 10, 6, -1, 14, 17, 10, 2, 3, .018353000283241272, .13661600649356842, -.4077779948711395, 0, 2, 0, 15, 10, 6, -1, 0, 17, 10, 2, 3, .012671999633312225, -.014936000108718872, -.8170750141143799, 0, 2, 15, 13, 6, 9, -1, 15, 16, 6, 3, 3, .012924999929964542, .17625099420547485, -.3249169886112213, 0, 2, 3, 13, 6, 9, -1, 3, 16, 6, 3, 3, -.017921000719070435, -.5274540185928345, .044443000108003616, 0, 2, 9, 5, 8, 8, -1, 9, 5, 4, 8, 2, .0019160000374540687, -.10978599637746811, .2206750065088272, 0, 3, 1, 18, 12, 6, -1, 1, 18, 6, 3, 2, 7, 21, 6, 3, 2, -.014697999693453312, .3906779885292053, -.22224999964237213, 0, 2, 13, 19, 10, 4, -1, 13, 21, 10, 2, 2, -.014972999691963196, -.25450900197029114, .17790000140666962, 0, 2, 1, 19, 10, 4, -1, 1, 21, 10, 2, 2, .014636999927461147, -.02512500062584877, -.8712130188941956, 0, 2, 6, 19, 18, 3, -1, 6, 20, 18, 1, 3, -.010974000208079815, .7908279895782471, .020121000707149506, 0, 2, 8, 14, 4, 10, -1, 8, 19, 4, 5, 2, -.009159999899566174, -.4790689945220947, .05223200097680092, 0, 2, 0, 0, 24, 6, -1, 0, 2, 24, 2, 3, .0046179997734725475, -.17244599759578705, .3452779948711395, 0, 2, 0, 1, 6, 9, -1, 0, 4, 6, 3, 3, .02347699925303459, .003776000114157796, -.6533370018005371, 0, 3, 4, 9, 20, 6, -1, 14, 9, 10, 3, 2, 4, 12, 10, 3, 2, .03176699951291084, .016364000737667084, .5872370004653931, 0, 2, 1, 15, 19, 8, -1, 1, 19, 19, 4, 2, -.01841999962925911, .19993899762630463, -.32056498527526855, 0, 2, 14, 0, 10, 6, -1, 14, 2, 10, 2, 3, .019543999806046486, .1845020055770874, -.23793600499629974, 0, 2, 1, 10, 21, 14, -1, 8, 10, 7, 14, 3, .4115949869155884, -.06038200110197067, -1.607211947441101, 0, 2, 10, 10, 8, 8, -1, 10, 10, 4, 8, 2, -.04159599915146828, -.32756200432777405, .1505800038576126, 0, 2, 6, 8, 10, 4, -1, 11, 8, 5, 4, 2, -.01033599954098463, -.6239439845085144, .013112000189721584, 0, 2, 10, 5, 4, 9, -1, 10, 5, 2, 9, 2, .012392999604344368, -.033114999532699585, .5557990074157715, 0, 2, 7, 5, 6, 10, -1, 9, 5, 2, 10, 3, -.008727000094950199, .19883200526237488, -.37635600566864014, 0, 2, 14, 4, 4, 13, -1, 14, 4, 2, 13, 2, .016295000910758972, .2037300020456314, -.42800799012184143, 0, 2, 6, 4, 4, 13, -1, 8, 4, 2, 13, 2, -.010483999736607075, -.5684700012207031, .04419900104403496, 0, 2, 8, 7, 9, 6, -1, 11, 7, 3, 6, 3, -.012431999668478966, .7464190125465393, .043678998947143555, 0, 3, 3, 6, 16, 6, -1, 3, 6, 8, 3, 2, 11, 9, 8, 3, 2, -.05037499964237213, .8509010076522827, -.1777379959821701, 0, 3, 5, 4, 16, 14, -1, 13, 4, 8, 7, 2, 5, 11, 8, 7, 2, .04954800009727478, .16784900426864624, -.29877498745918274, 0, 3, 0, 0, 24, 4, -1, 0, 0, 12, 2, 2, 12, 2, 12, 2, 2, -.041085001081228256, -1.330291986465454, -.04918200150132179, 0, 2, 9, 1, 9, 6, -1, 12, 1, 3, 6, 3, .001006999984383583, -.06053899973630905, .18483200669288635, 0, 2, 4, 1, 14, 4, -1, 11, 1, 7, 4, 2, -.05014299973845482, .764477014541626, -.183569997549057, 0, 2, 10, 14, 7, 9, -1, 10, 17, 7, 3, 3, -.008787999860942364, .22655999660491943, -.06315699964761734, 0, 3, 8, 3, 8, 10, -1, 8, 3, 4, 5, 2, 12, 8, 4, 5, 2, -.05017099902033806, -1.5899070501327515, -.06125500053167343, 0, 2, 7, 3, 12, 5, -1, 11, 3, 4, 5, 3, .1021609976887703, .12071800231933594, -1.4120110273361206, 0, 2, 8, 2, 4, 13, -1, 10, 2, 2, 13, 2, -.014372999779880047, -1.311697006225586, -.05193600058555603, 0, 2, 11, 2, 3, 19, -1, 12, 2, 1, 19, 3, .010281999595463276, -.0021639999467879534, .44247201085090637, 0, 2, 7, 7, 9, 6, -1, 10, 7, 3, 6, 3, -.011814000084996223, .653780996799469, -.1872369945049286, 0, 2, 4, 22, 20, 2, -1, 4, 22, 10, 2, 2, .07211499661207199, .07184699922800064, .8149629831314087, 0, 3, 0, 16, 24, 4, -1, 0, 16, 12, 2, 2, 12, 18, 12, 2, 2, -.019001999869942665, -.6742720007896423, -.00043200000072829425, 0, 2, 7, 3, 12, 5, -1, 11, 3, 4, 5, 3, -.004699000157415867, .33311501145362854, .05579400062561035, 0, 3, 1, 10, 8, 14, -1, 1, 10, 4, 7, 2, 5, 17, 4, 7, 2, -.058157000690698624, .45572298765182495, -.20305100083351135, 0, 2, 11, 16, 6, 6, -1, 11, 19, 6, 3, 2, .0011360000353306532, -.044686999171972275, .2268189936876297, 0, 3, 6, 0, 10, 24, -1, 6, 0, 5, 12, 2, 11, 12, 5, 12, 2, -.04941499978303909, .2669459879398346, -.26116999983787537, 0, 3, 7, 5, 14, 14, -1, 14, 5, 7, 7, 2, 7, 12, 7, 7, 2, -.11913800239562988, -.8301799893379211, .13248500227928162, 0, 3, 7, 8, 10, 8, -1, 7, 8, 5, 4, 2, 12, 12, 5, 4, 2, -.018303999677300453, -.674992024898529, .01709200069308281, 0, 2, 9, 1, 9, 6, -1, 12, 1, 3, 6, 3, -.00791999977082014, -.07228700071573257, .14425800740718842, 0, 2, 0, 6, 24, 3, -1, 12, 6, 12, 3, 2, .05192599818110466, .030921999365091324, -.5586060285568237, 0, 2, 7, 3, 12, 5, -1, 11, 3, 4, 5, 3, .06672400236129761, .1366640031337738, -.2941100001335144, 0, 3, 1, 13, 22, 4, -1, 1, 13, 11, 2, 2, 12, 15, 11, 2, 2, -.013778000138700008, -.5944390296936035, .015300000086426735, 0, 2, 9, 12, 12, 6, -1, 9, 14, 12, 2, 3, -.017760999500751495, .40496501326560974, -.003355999942868948, 0, 2, 0, 5, 9, 6, -1, 0, 7, 9, 2, 3, -.04223499819636345, -1.0897940397262573, -.04022499918937683, 0, 2, 1, 5, 23, 6, -1, 1, 7, 23, 2, 3, -.013524999842047691, .2892189919948578, -.2519479990005493, 0, 2, 1, 6, 19, 12, -1, 1, 10, 19, 4, 3, -.011106000281870365, .6531280279159546, -.18053700029850006, 0, 2, 9, 1, 6, 21, -1, 9, 8, 6, 7, 3, -.12284599989652634, -1.9570649862289429, .14815400540828705, 0, 2, 3, 19, 18, 3, -1, 9, 19, 6, 3, 3, .04771599918603897, -.22875599563121796, .3423370122909546, 0, 2, 9, 14, 6, 9, -1, 11, 14, 2, 9, 3, .0318170003592968, .15976299345493317, -1.0091969966888428, 0, 2, 9, 6, 4, 12, -1, 11, 6, 2, 12, 2, .0042570000514388084, -.38881298899650574, .08421000093221664, 0, 2, 16, 0, 6, 9, -1, 18, 0, 2, 9, 3, -.06137299910187721, 1.7152810096740723, .059324998408555984, 0, 2, 2, 0, 6, 9, -1, 4, 0, 2, 9, 3, -.0027030000928789377, -.38161700963974, .08512700349092484, 0, 3, 13, 1, 4, 22, -1, 15, 1, 2, 11, 2, 13, 12, 2, 11, 2, -.06854400038719177, -3.0925889015197754, .11788000166416168, 0, 2, 1, 8, 8, 12, -1, 1, 14, 8, 6, 2, .10372500121593475, -.13769300282001495, 1.900941014289856, 0, 2, 14, 7, 7, 9, -1, 14, 10, 7, 3, 3, .01579900085926056, -.06266000121831894, .25917699933052063, 0, 3, 3, 12, 18, 4, -1, 3, 12, 9, 2, 2, 12, 14, 9, 2, 2, -.00980400014668703, -.5629159808158875, .04392300173640251, 0, 3, 13, 1, 4, 22, -1, 15, 1, 2, 11, 2, 13, 12, 2, 11, 2, -.009022999554872513, .25287100672721863, -.04122599959373474, 0, 3, 7, 1, 4, 22, -1, 7, 1, 2, 11, 2, 9, 12, 2, 11, 2, -.06375499814748764, -2.617856979370117, -.07400599867105484, 0, 3, 4, 7, 20, 4, -1, 14, 7, 10, 2, 2, 4, 9, 10, 2, 2, .038954999297857285, .059032998979091644, .8594560027122498, 0, 2, 9, 10, 6, 7, -1, 12, 10, 3, 7, 2, -.039802998304367065, .9360049962997437, -.15639400482177734, 0, 2, 7, 7, 10, 4, -1, 7, 7, 5, 4, 2, .05030199885368347, .13725900650024414, -2.5549728870391846, 0, 2, 0, 3, 4, 15, -1, 0, 8, 4, 5, 3, .04625000059604645, -.013964000158011913, -.7102620005607605, 0, 3, 15, 0, 8, 12, -1, 19, 0, 4, 6, 2, 15, 6, 4, 6, 2, .062196001410484314, .059526000171899796, 1.6509100198745728, 0, 3, 1, 0, 8, 12, -1, 1, 0, 4, 6, 2, 5, 6, 4, 6, 2, -.06477600336074829, .7136899828910828, -.17270000278949738, 0, 2, 14, 5, 6, 16, -1, 16, 5, 2, 16, 3, .027522999793291092, .14631600677967072, -.08142899721860886, 0, 2, 4, 5, 6, 16, -1, 6, 5, 2, 16, 3, .00039900001138448715, -.3714450001716614, .10152699798345566, 0, 2, 15, 0, 6, 16, -1, 17, 0, 2, 16, 3, -.0043299999088048935, -.23756299912929535, .267984002828598, 0, 2, 3, 0, 6, 16, -1, 5, 0, 2, 16, 3, .047297000885009766, -.027682000771164894, -.8491029739379883, 0, 2, 0, 2, 24, 3, -1, 0, 3, 24, 1, 3, .012508999556303024, .18730199337005615, -.5600110292434692, 0, 2, 7, 1, 10, 4, -1, 7, 3, 10, 2, 2, .04589900001883507, -.15601199865341187, .9707300066947937, 0, 2, 1, 0, 23, 8, -1, 1, 4, 23, 4, 2, .19853399693965912, .14895500242710114, -1.101552963256836, 0, 2, 1, 17, 19, 3, -1, 1, 18, 19, 1, 3, .01667499914765358, -.16615299880504608, .8221099972724915, 0, 2, 6, 18, 18, 2, -1, 6, 19, 18, 1, 2, .0019829999655485153, -.07124999910593033, .2881090044975281, 0, 2, 1, 17, 9, 6, -1, 1, 19, 9, 2, 3, .022447999566793442, -.02098100073635578, -.7841650247573853, 0, 2, 15, 15, 6, 9, -1, 15, 18, 6, 3, 3, -.013913000002503395, -.18165799975395203, .2049179971218109, 0, 2, 3, 15, 6, 9, -1, 3, 18, 6, 3, 3, -.007765999995172024, -.4559589922428131, .06357699632644653, 0, 2, 4, 14, 20, 6, -1, 4, 17, 20, 3, 2, -.01320900022983551, .2663230001926422, -.17795999348163605, 0, 3, 0, 10, 6, 14, -1, 0, 10, 3, 7, 2, 3, 17, 3, 7, 2, .049052998423576355, -.15476800501346588, 1.1069979667663574, 0, 2, 6, 18, 18, 3, -1, 6, 19, 18, 1, 3, .020263999700546265, .0689150020480156, .6986749768257141, 0, 2, 4, 12, 9, 7, -1, 7, 12, 3, 7, 3, -.01682800054550171, .2760719954967499, -.2513920068740845, 0, 2, 6, 10, 18, 5, -1, 12, 10, 6, 5, 3, -.16939499974250793, -3.0767529010772705, .11617500334978104, 0, 2, 0, 10, 18, 5, -1, 6, 10, 6, 5, 3, -.11336100101470947, -1.4639229774475098, -.05144700035452843, 0, 2, 3, 2, 18, 9, -1, 9, 2, 6, 9, 3, -.07768599689006805, .884302020072937, .043306998908519745, 0, 3, 4, 6, 10, 10, -1, 4, 6, 5, 5, 2, 9, 11, 5, 5, 2, -.015568000264465809, .13672499358654022, -.3450550138950348, 0, 2, 20, 14, 4, 9, -1, 20, 14, 2, 9, 2, -.06601899862289429, -1.0300110578536987, .11601399630308151, 0, 2, 0, 14, 4, 9, -1, 2, 14, 2, 9, 2, .008369999937713146, .07642900198698044, -.4400250017642975, 0, 3, 11, 1, 4, 20, -1, 13, 1, 2, 10, 2, 11, 11, 2, 10, 2, .03540299832820892, .11979500204324722, -.7266830205917358, 0, 2, 6, 21, 12, 3, -1, 12, 21, 6, 3, 2, -.03905100002884865, .673753023147583, -.18196000158786774, 0, 3, 11, 1, 4, 20, -1, 13, 1, 2, 10, 2, 11, 11, 2, 10, 2, -.009789999574422836, .2126459926366806, .0367560014128685, 0, 3, 1, 16, 10, 8, -1, 1, 16, 5, 4, 2, 6, 20, 5, 4, 2, -.02304700016975403, .44742199778556824, -.20986700057983398, 0, 3, 11, 1, 4, 20, -1, 13, 1, 2, 10, 2, 11, 11, 2, 10, 2, .0031169999856501818, .03754400089383125, .278082013130188, 0, 2, 1, 0, 3, 19, -1, 2, 0, 1, 19, 3, .013136000372469425, -.19842399656772614, .5433570146560669, 0, 3, 11, 1, 4, 20, -1, 13, 1, 2, 10, 2, 11, 11, 2, 10, 2, .014782000333070755, .1353060007095337, -.11153600364923477, 0, 2, 0, 1, 6, 9, -1, 2, 1, 2, 9, 3, -.060139000415802, .8403930068016052, -.16711600124835968, 0, 2, 3, 7, 19, 4, -1, 3, 9, 19, 2, 2, .05199899896979332, .17372000217437744, -.78547602891922, 0, 2, 7, 14, 9, 6, -1, 7, 16, 9, 2, 3, .024792000651359558, -.17739200592041016, .6675260066986084, 0, 2, 17, 1, 7, 6, -1, 17, 4, 7, 3, 2, -.012014999985694885, -.1426369994878769, .16070500016212463, 0, 2, 5, 0, 14, 8, -1, 5, 4, 14, 4, 2, -.09865599870681763, 1.042976975440979, -.1577019989490509, 0, 2, 16, 1, 8, 6, -1, 16, 4, 8, 3, 2, .11758299916982651, .10955700278282166, -4.492037773132324, 0, 2, 0, 1, 8, 6, -1, 0, 4, 8, 3, 2, -.018922999501228333, -.7854340076446533, .012984000146389008, 0, 3, 6, 0, 18, 4, -1, 15, 0, 9, 2, 2, 6, 2, 9, 2, 2, -.028390999883413315, -.6056990027427673, .12903499603271484, 0, 2, 0, 14, 9, 6, -1, 0, 16, 9, 2, 3, .013182999566197395, -.014415999874472618, -.732105016708374, 0, 2, 3, 7, 18, 8, -1, 9, 7, 6, 8, 3, -.11653000116348267, -2.0442469120025635, .1405310034751892, 0, 2, 2, 11, 6, 9, -1, 4, 11, 2, 9, 3, -.0038880000356584787, -.41861599683761597, .07870499789714813, 0, 2, 10, 5, 6, 9, -1, 12, 5, 2, 9, 3, .03122900053858757, .024632999673485756, .41870400309562683, 0, 3, 10, 6, 4, 18, -1, 10, 6, 2, 9, 2, 12, 15, 2, 9, 2, .025198999792337418, -.17557799816131592, .6471059918403625, 0, 3, 11, 1, 4, 20, -1, 13, 1, 2, 10, 2, 11, 11, 2, 10, 2, -.028124000877141953, -.22005599737167358, .14121000468730927, 0, 3, 9, 1, 4, 20, -1, 9, 1, 2, 10, 2, 11, 11, 2, 10, 2, .03649900108575821, -.06842699646949768, -2.3410849571228027, 0, 3, 5, 9, 18, 6, -1, 14, 9, 9, 3, 2, 5, 12, 9, 3, 2, -.0722929984331131, 1.2898750305175781, .08487500250339508, 0, 2, 6, 4, 6, 9, -1, 8, 4, 2, 9, 3, -.04167100042104721, -1.1630970239639282, -.053752999752759933, 0, 2, 10, 16, 8, 6, -1, 10, 16, 4, 6, 2, .04770300164818764, .07010100036859512, .7367650270462036, 0, 3, 0, 0, 18, 8, -1, 0, 0, 9, 4, 2, 9, 4, 9, 4, 2, .0657930001616478, -.1775529980659485, .6978049874305725, 0, 3, 6, 5, 14, 12, -1, 13, 5, 7, 6, 2, 6, 11, 7, 6, 2, .013904999941587448, .21936799585819244, -.20390799641609192, 0, 2, 4, 3, 15, 7, -1, 9, 3, 5, 7, 3, -.027730999514460564, .6186789870262146, -.1780409961938858, 0, 2, 14, 12, 10, 6, -1, 14, 14, 10, 2, 3, -.015879999846220016, -.46484100818634033, .18828600645065308, 0, 2, 0, 11, 4, 10, -1, 0, 16, 4, 5, 2, .07412800192832947, -.1285810023546219, 3.279247999191284, 0, 2, 1, 10, 22, 3, -1, 1, 11, 22, 1, 3, -.0008900000248104334, -.3011760115623474, .2381879985332489, 0, 2, 8, 9, 6, 10, -1, 10, 9, 2, 10, 3, .017965000122785568, -.2228499948978424, .2995400130748749, 0, 3, 13, 2, 6, 12, -1, 16, 2, 3, 6, 2, 13, 8, 3, 6, 2, -.00253800000064075, .2506439983844757, -.1366560012102127, 0, 3, 10, 6, 4, 18, -1, 10, 6, 2, 9, 2, 12, 15, 2, 9, 2, -.009068000130355358, .2901749908924103, -.2892970144748688, 0, 3, 7, 8, 10, 16, -1, 12, 8, 5, 8, 2, 7, 16, 5, 8, 2, .04916999861598015, .19156399369239807, -.6832870244979858, 0, 3, 8, 1, 8, 12, -1, 8, 1, 4, 6, 2, 12, 7, 4, 6, 2, -.030680999159812927, -.7567700147628784, -.013279999606311321, 0, 3, 7, 1, 12, 14, -1, 13, 1, 6, 7, 2, 7, 8, 6, 7, 2, .10017400234937668, .0844539999961853, 1.0888710021972656, 0, 2, 2, 14, 12, 6, -1, 2, 16, 12, 2, 3, .0031950001139193773, -.26919400691986084, .19537900388240814, 0, 2, 11, 16, 6, 6, -1, 11, 19, 6, 3, 2, .035503000020980835, .1363230049610138, -.5691720247268677, 0, 2, 7, 16, 6, 6, -1, 7, 19, 6, 3, 2, .00045900000259280205, -.4044399857521057, .14074799418449402, 0, 2, 13, 4, 4, 10, -1, 13, 4, 2, 10, 2, .025258999317884445, .162432000041008, -.5574179887771606, 0, 2, 0, 19, 19, 3, -1, 0, 20, 19, 1, 3, -.005154999904334545, .3113259971141815, -.22756099700927734, 0, 2, 12, 8, 6, 8, -1, 12, 12, 6, 4, 2, .0015869999770075083, -.2686769962310791, .1956540048122406, 0, 2, 8, 1, 8, 22, -1, 8, 12, 8, 11, 2, -.01620499975979328, .15486499667167664, -.34057798981666565, 0, 2, 12, 8, 6, 8, -1, 12, 12, 6, 4, 2, -.029624000191688538, 1.1466799974441528, .0905579999089241, 0, 2, 6, 8, 6, 8, -1, 6, 12, 6, 4, 2, -.0015930000226944685, -.7125750184059143, -.0007040000054985285, 0, 2, 14, 5, 6, 9, -1, 14, 8, 6, 3, 3, -.05401900038123131, .4153749942779541, .02724600024521351, 0, 2, 0, 6, 24, 4, -1, 0, 8, 24, 2, 2, -.06621100008487701, -1.334009051322937, -.047352999448776245, 0, 2, 14, 12, 10, 6, -1, 14, 14, 10, 2, 3, .02794099971652031, .14446300268173218, -.5151839852333069, 0, 2, 0, 12, 10, 6, -1, 0, 14, 10, 2, 3, .028957000002264977, -.049966000020504, -1.192903995513916, 0, 2, 4, 6, 19, 3, -1, 4, 7, 19, 1, 3, -.02042499929666519, .6388130187988281, .038141001015901566, 0, 2, 1, 6, 19, 3, -1, 1, 7, 19, 1, 3, .012416999787092209, -.21547000110149384, .49477699398994446, -3.31964111328125, 181, 0, 2, 4, 0, 16, 9, -1, 4, 3, 16, 3, 3, .04327400028705597, -.8049439787864685, .3989729881286621, 0, 2, 0, 1, 24, 5, -1, 8, 1, 8, 5, 3, .18615500628948212, -.316552996635437, .688772976398468, 0, 2, 3, 6, 6, 15, -1, 3, 11, 6, 5, 3, .03186099976301193, -.642661988735199, .25550898909568787, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .014022000133991241, -.4592660069465637, .31171199679374695, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, -.006302999798208475, .4602690041065216, -.274385005235672, 0, 2, 6, 22, 18, 2, -1, 6, 23, 18, 1, 2, -.005431000143289566, .3660860061645508, -.27205801010131836, 0, 2, 2, 12, 6, 9, -1, 2, 15, 6, 3, 3, .016822999343276024, .02347699925303459, -.8844379782676697, 0, 2, 18, 12, 6, 9, -1, 18, 15, 6, 3, 3, .0260390006005764, .1748879998922348, -.5456470251083374, 0, 2, 0, 12, 6, 9, -1, 0, 15, 6, 3, 3, -.02672000043094158, -.9639649987220764, .023524999618530273, 0, 2, 11, 14, 4, 10, -1, 11, 19, 4, 5, 2, -.017041999846696854, -.7084879875183105, .2146809995174408, 0, 2, 9, 6, 6, 16, -1, 9, 14, 6, 8, 2, .005956999957561493, .07360100001096725, -.6822559833526611, 0, 2, 7, 7, 10, 10, -1, 7, 12, 10, 5, 2, -.002867999952286482, -.7493500113487244, .23803399503231049, 0, 2, 1, 3, 6, 13, -1, 3, 3, 2, 13, 3, -.04377499967813492, .6832330226898193, -.2138029932975769, 0, 2, 18, 1, 6, 13, -1, 18, 1, 3, 13, 2, .05163300037384033, -.12566499412059784, .6752380132675171, 0, 2, 5, 1, 6, 9, -1, 7, 1, 2, 9, 3, .008178000338375568, .07068999856710434, -.8066589832305908, 0, 2, 18, 2, 6, 11, -1, 18, 2, 3, 11, 2, -.052841998636722565, .9543390274047852, .016548000276088715, 0, 2, 0, 2, 6, 11, -1, 3, 2, 3, 11, 2, .052583999931812286, -.28414401412010193, .4712980091571808, 0, 2, 9, 12, 15, 6, -1, 9, 14, 15, 2, 3, -.012659000232815742, .38445401191711426, -.06228800117969513, 0, 2, 2, 2, 20, 3, -1, 2, 3, 20, 1, 3, .011694000102579594, 56000000768108293e-21, -1.0173139572143555, 0, 2, 10, 6, 4, 9, -1, 10, 6, 2, 9, 2, -.02391899935901165, .8492130041122437, .005739999935030937, 0, 3, 5, 6, 12, 14, -1, 5, 6, 6, 7, 2, 11, 13, 6, 7, 2, -.06167399883270264, -.9257140159606934, -.0017679999582469463, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, -.0018279999494552612, -.5437229871749878, .2493239939212799, 0, 2, 7, 0, 9, 6, -1, 10, 0, 3, 6, 3, .03525799885392189, -.00737199978902936, -.9396399855613708, 0, 2, 10, 6, 6, 9, -1, 12, 6, 2, 9, 3, -.018438000231981277, .7213670015335083, .010491999797523022, 0, 3, 4, 1, 12, 20, -1, 4, 1, 6, 10, 2, 10, 11, 6, 10, 2, -.03838900104165077, .1927260011434555, -.35832101106643677, 0, 2, 6, 7, 18, 3, -1, 6, 7, 9, 3, 2, .09972099959850311, .11354199796915054, -1.6304190158843994, 0, 2, 0, 7, 18, 3, -1, 9, 7, 9, 3, 2, .0844620019197464, -.05342099815607071, -1.6981120109558105, 0, 2, 3, 20, 18, 3, -1, 9, 20, 6, 3, 3, .04027000069618225, -.10783199965953827, .5192660093307495, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .05893599987030029, -.18053700029850006, .9511979818344116, 0, 2, 6, 2, 12, 15, -1, 10, 2, 4, 15, 3, .14957000315189362, .1678529977798462, -1.1591869592666626, 0, 2, 2, 3, 18, 3, -1, 2, 4, 18, 1, 3, .0006939999875612557, .20491400361061096, -.33118200302124023, 0, 3, 19, 4, 4, 18, -1, 21, 4, 2, 9, 2, 19, 13, 2, 9, 2, -.033369001001119614, .9346809983253479, -.0029639999847859144, 0, 2, 0, 1, 19, 3, -1, 0, 2, 19, 1, 3, .009375999681651592, .003700000001117587, -.7754979729652405, 0, 2, 5, 0, 15, 4, -1, 5, 2, 15, 2, 2, .0431939996778965, -.0022040000185370445, .7458969950675964, 0, 2, 5, 2, 14, 5, -1, 12, 2, 7, 5, 2, -.0675550028681755, .7229210138320923, -.18404200673103333, 0, 2, 1, 2, 22, 14, -1, 1, 2, 11, 14, 2, -.3116860091686249, 1.0014270544052124, .03400300070643425, 0, 2, 8, 15, 6, 9, -1, 10, 15, 2, 9, 3, .029743999242782593, -.04635600000619888, -1.2781809568405151, 0, 2, 6, 17, 18, 3, -1, 6, 18, 18, 1, 3, .010737000033259392, .014812000095844269, .6664999723434448, 0, 2, 9, 6, 3, 18, -1, 9, 12, 3, 6, 3, -.02884100005030632, -.942225992679596, -.020796999335289, 0, 2, 2, 0, 20, 3, -1, 2, 1, 20, 1, 3, -.005764999892562628, -.4354189932346344, .23386000096797943, 0, 2, 5, 4, 5, 12, -1, 5, 8, 5, 4, 3, .028410999104380608, -.17615799605846405, .857653021812439, 0, 2, 8, 6, 12, 5, -1, 12, 6, 4, 5, 3, -.02900799922645092, .5797809958457947, .02856599912047386, 0, 3, 9, 12, 6, 12, -1, 9, 12, 3, 6, 2, 12, 18, 3, 6, 2, .024965999647974968, -.022729000076651573, -.9677309989929199, 0, 3, 14, 14, 8, 10, -1, 18, 14, 4, 5, 2, 14, 19, 4, 5, 2, .01203600037842989, -.1421470046043396, .5168799757957458, 0, 3, 2, 14, 8, 10, -1, 2, 14, 4, 5, 2, 6, 19, 4, 5, 2, -.042514000087976456, .9727380275726318, -.18119800090789795, 0, 3, 10, 18, 12, 6, -1, 16, 18, 6, 3, 2, 10, 21, 6, 3, 2, .010276000015437603, -.08309999853372574, .31762799620628357, 0, 2, 1, 3, 6, 9, -1, 1, 6, 6, 3, 3, -.06919199973344803, -2.0668580532073975, -.06017399951815605, 0, 2, 11, 3, 3, 20, -1, 12, 3, 1, 20, 3, -.004676999989897013, .44131800532341003, .023209000006318092, 0, 3, 4, 6, 14, 6, -1, 4, 6, 7, 3, 2, 11, 9, 7, 3, 2, -.013923999853432178, .28606700897216797, -.29152700304985046, 0, 2, 6, 5, 12, 13, -1, 10, 5, 4, 13, 3, -.015333999879658222, -.5741450190544128, .23063300549983978, 0, 2, 5, 4, 4, 15, -1, 5, 9, 4, 5, 3, -.01023900043219328, .3447920083999634, -.2608039975166321, 0, 2, 9, 16, 15, 4, -1, 14, 16, 5, 4, 3, -.050988998264074326, .5615410208702087, .061218999326229095, 0, 3, 7, 8, 6, 14, -1, 7, 8, 3, 7, 2, 10, 15, 3, 7, 2, .03068999946117401, -.14772799611091614, 1.637848973274231, 0, 2, 7, 6, 10, 6, -1, 7, 8, 10, 2, 3, -.011223999783396721, .24006199836730957, -.44864898920059204, 0, 2, 2, 5, 18, 3, -1, 2, 6, 18, 1, 3, -.006289999932050705, .4311949908733368, -.23808999359607697, 0, 2, 5, 1, 15, 8, -1, 5, 5, 15, 4, 2, .0785909965634346, .019865000620484352, .808538019657135, 0, 2, 7, 1, 8, 18, -1, 7, 10, 8, 9, 2, -.010178999975323677, .1819320023059845, -.3287779986858368, 0, 2, 0, 10, 24, 3, -1, 0, 11, 24, 1, 3, .031227000057697296, .14973899722099304, -1.4180339574813843, 0, 2, 0, 2, 6, 13, -1, 2, 2, 2, 13, 3, .04019699990749359, -.19760499894618988, .5850819945335388, 0, 3, 16, 0, 8, 10, -1, 20, 0, 4, 5, 2, 16, 5, 4, 5, 2, .016138000413775444, .0005000000237487257, .390500009059906, 0, 2, 5, 1, 10, 9, -1, 5, 4, 10, 3, 3, -.04551900178194046, 1.2646820545196533, -.15632599592208862, 0, 2, 5, 6, 18, 3, -1, 5, 7, 18, 1, 3, -.018130000680685043, .651485025882721, .010235999710857868, 0, 2, 0, 1, 24, 3, -1, 0, 2, 24, 1, 3, -.014001999981701374, -1.0344820022583008, -.032182998955249786, 0, 2, 11, 4, 6, 11, -1, 13, 4, 2, 11, 3, -.038816001266241074, -.4787429869174957, .16290700435638428, 0, 3, 0, 0, 8, 10, -1, 0, 0, 4, 5, 2, 4, 5, 4, 5, 2, .03165600076317787, -.2098339945077896, .5457590222358704, 0, 2, 4, 16, 18, 3, -1, 4, 17, 18, 1, 3, -.01083999965339899, .5189880132675171, -.015080000273883343, 0, 2, 2, 16, 18, 3, -1, 2, 17, 18, 1, 3, .012032999657094479, -.21107600629329681, .7593700289726257, 0, 3, 3, 0, 18, 10, -1, 12, 0, 9, 5, 2, 3, 5, 9, 5, 2, .07077299803495407, .1804880052804947, -.7404850125312805, 0, 2, 2, 3, 20, 21, -1, 12, 3, 10, 21, 2, .5313979983329773, -.14491699635982513, 1.5360039472579956, 0, 2, 6, 7, 14, 3, -1, 6, 7, 7, 3, 2, -.014774000272154808, -.2815369963645935, .2040729969739914, 0, 3, 0, 9, 12, 6, -1, 0, 9, 6, 3, 2, 6, 12, 6, 3, 2, -.0022410000674426556, -.44876301288604736, .053989000618457794, 0, 2, 3, 14, 21, 4, -1, 10, 14, 7, 4, 3, .04996800050139427, .04151400178670883, .294171005487442, 0, 2, 0, 14, 21, 4, -1, 7, 14, 7, 4, 3, -.04770199954509735, .3967429995536804, -.28301799297332764, 0, 2, 5, 21, 18, 3, -1, 11, 21, 6, 3, 3, -.0913110002875328, 2.1994259357452393, .0879649966955185, 0, 2, 1, 21, 18, 3, -1, 7, 21, 6, 3, 3, .03807000070810318, -.2802560031414032, .2515619993209839, 0, 3, 19, 4, 4, 18, -1, 21, 4, 2, 9, 2, 19, 13, 2, 9, 2, -.015538999810814857, .3415749967098236, .017924999818205833, 0, 2, 3, 7, 18, 3, -1, 3, 8, 18, 1, 3, -.015445999801158905, .2868019938468933, -.2513589859008789, 0, 3, 19, 4, 4, 18, -1, 21, 4, 2, 9, 2, 19, 13, 2, 9, 2, -.057388000190258026, .6383000016212463, .08859799802303314, 0, 2, 7, 15, 10, 6, -1, 7, 17, 10, 2, 3, -.005944000091403723, .07901699841022491, -.4077489972114563, 0, 2, 9, 13, 11, 9, -1, 9, 16, 11, 3, 3, -.06996899843215942, -.44644200801849365, .17219600081443787, 0, 2, 0, 6, 4, 10, -1, 0, 11, 4, 5, 2, -.025064999237656593, -.9827020168304443, -.035388000309467316, 0, 2, 15, 16, 9, 6, -1, 15, 18, 9, 2, 3, .017216000705957413, .227059006690979, -.8055009841918945, 0, 3, 1, 5, 4, 18, -1, 1, 5, 2, 9, 2, 3, 14, 2, 9, 2, -.04427900165319443, .8395199775695801, -.17429600656032562, 0, 3, 9, 8, 8, 10, -1, 13, 8, 4, 5, 2, 9, 13, 4, 5, 2, .04398899897933006, .1155719980597496, -1.9666889905929565, 0, 3, 7, 8, 8, 10, -1, 7, 8, 4, 5, 2, 11, 13, 4, 5, 2, .01590700075030327, -.03757600113749504, -1.0311100482940674, 0, 2, 9, 8, 12, 5, -1, 13, 8, 4, 5, 3, -.09275499731302261, -1.3530019521713257, .12141299992799759, 0, 2, 7, 8, 9, 7, -1, 10, 8, 3, 7, 3, .07103700190782547, -.17684300243854523, .7448520064353943, 0, 2, 9, 8, 12, 5, -1, 13, 8, 4, 5, 3, .05776200070977211, .1283559948205948, -.4444420039653778, 0, 2, 7, 6, 9, 7, -1, 10, 6, 3, 7, 3, -.01643200032413006, .8015270233154297, -.17491699755191803, 0, 2, 9, 8, 12, 5, -1, 13, 8, 4, 5, 3, .023939000442624092, .16144999861717224, -.12364500015974045, 0, 2, 10, 5, 4, 18, -1, 10, 11, 4, 6, 3, .012636000290513039, .15411999821662903, -.33293798565864563, 0, 2, 5, 5, 14, 12, -1, 5, 11, 14, 6, 2, -.05434799939393997, -1.8400700092315674, .1483599990606308, 0, 2, 0, 1, 11, 4, -1, 0, 3, 11, 2, 2, -.013261999934911728, -.8083879947662354, -.027726000174880028, 0, 2, 9, 10, 6, 10, -1, 11, 10, 2, 10, 3, .006134000141173601, -.13785000145435333, .3285849988460541, 0, 2, 2, 17, 11, 6, -1, 2, 19, 11, 2, 3, .02899100072681904, -.025516999885439873, -.8338720202445984, 0, 2, 15, 16, 9, 6, -1, 15, 18, 9, 2, 3, -.02198600023984909, -.7373999953269958, .1788710057735443, 0, 2, 1, 10, 18, 2, -1, 1, 11, 18, 1, 2, .005326999817043543, -.45449298620224, .06879100203514099, 0, 2, 6, 4, 12, 13, -1, 10, 4, 4, 13, 3, .08604799956083298, .21008500456809998, -.3780890107154846, 0, 2, 0, 18, 18, 3, -1, 0, 19, 18, 1, 3, -.008554999716579914, .4013499915599823, -.21074099838733673, 0, 2, 6, 18, 18, 3, -1, 6, 19, 18, 1, 3, .006779000163078308, -.02164899930357933, .45421499013900757, 0, 2, 0, 16, 9, 6, -1, 0, 18, 9, 2, 3, -.006395999807864428, -.49818599224090576, .07590799778699875, 0, 2, 13, 15, 9, 6, -1, 13, 17, 9, 2, 3, .008946999907493591, .1785770058631897, -.2845489978790283, 0, 2, 2, 15, 9, 6, -1, 2, 17, 9, 2, 3, .003258999902755022, .04662499949336052, -.55206298828125, 0, 2, 13, 1, 6, 16, -1, 13, 1, 3, 16, 2, .04147699847817421, .17550499737262726, -.2070399969816208, 0, 2, 5, 1, 6, 16, -1, 8, 1, 3, 16, 2, -.0067449999041855335, -.4639259874820709, .06930399686098099, 0, 2, 11, 5, 6, 10, -1, 13, 5, 2, 10, 3, .03056499920785427, .05173499882221222, .7555050253868103, 0, 2, 7, 5, 6, 10, -1, 9, 5, 2, 10, 3, -.00747800013050437, .14893899857997894, -.3190680146217346, 0, 2, 10, 0, 6, 24, -1, 12, 0, 2, 24, 3, .08908899873495102, .13738800585269928, -1.137971043586731, 0, 3, 3, 4, 4, 20, -1, 3, 4, 2, 10, 2, 5, 14, 2, 10, 2, .007323000114411116, -.2882919907569885, .1908860057592392, 0, 2, 14, 0, 6, 9, -1, 16, 0, 2, 9, 3, -.018205000087618828, -.30178600549697876, .16795800626277924, 0, 2, 4, 0, 6, 9, -1, 6, 0, 2, 9, 3, -.025828000158071518, -.9813799858093262, -.019860999658703804, 0, 2, 4, 5, 18, 5, -1, 10, 5, 6, 5, 3, .10936199873685837, .04879000037908554, .5311830043792725, 0, 2, 5, 6, 6, 9, -1, 7, 6, 2, 9, 3, -.011424999684095383, .23705999553203583, -.2792530059814453, 0, 2, 7, 2, 15, 8, -1, 12, 2, 5, 8, 3, -.057565998286008835, .4725539982318878, .0651710033416748, 0, 2, 2, 2, 15, 8, -1, 7, 2, 5, 8, 3, .10278300195932388, -.20765100419521332, .5094770193099976, 0, 2, 10, 0, 4, 9, -1, 10, 0, 2, 9, 2, .027041999623179436, .16421200335025787, -1.4508620500564575, 0, 3, 3, 4, 6, 12, -1, 3, 4, 3, 6, 2, 6, 10, 3, 6, 2, -.013635000213980675, -.565438985824585, .023788999766111374, 0, 2, 16, 0, 8, 18, -1, 16, 0, 4, 18, 2, -.32158198952674866, -3.5602829456329346, .11801300197839737, 0, 2, 0, 0, 8, 18, -1, 4, 0, 4, 18, 2, .20458100736141205, -.03701600059866905, -1.0225499868392944, 0, 2, 0, 7, 24, 6, -1, 0, 9, 24, 2, 3, -.07034700363874435, -.5649189949035645, .18525199592113495, 0, 2, 4, 7, 14, 3, -1, 11, 7, 7, 3, 2, .03783100098371506, -.029901999980211258, -.8292149901390076, 0, 2, 10, 8, 8, 15, -1, 10, 8, 4, 15, 2, -.07029800117015839, -.5317230224609375, .14430199563503265, 0, 2, 7, 0, 10, 14, -1, 12, 0, 5, 14, 2, .06322100013494492, -.2204120010137558, .4795219898223877, 0, 3, 13, 10, 8, 10, -1, 17, 10, 4, 5, 2, 13, 15, 4, 5, 2, .036393001675605774, .14222699403762817, -.611939013004303, 0, 2, 3, 0, 4, 9, -1, 5, 0, 2, 9, 2, .004009999800473452, -.3456079959869385, .11738699674606323, 0, 2, 16, 1, 6, 8, -1, 16, 1, 3, 8, 2, -.04910600185394287, .9598410129547119, .06493499875068665, 0, 2, 2, 1, 6, 8, -1, 5, 1, 3, 8, 2, -.07158300280570984, 1.7385669946670532, -.14252899587154388, 0, 2, 3, 6, 18, 12, -1, 3, 10, 18, 4, 3, -.038008999079465866, 1.3872820138931274, .06618800014257431, 0, 2, 4, 12, 16, 4, -1, 4, 14, 16, 2, 2, -.003157000057399273, .05367700010538101, -.5404800176620483, 0, 2, 4, 9, 16, 15, -1, 4, 14, 16, 5, 3, .01945899985730648, -.09362000226974487, .3913100063800812, 0, 3, 3, 10, 8, 10, -1, 3, 10, 4, 5, 2, 7, 15, 4, 5, 2, .01129399985074997, .037223998457193375, -.5425180196762085, 0, 3, 8, 18, 16, 6, -1, 16, 18, 8, 3, 2, 8, 21, 8, 3, 2, -.03349500149488449, .9530789852142334, .037696998566389084, 0, 2, 2, 16, 12, 5, -1, 6, 16, 4, 5, 3, .09203500300645828, -.13488399982452393, 2.2897069454193115, 0, 2, 14, 14, 9, 4, -1, 14, 16, 9, 2, 2, .0037529999390244484, .22824199497699738, -.5998370051383972, 0, 2, 7, 14, 9, 6, -1, 7, 16, 9, 2, 3, .012848000042140484, -.22005200386047363, .3722189962863922, 0, 2, 4, 10, 16, 12, -1, 4, 14, 16, 4, 3, -.14316199719905853, 1.285578966140747, .04723700135946274, 0, 2, 0, 13, 19, 6, -1, 0, 15, 19, 2, 3, -.0968799963593483, -3.9550929069519043, -.07290399819612503, 0, 2, 10, 13, 9, 6, -1, 10, 15, 9, 2, 3, -.008845999836921692, .37674999237060547, -.046484000980854034, 0, 2, 5, 0, 3, 23, -1, 6, 0, 1, 23, 3, .01590000092983246, -.024457000195980072, -.8003479838371277, 0, 2, 0, 8, 24, 6, -1, 0, 10, 24, 2, 3, .07037200033664703, .1701900064945221, -.6306899785995483, 0, 2, 0, 5, 5, 12, -1, 0, 9, 5, 4, 3, -.037953998893499374, -.9366719722747803, -.041214000433683395, 0, 2, 3, 0, 19, 18, -1, 3, 9, 19, 9, 2, .515978991985321, .13080599904060364, -1.5802290439605713, 0, 3, 9, 11, 6, 12, -1, 9, 11, 3, 6, 2, 12, 17, 3, 6, 2, -.03284300118684769, -1.1441620588302612, -.049173999577760696, 0, 3, 0, 5, 24, 8, -1, 12, 5, 12, 4, 2, 0, 9, 12, 4, 2, -.03635700047016144, .4960640072822571, -.03445899859070778, 0, 2, 6, 18, 9, 4, -1, 6, 20, 9, 2, 2, .006808000151067972, -.30997800827026367, .17054800689220428, 0, 2, 8, 8, 10, 6, -1, 8, 10, 10, 2, 3, -.016114000231027603, -.3790459930896759, .16078999638557434, 0, 2, 2, 7, 20, 3, -1, 2, 8, 20, 1, 3, .008453000336885452, -.18655499815940857, .5636770129203796, 0, 2, 12, 0, 7, 20, -1, 12, 10, 7, 10, 2, -.13752399384975433, -.5898990035057068, .11749500036239624, 0, 2, 5, 0, 7, 20, -1, 5, 10, 7, 10, 2, .17688000202178955, -.15424899756908417, .9291110038757324, 0, 2, 14, 2, 2, 18, -1, 14, 11, 2, 9, 2, .007930999621748924, .32190701365470886, -.16392600536346436, 0, 2, 5, 8, 10, 12, -1, 10, 8, 5, 12, 2, .10971800237894058, -.1587650030851364, 1.0186259746551514, 0, 3, 6, 9, 12, 8, -1, 12, 9, 6, 4, 2, 6, 13, 6, 4, 2, -.030293000862002373, .7558730244636536, .03179499879479408, 0, 2, 7, 7, 3, 14, -1, 7, 14, 3, 7, 2, -.023118000477552414, -.8845149874687195, -.009503999724984169, 0, 3, 11, 2, 12, 16, -1, 17, 2, 6, 8, 2, 11, 10, 6, 8, 2, -.0030900000128895044, .2383829951286316, -.11606200039386749, 0, 2, 7, 0, 6, 9, -1, 9, 0, 2, 9, 3, -.03339200094342232, -1.8738139867782593, -.0685029998421669, 0, 2, 13, 14, 9, 4, -1, 13, 16, 9, 2, 2, .01319000031799078, .12919899821281433, -.6751220226287842, 0, 3, 0, 12, 22, 4, -1, 0, 12, 11, 2, 2, 11, 14, 11, 2, 2, .014661000110208988, -.024829000234603882, -.7439680099487305, 0, 3, 1, 12, 22, 6, -1, 12, 12, 11, 3, 2, 1, 15, 11, 3, 2, -.013248000293970108, .46820199489593506, -.024165000766515732, 0, 2, 6, 6, 9, 6, -1, 9, 6, 3, 6, 3, -.0162189994007349, .4008379876613617, -.21255700290203094, 0, 2, 10, 0, 4, 9, -1, 10, 0, 2, 9, 2, -.029052000492811203, -1.5650019645690918, .14375899732112885, 0, 2, 3, 8, 18, 7, -1, 9, 8, 6, 7, 3, -.1015319973230362, -1.9220689535140991, -.06955999881029129, 0, 2, 0, 6, 24, 6, -1, 0, 8, 24, 2, 3, .03775399923324585, .13396799564361572, -2.263914108276367, 0, 2, 0, 11, 24, 10, -1, 8, 11, 8, 10, 3, -.28555598855018616, 1.0215270519256592, -.15232199430465698, 0, 2, 3, 3, 18, 21, -1, 9, 3, 6, 21, 3, .15360699594020844, -.09740900248289108, .4166240096092224, 0, 2, 7, 12, 4, 10, -1, 9, 12, 2, 10, 2, -.0002119999990100041, .11271899938583374, -.4165399968624115, 0, 3, 10, 16, 10, 8, -1, 15, 16, 5, 4, 2, 10, 20, 5, 4, 2, -.020597999915480614, .6054049730300903, .06246799975633621, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, .0373539999127388, -.18919000029563904, .46464699506759644, 0, 3, 12, 10, 6, 12, -1, 15, 10, 3, 6, 2, 12, 16, 3, 6, 2, .05727500095963478, .11565300077199936, -1.321300983428955, 0, 3, 6, 10, 6, 12, -1, 6, 10, 3, 6, 2, 9, 16, 3, 6, 2, .005102999974042177, -.2806150019168854, .19313399493694305, 0, 3, 16, 12, 6, 12, -1, 19, 12, 3, 6, 2, 16, 18, 3, 6, 2, -.05464499816298485, .7242850065231323, .07544799894094467, 0, 3, 2, 12, 6, 12, -1, 2, 12, 3, 6, 2, 5, 18, 3, 6, 2, .025349000468850136, -.19481800496578217, .46032801270484924, 0, 2, 10, 15, 6, 9, -1, 12, 15, 2, 9, 3, .024311000481247902, .15564100444316864, -.4991390109062195, 0, 2, 8, 15, 6, 9, -1, 10, 15, 2, 9, 3, .035962000489234924, -.05857300013303757, -1.5418399572372437, 0, 2, 14, 20, 10, 4, -1, 14, 20, 5, 4, 2, -.10000699758529663, -1.61000394821167, .11450500041246414, 0, 2, 0, 20, 10, 4, -1, 5, 20, 5, 4, 2, .08443599939346313, -.061406999826431274, -1.4673349857330322, 0, 2, 11, 17, 9, 6, -1, 11, 19, 9, 2, 3, .01594799943268299, .16287900507450104, -.11026400327682495, 0, 2, 3, 2, 14, 4, -1, 3, 4, 14, 2, 2, .033824000507593155, -.17932699620723724, .5721840262413025, 0, 2, 10, 1, 10, 4, -1, 10, 3, 10, 2, 2, -.06199600175023079, 4.651181221008301, .0945340022444725, 0, 2, 0, 15, 10, 4, -1, 5, 15, 5, 4, 2, .06987699866294861, -.16985900700092316, .8702899813652039, 0, 2, 19, 2, 3, 19, -1, 20, 2, 1, 19, 3, -.02791699953377247, .9104250073432922, .05682700127363205, 0, 2, 4, 12, 9, 8, -1, 7, 12, 3, 8, 3, -.012764000333845615, .2206670045852661, -.2776910066604614, -3.2573320865631104, 199, 0, 2, 4, 7, 5, 12, -1, 4, 11, 5, 4, 3, .021662000566720963, -.8986889719963074, .29436299204826355, 0, 2, 0, 1, 24, 3, -1, 8, 1, 8, 3, 3, .10044500231742859, -.3765920102596283, .6089100241661072, 0, 2, 6, 8, 12, 4, -1, 6, 10, 12, 2, 2, .026003999635577202, -.38128501176834106, .39217400550842285, 0, 2, 19, 3, 4, 10, -1, 19, 3, 2, 10, 2, .02844100072979927, -.1818230003118515, .5892720222473145, 0, 2, 0, 6, 9, 6, -1, 3, 6, 3, 6, 3, .038612000644207, -.22399599850177765, .6377999782562256, 0, 2, 18, 0, 6, 22, -1, 20, 0, 2, 22, 3, -.046594999730587006, .7081220149993896, -.14666199684143066, 0, 2, 0, 0, 6, 22, -1, 2, 0, 2, 22, 3, -.042791999876499176, .4768039882183075, -.2923319935798645, 0, 2, 5, 15, 19, 3, -1, 5, 16, 19, 1, 3, .0037960000336170197, -.18510299921035767, .5262669920921326, 0, 2, 10, 7, 4, 15, -1, 10, 12, 4, 5, 3, .04234899953007698, .03924499824643135, -.8919770121574402, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .019598999992012978, -.23358400166034698, .44146499037742615, 0, 2, 0, 21, 18, 3, -1, 0, 22, 18, 1, 3, .0008740000193938613, -.4606359899044037, .17689600586891174, 0, 2, 7, 3, 10, 15, -1, 7, 8, 10, 5, 3, -.004362999927252531, .33493199944496155, -.2989340126514435, 0, 2, 1, 7, 18, 3, -1, 1, 8, 18, 1, 3, .016973000019788742, -.16408699750900269, 1.5993679761886597, 0, 2, 8, 2, 9, 6, -1, 11, 2, 3, 6, 3, .03606399893760681, .22601699829101562, -.5318610072135925, 0, 2, 0, 10, 24, 14, -1, 0, 17, 24, 7, 2, -.07086499780416489, .15220500528812408, -.41914600133895874, 0, 3, 13, 9, 8, 10, -1, 17, 9, 4, 5, 2, 13, 14, 4, 5, 2, -.06307599693536758, -1.4874019622802734, .12953700125217438, 0, 2, 10, 5, 4, 9, -1, 12, 5, 2, 9, 2, .029670000076293945, -.19145900011062622, .9818490147590637, 0, 3, 13, 9, 8, 10, -1, 17, 9, 4, 5, 2, 13, 14, 4, 5, 2, .037873998284339905, .13459500670433044, -.5631629824638367, 0, 3, 7, 11, 10, 10, -1, 7, 11, 5, 5, 2, 12, 16, 5, 5, 2, -.033289000391960144, -1.0828030109405518, -.011504000052809715, 0, 3, 4, 13, 18, 4, -1, 13, 13, 9, 2, 2, 4, 15, 9, 2, 2, -.03160899877548218, -.5922449827194214, .13394799828529358, 0, 2, 0, 0, 19, 2, -1, 0, 1, 19, 1, 2, .0010740000288933516, -.49185800552368164, .09444600343704224, 0, 2, 0, 18, 24, 6, -1, 8, 18, 8, 6, 3, -.07155600190162659, .5971019864082336, -.03955300152301788, 0, 2, 6, 4, 8, 16, -1, 6, 12, 8, 8, 2, -.08117000013589859, -1.1817820072174072, -.02825400047004223, 0, 2, 7, 8, 10, 4, -1, 7, 10, 10, 2, 2, .004486000165343285, -.6102809906005859, .22619099915027618, 0, 2, 0, 3, 6, 9, -1, 0, 6, 6, 3, 3, -.04217600077390671, -1.1435619592666626, -.029001999646425247, 0, 2, 13, 15, 7, 9, -1, 13, 18, 7, 3, 3, -.06564000248908997, -1.6470279693603516, .12810300290584564, 0, 3, 3, 18, 12, 6, -1, 3, 18, 6, 3, 2, 9, 21, 6, 3, 2, .018188999965786934, -.31149399280548096, .25739601254463196, 0, 2, 12, 14, 6, 9, -1, 12, 17, 6, 3, 3, -.05152000114321709, -.6920689940452576, .1527079939842224, 0, 2, 2, 15, 15, 8, -1, 2, 19, 15, 4, 2, -.047150999307632446, -.7186830043792725, .002687999978661537, 0, 2, 9, 6, 6, 16, -1, 9, 14, 6, 8, 2, .017488999292254448, .2237119972705841, -.5538179874420166, 0, 2, 6, 6, 7, 12, -1, 6, 10, 7, 4, 3, -.02526400052011013, 1.0319819450378418, -.1749649941921234, 0, 2, 14, 6, 6, 9, -1, 14, 9, 6, 3, 3, -.040745001286268234, .4496159851551056, .03934900090098381, 0, 2, 5, 14, 6, 9, -1, 5, 17, 6, 3, 3, -.03766699880361557, -.8547570109367371, -.012463999912142754, 0, 2, 10, 8, 6, 9, -1, 12, 8, 2, 9, 3, -.013411000370979309, .5784559845924377, -.017467999830842018, 0, 3, 6, 6, 4, 18, -1, 6, 6, 2, 9, 2, 8, 15, 2, 9, 2, -7899999764049426e-20, -.3774920105934143, .13961799442768097, 0, 3, 14, 9, 6, 12, -1, 17, 9, 3, 6, 2, 14, 15, 3, 6, 2, -.011415000073611736, -.2618660032749176, .2371249943971634, 0, 3, 4, 9, 6, 12, -1, 4, 9, 3, 6, 2, 7, 15, 3, 6, 2, .03720000013709068, -.02862600050866604, -1.2945239543914795, 0, 2, 14, 15, 9, 6, -1, 14, 17, 9, 2, 3, .0034050000831484795, .20531399548053741, -.18747499585151672, 0, 3, 0, 20, 18, 4, -1, 0, 20, 9, 2, 2, 9, 22, 9, 2, 2, -.02248300053179264, .6702719926834106, -.19594000279903412, 0, 2, 13, 18, 9, 6, -1, 13, 20, 9, 2, 3, .023274999111890793, .17405399680137634, -.3274630010128021, 0, 2, 2, 18, 9, 6, -1, 2, 20, 9, 2, 3, -.013917000032961369, -.8395429849624634, -.0063760001212358475, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, .007542999926954508, -.03419499844312668, .5899819731712341, 0, 2, 0, 16, 18, 3, -1, 0, 17, 18, 1, 3, -.01153900008648634, .42142799496650696, -.2351049929857254, 0, 3, 19, 2, 4, 22, -1, 21, 2, 2, 11, 2, 19, 13, 2, 11, 2, .05250199884176254, .06930399686098099, .7322649955749512, 0, 3, 1, 2, 4, 22, -1, 1, 2, 2, 11, 2, 3, 13, 2, 11, 2, .05271599814295769, -.15688100457191467, 1.090728998184204, 0, 2, 15, 0, 2, 24, -1, 15, 0, 1, 24, 2, -.011726000346243382, -.7093430161476135, .16828800737857819, 0, 2, 3, 20, 16, 4, -1, 11, 20, 8, 4, 2, .09594599902629852, -.16192899644374847, 1.0072519779205322, 0, 3, 11, 6, 4, 18, -1, 13, 6, 2, 9, 2, 11, 15, 2, 9, 2, -.01587199978530407, .39008399844169617, -.053777001798152924, 0, 3, 7, 9, 10, 14, -1, 7, 9, 5, 7, 2, 12, 16, 5, 7, 2, .034818001091480255, .017179999500513077, -.9394180178642273, 0, 2, 14, 6, 6, 9, -1, 14, 9, 6, 3, 3, .03479199856519699, .0504629984498024, .5446569919586182, 0, 2, 3, 6, 7, 9, -1, 3, 9, 7, 3, 3, .016284000128507614, -.26981300115585327, .40365299582481384, 0, 3, 20, 4, 4, 20, -1, 22, 4, 2, 10, 2, 20, 14, 2, 10, 2, -.04431900009512901, .843999981880188, .03288299962878227, 0, 2, 7, 6, 6, 9, -1, 7, 9, 6, 3, 3, -.005568999797105789, .15309399366378784, -.3495979905128479, 0, 3, 7, 0, 10, 14, -1, 12, 0, 5, 7, 2, 7, 7, 5, 7, 2, -.06584200263023376, -.9271119832992554, .16800999641418457, 0, 2, 2, 1, 18, 6, -1, 11, 1, 9, 6, 2, -.07333700358867645, .5161449909210205, -.20236000418663025, 0, 2, 15, 0, 2, 24, -1, 15, 0, 1, 24, 2, .016450000926852226, .139505997300148, -.4930129945278168, 0, 2, 7, 0, 2, 24, -1, 8, 0, 1, 24, 2, -.009263000451028347, -.9010199904441833, -.016116000711917877, 0, 2, 13, 12, 6, 7, -1, 13, 12, 3, 7, 2, .005913999862968922, .1985819935798645, -.16731299459934235, 0, 2, 5, 12, 6, 7, -1, 8, 12, 3, 7, 2, -.000846999988425523, .09400500357151031, -.415708988904953, 0, 2, 3, 5, 18, 19, -1, 9, 5, 6, 19, 3, .20532900094985962, -.06002200022339821, .7099360227584839, 0, 2, 5, 6, 9, 6, -1, 8, 6, 3, 6, 3, -.0168830007314682, .24392199516296387, -.3055180013179779, 0, 2, 9, 5, 9, 6, -1, 12, 5, 3, 6, 3, -.01911100000143051, .6122990250587463, .024252999573946, 0, 3, 3, 16, 10, 8, -1, 3, 16, 5, 4, 2, 8, 20, 5, 4, 2, -.02596299909055233, .9076499938964844, -.16722099483013153, 0, 2, 19, 8, 5, 15, -1, 19, 13, 5, 5, 3, -.021762000396847725, -.31384700536727905, .2013459950685501, 0, 2, 0, 8, 5, 15, -1, 0, 13, 5, 5, 3, -.024119999259710312, -.6658840179443359, .007455999962985516, 0, 3, 20, 4, 4, 20, -1, 22, 4, 2, 10, 2, 20, 14, 2, 10, 2, .047129999846220016, .05953399837017059, .8780450224876404, 0, 3, 0, 4, 4, 20, -1, 0, 4, 2, 10, 2, 2, 14, 2, 10, 2, -.04598499834537506, .8006799817085266, -.17252300679683685, 0, 2, 7, 7, 10, 4, -1, 7, 7, 5, 4, 2, .026507999747991562, .1877409964799881, -.6085060238838196, 0, 2, 4, 19, 14, 4, -1, 11, 19, 7, 4, 2, -.048615001142024994, .5864409804344177, -.19427700340747833, 0, 2, 10, 11, 12, 3, -1, 10, 11, 6, 3, 2, -.01856200024485588, -.2558790147304535, .1632619947195053, 0, 2, 0, 1, 24, 3, -1, 0, 2, 24, 1, 3, .012678000144660473, -.014228000305593014, -.7673810124397278, 0, 3, 7, 2, 14, 20, -1, 14, 2, 7, 10, 2, 7, 12, 7, 10, 2, -.0011919999960809946, .2049500048160553, -.11404299736022949, 0, 2, 0, 13, 6, 9, -1, 2, 13, 2, 9, 3, -.04908899962902069, -1.074084997177124, -.038940999656915665, 0, 2, 13, 0, 4, 19, -1, 13, 0, 2, 19, 2, -.017436999827623367, -.5797380208969116, .1858450025320053, 0, 2, 1, 11, 14, 3, -1, 8, 11, 7, 3, 2, -.014770000241696835, -.6615030169487, .005311999935656786, 0, 3, 7, 1, 16, 20, -1, 15, 1, 8, 10, 2, 7, 11, 8, 10, 2, -.22905200719833374, -.48305100202560425, .12326399981975555, 0, 2, 0, 10, 21, 9, -1, 7, 10, 7, 9, 3, -.12707099318504333, .5745260119438171, -.19420400261878967, 0, 2, 6, 19, 15, 5, -1, 11, 19, 5, 5, 3, .010339000262320042, -.054641999304294586, .24501800537109375, 0, 2, 8, 10, 6, 6, -1, 11, 10, 3, 6, 2, .006901000160723925, .12180600315332413, -.38797399401664734, 0, 3, 7, 1, 16, 20, -1, 15, 1, 8, 10, 2, 7, 11, 8, 10, 2, .29025399684906006, .1096619963645935, -30, 0, 3, 1, 1, 16, 20, -1, 1, 1, 8, 10, 2, 9, 11, 8, 10, 2, -.23804999887943268, -1.735267996788025, -.06380999833345413, 0, 2, 16, 4, 3, 12, -1, 16, 10, 3, 6, 2, .062481001019477844, .13523000478744507, -.7030109763145447, 0, 2, 5, 4, 3, 12, -1, 5, 10, 3, 6, 2, .0047109997831285, -.46984100341796875, .06034199893474579, 0, 3, 7, 6, 10, 8, -1, 12, 6, 5, 4, 2, 7, 10, 5, 4, 2, -.02781599946320057, .6980760097503662, .0013719999697059393, 0, 2, 4, 9, 6, 6, -1, 4, 12, 6, 3, 2, -.017020000144839287, 1.6870440244674683, -.1431480050086975, 0, 2, 6, 5, 12, 4, -1, 6, 7, 12, 2, 2, -.049754999577999115, .7949770092964172, .0007719999994151294, 0, 2, 9, 2, 5, 15, -1, 9, 7, 5, 5, 3, -.07473299652338028, -1.0132360458374023, -.019388999789953232, 0, 2, 15, 0, 9, 6, -1, 15, 2, 9, 2, 3, .032009001821279526, .14412100613117218, -.42139101028442383, 0, 2, 6, 0, 11, 10, -1, 6, 5, 11, 5, 2, -.09446399658918381, .5068259835243225, -.20478899776935577, 0, 2, 12, 7, 4, 12, -1, 12, 13, 4, 6, 2, -.015426999889314175, -.1581130027770996, .17806899547576904, 0, 2, 7, 2, 9, 4, -1, 7, 4, 9, 2, 2, -.00405400013551116, -.5436670184135437, .031235000118613243, 0, 2, 6, 0, 13, 6, -1, 6, 2, 13, 2, 3, .003008000086992979, -.17376799881458282, .3044170141220093, 0, 3, 10, 6, 4, 18, -1, 10, 6, 2, 9, 2, 12, 15, 2, 9, 2, -.010091999545693398, .2510380148887634, -.262241005897522, 0, 2, 10, 8, 6, 9, -1, 12, 8, 2, 9, 3, -.03881800174713135, .9322670102119446, .07265999913215637, 0, 2, 3, 18, 10, 6, -1, 3, 20, 10, 2, 3, .034651998430490494, -.033934999257326126, -.857079029083252, 0, 2, 4, 14, 20, 3, -1, 4, 15, 20, 1, 3, -.004672999959439039, .3496930003166199, -.048517998307943344, 0, 2, 2, 15, 9, 6, -1, 2, 17, 9, 2, 3, .0006849999772384763, .06657300144433975, -.4497379958629608, 0, 2, 13, 0, 4, 19, -1, 13, 0, 2, 19, 2, .03531700000166893, .14275799691677094, -.46726399660110474, 0, 2, 7, 0, 4, 19, -1, 9, 0, 2, 19, 2, -.023569999262690544, -1.028607964515686, -.045288000255823135, 0, 2, 1, 4, 22, 2, -1, 1, 5, 22, 1, 2, -.0019109999993816018, -.19652199745178223, .2866100072860718, 0, 2, 0, 0, 9, 6, -1, 0, 2, 9, 2, 3, -.016659000888466835, -.7753220200538635, -.008328000083565712, 0, 2, 0, 0, 24, 18, -1, 0, 9, 24, 9, 2, .6606220006942749, .13232499361038208, -3.526668071746826, 0, 2, 3, 2, 16, 8, -1, 3, 6, 16, 4, 2, .10970599949359894, -.15547199547290802, 1.4674140214920044, 0, 2, 3, 6, 18, 6, -1, 3, 8, 18, 2, 3, .01350099965929985, .15233400464057922, -1.3020930290222168, 0, 2, 3, 1, 6, 10, -1, 5, 1, 2, 10, 3, -.022871999070048332, -.7132599949836731, -.008704000152647495, 0, 2, 13, 0, 9, 6, -1, 16, 0, 3, 6, 3, -.0818210020661354, 1.1127580404281616, .0832199975848198, 0, 2, 2, 0, 9, 6, -1, 5, 0, 3, 6, 3, -.05272800102829933, .9316509962081909, -.17103999853134155, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.025242000818252563, -.19733799993991852, .2535940110683441, 0, 2, 6, 0, 7, 10, -1, 6, 5, 7, 5, 2, -.04381899908185005, .41815200448036194, -.24585500359535217, 0, 3, 2, 2, 20, 4, -1, 12, 2, 10, 2, 2, 2, 4, 10, 2, 2, -.018188999965786934, -.5174319744110107, .2017419934272766, 0, 2, 2, 11, 19, 3, -1, 2, 12, 19, 1, 3, .023466000333428383, -.04307100176811218, -1.0636579990386963, 0, 2, 10, 8, 6, 9, -1, 12, 8, 2, 9, 3, .03421600162982941, .05378099903464317, .4970720112323761, 0, 2, 8, 8, 6, 9, -1, 10, 8, 2, 9, 3, .025692999362945557, -.2380010038614273, .4165149927139282, 0, 2, 13, 8, 4, 9, -1, 13, 8, 2, 9, 2, -.026565000414848328, -.885748028755188, .1336590051651001, 0, 2, 3, 11, 9, 9, -1, 6, 11, 3, 9, 3, .06094200164079666, -.2066970020532608, .5830900073051453, 0, 2, 3, 9, 18, 5, -1, 9, 9, 6, 5, 3, .14474500715732574, .13282300531864166, -3.144934892654419, 0, 2, 2, 4, 2, 20, -1, 2, 14, 2, 10, 2, .05341099947690964, -.17325200140476227, .6919069886207581, 0, 2, 14, 17, 8, 6, -1, 14, 20, 8, 3, 2, .011408000253140926, .05482200160622597, .30240398645401, 0, 2, 3, 21, 18, 2, -1, 3, 22, 18, 1, 2, -.002317999955266714, .15820899605751038, -.31973201036453247, 0, 2, 5, 4, 15, 6, -1, 10, 4, 5, 6, 3, -.029695000499486923, .7127479910850525, .058136001229286194, 0, 2, 2, 15, 12, 6, -1, 2, 17, 12, 2, 3, .027249999344348907, -.15754100680351257, .9214379787445068, 0, 2, 17, 8, 6, 9, -1, 17, 11, 6, 3, 3, -.0036200000904500484, -.3454839885234833, .20220999419689178, 0, 3, 2, 12, 20, 4, -1, 2, 12, 10, 2, 2, 12, 14, 10, 2, 2, -.012578999623656273, -.5565029978752136, .020388999953866005, 0, 2, 0, 17, 24, 6, -1, 0, 19, 24, 2, 3, -.08884900063276291, -3.6100010871887207, .13164199888706207, 0, 2, 7, 16, 9, 4, -1, 7, 18, 9, 2, 2, -.01925699971616268, .5190899968147278, -.1928430050611496, 0, 3, 15, 1, 4, 22, -1, 17, 1, 2, 11, 2, 15, 12, 2, 11, 2, -.016666999086737633, -.08749999850988388, .15812499821186066, 0, 3, 5, 1, 4, 22, -1, 5, 1, 2, 11, 2, 7, 12, 2, 11, 2, .012931999750435352, .0274059996008873, -.551239013671875, 0, 2, 11, 13, 8, 9, -1, 11, 16, 8, 3, 3, -.013431999832391739, .2345779985189438, -.04323500022292137, 0, 2, 6, 1, 6, 9, -1, 8, 1, 2, 9, 3, .018810000270605087, -.039680998772382736, -.9437329769134521, 0, 2, 11, 4, 3, 18, -1, 11, 10, 3, 6, 3, -.006434999871999025, .4570370018482208, -.004052000120282173, 0, 3, 5, 8, 12, 6, -1, 5, 8, 6, 3, 2, 11, 11, 6, 3, 2, -.0242490004748106, -.7624800205230713, -.019857000559568405, 0, 2, 15, 7, 5, 8, -1, 15, 11, 5, 4, 2, -.02966799959540367, -3.741250991821289, .11250600218772888, 0, 2, 4, 7, 5, 8, -1, 4, 11, 5, 4, 2, .005115000065416098, -.6378179788589478, .011223999783396721, 0, 3, 12, 6, 6, 12, -1, 15, 6, 3, 6, 2, 12, 12, 3, 6, 2, -.005781999789178371, .1937440037727356, -.08204200118780136, 0, 3, 6, 6, 6, 12, -1, 6, 6, 3, 6, 2, 9, 12, 3, 6, 2, .016606999561190605, -.16192099452018738, 1.133499026298523, 0, 3, 5, 9, 14, 8, -1, 12, 9, 7, 4, 2, 5, 13, 7, 4, 2, .038228001445531845, .021105000749230385, .7626420259475708, 0, 2, 9, 1, 3, 14, -1, 9, 8, 3, 7, 2, -.05709400027990341, -1.6974929571151733, -.059762001037597656, 0, 2, 12, 6, 6, 12, -1, 12, 10, 6, 4, 3, -.05388300120830536, 1.1850190162658691, .09096699953079224, 0, 3, 4, 5, 4, 18, -1, 4, 5, 2, 9, 2, 6, 14, 2, 9, 2, -.0026110000908374786, -.4094119966030121, .08382099866867065, 0, 2, 4, 6, 16, 18, -1, 4, 12, 16, 6, 3, .29714399576187134, .15529899299144745, -1.0995409488677979, 0, 2, 5, 4, 7, 20, -1, 5, 14, 7, 10, 2, -.08906300365924835, .48947200179100037, -.20041200518608093, 0, 2, 14, 8, 8, 12, -1, 14, 14, 8, 6, 2, -.05619300156831741, -.2458139955997467, .14365500211715698, 0, 3, 9, 10, 6, 14, -1, 9, 10, 3, 7, 2, 12, 17, 3, 7, 2, .037004999816417694, -.04816899821162224, -1.2310709953308105, 0, 2, 9, 5, 9, 6, -1, 12, 5, 3, 6, 3, -.008484000340104103, .4337260127067566, .013779999688267708, 0, 2, 9, 4, 3, 18, -1, 10, 4, 1, 18, 3, -.002437999937683344, .1894969940185547, -.32294198870658875, 0, 3, 1, 4, 22, 14, -1, 12, 4, 11, 7, 2, 1, 11, 11, 7, 2, -.0716399997472763, -.4397900104522705, .22730199992656708, 0, 2, 2, 7, 18, 2, -1, 2, 8, 18, 1, 2, .005226000212132931, -.20548400282859802, .5093330144882202, 0, 2, 12, 6, 6, 12, -1, 12, 10, 6, 4, 3, -.006136000156402588, .31157198548316956, .07068099826574326, 0, 2, 6, 5, 9, 7, -1, 9, 5, 3, 7, 3, .015595000237226486, -.3093479871749878, .15627700090408325, 0, 2, 12, 7, 4, 12, -1, 12, 13, 4, 6, 2, .025995999574661255, .13821600377559662, -.17616599798202515, 0, 2, 8, 7, 4, 12, -1, 8, 13, 4, 6, 2, -.012085000053048134, -.5107020139694214, .05844099819660187, 0, 2, 7, 2, 10, 22, -1, 7, 13, 10, 11, 2, -.06783600151538849, .4775710105895996, -.0714460015296936, 0, 2, 0, 1, 3, 20, -1, 1, 1, 1, 20, 3, -.014715000055730343, .4523890018463135, -.1986140012741089, 0, 3, 4, 13, 18, 4, -1, 13, 13, 9, 2, 2, 4, 15, 9, 2, 2, .025118999183177948, .12954899668693542, -.862663984298706, 0, 3, 2, 13, 18, 4, -1, 2, 13, 9, 2, 2, 11, 15, 9, 2, 2, .01882600039243698, -.04157000035047531, -1.1354700326919556, 0, 2, 15, 15, 9, 6, -1, 15, 17, 9, 2, 3, -.021263999864459038, -.34738001227378845, .1577949970960617, 0, 2, 0, 15, 9, 6, -1, 0, 17, 9, 2, 3, .009460999630391598, .004863999783992767, -.6165480017662048, 0, 3, 6, 0, 18, 24, -1, 15, 0, 9, 12, 2, 6, 12, 9, 12, 2, .22957700490951538, .08137299865484238, .6984140276908875, 0, 2, 6, 6, 6, 12, -1, 6, 10, 6, 4, 3, -.038061998784542084, 1.1616369485855103, -.14976699650287628, 0, 2, 8, 7, 10, 4, -1, 8, 9, 10, 2, 2, -.013484999537467957, -.32036399841308594, .17365099489688873, 0, 3, 1, 9, 18, 6, -1, 1, 9, 9, 3, 2, 10, 12, 9, 3, 2, .03623899817466736, -.18158499896526337, .6195669770240784, 0, 2, 6, 6, 18, 3, -1, 6, 7, 18, 1, 3, .00672100018709898, .0007960000075399876, .4244140088558197, 0, 2, 7, 7, 9, 8, -1, 10, 7, 3, 8, 3, .09652599692344666, -.14696800708770752, 1.252568006515503, 0, 2, 10, 12, 6, 12, -1, 12, 12, 2, 12, 3, -.03565699979662895, -.3978169858455658, .1419139951467514, 0, 2, 3, 14, 18, 3, -1, 3, 15, 18, 1, 3, .010772000066936016, -.1819400042295456, .5976219773292542, 0, 2, 15, 17, 9, 7, -1, 18, 17, 3, 7, 3, .07927999645471573, .14642499387264252, -.7883689999580383, 0, 2, 1, 12, 10, 6, -1, 1, 14, 10, 2, 3, .03284100070595741, -.062408000230789185, -1.4227490425109863, 0, 2, 15, 17, 9, 7, -1, 18, 17, 3, 7, 3, -.02778100036084652, .34033098816871643, .03067000024020672, 0, 2, 10, 3, 3, 19, -1, 11, 3, 1, 19, 3, -.0040339999832212925, .3108470141887665, -.2259570062160492, 0, 2, 15, 17, 9, 7, -1, 18, 17, 3, 7, 3, .007426000200212002, -.03893699869513512, .3170210123062134, 0, 2, 6, 1, 11, 9, -1, 6, 4, 11, 3, 3, .1121399998664856, -.17578299343585968, .6505659818649292, 0, 2, 15, 17, 9, 7, -1, 18, 17, 3, 7, 3, -.11878100037574768, -1.0092990398406982, .11069700121879578, 0, 2, 6, 5, 11, 6, -1, 6, 8, 11, 3, 2, -.04158499836921692, -.5380640029907227, .019905000925064087, 0, 2, 16, 7, 8, 5, -1, 16, 7, 4, 5, 2, -.027966000139713287, .4814319908618927, .033590998500585556, 0, 2, 2, 4, 20, 19, -1, 12, 4, 10, 19, 2, -.12506400048732758, .2635219991207123, -.2573789954185486, 0, 2, 2, 1, 21, 6, -1, 9, 1, 7, 6, 3, .23666900396347046, .03650800138711929, .9065560102462769, 0, 3, 6, 5, 12, 14, -1, 6, 5, 6, 7, 2, 12, 12, 6, 7, 2, -.029475999996066093, -.600488007068634, .009588000364601612, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, .03779299929738045, .1550620049238205, -.9573349952697754, 0, 2, 2, 11, 8, 5, -1, 6, 11, 4, 5, 2, .0720440000295639, -.14525899291038513, 1.3676730394363403, 0, 2, 16, 7, 8, 5, -1, 16, 7, 4, 5, 2, .009775999933481216, .012915999628603458, .21640899777412415, 0, 2, 0, 7, 8, 5, -1, 4, 7, 4, 5, 2, .05215400084853172, -.016359999775886536, -.8835629820823669, 0, 2, 15, 17, 9, 7, -1, 18, 17, 3, 7, 3, -.04379099979996681, .3582960069179535, .06513100117444992, 0, 3, 8, 6, 8, 10, -1, 8, 6, 4, 5, 2, 12, 11, 4, 5, 2, -.0383789986371994, 1.1961040496826172, -.14971500635147095, 0, 2, 15, 15, 9, 9, -1, 18, 15, 3, 9, 3, -.09883899986743927, -.618340015411377, .12786200642585754, 0, 2, 0, 15, 9, 9, -1, 3, 15, 3, 9, 3, -.12190700322389603, -1.827612042427063, -.06486299633979797, 0, 2, 12, 10, 9, 7, -1, 15, 10, 3, 7, 3, -.11981700360774994, -30, .11323300004005432, 0, 2, 3, 10, 9, 7, -1, 6, 10, 3, 7, 3, .030910000205039978, -.23934000730514526, .3633289933204651, 0, 3, 13, 15, 10, 8, -1, 18, 15, 5, 4, 2, 13, 19, 5, 4, 2, .010800999589264393, -.03514000028371811, .2770789861679077, 0, 3, 0, 1, 6, 12, -1, 0, 1, 3, 6, 2, 3, 7, 3, 6, 2, .05684499815106392, -.15524299442768097, 1.0802700519561768, 0, 3, 10, 0, 6, 12, -1, 13, 0, 3, 6, 2, 10, 6, 3, 6, 2, .001028000027872622, -.0612029992043972, .20508000254631042, 0, 3, 7, 0, 10, 12, -1, 7, 0, 5, 6, 2, 12, 6, 5, 6, 2, -.02827399969100952, -.6477800011634827, .023917000740766525, 0, 2, 4, 1, 16, 8, -1, 4, 1, 8, 8, 2, -.16013599932193756, 1.089205026626587, .058389000594615936, 0, 2, 0, 21, 19, 3, -1, 0, 22, 19, 1, 3, .00496299983933568, -.2580629885196686, .20834599435329437, 0, 3, 6, 9, 18, 4, -1, 15, 9, 9, 2, 2, 6, 11, 9, 2, 2, .0469370000064373, .1388629972934723, -1.5662620067596436, 0, 2, 3, 4, 9, 6, -1, 3, 6, 9, 2, 3, .024286000058054924, -.20728300511837006, .5243099927902222, 0, 2, 9, 1, 6, 15, -1, 9, 6, 6, 5, 3, .07020200043916702, .14796899259090424, -1.309509038925171, 0, 2, 5, 9, 6, 6, -1, 8, 9, 3, 6, 2, .009812000207602978, .02790600061416626, -.5086460113525391, 0, 2, 5, 1, 14, 9, -1, 5, 4, 14, 3, 3, -.05620099976658821, 1.2618130445480347, .06380199640989304, 0, 3, 3, 0, 8, 20, -1, 3, 0, 4, 10, 2, 7, 10, 4, 10, 2, .10982800275087357, -.12850099802017212, 3.0776169300079346, -3.370300054550171, 211, 0, 2, 5, 0, 7, 9, -1, 5, 3, 7, 3, 3, .020910000428557396, -.6855940222740173, .3898429870605469, 0, 2, 6, 6, 12, 5, -1, 10, 6, 4, 5, 3, .0350320003926754, -.47724398970603943, .45027199387550354, 0, 2, 0, 1, 8, 14, -1, 4, 1, 4, 14, 2, .039799001067876816, -.47011101245880127, .4270249903202057, 0, 2, 2, 12, 22, 4, -1, 2, 14, 22, 2, 2, -.0048409998416900635, .2561430037021637, -.6655629873275757, 0, 2, 8, 17, 6, 6, -1, 8, 20, 6, 3, 2, .002343999920412898, -.4808349907398224, .2801379859447479, 0, 2, 18, 1, 6, 7, -1, 18, 1, 3, 7, 2, .0253129992634058, -.23948200047016144, .4419179856777191, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.03219300135970116, .7608669996261597, -.2505910098552704, 0, 2, 4, 6, 17, 18, -1, 4, 12, 17, 6, 3, .07540900260210037, -.3497459888458252, .3438029885292053, 0, 3, 6, 0, 12, 6, -1, 6, 0, 6, 3, 2, 12, 3, 6, 3, 2, -.01846900023519993, -.7908560037612915, .03478800132870674, 0, 3, 4, 7, 18, 4, -1, 13, 7, 9, 2, 2, 4, 9, 9, 2, 2, -.012802000157535076, .4710780084133148, -.060006000101566315, 0, 2, 4, 12, 10, 6, -1, 4, 14, 10, 2, 3, -.026598000898957253, .6711609959602356, -.242575004696846, 0, 3, 7, 9, 10, 12, -1, 12, 9, 5, 6, 2, 7, 15, 5, 6, 2, .021988999098539352, .24717499315738678, -.4830169975757599, 0, 2, 0, 1, 24, 3, -1, 8, 1, 8, 3, 3, .14654099941253662, -.21504099667072296, .7205590009689331, 0, 2, 13, 11, 6, 6, -1, 13, 11, 3, 6, 2, .0035310001112520695, .2793099880218506, -.3433989882469177, 0, 2, 5, 11, 6, 6, -1, 8, 11, 3, 6, 2, .00940100010484457, .05586199834942818, -.8214359879493713, 0, 2, 3, 10, 19, 3, -1, 3, 11, 19, 1, 3, -.008639000356197357, -.9962059855461121, .1887499988079071, 0, 2, 0, 2, 6, 9, -1, 0, 5, 6, 3, 3, -.03919300064444542, -1.1945559978485107, -.029198000207543373, 0, 2, 14, 16, 10, 6, -1, 14, 18, 10, 2, 3, .024855000898241997, .14987599849700928, -.5413780212402344, 0, 2, 0, 16, 10, 6, -1, 0, 18, 10, 2, 3, -.034995000809431076, -1.4210180044174194, -.04231400042772293, 0, 2, 14, 13, 9, 6, -1, 14, 15, 9, 2, 3, -.018378999084234238, -.28242599964141846, .15581800043582916, 0, 2, 0, 16, 18, 3, -1, 0, 17, 18, 1, 3, -.013592000119388103, .4731709957122803, -.2193720042705536, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, .006262999959290028, -.059714000672101974, .6062589883804321, 0, 2, 0, 18, 9, 6, -1, 0, 20, 9, 2, 3, -.018478000536561012, -.8564720153808594, -.013783999718725681, 0, 2, 14, 13, 9, 6, -1, 14, 15, 9, 2, 3, .01423600036650896, .1665479987859726, -.2771399915218353, 0, 2, 6, 2, 6, 9, -1, 8, 2, 2, 9, 3, -.0325470007956028, -1.1728240251541138, -.040185000747442245, 0, 2, 15, 8, 4, 12, -1, 15, 8, 2, 12, 2, -.002641000086441636, .2651430070400238, -.05634300038218498, 0, 2, 8, 13, 8, 8, -1, 8, 17, 8, 4, 2, -.0008779999916441739, .036556001752614975, -.5507519841194153, 0, 2, 4, 20, 18, 3, -1, 10, 20, 6, 3, 3, .0473719984292984, -.04261400178074837, .48194900155067444, 0, 2, 5, 8, 4, 12, -1, 7, 8, 2, 12, 2, -.007079000119119883, .2869899868965149, -.32923001050949097, 0, 2, 7, 7, 12, 3, -1, 7, 7, 6, 3, 2, -.04314599931240082, -1.4065419435501099, .12836399674415588, 0, 2, 10, 6, 4, 9, -1, 12, 6, 2, 9, 2, .02059200033545494, -.21435299515724182, .5398179888725281, 0, 2, 5, 20, 18, 3, -1, 11, 20, 6, 3, 3, -.022367000579833984, .33718299865722656, .045212000608444214, 0, 2, 1, 20, 18, 3, -1, 7, 20, 6, 3, 3, .050039999186992645, -.2512170076370239, .4175049960613251, 0, 3, 18, 1, 6, 20, -1, 21, 1, 3, 10, 2, 18, 11, 3, 10, 2, .06179499998688698, .040084999054670334, .687798023223877, 0, 3, 0, 1, 6, 20, -1, 0, 1, 3, 10, 2, 3, 11, 3, 10, 2, -.04186199977993965, .530273973941803, -.22901999950408936, 0, 3, 13, 3, 4, 18, -1, 15, 3, 2, 9, 2, 13, 12, 2, 9, 2, -.003195999888703227, .2516149878501892, -.215146005153656, 0, 2, 0, 2, 6, 12, -1, 0, 6, 6, 4, 3, .024255000054836273, .00723200011998415, -.7251909971237183, 0, 3, 12, 9, 12, 6, -1, 18, 9, 6, 3, 2, 12, 12, 6, 3, 2, -.01730399951338768, -.4995819926261902, .18394500017166138, 0, 3, 7, 3, 4, 18, -1, 7, 3, 2, 9, 2, 9, 12, 2, 9, 2, -.004147000145167112, .08521199971437454, -.4636470079421997, 0, 2, 14, 0, 6, 9, -1, 16, 0, 2, 9, 3, -.01436999998986721, -.5225890278816223, .2389259934425354, 0, 3, 0, 9, 12, 6, -1, 0, 9, 6, 3, 2, 6, 12, 6, 3, 2, -.009039999917149544, -.6325039863586426, .03255100175738335, 0, 3, 14, 4, 8, 20, -1, 18, 4, 4, 10, 2, 14, 14, 4, 10, 2, -.12373100221157074, 1.2856210470199585, .07654500007629395, 0, 3, 2, 4, 8, 20, -1, 2, 4, 4, 10, 2, 6, 14, 4, 10, 2, -.08222199976444244, .8320819735527039, -.18590599298477173, 0, 2, 14, 13, 9, 6, -1, 14, 15, 9, 2, 3, .06565900146961212, .11298800259828568, -30, 0, 2, 1, 13, 9, 6, -1, 1, 15, 9, 2, 3, -.03158299997448921, -1.3485900163650513, -.04709700122475624, 0, 2, 3, 15, 18, 3, -1, 9, 15, 6, 3, 3, -.07963600009679794, -1.3533639907836914, .15668800473213196, 0, 2, 5, 13, 9, 6, -1, 5, 15, 9, 2, 3, -.018880000337958336, .4030030071735382, -.2514890134334564, 0, 2, 5, 0, 18, 3, -1, 5, 1, 18, 1, 3, -.005014999769628048, -.26287099719047546, .18582500517368317, 0, 2, 8, 2, 6, 7, -1, 11, 2, 3, 7, 2, -.012218000367283821, .5869240164756775, -.19427700340747833, 0, 2, 9, 1, 9, 6, -1, 12, 1, 3, 6, 3, .0012710000155493617, -.1668899953365326, .23006899654865265, 0, 2, 6, 1, 9, 6, -1, 9, 1, 3, 6, 3, .029743999242782593, .012520000338554382, -.6672359704971313, 0, 3, 5, 6, 14, 6, -1, 12, 6, 7, 3, 2, 5, 9, 7, 3, 2, .028175000101327896, -.01706000044941902, .6457939743995667, 0, 2, 8, 2, 6, 13, -1, 10, 2, 2, 13, 3, .030345000326633453, -.24178700149059296, .3487890064716339, 0, 3, 6, 11, 12, 6, -1, 12, 11, 6, 3, 2, 6, 14, 6, 3, 2, -.017325999215245247, -.5359939932823181, .2099599987268448, 0, 2, 3, 1, 18, 15, -1, 9, 1, 6, 15, 3, -.08417800068855286, .7509329915046692, -.17593200504779816, 0, 2, 13, 0, 6, 7, -1, 13, 0, 3, 7, 2, .007495000027120113, -.1618809998035431, .3065750002861023, 0, 2, 3, 3, 16, 6, -1, 3, 6, 16, 3, 2, .056494999676942825, -.1731880009174347, 1.001615047454834, 0, 2, 12, 1, 3, 12, -1, 12, 7, 3, 6, 2, -.005293999798595905, .23417599499225616, -.06534700095653534, 0, 2, 7, 7, 6, 9, -1, 9, 7, 2, 9, 3, -.014945000410079956, .25018900632858276, -.30591198801994324, 0, 2, 13, 0, 4, 24, -1, 13, 0, 2, 24, 2, .05491900071501732, .1312199980020523, -.9376509785652161, 0, 2, 7, 0, 4, 24, -1, 9, 0, 2, 24, 2, -.019721999764442444, -.8397849798202515, -.023473000153899193, 0, 2, 11, 9, 5, 12, -1, 11, 13, 5, 4, 3, -.06715899705886841, 2.3586840629577637, .0829709991812706, 0, 2, 7, 15, 9, 6, -1, 7, 17, 9, 2, 3, -.014325999654829502, .1881449967622757, -.31221601366996765, 0, 2, 5, 7, 18, 6, -1, 5, 9, 18, 2, 3, .029841000214219093, .1482509970664978, -.8468170166015625, 0, 2, 8, 9, 5, 12, -1, 8, 13, 5, 4, 3, .05188300088047981, -.043731000274419785, -1.3366169929504395, 0, 2, 4, 17, 17, 6, -1, 4, 19, 17, 2, 3, .041127000004053116, .17660099267959595, -.6090409755706787, 0, 3, 0, 3, 18, 14, -1, 0, 3, 9, 7, 2, 9, 10, 9, 7, 2, -.1286509931087494, -.9870100021362305, -.03778500109910965, 0, 2, 0, 1, 24, 2, -1, 0, 2, 24, 1, 2, .0024170000106096268, -.16119599342346191, .32675701379776, 0, 2, 0, 15, 18, 3, -1, 0, 16, 18, 1, 3, .007703000213950872, -.23841500282287598, .2931939959526062, 0, 2, 9, 0, 6, 9, -1, 11, 0, 2, 9, 3, .04552000015974045, .14424599707126617, -1.5010160207748413, 0, 2, 3, 3, 14, 12, -1, 3, 9, 14, 6, 2, -.07870099693536758, -1.0394560098648071, -.0453759990632534, 0, 2, 12, 1, 3, 12, -1, 12, 7, 3, 6, 2, .007861999794840813, .19633600115776062, -.14472399652004242, 0, 2, 8, 0, 6, 9, -1, 10, 0, 2, 9, 3, -.013458999805152416, -.9063469767570496, -.03804900124669075, 0, 2, 10, 6, 6, 10, -1, 12, 6, 2, 10, 3, .0288270004093647, -.02947399951517582, .6005839705467224, 0, 2, 5, 0, 6, 9, -1, 7, 0, 2, 9, 3, -.027365999296307564, -.9980400204658508, -.03865300118923187, 0, 2, 2, 0, 21, 7, -1, 9, 0, 7, 7, 3, -.07291799783706665, .733614981174469, .057440001517534256, 0, 2, 6, 11, 12, 5, -1, 10, 11, 4, 5, 3, -.013988999649882317, .2789260149002075, -.26516300439834595, 0, 2, 8, 7, 9, 8, -1, 11, 7, 3, 8, 3, .04324299842119217, .004776000045239925, .3592590093612671, 0, 3, 9, 6, 6, 18, -1, 9, 6, 3, 9, 2, 12, 15, 3, 9, 2, .02953300066292286, -.20083999633789062, .5120289921760559, 0, 3, 15, 14, 8, 10, -1, 19, 14, 4, 5, 2, 15, 19, 4, 5, 2, -.03189700096845627, .6472169756889343, -.0013760000001639128, 0, 3, 1, 14, 8, 10, -1, 1, 14, 4, 5, 2, 5, 19, 4, 5, 2, .03786899894475937, -.18363800644874573, .6134309768676758, 0, 3, 11, 0, 8, 10, -1, 15, 0, 4, 5, 2, 11, 5, 4, 5, 2, -.022417999804019928, -.29187899827957153, .1819480061531067, 0, 3, 5, 0, 8, 10, -1, 5, 0, 4, 5, 2, 9, 5, 4, 5, 2, .058958999812603, -.06645199656486511, -1.9290030002593994, 0, 2, 6, 1, 12, 5, -1, 6, 1, 6, 5, 2, .031222999095916748, -.012732000090181828, .6156079769134521, 0, 2, 1, 12, 18, 2, -1, 10, 12, 9, 2, 2, .03748499974608421, -.2085690051317215, .44363999366760254, 0, 3, 2, 8, 20, 6, -1, 12, 8, 10, 3, 2, 2, 11, 10, 3, 2, -.020966000854969025, -.35712799429893494, .2425220012664795, 0, 2, 7, 6, 9, 7, -1, 10, 6, 3, 7, 3, -.025477999821305275, 1.084656000137329, -.15054400265216827, 0, 3, 10, 5, 8, 16, -1, 14, 5, 4, 8, 2, 10, 13, 4, 8, 2, -.0072570000775158405, .2130260020494461, -.1830819994211197, 0, 3, 3, 9, 16, 8, -1, 3, 9, 8, 4, 2, 11, 13, 8, 4, 2, -.0509830005466938, .5173680186271667, -.1883309930562973, 0, 2, 7, 8, 10, 4, -1, 7, 8, 5, 4, 2, -.020640000700950623, -.4403020143508911, .22745999693870544, 0, 3, 7, 12, 10, 8, -1, 7, 12, 5, 4, 2, 12, 16, 5, 4, 2, .010672999545931816, .03505999967455864, -.5166500210762024, 0, 2, 9, 19, 15, 4, -1, 14, 19, 5, 4, 3, .03189599886536598, .01322800014168024, .34915199875831604, 0, 2, 1, 0, 18, 9, -1, 7, 0, 6, 9, 3, -.02382499910891056, .3411880135536194, -.21510200202465057, 0, 3, 13, 4, 10, 8, -1, 18, 4, 5, 4, 2, 13, 8, 5, 4, 2, -.006068000104278326, .3293739855289459, -.28523799777030945, 0, 2, 3, 16, 18, 4, -1, 9, 16, 6, 4, 3, .023881999775767326, -.2533380091190338, .2629610002040863, 0, 3, 8, 7, 10, 12, -1, 13, 7, 5, 6, 2, 8, 13, 5, 6, 2, .027966000139713287, .14049099385738373, -.49887099862098694, 0, 3, 6, 7, 10, 12, -1, 6, 7, 5, 6, 2, 11, 13, 5, 6, 2, .01460300013422966, -.015395999886095524, -.7695800065994263, 0, 2, 4, 6, 18, 7, -1, 10, 6, 6, 7, 3, .10872399806976318, .19069600105285645, -.3239310085773468, 0, 2, 0, 17, 18, 3, -1, 0, 18, 18, 1, 3, -.014038000255823135, .349247008562088, -.2235870063304901, 0, 2, 3, 17, 18, 3, -1, 3, 18, 18, 1, 3, .004044000059366226, -.038329001516103745, .5117729902267456, 0, 2, 2, 4, 6, 10, -1, 4, 4, 2, 10, 3, -.004976999945938587, -.42888298630714417, .049173999577760696, 0, 2, 16, 0, 8, 24, -1, 16, 0, 4, 24, 2, -.08518300205469131, .6662459969520569, .007807999849319458, 0, 2, 4, 0, 8, 15, -1, 8, 0, 4, 15, 2, .0021559998858720064, -.49135199189186096, .06955599784851074, 0, 2, 16, 0, 8, 24, -1, 16, 0, 4, 24, 2, .36384499073028564, .1299709975719452, -1.8949509859085083, 0, 2, 1, 4, 18, 9, -1, 7, 4, 6, 9, 3, .22082500159740448, -.05721199885010719, -1.4281120300292969, 0, 2, 15, 12, 9, 6, -1, 15, 14, 9, 2, 3, -.016140000894665718, -.5758939981460571, .18062500655651093, 0, 3, 3, 9, 18, 6, -1, 3, 9, 9, 3, 2, 12, 12, 9, 3, 2, -.048330001533031464, .9730849862098694, -.16513000428676605, 0, 2, 18, 5, 6, 9, -1, 18, 8, 6, 3, 3, .01752999983727932, .17932699620723724, -.27948901057243347, 0, 2, 0, 5, 6, 9, -1, 0, 8, 6, 3, 3, -.0343099981546402, -.8107249736785889, -.016596000641584396, 0, 3, 4, 7, 18, 4, -1, 13, 7, 9, 2, 2, 4, 9, 9, 2, 2, -.0045830002054572105, .2790899872779846, -.007451999932527542, 0, 3, 2, 1, 12, 20, -1, 2, 1, 6, 10, 2, 8, 11, 6, 10, 2, .12896400690078735, -.13508500158786774, 2.541153907775879, 0, 2, 17, 0, 6, 23, -1, 17, 0, 3, 23, 2, .030361000448465347, -.06841900199651718, .28734099864959717, 0, 2, 1, 6, 2, 18, -1, 1, 15, 2, 9, 2, .04408600181341171, -.18135899305343628, .6541320085525513, 0, 2, 8, 8, 10, 6, -1, 8, 10, 10, 2, 3, .0030159999150782824, -.15690499544143677, .2696380019187927, 0, 3, 0, 6, 20, 6, -1, 0, 6, 10, 3, 2, 10, 9, 10, 3, 2, -.026336999610066414, .2917560040950775, -.2527410089969635, 0, 2, 11, 12, 12, 5, -1, 15, 12, 4, 5, 3, -.027866000309586525, .4438750147819519, .055038001388311386, 0, 2, 0, 4, 3, 19, -1, 1, 4, 1, 19, 3, .011725000105798244, -.193464994430542, .4665670096874237, 0, 2, 19, 1, 3, 18, -1, 20, 1, 1, 18, 3, .0015689999563619494, -.008236000314354897, .25700899958610535, 0, 2, 2, 1, 3, 18, -1, 3, 1, 1, 18, 3, -.0035550000611692667, -.42430898547172546, .0711740031838417, 0, 2, 3, 10, 18, 3, -1, 9, 10, 6, 3, 3, -.03169500082731247, -.8539350032806396, .16916200518608093, 0, 2, 4, 4, 10, 9, -1, 9, 4, 5, 9, 2, -.03209700062870979, .8378490209579468, -.17597299814224243, 0, 2, 7, 13, 14, 7, -1, 7, 13, 7, 7, 2, .1554419994354248, .09955000132322311, 2.3873300552368164, 0, 2, 3, 13, 14, 7, -1, 10, 13, 7, 7, 2, .08804599940776825, -.18725299835205078, .6238430142402649, 0, 2, 8, 15, 9, 6, -1, 11, 15, 3, 6, 3, -.0016720000421628356, .2500869929790497, -.06511899828910828, 0, 3, 4, 14, 8, 10, -1, 4, 14, 4, 5, 2, 8, 19, 4, 5, 2, .009340999647974968, -.35378900170326233, .10715000331401825, 0, 2, 10, 14, 4, 10, -1, 10, 19, 4, 5, 2, .03713800013065338, .16387000679969788, -.9171839952468872, 0, 2, 3, 8, 5, 16, -1, 3, 16, 5, 8, 2, .08018399775028229, -.14812999963760376, 1.4895190000534058, 0, 2, 15, 10, 9, 6, -1, 15, 12, 9, 2, 3, -.0007910000276751816, -.21326899528503418, .1967640072107315, 0, 2, 0, 10, 9, 6, -1, 0, 12, 9, 2, 3, -.005040000192821026, -.7131869792938232, .0018240000354126096, 0, 2, 6, 7, 12, 9, -1, 6, 10, 12, 3, 3, .11962399631738663, .03309899941086769, 1.0441709756851196, 0, 2, 9, 10, 5, 8, -1, 9, 14, 5, 4, 2, -.004528000019490719, -.27308499813079834, .27229800820350647, 0, 2, 12, 1, 3, 12, -1, 12, 7, 3, 6, 2, -.029639000073075294, .3622579872608185, .05679500102996826, 0, 2, 8, 15, 6, 9, -1, 10, 15, 2, 9, 3, .026650000363588333, -.048041000962257385, -.9672350287437439, 0, 2, 16, 6, 7, 6, -1, 16, 9, 7, 3, 2, .044422000646591187, .1305290013551712, -.35077300667762756, 0, 2, 8, 1, 4, 22, -1, 10, 1, 2, 22, 2, -.02435999922454357, -1.0766899585723877, -.05122299864888191, 0, 2, 6, 6, 14, 3, -1, 6, 6, 7, 3, 2, .019734999164938927, .02623800002038479, .2807050049304962, 0, 2, 0, 18, 19, 3, -1, 0, 19, 19, 1, 3, .005493000149726868, -.2611129879951477, .2101140022277832, 0, 2, 17, 0, 6, 24, -1, 17, 0, 3, 24, 2, -.23200300335884094, -1.7748440504074097, .11482600122690201, 0, 2, 0, 13, 15, 6, -1, 5, 13, 5, 6, 3, -.025614000856876373, .29900801181793213, -.2250249981880188, 0, 3, 9, 6, 10, 14, -1, 14, 6, 5, 7, 2, 9, 13, 5, 7, 2, -.00649499986320734, .1956380009651184, -.09976299852132797, 0, 3, 1, 6, 8, 10, -1, 1, 6, 4, 5, 2, 5, 11, 4, 5, 2, .003984000068157911, -.4302150011062622, .08126100152730942, 0, 2, 7, 6, 12, 5, -1, 7, 6, 6, 5, 2, -.03581300005316734, -.5098739862442017, .16345900297164917, 0, 2, 7, 7, 9, 6, -1, 10, 7, 3, 6, 3, -.014169000089168549, .7797809839248657, -.17476299405097961, 0, 3, 7, 8, 14, 14, -1, 14, 8, 7, 7, 2, 7, 15, 7, 7, 2, -.1264210045337677, -.6304789781570435, .1272830069065094, 0, 3, 3, 8, 14, 14, -1, 3, 8, 7, 7, 2, 10, 15, 7, 7, 2, .06867799907922745, -.0464479997754097, -1.1128979921340942, 0, 2, 9, 8, 13, 4, -1, 9, 10, 13, 2, 2, .08586499840021133, .11835400015115738, -4.823515892028809, 0, 3, 3, 2, 6, 12, -1, 3, 2, 3, 6, 2, 6, 8, 3, 6, 2, .01551199983805418, -.017467999830842018, -.6369339823722839, 0, 2, 6, 10, 17, 6, -1, 6, 13, 17, 3, 2, .0810910016298294, .08613300323486328, 2.4559431076049805, 0, 2, 1, 10, 17, 6, -1, 1, 13, 17, 3, 2, .018495000898838043, .04022900015115738, -.5085819959640503, 0, 2, 16, 7, 8, 9, -1, 16, 10, 8, 3, 3, -.08632099628448486, -1.9006760120391846, .11019100248813629, 0, 2, 0, 7, 8, 9, -1, 0, 10, 8, 3, 3, .0723550021648407, -.062111999839544296, -1.416517972946167, 0, 3, 0, 9, 24, 10, -1, 12, 9, 12, 5, 2, 0, 14, 12, 5, 2, -.0781790018081665, .888493001461029, .04236999899148941, 0, 2, 3, 2, 15, 8, -1, 8, 2, 5, 8, 3, .09668199717998505, -.22094200551509857, .3357509970664978, 0, 2, 4, 2, 18, 8, -1, 10, 2, 6, 8, 3, -.039875999093055725, .5780479907989502, .04534799978137016, 0, 3, 0, 1, 18, 4, -1, 0, 1, 9, 2, 2, 9, 3, 9, 2, 2, -.00953499972820282, -.5417569875717163, .0032399999909102917, 0, 2, 20, 2, 3, 18, -1, 21, 2, 1, 18, 3, .00040600000647827983, -.08154900372028351, .3583790063858032, 0, 2, 1, 3, 3, 19, -1, 2, 3, 1, 19, 3, .012107999995350838, -.20280399918556213, .4376800060272217, 0, 2, 18, 8, 6, 16, -1, 20, 8, 2, 16, 3, -.02087399922311306, .414698988199234, -.04556800052523613, 0, 2, 0, 8, 6, 16, -1, 2, 8, 2, 16, 3, .05788800120353699, -.029009999707341194, -.9182230234146118, 0, 2, 8, 18, 11, 6, -1, 8, 20, 11, 2, 3, .0001320000010309741, -.11772400140762329, .20000000298023224, 0, 2, 4, 6, 12, 5, -1, 8, 6, 4, 5, 3, -.01713700033724308, .33004799485206604, -.23055200278759003, 0, 2, 7, 6, 12, 5, -1, 11, 6, 4, 5, 3, .03065500035881996, -.02154500037431717, .26878198981285095, 0, 2, 6, 3, 9, 6, -1, 9, 3, 3, 6, 3, -.0007869999972172081, -.44100698828697205, .0491579994559288, 0, 2, 7, 6, 12, 5, -1, 7, 6, 6, 5, 2, .08803699910640717, .11782000213861465, -2.8293309211730957, 0, 2, 9, 8, 6, 7, -1, 12, 8, 3, 7, 2, -.03902899846434593, .9177719950675964, -.15827399492263794, 0, 2, 8, 2, 9, 6, -1, 11, 2, 3, 6, 3, .08010599762201309, .11289200186729431, -1.9937280416488647, 0, 2, 8, 14, 6, 9, -1, 8, 17, 6, 3, 3, .039538998156785965, -.14357399940490723, 1.3085240125656128, 0, 2, 8, 2, 9, 6, -1, 11, 2, 3, 6, 3, .020684000104665756, .20048099756240845, -.044186998158693314, 0, 3, 4, 3, 16, 20, -1, 4, 3, 8, 10, 2, 12, 13, 8, 10, 2, -.06703799962997437, .32618600130081177, -.20550400018692017, 0, 3, 7, 6, 10, 12, -1, 12, 6, 5, 6, 2, 7, 12, 5, 6, 2, .04681500047445297, .1582529991865158, -.9553509950637817, 0, 2, 0, 2, 7, 12, -1, 0, 6, 7, 4, 3, .0784439966082573, -.07465100288391113, -2.11614990234375, 0, 2, 12, 17, 11, 6, -1, 12, 19, 11, 2, 3, .06638000160455704, .1164190024137497, -1.6113519668579102, 0, 3, 4, 7, 12, 8, -1, 4, 7, 6, 4, 2, 10, 11, 6, 4, 2, .0300539992749691, -.16562600433826447, .7002540230751038, 0, 3, 8, 11, 8, 10, -1, 12, 11, 4, 5, 2, 8, 16, 4, 5, 2, .01711999997496605, .22627699375152588, -.4011499881744385, 0, 2, 9, 1, 4, 9, -1, 11, 1, 2, 9, 2, .020073000341653824, -.19389699399471283, .4442029893398285, 0, 2, 14, 0, 3, 22, -1, 15, 0, 1, 22, 3, .03310199826955795, .11637499928474426, -1.5771679878234863, 0, 2, 7, 0, 3, 22, -1, 8, 0, 1, 22, 3, -.014882000163197517, -.8968030214309692, -.042010001838207245, 0, 3, 4, 7, 18, 4, -1, 13, 7, 9, 2, 2, 4, 9, 9, 2, 2, -.010281000286340714, .3560299873352051, -.013124000281095505, 0, 2, 10, 2, 4, 15, -1, 10, 7, 4, 5, 3, -.02869500033557415, -.4603959918022156, .026801999658346176, 0, 2, 12, 1, 3, 12, -1, 12, 7, 3, 6, 2, -.004718999844044447, .23788799345493317, -.06551899760961533, 0, 2, 0, 0, 18, 13, -1, 9, 0, 9, 13, 2, .32201600074768066, -.02848999947309494, -.8423460125923157, 0, 2, 16, 0, 3, 24, -1, 17, 0, 1, 24, 3, -.017045000568032265, -.5093880295753479, .1605760008096695, 0, 2, 5, 0, 3, 24, -1, 6, 0, 1, 24, 3, -.007346999831497669, -.5415499806404114, .004732000175863504, 0, 2, 10, 15, 5, 8, -1, 10, 19, 5, 4, 2, -.03000199981033802, -.887857973575592, .13621799647808075, 0, 2, 2, 18, 18, 2, -1, 2, 19, 18, 1, 2, -.011292999610304832, .8061519861221313, -.16159500181674957, 0, 2, 2, 8, 20, 3, -1, 2, 9, 20, 1, 3, .004774999804794788, .012968000024557114, .5507990121841431, 0, 2, 7, 6, 9, 6, -1, 7, 8, 9, 2, 3, .005071000196039677, -.04572800174355507, -1.076625943183899, 0, 2, 3, 2, 19, 10, -1, 3, 7, 19, 5, 2, .1934410035610199, .07126200199127197, 1.1694519519805908, 0, 2, 2, 7, 19, 3, -1, 2, 8, 19, 1, 3, .005375000182539225, -.1973620057106018, .3820689916610718, 0, 2, 15, 6, 9, 4, -1, 15, 8, 9, 2, 2, -.06827600300312042, -5.437233924865723, .11151900142431259, 0, 2, 2, 2, 18, 8, -1, 8, 2, 6, 8, 3, -.034933000802993774, .44793400168418884, -.18657900393009186, 0, 2, 10, 9, 14, 4, -1, 10, 9, 7, 4, 2, .005121999885886908, -.014871999621391296, .18413899838924408, 0, 2, 4, 4, 6, 16, -1, 7, 4, 3, 16, 2, .09531199932098389, -.1511709988117218, .9499149918556213, 0, 2, 15, 8, 9, 16, -1, 18, 8, 3, 16, 3, -.0628490000963211, .4647360146045685, .038405001163482666, 0, 2, 0, 8, 9, 16, -1, 3, 8, 3, 16, 3, -.1704069972038269, -1.649999976158142, -.06323699653148651, 0, 2, 18, 0, 6, 14, -1, 20, 0, 2, 14, 3, .010583999566733837, -.03834899887442589, .41913801431655884, 0, 2, 0, 0, 6, 14, -1, 2, 0, 2, 14, 3, -.041579000651836395, .3446190059185028, -.2118770033121109, 0, 2, 15, 0, 6, 22, -1, 17, 0, 2, 22, 3, .12718600034713745, .12398199737071991, -2.1254889965057373, 0, 2, 3, 0, 6, 22, -1, 5, 0, 2, 22, 3, .08255700021982193, -.06202400103211403, -1.4875819683074951, 0, 2, 12, 2, 12, 20, -1, 16, 2, 4, 20, 3, .0852930024266243, .01708799973130226, .32076600193977356, 0, 2, 0, 2, 12, 20, -1, 4, 2, 4, 20, 3, .05554400011897087, -.27414000034332275, .18976399302482605, 0, 2, 11, 6, 4, 9, -1, 11, 6, 2, 9, 2, .00456500006839633, -.17920200526714325, .2796730101108551, 0, 2, 9, 0, 6, 16, -1, 12, 0, 3, 16, 2, .012997999787330627, -.3229750096797943, .26941800117492676, 0, 2, 12, 1, 3, 12, -1, 12, 7, 3, 6, 2, .05789199844002724, .1264439970254898, -.607134997844696, 0, 3, 3, 4, 18, 6, -1, 3, 4, 9, 3, 2, 12, 7, 9, 3, 2, -.0228240005671978, -.49682098627090454, .022376999258995056, 0, 3, 5, 5, 16, 8, -1, 13, 5, 8, 4, 2, 5, 9, 8, 4, 2, .048312000930309296, .04360700026154518, .4853779971599579, 0, 2, 0, 13, 10, 6, -1, 0, 15, 10, 2, 3, .025714000687003136, -.04295099899172783, -.9302350282669067, 0, 2, 8, 14, 9, 6, -1, 8, 16, 9, 2, 3, .006926999893039465, -.002968000015243888, .34296301007270813, 0, 2, 6, 2, 9, 6, -1, 9, 2, 3, 6, 3, -.03444699943065643, -1.5299769639968872, -.06101499870419502, 0, 3, 14, 1, 10, 8, -1, 19, 1, 5, 4, 2, 14, 5, 5, 4, 2, .029387999325990677, .037595998495817184, .6417239904403687, 0, 2, 9, 1, 3, 12, -1, 9, 7, 3, 6, 2, -.0024319998919963837, .09908899664878845, -.39688101410865784, -2.992827892303467, 200, 0, 2, 6, 4, 12, 9, -1, 6, 7, 12, 3, 3, -.09594400227069855, .6241909861564636, -.45875200629234314, 0, 2, 6, 5, 12, 6, -1, 10, 5, 4, 6, 3, .016834000125527382, -.930728018283844, .2156360000371933, 0, 2, 1, 1, 8, 5, -1, 5, 1, 4, 5, 2, .02604999952018261, -.40532299876213074, .4225659966468811, 0, 2, 12, 12, 6, 8, -1, 12, 16, 6, 4, 2, .0003650000144261867, .0952880010008812, -.63298100233078, 0, 2, 3, 12, 12, 6, -1, 3, 14, 12, 2, 3, -.006694000214338303, .3724380135536194, -.30332401394844055, 0, 3, 9, 18, 12, 6, -1, 15, 18, 6, 3, 2, 9, 21, 6, 3, 2, .018874000757932663, -.23357200622558594, .4033069908618927, 0, 2, 4, 13, 6, 6, -1, 4, 16, 6, 3, 2, -.0001630000042496249, .04288699850440025, -.7779679894447327, 0, 2, 11, 3, 7, 18, -1, 11, 12, 7, 9, 2, -.07625900208950043, -.49628499150276184, .16335399448871613, 0, 2, 3, 9, 18, 3, -1, 9, 9, 6, 3, 3, .05014900118112564, .03274700045585632, -.800478994846344, 0, 2, 5, 3, 19, 2, -1, 5, 4, 19, 1, 2, -.0029239999130368233, -.5000280141830444, .2548060119152069, 0, 3, 4, 2, 12, 6, -1, 4, 2, 6, 3, 2, 10, 5, 6, 3, 2, .01624399982392788, .038913000375032425, -.7072489857673645, 0, 2, 9, 6, 6, 9, -1, 11, 6, 2, 9, 3, .0378119982779026, -.06626799702644348, .7386879920959473, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, -.012319999746978283, .48696398735046387, -.24485599994659424, 0, 2, 16, 9, 5, 15, -1, 16, 14, 5, 5, 3, .058003999292850494, .1345909982919693, -.13232100009918213, 0, 2, 3, 9, 5, 15, -1, 3, 14, 5, 5, 3, .004863000009208918, -.44172900915145874, .14005599915981293, 0, 3, 6, 6, 14, 6, -1, 13, 6, 7, 3, 2, 6, 9, 7, 3, 2, .04569099843502045, .031217999756336212, .8981829881668091, 0, 2, 8, 6, 3, 14, -1, 8, 13, 3, 7, 2, .021321000531315804, .012008000165224075, -.8606619834899902, 0, 2, 0, 16, 24, 5, -1, 8, 16, 8, 5, 3, .15679100155830383, .014055999927222729, .8533290028572083, 0, 2, 0, 20, 20, 3, -1, 10, 20, 10, 3, 2, -.01032899972051382, .290228009223938, -.2947880029678345, 0, 2, 5, 10, 18, 2, -1, 5, 11, 18, 1, 2, .002429000101983547, -.40439900755882263, .19400200247764587, 0, 2, 0, 6, 6, 10, -1, 2, 6, 2, 10, 3, -.02333899959921837, .3294520080089569, -.25712698698043823, 0, 2, 2, 1, 20, 3, -1, 2, 2, 20, 1, 3, -.006897000130265951, -.5335299968719482, .21635200083255768, 0, 2, 9, 13, 6, 11, -1, 11, 13, 2, 11, 3, -.0344030000269413, -1.4425489902496338, -.04468299821019173, 0, 2, 9, 15, 6, 8, -1, 9, 19, 6, 4, 2, -.02123500034213066, -.7901750206947327, .19084100425243378, 0, 2, 9, 12, 6, 9, -1, 9, 15, 6, 3, 3, .0020620001014322042, -.2693119943141937, .31488001346588135, 0, 2, 5, 11, 18, 2, -1, 5, 12, 18, 1, 2, -.004219000227749348, -.5446439981460571, .16574600338935852, 0, 2, 2, 6, 15, 6, -1, 2, 8, 15, 2, 3, -.014334999956190586, .022105000913143158, -.6234250068664551, 0, 2, 6, 0, 18, 3, -1, 6, 1, 18, 1, 3, -.008212000131607056, -.4988499879837036, .19237099587917328, 0, 2, 5, 0, 3, 18, -1, 6, 0, 1, 18, 3, -.009335000067949295, -.7913119792938232, -.01414399966597557, 0, 2, 18, 3, 6, 10, -1, 20, 3, 2, 10, 3, -.03793799877166748, .7984129786491394, -.03379900008440018, 0, 2, 0, 3, 6, 10, -1, 2, 3, 2, 10, 3, .004705999977886677, -.3316340148448944, .20726299285888672, 0, 2, 10, 5, 8, 9, -1, 10, 5, 4, 9, 2, -.004449999891221523, -.27256301045417786, .18402199447155, 0, 2, 6, 5, 8, 9, -1, 10, 5, 4, 9, 2, .0052189999260008335, -.5309600234031677, .05260799825191498, 0, 2, 3, 2, 20, 3, -1, 3, 3, 20, 1, 3, -.00953999999910593, -.5648540258407593, .19269399344921112, 0, 2, 5, 2, 13, 4, -1, 5, 4, 13, 2, 2, .04496999830007553, -.17411500215530396, .9538260102272034, 0, 2, 17, 0, 7, 14, -1, 17, 7, 7, 7, 2, .014209000393748283, -.09194900095462799, .2483610063791275, 0, 2, 0, 0, 7, 14, -1, 0, 7, 7, 7, 2, .16380199790000916, -.058497000485658646, -1.6404409408569336, 0, 2, 9, 11, 10, 6, -1, 9, 11, 5, 6, 2, .0025579999200999737, .23447999358177185, -.09273400157690048, 0, 2, 5, 11, 10, 6, -1, 10, 11, 5, 6, 2, -.0038499999791383743, .17880700528621674, -.35844099521636963, 0, 2, 11, 6, 3, 18, -1, 11, 12, 3, 6, 3, -.02522199973464012, -.42903000116348267, .20244500041007996, 0, 2, 0, 16, 18, 3, -1, 0, 17, 18, 1, 3, -.019415000453591347, .5801630020141602, -.18806399405002594, 0, 2, 6, 16, 18, 3, -1, 6, 17, 18, 1, 3, .014419999904930592, .032846998423337936, .8198050260543823, 0, 2, 4, 6, 9, 10, -1, 4, 11, 9, 5, 2, .051582999527454376, .06917600333690643, -.4586629867553711, 0, 2, 9, 7, 15, 4, -1, 9, 9, 15, 2, 2, -.0379600003361702, -1.2553000450134277, .14332899451255798, 0, 3, 5, 6, 12, 6, -1, 5, 6, 6, 3, 2, 11, 9, 6, 3, 2, -.0295609999448061, .5315179824829102, -.20596499741077423, 0, 2, 6, 1, 12, 9, -1, 6, 4, 12, 3, 3, -.039110999554395676, 1.1658719778060913, .05389700084924698, 0, 3, 7, 9, 6, 12, -1, 7, 9, 3, 6, 2, 10, 15, 3, 6, 2, -.029159000143408775, .39307600259780884, -.22184500098228455, 0, 2, 11, 5, 13, 6, -1, 11, 7, 13, 2, 3, -.08361700177192688, -.7374449968338013, .1426820009946823, 0, 2, 1, 11, 22, 13, -1, 12, 11, 11, 13, 2, .4200400114059448, -.14277400076389313, 1.7894840240478516, 0, 2, 18, 8, 6, 6, -1, 18, 11, 6, 3, 2, .06000500172376633, .11976700276136398, -1.8886189460754395, 0, 2, 0, 8, 6, 6, -1, 0, 11, 6, 3, 2, -.018981000408530235, -1.4148449897766113, -.056522998958826065, 0, 2, 0, 6, 24, 3, -1, 0, 7, 24, 1, 3, -.006004999857395887, .4417079985141754, -.10200800001621246, 0, 2, 0, 5, 10, 6, -1, 0, 7, 10, 2, 3, -.05821400135755539, -1.391847014427185, -.04826899990439415, 0, 2, 6, 7, 18, 3, -1, 6, 8, 18, 1, 3, -.012271000072360039, .5131769776344299, -.09369699656963348, 0, 2, 0, 0, 10, 6, -1, 0, 2, 10, 2, 3, .04658599942922592, -.05748400092124939, -1.4283169507980347, 0, 2, 19, 0, 3, 19, -1, 20, 0, 1, 19, 3, .0012110000243410468, -.08089199662208557, .3233320116996765, 0, 3, 4, 6, 12, 16, -1, 4, 6, 6, 8, 2, 10, 14, 6, 8, 2, -.08864200115203857, -.8644909858703613, -.03314699977636337, 0, 3, 19, 6, 4, 18, -1, 21, 6, 2, 9, 2, 19, 15, 2, 9, 2, -.02318499982357025, .5216220021247864, -.016168000176548958, 0, 3, 1, 6, 4, 18, -1, 1, 6, 2, 9, 2, 3, 15, 2, 9, 2, .04309000074863434, -.1615380048751831, 1.0915000438690186, 0, 2, 3, 21, 18, 3, -1, 3, 22, 18, 1, 3, .00020599999697878957, -.17091499269008636, .3123669922351837, 0, 2, 0, 19, 9, 4, -1, 0, 21, 9, 2, 2, .00891599990427494, -.006703999824821949, -.688103973865509, 0, 3, 12, 18, 12, 6, -1, 18, 18, 6, 3, 2, 12, 21, 6, 3, 2, -.01775299943983555, .6329280138015747, -.004236000124365091, 0, 2, 7, 18, 9, 4, -1, 7, 20, 9, 2, 2, .00622999994084239, -.3363719880580902, .12790599465370178, 0, 3, 12, 16, 10, 8, -1, 17, 16, 5, 4, 2, 12, 20, 5, 4, 2, .022770000621676445, -.034703999757766724, .3914180099964142, 0, 3, 2, 16, 10, 8, -1, 2, 16, 5, 4, 2, 7, 20, 5, 4, 2, -.021534999832510948, .6476510167121887, -.20097799599170685, 0, 3, 14, 0, 10, 12, -1, 19, 0, 5, 6, 2, 14, 6, 5, 6, 2, .06175899878144264, .05429700016975403, .9070010185241699, 0, 3, 0, 0, 10, 12, -1, 0, 0, 5, 6, 2, 5, 6, 5, 6, 2, -.07806999981403351, .6552339792251587, -.19754399359226227, 0, 2, 15, 14, 9, 6, -1, 15, 16, 9, 2, 3, .011315000243484974, .1938530057668686, -.5170729756355286, 0, 2, 0, 14, 9, 6, -1, 0, 16, 9, 2, 3, -.025590000674128532, -.930965006351471, -.031546998769044876, 0, 2, 14, 14, 10, 6, -1, 14, 16, 10, 2, 3, -.03805899992585182, -.6832690238952637, .12709100544452667, 0, 2, 0, 14, 10, 6, -1, 0, 16, 10, 2, 3, .00979700032621622, .0155239999294281, -.6334789991378784, 0, 2, 5, 18, 18, 2, -1, 5, 19, 18, 1, 2, -.01384199969470501, 1.0060529708862305, .06281299889087677, 0, 2, 0, 18, 18, 3, -1, 0, 19, 18, 1, 3, .008345999754965305, -.2338320016860962, .3098269999027252, 0, 3, 3, 5, 18, 12, -1, 12, 5, 9, 6, 2, 3, 11, 9, 6, 2, -.07143999636173248, -.7250540256500244, .17148299515247345, 0, 2, 5, 3, 7, 9, -1, 5, 6, 7, 3, 3, .01000600028783083, -.22071999311447144, .35266199707984924, 0, 2, 4, 0, 19, 15, -1, 4, 5, 19, 5, 3, .11005300283432007, .16662000119686127, -.7431899905204773, 0, 2, 3, 0, 16, 4, -1, 3, 2, 16, 2, 2, .03531099855899811, -.2398270070552826, .414359986782074, 0, 2, 4, 12, 16, 12, -1, 4, 12, 8, 12, 2, -.11174699664115906, .510453999042511, .0022319999989122152, 0, 2, 4, 3, 12, 15, -1, 10, 3, 6, 15, 2, -.11367800086736679, .9047520160675049, -.16615299880504608, 0, 2, 16, 4, 2, 19, -1, 16, 4, 1, 19, 2, .01666799932718277, .1402450054883957, -.5217850208282471, 0, 2, 6, 4, 2, 19, -1, 7, 4, 1, 19, 2, -.008034000173211098, -.6617839932441711, .0037640000227838755, 0, 3, 13, 14, 8, 10, -1, 17, 14, 4, 5, 2, 13, 19, 4, 5, 2, -.03309699892997742, .8018590211868286, .05938500165939331, 0, 3, 3, 14, 8, 10, -1, 3, 14, 4, 5, 2, 7, 19, 4, 5, 2, .012547999620437622, -.3354550004005432, .14578600227832794, 0, 2, 12, 6, 3, 18, -1, 12, 12, 3, 6, 3, -.04207399860024452, -.5550910234451294, .13266600668430328, 0, 3, 5, 11, 12, 6, -1, 5, 11, 6, 3, 2, 11, 14, 6, 3, 2, .02522199973464012, -.06163199990987778, -1.3678770065307617, 0, 3, 10, 5, 8, 10, -1, 14, 5, 4, 5, 2, 10, 10, 4, 5, 2, -.024268999695777893, .34185099601745605, -.007416000124067068, 0, 3, 6, 4, 12, 10, -1, 6, 4, 6, 5, 2, 12, 9, 6, 5, 2, -.012280000373721123, .2774580121040344, -.3103390038013458, 0, 3, 6, 8, 18, 10, -1, 15, 8, 9, 5, 2, 6, 13, 9, 5, 2, -.1137709990143776, 1.1719540357589722, .08368100225925446, 0, 3, 0, 8, 18, 10, -1, 0, 8, 9, 5, 2, 9, 13, 9, 5, 2, -.08477199822664261, .8169479966163635, -.1783750057220459, 0, 2, 12, 6, 3, 18, -1, 12, 12, 3, 6, 3, -.0245520006865263, -.186272993683815, .14340099692344666, 0, 2, 0, 14, 18, 3, -1, 0, 15, 18, 1, 3, -.009026999585330486, .32659199833869934, -.23541299998760223, 0, 2, 12, 6, 3, 18, -1, 12, 12, 3, 6, 3, .011177999898791313, .197612002491951, -.02170100063085556, 0, 2, 9, 6, 3, 18, -1, 9, 12, 3, 6, 3, -.029366999864578247, -.9341480135917664, -.02170499972999096, 0, 2, 6, 14, 18, 3, -1, 6, 15, 18, 1, 3, .006364000029861927, .0255730003118515, .4641279876232147, 0, 2, 0, 5, 18, 3, -1, 0, 6, 18, 1, 3, .014026000164449215, -.21228599548339844, .40078800916671753, 0, 2, 2, 5, 22, 3, -1, 2, 6, 22, 1, 3, -.013341999612748623, .7420269846916199, .029001999646425247, 0, 2, 0, 0, 21, 10, -1, 7, 0, 7, 10, 3, .28422799706459045, -.19243599474430084, .4363119900226593, 0, 2, 6, 3, 18, 17, -1, 12, 3, 6, 17, 3, -.2372400015592575, .6973639726638794, .06930799782276154, 0, 2, 0, 3, 18, 17, -1, 6, 3, 6, 17, 3, -.1116970032453537, .3914720118045807, -.2092200070619583, 0, 2, 0, 12, 24, 11, -1, 8, 12, 8, 11, 3, .12787500023841858, -.07255599647760391, .3608820140361786, 0, 2, 4, 10, 16, 6, -1, 4, 13, 16, 3, 2, -.06290099769830704, .9542499780654907, -.1540279984474182, 0, 2, 12, 8, 6, 8, -1, 12, 12, 6, 4, 2, .01743900030851364, -.051134999841451645, .27750301361083984, 0, 2, 6, 14, 8, 7, -1, 10, 14, 4, 7, 2, .001231999951414764, .07562799751758575, -.36456099152565, 0, 3, 15, 10, 6, 14, -1, 18, 10, 3, 7, 2, 15, 17, 3, 7, 2, .027495000511407852, .051844000816345215, .41562598943710327, 0, 3, 3, 10, 6, 14, -1, 3, 10, 3, 7, 2, 6, 17, 3, 7, 2, -.04354399815201759, .7196999788284302, -.17132200300693512, 0, 2, 6, 12, 18, 2, -1, 6, 13, 18, 1, 2, .011025999672710896, .143546000123024, -.6540300250053406, 0, 2, 5, 8, 10, 6, -1, 5, 10, 10, 2, 3, .020865999162197113, .04008900001645088, -.45743298530578613, 0, 2, 12, 11, 9, 4, -1, 12, 13, 9, 2, 2, -.022304000332951546, .5385500192642212, .07166299968957901, 0, 2, 0, 11, 9, 6, -1, 0, 13, 9, 2, 3, .03249200060963631, -.04599199816584587, -1.0047069787979126, 0, 2, 11, 2, 3, 18, -1, 12, 2, 1, 18, 3, .012269999831914902, .034334998577833176, .42431798577308655, 0, 2, 10, 2, 3, 18, -1, 11, 2, 1, 18, 3, .008382000029087067, -.25850600004196167, .2626349925994873, 0, 2, 9, 12, 6, 10, -1, 11, 12, 2, 10, 3, .0373539999127388, .1569249927997589, -1.042909026145935, 0, 2, 1, 10, 6, 9, -1, 1, 13, 6, 3, 3, -.01411100011318922, -.731777012348175, -.020276999101042747, 0, 3, 6, 9, 16, 6, -1, 14, 9, 8, 3, 2, 6, 12, 8, 3, 2, .05706699937582016, .08336000144481659, 1.5661499500274658, 0, 2, 1, 8, 9, 6, -1, 1, 10, 9, 2, 3, .0049680001102387905, -.35318198800086975, .14698399603366852, 0, 2, 7, 7, 16, 6, -1, 7, 9, 16, 2, 3, -.02449299953877926, .28325900435447693, -.003464000066742301, 0, 2, 0, 0, 18, 3, -1, 0, 1, 18, 1, 3, -.011254999786615372, -.8401749730110168, -.03625199943780899, 0, 2, 10, 0, 6, 9, -1, 12, 0, 2, 9, 3, .034533001482486725, .14998500049114227, -.8736709952354431, 0, 2, 9, 5, 6, 6, -1, 12, 5, 3, 6, 2, .024303000420331955, -.18787500262260437, .5948399901390076, 0, 3, 10, 6, 4, 18, -1, 12, 6, 2, 9, 2, 10, 15, 2, 9, 2, -.007879000157117844, .44315698742866516, -.05657099932432175, 0, 2, 8, 0, 6, 9, -1, 10, 0, 2, 9, 3, .03514200076460838, -.056494999676942825, -1.361719012260437, 0, 2, 9, 1, 6, 9, -1, 9, 4, 6, 3, 3, .0046259998343884945, -.311616986989975, .25447699427604675, 0, 2, 1, 0, 18, 9, -1, 1, 3, 18, 3, 3, -.08313100039958954, 1.6424349546432495, -.14429399371147156, 0, 2, 0, 3, 24, 3, -1, 0, 4, 24, 1, 3, -.014015999622642994, -.7781950235366821, .17173300683498383, 0, 2, 6, 14, 9, 4, -1, 6, 16, 9, 2, 2, .0012450000504031777, -.2319139987230301, .2852790057659149, 0, 3, 8, 9, 8, 10, -1, 12, 9, 4, 5, 2, 8, 14, 4, 5, 2, -.01680300012230873, -.35965099930763245, .20412999391555786, 0, 2, 5, 2, 13, 9, -1, 5, 5, 13, 3, 3, -.07674799859523773, .7805050015449524, -.15612800419330597, 0, 2, 4, 4, 16, 9, -1, 4, 7, 16, 3, 3, -.2367199957370758, 1.1813700199127197, .07811199873685837, 0, 2, 4, 4, 14, 9, -1, 4, 7, 14, 3, 3, -.10057400166988373, -.4710409939289093, .0791729986667633, 0, 2, 8, 5, 9, 6, -1, 8, 7, 9, 2, 3, .001323999953456223, .22262699902057648, -.37099799513816833, 0, 2, 1, 7, 16, 6, -1, 1, 9, 16, 2, 3, .02215299941599369, -.038649000227451324, -.9227499961853027, 0, 2, 10, 5, 13, 9, -1, 10, 8, 13, 3, 3, -.11246199905872345, .41899600625038147, .08041100203990936, 0, 2, 1, 5, 13, 9, -1, 1, 8, 13, 3, 3, .016481000930070877, -.16756699979305267, .7184240221977234, 0, 3, 0, 4, 24, 6, -1, 12, 4, 12, 3, 2, 0, 7, 12, 3, 2, .06811399757862091, .15719899535179138, -.8768110275268555, 0, 2, 1, 14, 10, 9, -1, 1, 17, 10, 3, 3, .016011999920010567, -.0041600000113248825, -.5932779908180237, 0, 2, 5, 17, 18, 3, -1, 5, 18, 18, 1, 3, .0046640001237392426, -.030153999105095863, .48345300555229187, 0, 2, 0, 16, 18, 3, -1, 0, 17, 18, 1, 3, .006757999770343304, -.22667400538921356, .33662301301956177, 0, 2, 9, 17, 9, 6, -1, 9, 19, 9, 2, 3, .004728999920189381, -.060373999178409576, .3145810067653656, 0, 3, 1, 20, 22, 4, -1, 1, 20, 11, 2, 2, 12, 22, 11, 2, 2, .0025869999080896378, -.29872599244117737, .17787499725818634, 0, 2, 8, 14, 8, 6, -1, 8, 17, 8, 3, 2, .0028989999555051327, .21890200674533844, -.2956709861755371, 0, 2, 8, 6, 8, 15, -1, 8, 11, 8, 5, 3, -.0300539992749691, 1.2150429487228394, -.14354999363422394, 0, 2, 5, 4, 18, 3, -1, 5, 5, 18, 1, 3, .014181000180542469, .012451999820768833, .5549010038375854, 0, 2, 9, 3, 5, 10, -1, 9, 8, 5, 5, 2, -.060527000576257706, -1.493399977684021, -.06522700190544128, 0, 2, 6, 8, 12, 3, -1, 6, 8, 6, 3, 2, -.01988299936056137, -.38526400923728943, .197612002491951, 0, 3, 2, 6, 18, 6, -1, 2, 6, 9, 3, 2, 11, 9, 9, 3, 2, .03121899999678135, -.21281200647354126, .29446500539779663, 0, 3, 10, 6, 4, 18, -1, 12, 6, 2, 9, 2, 10, 15, 2, 9, 2, .018271999433636665, .0009720000089146197, .6681420207023621, 0, 2, 7, 5, 6, 6, -1, 10, 5, 3, 6, 2, .001108999946154654, -.6246790289878845, -.0016599999507889152, 0, 2, 14, 5, 2, 18, -1, 14, 14, 2, 9, 2, -.03671399876475334, -.42333900928497314, .12084700167179108, 0, 2, 8, 5, 2, 18, -1, 8, 14, 2, 9, 2, .012044000439345837, .025882000103592873, -.5073239803314209, 0, 2, 9, 2, 10, 6, -1, 9, 2, 5, 6, 2, .07474900037050247, .13184699416160583, -.21739600598812103, 0, 2, 3, 1, 18, 12, -1, 12, 1, 9, 12, 2, -.2347320020198822, 1.1775610446929932, -.1511469930410385, 0, 2, 5, 2, 17, 22, -1, 5, 13, 17, 11, 2, .14096499979496002, .033991001546382904, .3992309868335724, 0, 2, 4, 0, 12, 6, -1, 4, 2, 12, 2, 3, .006178999785333872, -.3180670142173767, .11681699752807617, 0, 3, 6, 9, 16, 6, -1, 14, 9, 8, 3, 2, 6, 12, 8, 3, 2, -.05721699818968773, .8439909815788269, .08388900011777878, 0, 2, 9, 0, 5, 18, -1, 9, 9, 5, 9, 2, -.05522700026631355, .36888301372528076, -.18913400173187256, 0, 2, 12, 0, 6, 9, -1, 14, 0, 2, 9, 3, -.02158300019800663, -.5216180086135864, .1577260047197342, 0, 2, 6, 0, 6, 9, -1, 8, 0, 2, 9, 3, .02574799954891205, -.0599219985306263, -1.067499041557312, 0, 2, 9, 1, 6, 12, -1, 11, 1, 2, 12, 3, -.013098999857902527, .7895839810371399, .05209999904036522, 0, 2, 5, 9, 13, 4, -1, 5, 11, 13, 2, 2, .0022799998987466097, -1.170443058013916, -.05935699865221977, 0, 2, 5, 8, 19, 3, -1, 5, 9, 19, 1, 3, .008806000463664532, .041717998683452606, .6635259985923767, 0, 2, 9, 9, 6, 8, -1, 9, 13, 6, 4, 2, -.008969999849796295, -.35862699151039124, .060458000749349594, 0, 2, 11, 9, 4, 15, -1, 11, 14, 4, 5, 3, .004023000132292509, .20979399979114532, -.24806000292301178, 0, 3, 2, 0, 6, 14, -1, 2, 0, 3, 7, 2, 5, 7, 3, 7, 2, .02501700073480606, -.1879590004682541, .3954710066318512, 0, 3, 15, 1, 6, 14, -1, 18, 1, 3, 7, 2, 15, 8, 3, 7, 2, -.0059009999968111515, .2566390037536621, -.09491900354623795, 0, 3, 3, 1, 6, 14, -1, 3, 1, 3, 7, 2, 6, 8, 3, 7, 2, .004385000094771385, .033139001578092575, -.46075400710105896, 0, 3, 3, 20, 18, 4, -1, 12, 20, 9, 2, 2, 3, 22, 9, 2, 2, -.033771999180316925, -.9888160228729248, .14636899530887604, 0, 3, 5, 0, 4, 20, -1, 5, 0, 2, 10, 2, 7, 10, 2, 10, 2, .044523000717163086, -.1328669935464859, 1.579679012298584, 0, 3, 16, 8, 8, 12, -1, 20, 8, 4, 6, 2, 16, 14, 4, 6, 2, -.040929000824689865, .3387709856033325, .07497099786996841, 0, 3, 0, 8, 8, 12, -1, 0, 8, 4, 6, 2, 4, 14, 4, 6, 2, .03935199975967407, -.18327899277210236, .4698069989681244, 0, 3, 13, 13, 10, 8, -1, 18, 13, 5, 4, 2, 13, 17, 5, 4, 2, -.07032299786806107, -.983227014541626, .1180810034275055, 0, 3, 1, 13, 10, 8, -1, 1, 13, 5, 4, 2, 6, 17, 5, 4, 2, .035743001848459244, -.03305099904537201, -.8361089825630188, 0, 2, 15, 8, 4, 15, -1, 15, 13, 4, 5, 3, -.04296199977397919, 1.1670809984207153, .08069200068712234, 0, 2, 5, 8, 4, 15, -1, 5, 13, 4, 5, 3, -.021007999777793884, .6386979818344116, -.1762630045413971, 0, 2, 6, 11, 16, 12, -1, 6, 15, 16, 4, 3, -.1574220061302185, -.23302499949932098, .12517499923706055, 0, 2, 2, 11, 16, 12, -1, 2, 15, 16, 4, 3, .007865999825298786, -.2203799933195114, .2719680070877075, 0, 2, 14, 12, 7, 9, -1, 14, 15, 7, 3, 3, .023622000589966774, .16127300262451172, -.4332900047302246, 0, 2, 10, 1, 3, 21, -1, 10, 8, 3, 7, 3, .074692003428936, -.16991999745368958, .5888490080833435, 0, 2, 13, 11, 9, 4, -1, 13, 13, 9, 2, 2, -.0006479999865405262, .25842899084091187, -.03591199964284897, 0, 2, 3, 10, 17, 9, -1, 3, 13, 17, 3, 3, -.016290999948978424, -.7676439881324768, -.020472999662160873, 0, 2, 13, 8, 8, 15, -1, 13, 13, 8, 5, 3, -.03313399851322174, -.2718009948730469, .1432570070028305, 0, 2, 3, 8, 8, 15, -1, 3, 13, 8, 5, 3, .04879799857735634, .0764089971780777, -.4144519865512848, 0, 3, 11, 14, 10, 8, -1, 16, 14, 5, 4, 2, 11, 18, 5, 4, 2, .0022869999520480633, -.03862899914383888, .20753799378871918, 0, 3, 0, 18, 22, 6, -1, 0, 18, 11, 3, 2, 11, 21, 11, 3, 2, .04530400037765503, -.17777900397777557, .6346139907836914, 0, 2, 0, 16, 24, 4, -1, 0, 16, 12, 4, 2, .10705800354480743, .18972299993038177, -.512362003326416, 0, 2, 6, 20, 12, 3, -1, 12, 20, 6, 3, 2, -.04052500054240227, .7061499953269958, -.1780329942703247, 0, 3, 18, 12, 6, 12, -1, 21, 12, 3, 6, 2, 18, 18, 3, 6, 2, .03196899965405464, .06814999878406525, .6873310208320618, 0, 3, 0, 12, 6, 12, -1, 0, 12, 3, 6, 2, 3, 18, 3, 6, 2, -.05761700123548508, .7517049908638, -.15764999389648438, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, .013593999668955803, .19411900639533997, -.245618999004364, 0, 3, 1, 6, 22, 10, -1, 1, 6, 11, 5, 2, 12, 11, 11, 5, 2, .07139600068330765, -.04688100144267082, -.8819829821586609, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, -.014895999804139137, -.44532400369644165, .1767989993095398, 0, 2, 0, 18, 18, 2, -1, 0, 19, 18, 1, 2, -.010026000440120697, .6512269973754883, -.1670999974012375, 0, 2, 3, 15, 19, 3, -1, 3, 16, 19, 1, 3, .0037589999847114086, -.05830100178718567, .34483298659324646, 0, 2, 0, 13, 18, 3, -1, 0, 14, 18, 1, 3, .016263000667095184, -.1558150053024292, .8643270134925842, 0, 2, 15, 17, 9, 6, -1, 15, 19, 9, 2, 3, -.04017600044608116, -.6102859973907471, .1179639995098114, 0, 2, 0, 17, 9, 6, -1, 0, 19, 9, 2, 3, .027080999687314034, -.049601998180150986, -.8999000191688538, 0, 2, 12, 17, 9, 6, -1, 12, 19, 9, 2, 3, .0524200014770031, .11297199875116348, -1.0833640098571777, 0, 2, 3, 17, 9, 6, -1, 3, 19, 9, 2, 3, -.01916000060737133, -.7988010048866272, -.03407900035381317, 0, 2, 16, 2, 3, 20, -1, 17, 2, 1, 20, 3, -.003773000091314316, -.19124099612236023, .21535199880599976, 0, 2, 0, 13, 24, 8, -1, 0, 17, 24, 4, 2, .07576200366020203, -.13421699404716492, 1.6807060241699219, 0, 3, 9, 1, 6, 22, -1, 12, 1, 3, 11, 2, 9, 12, 3, 11, 2, -.022173000499606133, .48600998520851135, .003616000059992075];
    t.frontalface = new Float32Array(e), t.frontalface.tilted = !1
}(objectdetect),
function(t) {
    var e = [20, 20, -1.4562760591506958, 6, 0, 2, 0, 8, 20, 12, -1, 0, 14, 20, 6, 2, .129639595746994, -.7730420827865601, .6835014820098877, 0, 2, 9, 1, 4, 15, -1, 9, 6, 4, 5, 3, -.0463268086314201, .5735275149345398, -.4909768998622894, 0, 2, 6, 10, 9, 2, -1, 9, 10, 3, 2, 3, -.0161730907857418, .6025434136390686, -.3161070942878723, 0, 2, 7, 0, 10, 9, -1, 7, 3, 10, 3, 3, -.0458288416266441, .6417754888534546, -.1554504036903381, 0, 2, 12, 2, 2, 18, -1, 12, 8, 2, 6, 3, -.0537596195936203, .5421931743621826, -.2048082947731018, 0, 2, 8, 6, 8, 6, -1, 8, 9, 8, 3, 2, .0341711901128292, -.2338819056749344, .4841090142726898, -1.2550230026245117, 12, 0, 2, 2, 0, 17, 18, -1, 2, 6, 17, 6, 3, -.2172762006521225, .7109889984130859, -.5936073064804077, 0, 2, 10, 10, 1, 8, -1, 10, 14, 1, 4, 2, .0120719699189067, -.2824048101902008, .5901355147361755, 0, 2, 7, 10, 9, 2, -1, 10, 10, 3, 2, 3, -.0178541392087936, .5313752293586731, -.2275896072387695, 0, 2, 5, 1, 6, 6, -1, 5, 3, 6, 2, 3, .0223336108028889, -.1755609959363937, .633561372756958, 0, 2, 3, 1, 15, 9, -1, 3, 4, 15, 3, 3, -.091420017182827, .6156309247016907, -.1689953058958054, 0, 2, 6, 3, 9, 6, -1, 6, 5, 9, 2, 3, .028973650187254, -.1225007995963097, .7440117001533508, 0, 2, 8, 17, 6, 3, -1, 10, 17, 2, 3, 3, .007820346392691135, .1697437018156052, -.6544165015220642, 0, 2, 9, 10, 9, 1, -1, 12, 10, 3, 1, 3, .0203404892235994, -.1255664974451065, .8271045088768005, 0, 2, 1, 7, 6, 11, -1, 3, 7, 2, 11, 3, -.0119261499494314, .3860568106174469, -.2099234014749527, 0, 2, 9, 18, 3, 1, -1, 10, 18, 1, 1, 3, -.000972811016254127, -.6376119256019592, .129523903131485, 0, 2, 16, 16, 1, 2, -1, 16, 17, 1, 1, 2, 18322050891583785e-21, -.3463147878646851, .2292426973581314, 0, 2, 9, 17, 6, 3, -1, 11, 17, 2, 3, 3, -.008085441775619984, -.6366580128669739, .1307865977287293, -1.372818946838379, 9, 0, 2, 8, 0, 5, 18, -1, 8, 6, 5, 6, 3, -.1181226968765259, .6784452199935913, -.5004578232765198, 0, 2, 6, 7, 9, 7, -1, 9, 7, 3, 7, 3, -.0343327596783638, .6718636155128479, -.3574487864971161, 0, 2, 14, 6, 6, 10, -1, 16, 6, 2, 10, 3, -.0215307995676994, .7222070097923279, -.1819241940975189, 0, 2, 9, 8, 9, 5, -1, 12, 8, 3, 5, 3, -.0219099707901478, .6652938723564148, -.2751022875308991, 0, 2, 3, 7, 9, 6, -1, 6, 7, 3, 6, 3, -.0287135392427444, .6995570063591003, -.1961558014154434, 0, 2, 1, 7, 6, 6, -1, 3, 7, 2, 6, 3, -.0114674801006913, .5926734805107117, -.2209735065698624, 0, 2, 16, 0, 4, 18, -1, 16, 6, 4, 6, 3, -.0226111691445112, .3448306918144226, -.3837955892086029, 0, 2, 0, 17, 3, 3, -1, 0, 18, 3, 1, 3, -.0019308089977130294, -.794457197189331, .1562865972518921, 0, 2, 16, 0, 2, 1, -1, 17, 0, 1, 1, 2, 5641991083393805e-20, -.3089601099491119, .3543108999729157, -1.2879480123519897, 16, 0, 2, 0, 8, 20, 12, -1, 0, 14, 20, 6, 2, .1988652050495148, -.5286070108413696, .3553672134876251, 0, 2, 6, 6, 9, 8, -1, 9, 6, 3, 8, 3, -.0360089391469955, .4210968911647797, -.393489807844162, 0, 2, 5, 3, 12, 9, -1, 5, 6, 12, 3, 3, -.0775698497891426, .4799154102802277, -.2512216866016388, 0, 2, 4, 16, 1, 2, -1, 4, 17, 1, 1, 2, 8263085328508168e-20, -.3847548961639404, .318492203950882, 0, 2, 18, 10, 2, 1, -1, 19, 10, 1, 1, 2, .00032773229759186506, -.2642731964588165, .3254724144935608, 0, 2, 9, 8, 6, 5, -1, 11, 8, 2, 5, 3, -.0185748506337404, .4673658907413483, -.1506727039813995, 0, 2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 2, -7000876212259755e-20, .2931315004825592, -.2536509931087494, 0, 2, 6, 8, 6, 6, -1, 8, 8, 2, 6, 3, -.0185521300882101, .4627366065979004, -.1314805001020432, 0, 2, 11, 7, 6, 7, -1, 13, 7, 2, 7, 3, -.0130304200574756, .4162721931934357, -.1775148957967758, 0, 2, 19, 14, 1, 2, -1, 19, 15, 1, 1, 2, 6569414108525962e-20, -.2803510129451752, .2668074071407318, 0, 2, 6, 17, 1, 2, -1, 6, 18, 1, 1, 2, .00017005260451696813, -.2702724933624268, .2398165017366409, 0, 2, 14, 7, 2, 7, -1, 15, 7, 1, 7, 2, -.0033129199873656034, .4441143870353699, -.1442888975143433, 0, 2, 6, 8, 2, 4, -1, 7, 8, 1, 4, 2, .0017583490116521716, -.1612619012594223, .4294076859951019, 0, 2, 5, 8, 12, 6, -1, 5, 10, 12, 2, 3, -.0251947492361069, .4068729877471924, -.1820258051156998, 0, 2, 2, 17, 1, 3, -1, 2, 18, 1, 1, 3, .0014031709870323539, .0847597867250443, -.8001856803894043, 0, 2, 6, 7, 3, 6, -1, 7, 7, 1, 6, 3, -.007399172987788916, .5576609969139099, -.1184315979480743, -1.2179850339889526, 23, 0, 2, 6, 7, 9, 12, -1, 9, 7, 3, 12, 3, -.0299430806189775, .3581081032752991, -.3848763108253479, 0, 2, 6, 2, 11, 12, -1, 6, 6, 11, 4, 3, -.1256738007068634, .3931693136692047, -.3001225888729096, 0, 2, 1, 12, 5, 8, -1, 1, 16, 5, 4, 2, .0053635272197425365, -.4390861988067627, .1925701051950455, 0, 2, 14, 7, 6, 7, -1, 16, 7, 2, 7, 3, -.008097182027995586, .399066686630249, -.2340787053108215, 0, 2, 10, 8, 6, 6, -1, 12, 8, 2, 6, 3, -.0165979098528624, .4209528863430023, -.2267484068870544, 0, 2, 16, 18, 4, 2, -1, 16, 19, 4, 1, 2, -.0020199299324303865, -.7415673136711121, .1260118931531906, 0, 2, 18, 17, 2, 3, -1, 18, 18, 2, 1, 3, -.0015202340437099338, -.7615460157394409, .0863736122846603, 0, 2, 9, 7, 3, 7, -1, 10, 7, 1, 7, 3, -.004966394044458866, .4218223989009857, -.1790491938591003, 0, 2, 5, 6, 6, 8, -1, 7, 6, 2, 8, 3, -.0192076005041599, .4689489901065826, -.1437875032424927, 0, 2, 2, 6, 6, 11, -1, 4, 6, 2, 11, 3, -.0122226802632213, .3284207880496979, -.218021497130394, 0, 2, 8, 10, 12, 8, -1, 8, 14, 12, 4, 2, .0575486682355404, -.3676880896091461, .2435711026191711, 0, 2, 7, 17, 6, 3, -1, 9, 17, 2, 3, 3, -.00957940798252821, -.7224506735801697, .0636645630002022, 0, 2, 10, 9, 3, 3, -1, 11, 9, 1, 3, 3, -.002954574069008231, .358464390039444, -.1669632941484451, 0, 2, 8, 8, 3, 6, -1, 9, 8, 1, 6, 3, -.004201799165457487, .390948086977005, -.1204179003834724, 0, 2, 7, 0, 6, 5, -1, 9, 0, 2, 5, 3, -.0136249903589487, -.5876771807670593, .0884047299623489, 0, 2, 6, 17, 1, 3, -1, 6, 18, 1, 1, 3, 6285311246756464e-20, -.2634845972061157, .2141927927732468, 0, 2, 0, 18, 4, 2, -1, 0, 19, 4, 1, 2, -.0026782939676195383, -.7839016914367676, .0805269628763199, 0, 2, 4, 1, 11, 9, -1, 4, 4, 11, 3, 3, -.0705971792340279, .414692610502243, -.1398995965719223, 0, 2, 3, 1, 14, 9, -1, 3, 4, 14, 3, 3, .0920936465263367, -.1305518001317978, .5043578147888184, 0, 2, 0, 9, 6, 4, -1, 2, 9, 2, 4, 3, -.008800438605248928, .3660975098609924, -.1403664946556091, 0, 2, 18, 13, 1, 2, -1, 18, 14, 1, 1, 2, 750809776945971e-19, -.2970443964004517, .207029402256012, 0, 2, 13, 5, 3, 11, -1, 14, 5, 1, 11, 3, -.002987045096233487, .3561570048332214, -.1544596999883652, 0, 3, 0, 18, 8, 2, -1, 0, 18, 4, 1, 2, 4, 19, 4, 1, 2, -.002644150983542204, -.5435351729393005, .1029511019587517, -1.2905240058898926, 27, 0, 2, 5, 8, 12, 5, -1, 9, 8, 4, 5, 3, -.0478624701499939, .4152823984622955, -.3418582081794739, 0, 2, 4, 7, 11, 10, -1, 4, 12, 11, 5, 2, .087350532412529, -.3874978125095367, .2420420050621033, 0, 2, 14, 9, 6, 4, -1, 16, 9, 2, 4, 3, -.0168494991958141, .5308247804641724, -.1728291064500809, 0, 2, 0, 7, 6, 8, -1, 3, 7, 3, 8, 2, -.0288700293749571, .3584350943565369, -.2240259051322937, 0, 2, 0, 16, 3, 3, -1, 0, 17, 3, 1, 3, .00256793899461627, .1499049961566925, -.6560940742492676, 0, 2, 7, 11, 12, 1, -1, 11, 11, 4, 1, 3, -.0241166595369577, .5588967800140381, -.148102805018425, 0, 2, 4, 8, 9, 4, -1, 7, 8, 3, 4, 3, -.0328266583383083, .4646868109703064, -.1078552976250649, 0, 2, 5, 16, 6, 4, -1, 7, 16, 2, 4, 3, -.0152330603450537, -.7395442724227905, .056236881762743, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, -.0003020951116923243, -.4554882049560547, .0970698371529579, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, .0007536510820500553, .0951472967863083, -.5489501953125, 0, 3, 4, 9, 4, 10, -1, 4, 9, 2, 5, 2, 6, 14, 2, 5, 2, -.0106389503926039, .4091297090053558, -.1230840981006622, 0, 2, 4, 8, 6, 4, -1, 6, 8, 2, 4, 3, -.007521783001720905, .4028914868831635, -.1604878008365631, 0, 2, 10, 2, 2, 18, -1, 10, 8, 2, 6, 3, -.1067709997296333, .6175932288169861, -.0730911865830421, 0, 3, 0, 5, 8, 6, -1, 0, 5, 4, 3, 2, 4, 8, 4, 3, 2, .0162569191306829, -.1310368031263351, .3745365142822266, 0, 2, 6, 0, 6, 5, -1, 8, 0, 2, 5, 3, -.020679360255599, -.71402907371521, .0523900091648102, 0, 2, 18, 0, 2, 14, -1, 18, 7, 2, 7, 2, .0170523691922426, .1282286047935486, -.3108068108558655, 0, 2, 8, 18, 4, 2, -1, 10, 18, 2, 2, 2, -.0057122060097754, -.605565071105957, .0818847566843033, 0, 2, 1, 17, 6, 3, -1, 1, 18, 6, 1, 3, 20851430235779844e-21, -.2681298851966858, .1445384025573731, 0, 2, 11, 8, 3, 5, -1, 12, 8, 1, 5, 3, .007928443141281605, -.078795351088047, .5676258206367493, 0, 2, 11, 8, 3, 4, -1, 12, 8, 1, 4, 3, -.0025217379443347454, .3706862926483154, -.1362057030200958, 0, 2, 11, 0, 6, 5, -1, 13, 0, 2, 5, 3, -.0224261991679668, -.6870499849319458, .0510628595948219, 0, 2, 1, 7, 6, 7, -1, 3, 7, 2, 7, 3, -.007645144127309322, .2349222004413605, -.1790595948696137, 0, 2, 0, 13, 1, 3, -1, 0, 14, 1, 1, 3, -.0011175329564139247, -.5986905097961426, .0743244364857674, 0, 2, 3, 2, 9, 6, -1, 3, 4, 9, 2, 3, .0192127898335457, -.1570255011320114, .2973746955394745, 0, 2, 8, 6, 9, 2, -1, 8, 7, 9, 1, 2, .00562934298068285, -.0997690185904503, .4213027060031891, 0, 2, 0, 14, 3, 6, -1, 0, 16, 3, 2, 3, -.00956718623638153, -.6085879802703857, .0735062584280968, 0, 2, 1, 11, 6, 4, -1, 3, 11, 2, 4, 3, .0112179601565003, -.103208102285862, .4190984964370728, -1.160048007965088, 28, 0, 2, 6, 9, 9, 3, -1, 9, 9, 3, 3, 3, -.0174864400178194, .3130728006362915, -.3368118107318878, 0, 2, 6, 0, 9, 6, -1, 6, 2, 9, 2, 3, .0307146497070789, -.1876619011163712, .5378080010414124, 0, 2, 8, 5, 6, 6, -1, 8, 7, 6, 2, 3, -.0221887193620205, .3663788139820099, -.1612481027841568, 0, 2, 1, 12, 2, 1, -1, 2, 12, 1, 1, 2, -50700771680567414e-21, .2124571055173874, -.2844462096691132, 0, 2, 10, 10, 6, 2, -1, 12, 10, 2, 2, 3, -.007017042022198439, .3954311013221741, -.1317359060049057, 0, 2, 13, 8, 6, 6, -1, 15, 8, 2, 6, 3, -.00685636093840003, .3037385940551758, -.2065781950950623, 0, 2, 6, 16, 6, 4, -1, 8, 16, 2, 4, 3, -.0141292596235871, -.7650300860404968, .0982131883502007, 0, 2, 8, 0, 9, 9, -1, 8, 3, 9, 3, 3, -.047915481030941, .483073890209198, -.1300680935382843, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, 47032979637151584e-21, -.2521657049655914, .2438668012619019, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, .0010221180273219943, .0688576027750969, -.6586114168167114, 0, 2, 7, 10, 3, 3, -1, 8, 10, 1, 3, 3, -.002605610992759466, .4294202923774719, -.1302246004343033, 0, 3, 9, 14, 2, 2, -1, 9, 14, 1, 1, 2, 10, 15, 1, 1, 2, 5450534081319347e-20, -.1928862035274506, .2895849943161011, 0, 3, 9, 14, 2, 2, -1, 9, 14, 1, 1, 2, 10, 15, 1, 1, 2, -6672115705441684e-20, .3029071092605591, -.1985436975955963, 0, 2, 0, 8, 19, 12, -1, 0, 14, 19, 6, 2, .2628143131732941, -.2329394072294235, .2369246035814285, 0, 2, 7, 6, 9, 14, -1, 10, 6, 3, 14, 3, -.0235696695744991, .1940104067325592, -.2848461866378784, 0, 2, 13, 8, 3, 4, -1, 14, 8, 1, 4, 3, -.003912017215043306, .5537897944450378, -.0956656783819199, 0, 2, 4, 17, 1, 3, -1, 4, 18, 1, 1, 3, 5078879985376261e-20, -.239126592874527, .217994898557663, 0, 2, 4, 9, 6, 3, -1, 6, 9, 2, 3, 3, -.007873201742768288, .4069742858409882, -.1276804059743881, 0, 2, 2, 18, 5, 2, -1, 2, 19, 5, 1, 2, -.0016778609715402126, -.5774465799331665, .0973247885704041, 0, 3, 7, 8, 2, 2, -1, 7, 8, 1, 1, 2, 8, 9, 1, 1, 2, -.0002683243073988706, .2902188003063202, -.1683126986026764, 0, 3, 7, 8, 2, 2, -1, 7, 8, 1, 1, 2, 8, 9, 1, 1, 2, 7868718239478767e-20, -.1955157071352005, .2772096991539002, 0, 2, 5, 10, 13, 2, -1, 5, 11, 13, 1, 2, .0129535002633929, -.0968383178114891, .4032387137413025, 0, 2, 10, 8, 1, 9, -1, 10, 11, 1, 3, 3, -.0130439596250653, .4719856977462769, -.0892875492572784, 0, 3, 15, 8, 2, 12, -1, 15, 8, 1, 6, 2, 16, 14, 1, 6, 2, .0030261781066656113, -.1362338066101074, .3068627119064331, 0, 2, 4, 0, 3, 5, -1, 5, 0, 1, 5, 3, -.006043803878128529, -.779541015625, .0573163107037544, 0, 2, 12, 6, 3, 7, -1, 13, 6, 1, 7, 3, -.0022507249377667904, .3087705969810486, -.1500630974769592, 0, 2, 7, 16, 6, 4, -1, 9, 16, 2, 4, 3, .0158268101513386, .0645518898963928, -.7245556712150574, 0, 2, 9, 16, 2, 1, -1, 10, 16, 1, 1, 2, 6586450763279572e-20, -.1759884059429169, .2321038991212845, -1.2257250547409058, 36, 0, 2, 6, 10, 9, 2, -1, 9, 10, 3, 2, 3, -.0278548691421747, .4551844894886017, -.1809991002082825, 0, 2, 0, 6, 15, 14, -1, 0, 13, 15, 7, 2, .1289504021406174, -.5256553292274475, .1618890017271042, 0, 2, 9, 1, 5, 6, -1, 9, 3, 5, 2, 3, .0244031809270382, -.1497496068477631, .4235737919807434, 0, 2, 3, 9, 3, 4, -1, 4, 9, 1, 4, 3, -.0024458570405840874, .3294866979122162, -.1744769066572189, 0, 2, 5, 7, 3, 6, -1, 6, 7, 1, 6, 3, -.0035336529836058617, .4742664098739624, -.0736183598637581, 0, 2, 17, 16, 1, 2, -1, 17, 17, 1, 1, 2, 5135815081303008e-20, -.3042193055152893, .1563327014446259, 0, 2, 9, 8, 6, 12, -1, 11, 8, 2, 12, 3, -.0162256807088852, .2300218045711517, -.2035982012748718, 0, 2, 6, 10, 6, 1, -1, 8, 10, 2, 1, 3, -.004600700922310352, .4045926928520203, -.1348544061183929, 0, 2, 7, 17, 9, 3, -1, 10, 17, 3, 3, 3, -.0219289995729923, -.6872448921203613, .0806842669844627, 0, 2, 14, 18, 6, 2, -1, 14, 19, 6, 1, 2, -.002897121012210846, -.6961960792541504, .0485452190041542, 0, 2, 9, 5, 3, 14, -1, 10, 5, 1, 14, 3, -.0044074649922549725, .2516626119613648, -.1623664945363998, 0, 2, 8, 16, 9, 4, -1, 11, 16, 3, 4, 3, .0284371692687273, .0603942610323429, -.6674445867538452, 0, 2, 0, 0, 4, 14, -1, 0, 7, 4, 7, 2, .0832128822803497, .0643579214811325, -.5362604260444641, 0, 2, 8, 1, 6, 3, -1, 10, 1, 2, 3, 3, -.0124193299561739, -.708168625831604, .0575266107916832, 0, 2, 6, 8, 3, 4, -1, 7, 8, 1, 4, 3, -.004699259996414185, .5125433206558228, -.0873508006334305, 0, 2, 4, 8, 3, 4, -1, 5, 8, 1, 4, 3, -.0007802580948919058, .266876608133316, -.1796150952577591, 0, 2, 5, 1, 6, 5, -1, 7, 1, 2, 5, 3, -.0197243392467499, -.6756373047828674, .0729419067502022, 0, 2, 1, 18, 1, 2, -1, 1, 19, 1, 1, 2, .001026925048790872, .0539193190634251, -.5554018020629883, 0, 2, 7, 0, 6, 6, -1, 7, 2, 6, 2, 3, -.0259571895003319, .5636252760887146, -.0718983933329582, 0, 2, 0, 18, 4, 2, -1, 0, 19, 4, 1, 2, -.0012552699772641063, -.5034663081169128, .0896914526820183, 0, 2, 12, 3, 8, 12, -1, 12, 7, 8, 4, 3, -.0499705784022808, .1768511980772018, -.2230195999145508, 0, 2, 12, 9, 3, 4, -1, 13, 9, 1, 4, 3, -.002989961067214608, .391224205493927, -.1014975011348724, 0, 2, 12, 8, 3, 5, -1, 13, 8, 1, 5, 3, .004854684229940176, -.1177017986774445, .4219093918800354, 0, 2, 16, 0, 2, 1, -1, 17, 0, 1, 1, 2, .0001044886012095958, -.1733397990465164, .223444402217865, 0, 2, 5, 17, 1, 3, -1, 5, 18, 1, 1, 3, 5968926052446477e-20, -.2340963035821915, .1655824035406113, 0, 2, 10, 2, 3, 6, -1, 10, 4, 3, 2, 3, -.0134239196777344, .4302381873130798, -.0997236520051956, 0, 2, 4, 17, 2, 3, -1, 4, 18, 2, 1, 3, .002258199965581298, .0727209895849228, -.5750101804733276, 0, 2, 12, 7, 1, 9, -1, 12, 10, 1, 3, 3, -.0125462803989649, .3618457913398743, -.1145701035857201, 0, 2, 7, 6, 3, 9, -1, 8, 6, 1, 9, 3, -.002870576921850443, .2821053862571716, -.1236755028367043, 0, 2, 17, 13, 3, 6, -1, 17, 15, 3, 2, 3, .0197856407612562, .0478767491877079, -.806662380695343, 0, 2, 7, 7, 3, 8, -1, 8, 7, 1, 8, 3, .004758893046528101, -.1092538982629776, .3374697864055634, 0, 2, 5, 0, 3, 5, -1, 6, 0, 1, 5, 3, -.006997426971793175, -.8029593825340271, .0457067005336285, 0, 2, 4, 6, 9, 8, -1, 7, 6, 3, 8, 3, -.0130334803834558, .18680439889431, -.176889106631279, 0, 2, 2, 9, 3, 3, -1, 3, 9, 1, 3, 3, -.0013742579612880945, .2772547900676727, -.1280900985002518, 0, 2, 16, 18, 4, 2, -1, 16, 19, 4, 1, 2, .0027657810132950544, .0907589420676231, -.4259473979473114, 0, 2, 17, 10, 3, 10, -1, 17, 15, 3, 5, 2, .0002894184144679457, -.388163298368454, .089267797768116, -1.2863140106201172, 47, 0, 2, 8, 9, 6, 4, -1, 10, 9, 2, 4, 3, -.0144692296162248, .3750782907009125, -.2492828965187073, 0, 2, 5, 2, 10, 12, -1, 5, 6, 10, 4, 3, -.1331762969493866, .3016637861728668, -.2241407036781311, 0, 2, 6, 9, 6, 3, -1, 8, 9, 2, 3, 3, -.010132160037756, .3698559105396271, -.1785001009702683, 0, 2, 11, 7, 3, 7, -1, 12, 7, 1, 7, 3, -.007851118221879005, .4608676135540009, -.1293139010667801, 0, 2, 12, 8, 6, 4, -1, 14, 8, 2, 4, 3, -.0142958397045732, .4484142959117889, -.1022624000906944, 0, 2, 14, 8, 6, 5, -1, 16, 8, 2, 5, 3, -.005960694048553705, .279279887676239, -.1532382965087891, 0, 2, 12, 12, 2, 4, -1, 12, 14, 2, 2, 2, .010932769626379, -.1514174044132233, .3988964855670929, 0, 2, 3, 15, 1, 2, -1, 3, 16, 1, 1, 2, 50430990086169913e-21, -.2268157005310059, .2164438962936401, 0, 2, 12, 7, 3, 4, -1, 13, 7, 1, 4, 3, -.0058431681245565414, .4542014896869659, -.1258715987205505, 0, 2, 10, 0, 6, 6, -1, 12, 0, 2, 6, 3, -.0223462097346783, -.6269019246101379, .0824031233787537, 0, 2, 10, 6, 3, 8, -1, 11, 6, 1, 8, 3, -.00488366698846221, .2635925114154816, -.1468663066625595, 0, 2, 16, 17, 1, 2, -1, 16, 18, 1, 1, 2, 7550600275862962e-20, -.2450702041387558, .1667888015508652, 0, 2, 16, 16, 1, 3, -1, 16, 17, 1, 1, 3, -.0004902699729427695, -.426499605178833, .0899735614657402, 0, 2, 11, 11, 1, 2, -1, 11, 12, 1, 1, 2, .0014861579984426498, -.1204025000333786, .3009765148162842, 0, 2, 3, 7, 6, 9, -1, 5, 7, 2, 9, 3, -.0119883399456739, .278524786233902, -.122443400323391, 0, 2, 4, 18, 9, 1, -1, 7, 18, 3, 1, 3, .0105022396892309, .0404527597129345, -.7405040860176086, 0, 2, 0, 11, 4, 9, -1, 0, 14, 4, 3, 3, -.0309630092233419, -.6284269094467163, .048013761639595, 0, 2, 9, 17, 6, 3, -1, 11, 17, 2, 3, 3, .0114145204424858, .0394052118062973, -.7167412042617798, 0, 2, 7, 8, 6, 12, -1, 9, 8, 2, 12, 3, -.0123370001092553, .1994132995605469, -.1927430033683777, 0, 2, 6, 8, 3, 4, -1, 7, 8, 1, 4, 3, -.005994226783514023, .5131816267967224, -.0616580583155155, 0, 2, 3, 17, 1, 3, -1, 3, 18, 1, 1, 3, -.0011923230485990644, -.72605299949646, .0506527200341225, 0, 2, 11, 9, 6, 4, -1, 13, 9, 2, 4, 3, -.0074582789093256, .2960307896137238, -.1175478994846344, 0, 2, 6, 1, 3, 2, -1, 7, 1, 1, 2, 3, .0027877509128302336, .0450687110424042, -.6953541040420532, 0, 2, 1, 0, 2, 1, -1, 2, 0, 1, 1, 2, -.0002250320976600051, .200472503900528, -.1577524989843369, 0, 3, 1, 0, 2, 14, -1, 1, 0, 1, 7, 2, 2, 7, 1, 7, 2, -.005036788992583752, .292998194694519, -.1170049980282784, 0, 2, 5, 5, 11, 8, -1, 5, 9, 11, 4, 2, .0747421607375145, -.1139231994748116, .3025662004947662, 0, 2, 9, 3, 5, 6, -1, 9, 5, 5, 2, 3, .0202555190771818, -.1051589027047157, .4067046046257019, 0, 2, 7, 9, 5, 10, -1, 7, 14, 5, 5, 2, .0442145094275475, -.2763164043426514, .1236386969685555, 0, 2, 15, 10, 2, 2, -1, 16, 10, 1, 2, 2, -.0008725955849513412, .2435503005981445, -.1330094933509827, 0, 2, 0, 18, 8, 2, -1, 0, 19, 8, 1, 2, -.0024453739169985056, -.5386617183685303, .062510646879673, 0, 2, 7, 17, 1, 3, -1, 7, 18, 1, 1, 3, 827253534225747e-19, -.2077220976352692, .1627043932676315, 0, 2, 7, 2, 11, 6, -1, 7, 4, 11, 2, 3, -.036627110093832, .3656840920448303, -.0903302803635597, 0, 2, 8, 3, 9, 3, -1, 8, 4, 9, 1, 3, .0030996399000287056, -.1318302005529404, .2535429894924164, 0, 2, 0, 9, 2, 2, -1, 0, 10, 2, 1, 2, -.0024709280114620924, -.5685349702835083, .0535054318606853, 0, 2, 0, 5, 3, 6, -1, 0, 7, 3, 2, 3, -.0141146704554558, -.4859901070594788, .0584852509200573, 0, 3, 6, 7, 2, 2, -1, 6, 7, 1, 1, 2, 7, 8, 1, 1, 2, .0008453726186417043, -.0800936371088028, .4026564955711365, 0, 2, 7, 6, 3, 6, -1, 8, 6, 1, 6, 3, -.007109863217920065, .4470323920249939, -.0629474371671677, 0, 2, 12, 1, 6, 4, -1, 14, 1, 2, 4, 3, -.0191259607672691, -.6642286777496338, .0498227700591087, 0, 2, 9, 11, 6, 8, -1, 11, 11, 2, 8, 3, -.005077301058918238, .1737940013408661, -.168505996465683, 0, 2, 17, 15, 3, 3, -1, 17, 16, 3, 1, 3, -.002919828984886408, -.6011028289794922, .0574279390275478, 0, 2, 6, 6, 3, 9, -1, 6, 9, 3, 3, 3, -.0249021500349045, .233979806303978, -.1181845963001251, 0, 3, 0, 5, 8, 6, -1, 0, 5, 4, 3, 2, 4, 8, 4, 3, 2, .02014777995646, -.0894598215818405, .3602440059185028, 0, 2, 0, 6, 1, 3, -1, 0, 7, 1, 1, 3, .001759764039888978, .0494584403932095, -.6310262084007263, 0, 2, 17, 0, 2, 6, -1, 18, 0, 1, 6, 2, .0013812039978802204, -.1521805971860886, .1897173970937729, 0, 2, 10, 17, 6, 3, -1, 12, 17, 2, 3, 3, -.0109045403078198, -.5809738039970398, .0448627285659313, 0, 3, 13, 15, 2, 2, -1, 13, 15, 1, 1, 2, 14, 16, 1, 1, 2, 7515717879869044e-20, -.1377734988927841, .1954316049814224, 0, 2, 4, 0, 12, 3, -1, 4, 1, 12, 1, 3, .003864977043122053, -.1030222997069359, .2537496984004974, -1.1189440488815308, 48, 0, 2, 5, 3, 10, 9, -1, 5, 6, 10, 3, 3, -.102158896625042, .4168125987052918, -.1665562987327576, 0, 2, 7, 7, 9, 7, -1, 10, 7, 3, 7, 3, -.051939819008112, .3302395045757294, -.2071571052074432, 0, 2, 5, 8, 9, 6, -1, 8, 8, 3, 6, 3, -.0427177809178829, .2609373033046722, -.1601389050483704, 0, 2, 0, 16, 6, 2, -1, 0, 17, 6, 1, 2, .00043890418601222336, -.3475053012371063, .1391891986131668, 0, 2, 12, 6, 7, 14, -1, 12, 13, 7, 7, 2, .0242643896490335, -.4255205988883972, .1357838064432144, 0, 2, 13, 7, 6, 8, -1, 15, 7, 2, 8, 3, -.0238205995410681, .3174980878829956, -.1665204018354416, 0, 2, 2, 10, 6, 3, -1, 4, 10, 2, 3, 3, -.007051818072795868, .3094717860221863, -.1333830058574677, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, -.0006851715734228492, -.6008226275444031, .0877470001578331, 0, 2, 7, 1, 6, 2, -1, 7, 2, 6, 1, 2, .0053705149330198765, -.1231144964694977, .3833355009555817, 0, 2, 6, 0, 6, 4, -1, 6, 2, 6, 2, 2, -.0134035395458341, .3387736976146698, -.1014048978686333, 0, 2, 8, 18, 6, 2, -1, 10, 18, 2, 2, 3, -.006685636006295681, -.6119359731674194, .0477402210235596, 0, 2, 7, 6, 5, 2, -1, 7, 7, 5, 1, 2, -.0042887418530881405, .2527579069137573, -.1443451046943665, 0, 2, 6, 7, 3, 6, -1, 7, 7, 1, 6, 3, -.0108767496421933, .5477573275566101, -.0594554804265499, 0, 3, 18, 18, 2, 2, -1, 18, 18, 1, 1, 2, 19, 19, 1, 1, 2, .0003788264002650976, .0834103003144264, -.4422636926174164, 0, 2, 16, 8, 3, 7, -1, 17, 8, 1, 7, 3, -.002455014968290925, .2333099991083145, -.1396448016166687, 0, 2, 0, 16, 2, 3, -1, 0, 17, 2, 1, 3, .0012721839593723416, .0604802891612053, -.4945608973503113, 0, 2, 5, 19, 6, 1, -1, 7, 19, 2, 1, 3, -.004893315955996513, -.6683326959609985, .0462184995412827, 0, 2, 9, 5, 6, 6, -1, 9, 7, 6, 2, 3, .0264499895274639, -.0732353627681732, .4442596137523651, 0, 2, 0, 10, 2, 4, -1, 0, 12, 2, 2, 2, -.003370607038959861, -.4246433973312378, .0686765611171722, 0, 2, 0, 9, 4, 3, -1, 2, 9, 2, 3, 2, -.0029559480026364326, .1621803939342499, -.1822299957275391, 0, 2, 1, 10, 6, 9, -1, 3, 10, 2, 9, 3, .0306199099868536, -.0586433410644531, .532636284828186, 0, 2, 9, 0, 6, 2, -1, 11, 0, 2, 2, 3, -.009576590731739998, -.6056268215179443, .0533459894359112, 0, 2, 14, 1, 2, 1, -1, 15, 1, 1, 1, 2, 6637249316554517e-20, -.1668083965778351, .1928416043519974, 0, 2, 0, 8, 1, 4, -1, 0, 10, 1, 2, 2, .005097595043480396, .0441195107996464, -.574588418006897, 0, 3, 15, 6, 2, 2, -1, 15, 6, 1, 1, 2, 16, 7, 1, 1, 2, .0003711271856445819, -.1108639985322952, .2310539036989212, 0, 2, 7, 5, 3, 6, -1, 8, 5, 1, 6, 3, -.008660758845508099, .4045628905296326, -.062446091324091, 0, 2, 19, 17, 1, 3, -1, 19, 18, 1, 1, 3, .0008748915861360729, .0648751482367516, -.4487104117870331, 0, 2, 7, 10, 3, 1, -1, 8, 10, 1, 1, 3, .0011120870476588607, -.09386146068573, .3045391142368317, 0, 2, 12, 1, 6, 6, -1, 14, 1, 2, 6, 3, -.0238378196954727, -.5888742804527283, .0466594211757183, 0, 2, 15, 5, 2, 1, -1, 16, 5, 1, 1, 2, .00022272899514064193, -.1489859968423843, .1770195066928864, 0, 2, 8, 2, 7, 4, -1, 8, 4, 7, 2, 2, .0244674701243639, -.0557896010577679, .4920830130577087, 0, 2, 4, 0, 14, 15, -1, 4, 5, 14, 5, 3, -.1423932015895844, .1519200056791306, -.1877889931201935, 0, 2, 7, 8, 6, 6, -1, 9, 8, 2, 6, 3, -.0201231203973293, .2178010046482086, -.1208190023899078, 0, 2, 11, 17, 1, 3, -1, 11, 18, 1, 1, 3, .00011513679783092812, -.1685658991336823, .1645192950963974, 0, 3, 12, 16, 2, 4, -1, 12, 16, 1, 2, 2, 13, 18, 1, 2, 2, -.0027556740678846836, -.6944203972816467, .039449468255043, 0, 2, 10, 13, 2, 1, -1, 11, 13, 1, 1, 2, -7584391278214753e-20, .1894136965274811, -.151838406920433, 0, 2, 11, 8, 3, 3, -1, 12, 8, 1, 3, 3, -.0070697711780667305, .4706459939479828, -.0579276196658611, 0, 2, 2, 0, 6, 8, -1, 4, 0, 2, 8, 3, -.0373931787908077, -.7589244842529297, .0341160483658314, 0, 3, 3, 5, 6, 6, -1, 3, 5, 3, 3, 2, 6, 8, 3, 3, 2, -.0159956105053425, .3067046999931335, -.0875255763530731, 0, 2, 10, 8, 3, 3, -1, 11, 8, 1, 3, 3, -.003118399064987898, .2619537115097046, -.0912148877978325, 0, 2, 5, 17, 4, 2, -1, 5, 18, 4, 1, 2, .001065136049874127, -.1742756068706513, .1527764052152634, 0, 2, 8, 16, 5, 2, -1, 8, 17, 5, 1, 2, -.0016029420075938106, .3561263084411621, -.0766299962997437, 0, 2, 0, 4, 3, 3, -1, 0, 5, 3, 1, 3, .004361990839242935, .04935697093606, -.5922877192497253, 0, 2, 6, 3, 6, 2, -1, 8, 3, 2, 2, 3, -.0107799097895622, -.6392217874526978, .0332045406103134, 0, 2, 4, 4, 9, 3, -1, 7, 4, 3, 3, 3, -.004359086975455284, .1610738933086395, -.1522132009267807, 0, 2, 0, 13, 1, 4, -1, 0, 15, 1, 2, 2, .007459606975317001, .0331729613244534, -.7500774264335632, 0, 2, 0, 17, 8, 3, -1, 0, 18, 8, 1, 3, .008138544857501984, .0263252798467875, -.7173116207122803, 0, 2, 6, 1, 11, 6, -1, 6, 3, 11, 2, 3, -.0333384908735752, .3353661000728607, -.070803590118885, -1.1418989896774292, 55, 0, 2, 4, 10, 6, 2, -1, 6, 10, 2, 2, 3, .0195539798587561, -.1043972000479698, .5312895178794861, 0, 2, 10, 8, 1, 12, -1, 10, 14, 1, 6, 2, .0221229195594788, -.2474727034568787, .2084725052118301, 0, 2, 5, 8, 3, 4, -1, 6, 8, 1, 4, 3, -.004182938951998949, .3828943967819214, -.1471157968044281, 0, 2, 0, 17, 1, 3, -1, 0, 18, 1, 1, 3, -.0008638172876089811, -.6263288855552673, .1199325993657112, 0, 2, 0, 17, 1, 3, -1, 0, 18, 1, 1, 3, .0007995861233212054, .0925734713673592, -.5516883134841919, 0, 2, 13, 8, 3, 4, -1, 14, 8, 1, 4, 3, .009152757003903389, -.0729298070073128, .5551251173019409, 0, 2, 1, 5, 5, 4, -1, 1, 7, 5, 2, 2, -.003938868176192045, .2019603997468948, -.2091203927993774, 0, 2, 18, 14, 1, 2, -1, 18, 15, 1, 1, 2, .00014613410166930407, -.278618186712265, .1381741017103195, 0, 2, 13, 8, 2, 4, -1, 14, 8, 1, 4, 2, -.0031691689509898424, .3668589890003204, -.0763082429766655, 0, 2, 10, 6, 6, 8, -1, 12, 6, 2, 8, 3, -.0221893899142742, .39096599817276, -.1097154021263123, 0, 2, 8, 6, 6, 10, -1, 10, 6, 2, 10, 3, -.007452360820025206, .1283859014511108, -.2415986955165863, 0, 2, 17, 16, 1, 3, -1, 17, 17, 1, 1, 3, .000779970025178045, .0719780698418617, -.4397650063037872, 0, 2, 1, 7, 2, 10, -1, 2, 7, 1, 10, 2, -.004678363911807537, .2156984955072403, -.1420592069625855, 0, 2, 5, 9, 6, 3, -1, 7, 9, 2, 3, 3, -.0151886399835348, .364587813615799, -.08267592638731, 0, 2, 0, 8, 5, 12, -1, 0, 14, 5, 6, 2, .0050619798712432384, -.3438040912151337, .0920682325959206, 0, 2, 0, 11, 1, 3, -1, 0, 12, 1, 1, 3, -.0017351920250803232, -.6172549724578857, .0492144785821438, 0, 2, 6, 16, 6, 4, -1, 8, 16, 2, 4, 3, -.012423450127244, -.5855895280838013, .0461126007139683, 0, 2, 0, 6, 2, 6, -1, 0, 8, 2, 2, 3, -.0130314296111465, -.5971078872680664, .0406724587082863, 0, 2, 11, 18, 2, 1, -1, 12, 18, 1, 1, 2, -.0012369629694148898, -.6833416819572449, .0331561788916588, 0, 2, 5, 1, 9, 2, -1, 5, 2, 9, 1, 2, .006102210842072964, -.0947292372584343, .3010224103927612, 0, 2, 0, 0, 1, 2, -1, 0, 1, 1, 1, 2, .0006695284973829985, .0818168669939041, -.351960301399231, 0, 2, 15, 9, 3, 3, -1, 16, 9, 1, 3, 3, -.001797058037482202, .2371897995471954, -.1176870986819267, 0, 2, 18, 16, 1, 3, -1, 18, 17, 1, 1, 3, -.0007107452838681638, -.4476378858089447, .0576824806630611, 0, 2, 11, 10, 6, 1, -1, 13, 10, 2, 1, 3, -.005912647116929293, .4342541098594666, -.0668685734272003, 0, 2, 1, 3, 4, 4, -1, 3, 3, 2, 4, 2, -.003313214983791113, .181500107049942, -.1418032050132752, 0, 2, 11, 2, 1, 18, -1, 11, 8, 1, 6, 3, -.0608146600425243, .4722171127796173, -.0614106394350529, 0, 2, 9, 1, 5, 12, -1, 9, 5, 5, 4, 3, -.0967141836881638, .2768316864967346, -.0944900363683701, 0, 2, 12, 0, 8, 1, -1, 16, 0, 4, 1, 2, .003907355014234781, -.1227853000164032, .2105740010738373, 0, 2, 8, 6, 3, 10, -1, 9, 6, 1, 10, 3, -.009043186902999878, .3564156889915466, -.0778062269091606, 0, 2, 19, 2, 1, 6, -1, 19, 4, 1, 2, 3, -.004880003165453672, -.4103479087352753, .0696943774819374, 0, 2, 18, 6, 2, 2, -1, 18, 7, 2, 1, 2, -.00435474282130599, -.7301788926124573, .0366551503539085, 0, 2, 7, 7, 3, 4, -1, 8, 7, 1, 4, 3, -.009650062769651413, .5518112778663635, -.0531680807471275, 0, 2, 5, 0, 6, 5, -1, 7, 0, 2, 5, 3, -.0173973105847836, -.5708423256874084, .0502140894532204, 0, 2, 0, 3, 7, 3, -1, 0, 4, 7, 1, 3, -.006830432917922735, -.4618028104305267, .0502026900649071, 0, 2, 1, 6, 2, 1, -1, 2, 6, 1, 1, 2, .00033255619928240776, -.0953627303242683, .2598375976085663, 0, 3, 4, 8, 2, 10, -1, 4, 8, 1, 5, 2, 5, 13, 1, 5, 2, -.0023100529797375202, .2287247031927109, -.1053353026509285, 0, 3, 2, 18, 18, 2, -1, 2, 18, 9, 1, 2, 11, 19, 9, 1, 2, -.0075426651164889336, -.5699051022529602, .0488634593784809, 0, 3, 2, 7, 4, 4, -1, 2, 7, 2, 2, 2, 4, 9, 2, 2, 2, -.0052723060362041, .3514518141746521, -.0823901072144508, 0, 2, 17, 3, 3, 4, -1, 18, 3, 1, 4, 3, -.004857896827161312, -.6041762232780457, .0445394404232502, 0, 3, 16, 9, 2, 8, -1, 16, 9, 1, 4, 2, 17, 13, 1, 4, 2, .001586731057614088, -.1034090965986252, .2328201979398727, 0, 2, 15, 7, 1, 6, -1, 15, 9, 1, 2, 3, -.004742781165987253, .284902811050415, -.0980904996395111, 0, 2, 14, 2, 2, 2, -1, 14, 3, 2, 1, 2, -.0013515240279957652, .2309643030166626, -.113618403673172, 0, 2, 17, 0, 2, 3, -1, 17, 1, 2, 1, 3, .0022526069078594446, .0644783228635788, -.4220589101314545, 0, 3, 16, 18, 2, 2, -1, 16, 18, 1, 1, 2, 17, 19, 1, 1, 2, -.0003803865984082222, -.3807620108127594, .0600432902574539, 0, 2, 10, 4, 4, 3, -1, 10, 5, 4, 1, 3, .004904392175376415, -.076104998588562, .3323217034339905, 0, 2, 0, 2, 8, 6, -1, 4, 2, 4, 6, 2, -.009096967056393623, .1428779065608978, -.1688780039548874, 0, 2, 7, 14, 6, 6, -1, 7, 16, 6, 2, 3, -.0069317929446697235, .2725540995597839, -.0928795635700226, 0, 2, 11, 15, 2, 2, -1, 11, 16, 2, 1, 2, .0011471060570329428, -.1527305990457535, .1970240026712418, 0, 2, 7, 1, 9, 4, -1, 10, 1, 3, 4, 3, -.0376628898084164, -.5932043790817261, .0407386012375355, 0, 2, 9, 7, 3, 7, -1, 10, 7, 1, 7, 3, -.006816557142883539, .2549408972263336, -.0940819606184959, 0, 3, 6, 17, 2, 2, -1, 6, 17, 1, 1, 2, 7, 18, 1, 1, 2, .0006620556232519448, .0467957183718681, -.4845437109470367, 0, 2, 4, 6, 3, 9, -1, 5, 6, 1, 9, 3, -.004220255184918642, .2468214929103851, -.0946739763021469, 0, 2, 0, 10, 19, 10, -1, 0, 15, 19, 5, 2, -.0689865127205849, -.6651480197906494, .0359263904392719, 0, 2, 5, 17, 6, 1, -1, 7, 17, 2, 1, 3, .006170760840177536, .0258333198726177, -.7268627285957336, 0, 2, 0, 12, 6, 3, -1, 3, 12, 3, 3, 2, .0105362497270107, -.0818289965391159, .2976079881191254, -1.1255199909210205, 32, 0, 2, 2, 5, 18, 5, -1, 8, 5, 6, 5, 3, -.0627587288618088, .2789908051490784, -.2965610921382904, 0, 2, 1, 15, 6, 4, -1, 1, 17, 6, 2, 2, .003451647935435176, -.3463588058948517, .2090384066104889, 0, 2, 14, 10, 6, 6, -1, 16, 10, 2, 6, 3, -.007869948633015156, .2414488941431046, -.1920557022094727, 0, 2, 0, 14, 4, 3, -1, 0, 15, 4, 1, 3, -.0034624869003891945, -.5915178060531616, .1248644962906838, 0, 2, 1, 7, 6, 11, -1, 3, 7, 2, 11, 3, -.009481876157224178, .1839154064655304, -.2485826015472412, 0, 2, 13, 17, 7, 2, -1, 13, 18, 7, 1, 2, .00023226840130519122, -.3304725885391235, .1099926009774208, 0, 2, 0, 14, 2, 3, -1, 0, 15, 2, 1, 3, .0018101120367646217, .0987440124154091, -.4963478147983551, 0, 2, 0, 0, 6, 2, -1, 3, 0, 3, 2, 2, -.005442243069410324, .2934441864490509, -.1309475004673004, 0, 2, 0, 1, 6, 3, -1, 3, 1, 3, 3, 2, .007414812222123146, -.1476269960403442, .3327716886997223, 0, 2, 0, 8, 2, 6, -1, 0, 10, 2, 2, 3, -.0155651401728392, -.6840490102767944, .0998726934194565, 0, 3, 1, 2, 6, 14, -1, 1, 2, 3, 7, 2, 4, 9, 3, 7, 2, .0287205204367638, -.148332804441452, .3090257942676544, 0, 3, 17, 5, 2, 2, -1, 17, 5, 1, 1, 2, 18, 6, 1, 1, 2, 9668739221524447e-20, -.1743104010820389, .2140295952558518, 0, 2, 11, 10, 9, 4, -1, 14, 10, 3, 4, 3, .0523710586130619, -.0701568573713303, .4922299087047577, 0, 2, 2, 9, 12, 4, -1, 6, 9, 4, 4, 3, -.0864856913685799, .5075724720954895, -.0752942115068436, 0, 2, 7, 10, 12, 2, -1, 11, 10, 4, 2, 3, -.0421698689460754, .4568096101284027, -.0902199000120163, 0, 2, 2, 13, 1, 2, -1, 2, 14, 1, 1, 2, 45369830331765115e-21, -.2653827965259552, .1618953943252564, 0, 2, 16, 7, 4, 3, -1, 16, 8, 4, 1, 3, .0052918000146746635, .0748901516199112, -.540546715259552, 0, 2, 19, 16, 1, 3, -1, 19, 17, 1, 1, 3, -.0007551165181212127, -.4926199018955231, .0587239488959312, 0, 2, 18, 11, 1, 2, -1, 18, 12, 1, 1, 2, 7510813884437084e-20, -.2143210023641586, .1407776027917862, 0, 3, 12, 7, 8, 2, -1, 12, 7, 4, 1, 2, 16, 8, 4, 1, 2, .004998120944947004, -.0905473381280899, .3571606874465942, 0, 2, 14, 9, 2, 4, -1, 15, 9, 1, 4, 2, -.0014929979806765914, .2562345862388611, -.1422906965017319, 0, 3, 14, 2, 6, 4, -1, 14, 2, 3, 2, 2, 17, 4, 3, 2, 2, .0027239411137998104, -.1564925014972687, .2108871042728424, 0, 2, 14, 0, 6, 1, -1, 17, 0, 3, 1, 2, .002221832051873207, -.1507298946380615, .2680186927318573, 0, 2, 3, 12, 2, 1, -1, 4, 12, 1, 1, 2, -.0007399307214654982, .2954699099063873, -.1069239005446434, 0, 2, 17, 2, 3, 1, -1, 18, 2, 1, 1, 3, .0020113459322601557, .0506143495440483, -.7168337106704712, 0, 2, 1, 16, 18, 2, -1, 7, 16, 6, 2, 3, .0114528704434633, -.1271906942129135, .241527795791626, 0, 2, 2, 19, 8, 1, -1, 6, 19, 4, 1, 2, -.0010782170575112104, .2481300979852676, -.1346119940280914, 0, 2, 1, 17, 4, 3, -1, 1, 18, 4, 1, 3, .00334176910109818, .0535783097147942, -.5227416753768921, 0, 2, 19, 13, 1, 2, -1, 19, 14, 1, 1, 2, 6939865124877542e-20, -.2169874012470245, .1281217932701111, 0, 3, 9, 16, 10, 4, -1, 9, 16, 5, 2, 2, 14, 18, 5, 2, 2, -.0040982551872730255, .2440188974142075, -.1157058998942375, 0, 3, 12, 9, 2, 4, -1, 12, 9, 1, 2, 2, 13, 11, 1, 2, 2, -.0016289720078930259, .2826147079467773, -.1065946966409683, 0, 2, 19, 11, 1, 9, -1, 19, 14, 1, 3, 3, .0139848599210382, .0427158996462822, -.7364631295204163, -1.1729990243911743, 30, 0, 2, 6, 6, 14, 14, -1, 6, 13, 14, 7, 2, .164165198802948, -.4896030128002167, .1760770976543427, 0, 2, 2, 17, 4, 2, -1, 2, 18, 4, 1, 2, .0008341306238435209, -.2822043001651764, .2419957965612412, 0, 2, 0, 2, 1, 3, -1, 0, 3, 1, 1, 3, -.0017193210078403354, -.714858889579773, .0861622169613838, 0, 2, 0, 12, 1, 3, -1, 0, 13, 1, 1, 3, -.001565495040267706, -.7297238111495972, .0940706729888916, 0, 2, 15, 15, 4, 4, -1, 15, 17, 4, 2, 2, .0019124479731544852, -.3118715882301331, .1814339011907578, 0, 2, 2, 5, 18, 7, -1, 8, 5, 6, 7, 3, -.1351236999034882, .2957729995250702, -.2217925041913986, 0, 2, 1, 16, 5, 3, -1, 1, 17, 5, 1, 3, -.004030054900795221, -.6659513711929321, .0854310169816017, 0, 2, 0, 4, 2, 3, -1, 0, 5, 2, 1, 3, -.002864046022295952, -.6208636164665222, .0531060211360455, 0, 2, 0, 6, 2, 6, -1, 1, 6, 1, 6, 2, -.0014065420255064964, .2234628945589066, -.2021100968122482, 0, 2, 16, 14, 4, 3, -1, 16, 15, 4, 1, 3, -.0035820449702441692, -.5403040051460266, .0682136192917824, 0, 3, 0, 0, 10, 6, -1, 0, 0, 5, 3, 2, 5, 3, 5, 3, 2, .04154447093606, -.0652158409357071, .6210923194885254, 0, 2, 2, 2, 3, 6, -1, 3, 2, 1, 6, 3, -.009170955047011375, -.75553297996521, .0526404492557049, 0, 2, 2, 0, 3, 10, -1, 3, 0, 1, 10, 3, .006155273877084255, .0909394025802612, -.4424613118171692, 0, 2, 5, 5, 2, 2, -1, 5, 6, 2, 1, 2, -.0010043520014733076, .242923304438591, -.1866979002952576, 0, 2, 12, 6, 4, 4, -1, 12, 8, 4, 2, 2, .0115198297426105, -.1176315024495125, .3672345876693726, 0, 2, 13, 5, 7, 3, -1, 13, 6, 7, 1, 3, -.008904073387384415, -.4893133044242859, .1089702025055885, 0, 2, 10, 13, 1, 2, -1, 10, 14, 1, 1, 2, .0005397367058321834, -.2185039967298508, .1848998963832855, 0, 2, 16, 16, 4, 2, -1, 18, 16, 2, 2, 2, .0013727260520681739, -.1507291048765183, .2917312979698181, 0, 2, 16, 12, 4, 7, -1, 18, 12, 2, 7, 2, -.0108073903247714, .4289745092391968, -.1028013974428177, 0, 2, 16, 17, 1, 3, -1, 16, 18, 1, 1, 3, .0012670770520344377, .0741921588778496, -.6420825123786926, 0, 2, 19, 9, 1, 3, -1, 19, 10, 1, 1, 3, .002299112966284156, .0471002794802189, -.723352313041687, 0, 2, 18, 7, 2, 6, -1, 19, 7, 1, 6, 2, .002718751085922122, -.1708686947822571, .235135093331337, 0, 2, 8, 1, 3, 4, -1, 9, 1, 1, 4, 3, -.006661918014287949, -.7897542715072632, .0450846701860428, 0, 2, 14, 0, 6, 9, -1, 16, 0, 2, 9, 3, -.0482666492462158, -.6957991719245911, .0419760793447495, 0, 2, 4, 2, 10, 2, -1, 9, 2, 5, 2, 2, .0152146900072694, -.1081828027963638, .3646062016487122, 0, 3, 2, 12, 8, 4, -1, 2, 12, 4, 2, 2, 6, 14, 4, 2, 2, -.006008013151586056, .309709906578064, -.1135921031236649, 0, 2, 0, 4, 7, 3, -1, 0, 5, 7, 1, 3, .006612715777009726, .0806653425097466, -.4665853083133698, 0, 2, 14, 14, 3, 3, -1, 15, 14, 1, 3, 3, -.007960701361298561, -.8720194101333618, .0367745906114578, 0, 2, 0, 3, 4, 3, -1, 2, 3, 2, 3, 2, .003884719917550683, -.11666289716959, .3307026922702789, 0, 2, 1, 0, 2, 7, -1, 2, 0, 1, 7, 2, -.001098881009966135, .2387257069349289, -.1765675991773605, -1.036829948425293, 44, 0, 2, 15, 16, 4, 4, -1, 15, 18, 4, 2, 2, .0035903379321098328, -.2368807941675186, .2463164031505585, 0, 2, 5, 8, 12, 4, -1, 5, 10, 12, 2, 2, .006481593009084463, -.3137362003326416, .1867575943470001, 0, 2, 3, 17, 1, 2, -1, 3, 18, 1, 1, 2, 7304840255528688e-20, -.2764435112476349, .1649623960256577, 0, 2, 6, 1, 3, 4, -1, 7, 1, 1, 4, 3, -.00385146401822567, -.5601450800895691, .1129473969340324, 0, 2, 6, 2, 3, 4, -1, 7, 2, 1, 4, 3, .003858821000903845, .0398489981889725, -.5807185769081116, 0, 2, 6, 8, 9, 12, -1, 9, 8, 3, 12, 3, -.0246512200683355, .1675501018762589, -.2534367144107819, 0, 2, 8, 1, 8, 6, -1, 8, 3, 8, 2, 3, .0472455210983753, -.1066208034753799, .3945198059082031, 0, 2, 14, 2, 6, 3, -1, 17, 2, 3, 3, 2, .00659646512940526, -.1774425059556961, .2728019058704376, 0, 2, 0, 6, 1, 3, -1, 0, 7, 1, 1, 3, -.0013177490327507257, -.5427265167236328, .0486065894365311, 0, 2, 10, 0, 10, 2, -1, 15, 0, 5, 2, 2, -.005026170983910561, .2439424991607666, -.1314364969730377, 0, 2, 11, 0, 3, 2, -1, 12, 0, 1, 2, 3, .003463276894763112, .0690493434667587, -.7033624053001404, 0, 2, 3, 19, 10, 1, -1, 8, 19, 5, 1, 2, .0021692588925361633, -.1328946053981781, .2209852933883667, 0, 2, 0, 4, 7, 16, -1, 0, 12, 7, 8, 2, .0293958708643913, -.2853052020072937, .1354399025440216, 0, 2, 2, 16, 1, 3, -1, 2, 17, 1, 1, 3, -.0009618144831620157, -.580413818359375, .0374506488442421, 0, 2, 7, 8, 12, 6, -1, 11, 8, 4, 6, 3, -.1082099974155426, .3946728110313416, -.078655943274498, 0, 2, 14, 9, 6, 7, -1, 16, 9, 2, 7, 3, -.0180248692631722, .2735562920570374, -.1341529935598373, 0, 2, 12, 17, 6, 1, -1, 14, 17, 2, 1, 3, .006250984035432339, .023388059809804, -.8008859157562256, 0, 2, 16, 1, 3, 1, -1, 17, 1, 1, 1, 3, -.0016088379779830575, -.5676252245903015, .0412156693637371, 0, 3, 0, 17, 8, 2, -1, 0, 17, 4, 1, 2, 4, 18, 4, 1, 2, .0007756475242786109, -.1489126980304718, .1908618062734604, 0, 2, 17, 0, 2, 1, -1, 18, 0, 1, 1, 2, 8712233830010518e-20, -.155575305223465, .194282203912735, 0, 2, 4, 15, 6, 5, -1, 6, 15, 2, 5, 3, -.0207553207874298, -.6300653219223022, .0361343808472157, 0, 2, 7, 2, 8, 2, -1, 7, 3, 8, 1, 2, -.0062931738793849945, .2560924887657166, -.1058826968073845, 0, 2, 4, 1, 8, 4, -1, 4, 3, 8, 2, 2, .0108441496267915, -.1012485027313232, .3032212853431702, 0, 2, 5, 19, 2, 1, -1, 6, 19, 1, 1, 2, -6375277735060081e-20, .1911157965660095, -.1384923011064529, 0, 2, 5, 19, 2, 1, -1, 6, 19, 1, 1, 2, 6648096314165741e-20, -.1520525068044663, .2170630991458893, 0, 2, 16, 17, 1, 3, -1, 16, 18, 1, 1, 3, .0013560829684138298, .0494317896664143, -.6427984237670898, 0, 2, 0, 11, 2, 3, -1, 1, 11, 1, 3, 2, -.0009066255879588425, .1798201054334641, -.1404460966587067, 0, 2, 0, 19, 4, 1, -1, 2, 19, 2, 1, 2, .0010473709553480148, -.1093354970216751, .242659404873848, 0, 2, 0, 18, 4, 2, -1, 2, 18, 2, 2, 2, -.0010243969736620784, .2716268002986908, -.1182091981172562, 0, 2, 2, 17, 1, 3, -1, 2, 18, 1, 1, 3, -.0012024149764329195, -.701511025428772, .0394898988306522, 0, 2, 5, 7, 11, 2, -1, 5, 8, 11, 1, 2, .007691164966672659, -.0922189131379128, .3104628920555115, 0, 2, 9, 2, 4, 10, -1, 9, 7, 4, 5, 2, -.139665499329567, .6897938847541809, -.0397061184048653, 0, 2, 0, 2, 4, 3, -1, 0, 3, 4, 1, 3, .0021276050247251987, .0972776114940643, -.2884179949760437, 0, 2, 10, 19, 10, 1, -1, 15, 19, 5, 1, 2, -.0027594310231506824, .2416867017745972, -.1127782016992569, 0, 2, 11, 17, 8, 3, -1, 15, 17, 4, 3, 2, .005223613232374191, -.1143027991056442, .2425678074359894, 0, 2, 8, 19, 3, 1, -1, 9, 19, 1, 1, 3, -.0012590440455824137, -.5967938899993896, .0476639606058598, 0, 2, 14, 0, 3, 4, -1, 15, 0, 1, 4, 3, -.0037192099262028933, -.464141309261322, .0528476908802986, 0, 2, 10, 6, 4, 3, -1, 10, 7, 4, 1, 3, .005969615187495947, -.0732442885637283, .3874309062957764, 0, 2, 0, 8, 3, 2, -1, 0, 9, 3, 1, 2, -.005177672021090984, -.7419322729110718, .0404967106878757, 0, 2, 7, 12, 3, 6, -1, 7, 14, 3, 2, 3, .005003510043025017, -.1388880014419556, .1876762062311173, 0, 2, 1, 18, 1, 2, -1, 1, 19, 1, 1, 2, -.0005201345775276423, -.5494061708450317, .0494178496301174, 0, 2, 0, 12, 4, 4, -1, 2, 12, 2, 4, 2, .00531687680631876, -.0824829787015915, .3174056112766266, 0, 2, 1, 8, 6, 7, -1, 3, 8, 2, 7, 3, -.0147745897993445, .2081609964370728, -.1211555972695351, 0, 2, 0, 8, 4, 5, -1, 2, 8, 2, 5, 2, -.0414164513349533, -.8243780732154846, .0333291888237, -1.0492420196533203, 53, 0, 2, 19, 16, 1, 3, -1, 19, 17, 1, 1, 3, .0009096252033486962, .0845799669623375, -.5611841082572937, 0, 2, 1, 5, 18, 6, -1, 7, 5, 6, 6, 3, -.0561397895216942, .1534174978733063, -.2696731984615326, 0, 2, 2, 15, 4, 2, -1, 2, 16, 4, 1, 2, .0010292009683325887, -.2048998028039932, .2015317976474762, 0, 2, 18, 6, 2, 11, -1, 19, 6, 1, 11, 2, .00287830107845366, -.1735114008188248, .2129794955253601, 0, 2, 0, 12, 2, 6, -1, 0, 14, 2, 2, 3, -.0074144392274320126, -.5962486863136292, .0470779500901699, 0, 2, 12, 5, 3, 2, -1, 12, 6, 3, 1, 2, -.0014831849839538336, .1902461051940918, -.1598639041185379, 0, 2, 1, 3, 2, 3, -1, 1, 4, 2, 1, 3, .0045968941412866116, .0314471311867237, -.6869434118270874, 0, 2, 16, 14, 4, 4, -1, 16, 16, 4, 2, 2, .0024255330208688974, -.23609359562397, .1103610992431641, 0, 2, 6, 8, 12, 5, -1, 10, 8, 4, 5, 3, -.0849505662918091, .2310716062784195, -.1377653032541275, 0, 2, 13, 7, 2, 7, -1, 14, 7, 1, 7, 2, -.005014568101614714, .3867610991001129, -.0562173798680305, 0, 2, 1, 8, 2, 6, -1, 2, 8, 1, 6, 2, -.002148206112906337, .1819159984588623, -.1761569976806641, 0, 2, 15, 0, 3, 7, -1, 16, 0, 1, 7, 3, -.0103967702016234, -.7535138130187988, .0240919701755047, 0, 2, 4, 2, 6, 2, -1, 6, 2, 2, 2, 3, -.0134667502716184, -.7211886048316956, .0349493697285652, 0, 2, 0, 9, 20, 9, -1, 0, 12, 20, 3, 3, -.0844354778528214, -.3379263877868652, .0711138173937798, 0, 2, 10, 14, 2, 2, -1, 10, 15, 2, 1, 2, .00247714901342988, -.1176510974764824, .225419893860817, 0, 2, 6, 5, 10, 4, -1, 6, 7, 10, 2, 2, .015828050673008, -.0695362165570259, .313953697681427, 0, 2, 6, 1, 5, 9, -1, 6, 4, 5, 3, 3, .0649169832468033, -.0750435888767242, .4067733883857727, 0, 3, 16, 18, 2, 2, -1, 16, 18, 1, 1, 2, 17, 19, 1, 1, 2, .00029652469675056636, .0739533603191376, -.3454400897026062, 0, 2, 0, 14, 2, 4, -1, 0, 16, 2, 2, 2, .001312952022999525, -.1690943986177445, .1525837033987045, 0, 2, 10, 8, 2, 5, -1, 11, 8, 1, 5, 2, -.0058032129891216755, .3526014983654022, -.0834440663456917, 0, 2, 3, 7, 12, 7, -1, 7, 7, 4, 7, 3, -.1479167938232422, .4300465881824493, -.0573099292814732, 0, 2, 0, 0, 6, 6, -1, 3, 0, 3, 6, 2, -.016584150493145, .2343268990516663, -.1090764030814171, 0, 2, 1, 0, 4, 4, -1, 3, 0, 2, 4, 2, .003018327057361603, -.1360093951225281, .264092892408371, 0, 2, 0, 0, 6, 8, -1, 2, 0, 2, 8, 3, -.0364719182252884, -.628097414970398, .0435451082885265, 0, 2, 0, 0, 2, 1, -1, 1, 0, 1, 1, 2, -7311922672670335e-20, .1647063046693802, -.1646378040313721, 0, 2, 0, 0, 3, 3, -1, 0, 1, 3, 1, 3, -.003671945072710514, -.4742136001586914, .0485869199037552, 0, 2, 5, 4, 2, 4, -1, 5, 6, 2, 2, 2, -.004015117883682251, .1822218000888825, -.1409751027822495, 0, 2, 2, 10, 9, 1, -1, 5, 10, 3, 1, 3, .0199480205774307, -.0697876587510109, .3670746088027954, 0, 2, 1, 17, 1, 3, -1, 1, 18, 1, 1, 3, .0007669943734072149, .0557292997837067, -.4458543062210083, 0, 2, 0, 17, 2, 3, -1, 0, 18, 2, 1, 3, -.0011806039838120341, -.4687662124633789, .0489022210240364, 0, 2, 0, 15, 16, 3, -1, 8, 15, 8, 3, 2, .0158473495393991, -.1212020963430405, .2056653052568436, 0, 2, 0, 5, 4, 1, -1, 2, 5, 2, 1, 2, -.0011985700111836195, .2026209980249405, -.1282382011413574, 0, 2, 1, 0, 6, 20, -1, 3, 0, 2, 20, 3, -.1096495985984802, -.8661919236183167, .0303518492728472, 0, 3, 2, 5, 4, 6, -1, 2, 5, 2, 3, 2, 4, 8, 2, 3, 2, -.009253260679543018, .2934311926364899, -.0853619500994682, 0, 2, 9, 16, 6, 3, -1, 11, 16, 2, 3, 3, .0146865304559469, .0327986218035221, -.7755656242370605, 0, 2, 11, 17, 6, 1, -1, 14, 17, 3, 1, 2, -.0013514430029317737, .244269996881485, -.1150325015187264, 0, 2, 3, 17, 15, 2, -1, 8, 17, 5, 2, 3, -.004372809082269669, .2168767005205154, -.1398448050022125, 0, 2, 18, 0, 2, 3, -1, 18, 1, 2, 1, 3, .0034263390116393566, .0456142202019691, -.545677125453949, 0, 2, 13, 1, 7, 4, -1, 13, 3, 7, 2, 2, -.0038404068909585476, .149495005607605, -.1506250947713852, 0, 3, 13, 6, 4, 4, -1, 13, 6, 2, 2, 2, 15, 8, 2, 2, 2, .0037988980766385794, -.0873016268014908, .2548153102397919, 0, 2, 17, 6, 3, 4, -1, 17, 8, 3, 2, 2, -.0020094281062483788, .1725907027721405, -.1428847014904022, 0, 2, 14, 9, 2, 2, -1, 15, 9, 1, 2, 2, -.002437070943415165, .2684809863567352, -.0818982198834419, 0, 2, 17, 17, 1, 3, -1, 17, 18, 1, 1, 3, .001048539998009801, .0461132600903511, -.4724327921867371, 0, 2, 3, 19, 8, 1, -1, 7, 19, 4, 1, 2, .00174607802182436, -.1103043034672737, .2037972956895828, 0, 2, 0, 9, 3, 6, -1, 0, 12, 3, 3, 2, .005860862787812948, -.1561965942382813, .1592743992805481, 0, 2, 4, 7, 15, 5, -1, 9, 7, 5, 5, 3, -.0277249794453382, .1134911999106407, -.2188514024019241, 0, 2, 6, 9, 9, 5, -1, 9, 9, 3, 5, 3, .0470806397497654, -.0416887290775776, .5363004803657532, 0, 2, 8, 1, 6, 2, -1, 10, 1, 2, 2, 3, -.007928377017378807, -.5359513163566589, .0442375093698502, 0, 2, 4, 0, 12, 2, -1, 10, 0, 6, 2, 2, -.0128805404528975, .2323794960975647, -.102462500333786, 0, 2, 7, 0, 10, 3, -1, 12, 0, 5, 3, 2, .0236047692596912, -.0882914364337921, .3056105971336365, 0, 2, 5, 0, 9, 6, -1, 5, 2, 9, 2, 3, .0159022007137537, -.1223810985684395, .1784912049770355, 0, 2, 8, 3, 6, 4, -1, 8, 5, 6, 2, 2, .007993949577212334, -.0837290063500404, .3231959044933319, 0, 2, 17, 4, 2, 3, -1, 17, 5, 2, 1, 3, .005710086785256863, .038479208946228, -.6813815236091614, -1.1122100353240967, 51, 0, 2, 5, 2, 4, 3, -1, 5, 3, 4, 1, 3, .002248072065412998, -.1641687005758286, .4164853096008301, 0, 2, 5, 9, 2, 6, -1, 6, 9, 1, 6, 2, .004581355024129152, -.1246595978736877, .4038512110710144, 0, 2, 14, 10, 2, 6, -1, 15, 10, 1, 6, 2, -.0016073239967226982, .260824590921402, -.202825203537941, 0, 2, 7, 4, 3, 3, -1, 7, 5, 3, 1, 3, .0025205370038747787, -.1055722981691361, .3666911125183106, 0, 3, 12, 4, 8, 2, -1, 12, 4, 4, 1, 2, 16, 5, 4, 1, 2, .0024119189474731684, -.1387760043144226, .2995991110801697, 0, 2, 15, 8, 1, 6, -1, 15, 10, 1, 2, 3, .005715617910027504, -.0776834636926651, .4848192036151886, 0, 2, 4, 17, 11, 3, -1, 4, 18, 11, 1, 3, .0031093840952962637, -.1122900024056435, .2921550869941711, 0, 2, 3, 0, 16, 20, -1, 3, 10, 16, 10, 2, -.0868366286158562, -.367796003818512, .0725972428917885, 0, 2, 12, 4, 4, 6, -1, 12, 6, 4, 2, 3, .0052652182057499886, -.1089029014110565, .3179126083850861, 0, 2, 11, 0, 6, 6, -1, 13, 0, 2, 6, 3, -.0199135299772024, -.5337343811988831, .0705857127904892, 0, 3, 13, 1, 6, 4, -1, 13, 1, 3, 2, 2, 16, 3, 3, 2, 2, .00382978399284184, -.135759100317955, .2278887927532196, 0, 2, 11, 0, 6, 4, -1, 13, 0, 2, 4, 3, .0104318596422672, .0887979120016098, -.4795897006988525, 0, 2, 8, 6, 6, 9, -1, 10, 6, 2, 9, 3, -.0200404394418001, .1574553996324539, -.1777157038450241, 0, 2, 7, 0, 3, 4, -1, 8, 0, 1, 4, 3, -.005296729039400816, -.6843491792678833, .0356714613735676, 0, 3, 0, 17, 14, 2, -1, 0, 17, 7, 1, 2, 7, 18, 7, 1, 2, -.0021624139044433832, .2831803858280182, -.098511278629303, 0, 3, 6, 18, 2, 2, -1, 6, 18, 1, 1, 2, 7, 19, 1, 1, 2, -.00035464888787828386, -.3707734048366547, .0809329524636269, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, -.00018152060511056334, -.322070300579071, .0775510594248772, 0, 3, 17, 18, 2, 2, -1, 17, 18, 1, 1, 2, 18, 19, 1, 1, 2, -.000275630212854594, -.3244127929210663, .0879494771361351, 0, 2, 5, 7, 1, 9, -1, 5, 10, 1, 3, 3, .006382381077855825, -.0889247134327888, .3172721862792969, 0, 2, 5, 3, 6, 4, -1, 7, 3, 2, 4, 3, .0111509095877409, .0710198432207108, -.4049403965473175, 0, 3, 1, 9, 6, 2, -1, 1, 9, 3, 1, 2, 4, 10, 3, 1, 2, -.0010593760525807738, .2605066895484924, -.1176564022898674, 0, 2, 6, 9, 2, 3, -1, 7, 9, 1, 3, 2, .002390648005530238, -.0843886211514473, .3123055100440979, 0, 2, 6, 8, 6, 12, -1, 8, 8, 2, 12, 3, -.0110007496550679, .1915224939584732, -.1521002054214478, 0, 3, 4, 18, 2, 2, -1, 4, 18, 1, 1, 2, 5, 19, 1, 1, 2, -.00024643228971399367, -.3176515996456146, .0865822583436966, 0, 2, 9, 1, 6, 6, -1, 9, 3, 6, 2, 3, .0230532698333263, -.1008976027369499, .2576929032802582, 0, 2, 6, 17, 6, 2, -1, 6, 18, 6, 1, 2, -.0022135660983622074, .4568921029567719, -.0524047911167145, 0, 2, 3, 18, 16, 2, -1, 3, 19, 16, 1, 2, -.000971397093962878, -.3551838099956513, .0800943821668625, 0, 2, 3, 0, 3, 11, -1, 4, 0, 1, 11, 3, .0015676229959353805, .1009142026305199, -.2160304039716721, 0, 2, 13, 18, 3, 1, -1, 14, 18, 1, 1, 3, .0007546080159954727, .0578961782157421, -.4046111106872559, 0, 2, 6, 0, 9, 6, -1, 6, 2, 9, 2, 3, -.0206989701837301, .3154363036155701, -.0807130485773087, 0, 3, 1, 2, 12, 4, -1, 1, 2, 6, 2, 2, 7, 4, 6, 2, 2, -.0206199400126934, .271816611289978, -.0763586163520813, 0, 2, 3, 3, 6, 4, -1, 5, 3, 2, 4, 3, .0216111298650503, .0394934490323067, -.5942965149879456, 0, 2, 12, 0, 8, 1, -1, 16, 0, 4, 1, 2, .006567674223333597, -.0983536690473557, .2364927977323532, 0, 2, 9, 0, 6, 2, -1, 11, 0, 2, 2, 3, -.008843479678034782, -.5252342820167542, .0430999211966991, 0, 2, 3, 3, 12, 1, -1, 9, 3, 6, 1, 2, -.009426074102520943, .2466513067483902, -.0941307172179222, 0, 3, 2, 7, 6, 2, -1, 2, 7, 3, 1, 2, 5, 8, 3, 1, 2, -.001983023015782237, .2674370110034943, -.0900693163275719, 0, 2, 0, 8, 4, 6, -1, 0, 10, 4, 2, 3, -.001735839992761612, .1594001948833466, -.157894104719162, 0, 2, 9, 6, 3, 7, -1, 10, 6, 1, 7, 3, -.0135138696059585, .4079233109951019, -.0642231181263924, 0, 2, 9, 6, 6, 13, -1, 11, 6, 2, 13, 3, -.0193940103054047, .1801564991474152, -.1373140066862106, 0, 2, 11, 12, 6, 1, -1, 13, 12, 2, 1, 3, -.003268477041274309, .2908039093017578, -.0801619067788124, 0, 2, 18, 9, 2, 6, -1, 18, 12, 2, 3, 2, .00041773589327931404, -.2141298055648804, .1127343997359276, 0, 2, 17, 2, 3, 9, -1, 18, 2, 1, 9, 3, -.007635111920535564, -.4536595940589905, .0546250604093075, 0, 3, 13, 8, 4, 6, -1, 13, 8, 2, 3, 2, 15, 11, 2, 3, 2, -.008365297690033913, .2647292017936707, -.0943341106176376, 0, 2, 4, 2, 12, 6, -1, 10, 2, 6, 6, 2, .027768449857831, -.1013671010732651, .2074397951364517, 0, 2, 4, 14, 16, 6, -1, 12, 14, 8, 6, 2, -.0548912286758423, .2884030938148499, -.075312040746212, 0, 2, 6, 19, 10, 1, -1, 11, 19, 5, 1, 2, .002579333959147334, -.1108852997422218, .2172496020793915, 0, 2, 6, 17, 1, 3, -1, 6, 18, 1, 1, 3, 6619651685468853e-20, -.1887210011482239, .1444068998098373, 0, 2, 4, 14, 10, 3, -1, 4, 15, 10, 1, 3, .005090725142508745, -.0776012316346169, .2939837872982025, 0, 2, 6, 0, 12, 12, -1, 6, 4, 12, 4, 3, -.1044425964355469, .2013310939073563, -.1090397015213966, 0, 3, 5, 7, 4, 2, -1, 5, 7, 2, 1, 2, 7, 8, 2, 1, 2, -.0006727309082634747, .1794590055942535, -.1202367022633553, 0, 2, 17, 5, 3, 2, -1, 18, 5, 1, 2, 3, .0032412849832326174, .0406881310045719, -.5460057258605957, -1.2529590129852295, 44, 0, 2, 8, 13, 6, 3, -1, 8, 14, 6, 1, 3, .005296532064676285, -.1215452998876572, .6442037224769592, 0, 2, 8, 13, 5, 3, -1, 8, 14, 5, 1, 3, -.002532626036554575, .5123322010040283, -.111082598567009, 0, 2, 13, 2, 1, 18, -1, 13, 11, 1, 9, 2, -.0029183230362832546, -.5061542987823486, .1150197982788086, 0, 2, 6, 10, 9, 2, -1, 9, 10, 3, 2, 3, -.0236923396587372, .3716728091239929, -.1467268019914627, 0, 2, 11, 0, 7, 4, -1, 11, 2, 7, 2, 2, .0201774705201387, -.1738884001970291, .4775949120521545, 0, 2, 1, 0, 6, 8, -1, 3, 0, 2, 8, 3, -.021723210811615, -.4388009011745453, .1357689946889877, 0, 2, 9, 15, 3, 3, -1, 9, 16, 3, 1, 3, .0028369780629873276, -.1251206994056702, .4678902924060822, 0, 2, 9, 17, 9, 3, -1, 9, 18, 9, 1, 3, .002714842092245817, -.0880188569426537, .3686651885509491, 0, 2, 12, 12, 3, 3, -1, 12, 13, 3, 1, 3, .003262568963691592, -.0853353068232536, .5164473056793213, 0, 2, 4, 1, 3, 5, -1, 5, 1, 1, 5, 3, -.0035618850961327553, -.445039302110672, .0917381718754768, 0, 2, 10, 14, 2, 3, -1, 10, 15, 2, 1, 3, .001922774943523109, -.1107731014490128, .3941699862480164, 0, 3, 18, 17, 2, 2, -1, 18, 17, 1, 1, 2, 19, 18, 1, 1, 2, -.0003511196991894394, -.3777570128440857, .1216617003083229, 0, 3, 18, 18, 2, 2, -1, 18, 18, 1, 1, 2, 19, 19, 1, 1, 2, .0001912177976919338, .0748160183429718, -.4076710045337677, 0, 3, 18, 18, 2, 2, -1, 18, 18, 1, 1, 2, 19, 19, 1, 1, 2, -.00026525629800744355, -.3315171897411346, .1129112020134926, 0, 2, 4, 10, 9, 1, -1, 7, 10, 3, 1, 3, .0200867000967264, -.0615981183946133, .5612881779670715, 0, 2, 3, 9, 6, 5, -1, 5, 9, 2, 5, 3, .0367832481861115, -.0602513886988163, .5219249129295349, 0, 2, 18, 8, 1, 12, -1, 18, 14, 1, 6, 2, .0013941619545221329, -.3550305068492889, .1086302027106285, 0, 3, 0, 2, 8, 6, -1, 0, 2, 4, 3, 2, 4, 5, 4, 3, 2, -.0151816699653864, .2273965030908585, -.1625299006700516, 0, 2, 9, 4, 3, 3, -1, 9, 5, 3, 1, 3, .0046796840615570545, -.0575350411236286, .4812423884868622, 0, 3, 3, 18, 2, 2, -1, 3, 18, 1, 1, 2, 4, 19, 1, 1, 2, -.00017988319450523704, -.3058767020702362, .1086815968155861, 0, 2, 6, 4, 4, 3, -1, 6, 5, 4, 1, 3, -.0035850999411195517, .3859694004058838, -.0921940729022026, 0, 3, 16, 7, 4, 2, -1, 16, 7, 2, 1, 2, 18, 8, 2, 1, 2, .001079336041584611, -.1119038984179497, .31125208735466, 0, 2, 5, 17, 1, 3, -1, 5, 18, 1, 1, 3, 7328580250032246e-20, -.2023991048336029, .155866801738739, 0, 2, 2, 0, 15, 20, -1, 2, 10, 15, 10, 2, .1367873996496201, -.2167285978794098, .1442039012908936, 0, 3, 8, 11, 6, 4, -1, 8, 11, 3, 2, 2, 11, 13, 3, 2, 2, -.0117292599752545, .4350377023220062, -.0748865306377411, 0, 2, 8, 16, 4, 3, -1, 8, 17, 4, 1, 3, .003923084121197462, -.0502893291413784, .5883116126060486, 0, 3, 8, 18, 2, 2, -1, 8, 18, 1, 1, 2, 9, 19, 1, 1, 2, -.0002981912111863494, -.3823240101337433, .0924511328339577, 0, 2, 2, 16, 13, 3, -1, 2, 17, 13, 1, 3, -.004799277056008577, .4848878979682922, -.0731365233659744, 0, 3, 16, 16, 2, 2, -1, 16, 16, 1, 1, 2, 17, 17, 1, 1, 2, -.0003015589027199894, -.3575735986232758, .1058188006281853, 0, 2, 8, 1, 6, 3, -1, 10, 1, 2, 3, 3, .0103907696902752, .0529204681515694, -.5724965929985046, 0, 3, 16, 7, 2, 2, -1, 16, 7, 1, 1, 2, 17, 8, 1, 1, 2, -.0009448804194107652, .449668288230896, -.0830755233764648, 0, 3, 14, 7, 4, 2, -1, 14, 7, 2, 1, 2, 16, 8, 2, 1, 2, .0012651870492845774, -.0966954380273819, .3130227029323578, 0, 2, 4, 0, 14, 1, -1, 11, 0, 7, 1, 2, .0170945394784212, -.081248976290226, .3611383140087128, 0, 3, 10, 4, 8, 2, -1, 10, 4, 4, 1, 2, 14, 5, 4, 1, 2, .002597335958853364, -.1133835017681122, .2223394960165024, 0, 2, 8, 2, 3, 2, -1, 9, 2, 1, 2, 3, .0014527440071105957, .0697504431009293, -.3672071099281311, 0, 2, 12, 11, 6, 3, -1, 12, 12, 6, 1, 3, .00476386584341526, -.0657889619469643, .383285403251648, 0, 2, 1, 5, 1, 4, -1, 1, 7, 1, 2, 2, -.006250108126550913, -.7075446844100952, .038350198417902, 0, 2, 1, 1, 1, 18, -1, 1, 7, 1, 6, 3, -.003176532918587327, .1375540047883987, -.2324002981185913, 0, 2, 11, 13, 3, 2, -1, 11, 14, 3, 1, 2, .003219116944819689, -.1293545067310333, .2273788005113602, 0, 3, 0, 1, 12, 2, -1, 0, 1, 6, 1, 2, 6, 2, 6, 1, 2, -.005636557936668396, .380671501159668, -.0672468394041061, 0, 3, 10, 18, 2, 2, -1, 10, 18, 1, 1, 2, 11, 19, 1, 1, 2, -.00023844049428589642, -.3112238049507141, .0838383585214615, 0, 3, 4, 5, 4, 4, -1, 4, 5, 2, 2, 2, 6, 7, 2, 2, 2, -.004101756028831005, .2606728076934815, -.1044974029064179, 0, 2, 6, 7, 1, 3, -1, 6, 8, 1, 1, 3, .0013336989795789123, -.0582501403987408, .4768244028091431, 0, 2, 14, 10, 6, 2, -1, 16, 10, 2, 2, 3, -.0012090239906683564, .148345097899437, -.1732946932315826, -1.118873953819275, 72, 0, 2, 16, 8, 3, 6, -1, 17, 8, 1, 6, 3, -.003176093101501465, .3333333134651184, -.166423499584198, 0, 2, 4, 10, 6, 2, -1, 6, 10, 2, 2, 3, .0248580798506737, -.0727288722991943, .5667458176612854, 0, 2, 6, 5, 3, 7, -1, 7, 5, 1, 7, 3, -.007759728003293276, .4625856876373291, -.0931121781468391, 0, 2, 0, 13, 6, 6, -1, 0, 16, 6, 3, 2, .007823902182281017, -.2741461098194122, .1324304938316345, 0, 2, 12, 5, 1, 9, -1, 12, 8, 1, 3, 3, -.010948839597404, .2234548032283783, -.1496544927358627, 0, 2, 5, 9, 3, 3, -1, 6, 9, 1, 3, 3, -.0034349008928984404, .3872498869895935, -.0661217272281647, 0, 2, 7, 5, 6, 13, -1, 9, 5, 2, 13, 3, -.0311562903225422, .2407827973365784, -.1140690967440605, 0, 2, 19, 8, 1, 10, -1, 19, 13, 1, 5, 2, .001110051991418004, -.2820797860622406, .1327542960643768, 0, 2, 11, 18, 6, 1, -1, 13, 18, 2, 1, 3, .003176274010911584, .0345859304070473, -.5137431025505066, 0, 2, 9, 7, 6, 12, -1, 11, 7, 2, 12, 3, -.0279774591326714, .2392677962779999, -.1325591951608658, 0, 2, 12, 7, 6, 6, -1, 14, 7, 2, 6, 3, -.0230979397892952, .3901962041854858, -.0784780085086823, 0, 2, 15, 8, 3, 4, -1, 16, 8, 1, 4, 3, -.003973193001002073, .3069106936454773, -.0706014037132263, 0, 2, 6, 11, 4, 2, -1, 6, 12, 4, 1, 2, .003033574903383851, -.1400219053030014, .191348597407341, 0, 2, 1, 6, 6, 8, -1, 3, 6, 2, 8, 3, -.0108443703502417, .1654873043298721, -.1565777957439423, 0, 2, 11, 15, 6, 5, -1, 13, 15, 2, 5, 3, -.0181505102664232, -.6324359178543091, .0395618192851543, 0, 2, 15, 17, 4, 2, -1, 15, 18, 4, 1, 2, .0007105229888111353, -.1851557046175003, .1340880990028381, 0, 2, 13, 11, 6, 1, -1, 15, 11, 2, 1, 3, .0108933402225375, -.0267302300781012, .6097180247306824, 0, 3, 5, 18, 2, 2, -1, 5, 18, 1, 1, 2, 6, 19, 1, 1, 2, -.0002878090017475188, -.3006514012813568, .0731714591383934, 0, 3, 4, 8, 4, 4, -1, 4, 8, 2, 2, 2, 6, 10, 2, 2, 2, -.0035855069290846586, .2621760964393616, -.0797140970826149, 0, 2, 11, 7, 9, 3, -1, 11, 8, 9, 1, 3, -.0197592806071043, -.5903922915458679, .0406989715993404, 0, 3, 0, 3, 10, 4, -1, 0, 3, 5, 2, 2, 5, 5, 5, 2, 2, -.010845210403204, .1636455953121185, -.1258606016635895, 0, 2, 7, 18, 6, 1, -1, 9, 18, 2, 1, 3, -.004318309016525745, -.5747488141059875, .0376443117856979, 0, 2, 0, 8, 3, 3, -1, 0, 9, 3, 1, 3, .0014913700288161635, .0609134696424007, -.3022292852401733, 0, 3, 0, 0, 6, 8, -1, 0, 0, 3, 4, 2, 3, 4, 3, 4, 2, .0156756993383169, -.0731459110975266, .2937945127487183, 0, 2, 7, 6, 3, 8, -1, 8, 6, 1, 8, 3, -.0110335601493716, .393188089132309, -.0470843203365803, 0, 2, 13, 7, 7, 3, -1, 13, 8, 7, 1, 3, .008855575695633888, .0376013815402985, -.4910849034786224, 0, 2, 3, 3, 2, 2, -1, 3, 4, 2, 1, 2, -.0008966567111201584, .1795202046632767, -.1108623966574669, 0, 2, 0, 3, 3, 3, -1, 0, 4, 3, 1, 3, -.0030592409893870354, -.4442946016788483, .0510054305195808, 0, 2, 9, 3, 5, 2, -1, 9, 4, 5, 1, 2, .006320117972791195, -.0528410896658897, .3719710111618042, 0, 2, 6, 5, 9, 4, -1, 9, 5, 3, 4, 3, .020682830363512, .0576671697199345, -.3690159916877747, 0, 2, 3, 10, 12, 3, -1, 7, 10, 4, 3, 3, .0998226627707481, -.037377018481493, .5816559195518494, 0, 2, 8, 7, 3, 6, -1, 9, 7, 1, 6, 3, -.006585422903299332, .2850944101810455, -.0609780699014664, 0, 2, 5, 5, 6, 5, -1, 8, 5, 3, 5, 2, -.0609003007411957, -.5103176832199097, .0377874001860619, 0, 2, 0, 5, 2, 3, -1, 0, 6, 2, 1, 3, -.0029991709161549807, -.4794301092624664, .0388338901102543, 0, 2, 9, 7, 3, 4, -1, 10, 7, 1, 4, 3, -.009890643879771233, .4060907959938049, -.047869648784399, 0, 2, 1, 0, 6, 15, -1, 3, 0, 2, 15, 3, -.0826889276504517, -.7067118287086487, .0274877492338419, 0, 2, 15, 1, 3, 5, -1, 16, 1, 1, 5, 3, .00500603998079896, .028208440169692, -.5290969014167786, 0, 2, 9, 2, 3, 10, -1, 10, 2, 1, 10, 3, .006169503089040518, -.0545548610389233, .3283798098564148, 0, 2, 8, 8, 6, 12, -1, 10, 8, 2, 12, 3, -.0033914761152118444, .0921176671981812, -.2163711041212082, 0, 2, 16, 4, 3, 4, -1, 16, 6, 3, 2, 2, -.0026131230406463146, .1365101933479309, -.1378113031387329, 0, 3, 16, 7, 2, 2, -1, 16, 7, 1, 1, 2, 17, 8, 1, 1, 2, .0008049065945670009, -.0686371102929115, .3358106911182404, 0, 2, 13, 0, 6, 9, -1, 13, 3, 6, 3, 3, -.0381065085530281, .2944543063640595, -.068239226937294, 0, 2, 7, 17, 1, 3, -1, 7, 18, 1, 1, 3, 7245079905260354e-20, -.167501300573349, .1217823028564453, 0, 2, 12, 1, 4, 2, -1, 12, 2, 4, 1, 2, .0015837959945201874, -.0920428484678268, .213489904999733, 0, 2, 17, 3, 1, 3, -1, 17, 4, 1, 1, 3, .0012924340553581715, .0629172325134277, -.3617450892925263, 0, 2, 0, 16, 9, 3, -1, 0, 17, 9, 1, 3, .00991467759013176, .0195340607315302, -.8101503849029541, 0, 3, 3, 6, 2, 4, -1, 3, 6, 1, 2, 2, 4, 8, 1, 2, 2, -.0017086310544982553, .2552523910999298, -.0682294592261314, 0, 2, 13, 18, 3, 1, -1, 14, 18, 1, 1, 3, .002184439916163683, .0233140494674444, -.8429678082466125, 0, 2, 0, 18, 4, 2, -1, 2, 18, 2, 2, 2, -.003424433059990406, .2721368968486786, -.0763952285051346, 0, 2, 1, 19, 2, 1, -1, 2, 19, 1, 1, 2, .00027591470279730856, -.1074284017086029, .2288897037506104, 0, 2, 0, 18, 4, 2, -1, 0, 19, 4, 1, 2, -.0006000517751090229, -.2985421121120453, .0634797364473343, 0, 2, 2, 17, 1, 3, -1, 2, 18, 1, 1, 3, -.00025001438916660845, -.2717896997928619, .0696150064468384, 0, 2, 4, 8, 3, 5, -1, 5, 8, 1, 5, 3, .006875139195472002, -.0571858994662762, .3669595122337341, 0, 2, 2, 1, 6, 7, -1, 4, 1, 2, 7, 3, .0127619002014399, .0679556876420975, -.2853415012359619, 0, 3, 3, 6, 2, 8, -1, 3, 6, 1, 4, 2, 4, 10, 1, 4, 2, -.0014752789866179228, .2068066000938416, -.1005939021706581, 0, 2, 4, 5, 11, 10, -1, 4, 10, 11, 5, 2, .1213881969451904, -.0971267968416214, .1978961974382401, 0, 2, 0, 13, 20, 2, -1, 10, 13, 10, 2, 2, -.0500812791287899, .2841717898845673, -.0678799971938133, 0, 2, 1, 13, 16, 3, -1, 9, 13, 8, 3, 2, .0314549505710602, -.0894686728715897, .2129842042922974, 0, 3, 16, 4, 4, 4, -1, 16, 4, 2, 2, 2, 18, 6, 2, 2, 2, .0018878319533541799, -.1165644004940987, .166635200381279, 0, 3, 16, 0, 4, 12, -1, 16, 0, 2, 6, 2, 18, 6, 2, 6, 2, -.005721196066588163, .2370214015245438, -.0907766073942184, 0, 2, 14, 15, 3, 1, -1, 15, 15, 1, 1, 3, -.00018076719425152987, .1795192956924439, -.1079348027706146, 0, 2, 3, 4, 12, 10, -1, 3, 9, 12, 5, 2, -.1976184993982315, .4567429125308991, -.0404801592230797, 0, 3, 9, 18, 2, 2, -1, 9, 18, 1, 1, 2, 10, 19, 1, 1, 2, -.00023846809926908463, -.2373300939798355, .0759221613407135, 0, 3, 9, 18, 2, 2, -1, 9, 18, 1, 1, 2, 10, 19, 1, 1, 2, .00021540730085689574, .0816880166530609, -.2868503034114838, 0, 3, 13, 4, 2, 14, -1, 13, 4, 1, 7, 2, 14, 11, 1, 7, 2, .0101630901917815, -.0412500202655792, .4803834855556488, 0, 2, 4, 2, 6, 4, -1, 7, 2, 3, 4, 2, -.007218487095087767, .1745858043432236, -.1014650017023087, 0, 3, 0, 0, 18, 20, -1, 0, 0, 9, 10, 2, 9, 10, 9, 10, 2, .2426317036151886, .05342648178339, -.3231852948665619, 0, 2, 15, 11, 1, 2, -1, 15, 12, 1, 1, 2, .0006930410163477063, -.1149917989969254, .1479393988847733, 0, 3, 16, 10, 2, 4, -1, 16, 10, 1, 2, 2, 17, 12, 1, 2, 2, .003547519911080599, -.0394249781966209, .5312618017196655, 0, 3, 18, 17, 2, 2, -1, 18, 17, 1, 1, 2, 19, 18, 1, 1, 2, .00021403690334409475, .0697538331151009, -.2731958031654358, 0, 2, 9, 17, 1, 2, -1, 9, 18, 1, 1, 2, -.0005711946287192404, .3436990082263947, -.0576990097761154, 0, 2, 8, 4, 9, 6, -1, 11, 4, 3, 6, 3, -.006629006937146187, .1175848990678787, -.1502013951539993, -1.088881015777588, 66, 0, 2, 6, 9, 9, 10, -1, 9, 9, 3, 10, 3, -.0265134498476982, .2056864053010941, -.2647390067577362, 0, 2, 5, 0, 5, 4, -1, 5, 2, 5, 2, 2, .00977274589240551, -.111928403377533, .325705498456955, 0, 2, 5, 7, 11, 4, -1, 5, 9, 11, 2, 2, .0322903506457806, -.0985747575759888, .3177917003631592, 0, 2, 2, 4, 2, 14, -1, 3, 4, 1, 14, 2, -.00281032407656312, .1521389931440353, -.1968640983104706, 0, 2, 8, 6, 3, 5, -1, 9, 6, 1, 5, 3, -.0109914299100637, .5140765905380249, -.0437072105705738, 0, 2, 8, 4, 3, 9, -1, 9, 4, 1, 9, 3, .006313383113592863, -.0927810221910477, .3470247089862824, 0, 2, 0, 8, 20, 6, -1, 0, 10, 20, 2, 3, .0871059820055962, .030053649097681, -.8281481862068176, 0, 2, 14, 16, 6, 1, -1, 17, 16, 3, 1, 2, .0011799359926953912, -.1292842030525208, .2064612060785294, 0, 2, 17, 18, 2, 2, -1, 17, 19, 2, 1, 2, -.0009305689018219709, -.5002143979072571, .0936669930815697, 0, 2, 8, 17, 6, 3, -1, 10, 17, 2, 3, 3, -.0136871701106429, -.793581485748291, -.006673363968729973, 0, 2, 4, 1, 9, 15, -1, 7, 1, 3, 15, 3, -.0759174525737762, .3046964108943939, -.0796558931469917, 0, 2, 11, 5, 3, 12, -1, 12, 5, 1, 12, 3, -.0028559709899127483, .2096146047115326, -.1273255050182343, 0, 2, 0, 15, 4, 3, -1, 0, 16, 4, 1, 3, -.004023151006549597, -.6581727862358093, .0506836399435997, 0, 2, 0, 0, 15, 1, -1, 5, 0, 5, 1, 3, .0175580400973558, -.0853826925158501, .3617455959320068, 0, 2, 6, 0, 6, 4, -1, 8, 0, 2, 4, 3, .0219882391393185, .062943696975708, -.7089633941650391, 0, 2, 2, 0, 9, 3, -1, 5, 0, 3, 3, 3, -.002859958913177252, .1468378007411957, -.1646597981452942, 0, 2, 13, 6, 3, 7, -1, 14, 6, 1, 7, 3, -.0100308498367667, .4957993924617767, -.0271883402019739, 0, 2, 7, 6, 4, 2, -1, 7, 7, 4, 1, 2, -.006956032942980528, .2797777950763702, -.0779533311724663, 0, 2, 6, 18, 6, 1, -1, 8, 18, 2, 1, 3, -.0038356808945536613, -.58163982629776, .0357399396598339, 0, 2, 18, 6, 2, 2, -1, 18, 7, 2, 1, 2, -.0032647319603711367, -.4994508028030396, .0469864904880524, 0, 2, 6, 4, 7, 3, -1, 6, 5, 7, 1, 3, -.007841235026717186, .34532830119133, -.0688104033470154, 0, 2, 12, 7, 3, 1, -1, 13, 7, 1, 1, 3, -8171811350621283e-20, .1504171043634415, -.1414667963981628, 0, 3, 15, 1, 2, 10, -1, 15, 1, 1, 5, 2, 16, 6, 1, 5, 2, -.0032448628917336464, .227245107293129, -.0928602069616318, 0, 2, 0, 18, 2, 2, -1, 0, 19, 2, 1, 2, -.0007856115116737783, -.4431901872158051, .0578124411404133, 0, 2, 19, 4, 1, 8, -1, 19, 8, 1, 4, 2, -.0006247424753382802, .1395238935947418, -.1466871947050095, 0, 2, 1, 17, 1, 3, -1, 1, 18, 1, 1, 3, -.0003294294874649495, -.2990157008171082, .0760667398571968, 0, 3, 0, 15, 6, 4, -1, 0, 15, 3, 2, 2, 3, 17, 3, 2, 2, .0012605739757418633, -.1612560003995895, .1395380049943924, 0, 2, 19, 0, 1, 18, -1, 19, 6, 1, 6, 3, -.0516670197248459, -.5314283967018127, .0407195203006268, 0, 2, 10, 2, 6, 2, -1, 12, 2, 2, 2, 3, -.0152856195345521, -.7820637822151184, .0271837692707777, 0, 2, 2, 8, 12, 2, -1, 6, 8, 4, 2, 3, .0690298229455948, -.0364270210266113, .7110251784324646, 0, 2, 16, 0, 4, 1, -1, 18, 0, 2, 1, 2, .001452274969778955, -.0968905165791512, .2166842073202133, 0, 2, 8, 4, 2, 6, -1, 8, 7, 2, 3, 2, -.0024765590205788612, .1164531037211418, -.1822797954082489, 0, 2, 14, 5, 2, 10, -1, 15, 5, 1, 10, 2, -.0015134819550439715, .1786397993564606, -.1221496984362602, 0, 2, 13, 4, 2, 2, -1, 13, 5, 2, 1, 2, -.0015099470037966967, .1808623969554901, -.1144606992602348, 0, 2, 11, 1, 3, 6, -1, 11, 3, 3, 2, 3, -.006705462001264095, .2510659992694855, -.0918714627623558, 0, 2, 6, 9, 12, 2, -1, 10, 9, 4, 2, 3, -.014075200073421, .1370750963687897, -.173335000872612, 0, 2, 9, 16, 4, 2, -1, 9, 17, 4, 1, 2, -.0022400720044970512, .4009298086166382, -.0475768782198429, 0, 2, 5, 14, 15, 4, -1, 5, 16, 15, 2, 2, .0197823699563742, -.1904035061597824, .1492341011762619, 0, 2, 18, 16, 2, 2, -1, 18, 17, 2, 1, 2, .002600287087261677, .0469717681407928, -.4330765902996063, 0, 3, 16, 18, 2, 2, -1, 16, 18, 1, 1, 2, 17, 19, 1, 1, 2, -.0005344562814570963, -.4374423027038574, .0415201894938946, 0, 2, 6, 4, 3, 8, -1, 7, 4, 1, 8, 3, -.0174665097147226, .6581817269325256, -.0344474911689758, 0, 2, 5, 9, 3, 1, -1, 6, 9, 1, 1, 3, -.00204255897551775, .3965792953968048, -.044052429497242, 0, 2, 0, 8, 1, 6, -1, 0, 10, 1, 2, 3, .0026661779265850782, .0587709583342075, -.3280636966228485, 0, 2, 11, 2, 9, 6, -1, 14, 2, 3, 6, 3, -.0559823699295521, -.5173547267913818, .0357918404042721, 0, 2, 12, 2, 6, 4, -1, 14, 2, 2, 4, 3, -.0015066330088302493, .1512386947870255, -.1252018064260483, 0, 2, 1, 7, 2, 4, -1, 1, 9, 2, 2, 2, -.0114723695442081, -.6293053030967712, .0347043313086033, 0, 2, 13, 1, 6, 4, -1, 13, 3, 6, 2, 2, .0234096292406321, -.0580633506178856, .3866822123527527, 0, 3, 4, 10, 2, 10, -1, 4, 10, 1, 5, 2, 5, 15, 1, 5, 2, -.002324372995644808, .1875409930944443, -.0983946695923805, 0, 2, 2, 16, 9, 3, -1, 5, 16, 3, 3, 3, -.0290392991155386, -.5448690056800842, .0409263409674168, 0, 2, 1, 2, 3, 9, -1, 2, 2, 1, 9, 3, -.014474649913609, -.6724839210510254, .0231288503855467, 0, 2, 19, 7, 1, 4, -1, 19, 9, 1, 2, 2, -.005208609160035849, -.4327144026756287, .0437806509435177, 0, 3, 14, 11, 6, 8, -1, 14, 11, 3, 4, 2, 17, 15, 3, 4, 2, .004938289988785982, -.1087862029671669, .1934258937835693, 0, 3, 15, 12, 4, 6, -1, 15, 12, 2, 3, 2, 17, 15, 2, 3, 2, -.004319393076002598, .2408093065023422, -.1038080006837845, 0, 3, 16, 15, 2, 2, -1, 16, 15, 1, 1, 2, 17, 16, 1, 1, 2, .0002370566944591701, -.087349072098732, .2046623975038528, 0, 3, 17, 16, 2, 2, -1, 17, 16, 1, 1, 2, 18, 17, 1, 1, 2, .0004785807977896184, .0456245802342892, -.3885467052459717, 0, 3, 17, 16, 2, 2, -1, 17, 16, 1, 1, 2, 18, 17, 1, 1, 2, -.0008534283842891455, -.550779402256012, .0358258895576, 0, 3, 2, 3, 2, 2, -1, 2, 3, 1, 1, 2, 3, 4, 1, 1, 2, 5477212107507512e-20, -.1122523993253708, .1750351935625076, 0, 2, 10, 10, 3, 3, -1, 11, 10, 1, 3, 3, -.0038445889949798584, .2452670037746429, -.0811325684189796, 0, 2, 5, 9, 7, 8, -1, 5, 13, 7, 4, 2, -.0401284582912922, -.6312270760536194, .0269726701080799, 0, 3, 7, 16, 2, 2, -1, 7, 16, 1, 1, 2, 8, 17, 1, 1, 2, -.0001788636000128463, .1985509991645813, -.1033368036150932, 0, 3, 7, 16, 2, 2, -1, 7, 16, 1, 1, 2, 8, 17, 1, 1, 2, .00017668239888735116, -.0913590118288994, .1984872072935104, 0, 2, 9, 8, 10, 3, -1, 14, 8, 5, 3, 2, .0727633833885193, .0500755794346333, -.3385263085365295, 0, 3, 6, 7, 4, 8, -1, 6, 7, 2, 4, 2, 8, 11, 2, 4, 2, .0101816300302744, -.0932299792766571, .2005959004163742, 0, 2, 1, 6, 4, 3, -1, 1, 7, 4, 1, 3, .0024409969337284565, .0646366328001022, -.2692174017429352, 0, 2, 6, 10, 6, 10, -1, 8, 10, 2, 10, 3, -.003622748889029026, .1316989064216614, -.1251484006643295, 0, 2, 4, 6, 3, 6, -1, 5, 6, 1, 6, 3, -.0013635610230267048, .1635046005249023, -.106659397482872, -1.0408929586410522, 69, 0, 3, 3, 10, 4, 4, -1, 3, 10, 2, 2, 2, 5, 12, 2, 2, 2, -.009699116460978985, .6112532019615173, -.0662253126502037, 0, 3, 3, 10, 4, 4, -1, 3, 10, 2, 2, 2, 5, 12, 2, 2, 2, -.009642653167247772, -1, .0027699959464371204, 0, 3, 3, 10, 4, 4, -1, 3, 10, 2, 2, 2, 5, 12, 2, 2, 2, -.009638186544179916, 1, -.00029904270195402205, 0, 2, 14, 8, 2, 6, -1, 15, 8, 1, 6, 2, -.004255393985658884, .2846438884735107, -.1554012000560761, 0, 3, 3, 10, 4, 4, -1, 3, 10, 2, 2, 2, 5, 12, 2, 2, 2, -.009622352197766304, -1, .0439991801977158, 0, 3, 3, 10, 4, 4, -1, 3, 10, 2, 2, 2, 5, 12, 2, 2, 2, -.009123124182224274, .8686934113502502, -.0027267890982329845, 0, 2, 12, 4, 3, 9, -1, 13, 4, 1, 9, 3, -.008624043315649033, .4535248875617981, -.0860713794827461, 0, 2, 12, 3, 1, 12, -1, 12, 7, 1, 4, 3, -.008932414464652538, .1337555944919586, -.2601251900196075, 0, 2, 2, 0, 18, 1, -1, 8, 0, 6, 1, 3, -.0142078101634979, .3207764029502869, -.0972264111042023, 0, 3, 10, 0, 10, 6, -1, 10, 0, 5, 3, 2, 15, 3, 5, 3, 2, .0259110108017921, -.1296408027410507, .2621864974498749, 0, 2, 18, 16, 2, 2, -1, 18, 17, 2, 1, 2, .00020531509653665125, -.1240428015589714, .2106295973062515, 0, 3, 3, 5, 4, 2, -1, 3, 5, 2, 1, 2, 5, 6, 2, 1, 2, -54795680625829846e-21, .1197429969906807, -.2320127934217453, 0, 2, 11, 8, 3, 3, -1, 12, 8, 1, 3, 3, .006855519954115152, -.0632761269807816, .4104425013065338, 0, 2, 11, 7, 3, 5, -1, 12, 7, 1, 5, 3, -.0122530404478312, .5488333106040955, -.0397311002016068, 0, 2, 3, 19, 15, 1, -1, 8, 19, 5, 1, 3, -.0039058770053088665, .2419098019599915, -.0970960110425949, 0, 2, 8, 13, 3, 2, -1, 8, 14, 3, 1, 2, .0027560980524867773, -.1256967931985855, .1945665031671524, 0, 3, 2, 12, 8, 4, -1, 2, 12, 4, 2, 2, 6, 14, 4, 2, 2, -.0077662160620093346, .2976570129394531, -.0968181565403938, 0, 3, 16, 16, 2, 2, -1, 16, 16, 1, 1, 2, 17, 17, 1, 1, 2, .00038997188676148653, .0621884018182755, -.4204089939594269, 0, 2, 7, 0, 3, 2, -1, 8, 0, 1, 2, 3, .0033579880837351084, .0474981404840946, -.6321688294410706, 0, 2, 6, 7, 2, 5, -1, 7, 7, 1, 5, 2, -.0167455393821001, .7109813094139099, -.0391573496162891, 0, 2, 18, 0, 2, 17, -1, 19, 0, 1, 17, 2, -.0065409899689257145, -.3504317104816437, .0706169530749321, 0, 2, 16, 16, 1, 3, -1, 16, 17, 1, 1, 3, .0003001634031534195, .091902457177639, -.2461867034435272, 0, 2, 14, 8, 3, 7, -1, 15, 8, 1, 7, 3, .0149189904332161, -.0519094504415989, .5663604140281677, 0, 3, 10, 17, 2, 2, -1, 10, 17, 1, 1, 2, 11, 18, 1, 1, 2, .00048153079114854336, .064659558236599, -.3659060895442963, 0, 2, 4, 9, 1, 3, -1, 4, 10, 1, 1, 3, -.00030211321427486837, .1792656928300858, -.1141066029667854, 0, 2, 18, 10, 2, 3, -1, 18, 11, 2, 1, 3, .0003852141962852329, .1034561991691589, -.2007246017456055, 0, 2, 12, 1, 3, 10, -1, 13, 1, 1, 10, 3, .008083713240921497, -.0660734623670578, .3028424978256226, 0, 2, 8, 12, 9, 1, -1, 11, 12, 3, 1, 3, -.0228049699217081, .5296235084533691, -.0401189997792244, 0, 3, 5, 18, 2, 2, -1, 5, 18, 1, 1, 2, 6, 19, 1, 1, 2, .00019440450705587864, .0818548202514648, -.2466336041688919, 0, 2, 19, 6, 1, 9, -1, 19, 9, 1, 3, 3, -.0128480903804302, -.3497331142425537, .0569162294268608, 0, 3, 4, 7, 2, 4, -1, 4, 7, 1, 2, 2, 5, 9, 1, 2, 2, -.001093729049898684, .2336868047714233, -.0916048064827919, 0, 2, 1, 4, 6, 14, -1, 3, 4, 2, 14, 3, .0010032650316134095, .1185218021273613, -.1846919059753418, 0, 2, 10, 5, 9, 3, -1, 13, 5, 3, 3, 3, -.0446884296834469, -.6436246037483215, .0303632691502571, 0, 2, 18, 7, 2, 6, -1, 18, 9, 2, 2, 3, .00816575437784195, .0436746589839458, -.4300208985805512, 0, 2, 5, 6, 2, 7, -1, 6, 6, 1, 7, 2, -.0117178102955222, .4178147912025452, -.0482336990535259, 0, 2, 10, 4, 6, 8, -1, 13, 4, 3, 8, 2, .0842771306633949, .053461279720068, -.379521906375885, 0, 2, 0, 8, 2, 9, -1, 0, 11, 2, 3, 3, .0142118399962783, .0449009388685226, -.4298149943351746, 0, 2, 0, 7, 5, 3, -1, 0, 8, 5, 1, 3, .001502834027633071, .0822276398539543, -.2470639944076538, 0, 2, 8, 1, 7, 2, -1, 8, 2, 7, 1, 2, .0100035797804594, -.057221669703722, .3460937142372131, 0, 2, 7, 5, 3, 5, -1, 8, 5, 1, 5, 3, -.009070632047951221, .450580894947052, -.0427953191101551, 0, 2, 19, 2, 1, 2, -1, 19, 3, 1, 1, 2, -.0003314162022434175, .1833691000938416, -.1075994968414307, 0, 2, 6, 7, 10, 11, -1, 11, 7, 5, 11, 2, .19723279774189, -.030363829806447, .6642342805862427, 0, 2, 9, 19, 6, 1, -1, 11, 19, 2, 1, 3, -.007125880103558302, -.8922504782676697, .0256699901074171, 0, 2, 3, 0, 12, 1, -1, 7, 0, 4, 1, 3, .00869213417172432, -.0707643702626228, .2821052968502045, 0, 2, 4, 1, 6, 5, -1, 6, 1, 2, 5, 3, .008926212787628174, .0710782334208488, -.3023256063461304, 0, 2, 6, 12, 12, 6, -1, 10, 12, 4, 6, 3, .0572860091924667, .0509741306304932, -.3919695019721985, 0, 2, 16, 13, 2, 3, -1, 16, 14, 2, 1, 3, .0037920880131423473, .0338419415056705, -.510162889957428, 0, 2, 7, 14, 4, 2, -1, 7, 15, 4, 1, 2, -.0014508679741993546, .3087914884090424, -.063845083117485, 0, 2, 7, 14, 2, 2, -1, 7, 15, 2, 1, 2, .00098390132188797, -.1302956938743591, .1460441052913666, 0, 3, 3, 10, 2, 4, -1, 3, 10, 1, 2, 2, 4, 12, 1, 2, 2, -.0017221809830516577, .2915700972080231, -.0685495585203171, 0, 2, 0, 3, 2, 6, -1, 0, 5, 2, 2, 3, .0109482500702143, .0343514084815979, -.4770225882530212, 0, 3, 1, 10, 2, 2, -1, 1, 10, 1, 1, 2, 2, 11, 1, 1, 2, -1717630948405713e-20, .1605526953935623, -.1169084012508392, 0, 2, 16, 4, 4, 3, -1, 16, 5, 4, 1, 3, -.005488420836627483, -.4341588914394379, .0461062416434288, 0, 3, 5, 10, 2, 4, -1, 5, 10, 1, 2, 2, 6, 12, 1, 2, 2, -.0030975250992923975, .3794333934783936, -.05686055123806, 0, 2, 5, 11, 13, 2, -1, 5, 12, 13, 1, 2, .006418208125978708, -.1585821062326431, .1233541965484619, 0, 2, 10, 2, 3, 11, -1, 11, 2, 1, 11, 3, .0118312397971749, -.0409292913973331, .458789587020874, 0, 2, 10, 2, 4, 4, -1, 10, 4, 4, 2, 2, .013540499843657, -.0537255592644215, .3505612015724182, 0, 2, 8, 8, 6, 2, -1, 10, 8, 2, 2, 3, -.002593215089291334, .1101052016019821, -.1675221025943756, 0, 2, 11, 2, 3, 3, -1, 12, 2, 1, 3, 3, .0016856270376592875, .0665743574500084, -.3083502054214478, 0, 3, 6, 18, 14, 2, -1, 6, 18, 7, 1, 2, 13, 19, 7, 1, 2, .002652469091117382, .0663184821605682, -.2786133885383606, 0, 2, 17, 7, 1, 12, -1, 17, 11, 1, 4, 3, -.007734172977507114, .1971835941076279, -.1078291982412338, 0, 2, 10, 5, 10, 3, -1, 10, 6, 10, 1, 3, .005094427149742842, .0853374898433685, -.2484700977802277, 0, 2, 6, 1, 3, 3, -1, 7, 1, 1, 3, 3, -.0029162371065467596, -.4747635126113892, .033566489815712, 0, 2, 13, 8, 3, 1, -1, 14, 8, 1, 1, 3, .0030121419113129377, -.0475753806531429, .4258680045604706, 0, 2, 10, 14, 2, 6, -1, 10, 16, 2, 2, 3, .0031694869976490736, -.1051945015788078, .1716345995664597, 0, 2, 4, 1, 12, 14, -1, 8, 1, 4, 14, 3, .2232756018638611, -.0143702095374465, .9248365163803101, 0, 2, 14, 1, 6, 14, -1, 16, 1, 2, 14, 3, -.0955850481987, -.7420663833618164, .0278189703822136, 0, 3, 3, 16, 2, 2, -1, 3, 16, 1, 1, 2, 4, 17, 1, 1, 2, 3477372956695035e-20, -.1276578009128571, .129266694188118, 0, 2, 0, 16, 2, 2, -1, 0, 17, 2, 1, 2, 7245977030834183e-20, -.1651857942342758, .1003680974245071, -1.0566600561141968, 59, 0, 3, 15, 6, 4, 6, -1, 15, 6, 2, 3, 2, 17, 9, 2, 3, 2, -.006577827036380768, .3381525874137878, -.1528190970420837, 0, 2, 12, 5, 2, 2, -1, 12, 6, 2, 1, 2, -.0010922809597104788, .2228236943483353, -.1930849999189377, 0, 2, 7, 6, 6, 13, -1, 9, 6, 2, 13, 3, -.0297595895826817, .2595987021923065, -.1540940999984741, 0, 2, 1, 9, 6, 5, -1, 3, 9, 2, 5, 3, -.0131475403904915, .1903381049633026, -.1654399931430817, 0, 2, 0, 5, 3, 4, -1, 0, 7, 3, 2, 2, -.0014396329643204808, .200717106461525, -.1233894005417824, 0, 3, 4, 1, 16, 2, -1, 4, 1, 8, 1, 2, 12, 2, 8, 1, 2, -.0035928250290453434, .2398552000522614, -.129221498966217, 0, 3, 1, 18, 4, 2, -1, 1, 18, 2, 1, 2, 3, 19, 2, 1, 2, -.0015314699849113822, -.4901489913463593, .102750301361084, 0, 2, 7, 7, 3, 4, -1, 8, 7, 1, 4, 3, -.0062372139655053616, .31214639544487, -.114056296646595, 0, 2, 3, 4, 9, 3, -1, 6, 4, 3, 3, 3, -.033364649862051, -.4952087998390198, .0513284504413605, 0, 2, 4, 6, 6, 10, -1, 6, 6, 2, 10, 3, -.0228276997804642, .3255882859230042, -.0650893077254295, 0, 2, 9, 0, 8, 10, -1, 13, 0, 4, 10, 2, -.0861990973353386, -.6764633059501648, .0269856993108988, 0, 2, 8, 0, 8, 1, -1, 12, 0, 4, 1, 2, -.002106598112732172, .2245243042707443, -.1261022984981537, 0, 3, 6, 2, 8, 16, -1, 6, 2, 4, 8, 2, 10, 10, 4, 8, 2, .0391201488673687, .1132939979434013, -.2686063051223755, 0, 3, 14, 10, 2, 10, -1, 14, 10, 1, 5, 2, 15, 15, 1, 5, 2, .0035082739777863026, -.1135995984077454, .2564977109432221, 0, 2, 12, 11, 1, 2, -1, 12, 12, 1, 1, 2, .0005928989849053323, -.1494296938180924, .164098396897316, 0, 2, 16, 0, 3, 8, -1, 17, 0, 1, 8, 3, .0007176685030572116, .0999056920409203, -.2196796983480454, 0, 2, 14, 0, 6, 10, -1, 17, 0, 3, 10, 2, -.0218036007136106, -.3171172142028809, .082889586687088, 0, 2, 16, 0, 3, 5, -1, 17, 0, 1, 5, 3, -.003296277951449156, -.3804872930049896, .0608193799853325, 0, 2, 4, 5, 11, 2, -1, 4, 6, 11, 1, 2, .0024196270387619734, -.0960130169987679, .2854058146476746, 0, 2, 1, 0, 2, 1, -1, 2, 0, 1, 1, 2, -.00044187481398694217, .2212793976068497, -.0974349081516266, 0, 2, 0, 0, 2, 3, -1, 0, 1, 2, 1, 3, .0034523929934948683, .0375531204044819, -.5796905159950256, 0, 2, 11, 6, 6, 11, -1, 13, 6, 2, 11, 3, -.0218346007168293, .295621395111084, -.0800483003258705, 0, 2, 14, 0, 3, 1, -1, 15, 0, 1, 1, 3, -.00021309500152710825, .2281450927257538, -.1011418998241425, 0, 2, 19, 7, 1, 2, -1, 19, 8, 1, 1, 2, -.0016166249988600612, -.5054119825363159, .0447645410895348, 0, 2, 17, 0, 3, 9, -1, 18, 0, 1, 9, 3, .007595960982143879, .0459865406155586, -.4119768142700195, 0, 2, 12, 7, 3, 4, -1, 13, 7, 1, 4, 3, .003860180964693427, -.0865631699562073, .2480999976396561, 0, 3, 0, 1, 14, 2, -1, 0, 1, 7, 1, 2, 7, 2, 7, 1, 2, .006062223110347986, -.0755573734641075, .2843326032161713, 0, 2, 3, 1, 3, 2, -1, 4, 1, 1, 2, 3, -.0017097420059144497, -.3529582023620606, .0584104992449284, 0, 2, 4, 0, 15, 2, -1, 9, 0, 5, 2, 3, .0165155790746212, -.0804869532585144, .2353743016719818, 0, 2, 10, 2, 6, 1, -1, 12, 2, 2, 1, 3, .004846510011702776, .041895218193531, -.4844304919242859, 0, 2, 9, 4, 6, 11, -1, 11, 4, 2, 11, 3, -.0311671700328588, .1919230967760086, -.1026815995573998, 0, 2, 2, 16, 2, 4, -1, 2, 18, 2, 2, 2, .0006189228151924908, -.210857704281807, .0938869267702103, 0, 2, 6, 17, 6, 3, -1, 8, 17, 2, 3, 3, .0119463102892041, .0390961691737175, -.6224862933158875, 0, 2, 7, 9, 6, 2, -1, 9, 9, 2, 2, 3, -.0075677200220525265, .1593683958053589, -.1225078031420708, 0, 2, 6, 8, 9, 2, -1, 9, 8, 3, 2, 3, -.0537474118173122, -.5562217831611633, .0411900095641613, 0, 3, 6, 6, 2, 10, -1, 6, 6, 1, 5, 2, 7, 11, 1, 5, 2, .0155135300010443, -.0398268811404705, .6240072846412659, 0, 2, 0, 11, 2, 3, -1, 0, 12, 2, 1, 3, .0015246650436893106, .0701386779546738, -.3078907132148743, 0, 2, 11, 15, 4, 1, -1, 13, 15, 2, 1, 2, -.0004831510013900697, .178876593708992, -.109586201608181, 0, 2, 6, 17, 1, 2, -1, 6, 18, 1, 1, 2, .0027374739293009043, .0274785906076431, -.8848956823348999, 0, 2, 0, 0, 6, 20, -1, 2, 0, 2, 20, 3, -.0657877177000046, -.4643214046955109, .0350371487438679, 0, 2, 3, 10, 2, 2, -1, 4, 10, 1, 2, 2, .0012409730115905404, -.0964792370796204, .2877922058105469, 0, 2, 4, 7, 3, 5, -1, 5, 7, 1, 5, 3, .0008139880956150591, .1151171997189522, -.1676616072654724, 0, 2, 3, 12, 6, 2, -1, 5, 12, 2, 2, 3, .0239018201828003, -.0326031893491745, .6001734733581543, 0, 2, 6, 15, 7, 4, -1, 6, 17, 7, 2, 2, .0275566000491381, -.0661373436450958, .2999447882175446, 0, 3, 17, 16, 2, 2, -1, 17, 16, 1, 1, 2, 18, 17, 1, 1, 2, -.00038070970913395286, -.3388118147850037, .0644507706165314, 0, 2, 15, 1, 3, 16, -1, 16, 1, 1, 16, 3, -.0013335429830476642, .1458866000175476, -.1321762055158615, 0, 2, 6, 16, 6, 3, -1, 8, 16, 2, 3, 3, -.009350799024105072, -.5117782950401306, .0349694713950157, 0, 2, 15, 14, 3, 2, -1, 15, 15, 3, 1, 2, .00762152299284935, .0232495293021202, -.6961941123008728, 0, 2, 12, 16, 1, 2, -1, 12, 17, 1, 1, 2, -5340786083252169e-20, .2372737973928452, -.0869107097387314, 0, 3, 0, 2, 4, 4, -1, 0, 2, 2, 2, 2, 2, 4, 2, 2, 2, -.0015332329785451293, .192284107208252, -.1042239964008331, 0, 3, 1, 1, 6, 4, -1, 1, 1, 3, 2, 2, 4, 3, 3, 2, 2, .004313589073717594, -.0962195470929146, .2560121119022369, 0, 2, 1, 18, 1, 2, -1, 1, 19, 1, 1, 2, -.000230428806389682, -.3156475126743317, .0588385984301567, 0, 2, 4, 7, 2, 3, -1, 4, 8, 2, 1, 3, -.007841182872653008, -.6634092926979065, .0245009995996952, 0, 2, 1, 0, 9, 14, -1, 1, 7, 9, 7, 2, .1710374057292938, .033831499516964, -.4561594128608704, 0, 3, 4, 9, 2, 6, -1, 4, 9, 1, 3, 2, 5, 12, 1, 3, 2, -.001601114054210484, .2157489061355591, -.0836225301027298, 0, 2, 3, 9, 4, 3, -1, 5, 9, 2, 3, 2, -.0105357803404331, .2455231994390488, -.0823844894766808, 0, 2, 0, 9, 2, 4, -1, 0, 11, 2, 2, 2, -.005835163872689009, -.4780732989311218, .0440862216055393, 0, 2, 16, 6, 3, 10, -1, 17, 6, 1, 10, 3, -.0187061093747616, -.6002402901649475, .0214100405573845, 0, 2, 16, 11, 2, 1, -1, 17, 11, 1, 1, 2, -.0009330743923783302, .2432359009981155, -.0741657167673111, -.9769343137741089, 88, 0, 2, 5, 7, 4, 4, -1, 5, 9, 4, 2, 2, .0106462296098471, -.1386138945817947, .2649407088756561, 0, 2, 10, 11, 9, 2, -1, 13, 11, 3, 2, 3, .0352982692420483, -.075821727514267, .3902106881141663, 0, 3, 15, 10, 2, 2, -1, 15, 10, 1, 1, 2, 16, 11, 1, 1, 2, .0007563838735222816, -.095521442592144, .2906199991703033, 0, 2, 10, 6, 6, 14, -1, 10, 13, 6, 7, 2, .092497706413269, -.2770423889160156, .0794747024774551, 0, 2, 14, 7, 3, 5, -1, 15, 7, 1, 5, 3, -.002934087999165058, .2298953980207443, -.0785500109195709, 0, 2, 6, 11, 12, 3, -1, 10, 11, 4, 3, 3, -.0865358486771584, .4774481058120728, -.006823122035712004, 0, 2, 17, 16, 1, 2, -1, 17, 17, 1, 1, 2, 54699288739357144e-21, -.2264260947704315, .0881921127438545, 0, 2, 8, 5, 5, 4, -1, 8, 7, 5, 2, 2, -.0365925207734108, .2735387086868286, -.0986067429184914, 0, 2, 11, 6, 4, 2, -1, 11, 7, 4, 1, 2, .0026469118893146515, -.0440839789807796, .3144528865814209, 0, 3, 3, 4, 8, 2, -1, 3, 4, 4, 1, 2, 7, 5, 4, 1, 2, -.004427181091159582, .2382272928953171, -.0867842733860016, 0, 2, 0, 8, 6, 6, -1, 2, 8, 2, 6, 3, -.005188248120248318, .1504276990890503, -.1267210990190506, 0, 2, 7, 4, 6, 2, -1, 7, 5, 6, 1, 2, .004553040023893118, -.0559450201690197, .3650163114070892, 0, 2, 7, 3, 6, 3, -1, 9, 3, 2, 3, 3, .0145624103024602, .0363977700471878, -.5355919003486633, 0, 2, 2, 17, 3, 3, -1, 2, 18, 3, 1, 3, 6867756746942177e-20, -.1747962981462479, .1106870993971825, 0, 2, 3, 10, 6, 1, -1, 5, 10, 2, 1, 3, -.005974490195512772, .3107787072658539, -.0665302276611328, 0, 2, 7, 2, 6, 2, -1, 9, 2, 2, 2, 3, -.0058691250160336494, -.3190149068832398, .063931830227375, 0, 2, 4, 11, 9, 1, -1, 7, 11, 3, 1, 3, -.0111403102055192, .2436479032039642, -.0809351801872253, 0, 2, 7, 7, 11, 12, -1, 7, 13, 11, 6, 2, -.0586435310542583, -.7608326077461243, .0308096297085285, 0, 2, 3, 2, 3, 4, -1, 4, 2, 1, 4, 3, -.0046097282320261, -.45315021276474, .0298790596425533, 0, 2, 9, 7, 9, 3, -1, 12, 7, 3, 3, 3, -.00930321030318737, .1451337933540344, -.1103316992521286, 0, 3, 15, 11, 2, 6, -1, 15, 11, 1, 3, 2, 16, 14, 1, 3, 2, .0013253629440441728, -.0976989567279816, .196464404463768, 0, 2, 0, 5, 5, 3, -1, 0, 6, 5, 1, 3, .004980076104402542, .0336480811238289, -.3979220986366272, 0, 2, 8, 1, 6, 12, -1, 10, 1, 2, 12, 3, -.007654216140508652, .090841993689537, -.1596754938364029, 0, 2, 3, 7, 15, 13, -1, 8, 7, 5, 13, 3, -.3892059028148651, -.6657109260559082, .0190288294106722, 0, 2, 0, 9, 9, 9, -1, 0, 12, 9, 3, 3, -.1001966968178749, -.5755926966667175, .0242827795445919, 0, 2, 16, 0, 3, 8, -1, 17, 0, 1, 8, 3, .0007354121189564466, .0879198014736176, -.161953404545784, 0, 2, 16, 2, 4, 2, -1, 18, 2, 2, 2, 2, -.0034802639856934547, .2606449127197266, -.0602008104324341, 0, 2, 13, 0, 6, 5, -1, 16, 0, 3, 5, 2, .008400042541325092, -.1097972989082336, .1570730954408646, 0, 2, 15, 1, 3, 2, -1, 16, 1, 1, 2, 3, .0023786011151969433, .0360582396388054, -.4727719128131867, 0, 2, 11, 8, 3, 2, -1, 12, 8, 1, 2, 3, .007383168209344149, -.0357563607394695, .4949859082698822, 0, 3, 1, 8, 2, 12, -1, 1, 8, 1, 6, 2, 2, 14, 1, 6, 2, .003211562056094408, -.1012556031346321, .1574798971414566, 0, 2, 0, 1, 6, 12, -1, 2, 1, 2, 12, 3, -.0782096683979034, -.7662708163261414, .0229658298194408, 0, 2, 19, 17, 1, 3, -1, 19, 18, 1, 1, 3, 5330398926162161e-20, -.1341435015201569, .1111491993069649, 0, 2, 11, 3, 3, 10, -1, 12, 3, 1, 10, 3, -.009641915559768677, .2506802976131439, -.0666081383824348, 0, 2, 8, 1, 9, 8, -1, 11, 1, 3, 8, 3, -.0710926726460457, -.4005681872367859, .0402977913618088, 0, 3, 18, 16, 2, 2, -1, 18, 16, 1, 1, 2, 19, 17, 1, 1, 2, .00035171560011804104, .041861180216074, -.3296119868755341, 0, 3, 18, 16, 2, 2, -1, 18, 16, 1, 1, 2, 19, 17, 1, 1, 2, -.0003345815057400614, -.2602983117103577, .0678927376866341, 0, 2, 6, 13, 2, 6, -1, 6, 15, 2, 2, 3, -.0041451421566307545, .2396769970655441, -.0720933377742767, 0, 2, 9, 14, 2, 2, -1, 9, 15, 2, 1, 2, .003175450023263693, -.0712352693080902, .241284504532814, 0, 3, 14, 10, 2, 4, -1, 14, 10, 1, 2, 2, 15, 12, 1, 2, 2, -.005518449004739523, .5032023787498474, -.0296866800636053, 0, 3, 0, 15, 2, 2, -1, 0, 15, 1, 1, 2, 1, 16, 1, 1, 2, -.00030242869979701936, .2487905025482178, -.0567585788667202, 0, 3, 6, 7, 2, 2, -1, 6, 7, 1, 1, 2, 7, 8, 1, 1, 2, -.0013125919504091144, .3174780011177063, -.0418458618223667, 0, 3, 11, 18, 2, 2, -1, 11, 18, 1, 1, 2, 12, 19, 1, 1, 2, -.00027123570907860994, -.2704207003116608, .0568289905786514, 0, 3, 0, 0, 6, 4, -1, 0, 0, 3, 2, 2, 3, 2, 3, 2, 2, -.007324177771806717, .2755667865276337, -.0542529709637165, 0, 2, 4, 1, 6, 6, -1, 6, 1, 2, 6, 3, -.0168517101556063, -.3485291004180908, .0453689992427826, 0, 2, 15, 13, 5, 4, -1, 15, 15, 5, 2, 2, .0299021005630493, .0316210798919201, -.4311437010765076, 0, 2, 7, 17, 6, 1, -1, 9, 17, 2, 1, 3, .0028902660124003887, .0380299612879753, -.3702709972858429, 0, 2, 16, 19, 4, 1, -1, 18, 19, 2, 1, 2, -.0019242949783802032, .2480027973651886, -.059333298355341, 0, 2, 16, 16, 4, 4, -1, 18, 16, 2, 4, 2, .004935414995998144, -.0830684006214142, .2204380929470062, 0, 2, 7, 8, 9, 4, -1, 10, 8, 3, 4, 3, .0820756033062935, -.0194134395569563, .6908928751945496, 0, 3, 16, 18, 2, 2, -1, 16, 18, 1, 1, 2, 17, 19, 1, 1, 2, -.0002469948958605528, -.2466056942939758, .0647764503955841, 0, 3, 2, 9, 2, 4, -1, 2, 9, 1, 2, 2, 3, 11, 1, 2, 2, -.0018365769647061825, .2883616089820862, -.0533904582262039, 0, 3, 0, 3, 8, 4, -1, 0, 3, 4, 2, 2, 4, 5, 4, 2, 2, -.004955381155014038, .1274082958698273, -.1255941987037659, 0, 2, 0, 1, 8, 1, -1, 4, 1, 4, 1, 2, -.008308662101626396, .2347811013460159, -.07167649269104, 0, 2, 0, 5, 8, 9, -1, 4, 5, 4, 9, 2, -.1087991967797279, -.2599223852157593, .0586897395551205, 0, 2, 7, 18, 6, 2, -1, 9, 18, 2, 2, 3, -.009678645059466362, -.707204282283783, .0187492594122887, 0, 2, 0, 4, 1, 12, -1, 0, 8, 1, 4, 3, -.0271368306130171, -.5838422775268555, .021684130653739, 0, 2, 19, 13, 1, 6, -1, 19, 15, 1, 2, 3, -.006538977846503258, -.5974891185760498, .0214803107082844, 0, 2, 2, 8, 6, 8, -1, 4, 8, 2, 8, 3, -.0120956301689148, .1326903998851776, -.099722720682621, 0, 2, 0, 0, 9, 17, -1, 3, 0, 3, 17, 3, -.1677609980106354, -.5665506720542908, .0321230888366699, 0, 2, 7, 9, 6, 8, -1, 9, 9, 2, 8, 3, -.0132625503465533, .1149559020996094, -.1173838973045349, 0, 2, 5, 10, 9, 4, -1, 8, 10, 3, 4, 3, .076744519174099, -.0314132310450077, .5993549227714539, 0, 2, 5, 0, 8, 3, -1, 5, 1, 8, 1, 3, .005078522954136133, -.0529119409620762, .2334239929914475, 0, 3, 16, 6, 4, 4, -1, 16, 6, 2, 2, 2, 18, 8, 2, 2, 2, .0031800279393792152, -.0777343884110451, .1765290945768356, 0, 3, 17, 4, 2, 8, -1, 17, 4, 1, 4, 2, 18, 8, 1, 4, 2, -.0017729829996824265, .1959162950515747, -.0797521993517876, 0, 2, 2, 16, 1, 3, -1, 2, 17, 1, 1, 3, -.00048560940194875, -.2880037128925324, .0490471199154854, 0, 2, 2, 16, 1, 3, -1, 2, 17, 1, 1, 3, .00036554320831783116, .0679228976368904, -.2249943017959595, 0, 2, 11, 0, 1, 3, -1, 11, 1, 1, 1, 3, -.0002693867136258632, .1658217012882233, -.0897440984845161, 0, 2, 11, 2, 9, 7, -1, 14, 2, 3, 7, 3, .0786842331290245, .0260816793888807, -.5569373965263367, 0, 2, 10, 2, 3, 6, -1, 11, 2, 1, 6, 3, -.0007377481088042259, .1403687000274658, -.1180030032992363, 0, 2, 5, 9, 15, 2, -1, 5, 10, 15, 1, 2, .0239578299224377, .0304707400500774, -.4615997970104218, 0, 2, 8, 16, 6, 2, -1, 8, 17, 6, 1, 2, -.001623908057808876, .2632707953453064, -.0567653700709343, 0, 3, 9, 16, 10, 2, -1, 9, 16, 5, 1, 2, 14, 17, 5, 1, 2, -.0009081974858418107, .1546245962381363, -.1108706966042519, 0, 3, 9, 17, 2, 2, -1, 9, 17, 1, 1, 2, 10, 18, 1, 1, 2, .0003980624896939844, .0556303709745407, -.2833195924758911, 0, 3, 10, 15, 6, 4, -1, 10, 15, 3, 2, 2, 13, 17, 3, 2, 2, .002050644950941205, -.0916048362851143, .1758553981781006, 0, 2, 4, 5, 15, 12, -1, 9, 5, 5, 12, 3, .0267425496131182, .062003031373024, -.2448700070381165, 0, 2, 11, 13, 2, 3, -1, 11, 14, 2, 1, 3, -.0021497008856385946, .2944929897785187, -.0532181486487389, 0, 2, 8, 13, 7, 3, -1, 8, 14, 7, 1, 3, .005667165853083134, -.0642982423305511, .249056801199913, 0, 2, 1, 12, 1, 2, -1, 1, 13, 1, 1, 2, 6831790233263746e-20, -.1681963056325913, .0965485796332359, 0, 3, 16, 18, 2, 2, -1, 16, 18, 1, 1, 2, 17, 19, 1, 1, 2, .0001760043960530311, .0653080120682716, -.2426788061857224, 0, 2, 1, 19, 18, 1, -1, 7, 19, 6, 1, 3, .004186160862445831, -.0979885831475258, .1805288940668106, 0, 2, 1, 17, 6, 1, -1, 4, 17, 3, 1, 2, -.0021808340679854155, .192312702536583, -.0941239297389984, 0, 2, 1, 3, 1, 12, -1, 1, 9, 1, 6, 2, .021730400621891, .0355785116553307, -.4508853852748871, 0, 2, 0, 9, 3, 6, -1, 0, 11, 3, 2, 3, -.0147802699357271, -.4392701089382172, .0317355915904045, 0, 2, 5, 4, 3, 10, -1, 6, 4, 1, 10, 3, -.0036145891062915325, .1981147974729538, -.0777014195919037, 0, 2, 6, 17, 2, 1, -1, 7, 17, 1, 1, 2, .0018892709631472826, .0199624393135309, -.7204172015190125, 0, 2, 1, 0, 6, 12, -1, 3, 0, 2, 12, 3, -.0013822480104863644, .0984669476747513, -.1488108038902283, 0, 2, 4, 7, 9, 2, -1, 7, 7, 3, 2, 3, -.0039505911991000175, .1159323006868362, -.1279197037220001, -1.012935996055603, 58, 0, 2, 6, 11, 9, 1, -1, 9, 11, 3, 1, 3, -.0193955395370722, .474747508764267, -.1172109022736549, 0, 2, 17, 10, 2, 10, -1, 17, 15, 2, 5, 2, .013118919916451, -.255521297454834, .1637880057096481, 0, 3, 4, 10, 2, 10, -1, 4, 10, 1, 5, 2, 5, 15, 1, 5, 2, -.0005160680157132447, .1945261955261231, -.17448890209198, 0, 2, 12, 3, 3, 12, -1, 13, 3, 1, 12, 3, -.0131841599941254, .441814512014389, -.0900487527251244, 0, 3, 15, 3, 4, 6, -1, 15, 3, 2, 3, 2, 17, 6, 2, 3, 2, .0034657081123441458, -.1347709000110626, .1805634051561356, 0, 2, 12, 8, 3, 3, -1, 13, 8, 1, 3, 3, .006298020016402006, -.0541649796068668, .3603338003158569, 0, 2, 4, 14, 2, 4, -1, 4, 16, 2, 2, 2, .0016879989998415112, -.1999794989824295, .1202159970998764, 0, 2, 6, 16, 1, 3, -1, 6, 17, 1, 1, 3, .00036039709812030196, .1052414029836655, -.2411606013774872, 0, 2, 1, 1, 2, 3, -1, 2, 1, 1, 3, 2, -.001527684973552823, .2813552916049957, -.0689648166298866, 0, 2, 0, 2, 4, 1, -1, 2, 2, 2, 1, 2, .00350335706025362, -.0825195834040642, .4071359038352966, 0, 2, 8, 17, 12, 3, -1, 12, 17, 4, 3, 3, -.004733716137707233, .1972700953483582, -.117101401090622, 0, 2, 9, 16, 6, 4, -1, 11, 16, 2, 4, 3, -.0115571497008204, -.5606111288070679, .0681709572672844, 0, 2, 4, 6, 3, 6, -1, 4, 9, 3, 3, 2, -.0274457205086946, .4971862137317658, -.0623801499605179, 0, 2, 6, 2, 12, 9, -1, 6, 5, 12, 3, 3, -.0528257787227631, .169212207198143, -.1309355050325394, 0, 3, 6, 0, 14, 20, -1, 6, 0, 7, 10, 2, 13, 10, 7, 10, 2, -.2984969913959503, -.6464967131614685, .0400768183171749, 0, 3, 15, 16, 2, 2, -1, 15, 16, 1, 1, 2, 16, 17, 1, 1, 2, -.00026307269581593573, .2512794137001038, -.0894948393106461, 0, 3, 15, 16, 2, 2, -1, 15, 16, 1, 1, 2, 16, 17, 1, 1, 2, .00023261709429789335, -.0868439897894859, .2383197993040085, 0, 2, 19, 8, 1, 3, -1, 19, 9, 1, 1, 3, .00023631360090803355, .1155446022748947, -.189363494515419, 0, 2, 13, 4, 1, 2, -1, 13, 5, 1, 1, 2, .0020742209162563086, -.0485948510468006, .5748599171638489, 0, 2, 0, 4, 4, 2, -1, 0, 5, 4, 1, 2, -.007030888926237822, -.5412080883979797, .0487437509000301, 0, 2, 19, 5, 1, 6, -1, 19, 7, 1, 2, 3, .00826522707939148, .0264945197850466, -.6172845959663391, 0, 2, 16, 0, 2, 1, -1, 17, 0, 1, 1, 2, .0002004276029765606, -.1176863014698029, .1633386015892029, 0, 2, 13, 1, 1, 3, -1, 13, 2, 1, 1, 3, .0016470040427520871, -.0599549189209938, .3517970144748688, 0, 2, 17, 17, 1, 3, -1, 17, 18, 1, 1, 3, -.0003564253856893629, -.344202995300293, .0649482533335686, 0, 3, 5, 4, 8, 8, -1, 5, 4, 4, 4, 2, 9, 8, 4, 4, 2, -.0309358704835176, .1997970044612885, -.0976936966180801, 0, 3, 1, 2, 2, 2, -1, 1, 2, 1, 1, 2, 2, 3, 1, 1, 2, -.0006357877282425761, -.3148139119148254, .0594250410795212, 0, 3, 0, 0, 8, 6, -1, 0, 0, 4, 3, 2, 4, 3, 4, 3, 2, -.0118621801957488, .2004369050264359, -.0894475430250168, 0, 2, 6, 3, 4, 2, -1, 6, 4, 4, 1, 2, .007150893099606037, -.0390060618519783, .5332716107368469, 0, 2, 1, 0, 3, 3, -1, 1, 1, 3, 1, 3, -.0020059191156178713, -.2846972048282623, .0707236081361771, 0, 2, 6, 1, 7, 2, -1, 6, 2, 7, 1, 2, .0036412389017641544, -.1066031977534294, .2494480013847351, 0, 2, 2, 6, 12, 6, -1, 6, 6, 4, 6, 3, -.1346742957830429, .4991008043289185, -.0403322204947472, 0, 2, 1, 16, 9, 2, -1, 4, 16, 3, 2, 3, -.002254765946418047, .1685169041156769, -.1111928001046181, 0, 2, 7, 15, 6, 4, -1, 9, 15, 2, 4, 3, .004384228959679604, .0861394926905632, -.2743177115917206, 0, 2, 6, 15, 12, 1, -1, 12, 15, 6, 1, 2, -.007336116861552, .2487521022558212, -.0959191620349884, 0, 2, 17, 17, 1, 3, -1, 17, 18, 1, 1, 3, .0006466691265814006, .0674315765500069, -.3375408053398132, 0, 3, 17, 15, 2, 2, -1, 17, 15, 1, 1, 2, 18, 16, 1, 1, 2, .0002298376930411905, -.0839030519127846, .24584099650383, 0, 2, 3, 13, 3, 3, -1, 3, 14, 3, 1, 3, .006703907158225775, .0290793292224407, -.6905593872070312, 0, 2, 10, 17, 1, 3, -1, 10, 18, 1, 1, 3, 5073488864582032e-20, -.1569671928882599, .1196542978286743, 0, 2, 4, 0, 14, 8, -1, 11, 0, 7, 8, 2, -.2033555954694748, -.6950634717941284, .0275075193494558, 0, 2, 2, 0, 12, 2, -1, 6, 0, 4, 2, 3, .009493941441178322, -.0874493718147278, .2396833002567291, 0, 2, 2, 0, 4, 3, -1, 4, 0, 2, 3, 2, -.002405524021014571, .2115096002817154, -.1314893066883087, 0, 2, 13, 1, 1, 2, -1, 13, 2, 1, 1, 2, -.00011342419747961685, .1523378938436508, -.1272590011358261, 0, 2, 7, 5, 3, 6, -1, 8, 5, 1, 6, 3, .0149922100827098, -.0341279692947865, .506240725517273, 0, 3, 18, 2, 2, 2, -1, 18, 2, 1, 1, 2, 19, 3, 1, 1, 2, .0007406820077449083, .0487647503614426, -.4022532105445862, 0, 2, 15, 1, 2, 14, -1, 16, 1, 1, 14, 2, -.004245944786816835, .2155476063489914, -.0871269926428795, 0, 3, 15, 6, 2, 2, -1, 15, 6, 1, 1, 2, 16, 7, 1, 1, 2, .0006865510949864984, -.0754187181591988, .2640590965747833, 0, 2, 3, 1, 6, 3, -1, 5, 1, 2, 3, 3, -.0167514607310295, -.6772903203964233, .0329187288880348, 0, 3, 7, 16, 2, 2, -1, 7, 16, 1, 1, 2, 8, 17, 1, 1, 2, -.00026301678735762835, .2272586971521378, -.0905348733067513, 0, 3, 5, 17, 2, 2, -1, 5, 17, 1, 1, 2, 6, 18, 1, 1, 2, .0004339861043263227, .0558943785727024, -.3559266924858093, 0, 2, 9, 10, 6, 10, -1, 11, 10, 2, 10, 3, -.0201501492410898, .1916276067495346, -.0949299708008766, 0, 2, 10, 17, 6, 3, -1, 12, 17, 2, 3, 3, -.0144521296024323, -.6851034164428711, .0254221707582474, 0, 2, 14, 5, 2, 10, -1, 14, 10, 2, 5, 2, -.0211497396230698, .3753319084644318, -.0514965802431107, 0, 2, 11, 12, 6, 2, -1, 11, 13, 6, 1, 2, .0211377702653408, .0290830805897713, -.8943036794662476, 0, 2, 8, 1, 1, 3, -1, 8, 2, 1, 1, 3, .0011524349683895707, -.0696949362754822, .2729980051517487, 0, 3, 12, 15, 2, 2, -1, 12, 15, 1, 1, 2, 13, 16, 1, 1, 2, -.00019070580310653895, .1822811961174011, -.0983670726418495, 0, 3, 6, 8, 6, 4, -1, 6, 8, 3, 2, 2, 9, 10, 3, 2, 2, -.0363496318459511, -.8369309902191162, .0250557605177164, 0, 2, 7, 5, 3, 5, -1, 8, 5, 1, 5, 3, -.009063207544386387, .4146350026130676, -.0544134490191936, 0, 2, 0, 5, 7, 3, -1, 0, 6, 7, 1, 3, -.0020535490475594997, -.1975031048059464, .1050689965486527, -.9774749279022217, 93, 0, 2, 7, 9, 6, 6, -1, 9, 9, 2, 6, 3, -.0227170195430517, .2428855001926422, -.1474552005529404, 0, 2, 5, 7, 8, 8, -1, 5, 11, 8, 4, 2, .0255059506744146, -.2855173945426941, .1083720996975899, 0, 3, 4, 9, 2, 6, -1, 4, 9, 1, 3, 2, 5, 12, 1, 3, 2, -.0026640091091394424, .2927573025226593, -.1037271022796631, 0, 2, 10, 11, 6, 1, -1, 12, 11, 2, 1, 3, -.003811528906226158, .2142689973115921, -.1381113976240158, 0, 2, 13, 6, 6, 11, -1, 15, 6, 2, 11, 3, -.0167326908558607, .2655026018619537, -.0439113304018974, 0, 3, 8, 17, 2, 2, -1, 8, 17, 1, 1, 2, 9, 18, 1, 1, 2, .0004927701083943248, .02110455930233, -.4297136068344116, 0, 2, 4, 12, 12, 1, -1, 8, 12, 4, 1, 3, -.0366911105811596, .5399242043495178, -.0436488017439842, 0, 2, 11, 17, 3, 2, -1, 11, 18, 3, 1, 2, .0012615970335900784, -.1293386965990067, .1663877069950104, 0, 2, 8, 17, 6, 1, -1, 10, 17, 2, 1, 3, -.008410685695707798, -.9469841122627258, .0214658491313457, 0, 2, 4, 1, 14, 6, -1, 4, 3, 14, 2, 3, .0649027228355408, -.0717277601361275, .2661347985267639, 0, 2, 14, 2, 2, 12, -1, 14, 8, 2, 6, 2, .0303050000220537, -.0827824920415878, .2769432067871094, 0, 2, 12, 13, 3, 2, -1, 12, 14, 3, 1, 2, .0025875340215861797, -.1296616941690445, .1775663048028946, 0, 2, 6, 1, 6, 1, -1, 8, 1, 2, 1, 3, -.00702404510229826, -.6424317955970764, .0399432107806206, 0, 2, 10, 6, 6, 1, -1, 12, 6, 2, 1, 3, -.0010099769569933414, .1417661011219025, -.1165997013449669, 0, 2, 3, 19, 2, 1, -1, 4, 19, 1, 1, 2, -4117907155887224e-20, .1568766981363297, -.1112734004855156, 0, 3, 18, 16, 2, 2, -1, 18, 16, 1, 1, 2, 19, 17, 1, 1, 2, -.0004729315114673227, -.3355455994606018, .0459777303040028, 0, 2, 16, 11, 3, 7, -1, 17, 11, 1, 7, 3, -.0017178079579025507, .1695290952920914, -.1057806983590126, 0, 2, 19, 5, 1, 6, -1, 19, 8, 1, 3, 2, -.0133331697434187, -.5825781226158142, .0309784300625324, 0, 2, 9, 8, 4, 3, -1, 9, 9, 4, 1, 3, -.0018783430568873882, .1426687985658646, -.111312597990036, 0, 3, 16, 8, 4, 4, -1, 16, 8, 2, 2, 2, 18, 10, 2, 2, 2, -.006576598156243563, .2756136059761047, -.0531003288924694, 0, 3, 2, 8, 2, 2, -1, 2, 8, 1, 1, 2, 3, 9, 1, 1, 2, -7721038127783686e-20, .1324024051427841, -.111677996814251, 0, 3, 3, 5, 6, 4, -1, 3, 5, 3, 2, 2, 6, 7, 3, 2, 2, .0219685398042202, -.0269681606441736, .5006716847419739, 0, 3, 2, 3, 8, 16, -1, 2, 3, 4, 8, 2, 6, 11, 4, 8, 2, -.027445750311017, -.240867406129837, .0604782700538635, 0, 2, 17, 17, 1, 3, -1, 17, 18, 1, 1, 3, 7830584945622832e-20, -.1333488970994949, .1012346968054771, 0, 2, 7, 2, 8, 11, -1, 11, 2, 4, 11, 2, .0701906830072403, -.0548637807369232, .2480994015932083, 0, 2, 13, 3, 6, 14, -1, 16, 3, 3, 14, 2, -.0719021335244179, -.3784669041633606, .0422109998762608, 0, 2, 0, 9, 18, 2, -1, 6, 9, 6, 2, 3, -.1078097969293594, -.3748658895492554, .0428334400057793, 0, 2, 6, 10, 14, 3, -1, 6, 11, 14, 1, 3, .0014364200178533792, .0804763585329056, -.1726378947496414, 0, 2, 10, 9, 9, 3, -1, 13, 9, 3, 3, 3, .068289190530777, -.0355957895517349, .4076131880283356, 0, 3, 3, 5, 4, 6, -1, 3, 5, 2, 3, 2, 5, 8, 2, 3, 2, -.00680371792986989, .1923379004001617, -.0823680236935616, 0, 2, 3, 7, 3, 7, -1, 4, 7, 1, 7, 3, -.0005619348958134651, .1305712014436722, -.1435514986515045, 0, 2, 2, 8, 11, 6, -1, 2, 10, 11, 2, 3, -.0582766495645046, -.3012543916702271, .0528196506202221, 0, 2, 8, 9, 6, 3, -1, 8, 10, 6, 1, 3, -.006120571866631508, .2204390019178391, -.0756917521357536, 0, 2, 3, 3, 3, 11, -1, 4, 3, 1, 11, 3, -.0135943097993732, -.3904936015605927, .0418571084737778, 0, 2, 0, 19, 6, 1, -1, 3, 19, 3, 1, 2, .0013626200379803777, -.0953634232282639, .1497032046318054, 0, 2, 18, 18, 1, 2, -1, 18, 19, 1, 1, 2, -.0001507421984570101, -.2394558042287827, .0647983327507973, 0, 3, 8, 0, 12, 6, -1, 8, 0, 6, 3, 2, 14, 3, 6, 3, 2, -.077414259314537, .5594198107719421, -.0245168805122375, 0, 2, 19, 5, 1, 3, -1, 19, 6, 1, 1, 3, .0009211787255480886, .0549288615584373, -.2793481051921845, 0, 2, 5, 8, 2, 1, -1, 6, 8, 1, 1, 2, .001025078003294766, -.0621673092246056, .249763697385788, 0, 2, 13, 11, 2, 1, -1, 14, 11, 1, 1, 2, -.000811747508123517, .2343793958425522, -.0657258108258247, 0, 2, 3, 6, 15, 13, -1, 8, 6, 5, 13, 3, .0834310203790665, .0509548000991344, -.3102098107337952, 0, 2, 4, 3, 6, 2, -1, 6, 3, 2, 2, 3, -.009201445616781712, -.3924253880977631, .0329269506037235, 0, 2, 0, 18, 1, 2, -1, 0, 19, 1, 1, 2, -.00029086650465615094, -.3103975057601929, .0497118197381496, 0, 2, 7, 8, 2, 6, -1, 8, 8, 1, 6, 2, .00775768980383873, -.0440407507121563, .3643135130405426, 0, 2, 3, 0, 6, 19, -1, 5, 0, 2, 19, 3, -.1246609017252922, -.819570779800415, .0191506408154964, 0, 2, 3, 1, 6, 5, -1, 5, 1, 2, 5, 3, .0132425501942635, .0389888398349285, -.3323068022727966, 0, 2, 17, 14, 3, 6, -1, 17, 16, 3, 2, 3, -.006677012890577316, -.357901394367218, .0404602102935314, 0, 2, 17, 13, 2, 6, -1, 18, 13, 1, 6, 2, -.0027479929849505424, .2525390088558197, -.0564278215169907, 0, 2, 17, 18, 2, 2, -1, 18, 18, 1, 2, 2, .0008265965152531862, -.07198865711689, .2278047949075699, 0, 2, 11, 14, 9, 4, -1, 14, 14, 3, 4, 3, -.0501534007489681, -.630364716053009, .027462050318718, 0, 3, 15, 8, 4, 6, -1, 15, 8, 2, 3, 2, 17, 11, 2, 3, 2, .007420314941555262, -.0666107162833214, .2778733968734741, 0, 2, 1, 16, 1, 3, -1, 1, 17, 1, 1, 3, -.0006795178051106632, -.3632706105709076, .0427954308688641, 0, 2, 7, 0, 3, 14, -1, 8, 0, 1, 14, 3, -.0019305750029161572, .1419623047113419, -.1075998023152351, 0, 2, 12, 0, 2, 1, -1, 13, 0, 1, 1, 2, -.0003813267103396356, .2159176021814346, -.0702026635408401, 0, 2, 7, 9, 6, 5, -1, 10, 9, 3, 5, 2, -.0709903463721275, .4526660144329071, -.0407504811882973, 0, 2, 15, 5, 4, 9, -1, 17, 5, 2, 9, 2, -.0533680804073811, -.6767405867576599, .0192883405834436, 0, 2, 11, 0, 6, 6, -1, 13, 0, 2, 6, 3, -.0200648494064808, -.4336543083190918, .0318532884120941, 0, 3, 16, 15, 2, 2, -1, 16, 15, 1, 1, 2, 17, 16, 1, 1, 2, .001197636011056602, -.0265598706901073, .5079718232154846, 0, 3, 16, 15, 2, 2, -1, 16, 15, 1, 1, 2, 17, 16, 1, 1, 2, -.0002269730030093342, .1801259964704514, -.0836065486073494, 0, 2, 13, 2, 2, 18, -1, 13, 11, 2, 9, 2, .0152626996859908, -.2023892998695374, .067422017455101, 0, 2, 8, 4, 8, 10, -1, 8, 9, 8, 5, 2, -.2081176936626434, .6694386005401611, -.0224521104246378, 0, 2, 8, 3, 2, 3, -1, 8, 4, 2, 1, 3, .001551436958834529, -.0751218423247337, .17326919734478, 0, 2, 11, 1, 6, 9, -1, 11, 4, 6, 3, 3, -.0529240109026432, .2499251961708069, -.0628791674971581, 0, 2, 15, 4, 5, 6, -1, 15, 6, 5, 2, 3, -.0216488502919674, -.2919428050518036, .0526144914329052, 0, 3, 12, 18, 2, 2, -1, 12, 18, 1, 1, 2, 13, 19, 1, 1, 2, -.00022905069636180997, -.2211730033159256, .0631683394312859, 0, 2, 1, 17, 1, 3, -1, 1, 18, 1, 1, 3, 5017007060814649e-20, -.1151070967316628, .1161144003272057, 0, 2, 12, 19, 2, 1, -1, 13, 19, 1, 1, 2, -.0001641606941120699, .1587152034044266, -.0826006010174751, 0, 2, 8, 10, 6, 6, -1, 10, 10, 2, 6, 3, -.0120032895356417, .1221809014678001, -.112296998500824, 0, 2, 14, 2, 6, 5, -1, 16, 2, 2, 5, 3, -.0177841000258923, -.3507278859615326, .0313419215381145, 0, 2, 9, 5, 2, 6, -1, 9, 7, 2, 2, 3, -.006345758214592934, .1307806968688965, -.1057441011071205, 0, 2, 1, 15, 2, 2, -1, 2, 15, 1, 2, 2, -.0007952324231155217, .1720467060804367, -.086001992225647, 0, 2, 18, 17, 1, 3, -1, 18, 18, 1, 1, 3, -.00031029590172693133, -.2843317091464996, .0518171191215515, 0, 2, 10, 14, 4, 6, -1, 10, 16, 4, 2, 3, -.0170537102967501, .3924242854118347, -.0401432700455189, 0, 2, 9, 7, 3, 2, -1, 10, 7, 1, 2, 3, .004650495946407318, -.031837560236454, .4123769998550415, 0, 3, 6, 9, 6, 2, -1, 6, 9, 3, 1, 2, 9, 10, 3, 1, 2, -.0103587601333857, -.5699319839477539, .0292483791708946, 0, 2, 0, 2, 1, 12, -1, 0, 6, 1, 4, 3, -.0221962407231331, -.4560528993606567, .0262859892100096, 0, 2, 4, 0, 15, 1, -1, 9, 0, 5, 1, 3, -.0070536029525101185, .1599832028150559, -.091594859957695, 0, 3, 9, 0, 8, 2, -1, 9, 0, 4, 1, 2, 13, 1, 4, 1, 2, -.0005709429970011115, -.1407632976770401, .1028741970658302, 0, 2, 12, 2, 8, 1, -1, 16, 2, 4, 1, 2, -.0022152599412947893, .1659359931945801, -.0852739885449409, 0, 2, 7, 1, 10, 6, -1, 7, 3, 10, 2, 3, -.0280848909169436, .2702234089374542, -.0558738112449646, 0, 2, 18, 6, 2, 3, -1, 18, 7, 2, 1, 3, .0021515151020139456, .0424728915095329, -.3200584948062897, 0, 3, 4, 12, 2, 2, -1, 4, 12, 1, 1, 2, 5, 13, 1, 1, 2, -.00029733829433098435, .1617716997861862, -.0851155892014503, 0, 2, 6, 6, 6, 2, -1, 8, 6, 2, 2, 3, -.0166947804391384, -.4285877048969269, .0305416099727154, 0, 2, 0, 9, 9, 6, -1, 3, 9, 3, 6, 3, .1198299005627632, -.0162772908806801, .7984678149223328, 0, 2, 17, 18, 2, 2, -1, 18, 18, 1, 2, 2, -.000354994204826653, .1593593955039978, -.0832728818058968, 0, 2, 11, 2, 6, 16, -1, 13, 2, 2, 16, 3, -.0182262696325779, .1952728033065796, -.0739398896694183, 0, 2, 2, 4, 15, 13, -1, 7, 4, 5, 13, 3, -.00040238600922748446, .0791018083691597, -.2080612927675247, 0, 2, 16, 2, 3, 10, -1, 17, 2, 1, 10, 3, .0004089206049684435, .1003663018345833, -.1512821018695831, 0, 2, 6, 10, 2, 1, -1, 7, 10, 1, 1, 2, .0009536811267025769, -.0730116665363312, .2175202071666718, 0, 2, 1, 1, 18, 16, -1, 10, 1, 9, 16, 2, .4308179914951325, -.0274506993591785, .570615828037262, 0, 2, 14, 4, 3, 15, -1, 15, 4, 1, 15, 3, .0005356483161449432, .1158754006028175, -.1279056072235107, 0, 2, 19, 13, 1, 2, -1, 19, 14, 1, 1, 2, 2443073026370257e-20, -.1681662946939468, .0804499834775925, 0, 2, 2, 6, 5, 8, -1, 2, 10, 5, 4, 2, -.0553456507623196, .4533894956111908, -.0312227793037891];
    t.eye = new Float32Array(e), t.eye.tilted = !1
}(objectdetect);
var webglFilter = function() {
    var t, e, i, r, o, n, a, s, l, h, c, u, d, T, g, f, p, v, m, S, A, b, y, P, M, w, G, E, C, x, R, I, B, D, H, F, L, _, O, V, N, U, W, X, k, J, K, Y, z = !1,
        Q = !1,
        j = !1,
        q = ["attribute vec2 a_texCoord;", "attribute vec2 a_position;", "", "varying vec2 v_texCoord;", "", "void main() {", "   // transform coordinates to regular coordinates", "   gl_Position = vec4(a_position,0.0,1.0);", " ", "   // pass the texCoord to the fragment shader", "   v_texCoord = a_texCoord;", "}"].join("\n"),
        Z = ["attribute vec2 a_texCoord;", "attribute vec2 a_position;", "", "varying vec2 v_texCoord;", "", "void main() {", "   // transform coordinates to regular coordinates", "   gl_Position = vec4(a_position,0.0,1.0);", " ", "   // pass the texCoord to the fragment shader", "   v_texCoord = a_texCoord;", "}"].join("\n"),
        $ = ["attribute vec2 a_texCoord_draw;", "attribute vec2 a_position_draw;", "attribute float a_patchChoice_draw;", "", "uniform vec2 u_resolutiondraw;", "", "varying vec2 v_texCoord;", "varying float v_select;", "", "void main() {", "   // convert the rectangle from pixels to 0.0 to 1.0", "   vec2 zeroToOne = a_position_draw / u_resolutiondraw;", "", "   // convert from 0->1 to 0->2", "   vec2 zeroToTwo = zeroToOne * 2.0;", "", "   // convert from 0->2 to -1->+1 (clipspace)", "   vec2 clipSpace = zeroToTwo - 1.0;", "   ", "   // transform coordinates to regular coordinates", "   gl_Position = vec4(clipSpace * vec2(1.0, 1.0), 0, 1);", "", "   // pass the texCoord to the fragment shader", "   v_texCoord = a_texCoord_draw;", "   ", "   v_select = a_patchChoice_draw;", "}"].join("\n"),
        tt = ["precision mediump float;", "", "// our responses", "uniform sampler2D u_responses;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "varying float v_select;", "", "const vec4 bit_shift = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);", "const vec4 bit_mask  = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);", "", "// packing code from here http://stackoverflow.com/questions/9882716/packing-float-into-vec4-how-does-this-code-work", "void main() {", "  vec4 colorSum = texture2D(u_responses, v_texCoord);", "  float value = 0.0;", "  if (v_select < 0.1) {", "    value = colorSum[0];", "  } else if (v_select > 0.9 && v_select < 1.1) {", "    value = colorSum[1];", "  } else if (v_select > 1.9 && v_select < 2.1) {", "    value = colorSum[2];", "  } else if (v_select > 2.9 && v_select < 3.1) {", "    value = colorSum[3];", "  } else {", "    value = 1.0;", "  }", "  ", "  vec4 res = fract(value * bit_shift);", "  res -= res.xxyz * bit_mask;", "  ", "  //gl_FragColor = vec4(value, value, value, value);", "  //gl_FragColor = vec4(1.0, value, 1.0, 1.0);", "  gl_FragColor = res;", "}"].join("\n");
    this.init = function(et, rt, ot, nt, at, st, lt) {
        if (st != lt) return void alert("filter width and height must be same size!");
        if (st % 2 == 0 || lt % 2 == 0) return void alert("filters used in svm must be of odd dimensions!");
        B = rt, i = st, r = lt, o = nt, n = at, a = ot, d = Math.floor(a / 4) + Math.ceil(a % 4 / 4), s = o, l = n * d, b = o - i + 1, y = n - i + 1, P = y * a, E = Math.floor(a / 4) + Math.ceil(a % 4 / 4), C = o, x = n * E, R = o * n, I = new Float32Array(R * E * 4);
        var ht = [1 / o, 1 / (n * d)];
        if (Y = ["precision mediump float;", "", "const vec2 u_onePixelPatches = vec2(" + (1 / o).toFixed(10) + "," + (1 / (n * d)).toFixed(10) + ");", "const vec2 u_onePixelFilters = vec2(" + (1 / i).toFixed(10) + "," + (1 / (r * d)).toFixed(10) + ");", "const float u_halffilterwidth = " + ((i - 1) / 2).toFixed(1) + ";", "const float u_halffilterheight = " + ((r - 1) / 2).toFixed(1) + ";", "", "// our patches", "uniform sampler2D u_patches;", "// our filters", "uniform sampler2D u_filters;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "varying vec2 v_texCoordFilters; // this should give us correct filter", "", "void main() {", "  vec4 colorSum = vec4(0.0, 0.0, 0.0, 0.0);", "  vec4 maxn = vec4(0.0, 0.0, 0.0, 0.0);", "  vec4 minn = vec4(256.0, 256.0, 256.0, 256.0);", "  vec4 scale = vec4(0.0, 0.0, 0.0, 0.0);", "  vec4 patchValue = vec4(0.0, 0.0, 0.0, 0.0);", "  vec4 filterValue = vec4(0.0, 0.0, 0.0, 0.0);", "  vec4 filterTemp = vec4(0.0, 0.0, 0.0, 0.0);", "  for (int w = 0;w < " + i + ";w++) {", "    for (int h = 0;h < " + r + ";h++) {", "      patchValue = texture2D(u_patches, v_texCoord + u_onePixelPatches * vec2(float(w)-u_halffilterwidth, float(h)-u_halffilterheight));", "      filterValue = texture2D(u_filters, v_texCoordFilters + u_onePixelFilters * vec2(float(w)-u_halffilterwidth, float(h)-u_halffilterheight));", "      maxn = max(patchValue, maxn);", "      minn = min(patchValue, minn);", "      colorSum += patchValue*filterValue;", "      filterTemp += filterValue;", "    } ", "  }", "  scale = maxn-minn;", "  colorSum = (colorSum-(minn*filterTemp))/scale;", "  // logistic transformation", "  colorSum = 1.0/(1.0 + exp(- (colorSum) ));", "  gl_FragColor = colorSum;", "}"].join("\n"), K = ["attribute vec2 a_texCoord;", "attribute vec2 a_position;", "", "const vec2 u_resolution = vec2(" + s.toFixed(1) + "," + l.toFixed(1) + ");", "const float u_patchHeight = " + (1 / d).toFixed(10) + ";", "const float u_filterHeight = " + (1 / d).toFixed(10) + ";", "const vec2 u_midpoint = vec2(0.5 ," + (1 / (2 * d)).toFixed(10) + ");", "", "varying vec2 v_texCoord;", "varying vec2 v_texCoordFilters;", "", "void main() {", "   // convert the rectangle from pixels to 0.0 to 1.0", "   vec2 zeroToOne = a_position / u_resolution;", "", "   // convert from 0->1 to 0->2", "   vec2 zeroToTwo = zeroToOne * 2.0;", "", "   // convert from 0->2 to -1->+1 (clipspace)", "   vec2 clipSpace = zeroToTwo - 1.0;", "   ", "   // transform coordinates to regular coordinates", "   gl_Position = vec4(clipSpace * vec2(1.0, 1.0), 0, 1);", " ", "   // pass the texCoord to the fragment shader", "   v_texCoord = a_texCoord;", "   ", "   // set the filtertexture coordinate based on number filter to use", "   v_texCoordFilters = u_midpoint + vec2(0.0, u_filterHeight * floor(a_texCoord[1]/u_patchHeight));", "}"].join("\n"), "lbp" in et && (k = ["precision mediump float;", "", "uniform vec2 u_onePixelPatches;", "", "// our patches", "uniform sampler2D u_patches;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main() {", "  vec4 topLeft = texture2D(u_patches, v_texCoord + vec2(-" + ht[0].toFixed(5) + ", -" + ht[1].toFixed(5) + "));", "  vec4 topMid = texture2D(u_patches, v_texCoord + vec2(0.0, -" + ht[1].toFixed(5) + "));", "  vec4 topRight = texture2D(u_patches, v_texCoord + vec2(" + ht[0].toFixed(5) + ", -" + ht[1].toFixed(5) + "));", "  vec4 midLeft = texture2D(u_patches, v_texCoord + vec2(-" + ht[0].toFixed(5) + ", 0.0));", "  vec4 midMid = texture2D(u_patches, v_texCoord);", "  vec4 midRight = texture2D(u_patches, v_texCoord + vec2(" + ht[0].toFixed(5) + ", 0.0));", "  vec4 bottomLeft = texture2D(u_patches, v_texCoord + vec2(-" + ht[0].toFixed(5) + ", " + ht[1].toFixed(5) + "));", "  vec4 bottomMid = texture2D(u_patches, v_texCoord + vec2(0.0, " + ht[1].toFixed(5) + "));", "  vec4 bottomRight = texture2D(u_patches, v_texCoord + vec2(" + ht[0].toFixed(5) + ", " + ht[1].toFixed(5) + "));", "  vec4 lbp = step(midMid, midRight)*1.0 + step(midMid, topRight)*2.0 + step(midMid, topMid)*4.0;", "  lbp = lbp + step(midMid, topLeft)*8.0 + step(midMid, midLeft)*16.0 + step(midMid, bottomLeft)*32.0;", "  lbp = lbp + step(midMid, bottomMid)*64.0 + step(midMid, bottomRight)*128.0;", "  gl_FragColor = lbp;", "}"].join("\n")), "sobel" in et && (J = ["precision mediump float;", "", "uniform vec2 u_onePixelPatches;", "", "// our patches", "uniform sampler2D u_patches;", "", "// the texCoords passed in from the vertex shader.", "varying vec2 v_texCoord;", "", "void main() {", "  vec4 bottomLeft = texture2D(u_patches, v_texCoord + vec2(-" + ht[0].toFixed(5) + ", " + ht[1].toFixed(5) + "));", "  vec4 bottomRight = texture2D(u_patches, v_texCoord + vec2(" + ht[0].toFixed(5) + ", " + ht[1].toFixed(5) + "));", "  vec4 topLeft = texture2D(u_patches, v_texCoord + vec2(-" + ht[0].toFixed(5) + ", -" + ht[1].toFixed(5) + "));", "  vec4 topRight = texture2D(u_patches, v_texCoord + vec2(" + ht[0].toFixed(5) + ", -" + ht[1].toFixed(5) + "));", "  vec4 dx = (", "    bottomLeft +", "    (texture2D(u_patches, v_texCoord + vec2(-" + ht[0].toFixed(5) + ", 0.0))*vec4(2.0,2.0,2.0,2.0)) +", "    topLeft -", "    bottomRight -", "    (texture2D(u_patches, v_texCoord + vec2(" + ht[0].toFixed(5) + ", 0.0))*vec4(2.0,2.0,2.0,2.0)) -", "    topRight)/4.0;", "  vec4 dy = (", "    bottomLeft +", "    (texture2D(u_patches, v_texCoord + vec2(0.0, " + ht[1].toFixed(5) + "))*vec4(2.0,2.0,2.0,2.0)) +", "    bottomRight -", "    topLeft -", "    (texture2D(u_patches, v_texCoord + vec2(0.0, -" + ht[1].toFixed(5) + "))*vec4(2.0,2.0,2.0,2.0)) -", "    topRight)/4.0;", "  vec4 gradient = sqrt((dx*dx) + (dy*dy));", "  gl_FragColor = gradient;", "}"].join("\n")), e = document.createElement("canvas"), e.setAttribute("width", o - i + 1 + "px"), e.setAttribute("height", (n - r + 1) * a + "px"), e.setAttribute("id", "renderCanvas"), e.setAttribute("style", "display:none;"), document.body.appendChild(e), t = setupWebGL(e, {
                premultipliedAlpha: !1,
                preserveDrawingBuffer: !0,
                antialias: !1
            }), !t.getExtension("OES_texture_float")) return void alert("Your graphics card does not support floating point textures! :(");
        "raw" in et && (it(et.raw, t.TEXTURE0), j = !0), "sobel" in et && (it(et.sobel, t.TEXTURE4), Q = !0), "lbp" in et && (it(et.lbp, t.TEXTURE5), z = !0);
        for (var ct, ut = [], dt = (i - 1) / 2, Tt = 0; d > Tt; Tt++) ct = Tt * n, ut = ut.concat([dt, ct + dt, o - dt, ct + dt, dt, ct + n - dt]), ut = ut.concat([dt, ct + n - dt, o - dt, ct + dt, o - dt, ct + n - dt]);
        ut = new Float32Array(ut);
        for (var gt = [], Tt = 0; Tt < ut.length; Tt++) Tt % 2 == 0 ? gt[Tt] = ut[Tt] / s : gt[Tt] = ut[Tt] / l;
        if (gt = new Float32Array(gt), "lbp" in et || "sobel" in et) {
            for (var ct, ft = 1 - 2 / (n * d), pt = 1 - 2 / d + 2 / (n * d), vt = [], Tt = 0; d > Tt; Tt++) ct = Tt * (2 / d), vt = vt.concat([-1, ft - ct, 1, ft - ct, -1, pt - ct]), vt = vt.concat([-1, pt - ct, 1, ft - ct, 1, pt - ct]);
            vt = new Float32Array(vt), ft = 1 - 1 / (n * d), pt = 1 - 1 / d + 1 / (n * d);
            for (var mt = [], Tt = 0; d > Tt; Tt++) ct = Tt * (1 / d), mt = mt.concat([0, ft - ct, 1, ft - ct, 0, pt - ct]), mt = mt.concat([0, pt - ct, 1, ft - ct, 1, pt - ct]);
            mt = new Float32Array(mt)
        }
        M = new Float32Array(12 * a);
        for (var ct, St, Tt = 0; a > Tt; Tt++) ct = Tt * y, St = 12 * Tt, M[St] = 0, M[St + 1] = ct, M[St + 2] = b, M[St + 3] = ct, M[St + 4] = 0, M[St + 5] = ct + y, M[St + 6] = 0, M[St + 7] = ct + y, M[St + 8] = b, M[St + 9] = ct, M[St + 10] = b, M[St + 11] = ct + y;
        w = new Float32Array(12 * a);
        for (var At = (i - 1) / 2 / o, bt = (i - 1) / 2 / (n * E), yt = n / (n * E), Tt = 0; a > Tt; Tt++) ct = Math.floor(Tt / 4) * yt, St = 12 * Tt, w[St] = At, w[St + 1] = ct + bt, w[St + 2] = 1 - At, w[St + 3] = ct + bt, w[St + 4] = At, w[St + 5] = ct + yt - bt, w[St + 6] = At, w[St + 7] = ct + yt - bt, w[St + 8] = 1 - At, w[St + 9] = ct + bt, w[St + 10] = 1 - At, w[St + 11] = ct + yt - bt;
        G = new Float32Array(6 * a);
        for (var Pt, Tt = 0; a > Tt; Tt++) Pt = Tt % 4, St = 6 * Tt, G[St] = Pt, G[St + 1] = Pt, G[St + 2] = Pt, G[St + 3] = Pt, G[St + 4] = Pt, G[St + 5] = Pt;
        if ("sobel" in et) {
            var Mt = loadShader(t, Z, t.VERTEX_SHADER),
                wt = loadShader(t, J, t.FRAGMENT_SHADER);
            O = createProgram(t, [Mt, wt]), t.useProgram(O), W = t.getAttribLocation(O, "a_position"), X = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, X), t.bufferData(t.ARRAY_BUFFER, vt, t.STATIC_DRAW), t.enableVertexAttribArray(W), t.vertexAttribPointer(W, 2, t.FLOAT, !1, 0, 0), N = t.getAttribLocation(O, "a_texCoord"), U = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, U), t.bufferData(t.ARRAY_BUFFER, mt, t.STATIC_DRAW), t.enableVertexAttribArray(N), t.vertexAttribPointer(N, 2, t.FLOAT, !1, 0, 0), t.uniform1i(t.getUniformLocation(O, "u_patches"), 1)
        }
        if ("lbp" in et) {
            var Gt = loadShader(t, q, t.VERTEX_SHADER),
                Et = loadShader(t, k, t.FRAGMENT_SHADER);
            D = createProgram(t, [Gt, Et]), t.useProgram(D), L = t.getAttribLocation(D, "a_position"), _ = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, _), t.bufferData(t.ARRAY_BUFFER, vt, t.STATIC_DRAW), t.enableVertexAttribArray(L), t.vertexAttribPointer(L, 2, t.FLOAT, !1, 0, 0), N = t.getAttribLocation(D, "a_texCoord"), F = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, F), t.bufferData(t.ARRAY_BUFFER, mt, t.STATIC_DRAW), t.enableVertexAttribArray(H), t.vertexAttribPointer(H, 2, t.FLOAT, !1, 0, 0), t.uniform1i(t.getUniformLocation(D, "u_patches"), 1)
        }
        var Ct = loadShader(t, $, t.VERTEX_SHADER),
            xt = loadShader(t, tt, t.FRAGMENT_SHADER);
        c = createProgram(t, [Ct, xt]), t.useProgram(c);
        var Rt = t.getUniformLocation(c, "u_resolutiondraw");
        t.uniform2f(Rt, b, P);
        var It = t.getUniformLocation(c, "u_responses");
        t.uniform1i(It, 2);
        var Bt = loadShader(t, K, t.VERTEX_SHADER),
            Dt = loadShader(t, Y, t.FRAGMENT_SHADER);
        h = createProgram(t, [Bt, Dt]), t.useProgram(h);
        var Ht = t.getAttribLocation(h, "a_position");
        if (A = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, A), t.bufferData(t.ARRAY_BUFFER, ut, t.STATIC_DRAW), t.enableVertexAttribArray(Ht), t.vertexAttribPointer(Ht, 2, t.FLOAT, !1, 0, 0), S = t.getAttribLocation(h, "a_texCoord"), m = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, m), t.bufferData(t.ARRAY_BUFFER, gt, t.STATIC_DRAW), t.enableVertexAttribArray(S), t.vertexAttribPointer(S, 2, t.FLOAT, !1, 0, 0), "lbp" in et || "sobel" in et) {
            t.activeTexture(t.TEXTURE3);
            var Ft = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, Ft), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, o, n * d, 0, t.RGBA, t.FLOAT, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), V = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, V), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, Ft, 0)
        }
        t.activeTexture(t.TEXTURE2), v = t.createTexture(), t.bindTexture(t.TEXTURE_2D, v), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, o, n * d, 0, t.RGBA, t.FLOAT, null), u = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, u), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, v, 0), t.viewport(0, 0, o, n * d), T = t.createTexture(), g = t.createBuffer(), p = t.createBuffer(), f = t.createBuffer()
    }, this.getRawResponses = function(e) {
        et(e), t.useProgram(h), t.uniform1i(t.getUniformLocation(h, "u_patches"), 1), t.uniform1i(t.getUniformLocation(h, "u_filters"), 0);
        var i = t.getAttribLocation(h, "a_position");
        t.bindBuffer(t.ARRAY_BUFFER, A), t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0);
        var r = t.getAttribLocation(h, "a_texCoord");
        t.bindBuffer(t.ARRAY_BUFFER, m), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bindFramebuffer(t.FRAMEBUFFER, u), t.viewport(0, 0, o, n * d), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER), t.drawArrays(t.TRIANGLES, 0, 6 * E);
        var a = rt("raw");
        return a
    }, this.getSobelResponses = function(e) {
        if (Q) {
            et(e), t.useProgram(O);
            var i = t.getAttribLocation(O, "a_position");
            t.bindBuffer(t.ARRAY_BUFFER, X), t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0);
            var r = t.getAttribLocation(O, "a_texCoord");
            t.bindBuffer(t.ARRAY_BUFFER, U), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bindFramebuffer(t.FRAMEBUFFER, V), t.viewport(0, 0, o, n * d), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER), t.drawArrays(t.TRIANGLES, 0, 6 * E), t.useProgram(h), t.uniform1i(t.getUniformLocation(h, "u_filters"), 4), t.uniform1i(t.getUniformLocation(h, "u_patches"), 3);
            var a = t.getAttribLocation(h, "a_position");
            t.bindBuffer(t.ARRAY_BUFFER, A), t.enableVertexAttribArray(a), t.vertexAttribPointer(a, 2, t.FLOAT, !1, 0, 0);
            var s = t.getAttribLocation(h, "a_texCoord");
            t.bindBuffer(t.ARRAY_BUFFER, m), t.enableVertexAttribArray(s), t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0), t.bindFramebuffer(t.FRAMEBUFFER, u), t.viewport(0, 0, o, n * d), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER), t.drawArrays(t.TRIANGLES, 0, 6 * E);
            var l = rt("sobel");
            return l
        }
    }, this.getLBPResponses = function(e) {
        if (z) {
            et(e), t.useProgram(D);
            var i = t.getAttribLocation(D, "a_position");
            t.bindBuffer(t.ARRAY_BUFFER, _), t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0);
            var r = t.getAttribLocation(D, "a_texCoord");
            t.bindBuffer(t.ARRAY_BUFFER, F), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bindFramebuffer(t.FRAMEBUFFER, V), t.viewport(0, 0, o, n * d), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER), t.drawArrays(t.TRIANGLES, 0, 6 * E), t.useProgram(h), t.uniform1i(t.getUniformLocation(h, "u_filters"), 5), t.uniform1i(t.getUniformLocation(h, "u_patches"), 3);
            var a = t.getAttribLocation(h, "a_position");
            t.bindBuffer(t.ARRAY_BUFFER, A), t.enableVertexAttribArray(a), t.vertexAttribPointer(a, 2, t.FLOAT, !1, 0, 0);
            var s = t.getAttribLocation(h, "a_texCoord");
            t.bindBuffer(t.ARRAY_BUFFER, m), t.enableVertexAttribArray(s), t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0), t.bindFramebuffer(t.FRAMEBUFFER, u), t.viewport(0, 0, o, n * d), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER), t.drawArrays(t.TRIANGLES, 0, 6 * E);
            var l = rt("lbp");
            return l
        }
    };
    var et = function(e) {
            for (var i = 0, r = 0, s = 0, l = 0; E > l; l++)
                for (var h = 0; n > h; h++)
                    for (var c = 0; o > c; c++) r = 4 * l, s = h * o + c, i = 4 * (R * l + s), a > r ? I[i] = e[r][s] : I[i] = 0, a > r + 1 ? I[i + 1] = e[r + 1][s] : I[i + 1] = 0, a > r + 2 ? I[i + 2] = e[r + 2][s] : I[i + 2] = 0, a > r + 3 ? I[i + 3] = e[r + 3][s] : I[i + 3] = 0;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, T), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, C, x, 0, t.RGBA, t.FLOAT, I), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)
        },
        it = function(e, o) {
            for (var n = i * r, a = new Float32Array(n * d * 4), s = 0; d > s; s++)
                for (var l = 0; r > l; l++)
                    for (var h = 0; i > h; h++) 4 * s < e.length ? a[4 * (n * s + l * i + h)] = e[4 * s][l * i + h] : a[4 * (n * s + l * i + h)] = 0, 4 * s + 1 < e.length ? a[4 * (n * s + l * i + h) + 1] = e[4 * s + 1][l * i + h] : a[4 * (n * s + l * i + h) + 1] = 0, 4 * s + 2 < e.length ? a[4 * (n * s + l * i + h) + 2] = e[4 * s + 2][l * i + h] : a[4 * (n * s + l * i + h) + 2] = 0, 4 * s + 3 < e.length ? a[4 * (n * s + l * i + h) + 3] = e[4 * s + 3][l * i + h] : a[4 * (n * s + l * i + h) + 3] = 0;
            t.activeTexture(o);
            var c = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, c), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, i, r * d, 0, t.RGBA, t.FLOAT, a), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST)
        },
        rt = function(e) {
            t.useProgram(c), t.bindFramebuffer(t.FRAMEBUFFER, null), t.viewport(0, 0, b, P), t.clearColor(0, 0, 0, 1), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER), t.bindBuffer(t.ARRAY_BUFFER, g), t.bufferData(t.ARRAY_BUFFER, M, t.STATIC_DRAW);
            var i = t.getAttribLocation(c, "a_position_draw");
            t.enableVertexAttribArray(i), t.vertexAttribPointer(i, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, p), t.bufferData(t.ARRAY_BUFFER, w, t.STATIC_DRAW);
            var r = t.getAttribLocation(c, "a_texCoord_draw");
            t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0), t.bindBuffer(t.ARRAY_BUFFER, f), t.bufferData(t.ARRAY_BUFFER, G, t.STATIC_DRAW);
            var o = t.getAttribLocation(c, "a_patchChoice_draw");
            t.enableVertexAttribArray(o), t.vertexAttribPointer(o, 1, t.FLOAT, !1, 0, 0), t.drawArrays(t.TRIANGLES, 0, 6 * a);
            var n = at();
            n = st(n), n = nt(n, a), n = ot(n, B[e]);
            for (var s = n.length, l = 0; s > l; l++) n[l] = lt(n[l]);
            return n
        },
        ot = function(t, e) {
            for (var i, r = 0; r < t.length; r++) {
                i = Math.exp(e[r]);
                for (var o = 0; o < t[r].length; o++) t[r][o] = 1 / (1 + (1 - t[r][o]) / (t[r][o] * i))
            }
            return t
        },
        nt = function(t, e) {
            for (var i = [], r = t.length, o = r / e, n = [], a = 0; r > a; a++) a % o == 0 && (0 != a && i.push(n), n = []), n.push(t[a]);
            return i.push(n), i
        },
        at = function() {
            var i = new Uint8Array(4 * e.width * e.height);
            t.readPixels(0, 0, e.width, e.height, t.RGBA, t.UNSIGNED_BYTE, i);
            return i
        },
        st = function(t) {
            for (var e = [], i = t.length, r = 0; i > r; r += 4) e[r / 4 >> 0] = t[r] / 4294967296 + t[r + 1] / 16777216 + t[r + 2] / 65536 + t[r + 3] / 256;
            return e
        },
        lt = function(t) {
            for (var e = t.length, i = 0, r = 1, o = 0; e > o; o++) i = t[o] > i ? t[o] : i, r = t[o] < r ? t[o] : r;
            var n = i - r;
            if (0 == n) console.log("a patchresponse was monotone, causing normalization to fail. Leaving it unchanged."), t = t.map(function() {
                return 1
            });
            else
                for (var o = 0; e > o; o++) t[o] = (t[o] - r) / n;
            return t
        }
};
! function() {
    var t = function(t) {
            throw window.console && (window.console.error ? window.console.error(t) : window.console.log && window.console.log(t)), t
        },
        e = function() {
            return window != window.top
        },
        i = function(t, e) {
            if (!window.WebGLRenderingContext) return null;
            var i = r(t, e);
            return i ? i : null
        },
        r = function(t, e) {
            for (var i = ["webgl", "experimental-webgl"], r = null, o = 0; o < i.length; ++o) {
                try {
                    r = t.getContext(i[o], e)
                } catch (n) {}
                if (r) break
            }
            return r
        },
        o = function() {
            e() && (document.body.className = "iframe")
        },
        n = function(t) {
            e() && (o(), t.width = t.clientWidth, t.height = t.clientHeight);
            var r = i(t);
            return r
        },
        a = function(e, i, r, o) {
            var n = o || t,
                a = e.createShader(r);
            e.shaderSource(a, i), e.compileShader(a);
            var s = e.getShaderParameter(a, e.COMPILE_STATUS);
            if (!s) {
                var l = e.getShaderInfoLog(a);
                return n("*** Error compiling shader '" + a + "':" + l), e.deleteShader(a), null
            }
            return a
        },
        s = function(e, i, r, o) {
            for (var n = e.createProgram(), a = 0; a < i.length; ++a) e.attachShader(n, i[a]);
            if (r)
                for (var a = 0; a < r.length; ++a) e.bindAttribLocation(n, o ? o[a] : a, r[a]);
            e.linkProgram(n);
            var s = e.getProgramParameter(n, e.LINK_STATUS);
            if (!s) {
                var l = e.getProgramInfoLog(n);
                return t("Error in program linking:" + l), e.deleteProgram(n), null
            }
            return n
        },
        l = function(t, e, i, r) {
            var o, n = "",
                s = document.getElementById(e);
            if (!s) throw "*** Error: unknown script element" + e;
            if (n = s.text, !i)
                if ("x-shader/x-vertex" == s.type) o = t.VERTEX_SHADER;
                else if ("x-shader/x-fragment" == s.type) o = t.FRAGMENT_SHADER;
            else if (o != t.VERTEX_SHADER && o != t.FRAGMENT_SHADER) throw "*** Error: unknown shader type";
            return a(t, n, i ? i : o, r)
        };
    window.setupWebGL = i, window.createProgram = s, window.createShaderFromScriptElement = l, window.getWebGLContext = n, window.updateCSSIfInIFrame = o, window.loadShader = a
}();
var mosseFilterResponses = function() {
    var t = [],
        e = [],
        i = 0;
    this.init = function(e, r, o, n) {
        for (var a = 0; r > a; a++) {
            var s = {};
            s.width = o, s.height = n;
            for (var l = o * n, h = new Float64Array(l), c = new Float64Array(l), u = 0; l > u; u++) h[u] = e[a][0][u], c[u] = e[a][1][u];
            s.real = h, s.imag = c, t[a] = new mosseFilter, t[a].load(s)
        }
        i = r
    }, this.getResponses = function(o) {
        for (var n = 0; i > n; n++) e[n] = t[n].getResponse(o[n]), e[n] = r(e[n]);
        return e
    };
    var r = function(t) {
        for (var e = t.length, i = 0, r = 1, o = 0; e > o; o++) i = t[o] > i ? t[o] : i, r = t[o] < r ? t[o] : r;
        var n = i - r;
        if (0 == n) console.log("a patchresponse was monotone, causing normalization to fail. Leaving it unchanged."), t = t.map(function() {
            return 1
        });
        else
            for (var o = 0; e > o; o++) t[o] = (t[o] - r) / n;
        return t
    }
};
! function(t, e, i) {
    t.version = .48, t.debug = !0, t.isDemo = !0, t.glassesModelServerPathBaseOnline = "/preview/model/", t.glassesModelServerPathBaseLocal = "http://localhost/preview/model/", t.maxImgSize = 480, t.maxDetectHeight = 275, t.maxRotationDegree = 45, t.maxRotationDegreeWithFace = 1, t.maxRotationDegreeWithJaw = 1
}(window.vtryConfig = window.vtryConfig || {}, jQuery),
function(t, e, i) {
    t.debug = !1
}(window.vtryConfig = window.vtryConfig || {}, jQuery),
function(t, e, i) {
    var r = new Date,
        o = "",
        n = null;
    e("#divVersion").click(function() {
        vtryConfig.showLogView()
    }), t.showLogView = function() {
        1 == vtryConfig.debug && (n = e("<div id='divLog' style='position:fixed; top:0px; left:0px; color: #fff;padding: 4px;overflow: auto'></div>"), n.html(o), n.width(e(window).width()), n.height(e(window).height()), e("body").empty(), e("body").append(n))
    }, t.log = function(t) {
        if (1 == vtryConfig.debug) {
            var e = a() + " " + t;
            console.log(e), o += e + "<br>", null != n && n.html(o)
        }
    };
    var a = function() {
        var t = new Date,
            e = "";
        e += t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + Math.floor(t.getMilliseconds() / 100);
        var i = t.getTime() - r.getTime(),
            o = Math.floor(i / 1e3),
            n = Math.floor((i - 1e3 * o) / 100),
            a = o + "." + n;
        return e += " |" + a + "|", r = t, e
    }
}(window.vtryLog = window.vtryLog || {}, jQuery);
var faceDeformer = function() {
    var t, e, i, r, o, n, a, s, l, h, c, u, d, T, g, f = !0,
        p = !1;
    this.init = function(e) {
        t = null;
        try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl")
        } catch (i) {}
        return t || (vtryLog.log("Unable to initialize WebGL. Your browser may not support it."), t = null), t
    }, this.load = function(p, v, m, S) {
        d = m, e = S ? S : d.path.vertices, i = e.length, r = 0, o = p.width, n = 0, a = p.height;
        for (var A = 0; A < v.length; A++) v[A][0] > r && (r = v[A][0]), v[A][0] < o && (o = v[A][0]), v[A][1] > n && (n = v[A][1]), v[A][1] < a && (a = v[A][1]);
        if (o = Math.floor(o), r = Math.ceil(r), a = Math.floor(a), n = Math.ceil(n), s = r - o, l = n - a, "VIDEO" == p.tagName || "IMG" == p.tagName) {
            var b = document.createElement("canvas");
            b.width = p.width, b.height = p.height;
            var y = b.getContext("2d");
            y.drawImage(p, 0, 0, p.width, p.height)
        } else if ("CANVAS" == p.tagName) var y = p.getContext("2d");
        for (var P = y.getImageData(o, a, s, l), M = [], A = 0; A < v.length; A++) M[A] = [], M[A][0] = v[A][0] - o, M[A][1] = v[A][1] - a;
        for (var w = [], A = 0; A < e.length; A++) w.push(M[e[A][0]][0] / s), w.push(M[e[A][0]][1] / l), w.push(M[e[A][1]][0] / s), w.push(M[e[A][1]][1] / l), w.push(M[e[A][2]][0] / s), w.push(M[e[A][2]][1] / l);
        if (f) {
            var G = ["attribute vec2 a_position;", "", "uniform vec2 u_resolution;", "", "void main() {", "  vec2 zeroToOne = a_position / u_resolution;", "  vec2 zeroToTwo = zeroToOne * 2.0;", "  vec2 clipSpace = zeroToTwo - 1.0;", "  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);", "}"].join("\n"),
                E = ["void main() {", "  gl_FragColor = vec4(0.2, 0.2, 0.2, 1.0);", "}"].join("\n"),
                C = loadShader(t, G, t.VERTEX_SHADER),
                x = loadShader(t, E, t.FRAGMENT_SHADER);
            try {
                g = createProgram(t, [C, x])
            } catch (R) {
                alert("There was a problem setting up the webGL programs. Maybe you should try it in another browser. :(")
            }
            c = t.createBuffer();
            var I = ["attribute vec2 a_texCoord;", "attribute vec2 a_position;", "", "varying vec2 v_texCoord;", "", "uniform vec2 u_resolution;", "", "void main() {", "  vec2 zeroToOne = a_position / u_resolution;", "  vec2 zeroToTwo = zeroToOne * 2.0;", "  vec2 clipSpace = zeroToTwo - 1.0;", "  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);", "  ", "  v_texCoord = a_texCoord;", "}"].join("\n"),
                B = ["precision mediump float;", "", "uniform sampler2D u_image;", "", "varying vec2 v_texCoord;", "", "void main() {", "  gl_FragColor = texture2D(u_image, v_texCoord);", "}"].join("\n"),
                D = loadShader(t, I, t.VERTEX_SHADER),
                H = loadShader(t, B, t.FRAGMENT_SHADER);
            T = createProgram(t, [D, H]), h = t.createBuffer(), f = !1
        }
        t.useProgram(g);
        var F = t.getUniformLocation(g, "u_resolution");
        t.uniform2f(F, t.drawingBufferWidth, t.drawingBufferHeight), t.useProgram(T), u = t.getAttribLocation(T, "a_texCoord"), t.enableVertexAttribArray(u), t.bindBuffer(t.ARRAY_BUFFER, h), t.bufferData(t.ARRAY_BUFFER, new Float32Array(w), t.STATIC_DRAW), t.vertexAttribPointer(u, 2, t.FLOAT, !1, 0, 0);
        var L = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, L), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, P), F = t.getUniformLocation(T, "u_resolution"), t.uniform2f(F, t.drawingBufferWidth, t.drawingBufferHeight)
    }, this.draw = function(r) {
        p && (t.useProgram(T), t.enableVertexAttribArray(u), t.bindBuffer(t.ARRAY_BUFFER, h), t.vertexAttribPointer(u, 2, t.FLOAT, !1, 0, 0), p = !1);
        for (var o = [], n = 0; n < e.length; n++) o.push(r[e[n][0]][0]), o.push(r[e[n][0]][1]), o.push(r[e[n][1]][0]), o.push(r[e[n][1]][1]), o.push(r[e[n][2]][0]), o.push(r[e[n][2]][1]);
        var a = t.getAttribLocation(T, "a_position"),
            s = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, s), t.enableVertexAttribArray(a), t.vertexAttribPointer(a, 2, t.FLOAT, !1, 0, 0), t.bufferData(t.ARRAY_BUFFER, new Float32Array(o), t.STATIC_DRAW), t.drawArrays(t.TRIANGLES, 0, 3 * i)
    }, this.drawGrid = function(r) {
        p || (t.useProgram(g), p = !0);
        for (var o = [], n = 0; n < e.length; n++) o.push(r[e[n][0]][0]), o.push(r[e[n][0]][1]), o.push(r[e[n][1]][0]), o.push(r[e[n][1]][1]), o.push(r[e[n][1]][0]), o.push(r[e[n][1]][1]), o.push(r[e[n][2]][0]), o.push(r[e[n][2]][1]), o.push(r[e[n][2]][0]), o.push(r[e[n][2]][1]), o.push(r[e[n][0]][0]), o.push(r[e[n][0]][1]);
        var a = t.getAttribLocation(g, "a_position");
        t.bindBuffer(t.ARRAY_BUFFER, c), t.enableVertexAttribArray(a), t.vertexAttribPointer(a, 2, t.FLOAT, !1, 0, 0), t.bufferData(t.ARRAY_BUFFER, new Float32Array(o), t.STATIC_DRAW), t.drawArrays(t.LINES, 0, 6 * i)
    }, this.clear = function() {
        t.clear(t.COLOR_BUFFER_BIT)
    }, this.calculatePositions = function(t, e) {
        for (var i, r, o, n, a = t.length, s = [], l = 0; l < d.patchModel.numPatches; l++) {
            i = d.shapeModel.meanShape[l][0], r = d.shapeModel.meanShape[l][1];
            for (var h = 0; a - 4 > h; h++) i += d.shapeModel.eigenVectors[2 * l][h] * t[h + 4], r += d.shapeModel.eigenVectors[2 * l + 1][h] * t[h + 4];
            e && (o = t[0] * i - t[1] * r + t[2], n = t[0] * r + t[1] * i + t[3], i += o, r += n), s[l] = [i, r]
        }
        return s
    }
};
! function(t, e, i) {
    t.LOAD_IMG = "LOAD_IMG", t.DETECT = "DETECT", t.CALIBRATE = "CALIBRATE", t.TRY_ON = "TRY_ON", t.CAM = "CAM", t.curState = t.LOAD_IMG, t.setState = function(i) {
        switch (vtryLog.log("entering state: " + i), t.curState = i, r(), i) {
            case t.LOAD_IMG:
                e("#viewLoadSource").show();
                break;
            case t.DETECT:
                e("#viewTryOn").show();
                break;
            case t.CALIBRATE:
                e("#viewCalibrate").show();
                break;
            case t.TRY_ON:
                e("#viewTryOn").show();
                break;
            case t.CAM:
                e("#viewCam").show();
                break;
            default:
                console.log("unknow view state: " + i)
        }
    };
    var r = function() {
        e("#viewLoadSource").hide(), e("#viewDetect").hide(), e("#viewCalibrate").hide(), e("#viewTryOn").hide(), e("#viewCam").hide()
    }
}(window.vtryViewState = window.vtryViewState || {}, jQuery);
var vtryClmFaceModel = {};
vtryClmFaceModel.path = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18],
        [19, 20, 21, 22],
        [23, 63, 24, 64, 25, 65, 26, 66, 23],
        [28, 67, 29, 68, 30, 69, 31, 70, 28],
        [34, 35, 36, 42, 37, 43, 38, 39, 40],
        [33, 41, 62],
        [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 44, 56, 57, 58, 50, 59, 60, 61, 44], 27, 32
    ], vtryClmFaceModel.z = [-.328, -.328, -.328, -.26, -.16, -.05, -.05, .063, -.05, -.05, -.16, -.26, -.328, -.328, -.328, -.111, .03, .03, .107, -.111, .03, .03, .107, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, .107, .037, .037, .037, .037, .037, .037, .037, .1, .037, .037, -0, .063, .142, .142, .142, .063, -0, -.024, -.024, .107, -.024, -.024, -.024, .107, -.024, .063, .142, .063, .21, -0, -0, -0, -0, -0, -0, -0, -0, -.328, -.328, -.371, -.371, -.371, -.328, -.328], vtryClmFaceModel.triangles = [
        [0, 1, 23, 0],
        [1, 23, 66, 1],
        [1, 2, 66, 1],
        [2, 66, 26, 2],
        [2, 26, 35, 2],
        [2, 35, 36, 2],
        [2, 36, 3, 2],
        [36, 44, 45, 36],
        [3, 4, 44, 3],
        [3, 44, 36, 3],
        [4, 44, 55, 4],
        [4, 5, 55, 4],
        [5, 55, 54, 5],
        [5, 6, 54, 5],
        [6, 53, 54, 6],
        [6, 7, 53, 6],
        [7, 8, 53, 7],
        [8, 52, 53, 8],
        [8, 9, 52, 8],
        [9, 51, 52, 9],
        [9, 10, 51, 9],
        [10, 50, 51, 10],
        [10, 11, 50, 10],
        [11, 38, 50, 11],
        [11, 12, 38, 11],
        [12, 38, 39, 12],
        [12, 31, 39, 12],
        [12, 31, 70, 12],
        [12, 13, 70, 12],
        [13, 28, 70, 13],
        [13, 14, 28, 13],
        [14, 15, 28, 14],
        [15, 28, 67, 15],
        [15, 16, 67, 15],
        [16, 67, 29, 16],
        [16, 17, 29, 16],
        [17, 68, 29, 17],
        [17, 18, 68, 17],
        [18, 68, 30, 18],
        [18, 30, 33, 18],
        [30, 40, 69, 30],
        [39, 40, 69, 39],
        [39, 31, 69, 39],
        [26, 65, 35, 26],
        [34, 35, 65, 34],
        [25, 34, 65, 25],
        [22, 25, 33, 22],
        [22, 25, 64, 22],
        [21, 22, 64, 21],
        [21, 24, 64, 21],
        [20, 21, 24, 20],
        [20, 24, 63, 20],
        [19, 20, 63, 19],
        [19, 23, 63, 19],
        [19, 23, 0, 19],
        [36, 45, 46, 36],
        [36, 42, 46, 36],
        [42, 37, 46, 42],
        [37, 46, 47, 37],
        [37, 47, 48, 37],
        [38, 48, 49, 38],
        [37, 43, 48, 37],
        [43, 38, 48, 43],
        [38, 49, 50, 38],
        [22, 18, 33, 22],
        [40, 41, 30, 40],
        [25, 33, 41, 25],
        [33, 41, 30, 33],
        [25, 34, 41, 25],
        [41, 40, 62, 41],
        [34, 41, 62, 34],
        [34, 35, 62, 34],
        [35, 36, 62, 35],
        [36, 42, 62, 36],
        [42, 37, 62, 42],
        [37, 43, 62, 37],
        [43, 38, 62, 43],
        [38, 39, 62, 38],
        [39, 40, 62, 39],
        [44, 45, 61, 44],
        [45, 46, 61, 45],
        [46, 47, 61, 46],
        [47, 61, 60, 47],
        [47, 59, 60, 47],
        [47, 48, 59, 47],
        [48, 49, 59, 48],
        [49, 50, 59, 49],
        [50, 51, 58, 50],
        [51, 52, 58, 51],
        [52, 57, 58, 52],
        [52, 53, 57, 52],
        [53, 54, 57, 53],
        [54, 56, 57, 54],
        [54, 55, 56, 54],
        [44, 55, 56, 44],
        [23, 63, 27, 23],
        [63, 24, 27, 63],
        [24, 64, 27, 24],
        [64, 25, 27, 64],
        [25, 65, 27, 25],
        [65, 26, 27, 65],
        [26, 66, 27, 26],
        [66, 23, 27, 66],
        [28, 67, 32, 28],
        [67, 29, 32, 67],
        [29, 68, 32, 29],
        [68, 30, 32, 68],
        [30, 69, 32, 30],
        [69, 31, 32, 69],
        [31, 70, 32, 31],
        [28, 32, 70, 28],
        [0, 19, 71, 0],
        [71, 19, 72, 71],
        [72, 19, 20, 72],
        [72, 20, 73, 72],
        [73, 20, 21, 73],
        [73, 21, 74, 73],
        [74, 21, 22, 74],
        [74, 22, 18, 74],
        [74, 18, 75, 74],
        [75, 18, 17, 75],
        [75, 17, 16, 75],
        [75, 16, 76, 75],
        [76, 16, 15, 76],
        [76, 15, 77, 76],
        [77, 15, 14, 77]
    ],
    function(t, e, i) {
        t.defaultFaceShapeVertices = [
            [54.52062942285167, 178.17807061355904],
            [51.47382359997286, 208.36047734409874],
            [55.48502794634008, 238.170562423084],
            [62.71319589444825, 267.61432939411304],
            [75.40160452940304, 292.4108992129406],
            [92.56057145616758, 312.2734033639846],
            [112.4472236447321, 327.51708752401976],
            [136.3243339266244, 332.7541613040179],
            [160.47153232512545, 328.3846017359359],
            [181.77796483161137, 314.8515025071248],
            [200.68787443905066, 296.393158021648],
            [215.7058384962412, 272.3375748378893],
            [224.86443578418692, 241.83092701288965],
            [229.76621396441567, 211.21013019668473],
            [227.53392969503625, 179.88167552626015],
            [208.03090925793154, 162.48214342036553],
            [194.40456237141657, 156.04187140097972],
            [174.31611329068545, 157.32157757527705],
            [158.36337043915785, 161.42308981465618],
            [72.40346876539391, 161.79407851036382],
            [84.7842375350919, 156.03843188396743],
            [104.1435182507736, 157.4559105460861],
            [119.84974671311065, 161.48363056329785],
            [82.46593212927385, 182.82213386985765],
            [98.05432009962408, 175.1484240862406],
            [115.40529465557759, 183.71692040653633],
            [98.01467191128653, 188.16446990236594],
            [98.57478891601765, 181.2851177111026],
            [195.50865455903624, 182.97421309081338],
            [179.1864552249716, 175.18393882761995],
            [162.197013422831, 183.79135388555588],
            [179.44088698514201, 188.339902274238],
            [178.6761530419853, 181.3832838129447],
            [138.78826880957328, 177.6961223526533],
            [119.95766005864824, 218.13713700154292],
            [112.96079127461746, 231.45143202035493],
            [119.78506876129839, 240.8184997684214],
            [138.25783032598395, 244.06822323547112],
            [156.8337973784856, 241.0159514489615],
            [163.9783364464061, 231.85443177161196],
            [156.83692622987354, 218.24910137355755],
            [138.3856508520755, 204.21407079063468],
            [125.02192168278671, 235.63983457775205],
            [151.2616953516865, 235.52378760118464],
            [106.40915472626426, 272.8185263451524],
            [117.01520120400036, 266.00708427372444],
            [128.62493287901037, 262.8505536168354],
            [137.08951437577406, 264.6606305036185],
            [145.70668846373877, 262.8196034570316],
            [157.21840310547145, 266.1280566483089],
            [168.18557092884544, 272.92888579934396],
            [159.48730185225662, 280.0877802062242],
            [149.3908675069168, 284.6607309012186],
            [136.4896828700159, 286.16740371200837],
            [123.69626866835961, 284.68076184094804],
            [113.99123791533708, 279.9547305308431],
            [121.8309240778105, 273.2993654137704],
            [136.6915957096227, 274.6244276581336],
            [151.76880596117707, 273.2350646777182],
            [152.17982173359738, 271.2677774826553],
            [137.01875097149116, 271.6415622701427],
            [122.09894265089862, 271.2247276068879],
            [137.98125283433166, 229.49014684691048],
            [88.78472075202116, 177.3012606328843],
            [108.16559881427655, 177.316334807755],
            [107.13970701044853, 186.5864237603281],
            [89.13652584943631, 186.48232449206571],
            [188.83090589364986, 177.38810752457687],
            [169.13697148436228, 177.4596928692631],
            [170.2286946465473, 186.65701243991444],
            [188.43558573202745, 186.72561217979617],
            [53.59171917145696, 133.83672407372265],
            [72.5171176904166, 93.25107597641241],
            [109.19981763323514, 67.56557295456598],
            [138.78826880957328, 62.34833069480244],
            [168.37671998591145, 67.56557295456598],
            [205.05941992873, 93.25107597641242],
            [223.9848184476896, 133.83672407372268]
        ];
    }(window.vtryProfile = window.vtryProfile || {}, jQuery),
    function(t, e, i) {
        t.glassesModelClass = function() {
            this.frontW = 512, this.frontH = 256, this.legWLeft = 241, this.legHLeft = 67, this.legYLeft = 54, this.legWRight = 241, this.legHRight = 67, this.legYRight = 54, this.frontMM = 130, thi.thumbImgUrl, this.frontImgUrl, this.leftLegImgUrl, this.rightLegImgUrl
        }
    }(window.vtryGlassesModel = window.vtryGlassesModel || {}, jQuery),
    function(t, e, i) {
        t.faceModelClass = function() {
            "undefined" == typeof this.id ? this.id = 0 : this.id++;
            var e = this;
            t.headDepth = 250, this.isSystemModel = !0, this.systemModelId = "";
            var i, r;
            this.setVertices = function(t) {
                i = t, X(), O(), N(), V(), n = null
            }, this.getDetectedVertices = function() {
                return i
            }, this.faceShapeTriangles = vtryClmFaceModel.triangles, this.xFaceCenter, this.zMin, this.zMax;
            var o;
            this.getFaceImgUrl = function() {
                return o
            }, this.setFaceImgUrl = function(t, e, i) {
                o = t, this.sourceImgWidth = e, this.sourceImgHeight = i
            }, this.sourceImgWidth, this.sourceImgHeight, this.pd = 62, this.xCrop = 0, this.yCrop = 0, this.xDest = 0, this.yDest = 0, this.scale = 1, this.setCropInfo = function(t) {
                this.xCrop = t.xCrop, this.yCrop = t.yCrop, this.xDest = t.xDest, this.yDest = t.yDest, this.scale = t.scale, r = new Array(i.length);
                for (var e = 0; e < i.length; e++) r[e] = [(i[e][0] - this.xCrop) * this.scale + this.xDest, (i[e][1] - this.yCrop) * this.scale + this.yDest];
                n = null
            };
            var n = null;
            this.getCurVertices = function() {
                if (null == n) {
                    for (var t = [], e = 0; e < i.length; e++) {
                        var r = [i[e][0], i[e][1]];
                        r[0] = (r[0] - this.xCrop) * this.scale + this.xDest, r[1] = (r[1] - this.yCrop) * this.scale + this.yDest, t.push(r)
                    }
                    n = t
                }
                return n
            };
            var a = 27,
                s = 32,
                l = 23,
                h = 63,
                c = 24,
                u = 64,
                d = 25,
                T = 66,
                g = 26,
                f = 65,
                p = 68,
                v = 29,
                m = 67,
                S = 69,
                A = 31,
                b = 70,
                y = 41,
                P = 61,
                M = 60,
                w = 59,
                G = 56,
                E = 57,
                C = 58,
                x = 0,
                R = 14;
            t.leftEyeIndex = a, t.rightEyeIndex = s, t.leftEdge = x, t.rightEdge = R, this.glassRefPointLeftFace, this.glassRefPointLeftEye, this.glassRefPointRightEye, this.glassRefPointRightFace;
            var I = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 77, 76, 75, 74, 73, 72, 71],
                B = [],
                D = 78,
                H = function() {
                    if (!(B.length > 0)) {
                        for (var t = D; t < D + I.length; t++) B.push(t);
                        var i = e.faceShapeTriangles,
                            r = [B[0], I[I.length - 1], I[0], B[0]],
                            o = [B[0], I[I.length - 1], B[I.length - 1], B[0]];
                        i.push(r), i.push(o);
                        for (var t = 1; t < B.length; t++) {
                            var n = B[t - 1],
                                a = B[t],
                                s = I[t - 1],
                                l = I[t];
                            i.push([a, n, s, a]), i.push([a, s, l, a])
                        }
                        F()
                    }
                },
                F = function() {
                    var t = e.faceShapeTriangles;
                    e.faceShapeTriangles = [];
                    for (var i = 0; i < t.length; i++) L(t[i][0], t[i][1], t[i][2]) || e.faceShapeTriangles.push(t[i])
                },
                L = function(t, i, r) {
                    var o, n, a, s;
                    for (s = e.faceShapeTriangles, n = 0, a = s.length; a > n; n++)
                        if (o = s[n], -1 !== o.indexOf(t) && -1 !== o.indexOf(i) && -1 !== o.indexOf(r)) return !0;
                    return !1
                },
                _ = function() {
                    i = i.slice(0, 78);
                    for (var t = 2, r = 1.2, o = i[y], n = o[0], a = o[1], s = 0; s < I.length; s++) {
                        var l = i[I[s]],
                            h = l[0],
                            c = l[1],
                            u = t;
                        I[s] <= 13 && I[s] > 1 && (u = r);
                        var d = n + (h - n) * u,
                            T = a + (c - a) * u;
                        d = 0 > d ? 0 : d, d = d > e.sourceImgWidth ? e.sourceImgWidth : d, T = 0 > T ? 0 : T, T = T > e.sourceImgHeight ? e.sourceImgHeight : T;
                        var g = [d, T];
                        i.push(g)
                    }
                },
                O = function() {
                    H(), _()
                },
                V = function() {
                    for (var r = 9999, o = 0, n = 9999, a = -9999, s = 0; s < i.length; s++) {
                        var l = i[s][0];
                        r > l && (r = l), l > o && (o = l);
                        var h = vtryClmFaceModel.z[s];
                        n > h && (n = h), h > a && (a = h)
                    }
                    e.zMin = n, e.zMax = a, e.xFaceCenter = (r + o) / 2, t.headDepth = (o - r) / 180 * 250, e.glassRefPointLeftFace = i[t.leftEdge], e.glassRefPointLeftEye = i[t.leftEyeIndex], e.glassRefPointRightEye = i[t.rightEyeIndex], e.glassRefPointRightFace = i[t.rightEdge]
                };
            this.getFaceSizeLocation = function() {
                var t = {};
                return t.center = i[62], t.left = i[0], t.right = i[14], t.top = i[74], t.bottom = i[7], t.leftEye = i[a], t.rightEye = i[s], t
            };
            var N = function() {
                    var t = i[P][0],
                        e = i[M][0],
                        r = i[w][0],
                        o = i[G][0],
                        n = i[E][0],
                        a = i[C][0];
                    i[P][0] = (t + o) / 2, i[G][0] = (t + o) / 2, i[M][0] = (e + n) / 2, i[E][0] = (e + n) / 2, i[w][0] = (r + a) / 2, i[C][0] = (r + a) / 2;
                    var s = i[P][1],
                        l = i[M][1],
                        h = i[w][1],
                        c = i[G][1],
                        u = i[E][1],
                        d = i[C][1];
                    i[P][1] = (s + c) / 2, i[G][1] = (s + c) / 2, i[M][1] = (l + u) / 2, i[E][1] = (l + u) / 2, i[w][1] = (h + d) / 2, i[C][1] = (h + d) / 2
                },
                U = function(t) {
                    var e = t;
                    e[h][1] = e[T][1], e[c][1] = e[g][1], e[a][1] = e[g][1], e[u][1] = e[f][1], e[p][1] = e[S][1], e[v][1] = e[A][1], e[s][1] = e[A][1], e[m][1] = e[b][1]
                },
                W = function(t, e, i) {
                    for (var r = t, o = r[d][0] - r[l][0], n = r[c][1] - r[g][1], y = o * e * .1, P = n * i * .1, M = [a, h, c, u, T, g, f, s, p, v, m, S, A, b], w = 0; w < M.length; w++) {
                        var G = M[w],
                            E = r[G];
                        E[0] += y, E[1] += P
                    }
                },
                X = function() {
                    for (var t = i, e = t.slice(0, 71), r = t[33][0], o = t[33][1], n = t[0][0], a = t[0][1], s = t[14][0], l = t[14][1], h = Math.sqrt((n - s) * (n - s) + (a - l) * (a - l)), c = h / 2, u = -c / 3, d = [-170, -140, -110, -90, -70, -40, -10], T = 0; T < d.length; T++) {
                        var g = d[T] / 180 * Math.PI,
                            f = c * Math.cos(g) + r,
                            p = c * Math.sin(g) + o + u;
                        e.push([f, p])
                    }
                    i = e
                };
            this.updateFacePoints = function(i, o, l, h, c, u) {
                for (var d = new Array(r.length), T = h / 180 * Math.PI, g = c / 180 * Math.PI, f = u / 180 * Math.PI, p = 0; p < r.length; p++) d[p] = r[p].slice();
                var v = d[a].slice(),
                    m = d[s].slice();
                W(d, o, l), i || U(d), k(d, T, g, f);
                var S = Math.sin(f),
                    A = Math.cos(f),
                    b = J(s),
                    y = K(v[0], v[1], b, T, g, f, S, A),
                    P = K(m[0], m[1], b, g, g, f, S, A);
                return e.glassRefPointLeftEye = [y[0], y[1]], e.glassRefPointRightEye = [P[0], P[1]], e.glassRefPointLeftFace = d[t.leftEdge].slice(), e.glassRefPointRightFace = d[t.rightEdge].slice(), n = d, d
            };
            var k = function(t, e, i, r) {
                    for (var o = t, n = Math.sin(r), a = Math.cos(r), s = 0; D > s; s++) {
                        var l = o[s][0],
                            h = o[s][1],
                            c = J(s),
                            u = K(l, h, c, 0, i, r, n, a),
                            d = (u[0], [u[0], u[1]]);
                        o[s] = d
                    }
                },
                J = function(i) {
                    var r = (vtryClmFaceModel.z[i] - e.zMin) * t.headDepth;
                    return r *= e.scale
                },
                K = function(t, e, i, r, o, n, a, s) {
                    var l = Y(t, e, i, n, a, s),
                        h = z(l[0], l[1], l[2], o);
                    return h
                },
                Y = function(t, r, o, n, a, s) {
                    var l = i[E],
                        h = (l[0] - e.xCrop) * e.scale + e.xDest,
                        c = (l[1] - e.yCrop) * e.scale + e.yDest,
                        u = a,
                        d = s,
                        T = t - h,
                        g = r - c,
                        f = T * d + g * u,
                        p = -T * u + g * d;
                    return [f + h, p + c, o]
                },
                z = function(t, i, r, o) {
                    var n = t - e.xFaceCenter,
                        a = Math.sqrt(n * n + r * r),
                        s = Math.acos(n / a),
                        l = s - o,
                        h = a * Math.cos(l),
                        c = h + e.xFaceCenter,
                        u = [c, i, r];
                    return u
                }
        }
    }(window.vtryFaceModel = window.vtryFaceModel || {}, jQuery),
    function(t, e, i) {
        var r = 27,
            o = 32,
            n = 23,
            a = 63,
            s = 24,
            l = 64,
            h = 25,
            c = 66,
            u = 26,
            d = 65,
            T = 30,
            g = 68,
            f = 29,
            p = 67,
            v = 28,
            m = 69,
            S = 31,
            A = 70,
            b = 33,
            y = 41,
            P = 62,
            M = 74,
            w = 7,
            G = 73,
            E = 72,
            C = 71,
            x = 0,
            R = 1,
            I = 2,
            B = 3,
            D = 4,
            H = 5,
            F = 6,
            L = 75,
            _ = 76,
            O = 77,
            V = 14,
            N = 13,
            U = 12,
            W = 11,
            X = 10,
            k = 9,
            J = 8,
            K = [],
            Y = [],
            z = -1;
        t.create = function(t, e, i) {
            K = [], Y = [];
            for (var n = 0; n < vtryProfile.defaultFaceShapeVertices.length; n++) {
                var a = vtryProfile.defaultFaceShapeVertices[n].slice();
                Y.push(a), K.push(a.slice())
            }
            z = K[o][0] - K[r][0];
            var s = [e[0] + e[2] / 2, e[1] + e[3] / 2],
                l = [i[0] + i[2] / 2, i[1] + i[3] / 2],
                h = t[3];
            return Q(s, l, h), Y
        }, t.createModelFromEyesAndMouth = function(t, e, i) {
            K = [], Y = [];
            for (var Q = 0; Q < vtryProfile.defaultFaceShapeVertices.length; Q++) {
                var Z = vtryProfile.defaultFaceShapeVertices[Q].slice();
                Y.push(Z), K.push(Z.slice())
            }
            z = K[o][0] - K[r][0];
            var $ = e[0] - t[0],
                tt = 2.3 * (i[1] - (t[1] + e[1]) / 2);
            j(r, t, [r, n, a, s, l, h, c, u, d, 19, 20, 21, 22], z, $, 1), j(o, e, [o, T, g, f, p, v, m, S, A, 15, 16, 17, 18], z, $, 1);
            var et = [];
            et[0] = (t[0] + e[0]) / 2, et[1] = (t[1] + e[1]) / 2 - .25 * $;
            var it = [];
            it[0] = et[0], it[1] = (t[1] + e[1]) / 2 + .24 * tt, q(b, P, et, it, [b, y, P]), j(P, it, [34, 35, 36, 37, 38, 39, 40, 42, 43], z, $, 1);
            var rt = i;
            j(57, rt, [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], z, $, 1);
            var ot = [];
            ot[0] = (t[0] + e[0]) / 2, ot[1] = (t[1] + e[1]) / 2 + .7 * tt;
            var nt = [];
            nt[0] = t[0] - $ / 2 * 1.2, nt[1] = t[1];
            var at = [];
            return at[0] = e[0] + $ / 2 * 1.2, at[1] = e[1], q(w, x, ot, nt, [M, w, G, E, C, x, R, I, B, D, H, F]), q(w, V, ot, at, [L, _, O, V, N, U, W, X, k, J]), Y
        };
        var Q = function(t, e, i) {
                var K = e[0] - t[0];
                j(r, t, [r, n, a, s, l, h, c, u, d, 19, 20, 21, 22], z, K, 1), j(o, e, [o, T, g, f, p, v, m, S, A, 15, 16, 17, 18], z, K, 1);
                var Y = [];
                Y[0] = (t[0] + e[0]) / 2, Y[1] = (t[1] + e[1]) / 2 - .25 * K;
                var Q = [];
                Q[0] = Y[0], Q[1] = (t[1] + e[1]) / 2 + .2 * i, q(b, P, Y, Q, [b, y, P]), j(P, Q, [34, 35, 36, 37, 38, 39, 40, 42, 43], z, K, 1);
                var Z = [];
                Z[0] = Y[0], Z[1] = (t[1] + e[1]) / 2 + .43 * i, j(57, Z, [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], z, K, 1);
                var $ = [];
                $[0] = (t[0] + e[0]) / 2, $[1] = (t[1] + e[1]) / 2 + .7 * i;
                var tt = [];
                tt[0] = t[0] - K / 2 * 1.2, tt[1] = t[1];
                var et = [];
                et[0] = e[0] + K / 2 * 1.2, et[1] = e[1], q(w, x, $, tt, [M, w, G, E, C, x, R, I, B, D, H, F]), q(w, V, $, et, [L, _, O, V, N, U, W, X, k, J])
            },
            j = function(t, e, i, r, o, n) {
                for (var a = K[t][0], s = K[t][1], l = e[0], h = e[1], c = o / r * n, u = 0; u < i.length; u++) {
                    var d = K[i[u]][0],
                        T = K[i[u]][1];
                    Y[i[u]][0] = (d - a) * c + l, Y[i[u]][1] = (T - s) * c + h
                }
            },
            q = function(t, e, i, r, o) {
                for (var n = K[t][0], a = K[t][1], s = i[0], l = i[1], h = K[e][0], c = K[e][1], u = r[0], d = r[1], T = 0; T < o.length; T++) {
                    var g = K[o[T]][0],
                        f = K[o[T]][1],
                        p = (g - n) / (h - n),
                        v = s + p * (u - s),
                        m = (f - a) / (c - a),
                        S = l + m * (d - l);
                    Y[o[T]][0] = v, Y[o[T]][1] = S
                }
            }
    }(window.vtryFaceModelFactory = window.vtryFaceModelFactory || {}, jQuery),
    function(t, e, i) {
        function r() {
            var e = [],
                i = window.location.href;
            t.isLocal = i.indexOf("localhost") >= 0;
            var r = i.indexOf("?");
            if (0 > r) return [];
            for (var o = i.slice(r + 1).split("&"), n = 0; n < o.length; n++) {
                var a = o[n].split("=");
                e.push(a[0]), e[a[0]] = a[1]
            }
            return e
        }
        t.start = function() {
            t.arg = {}, t.isLocal = !1;
            var n = r();
            0 == n.length || n.co == i || n.model == i ? vtryConfig.isDemo = !0 : vtryConfig.isDemo = !1, vtryViewState.setState(vtryViewState.TRY_ON), e("#divGlasses").hide(), vtryConfig.isDemo ? t.arg.co = "demo" : o(n), vtryProfile.loadInitModel().then(function(t) {
                vtryCtrl.curModel = t, vtryTryOn.start(vtryCtrl.curModel), vtrySource.init()
            })
        };
        var o = function(i) {
            t.arg = i;
            var r = i.co,
                o = i.model,
                n = "true" == i.trial,
                a = "true" == i.embed;
            a || e("#btnReturn").show();
            var s = t.isLocal ? vtryConfig.glassesModelServerPathBaseLocal : vtryConfig.glassesModelServerPathBaseOnline;
            n && (s += "trial/");
            var l = s + r + "/" + o + "/",
                h = l + "model-desc.json?" + Date.now();
            e.getJSON(h, function(t) {
                var e = t;
                e.frontImgUrl = l + e.frontImgUrl, e.leftLegImgUrl = l + e.leftLegImgUrl, e.rightLegImgUrl = l + e.rightLegImgUrl, vtryGlass.setGlassesModel(e)
            })
        }
    }(window.vtryApi = window.vtryApi || {}, jQuery),
    function(t, e, i) {
        var r = [],
            o = null,
            n = !0,
            a = "";
        t.loadInitModel = function() {
            o = f();
            var t = !0,
                r = i;
            "undefined" != typeof localStorage && (t = "true" == localStorage.lastProfileIsSystem, r = localStorage.systemProfileId), t == i && (t = !0), d(), e("#btnUserProfile").click(s), null == o && (t = !0);
            var a = e.Deferred();
            return g().then(function() {
                if (t) {
                    var i = T(r);
                    u(i).then(function(t) {
                        e("#imgTryOnBackground").one("load", function() {
                            a.resolve(t), n = !0
                        }), e("#imgTryOnBackground").attr("src", t.getFaceImgUrl())
                    })
                } else n = !1, a.resolve(o);
                l(), d()
            }), a.promise()
        };
        var s = function() {
                n ? (vtryCtrl.curModel = o, vtryTryOn.start(vtryCtrl.curModel), n = !1, c(), d()) : (vtryCtrl.onStartFineCalibration(), n = !1, d())
            },
            l = function() {
                for (var t = [], i = 0; i < r.length; i++) {
                    var o = e.Deferred();
                    t.push(o);
                    var n = r[i];
                    u(n);
                    var a = e("<img>").attr("src", n.imgUrl).css("display", "none");
                    a.attr("source-url", n.imgUrl), a.appendTo("#btnDefaultProfile")
                }
                e("#btnDefaultProfile").click(h), c()
            },
            h = function(t) {
                var i = e("#btnDefaultProfile img:visible").attr("src"),
                    r = T(i);
                a = i;
                u(r).then(function(t) {
                    vtryCtrl.curModel = t, vtryTryOn.start(vtryCtrl.curModel), n = !0, c(), d()
                })
            },
            c = function() {
                var t = T(a),
                    i = r.indexOf(t),
                    o = t;
                if (n) {
                    var s = i + 1;
                    s >= r.length && (s = 0), o = r[s]
                }
                e("#btnDefaultProfile img").hide(), e("#btnDefaultProfile img[source-url='" + o.imgUrl + "']").show()
            },
            u = function(t) {
                var i = e.Deferred(),
                    r = new vtryFaceModel.faceModelClass;
                r.setVertices(t.verticies), r.isSystemModel = !0;
                var o = new Image;
                return e(o).one("load", function() {
                    var e = document.createElement("canvas");
                    e.width = o.naturalWidth, e.height = o.naturalHeight;
                    var n = e.getContext("2d");
                    n.drawImage(o, 0, 0);
                    var a = e.toDataURL("image/jpeg", .9);
                    r.setFaceImgUrl(a, e.width, e.height), i.resolve(r, t)
                }), o.src = t.imgUrl, i.promise()
            },
            d = function() {
                null == o ? e("#btnUserProfile").hide() : (e("#imgUserThumb").attr("src", o.getFaceImgUrl()), n ? (e("#imgUserThumb").show(), e("#imgCalibration").hide()) : (e("#imgUserThumb").hide(), e("#imgCalibration").show()), e("#btnUserProfile").show())
            },
            T = function(t) {
                for (var e = r[0], i = 0; i < r.length; i++) {
                    var o = r[i];
                    if (o.imgUrl == t) {
                        e = o;
                        break
                    }
                }
                return e
            },
            g = function() {
                var t = e.Deferred();
                return e.getJSON("default/defaultProfiles.json", function(e) {
                    for (var i = 0; i < e.length; i++) {
                        var o = e[i];
                        r.push(o)
                    }
                    t.resolve()
                }), t.promise()
            },
            f = function() {
                if ("undefined" == typeof localStorage) return null;
                var t = localStorage.faceImgDataUrl;
                if (!t) return null;
                var r = null,
                    o = vtryConfig.version,
                    n = localStorage.faceVerticies;
                return o != i && t != i && n != i && (r = new vtryFaceModel.faceModelClass, r.setVertices(e.parseJSON(n)), r.setFaceImgUrl(t, localStorage.faceImgWidth, localStorage.faceImgHeight)), r
            };
        t.saveProfile = function(t) {
            if ("undefined" != typeof Storage)
                if (n) localStorage.lastProfileIsSystem = !0, localStorage.systemProfileId = t.systemModelId;
                else {
                    localStorage.lastProfileIsSystem = !1;
                    try {
                        localStorage.faceImgDataUrl = t.getFaceImgUrl()
                    } catch (e) {
                        localStorage.faceImgDataUrl = ""
                    }
                    localStorage.faceImgWidth = t.sourceImgWidth, localStorage.faceImgHeight = t.sourceImgHeight, localStorage.faceVerticies = JSON.stringify(t.getDetectedVertices()), o = t, d()
                }
        }, t.setShowingUserProfile = function() {
            n = !1
        }
    }(window.vtryProfile = window.vtryProfile || {}, jQuery),
    function(t, e, i) {
        function r(e) {
            vtryLog.log("start loading source image"), e.files && e.files[0] && (t.originalImgDataUrl = null, t.sourceImgWidth = 0, t.sourceImgHeight = 0, t.orientation = -1, t.modelImageScaleDown = 1, o(e.files[0], function(i) {
                vtryLog.log("source image orientation detected"), 65535 == i && (i = -1);
                var r = new FileReader;
                r.onload = function(e) {
                    vtryLog.log("source image loaded"), t.originalImgDataUrl = e.target.result;
                    var r = new Image;
                    r.onload = n.bind(r, i), r.src = e.target.result, vtryLog.log("new image created, start setting source")
                }, r.readAsDataURL(e.files[0])
            }))
        }

        function o(t, e) {
            var i = new FileReader;
            i.onload = function(t) {
                var i, r, o, n, a = new DataView(t.target.result),
                    s = a.byteLength,
                    l = 2;
                if (65496 != a.getUint16(0, !1)) return e(-2);
                for (; s > l;)
                    if (i = a.getUint16(l, !1), l += 2, 65505 == i) {
                        for (r = 18761 == a.getUint16(l += 8, !1), l += a.getUint32(l + 4, r), o = a.getUint16(l, r), l += 2, n = 0; o > n; n++)
                            if (274 == a.getUint16(l + 12 * n, r)) return e(a.getUint16(l + 12 * n + 8, r))
                    } else {
                        if (65280 != (65280 & i)) break;
                        l += a.getUint16(l, !1)
                    }
                return e(-1)
            }, i.readAsArrayBuffer(t.slice(0, 65536))
        }

        function n(i) {
            vtryLog.log("begin process loaded image"), e(".divLoader").text("loading ..."), e(".divLoader").show(), t.orientation;
            var r, o, n = this,
                a = !1,
                s = vtryCtrl.curModel,
                l = document.createElement("canvas"),
                h = /[5678]/.test(i);
            switch (t.sourceImgWidth = h ? this.naturalHeight : this.naturalWidth, t.sourceImgHeight = h ? this.naturalWidth : this.naturalHeight, o = t.sourceImgHeight / t.sourceImgWidth, l.width = t.sourceImgWidth, l.height = t.sourceImgHeight, r = l.getContext("2d"), i) {
                case 2:
                    r.translate(l.width, 0), r.scale(-1, 1), a = !0;
                    break;
                case 3:
                    r.translate(l.width, l.height), r.rotate(Math.PI), a = !0;
                    break;
                case 4:
                    r.translate(0, l.height), r.scale(1, -1), a = !0;
                    break;
                case 5:
                    r.rotate(.5 * Math.PI), r.scale(1, -1), a = !0;
                    break;
                case 6:
                    r.rotate(.5 * Math.PI), r.translate(0, -l.width), a = !0;
                    break;
                case 7:
                    r.rotate(.5 * Math.PI), r.translate(l.height, -l.width), r.scale(-1, 1), a = !0;
                    break;
                case 8:
                    r.rotate(-.5 * Math.PI), r.translate(-l.height, 0), a = !0
            }
            a && (vtryLog.log("begine rotate image"), r.drawImage(this, 0, 0), t.originalImgDataUrl = l.toDataURL("image/png"), vtryLog.log("source image rotated"));
            var c = t.sourceImgWidth,
                u = t.sourceImgHeight;
            (c > vtryConfig.maxImgSize || u > vtryConfig.maxImgSize) && (o >= 1 ? (u = vtryConfig.maxImgSize, c = Math.ceil(u / o), t.modelImageScaleDown = u / t.sourceImgHeight) : (c = vtryConfig.maxImgSize, u = Math.ceil(c * o), t.modelImageScaleDown = c / t.sourceImgWidth));
            var d = document.createElement("canvas");
            d.width = c, d.height = u;
            var T;
            1 != t.modelImageScaleDown ? a ? (vtryLog.log("begin resize rotated source image"), d.getContext("2d").drawImage(l, 0, 0, c, u), T = d.toDataURL("image/jpeg", .9), vtryLog.log("finish resize rotated source image")) : (vtryLog.log("begin resize source image"), d.getContext("2d").drawImage(n, 0, 0, c, u), T = d.toDataURL("image/jpeg", .9), vtryLog.log("finish resize source image")) : T = t.originalImgDataUrl, s.setFaceImgUrl(T, c, u), vtryLog.log(JSON.stringify({
                orientation: i,
                srcW: t.sourceImgWidth,
                srcH: t.sourceImgHeight,
                modelW: c,
                modelH: u
            })), e(".divLoader").hide(), vtryCtrl.onSourceImageLoaded(t.originalImgDataUrl, t.sourceImgWidth, t.sourceImgHeight)
        }
        t.originalImgDataUrl = null, t.sourceImgWidth = 0, t.sourceImgHeight = 0, t.orientation = -1, t.modelImageScaleDown = 1;
        var a = {};
        t.init = function() {
            var t = new MobileDetect(window.navigator.userAgent);
            vtryLog.log("mobile: " + t.mobile()), e("#inputImg").change(function() {
                vtryLog.log("source image changed, wait 0.5s then load img"), e(".divLoader").text("loading ..."), e(".divLoader").show();
                var t = this;
                setTimeout(function(t) {
                    r(t)
                }, 500, t)
            }), null == t.mobile() ? (e("#btnGetImage").hide(), e("#btnDesktopCam").show(), e("#btnDesktopImgFile").show(), e("#btnDesktopCam").click(function() {
                l(), vtryAnim.pause()
            }), e("#btnCancelCam").click(function() {
                try {
                    Webcam.reset()
                } catch (t) {}
                vtryViewState.setState(vtryViewState.TRY_ON)
            }), e("#btnDesktopImgFile").click(function() {
                e("#inputImg").trigger("click"), vtryAnim.pause()
            }), e("#btnSnapshot").click(h), Webcam.on("error", s), a = {
                width: 640,
                height: 480,
                dest_width: 640,
                dest_height: 480,
                image_format: "jpeg",
                jpeg_quality: 90,
                flip_horiz: !0
            }, Webcam.set(a)) : (e("#btnGetImage").show(), e("#btnDesktopCam").hide(), e("#btnDesktopImgFile").hide(), e("#btnGetImage").click(function() {
                e("#inputImg").trigger("click"), vtryAnim.pause()
            })), e("#divTopRightAction").show()
        };
        var s = function(t) {
                if (vtryLog.log("webcam error"), 1 == a.force_flash) vtryViewState.setState(vtryViewState.TRY_ON), window.alert("No Webcam Found.");
                else {
                    a.force_flash = !0, Webcam.set(a);
                    try {
                        Webcam.attach("#divCamera")
                    } catch (t) {
                        s()
                    }
                }
            },
            l = function() {
                vtryViewState.setState(vtryViewState.CAM);
                try {
                    Webcam.attach("#divCamera")
                } catch (t) {
                    a.force_flash = !0, Webcam.set(a);
                    try {
                        Webcam.attach("#divCamera")
                    } catch (t) {
                        s()
                    }
                }
            },
            h = function() {
                Webcam.snap(function(e) {
                    t.originalImgDataUrl = e;
                    var i = new Image,
                        r = -1;
                    i.onload = n.bind(i, r), i.src = e
                }), Webcam.reset()
            }
    }(window.vtrySource = window.vtrySource || {}, jQuery),
    function(t, e, i) {
        var r, o, n = objectdetect.frontalface,
            a = objectdetect.eye;
        t.start = function(t) {
            e(".divLoader").text("Processing"), e(".divLoader").show(), r = t, s()
        };
        var s = function() {
                var t = (e("#viewDetect"), document.getElementById("canvasFaceSource")),
                    i = new Image;
                i.onload = function() {
                    t.width = ~~(vtryConfig.maxDetectHeight * i.width / i.height), t.height = ~~vtryConfig.maxDetectHeight, t.getContext("2d").drawImage(i, 0, 0, t.width, t.height), o = t.height / i.height;
                    var e = !0;
                    if (e) {
                        vtryLog.log("in quick detect route");
                        var r = new objectdetect.detector(t.width, t.height, 1.4, n);
                        vtryLog.log("begine detect face");
                        var s = r.detect(t);
                        vtryLog.log("face detection complete");
                        var r = new objectdetect.detector(t.width, t.height, 1.2, a),
                            c = r.detect(t)
                    } else {
                        vtryLog.log("in normal detect route");
                        var r = new objectdetect.detector(t.width, t.height, 1.1, n);
                        vtryLog.log("begine detect face");
                        var s = r.detect(t);
                        vtryLog.log("face detection complete"), vtryLog.log("begine detect eyes");
                        var r = new objectdetect.detector(t.width, t.height, 1.1, a),
                            c = r.detect(t);
                        vtryLog.log("eye detection complete")
                    }
                    var d = h(s, c),
                        T = !0;
                    (null == d.leftEye || null == d.rightEye) && (T = !1), l(d);
                    for (var g = vtryFaceModelFactory.create(d, d.leftEye, d.rightEye), f = [], p = 0; p < g.length; p++) {
                        var v = [g[p][0], g[p][1]];
                        v[0] = v[0] / o * vtrySource.modelImageScaleDown, v[1] = v[1] / o * vtrySource.modelImageScaleDown, f.push(v)
                    }
                    vtryLog.log("all detection complete"), u(f, T)
                }, i.src = r
            },
            l = function(t) {
                var e = t.leftEye,
                    i = t.rightEye,
                    r = t[0],
                    o = t[1],
                    n = t[2],
                    a = t[3],
                    s = n / 4;
                null == e && (t.leftEye = [], e = t.leftEye, e[0] = r + .7 * s, e[1] = o + .2 * a, e[2] = s, e[3] = s), null == i && (t.rightEye = [], i = t.rightEye, i[0] = r + 2.3 * s, i[1] = o + .2 * a, i[2] = s, i[3] = s)
            },
            h = function(t, e) {
                vtryLog.log("#face features: " + t.length + ", # eye features: " + e.length), t.sort(function(t, e) {
                    return e[3] - t[3]
                }), t = t.splice(0, 3);
                for (var i = [], r = 0; r < e.length; r++) {
                    var n = e[r],
                        a = n[0] + n[2] / 2,
                        s = n[1] + n[3] / 2;
                    i.push([a, s])
                }
                for (var l = [], h = [], u = [], r = 0; r < t.length; r++) {
                    var d = t[r];
                    if (d.leftEye = c(d, e, i, !0), d.rightEye = c(d, e, i, !1), null != d.leftEye && null != d.rightEye) {
                        l.push(d);
                        break
                    }
                    null != d.leftEye || null != d.rightEye ? h.push(d) : u.push(d)
                }
                var T;
                if (l.length > 0) T = l[0];
                else if (h.length > 0) T = h[0];
                else if (u.length > 0) T = u[0];
                else {
                    var g = vtrySource.sourceImgWidth * o,
                        f = vtrySource.sourceImgHeight * o,
                        p = .75 * Math.min(g, f);
                    T = [], T[0] = (g - p) / 2, T[1] = (f - p) / 2 * .75, T[2] = p, T[3] = p, T.leftEye = null, T.rightEye = null
                }
                return T
            },
            c = function(t, e, i, r) {
                var o, n, a, s;
                n = t[1], s = n + t[3] / 2, r ? (o = t[0], a = o + t[2] / 2) : (o = t[0] + t[2] / 2, a = o + t[2] / 2);
                for (var l = [], h = 0; h < i.length; h++) {
                    var c = i[h];
                    c[0] > o && c[0] < a && c[1] > n && c[1] < s && l.push(e[h])
                }
                l.sort(function(e, i) {
                    var r = .25 * t[3],
                        o = Math.abs(1 - e[3] / r),
                        n = Math.abs(1 - i[3] / r);
                    return o - n
                });
                var u = null;
                return l.length > 0 && (u = l[0]), u
            },
            u = function(t, i) {
                e(".divLoader").hide(), vtryCtrl.onAutoFaceFeatureDetectionComplete(t, i)
            }
    }(window.vtryDetect = window.vtryDetect || {}, jQuery),
    function(t, e, i) {
        function r() {
            if (l) a = u();
            else {
                var t, i, r;
                t = [a[27][0], a[27][1]], i = [a[32][0], a[32][1]], r = [a[60][0], a[60][1]], a = vtryFaceModelFactory.createModelFromEyesAndMouth(t, i, r)
            }
            e("#btnFinish").css("display", "none"), vtryCtrl.onCalibrationComplete(a)
        }

        function o() {
            var t = e.extend({
                    w: 160,
                    h: 100
                }, e("#viewCalibrate").offset()),
                r = e(".pan").css({
                    width: t.w + "px",
                    height: t.h + "px"
                }),
                o = e("#imgFace"),
                n = function(t) {
                    return e(document.createElementNS("http://www.w3.org/2000/svg", t))
                },
                h = function(t) {
                    if (h) {
                        var e = d3.select("#faceline"),
                            i = d3.svg.line().interpolate("cardinal");
                        e[0][0] ? e.select("path").data([t]).attr("d", i) : d3.select(".viewMeter").append("svg").attr({
                            id: "faceline",
                            width: o.prop("naturalWidth"),
                            height: o.prop("naturalHeight")
                        }).append("path").style("stroke-width", 4).data([t]).attr("d", i)
                    }
                },
                c = function() {
                    var o = {
                        "mousedown touchstart": function(i) {
                            vtryLog.log("calibration touch started with component.");
                            var n = {
                                    0: c.outline,
                                    3: c.outline,
                                    7: c.outline,
                                    11: c.outline,
                                    14: c.outline,
                                    27: c.eye,
                                    32: c.eye,
                                    60: c.mouth
                                },
                                a = (n[this.id] || c.eye)({
                                    x: 0,
                                    y: 0
                                }),
                                s = i.originalEvent.getPosition(!0);
                            r.append(a.css({
                                left: (t.w - parseFloat(a.attr("width"))) / 2 + "px",
                                top: (t.h - parseFloat(a.attr("height"))) / 2 + "px"
                            })), o.offset = {
                                dx: parseFloat(e(this).width()) / 2,
                                dy: parseFloat(e(this).height()) / 2
                            }, e(this).css({
                                top: s.y - o.offset.dy + "px",
                                left: s.x - o.offset.dx + "px"
                            })
                        },
                        "mousemove touchmove": function(t) {
                            var i = parseFloat(this.id),
                                r = t.originalEvent.getPosition(!0);
                            o.offset && (e(this).css({
                                top: r.y - o.offset.dy + "px",
                                left: r.x - o.offset.dx + "px"
                            }), a[i] = [parseFloat(e(this).css("left")) + e(this).width() / 2, parseFloat(e(this).css("top")) + e(this).height() / 2], 15 > i && h([a[0], a[3], a[7], a[11], a[14]]))
                        },
                        "mouseup touchend": function(t) {
                            t.originalEvent.getPosition(!0);
                            r.empty(), o.offset = i
                        }
                    };
                    return s.scale > .8 ? {
                        eye: function(t) {
                            var e = n("path").attr("d", "M5,20h5M30,20h5M20,5v5M20,30v5"),
                                i = n("circle").attr({
                                    cx: 20,
                                    cy: 20,
                                    r: 10
                                }),
                                r = n("circle").attr({
                                    cx: 20,
                                    cy: 20,
                                    r: 2
                                }).css("fill", "#00D0FF");
                            return n("svg").attr({
                                width: 40,
                                height: 40
                            }).css({
                                top: t.y - 20 + "px",
                                left: t.x - 20 + "px"
                            }).on(o).append(n("g").append(e, i, r))
                        },
                        mouth: function(t) {
                            var e = n("path").attr("d", "M0,20h5M75,20h5M40,5v6M40,30v5M15,20h50M15,10A10,10,0,1,0,15,30h50A10,10,0,1,0,65,10h-50");
                            return n("svg").attr({
                                width: 80,
                                height: 40
                            }).css({
                                top: t.y - 20 + "px",
                                left: t.x - 40 + "px"
                            }).on(o).append(n("g").append(e))
                        },
                        outline: function(t) {
                            if (!h) return null;
                            var e = n("path").attr("d", "M12,20h16M20,12v16"),
                                i = n("circle").attr({
                                    cx: 20,
                                    cy: 20,
                                    r: 2
                                }).css("fill", "#00D0FF");
                            return n("svg").attr({
                                width: 40,
                                height: 40
                            }).css({
                                top: t.y - 20 + "px",
                                left: t.x - 20 + "px"
                            }).on(o).append(n("g").append(e, i))
                        }
                    } : {
                        eye: function(t) {
                            var e = n("path").attr("d", "M10,40h10M60,40h10M40,10v10M40,60v10"),
                                i = n("circle").attr({
                                    cx: 40,
                                    cy: 40,
                                    r: 20
                                }),
                                r = n("circle").attr({
                                    cx: 40,
                                    cy: 40,
                                    r: 4
                                }).css("fill", "#00D0FF");
                            return n("svg").attr({
                                width: 80,
                                height: 80
                            }).css({
                                top: t.y - 40 + "px",
                                left: t.x - 40 + "px"
                            }).on(o).append(n("g").append(e, i, r))
                        },
                        mouth: function(t) {
                            var e = n("path").attr("d", "M0,40h10M150,40h10M80,10v12M80,60v10M30,40h100M30,20A20,20,0,1,0,30,60h100A20,20,0,1,0,130,20h-100");
                            return n("svg").attr({
                                width: 160,
                                height: 80
                            }).css({
                                top: t.y - 40 + "px",
                                left: t.x - 80 + "px"
                            }).on(o).append(n("g").append(e))
                        },
                        outline: function(t) {
                            if (!h) return null;
                            var e = n("path").attr("d", "M24,40h32M40,24v32"),
                                i = n("circle").attr({
                                    cx: 40,
                                    cy: 40,
                                    r: 4
                                }).css("fill", "#00D0FF");
                            return n("svg").attr({
                                width: 80,
                                height: 80
                            }).css({
                                top: t.y - 40 + "px",
                                left: t.x - 40 + "px"
                            }).on(o).append(n("g").append(e, i))
                        }
                    }
                }();
            Event.prototype.getPosition = function(e) {
                var i = this;
                return i.preventDefault(), e || i.stopPropagation(), i = i.changedTouches ? i.changedTouches[0] : i, {
                    x: (i.pageX - t.left) / s.scale,
                    y: (i.pageY - t.top) / s.scale
                }
            };
            var u = e(".viewMeter");
            u.empty(), l && (h([a[0], a[3], a[7], a[11], a[14]]), u.append(c.outline({
                x: a[0][0],
                y: a[0][1]
            }).attr("id", "0"), c.outline({
                x: a[3][0],
                y: a[3][1]
            }).attr("id", "3"), c.outline({
                x: a[7][0],
                y: a[7][1]
            }).attr("id", "7"), c.outline({
                x: a[11][0],
                y: a[11][1]
            }).attr("id", "11"), c.outline({
                x: a[14][0],
                y: a[14][1]
            }).attr("id", "14"))), u.append(c.eye({
                x: a[27][0],
                y: a[27][1]
            }).attr("id", "27"), c.eye({
                x: a[32][0],
                y: a[32][1]
            }).attr("id", "32"), c.mouth({
                x: a[60][0],
                y: a[60][1]
            }).attr("id", "60")), u.on({
                "mousedown touchstart": function(e) {
                    vtryLog.log("calibration touch started.");
                    var i = e.originalEvent.getPosition();
                    o.css("opacity", .5), t.allowed = 1, r.css({
                        backgroundPosition: t.w / 2 - i.x + "px " + (t.h / 2 - i.y) + "px",
                        top: i.y - 1.6 * t.h + "px",
                        left: i.x - t.w / 2 + "px",
                        display: "block"
                    })
                },
                "mousemove touchmove": function(e) {
                    var i = e.originalEvent.getPosition();
                    t.allowed && r.css({
                        backgroundPosition: t.w / 2 - i.x + "px " + (t.h / 2 - i.y) + "px",
                        top: i.y - 1.6 * t.h + "px",
                        left: i.x - t.w / 2 + "px"
                    })
                },
                "mouseup touchend": function(e) {
                    e.originalEvent.getPosition();
                    o.css("opacity", 1), t.allowed = i, r.css("display", "none"), r.empty()
                }
            })
        }
        var n, a, s = {},
            l = !1,
            h = !1,
            c = function() {
                h || (e("#btnFinish").click(r), h = !0)
            };
        t.start = function(t, i) {
            s = {}, l = i ? !0 : !1, e("#btnFinish").css("display", "block");
            var r = e("#imgFace");
            c(), n = t, a = n.getDetectedVertices(), s.raw = {
                27: a[27],
                32: a[32],
                60: a[60]
            }, e(".viewMeter").empty(), r.on("load", function() {
                vtryLog.log("calibarion face img loaded.");
                var t = e(window).width() / e("#imgFace").prop("naturalWidth"),
                    i = e(window).height() / e("#imgFace").prop("naturalHeight");
                s.scale = Math.min(t, i), vtryLog.log("calibration scale: " + s.scale), e("#viewCalibrate").css({
                    transform: "scale(" + s.scale + ", " + s.scale + ")",
                    "transform-origin": "0 0"
                }), e(".pan").css({
                    border: "black 1px solid",
                    borderRadius: "30px",
                    backgroundImage: "url(" + n.getFaceImgUrl() + ")"
                }), o()
            }), r.attr("src", ""), r.attr("src", n.getFaceImgUrl())
        };
        var u = function() {
            var t, i, r = e("#faceline").find("path").get(0),
                o = r.getTotalLength(),
                n = o / 14,
                l = {
                    dx: a[32][0] - s.raw[32][0],
                    dy: a[32][1] - s.raw[32][1]
                },
                h = {
                    dx: a[27][0] - s.raw[27][0],
                    dy: a[27][1] - s.raw[27][1]
                },
                c = {
                    dx: a[60][0] - s.raw[60][0],
                    dy: a[60][1] - s.raw[60][1]
                };
            for (i = 0; 15 > i; i++) t = r.getPointAtLength(i * n), a[i] = [t.x, t.y];
            return a.forEach(function(t, e) {
                -1 != [15, 16, 17, 18, 28, 29, 30, 31, 67, 68, 69, 70].indexOf(e) ? (t[0] += l.dx, t[1] += l.dy) : -1 != [19, 20, 21, 22, 23, 24, 25, 26, 63, 64, 65, 66].indexOf(e) ? (t[0] += h.dx, t[1] += h.dy) : -1 != [34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61].indexOf(e) && (t[0] += c.dx, t[1] += c.dy)
            }), a[33][0] = (a[24][0] + a[29][0]) / 2, a[33][1] = (a[24][1] + a[29][1]) / 2, a[62][0] = (a[35][0] + a[39][0]) / 2, a[62][1] = (a[35][1] + a[39][1]) / 2, a[41][0] = (a[33][0] + a[62][0]) / 2, a[41][1] = (a[33][1] + a[62][1]) / 2, a
        }
    }(window.vtryCalibrate = window.vtryCalibrate || {}, jQuery),
    function(t, e, i) {
        var r, o, n, a, s = !1,
            l = 512,
            h = 256,
            c = 241,
            u = 67,
            d = 54,
            T = 241,
            g = 67,
            f = 54,
            p = 0,
            v = 130;
        t.setGlassesModel = function(t) {
            e("#divGlasses").hide(), e(".divLoader").show(), s = !1, b(t).then(function() {
                A(t), m()
            }, function() {
                S(t)
            })
        };
        var m = function() {
                var t = window.location.href,
                    i = "/track/track.php",
                    r = vtryApi.arg,
                    o = r.co,
                    n = r.model;
                e.ajax({
                    type: "POST",
                    data: {
                        vendor: o,
                        model: n,
                        url: t
                    },
                    url: i,
                    success: function(t) {}
                })
            },
            S = function(t) {
                e(".divLoader").hide(), window.alert("error loading glasses images. ")
            },
            A = function(r) {
                e(".divLoader").hide(), e("#divGlasses").show(), l = r.frontW, h = r.frontH, c = r.legWLeft, T = r.legWRight, d = r.legYLeft, u = r.legHLeft, f = r.legYRight, g = r.legHRight, p = r.YOffset != i ? r.YOffset : 0, v = r.frontMM, o = r.frontImgUrl, n = r.leftLegImgUrl, a = r.rightLegImgUrl, e("#imgGlasses").attr("src", o), e("#imgLeftLeg").attr("src", n), e("#imgRightLeg").attr("src", a), s = !0, t.update()
            },
            b = function(t) {
                var i = e.Deferred(),
                    r = e.Deferred(),
                    o = e.Deferred(),
                    n = e.Deferred(),
                    a = new Image;
                a.onload = function() {
                    r.resolve()
                }, a.onerror = function() {
                    r.reject()
                };
                var s = new Image;
                s.onload = function() {
                    o.resolve()
                }, s.onerror = function() {
                    o.reject()
                };
                var l = new Image;
                return l.onload = function() {
                    n.resolve()
                }, l.onerror = function() {
                    n.reject()
                }, e.when(r, o, n).done(function() {
                    i.resolve()
                }), a.src = t.frontImgUrl, s.src = t.leftLegImgUrl, l.src = t.rightLegImgUrl, i.promise()
            };
        t.setFaceModel = function(e) {
            r = e, t.update()
        }, t.update = function(t, o, n, a, c) {
            if (0 == s || r == i) return void e("#divGlasses").hide();
            t == i && (t = 1);
            var T = IVtryAnim.getCurRotationY(),
                m = document.getElementById("divGlasses"),
                S = document.getElementById("imgGlasses"),
                A = document.getElementById("imgLeftLeg"),
                b = document.getElementById("imgRightLeg");
            o = o || r.glassRefPointLeftEye.slice(), n = n || r.glassRefPointRightEye.slice();
            var y = (n[0] - o[0]) * (T / 90 * .6);
            o[0] += y, n[0] += y;
            var P = Math.atan((n[1] - o[1]) / (n[0] - o[0])) / Math.PI * 180;
            a = a || r.glassRefPointLeftFace[0], c = c || r.glassRefPointRightFace[0];
            var M = o[0],
                w = o[1],
                G = n[0],
                E = n[1],
                C = Math.sqrt((G - M) * (G - M) + (E - w) * (E - w)),
                x = C / r.pd,
                R = l / v,
                I = x / R;
            I *= t;
            var B = l * I,
                D = h * I,
                H = B / 2,
                F = D / 2,
                L = (M + G) / 2 - H,
                _ = (w + E) / 2 - F + p * I,
                O = L - a,
                V = c - (L + B);
            O > 0 ? A.style.display = "inline" : A.style.display = "none", V > 0 ? b.style.display = "inline" : b.style.display = "none", m.style.left = L + "px", m.style.top = _ + "px", m.style.width = B + "px", m.style.height = D + "px", S.style.width = B + "px", S.style.height = D + "px", S.style.display = "inline", A.style.left = -O + "px", A.style.top = d * I + "px", A.style.width = O + "px", A.style.height = u * I + "px", b.style.left = B + "px", b.style.top = f * I + "px", b.style.width = V + "px", b.style.height = g * I + "px", m.style["-webkit-transform"] = "perspective(500px) rotateZ(" + P + "deg) rotateY(" + T + "deg)", m.style["-moz-transform"] = "perspective(500px) rotateZ(" + P + "deg) rotateY(" + T + "deg)", m.style.transform = "perspective(500px) rotateZ(" + P + "deg) rotateY(" + T + "deg)"
        }
    }(window.vtryGlass = window.vtryGlass || {}, jQuery),
    function(t, e, i) {
        function r(t, e) {
            return Math.random() * (e - t) + t
        }
        var o, n = !1,
            a = !1,
            s = new faceDeformer,
            l = !0,
            h = 0,
            c = 0,
            u = 0,
            d = 0,
            T = 0,
            g = !0,
            f = 0,
            p = 0,
            v = 0,
            m = 0,
            S = 0,
            A = 1,
            b = 30,
            y = (new Date).getTime() + 1e3 * b,
            P = !1,
            M = (new Date).getTime(),
            w = 0,
            G = 0,
            E = 0,
            C = .01,
            x = (new Date).getTime(),
            R = 0,
            I = 0,
            B = 0,
            D = .01,
            H = (new Date).getTime(),
            F = 0,
            L = !1,
            _ = .2,
            O = 0,
            V = 0,
            N = 0,
            U = 0,
            W = 0,
            X = .03,
            k = (new Date).getTime();
        t.initAnimation = function() {
            n || K(), n = !0, s = new faceDeformer, s.init(document.getElementById("canvasTryOnWebGl")), o = vtryCtrl.curModel;
            var t = e("#imgTryOnBackground");
            vtryLog.log("Source Img width: " + t.width()), s.load(t[0], o.getCurVertices(), null, o.faceShapeTriangles), vtryLog.log("fd loaded");
            var i = e(window).width();
            e(window).height();
            e("#divWipeForehead").css("width", i + "px"), e("#divWipeJaw").css("width", i + "px"), e("#divWipeBG").css("width", i + "px"), J();
            var r = o.updateFacePoints(l, d, T, c, h, u);
            s.clear(), s.draw(r)
        }, t.startAnimation = function() {
            vtryLog.log("start animation."), J(), a = !0
        }, t.pause = function() {
            a = !1
        };
        var J = function() {
            l = !0, h = 0, c = 0, u = 0, d = 0, T = 0, g = !0, f = 0, p = 0, v = 0, m = 0, S = 0, A = 1, M = (new Date).getTime(), w = 0, G = 0, E = 0, C = .01, x = (new Date).getTime(), R = 0, I = 0, B = 0, D = .01, H = (new Date).getTime(), F = 0, L = !1, _ = .2, O = 0, V = 0, N = 0, U = 0, W = 0, X = .03, k = (new Date).getTime()
        };
        t.getCurRotationY = function() {
            return h
        };
        var K = (Date.now(), function(t) {
            if (requestAnimFrame(K), 0 != vtryTryOn.startProcessComplete) {
                if (Y(), !a) {
                    if (l) return;
                    g = !0
                }
                if (vtryViewState.curState == vtryViewState.TRY_ON) {
                    if ("undefined" == typeof debugNoAnimation && (z(), j()), l == g && d == m && T == S && c == p && h == f && u == v) return void("undefined" != typeof drawGrid && (vtryGlass.update(), test.drawVertices2(o.getCurVertices(), "canvasVertices")));
                    q();
                    var e = o.updateFacePoints(g, m, S, p, f, v);
                    l = g, d = m, T = S, c = p, h = f, u = v, s.clear(), s.draw(e), vtryGlass.update(A), Z(), "undefined" != typeof drawGrid && test.drawVertices2(o.getCurVertices(), "canvasVertices")
                }
            }
        });
        t.setUserControlOn = function(t) {
            P = t, P ? a = !0 : (M = (new Date).getTime() + 100, E = 0, a = !0, y = (new Date).getTime() + 1e3 * b)
        }, t.setUserControlRotationY = function(t) {
            f = t
        };
        var Y = function() {
                var t = (new Date).getTime();
                !P && a && t > y && (a = !1)
            },
            z = function() {
                if ("undefined" == typeof debugNoAutoMove && !P) {
                    var t = (new Date).getTime();
                    0 == E && M > t || (E > 0 && 1 >= E ? (E += C, f = Q(G, w, E)) : E > 1 ? (E = 0, M = t) : t > M && (G = h, w = h >= 0 ? r(-.5 * vtryConfig.maxRotationDegreeWithJaw, -.3 * vtryConfig.maxRotationDegreeWithJaw) : r(.3 * vtryConfig.maxRotationDegreeWithJaw, .5 * vtryConfig.maxRotationDegreeWithJaw), C = r(.003, .01), E += C)), 0 == B && x > t || (B > 0 && 1 >= B ? (B += D, v = Q(I, R, B)) : B > 1 ? (B = 0, x = t) : t > x && (I = u, R = u > 0 ? r(-3, -1) : r(1, 3), D = r(.002, .004), B += D))
                }
            },
            Q = function(t, e, i) {
                var r = $.easeInOutQuart(i),
                    o = (e - t) * r,
                    n = t + o;
                return n
            },
            j = function() {
                var t = (new Date).getTime();
                if (0 == F && H > t);
                else if (F > 0 && 1 >= F) F += _, g = !1;
                else if (F > 1) {
                    F = 0;
                    var e = Math.random();
                    .3 > e && !L ? (H = t + 100, L = !0) : (L = !1, H = t + r(3e3, 5e3)), g = !0
                } else t > H && (F += _);
                if (0 == W && k > t);
                else if (W > 0 && 1 >= W) W += X, m = O + W * (N - O), S = V + W * (U - V);
                else if (W > 1) {
                    W = 0;
                    var e = Math.random();
                    N = r(-.8, .8), U = r(-1, .5), k = t + r(1e3, 3e3)
                } else t > k && (O = d, V = T, W += X)
            },
            q = function() {
                var t = Math.abs(h) - vtryConfig.maxRotationDegreeWithFace;
                A = 0 > t ? 1 : 1 + t / 45, A = Math.min(A, 2)
            },
            Z = function() {
                var t = h,
                    i = o.getCurVertices(),
                    r = Math.abs(t),
                    n = 0,
                    a = 10;
                if (r >= vtryConfig.maxRotationDegreeWithFace && r < vtryConfig.maxRotationDegreeWithFace + a) {
                    var s = r - vtryConfig.maxRotationDegreeWithFace;
                    n = s / a, n = Math.pow(n, .3)
                } else r >= vtryConfig.maxRotationDegreeWithFace + a && (n = 1);
                e("#divWipeBG").css("opacity", n);
                var l = 0;
                if (a = 10, r >= vtryConfig.maxRotationDegreeWithJaw && r < vtryConfig.maxRotationDegreeWithJaw + a) {
                    var s = r - vtryConfig.maxRotationDegreeWithJaw;
                    l = s / a, l = Math.pow(l, .3);
                } else r >= vtryConfig.maxRotationDegreeWithJaw + a && (l = 1);
                var c = (.6 * i[62][1] + 1.4 * i[41][1]) / 2;
                e("#divWipeJaw").css("opacity", l), e("#divWipeJaw").css("top", c + "px"), e("#divWipeJaw").css("height", e(window).height() - c + "px");
                var u = i[71][1];
                e("#divWipeForehead").css("opacity", l), e("#divWipeForehead").css("height", u + "px"), e("#divWipeForehead").css("background", "linear-gradient(rgba(128, 128, 128, 0.98)" + (u - 20) + "px, rgba(128, 128, 128, 0)")
            },
            $ = {
                linear: function(t) {
                    return t
                },
                easeInQuad: function(t) {
                    return t * t
                },
                easeOutQuad: function(t) {
                    return t * (2 - t)
                },
                easeInOutQuad: function(t) {
                    return .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t
                },
                easeInCubic: function(t) {
                    return t * t * t
                },
                easeOutCubic: function(t) {
                    return --t * t * t + 1
                },
                easeInOutCubic: function(t) {
                    return .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                },
                easeInQuart: function(t) {
                    return t * t * t * t
                },
                easeOutQuart: function(t) {
                    return 1 - --t * t * t * t
                },
                easeInOutQuart: function(t) {
                    return .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
                },
                easeInQuint: function(t) {
                    return t * t * t * t * t
                },
                easeOutQuint: function(t) {
                    return 1 + --t * t * t * t * t
                },
                easeInOutQuint: function(t) {
                    return .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
                }
            }
    }(window.vtryAnim = window.vtryAnim || {}, jQuery),
    function() {
        window.MorpherJS = {}
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        MorpherJS.EventDispatcher = function() {
            function e() {
                this.trigger = t(this.trigger, this), this.off = t(this.off, this), this.on = t(this.on, this)
            }
            return e.prototype.eventSplitter = /\s+/, e.prototype.on = function(t, e, i) {
                var r, o, n;
                if (!e) return this;
                for (t = t.split(this.eventSplitter), r = this._callbacks || (this._callbacks = {}); o = t.shift();) n = r[o] || (r[o] = []), n.push(e, i);
                return this
            }, e.prototype.off = function(t, e, i) {
                var r, o, n, a;
                if (!(r = this._callbacks)) return this;
                if (!(t || e || i)) return delete this._callbacks, this;
                for (t = t ? t.split(this.eventSplitter) : _.keys(r); o = t.shift();)
                    if ((a = r[o]) && (e || i))
                        for (n = a.length - 2; n >= 0;) e && a[n] !== e || i && a[n + 1] !== i || a.splice(n, 2), n -= 2;
                    else delete r[o];
                return this
            }, e.prototype.trigger = function(t) {
                var e, i, r, o, n, a, s, l;
                if (!(r = this._callbacks)) return this;
                for (l = [], t = t.split(this.eventSplitter), n = 1, a = arguments.length; a > n;) l[n - 1] = arguments[n], n++;
                for (; o = t.shift();) {
                    if ((e = r.all) && (e = e.slice()), (s = r[o]) && (s = s.slice()), s)
                        for (n = 0, a = s.length; a > n;) s[n].apply(s[n + 1] || this, l), n += 2;
                    if (e)
                        for (i = [o].concat(l), n = 0, a = e.length; a > n;) e[n].apply(e[n + 1] || this, i), n += 2
                }
                return this
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        MorpherJS.Matrix = function() {
            function e() {
                this.multiplyWith = t(this.multiplyWith, this), this.toTransform = t(this.toTransform, this), this.toCSS = t(this.toCSS, this), this.apply = t(this.apply, this), this.removeTransform = t(this.removeTransform, this), this.shear = t(this.shear, this), this.rotate = t(this.rotate, this), this.skew = t(this.skew, this), this.scale = t(this.scale, this), this.translate = t(this.translate, this), this.set = t(this.set, this), this.get = t(this.get, this);
                var e, i;
                this.values = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                for (e in arguments) i = arguments[e], this.values[e] = i;
                this.transforms = []
            }
            return e.prototype.values = !1, e.prototype.transforms = !1, e.prototype.get = function(t, e) {
                return this.values[3 * t + e]
            }, e.prototype.set = function(t, e, i) {
                return this.values[3 * t + e] = i
            }, e.prototype.translate = function(t, e) {
                return null == t && (t = 0), null == e && (e = 0), this.transforms.unshift(new MorpherJS.Matrix(1, 0, t, 0, 1, e, 0, 0, 1))
            }, e.prototype.scale = function(t, e) {
                return null == t && (t = 1), null == e && (e = 1), this.transforms.unshift(new MorpherJS.Matrix(t, 0, 0, 0, e, 0, 0, 0, 1))
            }, e.prototype.skew = function(t, e) {
                return null == t && (t = 0), null == e && (e = 0), this.transforms.unshift(new MorpherJS.Matrix(1, Math.tan(t), 0, Math.tan(e), 1, 0, 0, 0, 1))
            }, e.prototype.rotate = function(t) {
                return this.transforms.unshift(new MorpherJS.Matrix(Math.cos(t), -Math.sin(t), 0, Math.sin(t), Math.cos(t), 0, 0, 0, 1))
            }, e.prototype.shear = function(t, e) {
                return null == t && (t = 0), null == e && (e = 0), this.transforms.unshift(new MorpherJS.Matrix(1, t, 0, e, 1, 0, 0, 0, 1))
            }, e.prototype.removeTransform = function(t) {
                return this.transforms.splice(this.transforms.length - 1 - t, 1)
            }, e.prototype.apply = function(t) {
                var e, i, r, o, n;
                for (null == t && (t = !1), e = t ? this : new MorpherJS.Matrix, n = this.transforms, r = 0, o = n.length; o > r; r++) i = n[r], e.multiplyWith(i, !0);
                return e
            }, e.prototype.toCSS = function() {
                return "matrix(" + this.toTransform().join(", ") + ")"
            }, e.prototype.toTransform = function() {
                return [this.get(0, 0), this.get(1, 0), this.get(0, 1), this.get(1, 1), this.get(0, 2), this.get(1, 2)]
            }, e.prototype.multiplyWith = function(t, e) {
                var i, r, o, n, a, s, l, h;
                for (null == e && (e = !1), e || this.apply(!0), a = [], i = s = 0; 2 >= s; i = ++s)
                    for (r = l = 0; 2 >= l; r = ++l) {
                        for (n = 0, o = h = 0; 2 >= h; o = ++h) n += this.get(i, o) * t.get(o, r);
                        a.push(n)
                    }
                return this.values = a, this
            }, e
        }()
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function r() {
                    this.constructor = t
                }
                for (var o in i) e.call(i, o) && (t[o] = i[o]);
                return r.prototype = i.prototype, t.prototype = new r, t.__super__ = i.prototype, t
            },
            r = [].slice;
        MorpherJS.Image = function(e) {
            function o(e) {
                null == e && (e = {}), this.fromJSON = t(this.fromJSON, this), this.toJSON = t(this.toJSON, this), this.refreshSource = t(this.refreshSource, this), this.draw = t(this.draw, this), this.propagateMeshEvent = t(this.propagateMeshEvent, this), this.removeTriangle = t(this.removeTriangle, this), this.addTriangle = t(this.addTriangle, this), this.splitEdge = t(this.splitEdge, this), this.getRelativePositionOf = t(this.getRelativePositionOf, this), this.makeCompatibleWith = t(this.makeCompatibleWith, this), this.removePoint = t(this.removePoint, this), this.addPoint = t(this.addPoint, this), this.setMaxSize = t(this.setMaxSize, this), this.loadHandler = t(this.loadHandler, this), this.moveTo = t(this.moveTo, this), this.getY = t(this.getY, this), this.setY = t(this.setY, this), this.getX = t(this.getX, this), this.setX = t(this.setX, this), this.getWeight = t(this.getWeight, this), this.setWeight = t(this.setWeight, this), this.setSrc = t(this.setSrc, this), this.remove = t(this.remove, this), this.el = new window.Image, this.el.onload = this.loadHandler, this.source = document.createElement("canvas"), this.mesh = new MorpherJS.Mesh, this.mesh.on("all", this.propagateMeshEvent), this.mesh.on("change:bounds", this.refreshSource), this.triangles = this.mesh.triangles, this.points = this.mesh.points, this.fromJSON(e)
            }
            return i(o, e), o.prototype.el = null, o.prototype.source = null, o.prototype.loaded = !1, o.prototype.mesh = null, o.prototype.weight = 0, o.prototype.x = 0, o.prototype.y = 0, o.prototype.remove = function() {
                return this.mesh.remove(), this.trigger("remove", this)
            }, o.prototype.setSrc = function(t) {
                return this.loaded = !1, this.el.src = t
            }, o.prototype.setWeight = function(t, e) {
                return null == e && (e = {}), this.weight = 1 * t, e.silent ? void 0 : this.trigger("change:weight change")
            }, o.prototype.getWeight = function() {
                return this.weight
            }, o.prototype.setX = function(t, e) {
                return null == e && (e = {}), this.x = Math.round(1 * t), this.mesh.x = this.x, e.silent ? void 0 : this.trigger("change:x change")
            }, o.prototype.getX = function() {
                return this.x
            }, o.prototype.setY = function(t, e) {
                return null == e && (e = {}), this.y = Math.round(1 * t), this.mesh.y = this.y, e.silent ? void 0 : this.trigger("change:y change")
            }, o.prototype.getY = function() {
                return this.y
            }, o.prototype.moveTo = function(t, e, i) {
                return null == i && (i = {}), this.setX(t, {
                    silent: !0
                }), this.setY(e, {
                    silent: !0
                }), i.silent ? void 0 : this.trigger("change:x change:y change")
            }, o.prototype.loadHandler = function() {
                return this.loaded = !0, this.refreshSource(), this.trigger("load", this, this.el)
            }, o.prototype.setMaxSize = function() {
                return this.mesh.setMaxSize.apply(this, arguments)
            }, o.prototype.addPoint = function() {
                return this.mesh.addPoint.apply(this, arguments)
            }, o.prototype.removePoint = function() {
                return this.mesh.removePoint.apply(this, arguments)
            }, o.prototype.makeCompatibleWith = function() {
                return this.mesh.makeCompatibleWith.apply(this, arguments)
            }, o.prototype.getRelativePositionOf = function() {
                return this.mesh.getRelativePositionOf.apply(this, arguments)
            }, o.prototype.splitEdge = function() {
                return this.mesh.splitEdge.apply(this, arguments)
            }, o.prototype.addTriangle = function() {
                return this.mesh.addTriangle.apply(this, arguments)
            }, o.prototype.removeTriangle = function() {
                return this.mesh.removeTriangle.apply(this, arguments)
            }, o.prototype.propagateMeshEvent = function() {
                var t, e, i;
                return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? r.call(arguments, 2) : [], this.trigger.apply(this, [i, this].concat(t))
            }, o.prototype.draw = function(t, e) {
                var i, r, o, n, a, s;
                for (a = this.triangles, s = [], i = o = 0, n = a.length; n > o; i = ++o) r = a[i], s.push(r.draw(this.source, t, e.triangles[i]));
                return s
            }, o.prototype.refreshSource = function() {
                var t;
                if (this.loaded) return this.source.width = this.mesh.bounds.left + this.mesh.bounds.width, this.source.height = this.mesh.bounds.top + this.mesh.bounds.height, t = this.source.getContext("2d"), t.drawImage(this.el, 0, 0)
            }, o.prototype.toJSON = function() {
                var t;
                return t = this.mesh.toJSON(), t.src = this.el.src, t.x = this.x, t.y = this.y, t
            }, o.prototype.fromJSON = function(t, e) {
                return null == t && (t = {}), null == e && (e = {}), null != t.x && this.setX(t.x, e), null != t.y && this.setY(t.y, e), this.mesh.fromJSON(t, e), null != t.src ? this.setSrc(t.src) : void 0
            }, o
        }(MorpherJS.EventDispatcher)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function r() {
                    this.constructor = t
                }
                for (var o in i) e.call(i, o) && (t[o] = i[o]);
                return r.prototype = i.prototype, t.prototype = new r, t.__super__ = i.prototype, t
            };
        MorpherJS.Mesh = function(e) {
            function r(e) {
                null == e && (e = {}), this.remove = t(this.remove, this), this.reset = t(this.reset, this), this.fromJSON = t(this.fromJSON, this), this.toJSON = t(this.toJSON, this), this.removeTriangle = t(this.removeTriangle, this), this.addTriangle = t(this.addTriangle, this), this.splitEdge = t(this.splitEdge, this), this.findNearestPointOfLine = t(this.findNearestPointOfLine, this), this.findLine = t(this.findLine, this), this.resolveRelativePosition = t(this.resolveRelativePosition, this), this.getRelativePositionOf = t(this.getRelativePositionOf, this), this.changeHandler = t(this.changeHandler, this), this.makeCompatibleWith = t(this.makeCompatibleWith, this), this.removePoint = t(this.removePoint, this), this.addPoint = t(this.addPoint, this), this.refreshBounds = t(this.refreshBounds, this), this.setMaxSize = t(this.setMaxSize, this), this.points = [], this.triangles = []
            }
            return i(r, e), r.prototype.points = null, r.prototype.triangles = null, r.prototype.bounds = {
                width: 0,
                height: 0
            }, r.prototype.maxWidth = 0, r.prototype.maxHeight = 0, r.prototype.x = 0, r.prototype.y = 0, r.prototype.setMaxSize = function(t, e) {
                return this.maxWidth = t, this.maxHeight = e
            }, r.prototype.refreshBounds = function(t) {
                var e, i, r, o, n;
                for (null == t && (t = {}), e = {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }, this.points.length && (e.left = this.points[0].x, e.top = this.points[0].y), n = this.points, r = 0, o = n.length; o > r; r++) i = n[r], e.width = Math.max(e.width, i.x), e.height = Math.max(e.height, i.y), e.left = Math.min(e.left, i.x), e.top = Math.min(e.top, i.y);
                return e.width -= e.left, e.height -= e.top, e.width === this.bounds.width && e.height === this.bounds.height && e.left === this.bounds.left && e.top === this.bounds.top || (this.bounds = e, t.silent) ? void 0 : this.trigger("change:bounds")
            }, r.prototype.addPoint = function(t, e) {
                var i, r;
                return null == e && (e = {}), t instanceof MorpherJS.Point ? (i = t, i.mesh = this, t = null) : (null != t.points ? r = this.resolveRelativePosition(t) : (r = t, t = null), i = new MorpherJS.Point(r.x, r.y, {
                    mesh: this
                })), i.on("change", this.changeHandler), i.on("remove", this.removePoint), this.points.push(i), this.refreshBounds(e), e.silent || this.trigger("point:add", this, i, t), i
            }, r.prototype.removePoint = function(t, e) {
                var i;
                return null == e && (e = {}), i = t instanceof MorpherJS.Point ? this.points.indexOf(t) : t, null == i || -1 === i || (delete this.points.splice(i, 1), e.silent) ? void 0 : this.trigger("point:remove", this, t, i)
            }, r.prototype.makeCompatibleWith = function(t) {
                var e, i, r, o, n;
                if (t instanceof MorpherJS.Image && (t = t.mesh), this.points.length !== t.points.length) {
                    if (this.points.length > t.points.length) return this.points.splice(t.points.length, this.points.length - t.points.length);
                    for (o = t.points.slice(this.points.length, t.points.length + 1 || 9e9), n = [], i = 0, r = o.length; r > i; i++) e = o[i], n.push(this.addPoint({
                        x: e.x,
                        y: e.y
                    }));
                    return n
                }
            }, r.prototype.changeHandler = function() {
                return this.refreshBounds(), this.trigger("change")
            }, r.prototype.getRelativePositionOf = function(t) {
                var e, i, r, o, n, a, s, l, h, c, u, d, T, g, f, p, v, m, S, A, b, y, P, M, w, G, E;
                for (p = [], w = this.points, b = 0, P = w.length; P > b; b++)
                    if (m = w[b], m !== t)
                        if (a = m.distanceTo(t), 0 === p.length) p.push({
                            distance: a,
                            point: m
                        });
                        else
                            for (u = y = 0, M = p.length; M > y; u = ++y)
                                if (f = p[u], a < f.distance || u === p.length - 1 && p.length < 3) {
                                    v = {
                                        distance: a,
                                        point: m
                                    }, p.length >= 3 ? p.splice(u, 1, v) : a < f.distance ? p.splice(u, 0, v) : p.splice(u + 1, 0, v);
                                    break
                                }
                switch (S = A = 0, p.length) {
                    case 0:
                        S = t.x, A = t.y;
                        break;
                    case 1:
                        S = t.x - p[0].point.x, A = t.y - p[0].point.y;
                        break;
                    case 2:
                    case 3:
                        G = this.findLine(p[0].point, p[1].point), e = G[0], r = G[1], 2 === p.length ? g = this.findNearestPointOfLine(e, r, t) : (E = this.findLine(t, p[2].point), i = E[0], o = E[1], d = (o - r) / (e - i), T = e * d + r, g = new MorpherJS.Point(d, T)), n = p[0].point.distanceTo(p[1].point), h = (g.x - p[0].point.x) * (p[1].point.x - p[0].point.x) > 0 ? 1 : -1, s = p[0].point.distanceTo(g), S = s * h / n, l = t.distanceTo(g), 2 === p.length ? c = (t.y - g.y) * (p[1].point.x - p[0].point.x) < 0 ? 1 : -1 : (n = p[2].point.distanceTo(g), c = (t.x - g.x) * (p[2].point.x - g.x) > 0 ? 1 : -1), A = l * c / n
                }
                return p = function() {
                    var t, e, i;
                    for (i = [], t = 0, e = p.length; e > t; t++) f = p[t], i.push(this.points.indexOf(f.point));
                    return i
                }.call(this), {
                    points: p,
                    x: S,
                    y: A
                }
            }, r.prototype.resolveRelativePosition = function(t) {
                var e, i, r, o, n, a, s, l, h, c, u;
                switch (t.points.length) {
                    case 0:
                        c = t.x, u = t.y;
                        break;
                    case 1:
                        a = this.points[t.points[0]], c = a.x + t.x, u = a.y + t.y;
                        break;
                    case 2:
                    case 3:
                        s = this.points[t.points[0]], l = this.points[t.points[1]], r = (l.x - s.x) * t.x + s.x, o = (l.y - s.y) * t.x + s.y, n = new MorpherJS.Point(r, o), 2 === t.points.length ? (e = (l.y - s.y) * t.y, i = -(l.x - s.x) * t.y) : (h = this.points[t.points[2]], e = (h.x - n.x) * t.y, i = (h.y - n.y) * t.y), c = n.x + e, u = n.y + i
                }
                return {
                    x: c,
                    y: u
                }
            }, r.prototype.findLine = function(t, e) {
                var i, r;
                return t.x - e.x ? (i = (t.y - e.y) / (t.x - e.x), r = t.y - i * t.x, [i, r]) : [null, t.x]
            }, r.prototype.findNearestPointOfLine = function(t, e, i) {
                var r, o, n, a;
                return null != t ? (r = -1 / t, o = i.y - r * i.x, n = (o - e) / (t - r), a = t * n + e) : (n = e, a = i.y), new MorpherJS.Point(n, a)
            }, r.prototype.splitEdge = function(t, e) {
                var i, r, o, n, a, s, l, h, c, u, d, T, g;
                for (r = this.points.indexOf(t), o = this.points.indexOf(e), l = this.addPoint({
                        points: [r, o],
                        x: .5,
                        y: 0
                    }), a = this.points.indexOf(l), i = 0, g = []; i < this.triangles.length;)
                    if (c = this.triangles[i], c.hasPoint(t) && c.hasPoint(e)) {
                        for (T = [c.p1, c.p2, c.p3], u = 0, d = T.length; d > u; u++) h = T[u], h !== t && h !== e && (s = h);
                        n = this.points.indexOf(s), c.remove(), this.addTriangle(r, n, a), g.push(this.addTriangle(o, n, a))
                    } else g.push(i++);
                return g
            }, r.prototype.addTriangle = function(t, e, i) {
                var r;
                if (this.points[t] && this.points[e] && this.points[i]) return r = new MorpherJS.Triangle(this.points[t], this.points[e], this.points[i]), r.on("remove", this.removeTriangle), this.triangles.push(r), this.trigger("triangle:add", this, t, e, i, r)
            }, r.prototype.removeTriangle = function(t, e) {
                var i;
                return null == e && (e = {}), t instanceof MorpherJS.Triangle ? i = this.triangles.indexOf(t) : (i = t, t = this.triangles[i]), null == i || -1 === i || (delete this.triangles.splice(i, 1), t.off("remove", this.removeTriangle), t.remove(), e.silent) ? void 0 : this.trigger("triangle:remove", this, t, i)
            }, r.prototype.toJSON = function() {
                var t, e, i, r, o;
                for (t = {}, t.points = [], o = this.points, i = 0, r = o.length; r > i; i++) e = o[i], t.points.push(e.toJSON());
                return t
            }, r.prototype.fromJSON = function(t, e) {
                var i, r, o, n, a, s;
                if (null == t && (t = {}), null == e && (e = {}), e.hard && this.reset(), null != t.points) {
                    for (a = t.points, s = [], i = o = 0, n = a.length; n > o; i = ++o) r = a[i], i > this.points.length - 1 ? s.push(this.addPoint(r, e)) : s.push(this.points[i].fromJSON(r, e));
                    return s
                }
            }, r.prototype.reset = function() {
                var t, e, i, r, o;
                for (r = this.points, o = [], e = 0, i = r.length; i > e; e++) t = r[e], o.push(this.removePoint(t));
                return o
            }, r.prototype.remove = function() {
                var t, e;
                for (e = []; t = this.triangles[0];) e.push(this.removeTriangle(t, {
                    silent: !0
                }));
                return e
            }, r
        }(MorpherJS.EventDispatcher)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function r() {
                    this.constructor = t
                }
                for (var o in i) e.call(i, o) && (t[o] = i[o]);
                return r.prototype = i.prototype, t.prototype = new r, t.__super__ = i.prototype, t
            };
        MorpherJS.Morpher = function(e) {
            function r(e) {
                null == e && (e = {}), this.reset = t(this.reset, this), this.fromJSON = t(this.fromJSON, this), this.toJSON = t(this.toJSON, this), this.animationStep = t(this.animationStep, this), this.updateMesh = t(this.updateMesh, this), this.refreshMaxSize = t(this.refreshMaxSize, this), this.updateCanvasSize = t(this.updateCanvasSize, this), this.drawNow = t(this.drawNow, this), this.draw = t(this.draw, this), this.removeTriangleHandler = t(this.removeTriangleHandler, this), this.addTriangleHandler = t(this.addTriangleHandler, this), this.triangleExists = t(this.triangleExists, this), this.addTriangle = t(this.addTriangle, this), this.removePointHandler = t(this.removePointHandler, this), this.addPointHandler = t(this.addPointHandler, this), this.addPoint = t(this.addPoint, this), this.changeHandler = t(this.changeHandler, this), this.loadHandler = t(this.loadHandler, this), this.removeImage = t(this.removeImage, this), this.addImage = t(this.addImage, this), this.animate = t(this.animate, this), this.get = t(this.get, this), this.set = t(this.set, this), this.images = [], this.triangles = [], this.mesh = new MorpherJS.Mesh, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.tmpCanvas = document.createElement("canvas"), this.tmpCtx = this.tmpCanvas.getContext("2d"), this.fromJSON(e), this.set([1])
            }
            return i(r, e), r.prototype.images = null, r.prototype.triangles = [], r.prototype.mesh = null, r.prototype.canvas = null, r.prototype.ctx = null, r.prototype.tmpCanvas = null, r.prototype.tmpCtx = null, r.prototype.blendFunction = null, r.prototype.finalTouchFunction = null, r.prototype.easingFunction = null, r.prototype.requestID = null, r.prototype.t0 = null, r.prototype.duration = null, r.prototype.state0 = null, r.prototype.state1 = null, r.prototype.state = null, r.prototype.set = function(t, e) {
                var i, r, o, n, a, s, l;
                for (null == e && (e = {}), this.state = [], s = this.images, l = [], i = n = 0, a = s.length; a > n; i = ++n) r = s[i], o = t[i] || 0, this.state.push(o), l.push(r.setWeight(o, e));
                return l
            }, r.prototype.get = function() {
                return this.state.slice()
            }, r.prototype.animate = function(t, e, i) {
                var r, o, n, a;
                for (this.state0 = [], a = this.images, o = 0, n = a.length; n > o; o++) r = a[o], this.state0.push(r.getWeight());
                return this.state1 = t, this.t0 = (new Date).getTime(), this.duration = e, this.easingFunction = i, this.trigger("animation:start", this), this.draw()
            }, r.prototype.imageEvents = {
                load: "loadHandler",
                change: "changeHandler",
                "point:add": "addPointHandler",
                "point:remove": "removePointHandler",
                "triangle:add": "addTriangleHandler",
                "triangle:remove": "removeTriangleHandler",
                remove: "removeImage"
            }, r.prototype.addImage = function(t, e) {
                var i, r, o;
                null == e && (e = {}), t instanceof MorpherJS.Image || (t = new MorpherJS.Image(t)), t.remove(), this.images.length ? t.makeCompatibleWith(this.mesh) : this.mesh.makeCompatibleWith(t), this.images.push(t), o = this.imageEvents;
                for (i in o) r = o[i], t.on(i, this[r]);
                return this.loadHandler(), e.silent ? void 0 : this.trigger("image:add", this, t)
            }, r.prototype.removeImage = function(t) {
                var e, i, r, o;
                r = this.images.indexOf(t), o = this.imageEvents;
                for (e in o) i = o[e], t.off(e, this[i]);
                return -1 !== r ? (delete this.images.splice(r, 1), this.trigger("image:remove", this, t)) : void 0
            }, r.prototype.loadHandler = function(t) {
                var e, i, r, o;
                for (this.draw(), o = this.images, i = 0, r = o.length; r > i; i++)
                    if (e = o[i], !e.loaded) return !1;
                return this.refreshMaxSize(), this.trigger("load", this, this.canvas)
            }, r.prototype.changeHandler = function(t) {
                return this.draw(), this.trigger("change", this)
            }, r.prototype.addPoint = function(t, e) {
                var i, r, o, n;
                for (n = this.images.concat(this.mesh), r = 0, o = n.length; o > r; r++) i = n[r], i.addPoint({
                    x: t,
                    y: e
                });
                return this.trigger("point:add", this)
            }, r.prototype.addPointHandler = function(t, e, i) {
                var r, o, n, a, s;
                for (null == i && (i = null), o = i || t.getRelativePositionOf(e), s = this.images, n = 0, a = s.length; a > n; n++)
                    if (r = s[n], r.points.length < t.points.length) return void r.addPoint(o);
                return this.mesh.points.length < t.points.length ? (this.mesh.addPoint(o), this.trigger("point:add", this)) : void 0
            }, r.prototype.removePointHandler = function(t, e, i) {
                var r, o, n, a, s, l, h, c, u, d, T, g;
                for (T = this.images, s = 0, c = T.length; c > s; s++)
                    if (r = T[s], r.points.length > t.points.length) return void r.removePoint(i);
                for (this.mesh.points.length > t.points.length && this.mesh.removePoint(i), g = this.triangles, l = 0, u = g.length; u > l; l++)
                    for (n = g[l], o = h = 0, d = n.length; d > h; o = ++h) a = n[o], a >= i && (n[o] -= 1);
                return this.trigger("point:remove", this)
            }, r.prototype.addTriangle = function(t, e, i) {
                return this.images.length > 0 ? this.images[0].addTriangle(t, e, i) : void 0
            }, r.prototype.triangleExists = function(t, e, i) {
                var r, o, n, a;
                for (a = this.triangles, o = 0, n = a.length; n > o; o++)
                    if (r = a[o], -1 !== r.indexOf(t) && -1 !== r.indexOf(e) && -1 !== r.indexOf(i)) return !0;
                return !1
            }, r.prototype.addTriangleHandler = function(t, e, i, r, o) {
                var n, a, s, l;
                for (t.triangles.length > this.triangles.length && !this.triangleExists(e, i, r) && this.triangles.push([e, i, r]), l = this.images, a = 0, s = l.length; s > a; a++)
                    if (n = l[a], n.triangles.length < this.triangles.length) return void n.addTriangle(e, i, r);
                return this.mesh.triangles.length < this.triangles.length && this.mesh.addTriangle(e, i, r), this.trigger("triangle:add", this)
            }, r.prototype.removeTriangleHandler = function(t, e, i) {
                var r, o, n, a;
                for (t.triangles.length < this.triangles.length && delete this.triangles.splice(i, 1), a = this.images, o = 0, n = a.length; n > o; o++)
                    if (r = a[o], r.triangles.length > this.triangles.length) return void r.removeTriangle(i);
                return this.mesh.triangles.length > this.triangles.length && this.mesh.removeTriangle(i), this.trigger("triangle:remove", this)
            }, r.prototype.draw = function() {
                var t;
                if (null == this.requestID) return t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.webkitRequestAnimationFrame, null != t ? this.requestID = t(this.drawNow) : this.drawNow()
            }, r.prototype.drawNow = function() {
                var t, e, i;
                return this.canvas.width = this.canvas.width, this.updateCanvasSize(), this.animationStep(), this.updateMesh(), t = this.blendFunction || MorpherJS.Morpher.defaultBlendFunction, this.canvas.width > 0 && this.canvas.height > 0 && (i = this.images.slice().sort(function(t, e) {
                    return e.weight - t.weight
                }), e = this.images[0], this.tmpCanvas.width = this.tmpCanvas.width, e.draw(this.tmpCtx, this.mesh), t(this.canvas, this.tmpCanvas, 1), null != this.finalTouchFunction && this.finalTouchFunction(this.canvas), this.trigger("draw", this, this.canvas)), this.requestID = null, null != this.t0 ? this.draw() : void 0
            }, r.prototype.updateCanvasSize = function() {
                var t, e, i, r, o, n;
                for (i = 0, t = 0, n = this.images, r = 0, o = n.length; o > r; r++) e = n[r], i = Math.max(e.el.width + e.getX(), i), t = Math.max(e.el.height + e.getY(), t);
                return i !== this.canvas.width || t !== this.canvas.height ? (this.canvas.width = this.tmpCanvas.width = i, this.canvas.height = this.tmpCanvas.height = t, this.refreshMaxSize(), this.trigger("resize", this, this.canvas)) : void 0
            }, r.prototype.refreshMaxSize = function() {
                var t, e, i, r, o;
                for (r = this.images, o = [], e = 0, i = r.length; i > e; e++) t = r[e], o.push(t.setMaxSize(this.canvas.width, this.canvas.height));
                return o
            }, r.prototype.updateMesh = function() {
                var t, e, i, r, o, n, a, s, l;
                for (r = this.canvas.width / 2, o = this.canvas.height / 2, s = this.mesh.points, l = [], t = n = 0, a = s.length; a > n; t = ++n) i = s[t], i.x = r, i.y = o, l.push(function() {
                    var n, a, s, l;
                    for (s = this.images, l = [], n = 0, a = s.length; a > n; n++) e = s[n], i.x += (e.getX() + e.points[t].x - r) * e.weight, l.push(i.y += (e.getY() + e.points[t].y - o) * e.weight);
                    return l
                }.call(this));
                return l
            }, r.prototype.animationStep = function() {
                var t, e, i, r, o, n, a, s;
                if (null != this.t0) {
                    if (r = (new Date).getTime() - this.t0, r >= this.duration) i = this.state1, this.state0 = this.state1 = this.t0 = null, this.trigger("animation:complete", this);
                    else
                        for (e = r / this.duration, null != this.easingFunction && (e = this.easingFunction(e)), i = [], s = this.state0, t = n = 0, a = s.length; a > n; t = ++n) o = s[t], i.push(o * (1 - e) + this.state1[t] * e);
                    return this.set(i, {
                        silent: !0
                    })
                }
            }, r.defaultBlendFunction = function(t, e, i) {
                var r, o, n, a, s, l, h;
                for (r = t.getContext("2d").getImageData(0, 0, e.width, e.height), n = e.getContext("2d").getImageData(0, 0, e.width, e.height), h = n.data, o = s = 0, l = h.length; l > s; o = ++s) a = h[o], r.data[o] += a * i;
                return t.getContext("2d").putImageData(r, 0, 0)
            }, r.prototype.toJSON = function() {
                var t, e, i, r, o;
                for (e = {}, e.images = [], o = this.images, i = 0, r = o.length; r > i; i++) t = o[i], e.images.push(t.toJSON());
                return e.triangles = this.triangles.slice(), e
            }, r.prototype.fromJSON = function(t, e) {
                var i, r, o, n, a, s, l, h, c, u;
                if (null == t && (t = {}), null == e && (e = {}), e.hard && this.reset(), null != t.blendFunction && (this.blendFunction = t.blendFunction), null != t.images) {
                    for (h = t.images, i = n = 0, s = h.length; s > n; i = ++n) r = h[i], i > this.images.length - 1 ? this.addImage(r, e) : this.images[i].fromJSON(r, e);
                    this.mesh.makeCompatibleWith(this.images[0])
                }
                if (null != t.triangles) {
                    for (c = t.triangles.slice(this.triangles.length), u = [], a = 0, l = c.length; l > a; a++) o = c[a], u.push(this.addTriangle(o[0], o[1], o[2]));
                    return u
                }
            }, r.prototype.reset = function() {
                var t, e, i, r;
                for (r = this.images, e = 0, i = r.length; i > e; e++) t = r[e], this.removeImage(t);
                return this.images = []
            }, r
        }.call(this, MorpherJS.EventDispatcher), window.Morpher = MorpherJS.Morpher
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function r() {
                    this.constructor = t
                }
                for (var o in i) e.call(i, o) && (t[o] = i[o]);
                return r.prototype = i.prototype, t.prototype = new r, t.__super__ = i.prototype, t
            };
        MorpherJS.Point = function(e) {
            function r(e, i, r) {
                null == r && (r = {}), this.reset = t(this.reset, this), this.fromJSON = t(this.fromJSON, this), this.toJSON = t(this.toJSON, this), this.transform = t(this.transform, this), this.distanceTo = t(this.distanceTo, this), this.clone = t(this.clone, this), this.remove = t(this.remove, this), this.setY = t(this.setY, this), this.getY = t(this.getY, this), this.setX = t(this.setX, this), this.getX = t(this.getX, this), null != r.mesh && (this.mesh = r.mesh), this.setX(e, {
                    silent: !0
                }), this.setY(i, {
                    silent: !0
                })
            }
            return i(r, e), r.prototype.x = 0, r.prototype.y = 0, r.prototype.mesh = null, r.prototype.getX = function() {
                return this.x
            }, r.prototype.setX = function(t, e) {
                return null == e && (e = {}), null != this.mesh && this.mesh.maxWidth && (t = Math.max(-this.mesh.x, Math.min(this.mesh.maxWidth - this.mesh.x, t))), this.x === t || (this.x = t, e.silent) ? void 0 : this.trigger("change:x change", this)
            }, r.prototype.getY = function() {
                return this.y
            }, r.prototype.setY = function(t, e) {
                return null == e && (e = {}), null != this.mesh && this.mesh.maxHeight && (t = Math.max(-this.mesh.y, Math.min(this.mesh.maxHeight - this.mesh.y, t))), this.y === t || (this.y = t, e.silent) ? void 0 : this.trigger("change:y change", this)
            }, r.prototype.remove = function() {
                return this.trigger("remove", this)
            }, r.prototype.clone = function() {
                return new MorpherJS.Point(this.x, this.y)
            }, r.prototype.distanceTo = function(t) {
                return Math.sqrt(Math.pow(t.x - this.x, 2) + Math.pow(t.y - this.y, 2))
            }, r.prototype.transform = function(t) {
                var e, i;
                return e = t.get(0, 0) * this.x + t.get(0, 1) * this.y + t.get(0, 2), i = t.get(1, 0) * this.x + t.get(1, 1) * this.y + t.get(1, 2), this.x = e, this.y = i
            }, r.prototype.toJSON = function() {
                return {
                    x: this.x,
                    y: this.y
                }
            }, r.prototype.fromJSON = function(t, e) {
                return null == t && (t = {}), null == e && (e = {}), e.hard && this.reset(), this.setX(t.x, e), this.setY(t.y, e)
            }, r.prototype.reset = function() {
                return this.x = null, this.y = null
            }, r
        }(MorpherJS.EventDispatcher)
    }.call(this),
    function() {
        var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            e = {}.hasOwnProperty,
            i = function(t, i) {
                function r() {
                    this.constructor = t
                }
                for (var o in i) e.call(i, o) && (t[o] = i[o]);
                return r.prototype = i.prototype, t.prototype = new r, t.__super__ = i.prototype, t
            };
        MorpherJS.Triangle = function(e) {
            function r(e, i, r) {
                this.offset = t(this.offset, this), this.draw = t(this.draw, this), this.visualize = t(this.visualize, this), this.getHeight = t(this.getHeight, this), this.getBounds = t(this.getBounds, this), this.transform = t(this.transform, this), this.clone = t(this.clone, this), this.hasPoint = t(this.hasPoint, this), this.remove = t(this.remove, this), this.p1 = e, this.p2 = i, this.p3 = r, this.p1.on("remove", this.remove), this.p2.on("remove", this.remove), this.p3.on("remove", this.remove)
            }
            return i(r, e), r.prototype.p1 = null, r.prototype.p2 = null, r.prototype.p3 = null, r.prototype.remove = function() {
                return this.trigger("remove", this)
            }, r.prototype.hasPoint = function(t) {
                return this.p1 === t || this.p2 === t || this.p3 === t
            }, r.prototype.clone = function() {
                var t;
                return t = new MorpherJS.Triangle(this.p1.clone(), this.p2.clone(), this.p3.clone())
            }, r.prototype.transform = function(t) {
                return this.p1.transform(t), this.p2.transform(t), this.p3.transform(t)
            }, r.prototype.getBounds = function() {
                var t, e, i, r, o, n, a, s;
                for (e = r = this.p1.x, o = t = this.p1.y, s = [this.p2, this.p3], n = 0, a = s.length; a > n; n++) i = s[n], e = Math.min(e, i.x), r = Math.max(r, i.x), o = Math.min(o, i.y), t = Math.max(t, i.y);
                return [e, o, r, t]
            }, r.prototype.getHeight = function(t) {
                var e;
                return null == t && (t = 3), e = this["p" + t]
            }, r.prototype.visualize = function(t, e) {
                return null == e && (e = !1), this.p1.visualize(t, e), this.p2.visualize(t, e), this.p3.visualize(t, e)
            }, r.prototype.draw = function(t, e, i) {
                var r, o, n, a, s, l, h, c, u, d, T, g, f, p, v, m, S, A, b, y, P;
                for (y = this.getBounds(), a = y[0], m = y[1], u = y[2], r = y[3], S = u - a, n = r - m, s = new MorpherJS.Matrix, s.translate(-this.p1.x, -this.p1.y), s.rotate(-Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x)), o = this.clone(), o.transform(s.apply()), l = new MorpherJS.Matrix, d = Math.atan2(i.p2.y - i.p1.y, i.p2.x - i.p1.x), l.translate(-i.p1.x, -i.p1.y), l.rotate(-d), v = i.clone(), v.transform(l.apply()), T = v.p2.x / o.p2.x, g = v.p3.y / o.p3.y, s.scale(T, g), f = this.clone(), f.transform(s.apply()), s.shear((v.p3.x - o.p3.x * T) / (o.p3.y * g)), p = this.clone(), p.transform(s.apply()), s.rotate(d), s.translate(i.p1.x, i.p1.y), e.save(), e.setTransform.apply(e, s.apply(!0).toTransform()), c = [], c.push(this.offset(this.p1, this.p2)), c.push(this.offset(this.p1, this.p3)), c.push(this.offset(this.p2, this.p3)), c.push(this.offset(this.p2, this.p1)), c.push(this.offset(this.p3, this.p1)), c.push(this.offset(this.p3, this.p2)), e.beginPath(), e.moveTo(c[0].x, c[0].y), P = c.slice(1), A = 0, b = P.length; b > A; A++) h = P[A], e.lineTo(h.x, h.y);
                return e.closePath(), e.clip(), 0 == S || 0 == n ? console.log("skip 0 sized triangle") : e.drawImage(t, a, m, S, n, a, m, S, n), e.restore()
            }, r.prototype.offset = function(t, e, i) {
                var r, o, n, a, s;
                return null == i && (i = .7), window.chrome && (i = 0), r = e.x - t.x, n = e.y - t.y, s = Math.sqrt(Math.pow(r, 2) + Math.pow(n, 2)), o = r * i / s, a = n * i / s, {
                    x: t.x - o,
                    y: t.y - a
                }
            }, r
        }(MorpherJS.EventDispatcher)
    }.call(this),
    function(t, e, i) {
        var r, o, n, a, s, l, h, c, u, d, T, g, f, p, v, m, S, A = vtryConfig.maxRotationDegreeWithFace,
            b = vtryConfig.maxRotationDegreeWithFace,
            y = !1,
            P = 2,
            M = P,
            w = 0,
            G = 1;
        t.initAnimation = function() {
            y = !1, e(".imgCached").hide()
        }, t.startAnimation = function() {
            E()
        }, t.setUserControlOn = function(t) {}, t.getCurRotationY = function() {
            return w
        }, t.setUserControlRotationY = function(t) {
            I(t)
        }, t.pause = function() {};
        var E = function() {
                r = vtryCtrl.curModel, a = document.createElement("CANVAS"), a.width = e(window).width(), a.heigth = e(window).height(), s = document.createElement("CANVAS"), s.width = e(window).width(), s.heigth = e(window).height(), e(".imgCached").remove(), e("#divGlasses").hide(), M = P, e(".divLoader").show();
                var t = r.getCurVertices(),
                    i = r.faceShapeTriangles,
                    l = H(t, i, A),
                    h = H(t, i, -b);
                o = new Morpher(h), n = new Morpher(l), o.on("load", function() {
                    vtryLog.log("left face loaded."), n.on("load", function() {
                        vtryLog.log("right face loaded."), C()
                    })
                }), e("#divTryOnLeft").append(o.canvas), e("#divTryOnRight").append(n.canvas)
            },
            C = function() {
                vtryLog.log("in cacheFrmae");
                var t = 1 / P,
                    i = t * M;
                R(i).then(function(t) {
                    var i = t,
                        r = e("<img class='imgCached' style='display:none; -webkit-transform: translateZ(-1000px);'/>");
                    if (r.attr("src", i), r.attr("id", "imgCached" + M), r.insertBefore("#divWipeBG"), M--, M >= -P) {
                        C();
                        var o = Math.round((P - M) / (2 * P + 1) * 100);
                        e(".divLoader").text(o + "%")
                    } else x()
                })
            },
            x = function() {
                e("#divGlasses").show(), y = !0, I(0), e(".divLoader").hide(), e(".divLoader").text("Loading ...")
            },
            R = function(t) {
                var i = t;
                i > 1 && (i = 1), -1 > i && (i = -1);
                var r, l, h;
                i >= 0 ? (r = i * A, l = s, h = n) : (h = o, l = a, i = -i);
                var c = e.Deferred();
                return h.on("draw", function(t, e) {
                    var i = t.canvas.toDataURL("image/png");
                    c.resolve(i)
                }), h.animate([1 - i, i], 0), c.promise()
            },
            I = function(t) {
                if (y) {
                    var i = !0,
                        o = 0,
                        n = 0,
                        a = 0,
                        s = 0;
                    w = t, e(".imgCached").hide();
                    var l = t / b,
                        h = !0,
                        c = 1;
                    if (l > c || -c > l ? (h = !1, e("#imgTryOnBackground").hide()) : e("#imgTryOnBackground").show(), h) {
                        var u = Math.round(l * P);
                        e("#imgCached" + u).show(), w = u / P * b
                    }
                    r.updateFacePoints(i, o, n, a, w, s), L(), vtryGlass.update(G), F()
                }
            },
            B = function(t) {
                for (var e = [], i = 0; i < t.length; i++) {
                    var r = {};
                    r.x = Math.round(t[i][0]), r.y = Math.round(t[i][1]), e.push(r)
                }
                return e
            },
            D = function(t) {
                for (var e = [], i = 0; i < t.length; i++) {
                    var r = [t[i][0], t[i][1], t[i][2]];
                    e.push(r)
                }
                return e
            },
            H = function(t, i, o) {
                var n = B(t),
                    a = D(i),
                    s = {},
                    A = !0,
                    b = 0,
                    y = 0,
                    P = 0,
                    M = 0,
                    w = o,
                    G = B(r.updateFacePoints(A, b, y, P, w, M));
                s.points = G, s.src = e("#imgTryOnBackground").attr("src"), s.x = 0,
                    s.y = 0;
                var E = {};
                E.points = n, E.src = e("#imgTryOnBackground").attr("src"), E.x = 0, E.y = 0;
                var C = {};
                return C.images = [E, s], C.triangles = a, o > 0 ? (c = [G[27][0], G[27][1]], T = [G[32][0], G[32][1]], p = G[0][0], S = G[14][0], l = [n[27][0], n[27][1]], u = [n[32][0], n[32][1]], g = n[0][0], v = n[14][0]) : (h = [G[27][0], G[27][1]], d = [G[32][0], G[32][1]], f = G[0][0], m = G[14][0]), C
            },
            F = function() {
                var t = w,
                    i = r.getCurVertices(),
                    o = Math.abs(t),
                    n = 0,
                    a = 10;
                if (o >= vtryConfig.maxRotationDegreeWithFace && o < vtryConfig.maxRotationDegreeWithFace + a) {
                    var s = o - vtryConfig.maxRotationDegreeWithFace;
                    n = s / a, n = Math.pow(n, .3)
                } else o >= vtryConfig.maxRotationDegreeWithFace + a && (n = 1);
                e("#divWipeBG").css("opacity", n);
                var l = 0;
                if (a = 10, o >= vtryConfig.maxRotationDegreeWithJaw && o < vtryConfig.maxRotationDegreeWithJaw + a) {
                    var s = o - vtryConfig.maxRotationDegreeWithJaw;
                    l = s / a, l = Math.pow(l, .3)
                } else o >= vtryConfig.maxRotationDegreeWithJaw + a && (l = 1);
                var h = (.6 * i[62][1] + 1.4 * i[41][1]) / 2;
                e("#divWipeJaw").css("opacity", l), e("#divWipeJaw").css("top", h + "px"), e("#divWipeJaw").css("height", e(window).height() - h + "px");
                var c = i[71][1];
                e("#divWipeForehead").css("opacity", l), e("#divWipeForehead").css("height", c + "px"), e("#divWipeForehead").css("background", "linear-gradient(rgba(128, 128, 128, 0.98)" + (c - 20) + "px, rgba(128, 128, 128, 0)")
            },
            L = function() {
                var t = Math.abs(w) - vtryConfig.maxRotationDegreeWithFace;
                G = 0 > t ? 1 : 1 + t / 45, G = Math.min(G, 2)
            }
    }(window.vtryAnimLegacy = window.vtryAnimLegacy || {}, jQuery),
    function(t, e, i) {
        var r = i;
        t.initAnimation = function() {
            r == i && (r = o()), r ? vtryAnim.initAnimation() : vtryAnimLegacy.initAnimation()
        }, t.startAnimation = function() {
            r ? vtryAnim.startAnimation() : vtryAnimLegacy.startAnimation()
        }, t.setUserControlOn = function(t) {
            r ? vtryAnim.setUserControlOn(t) : vtryAnimLegacy.setUserControlOn(t)
        }, t.getCurRotationY = function() {
            return r ? vtryAnim.getCurRotationY() : vtryAnimLegacy.getCurRotationY()
        }, t.setUserControlRotationY = function(t) {
            r ? vtryAnim.setUserControlRotationY(t) : vtryAnimLegacy.setUserControlRotationY(t)
        }, t.pause = function() {
            r ? vtryAnim.pause() : vtryAnimLegacy.pause()
        };
        var o = function() {
            var t = new faceDeformer,
                e = t.init(document.getElementById("canvasTryOnWebGl")),
                r = null != e && e != i;
            return r
        }
    }(window.IVtryAnim = window.IVtryAnim || {}, jQuery),
    function(t, e, i) {
        var r = !1;
        t.startProcessComplete = !0;
        var o = null,
            n = null,
            a = null,
            s = 0,
            l = !1,
            h = 0;
        t.start = function(i) {
            return vtryLog.log("try on start called"), e(".imgCached").hide(), 0 == t.startProcessComplete ? null : (vtryLog.log("try on start begin."), o = e.Deferred(), t.startProcessComplete = !1, IVtryAnim.pause(), e(".tryonFadeIn").css("opacity", 0), e("#canvasTryOnWebGl").css("opacity", 0), r || (e("#divTryOnContainer").on("touchstart", T), e("#viewTryOn").on("mousedown", T), e("#divTryOnContainer").on("touchmove", g), e("#viewTryOn").on("mousemove", g), e("#divTryOnContainer").on("touchend", f), e("#viewTryOn").on("mouseup", f), e("#divTryOnContainer").on("touchcancel", f), r = !0), e("#divGlasses").hide(), n = i, vtryUtil.cropModelSourceImage().then(function(t) {
                var i = e("#imgTryOnBackground");
                i.width(e(window).width()), i.height(e(window).height()), i.attr("src", ""), i.one("load", c), i.attr("src", t.cropImgUrl)
            }), o.promise())
        };
        var c = function() {
                n.updateFacePoints(!0, 0, 0, 0, 0, 0), p(0), e(".imgCached").hide(), vtryGlass.setFaceModel(n), vtryConfig.isDemo && vtryDemo.start();
                var t = 1e3;
                e(".tryonFadeIn").fadeTo(t, 1), setTimeout(u, t)
            },
            u = function() {
                IVtryAnim.initAnimation(), vtryGlass.update(), e("#divGlasses").show();
                var t = 100;
                e("#canvasTryOnWebGl").fadeTo(t, 1), setTimeout(d, t)
            },
            d = function() {
                e(".divLoader").hide(), IVtryAnim.startAnimation(), vtryProfile.saveProfile(n), t.startProcessComplete = !0, vtryLog.log("tryon start ends."), o.resolve()
            };
        t.setGlassesModel = function(t) {
            a = t;
            var i = e.Deferred(),
                r = e.Deferred(),
                o = e.Deferred(),
                n = new Image,
                s = new Image,
                l = new Image;
            n.onload = function() {
                i.resolve()
            }, s.onload = function() {
                r.resolve()
            }, l.onload = function() {
                o.resolve()
            }, e.when(i, r, o).done(function() {
                vtryGlass.setGlassesModel(t)
            }), n.src = vtryCtrl.curModel.getFaceImgUrl()
        };
        var T = function(t) {
                if (vtryViewState.curState == vtryViewState.TRY_ON) {
                    vtryLog.log("touch start"), IVtryAnim.setUserControlOn(!0);
                    var i;
                    i = t.originalEvent.touches ? t.originalEvent.touches.item(0) : t.originalEvent, s = i.clientX, h = IVtryAnim.getCurRotationY(), e(".divTryOnControl").css("opacity", 0), t.originalEvent.preventDefault(), l = !0
                }
            },
            g = function(t) {
                if (l) {
                    var i;
                    i = t.originalEvent.touches ? t.originalEvent.touches.item(0) : t.originalEvent;
                    var r = e(window).width(),
                        o = i.clientX,
                        n = (o - s) / r,
                        a = n * vtryConfig.maxRotationDegree + h;
                    p(a), t.originalEvent.preventDefault()
                }
            },
            f = function(t) {
                l = !1, e(".divTryOnControl").css("opacity", 1), IVtryAnim.setUserControlOn(!1)
            },
            p = function(t) {
                Math.abs(t) > vtryConfig.maxRotationDegree || IVtryAnim.setUserControlRotationY(t)
            }
    }(window.vtryTryOn = window.vtryTryOn || {}, jQuery),
    function(t, e, i) {
        var r = null;
        e(document).ready(function() {
            e("#divVersion").html("V " + vtryConfig.version), e(window).resize(o), n(), vtryApi.start()
        });
        var o = function() {
                vtryLog.log("resize event received."), null == r && (r = setTimeout(function() {
                    if (0 == vtryTryOn.startProcessComplete && (r = null, o()), vtryLog.log("resize started"), vtryAnim.pause(), n(), t.curModel) {
                        var e = vtryTryOn.start(t.curModel);
                        if (null == e) return;
                        e.then(function() {
                            r = null, vtryLog.log("resize finished")
                        })
                    } else vtryLog.log("resize finished"), r = null
                }, 100))
            },
            n = function() {
                var t = e(window).width();
                e(window).height();
                e("#divWipeForehead").css("width", t + "px"), e("#divWipeJaw").css("width", t + "px"), e("#divWipeBG").css("width", t + "px"), e("#divTopRightAction").css("left", e(window).width() - 64 + "px"), e("#logoText").css("margin-left", e(window).width() / 2 - 50 + "px"), e("#divWipeBG").css("width", e(window).width() + "px"), e("#divWipeBG").css("height", e(window).height() + "px"), a()
            },
            a = function() {
                e("#canvasTryOnWebGl").replaceWith('<canvas id="canvasTryOnWebGl" style="position:absolute; -webkit-transform:translateZ(-1000px);"></canvas>'), e("#canvasTryOnWebGl").attr("width", e(window).width()), e("#canvasTryOnWebGl").attr("height", e(window).height()), e("#canvasVertices").attr("width", e(window).width()), e("#canvasVertices").attr("height", e(window).height())
            };
        t.onSourceImageLoaded = function(t) {
            vtryLog.log("source image loaded"), vtryViewState.setState(vtryViewState.DETECT), vtryDetect.start(t)
        }, t.onAutoFaceFeatureDetectionComplete = function(e, i) {
            vtryLog.log("auto face feature detection completed. success detection: " + i), vtryLog.log("vertices detected : " + JSON.stringify(e[27])), t.curModel.setVertices(e.slice()), t.curModel.isSystemModel = !1, t.curModel.pd = 67, i = !1, i ? (vtryLog.log("go to try on directly from succ detection."), vtryProfile.setShowingUserProfile(), vtryViewState.setState(vtryViewState.TRY_ON), a(), setTimeout(function() {
                vtryTryOn.start(t.curModel)
            }, 200), vtryLog.log("vertices detected & processed: " + JSON.stringify(t.curModel.getDetectedVertices()[27]))) : (vtryViewState.setState(vtryViewState.CALIBRATE, !1), vtryCalibrate.start(t.curModel, !1))
        }, t.onStartFineCalibration = function() {
            vtryViewState.setState(vtryViewState.CALIBRATE, !0), vtryCalibrate.start(t.curModel, !0)
        }, t.onCalibrationComplete = function(e) {
            t.curModel.setVertices(e), t.curModel.isSystemModel = !1, t.curModel.pd = 65, vtryLog.log("calibration completed."), vtryProfile.setShowingUserProfile(), vtryViewState.setState(vtryViewState.TRY_ON), a(), setTimeout(function() {
                vtryTryOn.start(t.curModel)
            }, 200)
        }
    }(window.vtryCtrl = window.vtryCtrl || {}, jQuery),
    function(t, e, i) {
        var r = !1,
            o = 0,
            n = [];
        t.start = function() {
            r || a()
        };
        var a = function() {
                e("#divThumbContainer").empty(),
                e.getJSON("get_folders.php?" + (new Date).getTime(), function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i];
                        n.push(o);
                        var a = e("<img class='imgThumb'/>"),
                            // append_a=e("<div>"),
                            b = e("<div class='modelname'>"+"&nbsp&nbsp&nbsp"+o.modelName+"</div><br/>"),
                            h = 100,
                            c = o.frontH * h / o.frontW;
                        // append_a.appendTo("#divThumbContainer"),
                        b.attr("data-model-index", i).appendTo('#divThumbContainer'),

                        a.attr("src", o.thumbImgUrl).attr("data-model-index", i).appendTo("#divThumbContainer"),
                         a.width(h*1.8),
                          a.height(c*1.3),
                           a.click(s),a.click(clicks)
                    }
                    e("#divThumbContainer").css("visibility", "visible"), r = !0, l(0)
                })
            },
            s = function() {
                vtryViewState.curState == vtryViewState.TRY_ON && (o = e(this).attr("data-model-index"), l(o))
            },
            l = function(t) {
                o = t, e(".imgThumb").removeClass("imgThumbSelect"), e(".imgThumb[data-model-index='" + t + "']").addClass("imgThumbSelect"), vtryApi.arg.model = o, vtryGlass.setGlassesModel(n[t])
            },
            clicks = function() {
                o = e(this).attr("data-model-index"), ll(o)
            },
            ll = function(t) {
                o = t, e(".modelname").removeClass("modelnameselect"), e(".modelname[data-model-index='" + t + "']").addClass("modelnameselect")
            }
    }(window.vtryDemo = window.vtryDemo || {}, jQuery);