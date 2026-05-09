document.addEventListener('DOMContentLoaded', () => {

    // Real Data for Yaowu Xu's Portfolio
    const codecs = [
        {
            year: 2000,
            name: "VP3",
            type: "Open Source Pioneer",
            description: "The codec that started it all. Released by On2, it later became the foundation for Theora and the open-source video movement.",
            specs: ["Legacy: Basis for Theora", "License: Open Source (2001)", "Focus: Low Complexity"]
        },
        {
            year: 2001,
            name: "VP4",
            type: "Performance Leap",
            description: "A major update to the TrueMotion architecture, offering 50% better compression than its predecessor.",
            specs: ["Improvement: 50% vs VP3", "Focus: Image Quality", "Status: Proprietary"]
        },
        {
            year: 2003,
            name: "VP5",
            type: "Broadcast Quality",
            description: "Designed to compete with MPEG-2/DVD quality at significantly lower bitrates. A key step towards internet video.",
            specs: ["Target: DVD Quality", "Bitrate: <600kbps", "Feature: Range Coding"]
        },
        {
            year: 2003,
            name: "VP6",
            type: "The Flash Era",
            description: "The engine behind the early video internet. Adopted by Adobe Flash, it powered the video revolution on the web.",
            specs: ["Adoption: Adobe Flash Video", "Quality: HD Support", "Usage: Ubiquitous Web Video"]
        },
        {
            year: 2005,
            name: "VP7",
            type: "High Efficiency",
            description: "Outperforming H.264 in contemporary tests, VP7 set new standards for compression efficiency and speed.",
            specs: ["Performance: >AVC/H.264", "Focus: Video Conferencing", "Complexity: Low Decoder CPU"]
        },
        {
            year: 2008,
            name: "VP8",
            type: "WebM Standard",
            description: "Released by Google as a royalty-free open standard. The core of the WebM project and WebRTC communication.",
            specs: ["Release: Royalty-Free", "Format: WebM", "Use Case: WebRTC / YouTube"]
        },
        {
            year: 2013,
            name: "VP9",
            type: "4K Streaming",
            description: "The standard for high-definition streaming. Reducing bitrates by 50% over VP8, enabling 4K on YouTube.",
            specs: ["Res: 4K/UHD", "Efficiency: +50% vs VP8", "Depth: 10/12-bit Color"]
        },
        {
            year: 2018,
            name: "AV1",
            type: "Next-Gen Standard",
            description: "Developed by the Alliance for Open Media. The royalty-free standard delivering massive gains over HEVC/VP9.",
            specs: ["Alliance: AOMedia", "Gain: +30% vs VP9/HEVC", "Feature: Screen Content Coding"]
        },
        {
            year: 2026,
            name: "AV2",
            type: "Future Horizon",
            description: "The future of video coding. Targeting significant efficiency gains for 8K, VR, and beyond.",
            specs: ["Target: AI/Neural Tools", "Focus: Immersive Media", "Status: In Development"]
        }
    ];

    const timelineContainer = document.querySelector('.timeline-container');
    const modal = document.getElementById('codec-modal');
    const closeModal = document.querySelector('.close-modal');

    // 1. Render Timeline
    codecs.forEach((codec, index) => {
        const item = document.createElement('div');
        item.classList.add('timeline-item');

        // Stagger animation delay slightly
        item.style.transitionDelay = `${index * 0.1}s`;

        item.innerHTML = `
            <div class="timeline-content" data-index="${index}">
                <div class="timeline-year">${codec.year}</div>
                <h3 class="codec-name">${codec.name}</h3>
                <p class="codec-snippet">${codec.description}</p>
                <div class="tag" style="display:inline-block; margin-top:10px; font-size:0.7rem;">${codec.year}</div>
            </div>
            <div class="timeline-marker"></div>
        `;

        timelineContainer.appendChild(item);
    });

    // 2. Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // 3. Modal Logic
    document.querySelectorAll('.timeline-content').forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-index');
            const data = codecs[index];

            document.getElementById('modal-title').textContent = data.name;
            document.getElementById('modal-year').textContent = data.year;
            document.getElementById('modal-type').textContent = data.type;
            document.getElementById('modal-desc').textContent = data.description;

            const specsList = document.getElementById('modal-specs');
            specsList.innerHTML = '';
            data.specs.forEach(spec => {
                const li = document.createElement('li');
                li.textContent = spec;
                specsList.appendChild(li);
            });

            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // 4. Footer Date
    document.getElementById('year').textContent = new Date().getFullYear();
});
