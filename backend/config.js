export const config = {
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/UserDataForDiceGame',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  port: process.env.PORT || 5000,
  allowedOrigins: process.env.NODE_ENV === 'production'
    ? ['https://your-frontend-domain.com']
    : ['http://localhost:5173', 'http://localhost:3000']
}; 