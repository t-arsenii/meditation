
import multer from 'multer';
import mongoose from 'mongoose';
import gridfs from 'gridfs-stream';

const connection = mongoose.connection;
gridfs.mongo = mongoose.mongo;

let gfs;

connection.once('open', () => {
  gfs = gridfs(connection.db);
});

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

export { upload, gfs };

