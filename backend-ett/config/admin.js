module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '778f7d2867459da1ba019edd1c5dc095'),
  },
});
