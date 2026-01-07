const productDatabase = {
    "99": {
        title: "NEURAL-X",
        price: "$599.00",
        desc: "Next-gen spatial audio and 8K visual immersion.",
        s1: "210° FOV",
        s2: "144Hz",
        img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600"
    },
    "101": {
        title: "CYBER-GLASS",
        price: "$299.00",
        desc: "Ultra-lightweight AR frames for daily navigation.",
        s1: "110° FOV",
        s2: "90Hz",
        img: "https://images.unsplash.com/photo-1576633592471-96e62c5f74df?w=600"
    }
};

function init() {
    const params = new URLSearchParams(window.location.search);
    const sku = params.get('sku') || "99";
    const data = productDatabase[sku];

    if(data) {
        document.getElementById('p-title').innerText = data.title;
        document.getElementById('p-desc').innerText = data.desc;
        document.getElementById('p-price').innerText = data.price;
        document.getElementById('p-img').src = data.img;
        document.getElementById('stat-val-1').innerText = data.s1;
        document.getElementById('stat-val-2').innerText = data.s2;
        document.getElementById('wa-link').href = `https://wa.me/1234567890?text=I'm inquiring about SKU:${sku}`;
    }
}

function triggerScan() {
    alert("Neural Link Established. Check your WhatsApp for the manual!");
}

window.onload = init;
