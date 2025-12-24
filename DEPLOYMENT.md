# Vercel Deployment Guide

## Prerequisites
1. Vercel account (sign up at https://vercel.com)
2. GitHub repository pushed to GitHub
3. Vercel CLI installed (optional but recommended)

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Connect GitHub Repository
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository: `Sandeep-aegula/Portfolio_2`
4. Vercel will auto-detect it's a Next.js project

### Step 2: Configure Project Settings
- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install` (default)
- **Development Command**: `npm run dev` (default)

### Step 3: Environment Variables (if needed)
Add these in Vercel Dashboard → Settings → Environment Variables:
- `NEXT_TELEMETRY_DISABLED=1`
- `NODE_ENV=production`

### Step 4: Deploy
Click "Deploy" - Vercel will automatically build and deploy your site!

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
# From your project directory
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project's name? portfolio
# - In which directory is your code located? ./
```

### Step 4: Production Deployment
```bash
vercel --prod
```

## Method 3: Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = Production deployment
- Every push to other branches = Preview deployment
- Pull requests get automatic preview deployments

## Post-Deployment Checklist

### 1. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

### 2. Performance Monitoring
- Check Lighthouse scores in Vercel Analytics
- Monitor Core Web Vitals
- Review function execution times

### 3. Environment-Specific Settings
- Review and adjust environment variables
- Test different device types
- Verify animations work smoothly

## Deployment Configuration Files

The following files have been configured for optimal Vercel deployment:

- `vercel.json` - Vercel configuration
- `next.config.mjs` - Next.js optimizations
- `.env.production` - Production environment variables

## Expected Deployment URL Structure

- Production: `https://portfolio-your-username.vercel.app`
- Custom domain: `https://your-domain.com` (if configured)
- Preview deployments: `https://portfolio-git-branch-username.vercel.app`

## Troubleshooting

### Build Fails
- Check Next.js version compatibility
- Verify all dependencies are in package.json
- Review build logs in Vercel dashboard

### Performance Issues
- Enable Vercel Analytics
- Check bundle size analyzer
- Review Core Web Vitals

### Environment Variables
- Ensure all required vars are set in Vercel dashboard
- Prefix client-side vars with `NEXT_PUBLIC_`
- Redeploy after adding new variables

## Optimization Features Enabled

✅ Turbopack for faster builds
✅ Image optimization with WebP/AVIF
✅ Automatic code splitting
✅ Static page generation
✅ Performance optimizations
✅ CSS optimization
✅ Package import optimization