module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '849b477342cbe3584d503516306367ed'),
  },
});
