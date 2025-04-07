FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install flask
ENV APP_ENV=development
EXPOSE 5000
CMD ["python", "app.py"]
