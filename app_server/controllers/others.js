/* GET homepage */
const about = (req, res) => {
  res.render('generic-text', { title: 'About LOC8r' });
};
module.exports = {
 about
};