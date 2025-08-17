# Portfolio Backend

This is the backend server for Gugulothu Venu Nayak's portfolio website, built with Node.js and Express.

## Features

- **Contact Form API**: Handle contact form submissions with email notifications
- **Portfolio Data API**: Serve portfolio information (projects, experience, skills)
- **File Serving**: Serve resume and other static files
- **Rate Limiting**: Protect against spam and abuse
- **Email Service**: Automated email responses using Nodemailer
- **Security**: Helmet.js for security headers, CORS configuration
- **Analytics**: Optional page view tracking

## API Endpoints

### GET `/api/health`
Health check endpoint
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development"
}
```

### GET `/api/portfolio`
Get complete portfolio data
```json
{
  "personal": { ... },
  "education": [ ... ],
  "skills": [ ... ],
  "projects": [ ... ],
  "experience": [ ... ],
  "social": { ... }
}
```

### POST `/api/contact`
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Collaboration Opportunity",
  "message": "Hello, I'd like to discuss..."
}
```

### GET `/api/resume`
Download resume PDF file

### POST `/api/analytics/pageview`
Track page views (optional)
```json
{
  "page": "/",
  "userAgent": "Mozilla/5.0...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Setup

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configurations
   ```

3. **Email Setup (Gmail)**
   - Enable 2-factor authentication on Gmail
   - Generate an app password
   - Add to EMAIL_PASS in .env file

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Run Production Server**
   ```bash
   npm start
   ```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment (development/production) | No |
| `PORT` | Server port (default: 3001) | No |
| `FRONTEND_URL` | Frontend URL for CORS | No |
| `EMAIL_USER` | Gmail username | Yes |
| `EMAIL_PASS` | Gmail app password | Yes |
| `OWNER_EMAIL` | Email to receive contact forms | No |
| `MONGODB_URI` | MongoDB connection string | No |
| `JWT_SECRET` | JWT secret for authentication | No |

## Security Features

- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing configuration
- **Rate Limiting**: Prevent spam and abuse
- **Input Validation**: Validate all user inputs
- **Email Validation**: Regex-based email validation

## Email Configuration

The backend uses Gmail SMTP for sending emails. To set up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this app password in the `EMAIL_PASS` environment variable

## Rate Limiting

- **General API**: 100 requests per 15 minutes per IP
- **Contact Form**: 5 submissions per hour per IP

## File Structure

```
backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── .env.example       # Environment variables template
├── README.md          # This file
└── routes/            # API routes (optional expansion)
    ├── contact.js
    ├── portfolio.js
    └── analytics.js
```

## Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage
```

## Deployment

### Heroku
```bash
# Create Heroku app
heroku create portfolio-backend

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password

# Deploy
git push heroku main
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Docker
```bash
# Build image
docker build -t portfolio-backend .

# Run container
docker run -p 3001:3001 --env-file .env portfolio-backend
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details