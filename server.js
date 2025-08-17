// Backend Server - Node.js with Express
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, '../public')));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Contact form rate limiting
const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 contact form submissions per hour
    message: 'Too many contact form submissions, please try again later.'
});

// Email configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Get portfolio data
app.get('/api/portfolio', (req, res) => {
    const portfolioData = {
        personal: {
            name: 'Gugulothu Venu Nayak',
            title: 'Full Stack Developer & Problem Solver',
            specialization: 'Web Development',
            email: 'venunayak.dev@gmail.com',
            phone: '+91 9876543210',
            location: 'Hyderabad, India',
            bio: 'Full Stack Developer passionate about creating innovative web solutions and solving complex problems.'
        },
        education: [
            {
                degree: 'Bachelor of Technology in Computer Science',
                institution: 'VNR Vignana Jyothi Institute of Engineering & Technology',
                duration: '2020 - 2024',
                grade: 'CGPA: 8.5/10'
            },
            {
                degree: 'Intermediate (MPC)',
                institution: 'Narayana Junior College',
                duration: '2018 - 2020',
                grade: 'Percentage: 92%'
            }
        ],
        skills: [
            { name: 'React & TypeScript', level: 90 },
            { name: 'Node.js & Express', level: 85 },
            { name: 'MongoDB & SQL', level: 80 },
            { name: 'Python & Django', level: 75 },
            { name: 'AWS & Docker', level: 70 },
            { name: 'Git & DevOps', level: 85 }
        ],
        projects: [
            {
                id: 1,
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin panel.',
                technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
                githubUrl: 'https://github.com/venunayak/ecommerce-platform',
                liveUrl: 'https://ecommerce-demo.venunayak.dev',
                imageUrl: '/images/project1.jpg',
                featured: true
            },
            {
                id: 2,
                title: 'Task Management App',
                description: 'A collaborative task management application built with React and Firebase. Features real-time updates, team collaboration, and progress tracking.',
                technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
                githubUrl: 'https://github.com/venunayak/task-manager',
                liveUrl: 'https://taskmanager.venunayak.dev',
                imageUrl: '/images/project2.jpg',
                featured: true
            },
            {
                id: 3,
                title: 'Data Analytics Dashboard',
                description: 'Interactive dashboard for data visualization and analytics built with React and D3.js. Includes real-time charts, filters, and export functionality.',
                technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
                githubUrl: 'https://github.com/venunayak/analytics-dashboard',
                liveUrl: 'https://analytics.venunayak.dev',
                imageUrl: '/images/project3.jpg',
                featured: true
            }
        ],
        experience: [
            {
                id: 1,
                position: 'Full Stack Developer',
                company: 'Tech Solutions Inc.',
                duration: '2024 - Present',
                description: 'Leading development of web applications using React, Node.js, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
                technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript']
            },
            {
                id: 2,
                position: 'Frontend Developer Intern',
                company: 'Digital Innovations Ltd.',
                duration: '2023 - 2024',
                description: 'Developed responsive web interfaces and collaborated on user experience improvements. Gained hands-on experience with modern frontend frameworks and tools.',
                technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
            },
            {
                id: 3,
                position: 'Web Development Trainee',
                company: 'CodeCraft Academy',
                duration: '2022 - 2023',
                description: 'Intensive training program focused on full-stack web development. Built multiple projects and learned industry best practices.',
                technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
            }
        ],
        social: {
            github: 'https://github.com/venunayak',
            linkedin: 'https://linkedin.com/in/venunayak',
            twitter: 'https://twitter.com/venunayak',
            instagram: 'https://instagram.com/venunayak'
        }
    };

    res.json(portfolioData);
});

// Contact form submission
app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format'
            });
        }

        // Email to portfolio owner
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.OWNER_EMAIL || process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #00ffff;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        This message was sent from your portfolio contact form.
                    </p>
                </div>
            `
        };

        // Auto-reply to sender
        const autoReplyOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting me!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #00ffff;">Thank You for Your Message!</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
                    
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3>Your Message Summary:</h3>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
                    </div>
                    
                    <p>I typically respond within 24 hours. If you need to reach me urgently, you can also connect with me on:</p>
                    <ul>
                        <li>LinkedIn: <a href="https://linkedin.com/in/venunayak">linkedin.com/in/venunayak</a></li>
                        <li>GitHub: <a href="https://github.com/venunayak">github.com/venunayak</a></li>
                    </ul>
                    
                    <p>Best regards,<br>Gugulothu Venu Nayak</p>
                    
                    <p style="color: #666; font-size: 12px; margin-top: 30px;">
                        This is an automated response. Please do not reply to this email.
                    </p>
                </div>
            `
        };

        // Send emails
        await transporter.sendMail(ownerMailOptions);
        await transporter.sendMail(autoReplyOptions);

        // Log contact for analytics (you could save to database here)
        console.log(`New contact from ${name} (${email}): ${subject}`);

        res.json({
            success: true,
            message: 'Message sent successfully! I\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

// Get resume/CV
app.get('/api/resume', (req, res) => {
    const resumePath = path.join(__dirname, '../public/resume.pdf');
    res.download(resumePath, 'Gugulothu_Venu_Nayak_Resume.pdf', (err) => {
        if (err) {
            console.error('Resume download error:', err);
            res.status(404).json({
                success: false,
                message: 'Resume not found'
            });
        }
    });
});

// Analytics endpoint (for tracking portfolio views)
app.post('/api/analytics/pageview', (req, res) => {
    try {
        const { page, userAgent, timestamp } = req.body;
        const ip = req.ip || req.connection.remoteAddress;
        
        // Here you could save analytics data to a database
        console.log(`Page view: ${page} from ${ip} at ${timestamp}`);
        
        res.json({ success: true });
    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).json({ success: false });
    }
});

// Newsletter subscription (optional feature)
app.post('/api/newsletter', (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Valid email is required'
            });
        }

        // Here you could save email to a newsletter database
        console.log(`Newsletter subscription: ${email}`);
        
        res.json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });
    } catch (error) {
        console.error('Newsletter error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to subscribe. Please try again.'
        });
    }
});

// Serve static files (for production)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Email service: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;