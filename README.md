# moments

## About the project
A full stack application to practice my studies about Angular and Adonis JS.
[![GitHub license](https://img.shields.io/github/license/wendelcutrim/moments)](https://github.com/wendelcutrim/moments)
[![GitHub issues](https://img.shields.io/github/issues/wendelcutrim/moments)](https://github.com/wendelcutrim/moments/issues)
## Tech stack
**Backend:** Node JS, TypeScript, Adonis JS and MySQL.
**Frontend:** Angular, Typescript
## Backend
The backend server was built with Adonis JS
- Adonis JS Documentation: https://adonisjs.com/
### Environment variable
⚙️ Set the environment variables to the lucid ORM communicate with the database server and the project works!

```bash
PORT=
HOST=
NODE_ENV=
APP_KEY=
DRIVE_DISK=
DB_CONNECTION=
MYSQL_HOST=
MYSQL_PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB_NAME=
```
### Run locally
Install all the dependecies
```bash 
npm i
```

💡 **Turn on the MySQL database server**

Create the database and run all migrations
```bash
node ace migration:run
```

💡 **Turn on the Adonis JS server**
```bash
node ace serve --watch
```

### Scripts
**Dev (run locally):**
```bash
node ace serve --watch
```

**Build:**
```bash
node ace build --production
```

**Start:**
```bash
node server.js
```

### API Reference
```bash
/api/moments/
```

Return all Moments
```bash
/api/moments
```

Get a Moment
```bash
GET /api/moments/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Create a new Moment
```bash
POST /api/moments
```
| Parameter             | Type      | Description  |
| :-------------------- | :-------  | :------------|
| `title`               | `string`  | **Required** |
| `description`         | `string`  | **Required** |
| `image`               | `file`    | **Required** |

Edit a Moment
```bash
PATCH /api/moments/:id
```
| Parameter             | Type      | Description  |
| :-------------------- | :-------  | :------------|
| `id`                  | `string`  | **Required**. Id of item to fetch |
| `title`               | `string`  | **Required** |
| `description`         | `string`  | **Required** |
| `image`               | `file`    | **Required** |

Delete a Moment
```bash
DELETE /api/moments/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

Create a new Comment
```bash
POST /api/moments/:momentId/comments
```
| Parameter             | Type      | Description  |
| :-------------------- | :-------  | :------------|
| `id`                  | `string`  | **Required**. Id of item to fetch |
| `username`            | `string`  | **Required** |
| `description`         | `string`  | **Required** |

## Frontend

### Run locally

### Screenshots

## Author