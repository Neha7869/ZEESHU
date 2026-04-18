# Restaurant Reservation Backend

A Node.js/Express backend for restaurant table reservations.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Validation:** Validator

## Installation

```bash
cd Backend
npm install
```

## Configuration

Create a `.env` file in the `config` folder:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server (with nodemon) |

## API Endpoints

- `POST /api/v1/reservation` - Create a new reservation

## License
ISC