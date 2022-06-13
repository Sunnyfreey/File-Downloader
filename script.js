const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempURL = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempURL;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempURL);
        downloadBtn.innerText = "Download File";
    }).catch(() => {
        alert("Failed to download file!");
    });
}
