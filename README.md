# Body-Lawyer
Project to create a calorie diary of food consumed


Ребят, будет реализовывать проект по подсчёту калорий и отслеживанию прогресса.
Считаю тема интересная и у нас все получится.
Я накидал необходимые файлы в проект

КАЖДОМУ СОЗДАТЬ СВОЮ ВЕТКУ
Так же я создаю ветку DEV для того, чтобы не трогать ветку MAIN, и в нее мы уже все будем пушить

Команды для правильного пользования Гитом:
/////////////////////////////////////////

1. Перед началом работы с новой задачей обязательно убедитесь, что вы находитесь на ветке master (main) и она актуальна по отношению к удаленному репозиторию (git pull)
2. Для работы с задачей создайте новую ветку от ветки master (main), т.е. находясь на ветке master (main) сделайте git checkout -b <имя-ветки>
3. Начните работать над своей фичей, находясь в этой ветке
4. Когда вы закончите работать над фичей, сделайте git add и git commit , далее обязательно сделайте git fetch => git merge origin/master
5. Если возникли конфликты, откроется файл, в котором это произошло. Решите конфликты (самостоятельно или с коллегой), далее стандартно сделайте git add => git commit , чтобы сохранить фикс конфликтов
6. Сделайте git push . Если ветку, в которой вы пишете код, вы создали локально (т.е. ее нет в удаленном репозитории), гит предложит вам сделать пуш с флагом --set-upstream. В этом случае скопируйте предложенную команду и выполните ее.
7. После этого перейдите в vs code, переключитесь на главную ветку git checkout master , далее переходите к п.1

Ключевые моменты
Чтобы не было конфликтов, обязательно проговаривайте, кто и что будет делать заранее;
Никогда не делайте прямых пушей в мастер, кроме случаев базовой настройки проекта, только через пул-реквесты;
Соблюдайте правило 1 ветка - 1 задача , не называйте ветку своим именем и не ассоциируйте её с собой, после успешного пул-реквеста удаляйте ветку, чтобы не засорять историю в гитхабе. Если то, что вы делали в ветке, сломалось, создайте новую ветку и чините это в ней, не возвращайтесь в старые ветки, если не уверены, что понимаете, как работает ребэйз, и что вы  сможете его реализовать
/////////////////////////////////////////


Парочку команд для Postgres:
1. Создание таблиц
- npx sequelize model:generate --name User --attributes name:string
- npx sequelize model:generate --name Post --attributes body:text,user_id:integer
- Донастраиваем в migrations
2. Создаем таблицы на основании миграций
- npx sequelize db:migrate
3. Удаление всех данных npx sequelize db:migrate:undo:all
4. Создание сидов npx sequelize seed:create --name User



У НАС ВСЕ ПОЛУЧИТСЯ!
