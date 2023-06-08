module.exports = {
    launch: {
      headless: true,
      slowMo: 100,
    },
    server: {
      command: 'npx http-server -p 4444',
      port: 4444,
      launchTimeout: 5000,
      debug: true,
    },
    browserContext: 'default',
  };
  