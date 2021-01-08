/* GET 'home' page */
const homelist = (req, res) => {
  res.render('locations-list',
    {
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: {
        title: 'Loc8r',
        strapLine: 'Find places to work with wifi near you!'
      },
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [
        {
          name: 'Starcups',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '100m'
        },
        {
          name: 'Starbuns',
          address: '345 Sweet St, Middle Earth, USA',
          rating: 4,
          facilities: ['Hot Coffee', 'Snacks', 'Takeout'],
          distance: '500m'
        },
        {
          name: 'Monster Coffee',
          address: '567 Dragon St, Kansas City, Mo 64111',
          rating: 2,
          facilities: ['Hot Coffee', 'Cake'],
          distance: '1.2km'
        }
      ]
    }
  );
};


/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};