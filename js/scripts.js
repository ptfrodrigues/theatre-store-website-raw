function initializeVideoOverlay(thumbnailSelector, overlaySelector, videoSelector, closeSelector) {
    const videoThumbnail = document.querySelector(thumbnailSelector);
    const overlay = document.querySelector(overlaySelector);
    const overlayVideo = document.querySelector(videoSelector);
    const closeOverlayButton = document.querySelector(closeSelector);

    videoThumbnail.addEventListener('click', () => {
        overlay.style.display = 'flex';
        overlayVideo.play();
    });

    closeOverlayButton.addEventListener('click', () => {
        overlay.style.display = 'none';
        overlayVideo.pause();
        overlayVideo.currentTime = 0;
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            overlayVideo.pause();
            overlayVideo.currentTime = 0;
        }
    });
}

initializeVideoOverlay(
    '.r3-video-thumbnail',
    '#r3-video-overlay',
    '#r3-overlay-video',
    '#r3-close-overlay'
);

function initializeCustomCursor(thumbnailSelector, cursorImagePath) {
    const videoThumbnail = document.querySelector(thumbnailSelector);
    let customCursor;

    function isLargeScreen() {
        return window.innerWidth >= 700;
    }

    if (isLargeScreen()) {
        videoThumbnail.addEventListener('mouseenter', createCustomCursor);
        videoThumbnail.addEventListener('mouseleave', removeCustomCursor);
    }

    window.addEventListener('resize', () => {
        if (isLargeScreen() && !videoThumbnail.hasEventListener('mouseenter', createCustomCursor)) {
            videoThumbnail.addEventListener('mouseenter', createCustomCursor);
            videoThumbnail.addEventListener('mouseleave', removeCustomCursor);
        } else if (!isLargeScreen()) {
            videoThumbnail.removeEventListener('mouseenter', createCustomCursor);
            videoThumbnail.removeEventListener('mouseleave', removeCustomCursor);
        }
    });

    function createCustomCursor() {
        customCursor = document.createElement('img');
        customCursor.src = cursorImagePath;
        customCursor.classList.add('r3-play-cursor');
        document.body.appendChild(customCursor);

        videoThumbnail.addEventListener('mousemove', moveCursor);
    }
    function removeCustomCursor() {
        if (customCursor) {
            customCursor.remove();
            customCursor = null;
        }
        videoThumbnail.removeEventListener('mousemove', moveCursor);
    }
    function moveCursor(event) {
        if (customCursor) {
            customCursor.style.left = `${event.pageX + 10}px`;
            customCursor.style.top = `${event.pageY + 10}px`;
        }
    }
}

initializeCustomCursor('.r3-video-thumbnail', './assets/icons/play.png');


document.querySelectorAll('[id^="r3-play-card-"] img').forEach(image => {
    image.style.cursor = 'pointer';
    image.addEventListener('click', () => {
        const container = image.closest('[id^="r3-play-card-"]');
        const url = container.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});

document.querySelectorAll('[id^="r3-director-card-"] img').forEach(image => {
    image.style.cursor = 'pointer';
    image.addEventListener('click', () => {
        const container = image.closest('[id^="r3-director-card-"]');
        const url = container.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
});
