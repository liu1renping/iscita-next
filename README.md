This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Project Dev

- Web app developed for [iscit.org](https://iscita.org/)
- Dockerised for deployment at Google Cloud Run

## Local Dev

First, make sure you are using Node.js >= 22.0.0 (the project ships an `.nvmrc` that pins 22.11.0):

```bash
nvm use 22.11.0
# or install the pinned version if you do not have it yet
nvm install 22.11.0
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment variables

Set the following in `.env.local` (not committed) and `.env.production` (used for deploys):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_COMPANY_NAME=ISCIT Australia
NEXT_PUBLIC_COMPANY_EMAIL=iscitaustralia@gmail.com
```

the env vars are processed in @/lib/constants.ts

```
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iscita.org";
export const COMPANY_NAME =
  process.env.NEXT_PUBLIC_COMPANY_NAME ?? "ISCIT Australia";
export const COMPANY_EMAIL =
  process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? "iscitaustralia@gmail.com";
```

these processed constants, `SITE_URL, COMPANY_NAME, COMPANY_EMAIL`, are used in the codes. These values power metadata and the contact page/footer, so updating them keeps branding consistent across environments.

## Push to github

1. setup git in project directory

```bash
git init && git add . && git commit -m "Initial commit"
```

2. Create an empty repo on GitHub (no README/license),
3. copy its HTTPS/SSH **GIT_URL** `https://github.com/liu1renping/iscita-next-gc.git`
4. add **GIT_URL** to `git remote`
5. change local user to `liu1renping@gmail.com`

```bash
# To change it for just this project:
git config user.email "liu1renping@gmail.com"
# To change it globally for all your projects:
git config --global user.email "liu1renping@gmail.com"
```

5. and **push**

```bash
git remote add origin https://github.com/liu1renping/iscita-next-gc.git
git push -u origin main
```

## Docker container

1. Containerized the Next.js project app:
   - add `Dockerfile`
   - add `.dockerignore`, with entries: `node_modules .next/cache`, etc.

2. Local verifications (optional)

```bash
npm run lint
npm run build
docker build -t iscitaus-img
docker run -p 3000:3000 iscitaus-img
```

# Vercel Deployment (Sydney, Australia)

## Prerequisites

Create a [Vercel account](https://vercel.com/signup) (free tier available)

```bash
npm install -g vercel
```

## Initial Deployment

Deploy via Vercel Dashboard (Recommended)

1. **Connect your GitHub repository:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository (`iscita-next-gc` or your repo name)
   - Vercel will automatically detect it's a Next.js project

2. **Configure the project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

3. **Set Environment Variables:**
   Click on "Environment Variables" and add:
   - `NEXT_PUBLIC_SITE_URL` = `https://iscita.org` (or your production URL)
   - `NEXT_PUBLIC_COMPANY_NAME` = `ISCIT Australia`
   - `NEXT_PUBLIC_COMPANY_EMAIL` = `iscitaustralia@gmail.com`
   - `GMAIL_USER` = `iscitaustralia@gmail.com` (your Gmail address)
   - `GMAIL_PASS` = `[your-app-password]` (Gmail App Password, not your regular password)

   **Note:** For `GMAIL_PASS`, you need to create a Gmail App Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password (not your regular Gmail password)

4. **Configure Region:**
   - The `vercel.json` file is already configured to deploy to Sydney (`syd1`)
   - Vercel will automatically use this region

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a deployment URL like `https://your-project.vercel.app`

## Custom Domain Setup

1. **Add domain in Vercel:**
   - Go to your project dashboard → Settings → Domains
   - Add your domain (e.g., `iscita.org` or `www.iscita.org`)

2. **Configure DNS:**
   - Vercel will provide DNS records to add at your domain provider
   - Add the CNAME or A records as instructed
   - DNS propagation may take a few minutes to 24 hours

3. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates via Let's Encrypt
   - HTTPS will be enabled automatically

## Environment Variables for Production

Make sure these are set in Vercel Dashboard → Settings → Environment Variables:

**Public variables (accessible in browser):**

- `NEXT_PUBLIC_SITE_URL` = `https://iscita.org`
- `NEXT_PUBLIC_COMPANY_NAME` = `ISCIT Australia`
- `NEXT_PUBLIC_COMPANY_EMAIL` = `iscitaustralia@gmail.com`

**Private variables (server-side only):**

- `GMAIL_USER` = `iscitaustralia@gmail.com`
- `GMAIL_PASS` = `[your-gmail-app-password]`

## Automatic Deployments

Once connected to GitHub, Vercel will:

- Automatically deploy every push to `main` branch (production)
- Create preview deployments for pull requests
- Deploy to Sydney region (`syd1`) as configured in `vercel.json`

## Updating the Deployment

1. **Via Git:**
   - Make your code changes locally
   - Commit and push to GitHub:

   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```

   - Vercel will automatically build and deploy

2. **Redeploy manually:**
   - Go to Vercel Dashboard → Deployments
   - Click "Redeploy" on any deployment

## Monitoring and Logs

- View deployment logs in Vercel Dashboard → Deployments → Select deployment
- View function logs in Vercel Dashboard → Functions
- Monitor performance in Vercel Dashboard → Analytics

# Google Cloud Run

## Setup project in Google Cloud Run

1. Sign in Google Cloud - login with google
2. Create a project `iscitaus` and
   - obtain the **PROJECT_ID** `iscitaus`
3. In local terminal, sign in **gcloud** (will open browser to authenticate)

```bash
gcloud auth login
```

4.  set **gcloud** project with **PROJECT_ID** `iscitaus` and enable

```bash
gcloud config set project iscitaus
gcloud services enable run.googleapis.com cloudbuild.googleapis.com
```

## Build Docker Image

at default registry `gcr.io`, under **PROJECT_ID** `iscitaus`, with **IMAGE_NAME** `iscitaus-img`

```bash
gcloud builds submit --tag gcr.io/iscitaus/iscitaus-img
```

## env vars in Cloud Run

Use `env.yaml` to inject env vars for Cloud Run Deployment. (note Cloud Run never reads `.env.production` on its own. Cloud Run deployment only recognise `--set-env-vars` / `--env-vars-file env.yaml`)

```
NEXT_PUBLIC_SITE_URL: "https://iscita.org"
NEXT_PUBLIC_COMPANY_NAME: "ISCIT Australia"
NEXT_PUBLIC_COMPANY_EMAIL: "iscitaustralia@gmail.com"
```

## Handling secrets

create secrets in Google Secret Manager

```bash
gcloud secrets create GMAIL_USER --replication-policy="automatic"
echo -n "iscitaustralia@gmail.com" | gcloud secrets versions add GMAIL_USER --data-file=-

gcloud secrets create GMAIL_PASS --replication-policy="automatic"
echo -n "abcd efgh ijkl mnop" | gcloud secrets versions add GMAIL_PASS --data-file=-
```

Grant Project access permission to secrets:

```bash
gcloud projects add-iam-policy-binding 717233646854 \
  --member="serviceAccount:717233646854-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

## Deploy Service

### option 1. use gcloud to deploy service

deploy **SERVICE** `iscitaus-serv`, with `--image`, `--region`, `--port`, `--env-vars-file`

```bash
gcloud run deploy iscitaus-serv \
   --image gcr.io/iscitaus/iscitaus-img \
   --region asia-northeast1 \
   --platform managed \
   --allow-unauthenticated \
   --port 3000 \
   --env-vars-file env.yaml \
   --set-secrets "GMAIL_USER=GMAIL_USER:latest,GMAIL_PASS=GMAIL_PASS:latest"
```

### option 2. Deploy service in Cloud Run Console (UI)

in Cloud Run web, under your project `iscitaus`, select **Service** tab

1. click on Deploy container
2. select Container image URL: select `gcr.io`, and pick your **IMAGE_NAME** `iscitaus-img`
3. enter **SERVICE** `iscitaus-serv`
4. select region **LOCATION** `asia-northeast1`
   - Note, `asia-northeast1` (Tokyo) is on Tier 1 pricing and available for domain mapping. `asia-southeast1` (Singapore) and `australia-southeast1` (Sydney) are on Tier 2 pricing. Sydney is not available for domain mapping.
5. for **Authentication** select `Allow public access`
6. click open **Container, ...** tab, and change **Container port** to **PORT** `3000`
7. In Container -> Variables & Secrets, Environmental variables, click on **Add variables** to add all environmental variables. if having secrets, click on **Reference a secret** to add a secret.
8. click on "Create" to start the **SERVICE** `iscitaus-serv`

## Domain Mapping

in Cloud Run, select Domain mapping tab,

to add a **DOMAIN** `iscita.org`

- Click on Add mapping
- Select the deployed **SERVICE** `iscitaus-serv`
- Select a verified **DOMAIN** `iscita.org`
  - for a new domain, it must be verified first
  - verify with your domain provider via web login
- Add recommended DNS Records to your domain at your domain provider

to add a **SUBDOMAIN**, e.g., `www`,

- click on "Add mapping"
- Select the **SERVICE** `iscitaus-serv`
- Select a verified **DOMAIN** `iscita.org`
- enter subdomain **SUBDOMAIN** `www`
- Add recommented DNS record to your domain at your domain provider

## SEO (Search Engine Optimization)

- In `@/app/layout.tsx` add `metadata` to include `metadataBase`, `title`, `description`, `icons`, `alternates`, `openGraph`.
- page-level `metadata`
- Structured data: add JSON-LD in `@/app/layout.tsx` as `orgSchema`
- Sitemap & robots & manifest
  - add `@/app/sitemap.ts` to serve `/sitemap.xml`, may submit `sitemap.xml` to Google Search Console
  - add `@/app/robots.ts` to serve `/robots.txt`
  - add `@/app/manifest.ts` to serve `/manifest.webmanifest`

# Update

for code updates

## Local code updates

1. update code and (optional) verify

```bash
npm run dev
npm run lint && npm run build
```

2. commit and push

```bash
git add . && git commit -m "update ..." && git push
```

## Rebuild and redeploy to Cloud Run

1. Rebuild the image

```bash
gcloud builds submit --tag gcr.io/iscitaus/iscitaus-img
```

2. Redeploy the service

```bash
gcloud run deploy iscitaus-serv \
  --image gcr.io/iscitaus/iscitaus-img \
  --region asia-northeast1 \
  --platform managed \
  --allow-unauthenticated \
  --port 3000 \
  --env-vars-file env.yaml \
  --set-secrets "GMAIL_USER=GMAIL_USER:latest,GMAIL_PASS=GMAIL_PASS:latest"
```
