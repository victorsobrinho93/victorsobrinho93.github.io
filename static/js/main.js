// document.getElementById("dannyBrown").addEventListener("click", function () {
//     var iframe = document.createElement("iframe");
//     iframe.src = "https://open.spotify.com/embed/album/3A1vnUJDPz0xYMful9pO4I?utm_source=generator&theme=0";
//     iframe.style.width = '100%';
//     iframe.style.height = '100%';

//     // iframe.width =
//     //     iframe.height = 100 %;
//     var container = document.getElementById("atrocity");
//     container.appendChild(iframe);
// });

// var atrocityContainer = document.getElementById("atrocity");
// var atrocityIframe = null;

// document.getElementById("dannyBrown").addEventListener("click", function () {
//     if (atrocityIframe) {
//         atrocityContainer.removeChild(atrocityIframe);
//         atrocityIframe = null;
//     } else {

//     }
// })

function SpotifyEmbed(iFrameContainer) {
    // this.button = buttonId;
    // this.container = containerId;
    this.container = document.getElementById(iframeContainer);
    console.log(this.container);
    this.iframe = null;
    this.albumInfo = container.querySelector(".album-info");
    console.log(`albumInfo ${this.albumInfo}`)
    this.button = container.querySelector(".media-button");
    this.appendChild = function (childElement) {
        this.container.appendChild(childElement);
    };
    this.removeChild = function (childElement) {
        this.container.removeChild(childElement);
    };
    this.styleToggle = function (infoBlock) {
        if (infoBlock.style === "none") {
            infoBlock.style = "block";
        } else {
            infoBlock.style = "none"
        }
    }

    this.button.addEventListener("click", function () {
        // alert("Let's test this??")
        if (this.iframe) {
            this.removeChild(this.iframe);
            this.iframe = null;
            document.getElementById(albumInfo).style.display = "block";
            // this.albumInfo.style.display = 'inline-block';

        } else {
            this.iframe = document.createElement("iframe");
            this.iframe.src = container.querySelector(".embed-responsive").getAttribute("src");
            this.iframe.style.width = '100%';
            this.iframe.style.height = '100%';
            this.appendChild(this.iframe);
            document.getElementById(albumInfo).style.display = "none";
        }
    })

}

var dannyBrownAtrocity = SpotifyEmbed("atrocity")