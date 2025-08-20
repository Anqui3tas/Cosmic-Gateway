# Protecting Athena App

To restrict access to `/athena-app` on shared hosting:

1. Create a password file via cPanel or command line:
```bash
htpasswd -c /home/<cpaneluser>/.htpasswds/public_html/athena-app/passwd username
```
2. Place this `.htaccess` inside `/athena-app`:
```apache
AuthType Basic
AuthName "Restricted"
AuthUserFile /home/<cpaneluser>/.htpasswds/public_html/athena-app/passwd
Require valid-user
```
3. Upload the private app files into `/athena-app`.