CPSC 3750 — Solo Project 3

Production Collection Manager

Live Application

Custom Domain:
https://owenschuyler.com

HTTPS is enabled (secure connection via Render).

⸻

Domain
	•	Domain Name: owenschuyler.com
	•	Registrar: Namecheap
	•	DNS Configuration:
	•	A record (@) → 216.24.57.1 (Render IP)
	•	CNAME (www) → cpsc3750-solo3-production.onrender.com
	•	SSL certificate automatically provisioned by Render (Let’s Encrypt).

⸻

Hosting Provider
	•	Platform: Render
	•	Service Type: Web Service
	•	Region: Virginia (US East)
	•	Plan: Free tier

The application is publicly accessible with no authentication required.

⸻

Tech Stack
	•	Backend: Python (Flask)
	•	WSGI Server: Gunicorn
	•	Database: PostgreSQL
	•	Database Hosting: Render Managed Postgres
	•	Frontend: Server-rendered HTML using Jinja templates
	•	Styling: Custom CSS (no frameworks)

⸻

Database Configuration
	•	PostgreSQL database provisioned through Render
	•	Connected via the DATABASE_URL environment variable
	•	SSL mode enforced in connection logic
	•	Schema auto-created at application startup
	•	Application seeds 30+ records if the database is empty

All CRUD operations persist directly to PostgreSQL.

No credentials are stored in this repository.

⸻

Environment Variables

Managed securely through Render:
	•	DATABASE_URL — Internal Postgres connection string
	•	SECRET_KEY — Flask session secret

No secrets are committed to Git.

⸻

Build & Start Commands (Render)
Build Command: pip install -r requirements.txt
Start Command: gunicorn app:app
Deployment Workflow
	1.	Code is pushed to GitHub.
	2.	Render detects the new commit.
	3.	Render installs dependencies.
	4.	Render redeploys automatically.
	5.	Application becomes available at the custom domain.

Manual deploys can also be triggered from the Render dashboard.

⸻

Updating the Application

To deploy changes:
git add .
git commit -m "Update feature"
git push
Render rebuilds and redeploys automatically (or manually via dashboard).
