import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '1mb' }));

// Ensure data storage directory exists for genuine enquiries persistence
const DATA_DIR = path.resolve(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(ENQUIRIES_FILE)) {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
} catch (err) {
  console.error('Failed to initialize data directory:', err);
}

// API Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Imaad International Tours & Travels API',
    timestamp: new Date().toISOString()
  });
});

// Real Contact & Enquiry Submission Handler
app.post('/api/enquiries', (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      packageType = 'General Enquiry',
      preferredDepartureDate = '',
      travelersCount = 1,
      message = '',
      sourcePage = '/'
    } = req.body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid full name (minimum 2 characters).'
      });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid telephone or WhatsApp contact number.'
      });
    }

    if (email && (typeof email !== 'string' || !email.includes('@'))) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    // Sanitization
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedPhone = phone.trim().slice(0, 30);
    const sanitizedEmail = email ? email.trim().slice(0, 100) : '';
    const sanitizedPackage = String(packageType).trim().slice(0, 100);
    const sanitizedDate = String(preferredDepartureDate).trim().slice(0, 50);
    const sanitizedCount = Math.max(1, Math.min(50, Number(travelersCount) || 1));
    const sanitizedMessage = String(message).trim().slice(0, 2000);
    const sanitizedSource = String(sourcePage).trim().slice(0, 100);

    // Reference ID generation
    const referenceId = `IMD-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEnquiry = {
      referenceId,
      name: sanitizedName,
      phone: sanitizedPhone,
      email: sanitizedEmail,
      packageType: sanitizedPackage,
      preferredDepartureDate: sanitizedDate,
      travelersCount: sanitizedCount,
      message: sanitizedMessage,
      sourcePage: sanitizedSource,
      createdAt: new Date().toISOString(),
      status: 'RECEIVED'
    };

    // Store inquiry in server-side file
    let enquiries = [];
    if (fs.existsSync(ENQUIRIES_FILE)) {
      try {
        const fileContent = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
        enquiries = JSON.parse(fileContent);
      } catch {
        enquiries = [];
      }
    }
    enquiries.unshift(newEnquiry);
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');

    console.log(`[ENQUIRY_SAVED] Ref: ${referenceId} from ${sanitizedName} (${sanitizedPhone}) for ${sanitizedPackage}`);

    return res.status(201).json({
      success: true,
      referenceId,
      message: 'Your enquiry has been securely received by Imaad International Tours & Travels. Our representative will contact you shortly.',
      data: {
        referenceId,
        name: sanitizedName,
        packageType: sanitizedPackage,
        submittedAt: newEnquiry.createdAt
      }
    });
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again or reach us via WhatsApp.'
    });
  }
});

// Serve public directory for static assets (images, manifest, robots, sitemap)
app.use(express.static(path.resolve(__dirname, 'public')));

// Configure Vite middleware or static serving
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Imaad International Tours & Travels server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
