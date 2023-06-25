# FROM — задає базовий образ.
FROM node
# WORKDIR — задає роботу папку для для наступних інструкції
WORKDIR /app
# LABEL — описує метаданні. Наприклад — дані про те, хто створив і підтримує образ.
# ENV — встановлює постійні змінні оточення.
# COPY — копіює в контейнер файли і папки.
COPY . .

# RUN — виконує команду створює шар образа. Використовується для встановлення в контейнер пакетів.
RUN npm install

# ADD — копіює файли і папки в контейнер, може распаковувати локальні .tar-файли.
# ARG — створює змінні для передачі в Docker під час збирання образу.
# ENTRYPOINT — надає команду з аргументами для виклику під час виконання контейнера. Аргументи не перевизначаються.
# EXPOSE — вказує, що необхідновідкрити порт.
EXPOSE 3000
# VOLUME — створює точку монтування для работи з постійним сховищем.
# CMD — описує команду з аргументами, яку необхідно виконати коли контейнер будет запущено. 
# Аргументи можуть бути перевизначені при запуску контейнера. В файлі може бути присутнім лише одна інструкція CMD.
CMD ["node", "./server.js"]