DEPLOYMENT.md
Domain
	•	Domain Name: owenschuyler.com
	•	Registrar: Namecheap
	•	DNS Configuration:
	•	A record (@) → 216.24.57.1 (Render IP)
	•	CNAME (www) → cpsc3750-solo3-production.onrender.com
	•	HTTPS is enabled automatically via Render (Let’s Encrypt).

⸻

Hosting Provider
	•	Platform: Render
	•	Service Type: Web Service
	•	Region: Virginia (US East)
	•	Free tier instance

The application is publicly accessible at:

https://owenschuyler.com

⸻

Tech Stack
	•	Backend: Python (Flask)
	•	WSGI Server: Gunicorn
	•	Database: PostgreSQL
	•	Database Hosting: Render Managed Postgres
	•	Frontend: Server-rendered HTML (Jinja templates)
	•	Styling: Custom CSS (no frameworks)

⸻

Database Configuration
	•	PostgreSQL database created via Render
	•	Connected using DATABASE_URL environment variable
	•	SSL mode enforced via connection parsing
	•	Schema auto-created at startup
	•	Application seeds 30+ records if database is empty

No credentials are stored in the repository.

⸻

Environment Variables

Secrets are managed via Render environment variables:
	•	DATABASE_URL → Internal Postgres connection string
	•	SECRET_KEY → Randomly generated secret key for Flask sessions

Build & Start Commands (Render)

Build Command: pip install -r requirements.txt
Start Command: gunicorn app:app

Deployment Workflow
	1.	Code is pushed to GitHub.
	2.	Render automatically detects new commits.
	3.	Render installs dependencies and redeploys.
	4.	Service becomes available at the custom domain.

Updating the Application

To deploy updates: git add .
git commit -m "Update feature"
git push

Render automatically rebuilds and redeploys the application or you can manually deploy the new application from render. 