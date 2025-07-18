
# Använd en liten nginx-bild
FROM nginx:alpine

# Ta bort default-konfig för nginx
RUN rm /etc/nginx/conf.d/default.conf

# Lägg till vår egen konfig
COPY nginx.conf /etc/nginx/conf.d/

# Kopiera HTML-filen till rätt katalog
COPY index.html /usr/share/nginx/html/index.html
