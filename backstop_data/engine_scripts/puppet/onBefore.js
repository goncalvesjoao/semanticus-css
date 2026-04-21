const { server } = require('../../../scripts/server');

const PORT = process.env.PORT || 3000;

module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);

  if (!server.listening) {
    server.listen(PORT, () => {
      console.log(`Demo server running at http://localhost:${PORT}/`);
    });
    server.unref();
  }
};
