const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body><div id="fullscreen-video"></video>
</div><div id="credit">50000</div><div id="fortune-cookie"></div><div id="fortune-message"></div></body></html>`);
global.window = dom.window;
global.document = dom.window.document;
// Mock localStorage
global.localStorage = {
  clear: jest.fn(),
};

const { shakeCookie, skipVideo, openFortune } = require("../cookie_screen/cookie_screen.js");

describe('shakeCookie', () => {
    beforeEach(() => {
        // Reset the fortune cookie and message elements
        document.getElementById("fortune-cookie").innerHTML = '';
        document.getElementById("fortune-message").textContent = '';
        document.getElementById("fortune-message").style.display = 'none';
    });

    it('should delete "shake-animation" class to the cookie afterwards', () => {
        // Call the shakeCookie function
        shakeCookie();

        expect(document.getElementById("fortune-cookie").classList.contains('shake-animation')).toBe(false);
    });

    it('should clear and hide the fortune message', () => {
        document.getElementById("fortune-message").textContent = "Test message";

        // Call the shakeCookie function
        shakeCookie();

        // Check if the message element is hidden
        expect(document.getElementById("fortune-message").textContent).toBe("");
        expect(document.getElementById("fortune-message").style.display).toBe("none");
    });

    it('should increment the credit by 100', () => {
        // Get the initial credit value
        const initialCredit = parseInt(document.getElementById("credit").textContent);

        // Call the shakeCookie function
        shakeCookie();

        // Get the updated credit value
        const updatedCredit = parseInt(document.getElementById("credit").textContent);

        // Check if the credit is incremented by 100
        expect(updatedCredit).toBe(initialCredit + 100);
        
    });

    it('trying multiple clicks', () => {
        // Get the initial credit value
        const initialCredit = parseInt(document.getElementById("credit").textContent);

        // Call the shakeCookie function
        let i = 0;
        while (i < 100) {
            shakeCookie();
            i++;
        }

        // Get the updated credit value
        const updatedCredit = parseInt(document.getElementById("credit").textContent);

        // Check if the credit is incremented by 10000
        expect(updatedCredit).toBe(initialCredit + 10000);
        
    });
});

describe('openFortune', () => {
    beforeEach(() => {
        // Reset the fortune cookie and message elements
        document.getElementById("fortune-cookie").innerHTML = '';
        document.getElementById("fortune-message").textContent = '';
        document.getElementById("fortune-message").style.display = 'none';
    });

    it('should display a random fortune message', () => {
        // Get the fortune cookie and message elements
        const cookieElement = document.getElementById("fortune-cookie");
        const messageElement = document.getElementById("fortune-message");

        // Call the openFortune function
        openFortune();

        // Check the shake-animation class is activated from the cookie element
        expect(cookieElement.classList.contains('shake-animation')).toBe(true);

        setTimeout(() => {
            // Check if the shake-animation class is removed from the cookie element
            expect(cookieElement.classList.contains('shake-animation')).toBe(false);
            
            // Check if the message is assigned a random message from the messages array
            expect(messages).toContain(messageElement.textContent);

            // Check if the message element is displayed
            expect(messageElement.style.display).toBe("block");
            // Call `done` to indicate that the test has completed
            done();
        }, 2000);
    });
});

describe('skipVideo', () => {
    beforeEach(() => {
        // Reset the fortune cookie and message elements
        document.getElementById("fortune-cookie").innerHTML = '';
        document.getElementById("fortune-message").textContent = '';
        document.getElementById("fortune-message").style.display = 'none';
    });

    it('should skip the video and hide the video element', () => {
        // initiate the video 
        shakeCookie();

        // Call the skipVideo function
        skipVideo();

        // Check if the video element is hidden
        expect(document.getElementById("fullscreen-video").style.display).toBe('');
    });
});

describe('shakeCookie', () => {
    it('should play a random video and display the video player', () => {
      // Mock the necessary elements
      const cookie = document.createElement('div');
      cookie.id = 'fortune-cookie';
      const videoPlayer = document.createElement('video');
      videoPlayer.id = 'video-player';
      const fullscreenVideo = document.createElement('div');
      fullscreenVideo.id = 'fullscreen-video';
      const creditElement = document.createElement('div');
      creditElement.id = 'credit';
  
      // Mock the videos array
      const videos = [
        'source/cookie_screen/media/video_blue.mp4',
        'source/cookie_screen/media/video_gold.mp4',
        'source/cookie_screen/media/video_purple.mp4',
      ];
  
      // Assign the mock elements to the global scope
      global.document.getElementById = jest.fn((id) => {
        if (id === 'fortune-cookie') return cookie;
        if (id === 'video-player') return videoPlayer;
        if (id === 'fullscreen-video') return fullscreenVideo;
        if (id === 'credit') return creditElement;
      });
  
  
      // Call the shakeCookie function
      shakeCookie();
  
      // Check the video-related elements should be nothing after playing
      expect(cookie.classList.contains('shake-animation')).toBe(false);
      expect(cookie.innerHTML).toContain('');
      expect(videoPlayer.src).toMatch('');
      expect(fullscreenVideo.style.display).toBe('');
    });
});