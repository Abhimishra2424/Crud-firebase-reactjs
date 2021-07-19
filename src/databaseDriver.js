import { db } from "./firebase";

const collectiondata = "users";

// adding data to collection

export const addFirebaseData = (data) =>
  db.collection(collectiondata).add(data);

// getting data from firebase

export const getFirebaseData = ({ setUploadData }) => {
  const array = [];
  let item;

  db.collection(collectiondata)
    .get()
    .then((res_array) => {
      res_array.forEach((doc) => {
        item = doc.data();
        item.id = doc.id;
        array.push(item);
      });
      setUploadData(array);
    });
};

// deleting data
export const DeleteData = ({ id }) => {
  db.collection(collectiondata).doc(id).delete();
};

// get snap update data

export const getUpdateSnapData = ({ runOnUpdate }) => {
  db.collection(collectiondata).onSnapshot(() => runOnUpdate);
};
