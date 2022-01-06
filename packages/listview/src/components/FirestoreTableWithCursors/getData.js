
const getData = (docs) => docs.map((doc) => ({ id: doc.id, ...doc.data() }));
export default getData;