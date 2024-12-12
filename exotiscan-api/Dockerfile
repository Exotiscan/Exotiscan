FROM node:18
WORKDIR /app
ENV PORT 5000
ENV MODEL_URL 'https://storage.googleapis.com/model-exotiscan/model-in-prod/model.json'
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "start"]