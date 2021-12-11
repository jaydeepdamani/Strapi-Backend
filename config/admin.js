module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cdbc02400b62efc1a2b815640896a895'),
  },
});
